import React from 'react';

const HolographicEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Holographic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse" />
      
      {/* Digital Rain Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-green-400/30 to-transparent animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              height: '100px',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Glitch Lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent opacity-0 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: '0.1s'
            }}
          />
        ))}
      </div>
      
      {/* Circuit Pattern */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#E31D3C" strokeWidth="0.5" strokeDasharray="5,5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#4A1118" strokeWidth="0.5" strokeDasharray="3,3" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="#E31D3C" strokeWidth="0.5" strokeDasharray="2,2" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="#E31D3C" strokeWidth="0.5" opacity="0.5" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="#E31D3C" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>
      
      {/* Data Streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"
            style={{
              top: `${30 + i * 20}%`,
              left: '10%',
              right: '10%',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
      
      {/* Corner Tech Elements */}
      <div className="absolute top-8 right-8 w-16 h-16 opacity-30">
        <div className="w-full h-full border border-red-500/50 rotate-45 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-red-500/50 -translate-x-1/2 -translate-y-1/2 rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <div className="absolute bottom-8 left-8 w-16 h-16 opacity-30">
        <div className="w-full h-full border border-red-500/50 animate-pulse" />
        <div className="absolute top-0 left-0 w-4 h-4 bg-red-500/50 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-red-500/50 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default HolographicEffect;