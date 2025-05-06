export type ResourceType = 'article' | 'video' | 'course' | 'tool' | 'story' | 'case-study';

export type Resource = {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  url: string;
  imageUrl?: string;
  tags: string[];
  createdAt: number;
  readTime?: number; // in minutes
  content?: string; // Added content field for articles
};

export type Quiz = {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export type Assessment = {
  id: string;
  title: string;
  description: string;
  questions: AssessmentQuestion[];
};

export type AssessmentQuestion = {
  id: string;
  question: string;
  options: string[];
  weights: number[]; // Weight for each option
};