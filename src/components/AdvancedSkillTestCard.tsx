import React from 'react';
import { Brain, CheckCircle, Clock, TrendingUp, Star, Award, Zap } from 'lucide-react';
import { AdvancedSkillTest } from '../types';

interface AdvancedSkillTestCardProps {
  test: AdvancedSkillTest;
}

export default function AdvancedSkillTestCard({ test }: AdvancedSkillTestCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700 border-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-blue-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3 flex-1">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-1">{test.subject}</h4>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(test.difficulty)}`}>
                {test.difficulty.charAt(0).toUpperCase() + test.difficulty.slice(1)}
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${i < test.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-600">{test.questions} questions • {test.duration} min</p>
          </div>
        </div>
        
        {test.status === 'completed' ? (
          <div className="flex items-center gap-1">
            <CheckCircle className="w-5 h-5 text-green-500" />
            {test.certified && <Award className="w-4 h-4 text-yellow-500" />}
          </div>
        ) : (
          <Clock className="w-5 h-5 text-orange-500" />
        )}
      </div>
      
      {test.status === 'completed' && test.score && (
        <div className="mb-3">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600">Your Score</span>
            <div className="flex items-center gap-2">
              <span className={`font-bold ${getScoreColor(test.score)}`}>{test.score}%</span>
              {test.certified && (
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">
                  Certified
                </span>
              )}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                test.score >= 90 ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                test.score >= 70 ? 'bg-gradient-to-r from-blue-400 to-cyan-500' :
                test.score >= 50 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                'bg-gradient-to-r from-red-400 to-pink-500'
              }`}
              style={{ width: `${test.score}%` }}
            ></div>
          </div>
          {test.percentile && (
            <p className="text-xs text-gray-600 mt-1">
              Better than {test.percentile}% of test takers
            </p>
          )}
        </div>
      )}
      
      <button className={`
        w-full py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm
        ${test.status === 'completed' 
          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600' 
          : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
        }
      `}>
        {test.status === 'completed' ? (
          <>
            <TrendingUp className="w-4 h-4" />
            View Certificate
          </>
        ) : (
          <>
            <Zap className="w-4 h-4" />
            Start Test
          </>
        )}
      </button>
    </div>
  );
}