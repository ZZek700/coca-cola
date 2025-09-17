import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Dumbbell, Award } from 'lucide-react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    space: 0,
    equipment: 0,
    trainers: 0,
    services: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = {
    space: 5000,
    equipment: 200,
    trainers: 25,
    services: 50
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
      const duration = 2000; // Animation duration in ms
      const steps = 60; // Number of animation steps
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4); // Easing function

        setCounts({
          space: Math.floor(finalCounts.space * easeOutQuart),
          equipment: Math.floor(finalCounts.equipment * easeOutQuart),
          trainers: Math.floor(finalCounts.trainers * easeOutQuart),
          services: Math.floor(finalCounts.services * easeOutQuart)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts(finalCounts); // Ensure final values are exact
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
      label: "Premium Space",
      description: "Luxury wellness facility",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Dumbbell,
      number: counts.equipment,
      suffix: "+",
      label: "Equipment Pieces",
      description: "State-of-the-art machines",
      color: "from-green-500 to-green-700"
    },
    {
      icon: Users,
      number: counts.trainers,
      suffix: "+",
      label: "Expert Trainers",
      description: "Certified professionals",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Award,
      number: counts.services,
      suffix: "+",
      label: "Premium Services",
      description: "Comprehensive wellness",
      color: "from-yellow-500 to-yellow-700"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
            BY THE <span className="text-yellow-400">NUMBERS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crown Wellness Club sets new standards with impressive scale and comprehensive offerings.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-8 hover:bg-black/70 hover:border-yellow-400/30 transition-all duration-500 group-hover:transform group-hover:scale-105 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="relative">
                    <stat.icon className="w-12 h-12 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Number */}
                <div className="mb-4 relative z-10">
                  <span className="text-5xl lg:text-6xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {stat.number.toLocaleString()}
                  </span>
                  <span className="text-2xl font-bold text-yellow-400 ml-1">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-2 relative z-10">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  {stat.description}
                </p>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievement */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/20 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-3xl font-bold text-yellow-400">
                First interactive fitness in Azerbaijan
              </h3>
            </div>
            <p className="text-xl text-white mb-4">
              Luxury Wellness Club
            </p>
            <p className="text-gray-300 leading-relaxed">
              Pioneering the future of premium fitness and wellness in Baku with 
              unprecedented luxury, cultural sensitivity, and world-class amenities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;