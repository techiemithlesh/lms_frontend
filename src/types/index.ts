export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'article';
  url: string;
  duration?: string;
  subject: string;
  thumbnail?: string;
}

export interface Quiz {
  id: string;
  title: string;
  type: 'daily' | 'weekly' | 'monthly';
  subject: string;
  duration: string;
  totalQuestions: number;
  dueDate: string;
}

export interface Subject {
  id: string;
  name: string;
  teacher: string;
  progress: number;
  color: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  grade: string;
  points: number;
}