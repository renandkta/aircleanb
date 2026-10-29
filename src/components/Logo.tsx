import React from 'react';
import LogoFallback from './LogoFallback';

interface LogoProps {
  className?: string;
  size?: number;
  // Dark wordmark for white headers; light for blue or dark backgrounds.
  tone?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 32, tone = 'light' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <LogoFallback size={size} />
      <span className={`font-display text-xl md:text-2xl font-extrabold ml-2 ${tone === 'dark' ? 'text-brand-ink' : 'text-white'}`}>
        AirCleanB
      </span>
    </div>
  );
};

export default Logo;
