import React from 'react';
import LogoFallback from './LogoFallback';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <LogoFallback size={size} />
      <span className="logo-text text-2xl font-bold ml-2 text-white">AirCleanB</span>
    </div>
  );
};

export default Logo;
