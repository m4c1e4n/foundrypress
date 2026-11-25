import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';
const distDir = path.resolve(__dirname, 'dist');
const isProduction =
  process.env.NODE_ENV === 'production' ||
  (process.env.NODE_ENV !== 'development' && fs.existsSync(path.join(distDir, 'index.html')));

const BLOCKED_HEADERS = new Set(['x-powered-by', 'server', 'x-runtime', 'x-version']);

async function startServer() {
  const app = express();

  // Disable Express default X-Powered-By header and trust proxy settings cleanly
  app.disable('x-powered-by');
  app.set('etag', true);

  // Strip server-identifying headers across all responses (including middleware and errors)
  app.use((_req: Request, res: Response, next: NextFunction) => {
    for (const header of BLOCKED_HEADERS) {
      res.removeHeader(header);
    }

    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

    const originalSetHeader = res.setHeader.bind(res);
    res.setHeader = ((name: string, value: number | string | readonly string[]) => {
      if (BLOCKED_HEADERS.has(name.toLowerCase())) {
        return res;
      }
      return originalSetHeader(name, value);
    }) as typeof res.setHeader;

    const originalAppendHeader = res.appendHeader.bind(res);
    res.appendHeader = ((name: string, value: string | readonly string[]) => {
      if (BLOCKED_HEADERS.has(name.toLowerCase())) {
        return res;
      }
      return originalAppendHeader(name, value);
    }) as typeof res.appendHeader;

    const originalWriteHead = res.writeHead.bind(res);
    res.writeHead = ((statusCode: number, ...args: unknown[]) => {
      for (const header of BLOCKED_HEADERS) {
        res.removeHeader(header);
      }
      for (const arg of args) {
        if (arg && typeof arg === 'object' && !Array.isArray(arg)) {
          const headersObj = arg as Record<string, unknown>;
          for (const key of Object.keys(headersObj)) {
            if (BLOCKED_HEADERS.has(key.toLowerCase())) {
              delete headersObj[key];
            }
          }
        }
      }
      return (originalWriteHead as (...rest: unknown[]) => Response)(statusCode, ...args);
    }) as typeof res.writeHead;

    next();
  });

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
  });

  if (isProduction) {
    app.use(
      express.static(distDir, {
        index: 'index.html',
        etag: true,
      })
    );

    app.get('*', (req: Request, res: Response) => {
      if (req.path.startsWith('/api/')) {
        res.status(404).json({ error: 'Not Found' });
        return;
      }
      res.sendFile(path.join(distDir, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    app.use(vite.middlewares);
  }

  // Error handler that avoids leaking stack traces or framework versions
  app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.error('Unhandled server error:', err instanceof Error ? err.message : 'Unknown error');
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  const server = app.listen(PORT, HOST, () => {
    console.log(`Web server listening on http://${HOST}:${PORT}`);
  });

  // Ensure Node HTTP server does not expose default Keep-Alive or header metadata unnecessarily
  server.headersTimeout = 60_000;
}

startServer().catch((err) => {
  console.error('Failed to start server:', err instanceof Error ? err.message : 'Unknown error');
  process.exit(1);
});
