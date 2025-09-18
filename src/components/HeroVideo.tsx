import { useRef } from 'react';

export default function HeroVideo({ isMuted }: { isMuted: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className='absolute inset-0'>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted} // Doğrudan isMuted prop'unu kullan
        playsInline
        className='w-full h-full object-cover'
      >
        <source
          src='https://res.cloudinary.com/doep7sd3t/video/upload/v1757633456/091254_c6vohz.mp4'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
      <div className='absolute inset-0 bg-crown-dark/60'></div>
    </div>
  );
}
