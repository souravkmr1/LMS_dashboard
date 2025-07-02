export interface User {
  id: string;
  name: string;
  email: string;
  type: 'free' | 'paid' | 'dual';
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  thumbnail: string;
  progress: number;
  totalModules: number;
  completedModules: number;
  type: 'free' | 'paid';
}

export interface LiveSession {
  id: string;
  title: string;
  scheduledTime: Date;
  duration: number;
  module: string;
  batchId?: string;
}

export interface Event {
  id: string;
  title: string;
  type: 'masterclass' | 'batch' | 'ama' | 'workshop';
  date: Date;
  isFree: boolean;
  registrationLink: string;
}

export interface Referral {
  totalReferrals: number;
  rewardPoints: number;
  amazonVouchers: number;
}

export interface SkillTest {
  id: string;
  subject: string;
  score?: number;
  status: 'pending' | 'completed';
}

export interface AdvancedSkillTest {
  id: string;
  subject: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questions: number;
  duration: number;
  rating: number;
  score?: number;
  percentile?: number;
  status: 'pending' | 'completed';
  certified: boolean;
}

export interface Project {
  id: string;
  title: string;
  status: 'ongoing' | 'submitted' | 'pending';
  dueDate: Date;
}