import { User, Course, LiveSession, Event, Referral, SkillTest, Project, AdvancedSkillTest } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Sourav',
  email: 'sourav@example.com',
  type: 'dual',
  avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
};

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete React Masterclass',
    thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
    progress: 65,
    totalModules: 12,
    completedModules: 8,
    type: 'free'
  },
  {
    id: '2',
    title: 'Full Stack Development Bootcamp',
    thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
    progress: 30,
    totalModules: 24,
    completedModules: 7,
    type: 'paid'
  }
];

export const mockLiveSession: LiveSession = {
  id: '1',
  title: 'React Hooks In-Depth',
  scheduledTime: new Date(Date.now() + 2 * 60 * 60 * 1000 + 15 * 60 * 1000), // 2h 15m from now
  duration: 120,
  module: 'Module 3',
  batchId: 'BATCH_2024_01'
};

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Crack TCS Interview',
    type: 'masterclass',
    date: new Date(Date.now() + 24 * 60 * 60 * 1000),
    isFree: true,
    registrationLink: '#'
  },
  {
    id: '2',
    title: 'Frontend Pro Batch',
    type: 'batch',
    date: new Date('2024-07-15'),
    isFree: false,
    registrationLink: '#'
  },
  {
    id: '3',
    title: 'Discord AMA with Mentor',
    type: 'ama',
    date: new Date(Date.now() + 24 * 60 * 60 * 1000),
    isFree: true,
    registrationLink: '#'
  }
];

export const mockReferral: Referral = {
  totalReferrals: 3,
  rewardPoints: 1250,
  amazonVouchers: 1
};

export const mockSkillTests: SkillTest[] = [
  {
    id: '1',
    subject: 'JavaScript',
    score: 85,
    status: 'completed'
  },
  {
    id: '2',
    subject: 'React',
    status: 'pending'
  },
  {
    id: '3',
    subject: 'Node.js',
    score: 92,
    status: 'completed'
  }
];

export const mockAdvancedSkillTests: AdvancedSkillTest[] = [
  {
    id: '1',
    subject: 'Full Stack JavaScript',
    difficulty: 'advanced',
    questions: 50,
    duration: 90,
    rating: 4,
    score: 88,
    percentile: 92,
    status: 'completed',
    certified: true
  },
  {
    id: '2',
    subject: 'System Design',
    difficulty: 'advanced',
    questions: 30,
    duration: 120,
    rating: 5,
    status: 'pending',
    certified: false
  },
  {
    id: '3',
    subject: 'Data Structures & Algorithms',
    difficulty: 'intermediate',
    questions: 40,
    duration: 75,
    rating: 4,
    score: 76,
    percentile: 85,
    status: 'completed',
    certified: false
  },
  {
    id: '4',
    subject: 'Cloud Architecture (AWS)',
    difficulty: 'advanced',
    questions: 45,
    duration: 100,
    rating: 5,
    score: 94,
    percentile: 98,
    status: 'completed',
    certified: true
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Dashboard',
    status: 'ongoing',
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  },
  {
    id: '2',
    title: 'Weather App',
    status: 'submitted',
    dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  }
];