import { ServiceItem, ProcessStep, BookCategory, DeliverableItem, FAQItem } from '../types';

export const HERO_CONTENT = {
  headline: "Every story deserves a book.",
  subheadline: "We transform your ideas, experiences and expertise into professionally published books.",
  tagline: "From Voice to Volume.",
  primaryCTA: "Book a Free Consultation",
  secondaryCTA: "Discover How It Works"
};

export const WHO_WE_ARE_CONTENT = {
  title: "Preserving Stories That Matter",
  bodyParagraph1: "Every person carries a lifetime of unique wisdom, hard-won insights, and unforgettable moments. Yet too often, these priceless narratives remain trapped in thought or fade away in unspoken conversations.",
  bodyParagraph2: "At Foundry Press, we believe that writing a book should not be an overwhelming obstacle. You don't need to spend years behind a keyboard or master literary craftsmanship. We turn your spoken memories, expertise, and personal ethos into a beautifully crafted, hardcover book that stands the test of time.",
  closingStatement: "You speak. We handle the rest."
};

export const SERVICES: ServiceItem[] = [
  {
    id: "story-development",
    title: "Story Development",
    shortDescription: "Defining your narrative arc, core thesis, and structural outline.",
    fullDescription: "Before recording begins, our senior editorial strategists work with you to shape your raw ideas into a compelling table of contents and narrative framework tailored to your target readers.",
    deliverables: ["Comprehensive Chapter Outline", "Target Audience Profile", "Core Message & Theme Blueprint"],
    duration: "2-3 Weeks"
  },
  {
    id: "voice-recording",
    title: "Voice Recording",
    shortDescription: "Guided, comfortable interviews conducted in-person or via secure remote studio.",
    fullDescription: "Our skilled interviewers lead you through structured, comfortable conversations. No writing required—just speak naturally while we record high-fidelity audio.",
    deliverables: ["Studio-Quality Audio Stems", "Verbatim Master Transcripts", "Structured Q&A Archive"],
    duration: "3-5 Session Weeks"
  },
  {
    id: "manuscript-creation",
    title: "Manuscript Creation",
    shortDescription: "Expert ghostwriting that captures your distinct tone, rhythm, and authentic vocabulary.",
    fullDescription: "Our literary ghostwriters craft your spoken words into clean, engaging prose, preserving your authentic personality, cadence, and unique storytelling voice.",
    deliverables: ["Complete Initial Manuscript Draft", "Voice Consistency Review", "Executive Summary Notes"],
    duration: "6-8 Weeks"
  },
  {
    id: "professional-editing",
    title: "Professional Editing",
    shortDescription: "Rigorous developmental editing, line editing, and painstaking proofreading.",
    fullDescription: "A multi-stage editorial pass ensuring logical flow, grammatical precision, thematic coherence, and publication-ready standards.",
    deliverables: ["Developmental Edit Pass", "Line-by-Line Polish", "Final Proofreading Certificate"],
    duration: "3-4 Weeks"
  },
  {
    id: "book-design",
    title: "Book Design",
    shortDescription: "Bespoke cover artistry, custom typography, and interior typesetting.",
    fullDescription: "Custom jacket artwork, hand-selected typography, and meticulous interior page layout designed to match the caliber of legacy publishing houses.",
    deliverables: ["Custom Hardcover & Paperback Jackets", "Typeset Interior Spreads", "Custom Title Page & Endpapers"],
    duration: "2-3 Weeks"
  },
  {
    id: "publishing",
    title: "Publishing",
    shortDescription: "Complete catalog setup, copyright registration, and global distribution logistics.",
    fullDescription: "We manage all technical publishing logistics: ISBN assignment, Library of Congress filing, copyright protection, and setup across major retail networks.",
    deliverables: ["Official ISBN & Barcode", "Copyright & LCCN Registration", "Global Distribution Setup"],
    duration: "1-2 Weeks"
  },
  {
    id: "printing",
    title: "Printing",
    shortDescription: "Museum-grade hardcovers, cloth bindings, foil stamping, and archival paper.",
    fullDescription: "Printed on premium acid-free paper stock with foil-stamped cloth bindings, dust jackets, and ribbon markers built to endure for generations.",
    deliverables: ["Archival Printed Hardcovers", "Softcover Editions", "Print-Ready Master PDF Archives"],
    duration: "2-3 Weeks"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Consultation",
    shortDescription: "We discuss your vision, target audience, and foundational goals for your manuscript.",
    detailText: "In our initial 45-minute consultation, we explore the core themes of your book, your ideal timeline, and how you want your finished volume to serve your family or legacy."
  },
  {
    stepNumber: 2,
    title: "Planning",
    shortDescription: "We construct your master roadmap, chapter outline, and interview calendar.",
    detailText: "Our editorial team curates a custom interview blueprint mapping every key chapter, anecdote, and milestone to ensure zero wasted effort."
  },
  {
    stepNumber: 3,
    title: "Recording",
    shortDescription: "You speak naturally during guided, conversational interview sessions.",
    detailText: "Relax as our experienced interviewer guides you through 6 to 12 recorded conversation sessions, asking insightful questions that draw out your rich stories."
  },
  {
    stepNumber: 4,
    title: "Transcription",
    shortDescription: "We convert your audio into indexed, verbatim text transcripts.",
    detailText: "High-accuracy transcription specialists organize and timestamp your audio files so our authors can reference every exact phrase and nuance."
  },
  {
    stepNumber: 5,
    title: "Writing & Editing",
    shortDescription: "Our master ghostwriters shape your spoken words into publication-grade prose.",
    detailText: "We transform transcriptions into structured chapters, refining sentence structure while meticulously preserving your personal tone and speech patterns."
  },
  {
    stepNumber: 6,
    title: "Review",
    shortDescription: "You evaluate chapter drafts with full creative control and revision passes.",
    detailText: "You receive draft sections to review at your own pace. Provide notes or voice memos, and we adjust the text until every word meets your exact vision."
  },
  {
    stepNumber: 7,
    title: "Design",
    shortDescription: "We custom craft your book cover, typography, and interior page layout.",
    detailText: "Our book designers craft bespoke cover concepts and elegant interior typography, creating a volume that feels distinguished on any bookshelf."
  },
  {
    stepNumber: 8,
    title: "Print & Delivery",
    shortDescription: "Your finished hardcovers and digital editions are printed and delivered to your door.",
    detailText: "We oversee press runs using archival acid-free paper and foil-embossed covers, delivering beautifully boxed author copies directly to your home."
  }
];

export const BOOK_CATEGORIES: BookCategory[] = [
  {
    id: "memoirs",
    name: "Memoirs",
    description: "Personal life journeys, pivotal decisions, and transformative milestones.",
    typicalLength: "150 – 250 Pages",
    targetAudience: "Family members, friends, and general biographical readers",
    exampleTopics: ["Overcoming Early Adversity", "Reflections on a Dual Career", "Lessons Across Decades"]
  },
  {
    id: "autobiographies",
    name: "Autobiographies",
    description: "Comprehensive chronologies documenting a complete lifetime of accomplishment.",
    typicalLength: "200 – 350 Pages",
    targetAudience: "Future generations, archives, and historical enthusiasts",
    exampleTopics: ["Ancestral Roots to Present Day", "Life in Service & Industry", "Reflections of a Century"]
  },
  {
    id: "business-books",
    name: "Business Books",
    description: "Market methodologies, strategic frameworks, and entrepreneurial insights.",
    typicalLength: "140 – 220 Pages",
    targetAudience: "Clients, industry peers, investors, and ambitious professionals",
    exampleTopics: ["Scaling Beyond $100M", "Customer First Architecture", "Disrupting Traditional Logistics"]
  },
  {
    id: "leadership-books",
    name: "Leadership Books",
    description: "Management philosophies, team alignment principles, and organizational culture.",
    typicalLength: "120 – 200 Pages",
    targetAudience: "Executive teams, managers, and emerging leaders",
    exampleTopics: ["Leading Through Crisis", "The Empathetic Boardroom", "Culture as a Competitive Advantage"]
  },
  {
    id: "self-help-books",
    name: "Self-Help Books",
    description: "Actionable frameworks for personal growth, wellness, and mental clarity.",
    typicalLength: "130 – 220 Pages",
    targetAudience: "Individuals seeking personal transformation and practical guidance",
    exampleTopics: ["Mastering Daily Routine", "Emotional Resiliency", "Designing a Purposeful Second Act"]
  },
  {
    id: "faith-based-books",
    name: "Faith-Based Books",
    description: "Spiritual journeys, devotions, core values, and ministry experiences.",
    typicalLength: "120 – 200 Pages",
    targetAudience: "Faith communities, congregations, and seekers of spiritual depth",
    exampleTopics: ["Walks of Faith in Hard Times", "Ministering to the Workplace", "Grace in Everyday Moments"]
  },
  {
    id: "childrens-books",
    name: "Children's Books",
    description: "Illustrated moral tales, bedtime stories, and family allegories.",
    typicalLength: "24 – 48 Pages",
    targetAudience: "Children, parents, and grandchildren",
    exampleTopics: ["Grandpa's Enchanted Forest", "The Brave Little Lighthouse", "Lessons from the Backyard"]
  },
  {
    id: "family-histories",
    name: "Family Histories",
    description: "Multi-generational genealogical records, oral traditions, and heirloom archives.",
    typicalLength: "180 – 300 Pages",
    targetAudience: "Descendants, extended family reunions, and local historical societies",
    exampleTopics: ["Immigration & Settlement Stories", "The Century-Old Family Homestead", "Letters & Keepsakes"]
  },
  {
    id: "corporate-history",
    name: "Corporate History Books",
    description: "Commemorative volumes marking company centennials, mergers, and founding sagas.",
    typicalLength: "150 – 280 Pages",
    targetAudience: "Shareholders, employees, clients, and corporate archives",
    exampleTopics: ["From Garage Startup to Industry Pillar", "50 Years of Manufacturing Excellence"]
  },
  {
    id: "coffee-table-books",
    name: "Coffee Table Books",
    description: "Visually rich, large-format hardcovers pairing high-resolution imagery with brief essays.",
    typicalLength: "160 – 260 Pages",
    targetAudience: "Art collectors, design lovers, and luxury gift recipients",
    exampleTopics: ["A Lifetime Architectural Portfolio", "The Private Art Collection", "Expeditions Across Seven Continents"]
  },
  {
    id: "poetry-collections",
    name: "Poetry Collections",
    description: "Collected verses, lyrical reflections, and curated poetic anthologies.",
    typicalLength: "80 – 140 Pages",
    targetAudience: "Literary enthusiasts and poetry connoisseurs",
    exampleTopics: ["Sonnet Variations on Nature", "Urban Elegies", "Reflections on Time & Solitude"]
  },
  {
    id: "educational-books",
    name: "Educational Books",
    description: "Domain knowledge, instructional texts, and specialized subject guides.",
    typicalLength: "160 – 260 Pages",
    targetAudience: "Students, practitioners, and continuing education programs",
    exampleTopics: ["Modern Estate Planning Principles", "Precision Agriculture Manual", "A Guide to Rare Books"]
  },
  {
    id: "training-manuals",
    name: "Training Manuals",
    description: "Standard operating procedures, institutional onboarding, and master playbooks.",
    typicalLength: "100 – 200 Pages",
    targetAudience: "New hires, franchise operators, and technical staff",
    exampleTopics: ["Operations Playbook 2026", "Hospitality Service Standards", "Safety Protocol Guide"]
  },
  {
    id: "journals-workbooks",
    name: "Journals & Workbooks",
    description: "Interactive reflection guides, daily prompts, and goal-setting logs.",
    typicalLength: "120 – 180 Pages",
    targetAudience: "Workshop participants, coaching clients, and self-directed learners",
    exampleTopics: ["90-Day Mindful Leadership Journal", "Financial Freedom Workbook", "Legacy Reflection Guide"]
  },
  {
    id: "biographies",
    name: "Biographies",
    description: "In-depth historical portraits written about iconic figures, founders, or leaders.",
    typicalLength: "220 – 380 Pages",
    targetAudience: "General non-fiction readers, scholars, and biographical enthusiasts",
    exampleTopics: ["The Architect of Modern Transit", "Pioneer in Aviation", "A Pioneer's Century"]
  }
];

export const DELIVERABLES: DeliverableItem[] = [
  {
    id: "edited-manuscript",
    title: "Edited Manuscript",
    description: "Clean, polished text in multiple digital formats (.docx, .pdf) ready for publication.",
    isHighlight: true
  },
  {
    id: "proofreading",
    title: "Professional Proofreading",
    description: "Rigorous typographical checks ensuring pristine spelling, grammar, and punctuation."
  },
  {
    id: "custom-cover",
    title: "Custom Cover Design",
    description: "Bespoke front, spine, and back cover jacket artwork crafted by seasoned book artists.",
    isHighlight: true
  },
  {
    id: "interior-layout",
    title: "Interior Layout & Typesetting",
    description: "Custom typography, margins, chapter headings, and running headers designed for effortless reading."
  },
  {
    id: "print-files",
    title: "Print-Ready Files",
    description: "High-resolution PDF files formatted precisely to offset and digital printer specifications."
  },
  {
    id: "ebook-formatting",
    title: "Ebook Formatting",
    description: "Reflowable EPUB and Kindle files compatible with Apple Books, Amazon Kindle, and Kobo."
  },
  {
    id: "isbn-support",
    title: "ISBN & Copyright Support",
    description: "Official ISBN registration under your name or imprint with full copyright documentation.",
    isHighlight: true
  },
  {
    id: "printed-copies",
    title: "Premium Printed Copies",
    description: "Hardcover or softcover author copies printed on archival acid-free paper stock with foil stamping."
  },
  {
    id: "marketing-materials",
    title: "Marketing Materials",
    description: "Digital promotional kit including book mockups, press release template, and author bio sheet."
  }
];

export const WHY_WRITE_A_BOOK_CONTENT = {
  heading: "A book is more than pages",
  subheading: "It is your legacy bound in cloth and ink—a permanent testament to your wisdom, voice, and achievements.",
  reasons: [
    {
      title: "Enduring Legacy",
      description: "Spoken stories drift away with time, but a bound book endures for generations, preserving your voice and personal history for children and grandchildren."
    },
    {
      title: "Unquestioned Authority",
      description: "Authoring a definitive volume instantly elevates your professional reputation, establishing you as a thought leader and key authority in your field."
    },
    {
      title: "Clarity of Thought",
      description: "The process of organizing your life experiences into a structured manuscript yields profound personal clarity, revealing patterns and achievements."
    },
    {
      title: "Generational Gift",
      description: "Give your family, colleagues, or industry a tangible heirloom that carries your core principles and hard-earned values into the future."
    }
  ]
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do I need to write the manuscript myself?",
    answer: "No, you do not need to write a single word. Our process is designed specifically around your spoken voice. Through comfortable, structured interview sessions, you simply tell your stories and share your ideas. Our master ghostwriters and editors turn those recordings into a beautifully written manuscript."
  },
  {
    id: "faq-2",
    question: "Will the book sound like me?",
    answer: "Yes, preserving your unique voice is our primary obsession. We analyze your natural cadence, favorite phrases, and storytelling style during our interview phase. The resulting manuscript reads as if you sat down and penned every page yourself."
  },
  {
    id: "faq-3",
    question: "Can I approve the manuscript?",
    answer: "You maintain 100% creative control. You will review initial outlines, chapter drafts, and cover designs at every step. Nothing proceeds to layout or press without your explicit written approval."
  },
  {
    id: "faq-4",
    question: "How long does the process take?",
    answer: "A typical project takes between 3 to 6 months from your initial consultation call to holding the physical printed books in your hands. We set a predictable timeline that comfortably respects your schedule."
  },
  {
    id: "faq-5",
    question: "Can I print additional copies later?",
    answer: "Yes. We archive all master print files in perpetuity. Whether you need 10 additional copies for new family members or 5,000 copies for a keynote conference, you can reorder anytime at author-direct printing rates."
  },
  {
    id: "faq-6",
    question: "Do you publish ebooks?",
    answer: "Yes. In addition to premium hardcover and paperback physical editions, every book we produce is expertly formatted as a reflowable EPUB file, ready for Amazon Kindle, Apple Books, and all major digital e-readers."
  }
];

export const AUDIO_DEMO_SAMPLE = {
  title: "From Voice to Page: A Live Preview",
  audioSnippet: "“My father used to say that a true craftsman measures three times before touching the wood. I didn't understand what he meant until our first winter in the foundry back in '78...”",
  writtenManuscript: "My father possessed a quiet reverence for precision. 'A true craftsman measures three times before touching the wood,' he would remind me, wiping sawdust from his weathered apron. I failed to grasp the depth of his philosophy until our first winter at the foundry in 1978, when a single misplaced calculation nearly halted our entire production..."
};
