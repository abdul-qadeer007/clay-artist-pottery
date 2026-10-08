'use client';

import React from 'react';

interface VideoEmbedProps {
  src?: string;
  poster?: string;
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({
  src = "/pottery-process.mp4",
  poster,
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.35)] border-4 border-[#4D2D20] bg-[#24130D] aspect-video flex items-center justify-center">
        <video
          src={src}
          poster={poster}
          controls
          playsInline
          muted
          autoPlay
          loop
          preload="metadata"
          className="w-full h-full object-cover rounded-2xl sm:rounded-[28px]"
        >
          Your browser does not support HTML5 video streaming.
        </video>
      </div>
    </div>
  );
};
