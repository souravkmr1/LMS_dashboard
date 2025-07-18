import React from 'react';
import { Play, ExternalLink, MessageCircle, BookOpen } from 'lucide-react';

interface GuideVideo {
  id: string;
  title: string;
  thumbnail: string;
  ctaText: string;
  ctaType: 'watch' | 'discord';
  icon: React.ComponentType<any>;
}

const guideVideos: GuideVideo[] = [
  {
    id: '1',
    title: 'How to Access My Courses',
    thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    ctaText: 'Watch Now',
    ctaType: 'watch',
    icon: BookOpen
  },
  {
    id: '2',
    title: 'How to Join Live Class',
    thumbnail: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    ctaText: 'Watch Now',
    ctaType: 'watch',
    icon: Play
  },
  {
    id: '3',
    title: 'Get Help via Discord',
    thumbnail: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    ctaText: 'Join Discord',
    ctaType: 'discord',
    icon: MessageCircle
  },
  {
    id: '4',
    title: 'Course Navigation Tips',
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    ctaText: 'Watch',
    ctaType: 'watch',
    icon: BookOpen
  }
];

export default function PlatformGuideSection() {
  return (
    <div className="feature-box-cyan rounded-2xl p-4">
      <div className="text-center mb-4">
        <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
          <div className="bg-gradient-cyan-blue p-3 rounded-xl">
            <Play className="w-8 h-8 text-white" />
          </div>
          <h2 className="display-6 fw-bold text-gradient-cyan mb-0">
            📺 Learn How to Use ScholarHat Effectively
          </h2>
        </div>
        <p className="text-muted fs-5 mx-auto" style={{maxWidth: '48rem'}}>
          Master the platform with our quick video guides and boost your learning experience
        </p>
      </div>

      <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-6">
        {guideVideos.map((video) => {
          const IconComponent = video.icon;
          return (
            <div
              key={video.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg-custom hover-shadow hover-translate transition-all"
            >
              <div className="position-relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-100 object-cover transition-all"
                  style={{height: '10rem'}}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 opacity-0 transition-all d-flex align-items-center justify-content-center">
                  <div className="bg-white bg-opacity-20 backdrop-blur rounded-circle p-3">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="position-absolute top-0 start-0 m-3">
                  <div className="bg-cyan-500 p-2 rounded shadow-custom">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="fw-bold text-dark mb-3 fs-6 lh-sm">
                  {video.title}
                </h3>
                
                <button className={`
                  btn w-100 py-2 rounded-xl fw-semibold transition-all d-flex align-items-center justify-content-center gap-2 small hover-scale
                  ${video.ctaType === 'discord' 
                    ? 'btn-gradient-cyan' 
                    : 'btn-gradient-teal'
                  }
                `}>
                  {video.ctaType === 'discord' ? (
                    <MessageCircle className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                  {video.ctaText}
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}