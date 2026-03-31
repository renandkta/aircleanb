import React from 'react';
import { Link } from 'react-router-dom';
import LogoFallback from './LogoFallback';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <Link
      to="/"
      className={`flex items-center ${className}`}
      aria-label="AirCleanB home"
    >
      <LogoFallback size={size} />
      <span className="logo-text text-xl md:text-2xl font-bold ml-2 text-white">AirCleanB</span>
    </Link>
  );
};

export default Logo;
