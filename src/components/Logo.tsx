import React from 'react';
import logoImage from '../assets/logo.png';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 32 }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="AirCleanB Logo" 
        className="h-8 w-8 mr-2" 
        style={{ height: `${size}px`, width: `${size}px` }}
      />
      <span className="text-2xl font-bold text-blue-900">AirCleanB</span>
    </div>
  );
};

export default Logo;
