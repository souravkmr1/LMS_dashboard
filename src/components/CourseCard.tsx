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
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <Play className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-2 right-2">
            <span className="bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              PREMIUM
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">{course.title}</h4>
          
          {/* Upcoming Batch */}
          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700">Next Batch</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-cyan-600">
              <Clock className="w-4 h-4" />
              <span>{upcomingBatch.date} at {upcomingBatch.time}</span>
            </div>
          </div>
          
          {/* Modules */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <BookOpen className="w-4 h-4" />
            <span>{course.completedModules}/{course.totalModules} modules</span>
          </div>
          
          {/* Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span className="font-semibold">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
            <Play className="w-4 h-4" />
            Continue Learning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-32 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Play className="w-8 h-8 text-white" />
        </div>
        <div className="absolute top-2 right-2">
          <span className={`
            px-2 py-1 rounded-full text-xs font-semibold
            ${course.type === 'free' ? 'bg-cyan-500 text-white' : 'bg-blue-500 text-white'}
          `}>
            {course.type === 'free' ? 'FREE' : 'PREMIUM'}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">{course.title}</h4>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <BookOpen className="w-4 h-4" />
          <span>{course.completedModules}/{course.totalModules} modules</span>
        </div>
        
        <div className="mb-3">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
          <Play className="w-4 h-4" />
          Continue Learning
        </button>
      </div>
    </div>
  );
}