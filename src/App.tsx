import React, { useState } from 'react';
import { BookOpen, Calendar, Code, FileText, Users, Trophy, Target, Zap, Settings, Bell, Moon, Sun } from 'lucide-react';
import HeroSection from './components/HeroSection';
import FeatureBox from './components/FeatureBox';
import CourseCard from './components/CourseCard';
import EventCard from './components/EventCard';
import Sidebar from './components/Sidebar';
import SkillTestCard from './components/SkillTestCard';
import PlatformGuideSection from './components/PlatformGuideSection';
import { 
  mockUser, 
  mockCourses, 
  mockLiveSession, 
  mockEvents, 
  mockReferral, 
  mockSkillTests,
  mockProjects
} from './data/mockData';

function App() {
  const [userType, setUserType] = useState<'free' | 'paid' | 'dual'>(mockUser.type);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-bs-theme', !isDarkMode ? 'dark' : 'light');
  };
  
  const freeCourse = mockCourses.find(c => c.type === 'free');
  const paidCourse = mockCourses.find(c => c.type === 'paid');

  // Mock upcoming live training batches
  const upcomingLiveTrainingBatches = [
    {
      id: '1',
      name: 'Full Stack .NET Development',
      startDate: '15th Jan 2025',
      time: '7:00 PM IST',
      duration: '3 Months',
      instructor: 'Shailendra Chauhan'
    },
    {
      id: '2',
      name: 'Azure AI & Machine Learning',
      startDate: '22nd Jan 2025',
      time: '6:30 PM IST',
      duration: '2.5 Months',
      instructor: 'Mukesh Kumar'
    },
    {
      id: '3',
      name: 'React & Node.js Bootcamp',
      startDate: '1st Feb 2025',
      time: '8:00 PM IST',
      duration: '4 Months',
      instructor: 'Priyanka Yadav'
    }
  ];

  // Mock course-wise certification progress
  const certificationProgress = [
    {
      id: '1',
      courseName: 'Azure Developer Certification Training',
      type: 'live',
      progress: 75,
      modules: { completed: 18, total: 24 },
      status: 'in-progress'
    },
    {
      id: '2',
      courseName: 'Angular Certification Training',
      type: 'live',
      progress: 45,
      modules: { completed: 9, total: 20 },
      status: 'in-progress'
    },
    {
      id: '3',
      courseName: 'ASP.NET Core Certification Training',
      type: 'live',
      progress: 90,
      modules: { completed: 27, total: 30 },
      status: 'near-completion'
    },
    {
      id: '4',
      courseName: 'React Developer Certification',
      type: 'video',
      progress: 100,
      modules: { completed: 15, total: 15 },
      status: 'completed'
    }
  ];

  // Simple skill tests data for the simplified version - only show 2 tests
  const simpleSkillTests = [
    {
      id: '1',
      subject: 'JavaScript',
      score: 88,
      status: 'pending' as const,
      certified: true
    },
    {
      id: '2',
      subject: 'System Design',
      status: 'pending' as const,
      certified: false
    }
  ];

  const renderFreeUserFeatures = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* My Course */}
      <FeatureBox
        title="My Free Course"
        description="Continue your learning journey"
        icon={BookOpen}
        color="cyan"
        className="md:col-span-2 lg:col-span-1"
      >
        {freeCourse && <CourseCard course={freeCourse} />}
      </FeatureBox>

      {/* Learning Progress */}
      <FeatureBox
        title="Learning Progress"
        description="Track your achievements"
        icon={Target}
        color="blue"
      >
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Modules Completed</span>
            <span className="font-semibold text-blue-600">{freeCourse?.completedModules}/{freeCourse?.totalModules}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full"
              style={{ width: `${freeCourse?.progress || 0}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">Keep going! You're doing great 🎉</p>
        </div>
      </FeatureBox>

      {/* Upcoming Live Training Batches */}
      <FeatureBox
        title="Upcoming Live Training Batches"
        description="Join our upcoming live training programs"
        icon={Calendar}
        color="teal"
      >
        <div className="space-y-3">
          {upcomingLiveTrainingBatches.slice(0, 2).map(batch => (
            <div key={batch.id} className="bg-white border border-teal-200 rounded-lg p-3 hover:bg-teal-50 transition-colors">
              <h4 className="font-semibold text-sm text-gray-800 mb-1">{batch.name}</h4>
              <div className="text-xs text-gray-600 mb-2">
                <p>📅 Starts: {batch.startDate}</p>
                <p>⏰ Time: {batch.time}</p>
                <p>👨‍🏫 Instructor: {batch.instructor}</p>
              </div>
              <button className="text-xs bg-teal-500 text-white px-3 py-1 rounded-full hover:bg-teal-600 transition-colors">
                Book Free Demo
              </button>
            </div>
          ))}
        </div>
      </FeatureBox>

      {/* DSA Practice */}
      <FeatureBox
        title="DSA Practice & Compilers"
        description="Sharpen your coding skills"
        icon={Code}
        color="orange"
      >
        <div className="space-y-3">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
            <h4 className="font-semibold text-orange-800 text-sm">Today's Challenge</h4>
            <p className="text-xs text-orange-600">Two Sum Problem</p>
            <button className="mt-2 text-xs bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600 transition-colors">
              Solve Now
            </button>
          </div>
          <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Open Compiler
          </button>
        </div>
      </FeatureBox>

      {/* Free Interview Books */}
      <FeatureBox
        title="Free Interview Books"
        description="Download our latest resources"
        icon={FileText}
        color="indigo"
      >
        <div className="space-y-3">
          <div className="border rounded-lg p-3 hover:bg-indigo-50 transition-colors">
            <h4 className="font-semibold text-sm text-gray-800">React Interview Guide</h4>
            <p className="text-xs text-gray-600 mb-2">50+ Questions & Answers</p>
            <button className="text-xs bg-indigo-500 text-white px-3 py-1 rounded-full hover:bg-indigo-600 transition-colors">
              View
            </button>
          </div>
          <div className="border rounded-lg p-3 hover:bg-indigo-50 transition-colors">
            <h4 className="font-semibold text-sm text-gray-800">JavaScript Essentials</h4>
            <p className="text-xs text-gray-600 mb-2">Complete Reference</p>
            <button className="text-xs bg-indigo-500 text-white px-3 py-1 rounded-full hover:bg-indigo-600 transition-colors">
              View
            </button>
          </div>
        </div>
      </FeatureBox>

      {/* Skill Tests */}
      <FeatureBox
        title="Skill Tests"
        description="Test your knowledge"
        icon={Trophy}
        color="pink"
      >
        <div className="space-y-3">
          {mockSkillTests.slice(0, 2).map(test => (
            <SkillTestCard key={test.id} test={test} />
          ))}
        </div>
      </FeatureBox>
    </div>
  );

  const renderPaidUserFeatures = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Advanced Skill Tests - Compact Version */}
      <FeatureBox
        title="Advanced Skill Tests"
        description="Test your expertise"
        icon={Zap}
        color="cyan"
      >
        <div className="space-y-3">
          {simpleSkillTests.map(test => (
            <div key={test.id} className="bg-white rounded-lg p-3 border border-gray-200 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800 text-sm">{test.subject}</h4>
                <span className="text-orange-500 text-xs">⏱</span>
              </div>
              
              <button className="w-full py-1.5 rounded-md text-xs font-semibold transition-colors bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600">
                Take Test
              </button>
            </div>
          ))}
        </div>
      </FeatureBox>

      {/* Live Schedules */}
      <FeatureBox
        title="My Live Schedules"
        description="Upcoming sessions calendar"
        icon={Calendar}
        color="teal"
      >
        <div className="space-y-3">
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
            <h4 className="font-semibold text-teal-800 text-sm">Next Session</h4>
            <p className="text-xs text-teal-600">{mockLiveSession.title}</p>
            <p className="text-xs text-teal-600">{mockLiveSession.scheduledTime.toLocaleString()}</p>
            <button className="mt-2 text-xs bg-teal-500 text-white px-3 py-1 rounded-full hover:bg-teal-600 transition-colors">
              Join
            </button>
          </div>
          <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            View Full Calendar
          </button>
        </div>
      </FeatureBox>

      {/* Live Batches Plan */}
      <FeatureBox
        title="Live Batches Plan"
        description="Connect with your batchmates"
        icon={Users}
        color="blue"
      >
        <div className="space-y-3">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <h4 className="font-semibold text-blue-800 text-sm">Batch 2024-01</h4>
            <p className="text-xs text-blue-600">45 Students</p>
            <button className="mt-2 text-xs bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition-colors">
              Join Discord
            </button>
          </div>
          <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            View Recordings
          </button>
        </div>
      </FeatureBox>

      {/* Projects & Labs */}
      <FeatureBox
        title="Projects & Hands-on Labs"
        description="Build real-world applications"
        icon={Code}
        color="orange"
      >
        <div className="space-y-3">
          {mockProjects.map(project => (
            <div key={project.id} className="border rounded-lg p-3 hover:bg-orange-50 transition-colors">
              <h4 className="font-semibold text-sm text-gray-800">{project.title}</h4>
              <p className="text-xs text-gray-600">Status: {project.status}</p>
              <p className="text-xs text-gray-600">Due: {project.dueDate.toLocaleDateString()}</p>
              <button className="mt-2 text-xs bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600 transition-colors">
                {project.status === 'ongoing' ? 'Continue' : 'View'}
              </button>
            </div>
          ))}
        </div>
      </FeatureBox>

      {/* Certification Tracker */}
      <FeatureBox
        title="Certification Progress"
        description="Track your course-wise progress"
        icon={Trophy}
        color="indigo"
        className="md:col-span-2 lg:col-span-2"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Live Training Progress */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-600" />
                Live Training Learning Progress
              </h4>
              <div className="space-y-3">
                {certificationProgress.filter(course => course.type === 'live').map(course => (
                  <div key={course.id} className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Users className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-sm text-gray-800 truncate">{course.courseName}</h5>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-600">
                            {course.modules.completed}/{course.modules.total} modules
                          </span>
                          <span className="text-xs font-semibold text-cyan-600">{course.progress}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Course Progress */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Video Course Learning Progress
              </h4>
              <div className="space-y-3">
                {certificationProgress.filter(course => course.type === 'video').map(course => (
                  <div key={course.id} className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex items-start gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-sm text-gray-800 truncate">{course.courseName}</h5>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-600">
                            {course.modules.completed}/{course.modules.total} modules
                          </span>
                          <span className="text-xs font-semibold text-blue-600">{course.progress}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 pt-3 border-t border-gray-200">
            <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-colors flex items-center justify-center gap-2">
              <Trophy className="w-4 h-4" />
              View All Progress
            </button>
          </div>
        </div>
      </FeatureBox>
    </div>
  );

  const renderDualUserFeatures = () => (
    <div className="space-y-8">
      {/* Premium Zone */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-xl">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          Premium Zone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Advanced Skill Tests - Compact */}
          <FeatureBox
            title="Advanced Skill Tests"
            description="Premium assessments"
            icon={Zap}
            color="cyan"
          >
            <div className="space-y-3">
              {simpleSkillTests.map(test => (
                <div key={test.id} className="bg-white rounded-lg p-3 border border-gray-200 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800 text-sm">{test.subject}</h4>
                    <span className="text-orange-500 text-xs">⏱</span>
                  </div>
                  
                  <button className="w-full py-1.5 rounded-md text-xs font-semibold transition-colors bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600">
                    Take Test
                  </button>
                </div>
              ))}
            </div>
          </FeatureBox>

          {/* Live Schedules */}
          <FeatureBox
            title="Live Schedules"
            description="Upcoming premium sessions"
            icon={Calendar}
            color="teal"
          >
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
              <h4 className="font-semibold text-teal-800 text-sm">Next Session</h4>
              <p className="text-xs text-teal-600">{mockLiveSession.title}</p>
              <button className="mt-2 text-xs bg-teal-500 text-white px-3 py-1 rounded-full">
                Join Live
              </button>
            </div>
          </FeatureBox>

          {/* Certification */}
          <FeatureBox
            title="Certification"
            description="Your progress to certificate"
            icon={Trophy}
            color="orange"
          >
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Progress</span>
                <span className="font-semibold text-orange-600">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </FeatureBox>
        </div>
      </div>

      {/* Free Zone */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-2 rounded-xl">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          Free Learning Zone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Free Course */}
          <FeatureBox
            title="My Free Course"
            description="Continue your free learning"
            icon={BookOpen}
            color="cyan"
          >
            {freeCourse && <CourseCard course={freeCourse} />}
          </FeatureBox>

          {/* Upcoming Live Training Batches */}
          <FeatureBox
            title="Upcoming Live Training Batches"
            description="Join our upcoming live training programs"
            icon={Calendar}
            color="teal"
          >
            <div className="space-y-3">
              {upcomingLiveTrainingBatches.slice(0, 2).map(batch => (
                <div key={batch.id} className="bg-white border border-teal-200 rounded-lg p-3 hover:bg-teal-50 transition-colors">
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">{batch.name}</h4>
                  <div className="text-xs text-gray-600 mb-2">
                    <p>📅 Starts: {batch.startDate}</p>
                    <p>⏰ Time: {batch.time}</p>
                    <p>👨‍🏫 Instructor: {batch.instructor}</p>
                  </div>
                  <button className="text-xs bg-teal-500 text-white px-3 py-1 rounded-full hover:bg-teal-600 transition-colors">
                    Book Free Demo
                  </button>
                </div>
              ))}
            </div>
          </FeatureBox>

          {/* Free Resources */}
          <FeatureBox
            title="Free Resources"
            description="Interview books & guides"
            icon={FileText}
            color="indigo"
          >
            <div className="space-y-2">
              <div className="border rounded p-2">
                <h4 className="text-xs font-semibold">React Interview Guide</h4>
                <button className="text-xs bg-indigo-500 text-white px-2 py-1 rounded mt-1">
                  View
                </button>
              </div>
            </div>
          </FeatureBox>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-theme-primary' 
        : 'bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-50'
    }`}>
      {/* Header */}
      <header className={`backdrop-blur-sm border-b sticky top-0 z-50 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-theme-secondary/80 border-theme-primary' 
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                ScholarHat LMS
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* User Type Selector */}
              <select 
                value={userType} 
                onChange={(e) => setUserType(e.target.value as 'free' | 'paid' | 'dual')}
                className={`border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-theme-secondary border-theme-primary text-theme-primary' 
                    : 'bg-white border-gray-300'
                }`}
              >
                <option value="free">Free User</option>
                <option value="paid">Paid User</option>
                <option value="dual">Dual User</option>
              </select>
              
              {/* Theme Toggle Button */}
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}>
                <Bell className="w-5 h-5" />
              </button>
              <button className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}>
                <Settings className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2">
                <img 
                  src={mockUser.avatar} 
                  alt={mockUser.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-theme-primary' : 'text-gray-700'
                }`}>{mockUser.name}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Section */}
            <HeroSection 
              user={{...mockUser, type: userType}}
              isDarkMode={isDarkMode}
              liveSession={userType !== 'free' ? mockLiveSession : undefined}
              freeCourse={freeCourse}
            />

            {/* Feature Sections */}
            {userType === 'free' && renderFreeUserFeatures()}
            {userType === 'paid' && renderPaidUserFeatures()}
            {userType === 'dual' && renderDualUserFeatures()}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar 
              referral={mockReferral}
              events={mockEvents}
              userType={userType}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>

      {/* Footer with Platform Guide Section */}
      <footer className={`border-t mt-16 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-theme-secondary border-theme-primary' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <PlatformGuideSection isDarkMode={isDarkMode} />
          
          {/* Additional Footer Content */}
          <div className={`mt-12 pt-8 border-t transition-colors duration-300 ${
            isDarkMode ? 'border-theme-primary' : 'border-gray-200'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-xl">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    ScholarHat LMS
                  </h3>
                </div>
                <p className={`mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-theme-secondary' : 'text-gray-600'
                }`}>
                  Empowering learners with industry-relevant skills through live training, hands-on projects, and expert mentorship.
                </p>
                <div className="flex gap-4">
                  <button className={`hover:text-cyan-500 transition-colors duration-300 ${
                    isDarkMode ? 'text-theme-tertiary' : 'text-gray-400'
                  }`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className={`hover:text-cyan-500 transition-colors duration-300 ${
                    isDarkMode ? 'text-theme-tertiary' : 'text-gray-400'
                  }`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </button>
                  <button className={`hover:text-cyan-500 transition-colors duration-300 ${
                    isDarkMode ? 'text-theme-tertiary' : 'text-gray-400'
                  }`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-theme-primary' : 'text-gray-800'
                }`}>Quick Links</h4>
                <ul className={`space-y-2 text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-theme-secondary' : 'text-gray-600'
                }`}>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors duration-300">About Us</a></li>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors duration-300">Courses</a></li>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors duration-300">Live Training</a></li>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors duration-300">Certification</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-theme-primary' : 'text-gray-800'
                }`}>Support</h4>
                <ul className={`space-y-2 text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-theme-secondary' : 'text-gray-600'
                }`}>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors duration-300">Help Center</a></li>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors duration-300">Contact Us</a></li>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors duration-300">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors duration-300">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            
            <div className={`mt-8 pt-8 border-t text-center text-sm transition-colors duration-300 ${
              isDarkMode 
                ? 'border-theme-primary text-theme-secondary' 
                : 'border-gray-200 text-gray-600'
            }`}>
              <p>&copy; 2024 ScholarHat LMS. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;