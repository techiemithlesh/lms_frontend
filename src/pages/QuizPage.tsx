import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import QuizTimer from '../components/quiz/QuizTimer';
import QuizQuestion from '../components/quiz/QuizQuestion';
import { QuizQuestion as QuizQuestionType } from '../types/quiz';

// Mock data - replace with actual API call
const mockQuizData = {
  id: '1',
  title: 'Mathematics Quiz - Algebra Basics',
  duration: 30,
  questions: [
    {
      id: '1',
      question: 'What is the value of x in the equation 2x + 5 = 13?',
      options: ['x = 4', 'x = 6', 'x = 8', 'x = 3'],
      correctAnswer: 0,
      points: 10
    },
    {
      id: '2',
      question: 'Which of these is a quadratic equation?',
      options: ['y = mx + c', 'y = x²+ 2x + 1', 'y = 2x', 'y = 1/x'],
      correctAnswer: 1,
      points: 10
    }
  ] as QuizQuestionType[]
};

export default function QuizPage() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerId: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerId;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < mockQuizData.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleTimeUp = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    return mockQuizData.questions.reduce((score, question, index) => {
      return score + (answers[index] === question.correctAnswer ? question.points : 0);
    }, 0);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="py-8">
        <button
          onClick={() => navigate('/quizzes')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Quizzes
        </button>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{mockQuizData.title}</h1>
            <QuizTimer duration={mockQuizData.duration} onTimeUp={handleTimeUp} />
          </div>

          {!showResults ? (
            <>
              <div className="mb-4">
                <span className="text-sm text-gray-500">
                  Question {currentQuestion + 1} of {mockQuizData.questions.length}
                </span>
              </div>

              <QuizQuestion
                question={mockQuizData.questions[currentQuestion]}
                selectedAnswer={answers[currentQuestion]}
                onAnswerSelect={handleAnswerSelect}
              />

              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={answers[currentQuestion] === undefined}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentQuestion === mockQuizData.questions.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz Complete!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your score: {calculateScore()} / {mockQuizData.questions.length * 10}
              </p>
              <div className="space-y-6">
                {mockQuizData.questions.map((question, index) => (
                  <QuizQuestion
                    key={question.id}
                    question={question}
                    selectedAnswer={answers[index]}
                    onAnswerSelect={() => {}}
                    showResult
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}