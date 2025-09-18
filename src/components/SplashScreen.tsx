import React, { useEffect } from 'react';
import Logo from './Logo';

interface SplashScreenProps {
  onEnter: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onEnter();
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyPress);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onEnter]);

  return (
    <div className="fixed inset-0 bg-[url('/new-background.svg')] bg-cover bg-center bg-no-repeat flex items-start justify-center pt-40 z-50 transition-opacity duration-1000">
      {/* Centered content container */}
      <div className='flex flex-col items-center justify-center z-10 text-center h-screen mt-8'>
        {/* Tagline below WELLNESS CLUB */}
        <p className='text-2xl font-light text-center tracking-wide text-crown-white mb-12'>
          A New Era of Wellness in Azerbaijan
        </p>

        {/* Enter Button */}
        <button
          onClick={onEnter}
          className='group relative overflow-hidden bg-yellow-400 text-black px-10 py-5 rounded-full font-bold text-lg tracking-wide transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/25'
        >
          <span className='relative z-10 flex items-center'>
            <Logo className='h-4 mr-3 text-black' variant='black' />
            ENTER – The World of Wellness
          </span>
          <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
