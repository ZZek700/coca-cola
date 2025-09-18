import { useState, useEffect, useRef } from 'react';
import { Star, Diamond, Check, Sparkles, Users2, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from '../components/Logo';

const Premium3DMembership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(1); // Premium selected by default
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
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

  const membershipPlans = [
    {
      icon: Star,
      name: t('membership.essential.name'),
      subtitle: t('membership.essential.subtitle'),
      pricing: {
        monthly: {
          price: '₼299',
          originalPrice: '₼399',
          savings: '25% OFF',
        },
        annual: {
          price: '₼2,990',
          originalPrice: '₼3,990',
          savings: '25% OFF',
        },
      },
      color: 'from-slate-600 via-gray-700 to-slate-800',
      borderColor: 'border-gray-500',
      glowColor: 'gray-400',
      features: [
        'Access to Main Fitness Zone',
        'Group Fitness Classes',
        'Standard Locker Room',
        'Member Mobile App',
        'Basic Equipment Access',
        'Complimentary Wellness Consultation',
      ],
      description: t('membership.essential.description'),
      badge: null,
      popular: false,
    },
    {
      icon: Diamond,
      name: t('membership.premium.name'),
      subtitle: t('membership.premium.subtitle'),
      pricing: {
        monthly: {
          price: '₼499',
          originalPrice: '₼699',
          savings: '29% OFF',
        },
        annual: {
          price: '₼4,990',
          originalPrice: '₼6,990',
          savings: '29% OFF',
        },
      },
      popular: true,
      color: 'from-blue-600 via-purple-600 to-indigo-700',
      borderColor: 'border-blue-400',
      glowColor: 'blue-400',
      features: [
        'All Essential Benefits',
        'Spa Zone Full Access',
        'Personal Training (3 sessions monthly)',
        'Beauty Zone Services (20% off)',
        'Nutritional Consultation',
        'Priority Class Booking',
        'Fitbar Healthy Meals (10% off)',
        'Weekend Wellness Workshops',
      ],
      description: t('membership.premium.description'),
      badge: t('membership.most_popular'),
    },
    {
      icon: Logo,
      name: t('membership.royal.name'),
      subtitle: t('membership.royal.subtitle'),
      pricing: {
        monthly: {
          price: '₼799',
          originalPrice: '₼1,199',
          savings: '33% OFF',
        },
        annual: {
          price: '₼7,990',
          originalPrice: '₼11,990',
          savings: '33% OFF',
        },
      },
      color: 'from-yellow-500 via-amber-600 to-yellow-700',
      borderColor: 'border-yellow-400',
      glowColor: 'yellow-400',
      features: [
        'All Premium Benefits',
        'Unlimited Personal Training',
        'Private Training Sessions Available',
        'VIP Spa Treatment Suite',
        'Beauty Zone Priority Booking',
        'Exclusive Royal Events Access',
        'Concierge Wellness Services',
        'Guest Privileges (3 monthly passes)',
        'Complimentary Wellness Shopping',
      ],
      description: t('membership.royal.description'),
      badge: t('membership.vip_experience'),
      popular: false,
    },
    {
      icon: Users2,
      name: t('membership.womens.name'),
      subtitle: t('membership.womens.subtitle'),
      pricing: {
        monthly: {
          price: '₼399',
          originalPrice: '₼549',
          savings: '27% OFF',
        },
        annual: {
          price: '₼3,990',
          originalPrice: '₼5,490',
          savings: '27% OFF',
        },
      },
      color: 'from-rose-600 via-pink-600 to-rose-700',
      borderColor: 'border-rose-400',
      glowColor: 'rose-400',
      features: [
        "Private Women's Zone (800m²)",
        'Female-Only Training Staff',
        'Women-Exclusive Classes',
        'Private Changing & Shower Areas',
        'Cultural Sensitivity Program',
        'Beauty & Spa Zone Access',
        'Personal Training with Female Trainers',
        'Modest Activewear Shopping',
      ],
      description: t('membership.womens.description'),
      badge: t('membership.culturally_designed'),
      popular: false,
    },
  ];

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <section id='membership' ref={sectionRef} className='py-24 bg-crown-dark'>
      {/* Premium Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/6 w-96 h-96 bg-crown-dark-red/5 rounded-full blur-3xl animate-pulse-slow'></div>
        <div className='absolute bottom-1/4 right-1/6 w-96 h-96 bg-crown-complementary/5 rounded-full blur-3xl animate-pulse-slow'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-radial from-crown-dark-red/3 to-transparent rounded-full'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Premium Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='flex items-center justify-center mb-8'>
            <div className='w-20 h-0.5 bg-gradient-to-r from-transparent to-crown-primary'></div>
            <img
              src='/CROWN_WHITE_LOGO.png'
              alt='Crown Wellness Club Logo'
              className='w-12 h-12 object-contain drop-shadow-lg filter brightness-110 mx-6'
            />
            <div className='w-20 h-0.5 bg-gradient-to-l from-transparent to-crown-primary'></div>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-crown-white mb-6 md:mb-8 tracking-wide px-4'>
            {t('membership.section_title')}{' '}
            <span className='text-crown-primary'>{t('membership.section_title_highlight')}</span>
          </h2>
          <p className='text-lg sm:text-xl md:text-2xl text-crown-white max-w-4xl mx-auto leading-relaxed font-light mb-6 px-4'>
            {t('membership.section_description')}
          </p>

          {/* Launch Offer Badge */}
          <div className='inline-flex items-center bg-crown-dark-red/20 border border-crown-dark-red/40 rounded-full px-8 py-3 backdrop-blur-sm'>
            <Sparkles className='w-5 h-5 text-crown-primary mr-3' />
            <span className='text-crown-white font-semibold text-lg'>{t('membership.founding_offer')}</span>
          </div>
        </div>

        {/* Billing Period Segmented Control */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='flex justify-center px-4'>
            <div className='bg-gray-800 border border-gray-700 rounded-2xl p-1 backdrop-blur-sm'>
              <div className='flex'>
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                    billingPeriod === 'monthly'
                      ? 'bg-crown-primary text-crown-white shadow-lg'
                      : 'text-crown-white hover:text-crown-primary'
                  }`}
                >
                  {t('membership.billing_period.monthly')}
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                    billingPeriod === 'annual'
                      ? 'bg-crown-primary text-crown-white shadow-lg'
                      : 'text-crown-white hover:text-crown-primary'
                  }`}
                >
                  {t('membership.billing_period.annual')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Membership Cards */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-8xl mx-auto px-4'>
          {membershipPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular/Special Badges */}
              {plan.badge && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 z-30'>
                  <div
                    className={`px-6 py-2 rounded-full text-sm font-bold shadow-xl ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : plan.name === "Women's Sanctuary"
                          ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white'
                          : 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black'
                    }`}
                  >
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* 3D Card Container */}
              <div
                className={`relative h-full cursor-pointer transition-all duration-700 transform-gpu ${
                  selectedCard === index
                    ? 'scale-105 lg:scale-110 z-20'
                    : hoveredCard === index
                      ? 'scale-102 z-10'
                      : 'hover:scale-102'
                }`}
                onClick={() => handleCardClick(index)}
              >
                {/* Main Card */}
                <div
                  className={`relative h-full bg-gray-800 backdrop-blur-xl border-2 rounded-3xl overflow-hidden transition-all duration-700 shadow-xl ${
                    selectedCard === index
                      ? `border-crown-dark-red shadow-2xl shadow-crown-dark-red/20`
                      : `border-gray-700 hover:border-crown-dark-red/30`
                  }`}
                >
                  {/* Card Header with Gradient */}
                  <div className={`relative p-4 sm:p-6 md:p-8 bg-gradient-to-br ${plan.color} text-crown-white`}>
                    {/* Savings Badge */}
                    <div className='absolute top-4 right-4'>
                      <div className='bg-crown-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold'>
                        {plan.pricing[billingPeriod].savings}
                      </div>
                    </div>

                    <div className='flex items-center justify-between mb-6'>
                      <plan.icon className='w-12 h-12' />
                      {plan.popular && <Star className='w-8 h-8 text-crown-complementary fill-current' />}
                    </div>

                    <h3 className='text-xl sm:text-2xl md:text-3xl font-bold mb-2'>{plan.name}</h3>
                    <p className='text-crown-white/90 text-xs sm:text-sm mb-4 sm:mb-6 font-light'>{plan.subtitle}</p>

                    {/* Pricing */}
                    <div className='mb-4'>
                      <div className='flex items-baseline space-x-2 sm:space-x-3'>
                        <span className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                          {plan.pricing[billingPeriod].price}
                        </span>
                        <div className='flex flex-col'>
                          <span className='text-crown-white/60 text-xs sm:text-sm line-through'>
                            {plan.pricing[billingPeriod].originalPrice}
                          </span>
                          <span className='text-crown-white/80 text-xs sm:text-sm'>
                            /{billingPeriod === 'monthly' ? 'month' : 'year'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className='text-crown-white/90 text-sm leading-relaxed'>{plan.description}</p>
                  </div>

                  {/* Card Body */}
                  <div className='p-4 sm:p-6 md:p-8 flex-1 flex flex-col'>
                    {/* Features List */}
                    <div className='flex-1 mb-6 sm:mb-8'>
                      <ul className='space-y-3 sm:space-y-4'>
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-start text-crown-white text-xs sm:text-sm'>
                            <Check
                              className={`w-3 h-3 sm:w-4 sm:h-4 text-crown-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-white transition-all duration-500 transform text-sm sm:text-base ${
                        selectedCard === index
                          ? 'bg-gradient-to-r from-crown-primary to-crown-primary shadow-xl shadow-crown-primary/30 scale-105'
                          : hoveredCard === index
                            ? 'bg-gradient-to-r from-crown-primary to-crown-primary shadow-lg shadow-crown-primary/20 scale-102'
                            : 'bg-gradient-to-r from-crown-primary to-crown-primary hover:shadow-lg hover:scale-105'
                      }`}
                    >
                      {selectedCard === index
                        ? t('membership.selected_proceed')
                        : `${t('membership.choose_plan')} ${plan.name}`}
                    </button>
                  </div>

                  {/* Premium Glow Effect */}
                  <div
                    className={`absolute -inset-0.5 opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-br from-crown-primary to-crown-primary rounded-3xl blur-xl -z-10`}
                  ></div>

                  {/* Selection Glow */}
                  {selectedCard === index && (
                    <div
                      className={`absolute -inset-1 opacity-40 bg-gradient-to-br from-crown-primary to-crown-primary rounded-3xl blur-2xl -z-10 animate-pulse-slow`}
                    ></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Guarantee Section */}
        <div
          className={`mt-20 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='bg-gradient-to-r from-crown-dark/80 to-crown-dark/80 border border-crown-dark rounded-3xl p-12 max-w-6xl mx-auto backdrop-blur-xl'>
            <div className='text-center'>
              <Award className='w-16 h-16 text-crown-primary mx-auto mb-8' />
              <h3 className='text-4xl font-bold text-crown-primary mb-6'>
                {t('membership.guarantee_title')}{' '}
                <span className='text-crown-primary'>{t('membership.guarantee_highlight')}</span>
              </h3>
              <div className='grid md:grid-cols-3 gap-8 mb-8'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-crown-primary mb-2'>25%</div>
                  <div className='text-crown-white'>Off First 6 Months</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-crown-primary mb-2'>3</div>
                  <div className='text-crown-white'>Free Personal Training Sessions</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-crown-primary mb-2'>VIP</div>
                  <div className='text-crown-white'>Grand Opening Access</div>
                </div>
              </div>
              <p className='text-xl text-crown-white leading-relaxed mb-8 max-w-4xl mx-auto'>
                {t('membership.guarantee_text')}
              </p>
              <button className='bg-crown-primary text-crown-white px-12 py-4 rounded-full font-bold text-lg hover:bg-crown-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-crown-primary/30'>
                {t('membership.claim_status')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium3DMembership;
