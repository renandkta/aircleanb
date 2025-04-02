import React from 'react';

interface LogoFallbackProps {
  size?: number;
  className?: string;
}

const LogoFallback: React.FC<LogoFallbackProps> = ({ size = 32, className = "" }) => {
  // Use a URL direta do GitHub para o logo
  const logoUrl = "https://raw.githubusercontent.com/renandkta/aircleanb/main/src/ChatGPT%20Image%20Apr%201%2C%202025%20at%2010_38_34%20PM.png";
  
  return (
    <img 
      src={logoUrl}
      alt="AirCleanB Logo" 
      className={`mr-2 ${className}`}
      style={{ 
        height: `${size}px`, 
        width: `${size}px`,
        objectFit: 'contain'
      }}
    />
  );
};

export default LogoFallback;
