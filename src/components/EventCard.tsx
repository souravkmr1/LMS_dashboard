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
      case 'masterclass': return 'bg-cyan-500';
      case 'batch': return 'bg-blue-500';
      case 'ama': return 'bg-teal-500';
      case 'workshop': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-lg-custom hover-shadow hover-translate transition-all" style={{minWidth: '280px'}}>
      <div className="d-flex align-items-start gap-3 mb-3">
        <div className={`${getEventTypeColor(event.type)} p-2 rounded-lg`}>
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="fw-semibold text-dark mb-1">{event.title}</h4>
          <div className="d-flex align-items-center gap-2 small text-muted">
            <Clock className="w-4 h-4" />
            <span>{formatDate(event.date)}</span>
          </div>
        </div>
      </div>
      
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <span className={`
            badge
            ${event.isFree ? 'bg-cyan-500 bg-opacity-25 text-cyan-700' : 'bg-blue-500 bg-opacity-25 text-blue-700'}
          `}>
            {event.isFree ? 'FREE' : 'PREMIUM'}
          </span>
          <span className="small text-muted text-capitalize">{event.type}</span>
        </div>
        
        <button className="btn btn-gradient-cyan btn-sm d-flex align-items-center gap-1">
          Register
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}