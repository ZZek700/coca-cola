import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HeroScrollIndicator() {
  const { t } = useTranslation();

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Update URL hash
      window.history.pushState(null, '', '#services');
    }
  };

  return (
    <button
      onClick={handleScrollToServices}
      className='absolute -bottom-16 sm:-bottom-14 md:-bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform duration-300 focus:outline-none p-2'
      aria-label='Scroll to services section'
    >
      <div className='flex flex-col items-center space-y-3'>
        <span className='text-crown-white text-base tracking-widest font-light'>{t('hero.scroll_indicator')}</span>
        <div className='flex flex-col'>
          <ChevronDown className='w-6 h-6 text-crown-white animate-bounce' />
          <ChevronDown className='w-6 h-6 text-crown-white animate-bounce' />
        </div>
      </div>
    </button>
  );
}
