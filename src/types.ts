export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  duration: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  shortDescription: string;
  detailText: string;
}

export interface BookCategory {
  id: string;
  name: string;
  description: string;
  typicalLength: string;
  targetAudience: string;
  exampleTopics: string[];
}

export interface DeliverableItem {
  id: string;
  title: string;
  description: string;
  isHighlight?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  bookCategory: string;
  timeline: string;
  notes: string;
}
