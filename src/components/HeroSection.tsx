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
    <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-4 border border-white border-opacity-20">
      <div className="grid grid-cols-2 lg-grid-cols-4 gap-4">
        {/* Overall Progress */}
        <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-3 border border-white border-opacity-30">
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="bg-cyan-500 p-2 rounded">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <h3 className="fw-semibold text-white small mb-0">Overall Progress</h3>
          </div>
          <div className="fs-3 fw-bold text-white mb-1">68%</div>
          <div className="progress" style={{height: '8px'}}>
            <div className="progress-bar progress-cyan" style={{ width: '68%' }}></div>
          </div>
        </div>

        {/* Hours Spent */}
        <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-3 border border-white border-opacity-30">
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="bg-teal-500 p-2 rounded">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <h3 className="fw-semibold text-white small mb-0">Hours Spent</h3>
          </div>
          <div className="fs-3 fw-bold text-white">47.5h</div>
          <div className="small text-white text-opacity-75">Learning Time</div>
        </div>

        {/* Live Classes Attended */}
        <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-3 border border-white border-opacity-30">
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="bg-blue-500 p-2 rounded">
              <Users className="w-4 h-4 text-white" />
            </div>
            <h3 className="fw-semibold text-white small mb-0">Live Classes Attended</h3>
          </div>
          <div className="fs-3 fw-bold text-white">24</div>
          <div className="small text-white text-opacity-75">Sessions</div>
        </div>

        {/* Labs Completed */}
        <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-3 border border-white border-opacity-30">
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="bg-orange-500 p-2 rounded">
              <FlaskConical className="w-4 h-4 text-white" />
            </div>
            <h3 className="fw-semibold text-white small mb-0">Labs Completed</h3>
          </div>
          <div className="fs-3 fw-bold text-white">12</div>
          <div className="small text-white text-opacity-75">Hands-on Labs</div>
        </div>
      </div>
    </div>
  );

  if (user.type === 'paid' || (user.type === 'dual' && liveSession)) {
    return (
      <div className="space-y-6">
        {/* Main Hero Section */}
        <div className="bg-gradient-cyan-blue-br rounded-2xl p-4 text-white position-relative overflow-hidden">
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-10 backdrop-blur"></div>
          <div className="position-relative space-y-6" style={{zIndex: 10}}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="flex-1">
                <h1 className="display-6 fw-bold mb-2">
                  Hi {user.name}! Your next live class starts in{' '}
                  <span className="text-info">{liveSchedules[0] ? getTimeUntilSession(liveSchedules[0].time) : '0h 0m'}</span>
                </h1>
                <p className="text-light mb-4 fs-5">
                  {liveSchedules[0]?.course}: {liveSchedules[0]?.session}
                </p>
              </div>
              <div className="d-none d-md-block">
                <Clock style={{width: '6rem', height: '6rem'}} className="text-white text-opacity-25" />
              </div>
            </div>
            
            {/* Smart Dashboard Summary */}
            <SmartDashboardSummary />
          </div>
        </div>

        {/* Live Schedules Section with Course Details */}
        <div className="bg-white rounded-2xl p-4 shadow-lg-custom border border-light">
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="bg-gradient-cyan-blue p-2 rounded-xl">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="fs-2 fw-bold text-dark mb-0">Your Live Training Schedules</h2>
          </div>
          
          <div className="grid grid-cols-1 md-grid-cols-3 gap-4">
            {liveSchedules.map((schedule, index) => (
              <div 
                key={schedule.id} 
                className={`
                  border rounded-xl p-3 transition-all hover-shadow
                  ${schedule.isNext 
                    ? 'border-cyan-300 feature-box-cyan' 
                    : 'border-light bg-light'
                  }
                `}
              >
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="flex-1">
                    <h3 className="fw-bold text-dark fs-6 mb-1">{schedule.course}</h3>
                    <p className="small text-muted mb-2">{schedule.session}</p>
                  </div>
                  {schedule.isNext && (
                    <span className="badge bg-cyan-500 text-white">
                      Next
                    </span>
                  )}
                </div>

                {/* Upcoming Batch Date & Time */}
                <div className="bg-white bg-opacity-75 border border-cyan-200 rounded p-3 mb-3">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-cyan-600" />
                    <span className="small fw-semibold text-cyan-700">Next Batch</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 small text-cyan-600">
                    <Clock className="w-4 h-4" />
                    <span>{schedule.batchDate} at {schedule.batchTime}</span>
                  </div>
                </div>

                {/* Modules */}
                <div className="d-flex align-items-center gap-2 small text-muted mb-3">
                  <BookOpen className="w-4 h-4" />
                  <span>{schedule.modules.completed}/{schedule.modules.total} modules</span>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between small text-muted mb-1">
                    <span>Progress</span>
                    <span className="fw-semibold">{schedule.progress}%</span>
                  </div>
                  <div className="progress" style={{height: '8px'}}>
                    <div className="progress-bar progress-cyan" style={{ width: `${schedule.progress}%` }}></div>
                  </div>
                </div>

                {/* Action Button - Only Continue Learning */}
                <button className={`
                  btn w-100 d-flex align-items-center justify-content-center gap-2 small transition-all
                  ${schedule.isNext 
                    ? 'btn-gradient-cyan' 
                    : 'btn-gradient-cyan'
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
    <div className="bg-gradient-cyan-teal-br rounded-2xl p-4 text-white position-relative overflow-hidden">
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-10 backdrop-blur"></div>
      <div className="position-relative space-y-6" style={{zIndex: 10}}>
        <div className="d-flex align-items-center justify-content-between">
          <div className="flex-1">
            <h1 className="display-6 fw-bold mb-2">
              Welcome, {user.name}! Let's continue your free learning journey 🎓
            </h1>
            <p className="text-light mb-4 fs-5">
              You're doing great! Keep up the momentum.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <button className="btn bg-white text-cyan-600 px-4 py-2 rounded-xl fw-semibold hover-scale transition-all d-flex align-items-center gap-2 shadow-custom">
                <BookOpen className="w-5 h-5" />
                Resume Course
              </button>
            </div>
          </div>
          <div className="d-none d-md-flex align-items-center">
            <div className="position-relative">
              <div className="rounded-circle border border-white border-opacity-25 d-flex align-items-center justify-content-center" style={{width: '6rem', height: '6rem', borderWidth: '8px'}}>
                <div className="rounded-circle bg-white bg-opacity-20 d-flex align-items-center justify-content-center" style={{width: '4rem', height: '4rem'}}>
                  <span className="fs-4 fw-bold">{freeCourse?.progress || 0}%</span>
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