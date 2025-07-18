import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureBoxProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'cyan' | 'blue' | 'teal' | 'orange' | 'pink' | 'indigo';
  children?: React.ReactNode;
  className?: string;
  isDarkMode?: boolean;
}

const colorClasses = {
  cyan: {
    light: 'from-cyan-50 to-cyan-100 border-cyan-200 text-cyan-700',
    dark: 'from-cyan-900/20 to-cyan-800/20 border-cyan-700/30 text-cyan-300'
  },
  blue: {
    light: 'from-blue-50 to-blue-100 border-blue-200 text-blue-700',
    dark: 'from-blue-900/20 to-blue-800/20 border-blue-700/30 text-blue-300'
  },
  teal: {
    light: 'from-teal-50 to-teal-100 border-teal-200 text-teal-700',
    dark: 'from-teal-900/20 to-teal-800/20 border-teal-700/30 text-teal-300'
  },
  orange: {
    light: 'from-orange-50 to-orange-100 border-orange-200 text-orange-700',
    dark: 'from-orange-900/20 to-orange-800/20 border-orange-700/30 text-orange-300'
  },
  pink: {
    light: 'from-pink-50 to-pink-100 border-pink-200 text-pink-700',
    dark: 'from-pink-900/20 to-pink-800/20 border-pink-700/30 text-pink-300'
  },
  indigo: {
    light: 'from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-700',
    dark: 'from-indigo-900/20 to-indigo-800/20 border-indigo-700/30 text-indigo-300'
  }
};

const iconColorClasses = {
  cyan: 'bg-cyan-500 text-white',
  blue: 'bg-blue-500 text-white',
  teal: 'bg-teal-500 text-white',
  orange: 'bg-orange-500 text-white',
  pink: 'bg-pink-500 text-white',
  indigo: 'bg-indigo-500 text-white'
};

export default function FeatureBox({ title, description, icon: Icon, color, children, className = '', isDarkMode = false }: FeatureBoxProps) {
  const colorClass = isDarkMode ? colorClasses[color].dark : colorClasses[color].light;
  
  return (
    <div className={`
      bg-gradient-to-br ${colorClass}
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
          <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
            isDarkMode ? 'text-theme-primary' : 'text-gray-800'
          }`}>{title}</h3>
          <p className={`text-sm transition-colors duration-300 ${
            isDarkMode ? 'text-theme-secondary' : 'text-gray-600'
          }`}>{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}