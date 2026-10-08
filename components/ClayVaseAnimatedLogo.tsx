import React from 'react';

interface ClayVaseAnimatedLogoProps {
  className?: string;
  size?: number | string;
  responsive?: boolean;
  heroMode?: boolean;
}

export const ClayVaseAnimatedLogo: React.FC<ClayVaseAnimatedLogoProps> = ({ 
  className = "",
  size,
  responsive = true,
  heroMode = true
}) => {
  return (
    <div className={`relative flex flex-col items-center justify-center select-none w-full ${className}`}>
      
      {/* 1. Ambient Warm Kiln Glow Aura */}
      {heroMode && (
        <div className="absolute inset-0 max-w-[440px] max-h-[440px] m-auto rounded-full bg-gradient-to-tr from-[#B5532A]/20 via-[#C88D34]/15 to-transparent blur-3xl pointer-events-none" />
      )}

      {/* 2. Pottery Wheel Circular Stage Frame */}
      <div className="relative flex items-center justify-center p-3 sm:p-5 md:p-6 w-full max-w-[420px] aspect-square">
        
        {/* Outer Rotating Dashed Pottery Wheel Ring */}
        <div 
          className="absolute inset-0 m-auto w-full h-full max-w-[420px] max-h-[420px] rounded-full border-2 border-dashed border-[#B5532A]/35 animate-slow-spin pointer-events-none transform-gpu"
          aria-hidden="true" 
        />

        {/* Inner Counter-Rotating Dotted Clay Slip Track */}
        <div 
          className="absolute inset-2 sm:inset-3 md:inset-4 m-auto w-[88%] h-[88%] max-w-[360px] max-h-[360px] rounded-full border-2 border-dotted border-[#C88D34]/40 animate-reverse-spin pointer-events-none transform-gpu"
          aria-hidden="true"
        />

        {/* 3. Inline Interactive SVG with Piece-by-Piece Staggered Assembly & Floating Hover */}
        <div className="relative z-20 animate-pot-wheel will-change-transform transform-gpu group transition-transform duration-500 hover:scale-105 flex items-center justify-center w-full h-full">
          <svg
            viewBox="0 0 1000 1000"
            width="100%"
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`drop-shadow-[0_12px_28px_rgba(181,83,42,0.35)] ${
              responsive 
                ? 'w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 max-w-full max-h-full' 
                : 'w-56 h-56'
            }`}
            style={size ? { width: size, height: size } : undefined}
            aria-label="Clay Artist Pottery Handcrafted Animated Logo"
          >
            <defs>
              {/* Artisanal Terracotta Clay Gradient */}
              <radialGradient id="clayTerracottaGrad" cx="45%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#DE6634" />
                <stop offset="50%" stopColor="#B5532A" />
                <stop offset="85%" stopColor="#8D3A17" />
                <stop offset="100%" stopColor="#632309" />
              </radialGradient>

              {/* 3D Clay Relief Drop Shadow */}
              <filter id="clayRelief" x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="2" dy="6" stdDeviation="4.5" floodColor="#3A2016" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* PIECE 1 (#piece-neck-top): Upper Neck & Left Shoulder Body */}
            <g
              id="piece-neck-top"
              filter="url(#clayRelief)"
              style={{
                animation: 'assemblePiece1 0.72s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards',
                transformOrigin: '500px 200px',
                willChange: 'transform, opacity',
              }}
            >
              <path
                d="M 345 170 
                   C 420 168, 580 168, 655 170 
                   C 662 178, 658 200, 605 212 
                   C 560 225, 545 255, 545 300 
                   C 545 315, 620 330, 755 365 
                   C 690 410, 600 425, 490 425 
                   C 340 425, 270 475, 240 540 
                   C 270 420, 360 360, 440 330 
                   C 455 260, 430 220, 395 212 
                   C 342 200, 338 178, 345 170 Z"
                fill="url(#clayTerracottaGrad)"
              />
            </g>

            {/* PIECE 2 (#piece-diagonal-body): Central Sweeping Diagonal Arm / Handle */}
            <g
              id="piece-diagonal-body"
              filter="url(#clayRelief)"
              style={{
                animation: 'assemblePiece2 0.72s cubic-bezier(0.16, 1, 0.3, 1) 0.32s forwards',
                transformOrigin: '500px 500px',
                willChange: 'transform, opacity',
              }}
            >
              <path
                d="M 490 425 
                   C 600 425, 690 410, 755 365 
                   C 660 480, 520 620, 270 805 
                   C 360 740, 550 560, 595 480 
                   C 550 450, 480 445, 400 448 
                   C 330 450, 280 490, 250 535 
                   C 275 465, 370 425, 490 425 Z"
                fill="url(#clayTerracottaGrad)"
              />
            </g>

            {/* PIECE 3A (#piece-right-leaf): Right Leaf Teardrop Accent */}
            <g
              id="piece-right-leaf"
              filter="url(#clayRelief)"
              style={{
                animation: 'assemblePiece3Leaf 0.72s cubic-bezier(0.16, 1, 0.3, 1) 0.60s forwards',
                transformOrigin: '750px 600px',
                willChange: 'transform, opacity',
              }}
            >
              <path
                d="M 810 445 
                   C 840 530, 835 640, 750 740 
                   C 700 795, 650 815, 635 812 
                   C 630 790, 650 720, 685 640 
                   C 725 550, 760 485, 810 445 Z"
                fill="url(#clayTerracottaGrad)"
              />
            </g>

            {/* PIECE 3B (#piece-bottom-base): Bottom Pedestal Curved Base */}
            <g
              id="piece-bottom-base"
              filter="url(#clayRelief)"
              style={{
                animation: 'assemblePiece3Base 0.72s cubic-bezier(0.16, 1, 0.3, 1) 0.66s forwards',
                transformOrigin: '500px 850px',
                willChange: 'transform, opacity',
              }}
            >
              <path
                d="M 310 825 
                   C 420 795, 580 800, 675 832 
                   C 650 850, 590 895, 490 910 
                   C 390 900, 335 855, 310 825 Z"
                fill="url(#clayTerracottaGrad)"
              />
            </g>
          </svg>
        </div>

      </div>

      {/* 4. Clay-Dust Pottery Wheel Shadow Pulse beneath */}
      <div 
        className="w-36 sm:w-48 md:w-60 lg:w-72 h-4 sm:h-5 bg-[#B5532A]/25 rounded-[100%] blur-md -mt-2 sm:-mt-3 animate-shadow-pulse pointer-events-none transform-gpu"
        aria-hidden="true"
      />
    </div>
  );
};
