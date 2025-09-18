import { useTranslation } from 'react-i18next';

export default function HeroMain() {
  const { t } = useTranslation();

  return (
    <>
      <div className='mb-6 md:mb-8 text-center'>
        <img
          src='/Asset 6.svg'
          alt='Crown Wellness Club'
          className='w-auto h-32 sm:h-40 md:h-48 lg:h-64 mx-auto drop-shadow-2xl filter brightness-110 animate-shine'
        />
      </div>

      {/* Tagline with Cultural Emphasis */}
      <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-crown-white mb-4 md:mb-6 font-light tracking-wide px-4'>
        <span className='text-crown-primary font-semibold'>{t('hero.tagline_part1')}</span> {t('hero.tagline_part2')}
      </p>

      <p className='text-sm sm:text-base text-crown-white/70 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed px-4'>
        {t('hero.description_part2')}
      </p>
    </>
  );
}
