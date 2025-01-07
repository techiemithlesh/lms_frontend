import React, { useState } from 'react';
import { Camera, Shield } from 'lucide-react';
import QuizCard from '../components/QuizCard';
import { quizzes } from '../data/mockData';

export default function PlayEarn() {
  const [cameraEnabled, setCameraEnabled] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Play & Earn</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-600">AI Proctored</span>
            </div>
            <button
              onClick={() => setCameraEnabled(!cameraEnabled)}
              className={`flex items-center px-4 py-2 rounded-md ${
                cameraEnabled 
                  ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              <Camera className="h-5 w-5 mr-2" />
              {cameraEnabled ? 'Disable Camera' : 'Enable Camera'}
            </button>
          </div>
        </div>

        {cameraEnabled && (
          <div className="mb-8">
            <div className="bg-black rounded-lg aspect-video max-w-md mx-auto">
              <video
                className="w-full h-full rounded-lg"
                autoPlay
                muted
                playsInline
              ></video>
            </div>
          </div>
        )}

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <Shield className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Camera access is required for AI proctoring. Earn extra points by completing proctored quizzes!
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map(quiz => (
            <QuizCard key={quiz.id} quiz={quiz} isProctored={true} />
          ))}
        </div>
      </div>
    </div>
  );
}