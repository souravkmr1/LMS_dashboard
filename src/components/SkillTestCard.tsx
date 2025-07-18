import React from 'react';
import { Brain, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { SkillTest } from '../types';

interface SkillTestCardProps {
  test: SkillTest;
  isDarkMode?: boolean;
}

export default function SkillTestCard({ test, isDarkMode = false }: SkillTestCardProps) {
  return (
    <div className={`rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
      isDarkMode ? 'bg-theme-tertiary' : 'bg-white'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="bg-cyan-500 p-2 rounded-lg">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className={`font-semibold transition-colors duration-300 ${
              isDarkMode ? 'text-theme-primary' : 'text-gray-800'
            }`}>{test.subject}</h4>
            <p className={`text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-theme-secondary' : 'text-gray-600'
            }`}>Skill Test</p>
          </div>
        </div>
        
        {test.status === 'completed' ? (
          <CheckCircle className="w-6 h-6 text-cyan-500" />
        ) : (
          <Clock className="w-6 h-6 text-orange-500" />
        )}
      </div>
      
      {test.status === 'completed' && test.score && (
        <div className="mb-3">
          <div className={`flex items-center justify-between text-sm mb-1 transition-colors duration-300 ${
            isDarkMode ? 'text-theme-secondary' : 'text-gray-600'
          }`}>
            <span>Score</span>
            <span className="font-semibold text-cyan-600">{test.score}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
              style={{ width: `${test.score}%` }}
            ></div>
          </div>
        </div>
      )}
      
      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
        <Brain className="w-4 h-4" />
        Take Test
      </button>
    </div>
  );
}