import React, { useEffect, useState } from 'react';
import { Play, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-yellow-400/10 to-transparent animate-pulse"></div>
        </div>
        {/* Simulated Video Overlay Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* LED Light Effects */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Crown Logo */}
        <div className="mb-8 relative">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6 relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>
            <img 
              src="/api/placeholder/96/96" 
              alt="Crown Wellness Club"
              className="w-20 h-20 object-contain relative z-10"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 tracking-wider">
          <span className="block mb-2">CROWN</span>
          <span className="text-yellow-400 text-4xl lg:text-5xl font-light tracking-widest">
            WELLNESS CLUB
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl lg:text-2xl text-gray-300 mb-4 font-light tracking-wide">
          First interactive fitness in Azerbaijan Luxury Wellness Experience
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover unparalleled luxury in Baku's most exclusive fitness destination. 
          Where tradition meets innovation in 5000m² of premium wellness.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6 mb-16">
          <button className="group relative overflow-hidden bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/25">
            <span className="relative z-10">Experience Crown</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          
          <button className="group flex items-center space-x-3 text-white border-2 border-white/30 hover:border-yellow-400 px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-yellow-400/10">
            <Play className="w-5 h-5" />
            <span>Virtual Tour</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-400 text-sm tracking-widest">SCROLL TO EXPLORE</span>
            <ChevronDown className="w-6 h-6 text-yellow-400 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-32 bg-gradient-to-b from-yellow-400 to-transparent opacity-50 hidden lg:block"></div>
      <div className="absolute top-1/3 right-10 w-2 h-24 bg-gradient-to-b from-yellow-400 to-transparent opacity-50 hidden lg:block"></div>
    </section>
  );
};

export default Hero;