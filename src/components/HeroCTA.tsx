import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import { Play } from 'lucide-react';

export default function HeroCTA() {
  const { t } = useTranslation();

  const handleBookTour = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Update URL hash
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 mb-16 md:mb-20 px-4'>
      <button className='group relative overflow-hidden bg-gradient-to-r from-crown-primary to-crown-primary text-crown-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-base sm:text-lg tracking-wide transition-all duration-500 hover:bg-crown-primary hover:scale-105 hover:shadow-xl hover:shadow-crown-primary/25 w-full sm:w-auto'>
        <span className='relative z-10 flex items-center justify-center'>
          <Logo color='white' size='24px' className='mr-2 mt-1' />
          {t('hero.experience_button')}
        </span>
        <div className='absolute inset-0 bg-gradient-to-r from-crown-primary to-crown-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </button>

      <button
        onClick={handleBookTour}
        className='group flex items-center justify-center space-x-3 sm:space-x-4 text-crown-white border-2 border-crown-white/40 hover:border-crown-primary px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-base sm:text-lg tracking-wide transition-all duration-500 hover:bg-crown-white/10 hover:scale-105 backdrop-blur-sm w-full sm:w-auto'
      >
        <Play className='w-5 h-5 sm:w-6 sm:h-6 group-hover:text-crown-primary transition-colors duration-300' />
        <span className='group-hover:text-crown-primary transition-colors duration-300'>{t('hero.tour_button')}</span>
      </button>
    </div>
  );
}
