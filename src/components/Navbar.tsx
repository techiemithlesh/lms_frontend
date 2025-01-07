import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, BookOpen, Home, PlayCircle, Trophy, BookOpenCheck, User } from 'lucide-react';
import { currentStudent } from '../data/mockData';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PLURALECT</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className={`${isActive('/') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                <Home className="h-4 w-4 mr-1" />
                Dashboard
              </Link>
              <Link to="/subjects" className={`${isActive('/subjects') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                <BookOpenCheck className="h-4 w-4 mr-1" />
                Subjects
              </Link>
              <Link to="/quizzes" className={`${isActive('/quizzes') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                <Trophy className="h-4 w-4 mr-1" />
                Quizzes
              </Link>
              <Link to="/play-earn" className={`${isActive('/play-earn') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                <PlayCircle className="h-4 w-4 mr-1" />
                Play & Earn
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
              <Bell className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <Trophy className="h-5 w-5 text-yellow-500 mr-1" />
              <span className="text-sm font-medium text-gray-700">{currentStudent.points} pts</span>
            </div>
            <Link to="/profile" className="flex items-center">
              <img className="h-8 w-8 rounded-full" src={currentStudent.avatar} alt="" />
              <User className="h-4 w-4 text-gray-400 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}