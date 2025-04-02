import React, { useState, useEffect } from 'react';
// Try multiple import approaches
import logoFromAssets from '../assets/logo.png';

interface LogoFallbackProps {
  size?: number;
  className?: string;
}

const LogoFallback: React.FC<LogoFallbackProps> = ({ size = 32, className = "" }) => {
  const [logoSrc, setLogoSrc] = useState<string>(logoFromAssets);
  const [fallbackIndex, setFallbackIndex] = useState<number>(0);
  
  // List of possible logo sources to try
  const fallbackSources = [
    logoFromAssets,
    '/logo.png',
    '/images/logo.png',
    'https://raw.githubusercontent.com/renandkta/aircleanb/main/src/ChatGPT%20Image%20Apr%201%2C%202025%20at%2010_38_34%20PM.png'
  ];
  
  // Handle image load error by trying the next fallback source
  const handleError = () => {
    if (fallbackIndex < fallbackSources.length - 1) {
      setFallbackIndex(fallbackIndex + 1);
      setLogoSrc(fallbackSources[fallbackIndex + 1]);
    }
  };
  
  return (
    <img 
      src={logoSrc}
      alt="AirCleanB Logo" 
      className={`mr-2 ${className}`}
      style={{ height: `${size}px`, width: `${size}px` }}
      onError={handleError}
    />
  );
};

export default LogoFallback;
