import React from 'react';
import { Calendar, Clock, Users, ExternalLink } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'masterclass': return 'bg-blue-500';
      case 'batch': return 'bg-purple-500';
      case 'ama': return 'bg-green-500';
      case 'workshop': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[280px]">
      <div className="flex items-start gap-3 mb-3">
        <div className={`${getEventTypeColor(event.type)} p-2 rounded-lg`}>
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 mb-1">{event.title}</h4>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{formatDate(event.date)}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`
            px-2 py-1 rounded-full text-xs font-semibold
            ${event.isFree ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}
          `}>
            {event.isFree ? 'FREE' : 'PREMIUM'}
          </span>
          <span className="text-xs text-gray-500 capitalize">{event.type}</span>
        </div>
        
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-1">
          Register
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}