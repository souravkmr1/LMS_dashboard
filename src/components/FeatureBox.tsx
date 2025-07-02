import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureBoxProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'cyan' | 'blue' | 'teal' | 'orange' | 'pink' | 'indigo';
  children?: React.ReactNode;
  className?: string;
}

const colorClasses = {
  cyan: 'from-cyan-50 to-cyan-100 border-cyan-200 text-cyan-700',
  blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-700',
  teal: 'from-teal-50 to-teal-100 border-teal-200 text-teal-700',
  orange: 'from-orange-50 to-orange-100 border-orange-200 text-orange-700',
  pink: 'from-pink-50 to-pink-100 border-pink-200 text-pink-700',
  indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-700'
};

const iconColorClasses = {
  cyan: 'bg-cyan-500 text-white',
  blue: 'bg-blue-500 text-white',
  teal: 'bg-teal-500 text-white',
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