import { useState, useEffect, useRef } from 'react';
import { Dumbbell, Heart, Scissors, Coffee, ShoppingBag, Users2, Play, ChevronRight, Sparkles, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../components/Logo';

const Interactive3DServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Dumbbell,
      titlePart1: t('services.fitness_zone.title_part1'),
      titlePart2: t('services.fitness_zone.title_part2'),
      subtitle: t('services.fitness_zone.subtitle'),
      videoPlaceholder: 'Premium equipment in motion',
      imageSrc: '/fitness-zone.jpg.png',
      features: ['Pilates Studio', 'Boxing Arena', 'CrossFit Zone', 'Cycling Studio', 'Strength Training'],
      description: t('services.fitness_zone.description'),
      stats: { equipment: '300+', space: '1500m²', capacity: '200' },
      color: 'from-blue-600 to-cyan-600',
      glowColor: 'blue-400',
    },
    {
      icon: Heart,
      titlePart1: t('services.spa_zone.title_part1'),
      titlePart2: t('services.spa_zone.title_part2'),
      subtitle: t('services.spa_zone.subtitle'),
      videoPlaceholder: 'Luxury spa treatments',
      imageSrc: '/spa-zone.jpg.png',
      features: ['Massage Therapy', 'Hydrotherapy Pool', 'Finnish Sauna', 'Turkish Hammam', 'Recovery Suites'],
      description: t('services.spa_zone.description'),
      stats: { treatments: '15+', rooms: '8', therapists: '12' },
      color: 'from-emerald-600 to-teal-600',
      glowColor: 'emerald-400',
    },
    {
      icon: Scissors,
      titlePart1: t('services.beauty_zone.title_part1'),
      titlePart2: t('services.beauty_zone.title_part2'),
      subtitle: t('services.beauty_zone.subtitle'),
      videoPlaceholder: 'Professional beauty services',
      imageSrc: '/beauty-zone.jpg.png',
      features: ['Hair Styling', 'Advanced Skincare', 'Manicure & Pedicure', 'Aesthetic Treatments', 'Bridal Packages'],
      description: t('services.beauty_zone.description'),
      stats: { services: '25+', specialists: '8', chairs: '12' },
      color: 'from-purple-600 to-pink-600',
      glowColor: 'purple-400',
    },
    {
      icon: Users2,
      titlePart1: t('services.womens_zone.title_part1'),
      titlePart2: t('services.womens_zone.title_part2'),
      subtitle: t('services.womens_zone.subtitle'),
      videoPlaceholder: "Women's private facilities",
      imageSrc: '/womens-zone.jpg.png',
      features: [
        'Private Training Area',
        'Women-Only Classes',
        'Dedicated Changing Rooms',
        'Female Trainers',
        'Cultural Sensitivity',
      ],
      description: t('services.womens_zone.description'),
      stats: { space: '800m²', trainers: '15', privacy: '100%' },
      color: 'from-rose-600 to-pink-600',
      glowColor: 'rose-400',
      featured: true,
    },
    {
      icon: Coffee,
      titlePart1: t('services.fitbar.title_part1'),
      titlePart2: t('services.fitbar.title_part2'),
      subtitle: t('services.fitbar.subtitle'),
      videoPlaceholder: 'Healthy dining experience',
      imageSrc: '/fitbar-restaurant.jpg.png',
      features: ['Protein Bar', 'Healthy Meals', 'Fresh Juices', 'Supplement Store', 'Social Dining'],
      description: t('services.fitbar.description'),
      stats: { seats: '60', menu: '40+', nutrition: 'Expert' },
      color: 'from-amber-600 to-orange-600',
      glowColor: 'amber-400',
    },
    {
      icon: ShoppingBag,
      titlePart1: t('services.wellness_shop.title_part1'),
      titlePart2: t('services.wellness_shop.title_part2'),
      subtitle: t('services.wellness_shop.subtitle'),
      videoPlaceholder: 'Luxury wellness products',
      imageSrc: '/wellness-shop.jpg.png',
      features: ['Athletic Wear', 'Premium Supplements', 'Wellness Tech', 'Fitness Equipment', 'Exclusive Brands'],
      description: t('services.wellness_shop.description'),
      stats: { brands: '15+', products: '200+', exclusive: 'Yes' },
      color: 'from-indigo-600 to-purple-600',
      glowColor: 'indigo-400',
    },
  ];

  const handleServiceClick = (index: number) => {
    setSelectedService(index);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedService !== null) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  return (
    <section id='services' ref={sectionRef} className='relative py-24 bg-crown-dark overflow-hidden'>
      {/* Premium Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-crown-dark-red/5 rounded-full blur-3xl animate-pulse-slow'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-crown-complementary/5 rounded-full blur-3xl animate-pulse-slow'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-crown-dark/50 to-transparent'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='text-center mb-20'
        >
          <div className='flex items-center justify-center mb-8'>
            <div className='w-20 h-0.5 bg-gradient-to-r from-transparent to-crown-primary'></div>
            <Sparkles className='w-8 h-8 text-crown-primary mx-6' />
            <div className='w-20 h-0.5 bg-gradient-to-l from-transparent to-crown-primary'></div>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-crown-white mb-6 md:mb-8 tracking-wide px-4'>
            {t('services.section_title')}{' '}
            <span className='text-crown-primary'>{t('services.section_title_highlight')}</span>
          </h2>
          <p className='text-lg sm:text-xl md:text-2xl text-crown-white max-w-4xl mx-auto leading-relaxed font-light px-4'>
            {t('services.section_description')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className='group relative'
            >
              {/* Featured Badge for Women's Zone */}
              {service.featured && (
                <div className='absolute -top-4 left-6 z-30'>
                  <div className='bg-crown-primary text-crown-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2'>
                    <Logo variant='white' size='22px' className='mb-1' />
                    CULTURALLY DESIGNED
                  </div>
                </div>
              )}

              {/* Service Card */}
              <div
                className='relative h-full cursor-pointer bg-crown-white backdrop-blur-xl border-2 border-gray-700 hover:border-crown-dark-red/30 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105'
                onClick={() => handleServiceClick(index)}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Service Image */}
                <div className={`relative h-48 sm:h-56 md:h-64 bg-gradient-to-br ${service.color} overflow-hidden`}>
                  <div className='absolute inset-0 bg-crown-dark/30'></div>
                  <img
                    src={service.imageSrc}
                    alt={`${service.titlePart1} ${service.titlePart2} - ${service.subtitle}`}
                    className='w-full h-full object-cover'
                  />

                  {/* Play Button Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      activeService === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className='w-20 h-20 bg-crown-dark/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-crown-white/30'>
                      <Play className='w-8 h-8 text-crown-white ml-1' />
                    </div>
                  </div>

                  <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-crown-dark/80 to-transparent'></div>
                </div>

                {/* Card Content */}
                <div className='p-4 sm:p-6 md:p-8 bg-gray-800 flex flex-col h-full'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='flex-1'>
                      <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>
                        <span className='text-crown-primary'>{service.titlePart1}</span>{' '}
                        <span className='text-crown-white'>{service.titlePart2}</span>
                      </h3>
                      <p className='text-crown-primary text-xs sm:text-sm'>{service.subtitle}</p>
                    </div>
                    <ChevronRight className='w-5 h-5 sm:w-6 sm:h-6 text-crown-primary transition-transform duration-300 flex-shrink-0' />
                  </div>

                  <div className='flex-grow flex flex-col'>
                    <p className='text-crown-white leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base'>
                      {service.description}
                    </p>

                    {/* Stats */}
                    <div className='flex justify-between mb-4 sm:mb-6 text-center'>
                      {Object.entries(service.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className='flex-1'>
                          <div className='text-crown-primary font-bold text-lg sm:text-xl'>{value}</div>
                          <div className='text-crown-white text-xs uppercase tracking-wider'>{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className='w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-500 text-sm sm:text-base bg-crown-primary text-crown-white hover:bg-crown-primary'>
                      {t('services.learn_more')}
                    </button>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className='absolute -inset-1 bg-gradient-to-r from-crown-primary to-crown-primary opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-700 -z-10'></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cultural Sensitivity Highlight */}
        <div
          className={`mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='bg-crown-primary/20 border border-crown-primary/40 rounded-3xl p-12 max-w-5xl mx-auto backdrop-blur-sm'>
            <div className='text-center'>
              <Users2 className='w-12 h-12 text-crown-primary mx-auto mb-6' />
              <h3 className='text-3xl font-bold text-crown-white mb-6'>
                {t('services.cultural_banner_title')}{' '}
                <span className='text-crown-primary'>{t('services.cultural_banner_highlight')}</span>
              </h3>
              <p className='text-xl text-crown-white leading-relaxed max-w-3xl mx-auto'>
                {t('services.cultural_banner_description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-2 sm:p-4'
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='bg-crown-dark border-2 border-crown-primary rounded-2xl sm:rounded-3xl w-full max-w-[95vw] sm:max-w-2xl lg:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto overflow-x-hidden mt-4 sm:mt-0'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className='absolute top-3 right-3 sm:top-6 sm:right-6 z-10 p-2 rounded-full bg-crown-dark/80 text-crown-white hover:bg-crown-primary transition-all duration-300'
              >
                <X className='w-5 h-5 sm:w-6 sm:h-6' />
              </button>

              {/* Modal Content */}
              <div className='relative'>
                {/* Service Image */}
                <div
                  className={`relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br ${services[selectedService].color} overflow-hidden rounded-t-2xl sm:rounded-t-3xl`}
                >
                  <div className='absolute inset-0 bg-crown-dark/30'></div>
                  <img
                    src={services[selectedService].imageSrc}
                    alt={`${services[selectedService].titlePart1} ${services[selectedService].titlePart2}`}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-crown-dark/80 to-transparent'></div>
                </div>

                {/* Modal Body */}
                <div className='p-4 sm:p-6 lg:p-8'>
                  <div className='mb-4 sm:mb-6'>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-3'>
                      <span className='text-crown-primary'>{services[selectedService].titlePart1}</span>{' '}
                      <span className='text-crown-white'>{services[selectedService].titlePart2}</span>
                    </h2>
                    <p className='text-crown-primary text-base sm:text-lg'>{services[selectedService].subtitle}</p>
                  </div>

                  <p className='text-crown-white leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg'>
                    {services[selectedService].description}
                  </p>

                  {/* Stats */}
                  <div className='grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8'>
                    {Object.entries(services[selectedService].stats).map(([key, value], statIndex) => (
                      <div
                        key={statIndex}
                        className='text-center bg-crown-primary/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-crown-primary/20'
                      >
                        <div className='text-crown-primary font-bold text-lg sm:text-xl lg:text-2xl'>{value}</div>
                        <div className='text-crown-white text-xs sm:text-sm uppercase tracking-wider'>{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className='mb-6 sm:mb-8'>
                    <h4 className='text-crown-primary font-semibold mb-4 sm:mb-6 flex items-center text-lg sm:text-xl'>
                      <Sparkles className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                      Featured Amenities
                    </h4>
                    <div className='grid grid-cols-1 gap-3 sm:gap-4'>
                      {services[selectedService].features.map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className='flex items-center text-crown-white text-sm sm:text-base'>
                          <div className='w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-crown-primary to-crown-primary rounded-full mr-3 sm:mr-4 flex-shrink-0'></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modal Action Buttons */}
                  <div className='flex flex-col gap-3 sm:gap-4'>
                    <button className='w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold bg-crown-primary text-crown-white hover:bg-crown-primary/90 transition-all duration-300 text-sm sm:text-base'>
                      {t('services.book_experience')}
                    </button>
                    <button className='w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold bg-transparent border-2 border-crown-primary text-crown-primary hover:bg-crown-primary hover:text-crown-white transition-all duration-300 text-sm sm:text-base'>
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Interactive3DServices;
