import React, { useEffect, useState } from 'react';
import { Play, ChevronDown, Crown, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface VideoHeroProps {
  isMuted: boolean;
  onToggleMute: (muted: boolean) => void;
}

const VideoHero: React.FC<VideoHeroProps> = ({ isMuted, onToggleMute }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();

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

  const handleBookTour = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Update URL hash
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted} // Doğrudan isMuted prop'unu kullan
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/doep7sd3t/video/upload/v1757633456/091254_c6vohz.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-crown-dark/60"></div>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-crown-dark/50 text-crown-white hover:bg-crown-primary/70 transition-colors duration-300 backdrop-blur-sm"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />} {/* isMuted prop'una göre ikonu göster */}
      </button>

      {/* Floating Luxury Elements */}
      <div className="absolute top-1/4 left-10 animate-float hidden lg:block opacity-20">
        <Sparkles className="w-8 h-8 text-crown-primary opacity-60" />
      </div>
      <div className="absolute top-1/3 right-10 animate-float-delayed hidden lg:block opacity-15">
        <Sparkles className="w-6 h-6 text-crown-primary opacity-40" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        {/* Main Heading with Animation */}
        <div className="mb-8 text-center">
          <img
            src="/Asset 6.svg"
            alt="Crown Wellness Club"
            className="w-auto h-48 lg:h-64 mx-auto drop-shadow-2xl filter brightness-110 animate-shine"
          />
        </div>

        {/* Tagline with Cultural Emphasis */}
        <p className="text-2xl lg:text-3xl text-crown-white mb-6 font-light tracking-wide">
          <span className="text-crown-primary font-semibold">{t('hero.tagline_part1')}</span> {t('hero.tagline_part2')}
        </p>
        
        <p className="text-lg lg:text-xl text-crown-white/80 mb-4 max-w-3xl mx-auto leading-relaxed">
          {t('hero.description_part1')}
        </p>

        <p className="text-base text-crown-white/70 mb-16 max-w-2xl mx-auto leading-relaxed">
          {t('hero.description_part2')}
        </p>

        {/* Premium CTA Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8 mb-20">
          <button className="group relative overflow-hidden bg-gradient-to-r from-crown-primary to-crown-primary text-crown-white px-10 py-5 rounded-full font-bold text-lg tracking-wide transition-all duration-500 hover:bg-crown-primary hover:scale-105 hover:shadow-xl hover:shadow-crown-primary/25">
            <span className="relative z-10 flex items-center">
              <Crown className="w-5 h-5 mr-3" />
              {t('hero.experience_button')}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-crown-primary to-crown-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={handleBookTour}
            className="group flex items-center space-x-4 text-crown-white border-2 border-crown-white/40 hover:border-crown-primary px-10 py-5 rounded-full font-semibold text-lg tracking-wide transition-all duration-500 hover:bg-crown-white/10 hover:scale-105 backdrop-blur-sm"
          >
            <Play className="w-6 h-6 group-hover:text-crown-primary transition-colors duration-300" />
            <span className="group-hover:text-crown-primary transition-colors duration-300">{t('hero.tour_button')}</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-3">
            <span className="text-crown-white text-base tracking-widest font-light">
              {t('hero.scroll_indicator')}
            </span>
            <div className="flex flex-col space-y-1">
              <ChevronDown className="w-6 h-6 text-crown-white animate-bounce" />
              <ChevronDown className="w-6 h-6 text-crown-white animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Premium Decorative Elements */}
      <div className="absolute top-20 left-20 w-2 h-40 bg-gradient-to-b from-crown-primary to-transparent opacity-30 hidden xl:block"></div>
      <div className="absolute top-32 right-20 w-2 h-32 bg-gradient-to-b from-crown-primary to-transparent opacity-20 hidden xl:block"></div>
      <div className="absolute bottom-32 left-32 w-32 h-2 bg-gradient-to-r from-crown-primary to-transparent opacity-25 hidden xl:block"></div>
    </section>
  );
};

export default VideoHero;
