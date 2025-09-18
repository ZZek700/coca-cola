import React, { useEffect, useState } from 'react';
import { Sparkles, Volume2, VolumeX } from 'lucide-react';
import HeroScrollIndicator from '../components/HeroScrollIndicator';
import HeroCTA from '../components/HeroCTA';
import HeroMain from '../components/hero-main';
import HeroVideo from '../components/HeroVideo';
import HeroMuteButton from '../components/HeroMuteButton';

interface VideoHeroProps {
  isMuted: boolean;
  onToggleMute: (muted: boolean) => void;
}

const VideoHero: React.FC<VideoHeroProps> = ({ isMuted, onToggleMute }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted; // isMuted prop'una göre videonun sesini ayarla
    }
  }, [isMuted]); // isMuted prop'u değiştiğinde çalışır

  const toggleMute = () => {
    // Sadece App.tsx'teki state'i güncelleyen callback'i çağırıyoruz.
    // Video elementinin muted özelliği, isMuted prop'u değiştiğinde
    // useEffect tarafından veya doğrudan video elementindeki muted={isMuted}
    // attribute'u tarafından güncellenecektir.
    onToggleMute(!isMuted);
  };

  return (
    <section id='home' className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Video Background */}
      <HeroVideo isMuted={isMuted} />

      {/* Mute/Unmute Button */}
      <HeroMuteButton isMuted={isMuted} toggleMute={toggleMute} />

      {/* Floating Luxury Elements */}
      <div className='absolute top-1/4 left-10 animate-float hidden lg:block opacity-20'>
        <Sparkles className='w-8 h-8 text-crown-primary opacity-60' />
      </div>
      <div className='absolute top-1/3 right-10 animate-float-delayed hidden lg:block opacity-15'>
        <Sparkles className='w-6 h-6 text-crown-primary opacity-40' />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 transition-all duration-1500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Main Heading with Animation */}
        <HeroMain />

        {/* Premium CTA Buttons */}
        <HeroCTA />

        {/* Scroll Indicator */}
        <HeroScrollIndicator />
      </div>

      {/* Premium Decorative Elements */}
      <div className='absolute top-20 left-20 w-2 h-40 bg-gradient-to-b from-crown-primary to-transparent opacity-30 hidden xl:block'></div>
      <div className='absolute top-32 right-20 w-2 h-32 bg-gradient-to-b from-crown-primary to-transparent opacity-20 hidden xl:block'></div>
      <div className='absolute bottom-32 left-32 w-32 h-2 bg-gradient-to-r from-crown-primary to-transparent opacity-25 hidden xl:block'></div>
    </section>
  );
};

export default VideoHero;
