import React from 'react';
import { subjects, lessons } from '../data/mockData';
import SubjectCard from '../components/SubjectCard';
import LessonCard from '../components/LessonCard';

export default function Subjects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">My Subjects</h1>
        
        {subjects.map(subject => (
          <section key={subject.id} className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">{subject.name}</h2>
              <span className="text-sm text-gray-500">Instructor: {subject.teacher}</span>
            </div>
            
            <div className="mb-8">
              <SubjectCard subject={subject} />
            </div>
            
            <h3 className="text-lg font-medium text-gray-900 mb-4">Latest Lessons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons
                .filter(lesson => lesson.subject === subject.name)
                .map(lesson => (
                  <LessonCard key={lesson.id} lesson={lesson} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}