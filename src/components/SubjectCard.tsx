import React from 'react';
import { BookOpen } from 'lucide-react';
import { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${subject.color}`}>
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <span className="text-sm font-medium text-gray-500">{subject.teacher}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{subject.name}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${subject.color}`} 
          style={{ width: `${subject.progress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-gray-600">{subject.progress}% Complete</p>
    </div>
  );
}