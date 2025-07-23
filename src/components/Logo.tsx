import React from 'react';

const Logo: React.FC = () => {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      {/* Custom PAO logo design */}
      <circle cx="16" cy="16" r="14" fill="currentColor" stroke="white" strokeWidth="2"/>
      <path 
        d="M12 10h8v2h-6v4h5v2h-5v4h6v2h-8V10z" 
        fill="white"
      />
      {/* Add your custom SVG paths here */}
    </svg>
  );
};

export default Logo;