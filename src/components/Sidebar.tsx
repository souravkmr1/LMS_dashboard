import React from 'react';
import { Gift, MessageCircle, Calendar, TrendingUp, Users, Star, Trophy, ShoppingBag, Clock, BookOpen } from 'lucide-react';
import { Referral, Event } from '../types';
import EventCard from './EventCard';

interface SidebarProps {
  referral: Referral;
  events: Event[];
  userType: 'free' | 'paid' | 'dual';
}

export default function Sidebar({ referral, events, userType }: SidebarProps) {
  // Mock upcoming live training batches data
  const upcomingBatches = [
    {
      id: '1',
      courseName: 'Full Stack .NET Development',
      batchCode: 'BATCH_2024_07',
      startDate: '15/07/2025',
      startTime: '18:00',
      duration: '6 months',
      seats: 25,
      enrolled: 18,
      instructor: 'Shailendra Chauhan',
      level: 'Intermediate'
    },
    {
      id: '2',
      courseName: 'Azure AI & ML Certification',
      batchCode: 'BATCH_2024_08',
      startDate: '22/07/2025',
      startTime: '19:30',
      duration: '4 months',
      seats: 20,
      enrolled: 12,
      instructor: 'Mukesh Kumar',
      level: 'Advanced'
    },
    {
      id: '3',
      courseName: 'React & Node.js Bootcamp',
      batchCode: 'BATCH_2024_09',
      startDate: '01/08/2025',
      startTime: '17:00',
      duration: '5 months',
      seats: 30,
      enrolled: 22,
      instructor: 'Priya Sharma',
      level: 'Beginner'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Referral Panel - Updated to show Amazon Vouchers */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-500 p-2 rounded-xl">
            <Gift className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-orange-700">Refer & Earn</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Referrals</span>
            <span className="font-bold text-orange-600">{referral.totalReferrals}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Reward Points</span>
            <span className="font-bold text-orange-600">{referral.rewardPoints}</span>
          </div>
          
          {/* Amazon Vouchers Section - Enhanced */}
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-300 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingBag className="w-5 h-5 text-orange-600" />
              <span className="font-semibold text-orange-700">Amazon Vouchers</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-orange-600">{referral.amazonVouchers}</span>
              <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Earned
              </span>
            </div>
            <p className="text-xs text-orange-600 mt-1">
              Redeem your vouchers in rewards section
            </p>
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 mt-4">
          Refer Friends Now
        </button>
      </div>

      {/* Discord Widget */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-500 p-2 rounded-xl">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-cyan-700">Community Help and Support</h3>
        </div>
        
        <p className="text-gray-600 mb-4">Connect with peers and ask doubts instantly!</p>
        
        <div className="space-y-3">
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Join Discord
          </button>
        </div>
      </div>

      {/* Upcoming Live Training Batches */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-500 p-2 rounded-xl">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Upcoming Live Training Batches</h3>
        </div>
        
        <div className="space-y-4">
          {upcomingBatches.map(batch => (
            <div key={batch.id} className="border rounded-xl p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-gray-800 mb-1">{batch.courseName}</h4>
                  <p className="text-xs text-gray-600 mb-2">Batch: {batch.batchCode}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(batch.level)}`}>
                    {batch.level}
                  </span>
                </div>
              </div>
              
              {/* Batch Details */}
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 mb-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyan-600" />
                    <span className="text-cyan-700">{batch.startDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-600" />
                    <span className="text-cyan-700">{batch.startTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-cyan-600" />
                    <span className="text-cyan-700">{batch.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-cyan-600" />
                    <span className="text-cyan-700">{batch.enrolled}/{batch.seats} seats</span>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-cyan-200">
                  <p className="text-xs text-cyan-700">
                    <span className="font-semibold">Instructor:</span> {batch.instructor}
                  </p>
                </div>
              </div>

              {/* Enrollment Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Enrollment</span>
                  <span>{Math.round((batch.enrolled / batch.seats) * 100)}% filled</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                    style={{ width: `${(batch.enrolled / batch.seats) * 100}%` }}
                  ></div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade Offer (for free users) */}
      {(userType === 'free') && (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500 p-2 rounded-xl">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-700">Upgrade Now</h3>
          </div>
          
          <p className="text-gray-600 mb-4">Get Project-Based Certificate with Live Training</p>
          
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
            <p className="text-yellow-800 font-semibold text-sm">🎉 20% Off Limited Time</p>
          </div>
          
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5" />
            Upgrade Now
          </button>
        </div>
      )}
    </div>
  );
}