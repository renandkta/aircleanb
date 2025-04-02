import React from 'react';

interface LogoFallbackProps {
  size?: number;
  className?: string;
}

const LogoFallback: React.FC<LogoFallbackProps> = ({ size = 32, className = "" }) => {
  // Atualizando para o novo URL do logo
  const logoUrl = "https://raw.githubusercontent.com/renandkta/aircleanb/main/src/ChatGPT%20Image%20Apr%202%2C%202025%20at%2012_26_52%20AM.png";
  
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
