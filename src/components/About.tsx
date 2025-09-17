import React, { useEffect, useRef, useState } from 'react';
import { Crown, Award, Users, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Crown,
      title: t("about.feature1_title"),
      description: t("about.feature1_description")
    },
    {
      icon: Award,
      title: t("about.feature2_title"),
      description: t("about.feature2_description")
    },
    {
      icon: Users,
      title: t("about.feature3_title"),
      description: t("about.feature3_description")
    },
    {
      icon: MapPin,
      title: t("about.feature4_title"),
      description: t("about.feature4_description")
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-crown-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(174, 53, 55, 0.2) 50px,
            rgba(174, 53, 55, 0.2) 51px
          )`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-crown-primary"></div>
            <Crown className="w-8 h-8 text-crown-primary mx-4" />
            <div className="w-16 h-0.5 bg-crown-primary"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-crown-white mb-6 tracking-wide">
            {t('about.section_title_part1')} <span className="text-crown-primary"> {t('about.section_title_part2')} </span> {t('about.section_title_part3')}
          </h2>
          <p className="text-xl text-crown-white max-w-3xl mx-auto leading-relaxed">
            {t('about.section_description')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-3xl font-bold text-crown-white mb-6">
              {t('about.redefining_title_part1')} <span className="text-crown-primary">{t('about.redefining_title_part2')}</span>
            </h3>
            <p className="text-crown-white text-lg mb-6 leading-relaxed">
              {t('about.redefining_text1')}
            </p>
            <p className="text-crown-white text-lg mb-8 leading-relaxed">
              {t('about.redefining_text2')}
            </p>
            
            {/* Cultural Sensitivity Highlight */}
            <div className="bg-crown-primary/20 border border-crown-primary/40 rounded-lg p-6 mb-8">
              <h4 className="text-crown-primary font-semibold mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                {t('about.cultural_title')}
              </h4>
              <p className="text-crown-white">
                {t('about.cultural_description')}
              </p>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative">
              {/* Crown Wellness Club Reception Area */}
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img 
                  src="/reception.png" 
                  alt="Crown Wellness Club reception area with luxury black marble reception desk and modern interior design"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-crown-dark/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-crown-white text-sm">Crown Wellness Club Reception</p>
                    <p className="text-crown-complementary text-xs">Luxury Interior Design</p>
                  </div>
                </div>
              </div>
              
              {/* Glowing border effect */}

            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`text-center group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:bg-gray-700 hover:border-crown-dark-red/30 transition-all duration-300 group-hover:transform group-hover:scale-105 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <feature.icon className="w-12 h-12 text-crown-primary group-hover:text-crown-primary transition-colors duration-300" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-crown-white mb-4">{feature.title}</h4>
                <p className="text-crown-complementary leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;