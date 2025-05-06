export type ContentPart = 
  | { type: 'text'; text: string; }
  | { type: 'image'; image: string; }

export type Message = {
  id: string;
  role: 'system' | 'user' | 'assistant';
  content: string | Array<ContentPart>;
  timestamp: number;
  liked?: boolean;
  disliked?: boolean;
  read?: boolean;
  feedback?: string; // Optional feedback from the user
};

export type ChatSession = {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
  topics?: string[]; // Topics detected in this conversation
  suggestedResources?: string[]; // IDs of resources that might be relevant
  summary?: string; // AI-generated summary of the conversation
};

export type ChatSettings = {
  fontSize: 'small' | 'medium' | 'large';
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  saveHistory: boolean;
  suggestResources: boolean;
};