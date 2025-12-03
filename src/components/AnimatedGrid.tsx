import React from 'react';

const AnimatedGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-green-500/20 animate-pulse"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {i % 3 === 0 && (
              <div className="w-16 h-16 border-2 border-green-500/30 rotate-45 animate-spin-slow" />
            )}
            {i % 3 === 1 && (
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-transparent rounded-full animate-pulse" />
            )}
            {i % 3 === 2 && (
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-green-500/40 to-transparent animate-pulse" />
            )}
          </div>
        ))}
      </div>
      
      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-scan-vertical" />
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-green-500/50 to-transparent animate-scan-horizontal" />
      </div>
      
      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-500/40 animate-pulse" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-500/40 animate-pulse" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-500/40 animate-pulse" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-500/40 animate-pulse" />
    </div>
  );
};

export default AnimatedGrid;