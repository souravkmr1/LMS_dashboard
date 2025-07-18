import React from 'react';
import { Clock, Play, BookOpen, Award, Calendar, Users, MessageCircle, Brain, FlaskConical } from 'lucide-react';
import { User, LiveSession, Course } from '../types';

interface HeroSectionProps {
  user: User;
  liveSession?: LiveSession;
  freeCourse?: Course;
}

export default function HeroSection({ user, liveSession, freeCourse }: HeroSectionProps) {
  const getTimeUntilSession = (scheduledTime: Date) => {
    const now = new Date();
    const diff = scheduledTime.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  // Mock multiple live sessions for different courses with detailed info
  const liveSchedules = [
    {
      id: '1',
      course: 'Full Stack .NET',
      session: 'ASP.NET Core Fundamentals',
      time: new Date(Date.now() + 2 * 60 * 60 * 1000 + 15 * 60 * 1000),
      isNext: true,
      batchDate: '01/07/2025',
      batchTime: '17:14',
      modules: { completed: 7, total: 24 },
      progress: 30
    },
    {
      id: '2',
      course: 'Azure AI ML',
      session: 'Machine Learning Pipelines',
      time: new Date(Date.now() + 24 * 60 * 60 * 1000),
      isNext: false,
      batchDate: '02/07/2025',
      batchTime: '14:59',
      modules: { completed: 12, total: 20 },
      progress: 60
    },
    {
      id: '3',
      course: 'Full Stack Python',
      session: 'Django REST Framework',
      time: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      isNext: false,
      batchDate: '03/07/2025',
      batchTime: '14:59',
      modules: { completed: 8, total: 18 },
      progress: 45
    }
  ];

  // Smart Dashboard Summary Component
  const SmartDashboardSummary = () => (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Overall Progress */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-cyan-500 p-1.5 rounded-lg">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-semibold text-white text-sm">Overall Progress</h3>
          </div>
          <div className="text-2xl font-bold text-white mb-1">68%</div>
          <div className="w-full bg-white/30 rounded-full h-2">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full" style={{ width: '68%' }}></div>
          </div>
        </div>

        {/* Hours Spent */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-teal-500 p-1.5 rounded-lg">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-semibold text-white text-sm">Hours Spent</h3>
          </div>
          <div className="text-2xl font-bold text-white">47.5h</div>
          <div className="text-xs text-white/80">Learning Time</div>
        </div>

        {/* Live Classes Attended */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-blue-500 p-1.5 rounded-lg">
              <Users className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-semibold text-white text-sm">Live Classes Attended</h3>
          </div>
          <div className="text-2xl font-bold text-white">24</div>
          <div className="text-xs text-white/80">Sessions</div>
        </div>

        {/* Labs Completed */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-orange-500 p-1.5 rounded-lg">
              <FlaskConical className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-semibold text-white text-sm">Labs Completed</h3>
          </div>
          <div className="text-2xl font-bold text-white">12</div>
          <div className="text-xs text-white/80">Hands-on Labs</div>
        </div>
      </div>
    </div>
  );

  if (user.type === 'paid' || (user.type === 'dual' && liveSession)) {
    return (
      <div className="space-y-6">
        {/* Main Hero Section */}
        <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-800 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">
                  Hi {user.name}! Your next live class starts in{' '}
                  <span className="text-cyan-300">{liveSchedules[0] ? getTimeUntilSession(liveSchedules[0].time) : '0h 0m'}</span>
                </h1>
                <p className="text-cyan-100 mb-6 text-lg">
                  {liveSchedules[0]?.course}: {liveSchedules[0]?.session}
                </p>
              </div>
              <div className="hidden md:block">
                <Clock className="w-24 h-24 text-white/30" />
              </div>
            </div>
            
            {/* Smart Dashboard Summary */}
            <SmartDashboardSummary />
          </div>
        </div>

        {/* Live Schedules Section with Course Details */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-xl">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Your Live Training Schedules</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {liveSchedules.map((schedule, index) => (
              <div 
                key={schedule.id} 
                className={`
                  border-2 rounded-xl p-4 transition-all duration-300 hover:shadow-lg
                  ${schedule.isNext 
                    ? 'border-cyan-300 bg-gradient-to-br from-cyan-50 to-blue-50' 
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                  }
                `}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg mb-1">{schedule.course}</h3>
                    <p className="text-sm text-gray-600 mb-2">{schedule.session}</p>
                  </div>
                  {schedule.isNext && (
                    <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Next
                    </span>
                  )}
                </div>

                {/* Upcoming Batch Date & Time */}
                <div className="bg-white/80 border border-cyan-200 rounded-lg p-3 mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm font-semibold text-cyan-700">Next Batch</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-cyan-600">
                    <Clock className="w-4 h-4" />
                    <span>{schedule.batchDate} at {schedule.batchTime}</span>
                  </div>
                </div>

                {/* Modules */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <BookOpen className="w-4 h-4" />
                  <span>{schedule.modules.completed}/{schedule.modules.total} modules</span>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span className="font-semibold">{schedule.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${schedule.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Button - Only Continue Learning */}
                <button className={`
                  w-full py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm
                  ${schedule.isNext 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                  }
                `}>
                  {schedule.isNext ? (
                    <>
                      <Play className="w-4 h-4" />
                      Join Now
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Continue Learning
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-500 rounded-2xl p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">
              Welcome, {user.name}! Let's continue your free learning journey 🎓
            </h1>
            <p className="text-cyan-100 mb-6 text-lg">
              You're doing great! Keep up the momentum.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-cyan-600 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
                <BookOpen className="w-5 h-5" />
                Resume Course
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-8 border-white/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-2xl font-bold">{freeCourse?.progress || 0}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Smart Dashboard Summary for Free Users */}
        <SmartDashboardSummary />
      </div>
    </div>
  );
}