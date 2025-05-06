export type UserProfile = {
  id: string;
  name: string;
  avatar?: string;
  interests: string[];
  completedQuizzes: string[];
  savedResources: string[];
  assessmentResults: AssessmentResult[];
  settings: UserSettings;
};

export type AssessmentResult = {
  assessmentId: string;
  date: number;
  score: number;
  areas: {
    [key: string]: number;
  };
};

export type UserSettings = {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  language: string;
  fontSize: 'small' | 'medium' | 'large';
};