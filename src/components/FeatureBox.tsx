import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureBoxProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'indigo';
  children?: React.ReactNode;
  className?: string;
}

const colorClasses = {
  blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-700',
  purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-700',
  green: 'from-green-50 to-green-100 border-green-200 text-green-700',
  orange: 'from-orange-50 to-orange-100 border-orange-200 text-orange-700',
  pink: 'from-pink-50 to-pink-100 border-pink-200 text-pink-700',
  indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-700'
};

const iconColorClasses = {
  blue: 'bg-blue-500 text-white',
  purple: 'bg-purple-500 text-white',
  green: 'bg-green-500 text-white',
  orange: 'bg-orange-500 text-white',
  pink: 'bg-pink-500 text-white',
  indigo: 'bg-indigo-500 text-white'
};

export default function FeatureBox({ title, description, icon: Icon, color, children, className = '' }: FeatureBoxProps) {
  return (
    <div className={`
      bg-gradient-to-br ${colorClasses[color]} 
      border-2 rounded-2xl p-6 
      hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
      ${className}
    `}>
      <div className="flex items-start gap-4 mb-4">
        <div className={`
          ${iconColorClasses[color]} 
          p-3 rounded-xl shadow-lg
        `}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}