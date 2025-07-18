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
  cyan: 'feature-box-cyan text-cyan-700',
  blue: 'feature-box-blue text-blue-700',
  teal: 'feature-box-teal text-teal-700',
  orange: 'feature-box-orange text-orange-700',
  pink: 'feature-box-pink text-pink-700',
  indigo: 'feature-box-indigo text-indigo-700'
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
      ${colorClasses[color]} 
      rounded-2xl p-4 
      hover-shadow hover-translate transition-all
      ${className}
    `}>
      <div className="d-flex align-items-start gap-4 mb-4">
        <div className={`
          ${iconColorClasses[color]} 
          p-3 rounded-xl shadow-custom
        `}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="fs-5 fw-bold mb-2">{title}</h3>
          <p className="text-muted small">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}