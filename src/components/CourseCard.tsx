import React from 'react';
import { Play, BookOpen, Clock, Calendar, Users, MessageCircle } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  showLiveTrainingDetails?: boolean;
}

export default function CourseCard({ course, showLiveTrainingDetails = false }: CourseCardProps) {
  // Mock upcoming batch data
  const upcomingBatch = {
    date: '01/07/2025',
    time: '17:14',
    batchCode: 'BATCH_2024_01'
  };

  if (showLiveTrainingDetails) {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-lg-custom hover-shadow hover-translate transition-all">
        <div className="position-relative">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="w-100 object-cover"
            style={{height: '8rem'}}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0 transition-all">
            <Play className="w-8 h-8 text-white" />
          </div>
          <div className="position-absolute top-0 end-0 m-2">
            <span className="badge bg-cyan-500 text-white">
              PREMIUM
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <h4 className="fw-bold text-dark mb-3 fs-6">{course.title}</h4>
          
          {/* Upcoming Batch */}
          <div className="bg-cyan-50 border border-cyan-200 rounded p-3 mb-3">
            <div className="d-flex align-items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-cyan-600" />
              <span className="small fw-semibold text-cyan-700">Next Batch</span>
            </div>
            <div className="d-flex align-items-center gap-2 small text-cyan-600">
              <Clock className="w-4 h-4" />
              <span>{upcomingBatch.date} at {upcomingBatch.time}</span>
            </div>
          </div>
          
          {/* Modules */}
          <div className="d-flex align-items-center gap-2 small text-muted mb-3">
            <BookOpen className="w-4 h-4" />
            <span>{course.completedModules}/{course.totalModules} modules</span>
          </div>
          
          {/* Progress */}
          <div className="mb-4">
            <div className="d-flex justify-content-between small text-muted mb-1">
              <span>Progress</span>
              <span className="fw-semibold">{course.progress}%</span>
            </div>
            <div className="progress" style={{height: '8px'}}>
              <div className="progress-bar progress-cyan" style={{ width: `${course.progress}%` }}></div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <button className="btn btn-gradient-cyan w-100 d-flex align-items-center justify-content-center gap-2">
            <Play className="w-4 h-4" />
            Continue Learning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg-custom hover-shadow hover-translate transition-all">
      <div className="position-relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-100 object-cover"
          style={{height: '8rem'}}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0 transition-all">
          <Play className="w-8 h-8 text-white" />
        </div>
        <div className="position-absolute top-0 end-0 m-2">
          <span className={`
            badge
            ${course.type === 'free' ? 'bg-cyan-500 text-white' : 'bg-blue-500 text-white'}
          `}>
            {course.type === 'free' ? 'FREE' : 'PREMIUM'}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="fw-semibold text-dark mb-2 line-clamp-2">{course.title}</h4>
        
        <div className="d-flex align-items-center gap-2 small text-muted mb-3">
          <BookOpen className="w-4 h-4" />
          <span>{course.completedModules}/{course.totalModules} modules</span>
        </div>
        
        <div className="mb-3">
          <div className="d-flex justify-content-between small text-muted mb-1">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <div className="progress" style={{height: '8px'}}>
            <div className="progress-bar progress-cyan" style={{ width: `${course.progress}%` }}></div>
          </div>
        </div>
        
        <button className="btn btn-gradient-cyan w-100 d-flex align-items-center justify-content-center gap-2">
          <Play className="w-4 h-4" />
          Continue Learning
        </button>
      </div>
    </div>
  );
}