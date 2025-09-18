import React, { useState, useEffect, useRef } from 'react';
import { Crown, Star, Diamond, Gem, Check } from 'lucide-react';
import Logo from './Logo';

const MembershipCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      name: 'Essential',
      subtitle: 'Perfect Start',
      price: '₼299',
      period: 'monthly',
      color: 'from-gray-600 to-gray-800',
      borderColor: 'border-gray-500',
      features: [
        'Access to Fitness Zone',
        'Group Classes',
        'Locker Room Access',
        'Basic Equipment',
        'Member App Access',
      ],
      description: 'Ideal for fitness enthusiasts beginning their wellness journey',
    },
    {
      icon: Diamond,
      name: 'Premium',
      subtitle: 'Most Popular',
      price: '₼599',
      period: 'monthly',
      popular: true,
      color: 'from-blue-600 to-purple-700',
      borderColor: 'border-blue-400',
      features: [
        'All Essential Features',
        'Spa Zone Access',
        'Personal Training (2 sessions)',
        'Beauty Zone Services',
        'Nutritional Consultation',
        'Priority Booking',
      ],
      description: 'Complete wellness experience with premium amenities',
    },
    {
      icon: Logo,
      name: 'Royal',
      subtitle: 'Ultimate Luxury',
      price: '₼999',
      period: 'monthly',
      color: 'from-yellow-500 to-yellow-700',
      borderColor: 'border-yellow-400',
      features: [
        'All Premium Features',
        'Unlimited Personal Training',
        'Private Training Sessions',
        'VIP Spa Treatments',
        'Exclusive Events Access',
        'Concierge Services',
        'Guest Privileges (2 per month)',
      ],
      description: 'The pinnacle of luxury wellness with exclusive privileges',
    },
    {
      icon: Gem,
      name: "Women's Exclusive",
      subtitle: 'Privacy & Comfort',
      price: '₼699',
      period: 'monthly',
      color: 'from-rose-600 to-pink-700',
      borderColor: 'border-rose-400',
      features: [
        "Private Women's Zone Access",
        'Dedicated Female Trainers',
        'Women-Only Classes',
        'Private Changing Rooms',
        'Beauty & Spa Services',
        'Cultural Sensitivity Program',
      ],
      description: 'Designed specifically for women with complete privacy and cultural respect',
    },
  ];

  return (
    <section id='membership' ref={sectionRef} className='py-20 bg-black relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className='text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide'>
            MEMBERSHIP <span className='text-yellow-400'>PLANS</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Choose your path to luxury wellness. Each plan is crafted to deliver exceptional value and exclusive
            experiences.
          </p>
        </div>

        {/* Membership Cards Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
          {membershipPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 z-20'>
                  <div className='bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold'>MOST POPULAR</div>
                </div>
              )}

              {/* Card Container */}
              <div
                className={`relative h-full bg-gray-900/80 backdrop-blur-sm border-2 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                  plan.borderColor
                } ${activeCard === index ? 'border-opacity-100 shadow-2xl' : 'border-opacity-30'}`}
              >
                {/* Card Header */}
                <div className={`relative p-8 bg-gradient-to-br ${plan.color} text-white`}>
                  <div className='flex items-center justify-between mb-4'>
                    <plan.icon className='w-10 h-10' />
                    {plan.popular && <Star className='w-6 h-6 text-yellow-300 fill-current' />}
                  </div>
                  <h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
                  <p className='text-white/80 text-sm mb-6'>{plan.subtitle}</p>

                  <div className='mb-4'>
                    <span className='text-4xl font-bold'>{plan.price}</span>
                    <span className='text-white/80'>/{plan.period}</span>
                  </div>

                  <p className='text-white/90 text-sm leading-relaxed'>{plan.description}</p>
                </div>

                {/* Card Body */}
                <div className='p-8'>
                  <ul className='space-y-4 mb-8'>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-start text-gray-300 text-sm'>
                        <Check className='w-4 h-4 text-yellow-400 mr-3 mt-0.5 flex-shrink-0' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 bg-gradient-to-r ${plan.color} hover:shadow-lg hover:scale-105 ${
                      activeCard === index ? 'shadow-lg scale-105' : ''
                    }`}
                  >
                    Choose {plan.name}
                  </button>
                </div>

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${plan.color} pointer-events-none`}
                ></div>

                {/* Border Glow */}
                <div
                  className={`absolute -inset-0.5 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${plan.color} rounded-3xl blur-sm -z-10`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='bg-gray-900/50 border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-semibold text-white mb-4'>Special Launch Offer</h3>
            <p className='text-gray-300 leading-relaxed mb-6'>
              Join Crown Wellness Club as a founding member and receive 20% off your first 3 months. Plus, enjoy
              complimentary personal training sessions and exclusive access to our grand opening events.
            </p>
            <button className='bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300'>
              Claim Founding Member Benefits
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipCards;
