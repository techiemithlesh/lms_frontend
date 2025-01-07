import { Lesson, Quiz, Subject, Student } from '../types';

export const currentStudent: Student = {
  id: '1',
  name: 'Narendra Modi',
  avatar: 'https://imgs.search.brave.com/P64D-CVR6vyP67GnTRNRhPPJFA_AdCtmgTAvk6NOGIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTc3/Mjk2MDIvcGhvdG8v/bmV3LWRlbGhpLWlu/ZGlhLWNvbmdyZXNz/LWxlYWRlci1yYWh1/bC1nYW5kaGktYXQt/dGhlLXNlY29uZC1k/YXktb2YtdGhlLWlu/ZGlhLXRvZGF5LWNv/bmNsYXZlLWluLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Q/eW5URFVteGFENUFN/YzNySHdBTkYxQ1E0/VmlWNnBFRkk1Y0RI/cXN1ZzdRPQ',
  grade: '10th Grade',
  points: 2500,
  email: ""
};

export const subjects: Subject[] = [
  { id: '1', name: 'Mathematics', teacher: 'Dr. Smith', progress: 75, color: 'bg-blue-500' },
  { id: '2', name: 'Physics', teacher: 'Mrs. Johnson', progress: 60, color: 'bg-purple-500' },
  { id: '3', name: 'Chemistry', teacher: 'Mr. Davis', progress: 85, color: 'bg-green-500' },
  { id: '4', name: 'Biology', teacher: 'Ms. Wilson', progress: 70, color: 'bg-yellow-500' }
];

export const lessons: Lesson[] = [
  {
    id: '1',
    title: 'Introduction to Calculus',
    type: 'video',
    url: 'https://example.com/video1',
    duration: '45:00',
    subject: 'Mathematics',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400'
  },
  {
    id: '2',
    title: 'Understanding Chemical Bonds',
    type: 'article',
    url: 'https://example.com/article1',
    subject: 'Chemistry',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400'
  }
];

export const quizzes: Quiz[] = [
  {
    id: '1',
    title: 'Daily Math Challenge',
    type: 'daily',
    subject: 'Mathematics',
    duration: '30 mins',
    totalQuestions: 20,
    dueDate: '2024-03-20'
  },
  {
    id: '2',
    title: 'Weekly Physics Review',
    type: 'weekly',
    subject: 'Physics',
    duration: '60 mins',
    totalQuestions: 40,
    dueDate: '2024-03-25'
  }
];