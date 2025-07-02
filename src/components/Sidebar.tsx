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

      {/* Discord & WhatsApp Widget */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-indigo-500 p-2 rounded-xl">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-indigo-700">Community Help and Support</h3>
        </div>
        
        <p className="text-gray-600 mb-4">Connect with peers and ask doubts instantly!</p>
        
        <div className="space-y-3">
          <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Join Discord
          </button>
          
          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Join WhatsApp
          </button>
        </div>
      </div>

      {/* Upcoming Masterclass */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-500 p-2 rounded-xl">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Upcoming Masterclass</h3>
        </div>
        
        <div className="space-y-4">
          {masterclassEvents.slice(0, 3).map(event => (
            <div key={event.id} className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
              <h4 className="font-semibold text-sm text-gray-800 mb-1">{event.title}</h4>
              <p className="text-xs text-gray-600">{event.date.toLocaleDateString()}</p>
              <span className="inline-block mt-2 px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                FREE
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade Offer (for free users) */}
      {(userType === 'free') && (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-500 p-2 rounded-xl">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-purple-700">Upgrade Now</h3>
          </div>
          
          <p className="text-gray-600 mb-4">Get Project-Based Certificate with Live Training</p>
          
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
            <p className="text-yellow-800 font-semibold text-sm">🎉 20% Off Limited Time</p>
          </div>
          
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5" />
            Upgrade Now
          </button>
        </div>
      )}
    </div>
  );
}