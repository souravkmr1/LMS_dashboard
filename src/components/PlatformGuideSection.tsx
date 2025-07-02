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
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-100">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
            <Play className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            📺 Learn How to Use ScholarHat Effectively
          </h2>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Master the platform with our quick video guides and boost your learning experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guideVideos.map((video) => {
          const IconComponent = video.icon;
          return (
            <div
              key={video.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <div className="bg-blue-500 p-2 rounded-lg shadow-lg">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-gray-800 mb-3 text-lg leading-tight">
                  {video.title}
                </h3>
                
                <button className={`
                  w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm
                  ${video.ctaType === 'discord' 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg'
                  }
                  transform hover:scale-105
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