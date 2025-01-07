import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';
import VideoPlayer from '../components/lecture/VideoPlayer';

// Mock data - replace with actual API call
const mockLectureData = {
  id: '1',
  title: 'Introduction to Calculus',
  description: 'Learn the fundamentals of calculus including limits, derivatives, and basic integration.',
  videoUrl: 'https://example.com/video1',
  duration: '45:00',
  subject: 'Mathematics',
  instructor: 'Dr. Smith',
  relatedResources: [
    { id: '1', title: 'Calculus Formulas PDF', type: 'pdf' },
    { id: '2', title: 'Practice Problems', type: 'doc' }
  ]
};

export default function LecturePage() {
  const { lectureId } = useParams();
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleLectureComplete = () => {
    setIsCompleted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="py-8">
        <button
          onClick={() => navigate('/subjects')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Subjects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <VideoPlayer
                url={mockLectureData.videoUrl}
                title={mockLectureData.title}
                onComplete={handleLectureComplete}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl font-bold text-gray-900">{mockLectureData.title}</h1>
                  {isCompleted && (
                    <span className="flex items-center text-green-600">
                      <CheckCircle className="h-5 w-5 mr-1" />
                      Completed
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{mockLectureData.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{mockLectureData.subject} • </span>
                  <span className="ml-1">{mockLectureData.instructor}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Resources</h2>
              <div className="space-y-3">
                {mockLectureData.relatedResources.map(resource => (
                  <a
                    key={resource.id}
                    href="#"
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50"
                  >
                    <div className="p-2 bg-indigo-50 rounded-md">
                      <BookOpen className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{resource.title}</p>
                      <p className="text-xs text-gray-500 uppercase">{resource.type}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}