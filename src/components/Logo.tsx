import React from 'react';
import LogoFallback from './LogoFallback';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 32 }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <LogoFallback size={size} />
      <span className="text-2xl font-bold text-blue-900">AirCleanB</span>
    </div>
  );
};

export default Logo;
