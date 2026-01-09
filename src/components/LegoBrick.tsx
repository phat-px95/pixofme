import React from 'react';

interface LegoBrickProps {
  color: 'red' | 'blue' | 'yellow' | 'purple' | 'teal' | 'orange' | 'pink';
  studs?: number; // Number of studs (2, 4, 6, 8)
  children: React.ReactNode;
  className?: string;
  onClick: any;
  fullWidth: boolean;
  activeAnimation: boolean;
}

const LegoBrick = ({
  color = 'red',
  studs = 4,
  children,
  className = '',
  onClick,
  fullWidth = false,
  activeAnimation = true,
}: LegoBrickProps) => {
  const brickRef = React.useRef<any>(null);
  const [studConfig, setStudConfig] = React.useState({
    count: 8,
    size: 24,
    gap: 16,
  });

  React.useEffect(() => {
    if (brickRef.current) {
      const width = brickRef.current.offsetWidth;
      // Calculate studs based on width
      const padding = 32; // 16px on each side
      const availableWidth = width - padding;
      // Stud size scales with brick width
      let studSize = 24;
      let studGap = 16;

      if (width < 200) {
        studSize = 24;
        studGap = 12;
      } else if (width > 400) {
        studSize = 32;
        studGap = 24;
      }

      const calculatedCount = Math.floor(availableWidth / (studSize + studGap));

      setStudConfig({
        count: Math.max(calculatedCount, 4), // Minimum 4 studs
        size: studSize,
        gap: studGap,
      });
    }
  }, []);

  const colorClasses = {
    red: 'bg-gradient-to-br from-red-600 to-red-700 shadow-red-800',
    blue: 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-700',
    yellow: 'bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-yellow-600',
    purple: 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-purple-700',
    teal: 'bg-gradient-to-br from-teal-500 to-teal-600 shadow-teal-700',
    orange: 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-orange-700',
    pink: 'bg-gradient-to-br from-pink-400 to-pink-500 shadow-pink-600',
    gray: 'bg-gradient-to-br from-slate-700 to-slate-800 shadow-slate-900',
    white: 'bg-white border-t-4 border-gray-200 shadow-gray-200',
  };

  const studColor = {
    red: 'bg-red-500 border-red-800',
    blue: 'bg-blue-400 border-blue-700',
    yellow: 'bg-yellow-300 border-yellow-600',
    purple: 'bg-purple-400 border-purple-700',
    teal: 'bg-teal-400 border-teal-700',
    orange: 'bg-orange-400 border-orange-700',
    pink: 'bg-pink-300 border-pink-600',
    gray: 'bg-slate-500 border-slate-700',
    white: 'bg-gray-300 border-gray-400',
  };

  return (
    <div
      ref={brickRef}
      className={`relative transition-all duration-200 ${activeAnimation ? 'hover:-translate-y-1' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {/* LEGO Studs - Dynamic size and count based on width */}
      <div
        className='absolute -top-4 left-4 right-4 flex z-10'
        style={{ gap: `${studConfig.gap}px` }}
      >
        {Array.from({ length: studConfig.count }).map((_, i) => (
          <div
            key={i}
            className={`rounded-t-md border-2 ${studColor[color]} shadow-sm flex-shrink-0`}
            style={{
              width: `${studConfig.size}px`,
              height: `${studConfig.size * 0.6}px`,
            }}
          />
        ))}
      </div>

      {/* Brick Body */}
      <div
        className={`
        ${colorClasses[color]} 
        rounded-lg p-3
        shadow-[0_6px_0_0] 
        hover:shadow-[0_10px_0_0]transition-all duration-200
      `}
      >
        {children}
      </div>
    </div>
  );
};

export default LegoBrick;
