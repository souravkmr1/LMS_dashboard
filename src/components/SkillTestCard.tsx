import React from 'react';
import { Brain, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { SkillTest } from '../types';

interface SkillTestCardProps {
  test: SkillTest;
}

export default function SkillTestCard({ test }: SkillTestCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg-custom hover-shadow hover-translate transition-all">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-cyan-500 p-2 rounded">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="fw-semibold text-dark mb-0">{test.subject}</h4>
            <p className="small text-muted mb-0">Skill Test</p>
          </div>
        </div>
        
        {test.status === 'completed' ? (
          <CheckCircle className="w-6 h-6 text-success" />
        ) : (
          <Clock className="w-6 h-6 text-warning" />
        )}
      </div>
      
      {test.status === 'completed' && test.score && (
        <div className="mb-3">
          <div className="d-flex align-items-center justify-content-between small text-muted mb-1">
            <span>Score</span>
            <span className="fw-semibold text-cyan-600">{test.score}%</span>
          </div>
          <div className="progress" style={{height: '8px'}}>
            <div className="progress-bar progress-cyan" style={{ width: `${test.score}%` }}></div>
          </div>
        </div>
      )}
      
      <button className="btn btn-gradient-cyan w-100 d-flex align-items-center justify-content-center gap-2">
        <Brain className="w-4 h-4" />
        Take Test
      </button>
    </div>
  );
}