import React from 'react';
import { subjects, lessons, quizzes } from '../data/mockData';
import SubjectCard from '../components/SubjectCard';
import LessonCard from '../components/LessonCard';
import QuizCard from '../components/QuizCard';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">My Dashboard</h1>
        
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">My Subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map(subject => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map(lesson => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Quizzes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map(quiz => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}