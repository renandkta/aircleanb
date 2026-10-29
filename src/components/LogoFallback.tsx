import React from 'react';

interface LogoFallbackProps {
  size?: number;
  className?: string;
}

// The mark is white on transparent, so it sits on a blue tile and stays visible
// on white headers too. Served from /public, not from GitHub.
const LogoFallback: React.FC<LogoFallbackProps> = ({ size = 32, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg bg-[#00739A] ${className}`}
      style={{ width: `${size + 8}px`, height: `${size + 8}px` }}
    >
      <img
        src="/images/logo-mark.png"
        alt=""
        width={size}
        height={size}
        style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain' }}
      />
    </span>
  );
};

export default LogoFallback;
