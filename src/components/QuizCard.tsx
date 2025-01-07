import { Clock, Calendar } from 'lucide-react';
import { Quiz } from '../types';
import { Link } from 'react-router-dom';

interface QuizCardProps {
  quiz: Quiz;
  isProctored?: boolean;
}

export default function QuizCard({ quiz, isProctored = false }: QuizCardProps) {
  return (
    <Link to={`/quiz/1`} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            quiz.type === 'daily' ? 'bg-green-100 text-green-800' :
            quiz.type === 'weekly' ? 'bg-blue-100 text-blue-800' :
            'bg-purple-100 text-purple-800'
          }`}>
            {quiz.type.charAt(0).toUpperCase() + quiz.type.slice(1)}
          </span>
          {isProctored && (
            <span className="ml-2 px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Proctored
            </span>
          )}
        </div>
        <div className="flex items-center text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-sm">{quiz.duration}</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{quiz.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{quiz.subject}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="text-sm">Due: {new Date(quiz.dueDate).toLocaleDateString()}</span>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
          Start Quiz
        </button>
      </div>
    </Link>
  );
}