import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Dumbbell, Award, Crown, Sparkles, MapPin, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AnimatedStatistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    space: 0,
    equipment: 0,
    trainers: 0,
    services: 0,
    womenSpace: 0,
    members: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const finalCounts = {
    space: 5000,
    equipment: 300,
    trainers: 50,
    services: 150,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 3000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);

        setCounts({
          space: Math.floor(finalCounts.space * easeOutCubic),
          equipment: Math.floor(finalCounts.equipment * easeOutCubic),
          trainers: Math.floor(finalCounts.trainers * easeOutCubic),
          services: Math.floor(finalCounts.services * easeOutCubic),
          womenSpace: Math.floor(finalCounts.womenSpace * easeOutCubic),
          members: Math.floor(finalCounts.members * easeOutCubic)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts(finalCounts);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: TrendingUp,
      number: counts.space,
      suffix: "m²",
      label: t("statistics.space_label"),
      description: t("statistics.space_description"),
      color: "from-blue-500 to-cyan-600",
      glowColor: "blue-400"
    },
    {
      icon: Dumbbell,
      number: counts.equipment,
      suffix: "+",
      label: t("statistics.equipment_label"),
      description: t("statistics.equipment_description"),
      color: "from-emerald-500 to-teal-600",
      glowColor: "emerald-400"
    },
    {
      icon: Heart,
      number: counts.trainers,
      suffix: "+",
      label: t("statistics.trainers_label"),
      description: t("statistics.trainers_description"),
      color: "from-purple-500 to-indigo-600",
      glowColor: "purple-400"
    },
    {
      icon: Award,
      number: counts.services,
      suffix: "+",
      label: t("statistics.services_label"),
      description: t("statistics.services_description"),
      color: "from-amber-500 to-orange-600",
      glowColor: "amber-400"
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-crown-dark relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-crown-dark-red/5 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-crown-complementary/5 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-from-crown-dark/50  via-transparent to-black/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Premium Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-crown-primary"></div>
            <div className="flex items-center justify-center mx-8">
              <img 
                src="/crown-logo copy.png" 
                alt="Crown Wellness Club"
                className="w-12 h-12 object-contain drop-shadow-lg filter brightness-110 hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-crown-primary"></div>
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold text-crown-white mb-8 tracking-wide">
            {t('statistics.section_title')} <span className="text-crown-primary">{t('statistics.section_title_highlight')}</span>
          </h2>
          <p className="text-2xl text-crown-white max-w-4xl mx-auto leading-relaxed font-light">
            {t('statistics.section_description')}
          </p>
        </div>

        {/* Animated Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Featured Badge for Women's Space */}
              {stat.featured && (
                <div className="relative mb-4">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                      CULTURALLY DESIGNED
                    </div>
                  </div>
                </div>
              )}

              {/* Stat Card */}
              <div className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 hover:bg-gradient-to-br hover:from-gray-900/90 hover:to-black/90 hover:border-${stat.glowColor}/40 transition-all duration-700 group-hover:transform group-hover:scale-105 group-hover:rotate-x-3 group-hover:rotate-y-3 overflow-hidden`}>
                
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-15 transition-opacity duration-700`}></div>
                
                {/* Icon with Premium Effect */}
                <div className="flex justify-center mb-8 relative z-10">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-${stat.glowColor} opacity-0 group-hover:opacity-30 rounded-full blur-xl animate-pulse-slow`}></div>
                    <div className={`relative p-4 bg-gradient-to-br ${stat.color} rounded-full group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 overflow-hidden`}>
                      {/* Crown Logo Background */}
                      <img 
                        src="/crown-logo copy.png" 
                        alt="Crown logo background"
                        className="absolute inset-0 w-full h-full object-contain opacity-10 scale-150"
                      />
                      <stat.icon className="w-12 h-12 text-white relative z-10" />
                    </div>
                  </div>
                </div>

                {/* Animated Number */}
                <div className="mb-6 relative z-10">
                  <div className={`text-6xl lg:text-7xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number.toLocaleString()}
                    <span className="text-yellow-400 ml-1 text-4xl">
                      {stat.suffix}
                    </span>
                  </div>
                </div>

                {/* Label and Description */}
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                  {stat.label}
                </h3>
                <p className="text-gray-400 leading-relaxed relative z-10">
                  {stat.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Sparkles className={`w-6 h-6 text-${stat.glowColor}`} />
                </div>

                {/* Premium Border Glow */}
                <div className={`absolute -inset-0.5 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-br ${stat.color} rounded-3xl blur-2xl -z-10`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Azerbaijan First Achievement Banner */}
        <div className={`mt-20 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative bg-gradient-to-r from-crown-primary/10 via-crown-primary/15 to-crown-primary/10 border border-crown-primary/30 rounded-3xl p-12 max-w-6xl mx-auto backdrop-blur-xl overflow-hidden">
            {/* Premium Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-crown-primary/5 to-transparent"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-8">
                <img 
                  src="/crown-logo copy.png" 
                  alt="Crown Wellness Club Logo"
                  className="w-16 h-16 object-contain drop-shadow-lg filter brightness-110"
                />
              </div>
              <h3 className="text-5xl lg:text-6xl font-bold text-crown-white mb-6">
                {t('statistics.achievement_title')} <span className="text-crown-primary">{t('statistics.achievement_highlight')}</span>
              </h3>
              <p className="text-3xl text-white mb-6 font-light">
                {t('statistics.achievement_subtitle')}
              </p>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                {t('statistics.achievement_description')}
              </p>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-6 left-6 w-2 h-16 bg-gradient-to-b from-crown-primary to-transparent opacity-30"></div>
            <div className="absolute top-6 left-6 w-16 h-2 bg-gradient-to-r from-crown-primary to-transparent opacity-30"></div>
            <div className="absolute bottom-6 right-6 w-2 h-16 bg-gradient-to-t from-crown-primary to-transparent opacity-30"></div>
            <div className="absolute bottom-6 right-6 w-16 h-2 bg-gradient-to-l from-crown-primary to-transparent opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
);
};

export default AnimatedStatistics;