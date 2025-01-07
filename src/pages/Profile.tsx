import React from 'react';
import { 
  Trophy, 
  GraduationCap, 
  Clock, 
  Award,
  BookOpen,
  Star
} from 'lucide-react';
import { currentStudent } from '../data/mockData';

export default function Profile() {
  const achievements = [
    { id: 1, title: 'Perfect Attendance', icon: Clock, description: '30 days streak', date: '2024-03-01' },
    { id: 2, title: 'Quiz Master', icon: Award, description: 'Completed 50 quizzes', date: '2024-02-15' },
    { id: 3, title: 'Knowledge Seeker', icon: BookOpen, description: 'Watched 100 video lessons', date: '2024-01-20' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header/Banner */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-32"></div>
          
          {/* Profile Info */}
          <div className="px-8 pb-8">
            <div className="flex flex-col sm:flex-row items-center -mt-16">
              <img 
                src={currentStudent.avatar} 
                alt={currentStudent.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                <h1 className="text-2xl font-bold text-white">{currentStudent.name}</h1>
                <div className="flex items-center justify-center sm:justify-start mt-2">
                  <GraduationCap className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-600">{currentStudent.grade}</span>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-auto flex items-center bg-yellow-50 px-4 py-2 rounded-full">
                <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="font-semibold text-yellow-700">{currentStudent.points} Points</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-indigo-500" />
                  <span className="ml-2 text-lg font-semibold text-gray-900">Average Score</span>
                </div>
                <p className="mt-2 text-3xl font-bold text-indigo-600">92%</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-green-500" />
                  <span className="ml-2 text-lg font-semibold text-gray-900">Lessons Completed</span>
                </div>
                <p className="mt-2 text-3xl font-bold text-green-600">156</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center">
                  <Trophy className="h-6 w-6 text-purple-500" />
                  <span className="ml-2 text-lg font-semibold text-gray-900">Quizzes Taken</span>
                </div>
                <p className="mt-2 text-3xl font-bold text-purple-600">48</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map(achievement => {
                  const Icon = achievement.icon;
                  return (
                    <div key={achievement.id} className="bg-gray-50 rounded-lg p-4 flex items-start">
                      <div className="flex-shrink-0">
                        <Icon className="h-6 w-6 text-indigo-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">{achievement.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{achievement.description}</p>
                        <p className="mt-1 text-xs text-gray-400">{new Date(achievement.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}