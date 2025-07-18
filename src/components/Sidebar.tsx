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
      <div className="bg-warning bg-opacity-10 border border-warning border-opacity-50 rounded-2xl p-4">
        <div className="d-flex align-items-center gap-3 mb-4">
          <div className="bg-orange-500 p-2 rounded-xl">
            <Gift className="w-6 h-6 text-white" />
          </div>
          <h3 className="fs-5 fw-bold text-warning mb-0">Refer & Earn</h3>
        </div>
        
        <div className="space-y-3">
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted">Total Referrals</span>
            <span className="fw-bold text-warning">{referral.totalReferrals}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted">Reward Points</span>
            <span className="fw-bold text-warning">{referral.rewardPoints}</span>
          </div>
          
          {/* Amazon Vouchers Section - Enhanced */}
          <div className="bg-warning bg-opacity-25 border border-warning rounded p-3">
            <div className="d-flex align-items-center gap-2 mb-2">
              <ShoppingBag className="w-5 h-5 text-warning" />
              <span className="fw-semibold text-warning">Amazon Vouchers</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span className="fs-3 fw-bold text-warning">{referral.amazonVouchers}</span>
              <span className="badge bg-orange-500 text-white">
                Earned
              </span>
            </div>
            <p className="small text-warning mt-1">
              Redeem your vouchers in rewards section
            </p>
          </div>
        </div>
        
        <button className="btn btn-gradient-orange w-100 py-2 rounded-xl fw-semibold mt-4">
          Refer Friends Now
        </button>
      </div>

      {/* Community Support Widget */}
      <div className="feature-box-cyan rounded-2xl p-4">
        <div className="d-flex align-items-center gap-3 mb-4">
          <div className="bg-cyan-500 p-2 rounded-xl">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="fs-5 fw-bold text-cyan-700 mb-0">Join Our Community and Support Help Group</h3>
        </div>
        
        <p className="text-muted mb-4">Connect with peers, get instant help, and join our vibrant community!</p>
        
        <div className="space-y-3">
          <button className="btn btn-gradient-cyan w-100 py-2 rounded-xl fw-semibold d-flex align-items-center justify-content-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Join Discord
          </button>
          
          <button className="btn btn-gradient-green w-100 py-2 rounded-xl fw-semibold d-flex align-items-center justify-content-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Join WhatsApp Group
          </button>
        </div>
      </div>

      {/* Upcoming Masterclass */}
      <div className="bg-white rounded-2xl p-4 shadow-lg-custom">
        <div className="d-flex align-items-center gap-3 mb-4">
          <div className="bg-cyan-500 p-2 rounded-xl">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h3 className="fs-5 fw-bold text-dark mb-0">Upcoming Masterclass</h3>
        </div>
        
        <div className="space-y-4">
          {masterclassEvents.slice(0, 3).map(event => (
            <div key={event.id} className="border rounded p-3 transition-colors">
              <h4 className="fw-semibold small text-dark mb-1">{event.title}</h4>
              <p className="small text-muted">{event.date.toLocaleDateString()}</p>
              <span className="badge bg-cyan-500 bg-opacity-25 text-cyan-700 mt-2">
                FREE
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade Offer (for free users) */}
      {(userType === 'free') && (
        <div className="feature-box-blue rounded-2xl p-4">
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="bg-blue-500 p-2 rounded-xl">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="fs-5 fw-bold text-blue-700 mb-0">Upgrade Now</h3>
          </div>
          
          <p className="text-muted mb-4">Get Project-Based Certificate with Live Training</p>
          
          <div className="bg-warning bg-opacity-25 border border-warning rounded p-3 mb-4">
            <p className="text-warning fw-semibold small">🎉 20% Off Limited Time</p>
          </div>
          
          <button className="btn btn-gradient-cyan w-100 py-2 rounded-xl fw-semibold d-flex align-items-center justify-content-center gap-2">
            <Trophy className="w-5 h-5" />
            Upgrade Now
          </button>
        </div>
      )}
    </div>
  );
}