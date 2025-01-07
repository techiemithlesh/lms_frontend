import React from 'react';
import { PlayCircle, Link as LinkIcon } from 'lucide-react';
import { Lesson } from '../types';
import { Link } from 'react-router-dom';

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  return (
    <Link to={`/lecture/1`} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={lesson.thumbnail} 
        alt={lesson.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          {lesson.type === 'video' ? (
            <PlayCircle className="h-5 w-5 text-red-500" />
          ) : (
            <LinkIcon className="h-5 w-5 text-blue-500" />
          )}
          <span className="ml-2 text-sm font-medium text-gray-500 capitalize">
            {lesson.type} • {lesson.subject}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{lesson.title}</h3>
        {lesson.duration && (
          <p className="text-sm text-gray-600">Duration: {lesson.duration}</p>
        )}
      </div>
    </Link>
  );
}