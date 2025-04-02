import React from 'react';
// Import the logo directly
import logoImage from '../assets/logo.png';

interface LogoImageProps {
  size?: number;
  className?: string;
}

const LogoImage: React.FC<LogoImageProps> = ({ size = 32, className = "" }) => {
  return (
    <img 
      src={logoImage} 
      alt="AirCleanB Logo" 
      className={`mr-2 ${className}`}
      style={{ height: `${size}px`, width: `${size}px` }}
    />
  );
};

export default LogoImage;
