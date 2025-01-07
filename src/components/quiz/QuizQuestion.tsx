import React from 'react';
import { QuizQuestion as QuizQuestionType } from '../../types/quiz';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer?: number;
  onAnswerSelect: (answerId: number) => void;
  showResult?: boolean;
}

export default function QuizQuestion({ 
  question, 
  selectedAnswer, 
  onAnswerSelect,
  showResult 
}: QuizQuestionProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{question.question}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            className={`w-full text-left p-4 rounded-lg border transition-colors ${
              selectedAnswer === index
                ? showResult
                  ? index === question.correctAnswer
                    ? 'bg-green-50 border-green-500'
                    : 'bg-red-50 border-red-500'
                  : 'bg-indigo-50 border-indigo-500'
                : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {showResult && selectedAnswer !== undefined && (
        <div className={`mt-4 p-3 rounded-lg ${
          selectedAnswer === question.correctAnswer
            ? 'bg-green-50 text-green-800'
            : 'bg-red-50 text-red-800'
        }`}>
          {selectedAnswer === question.correctAnswer
            ? '✓ Correct answer!'
            : `✗ The correct answer was: ${question.options[question.correctAnswer]}`}
        </div>
      )}
    </div>
  );
}