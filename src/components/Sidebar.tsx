import React from 'react';
import { Gift, MessageCircle, Calendar, TrendingUp, Users, Star, Trophy, ShoppingBag } from 'lucide-react';
import { Referral, Event } from '../types';
import EventCard from './EventCard';

interface SidebarProps {
  referral: Referral;
  events: Event[];
  userType: 'free' | 'paid' | 'dual';
}

export default function Sidebar({ referral, events, userType }: SidebarProps) {
  // Filter events to show only masterclasses and make them all free
  const masterclassEvents = events.map(event => ({
    ...event,
    type: 'masterclass' as const,
    isFree: true
  }));

  return (
    <div className="space-y-6">
      {/* Referral Panel - Updated to show Amazon Vouchers */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-orange-200 dark:border-orange-700/30 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-500 p-2 rounded-xl">
            <Gift className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300">Refer & Earn</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">Total Referrals</span>
            <span className="font-bold text-orange-600">{referral.totalReferrals}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">Reward Points</span>
            <span className="font-bold text-orange-600">{referral.rewardPoints}</span>
          </div>
          
          {/* Amazon Vouchers Section - Enhanced */}
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 border border-orange-300 dark:border-orange-700/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingBag className="w-5 h-5 text-orange-600" />
              <span className="font-semibold text-orange-700 dark:text-orange-300">Amazon Vouchers</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-orange-600">{referral.amazonVouchers}</span>
              <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Earned
              </span>
            </div>
            <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
              Redeem your vouchers in rewards section
            </p>
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 mt-4">
          Refer Friends Now
        </button>
      </div>

      {/* Community Support Widget */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700/30 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-500 p-2 rounded-xl">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-cyan-700 dark:text-cyan-300">Join Our Community and Support Help Group</h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">Connect with peers, get instant help, and join our vibrant community!</p>
        
        <div className="space-y-3">
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Join Discord
          </button>
          
          <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Join WhatsApp Group
          </button>
        </div>
      </div>

      {/* Upcoming Masterclass */}
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-500 p-2 rounded-xl">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Upcoming Masterclass</h3>
        </div>
        
        <div className="space-y-4">
          {masterclassEvents.slice(0, 3).map(event => (
            <div key={event.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-100 mb-1">{event.title}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">{event.date.toLocaleDateString()}</p>
              <span className="inline-block mt-2 px-2 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">
                FREE
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade Offer (for free users) */}
      {(userType === 'free') && (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-700/30 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500 p-2 rounded-xl">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">Upgrade Now</h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">Get Project-Based Certificate with Live Training</p>
          
          <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700/30 rounded-lg p-3 mb-4">
            <p className="text-yellow-800 dark:text-yellow-300 font-semibold text-sm">🎉 20% Off Limited Time</p>
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