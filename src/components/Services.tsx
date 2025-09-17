import React, { useState, useEffect, useRef } from 'react';
import { Dumbbell, Heart, Scissors, Coffee, ShoppingBag, Users2 } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
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

  const services = [
    {
      icon: Dumbbell,
      title: "Fitness Zone",
      subtitle: "Complete Training Solutions",
      features: ["Pilates Studio", "Boxing Arena", "CrossFit Zone", "Cycling Studio", "Strength Training"],
      description: "State-of-the-art equipment from leading international brands",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Heart,
      title: "Spa Zone",
      subtitle: "Relaxation & Recovery",
      features: ["Massage Therapy", "Sauna & Steam", "Hydrotherapy", "Aromatherapy", "Recovery Suites"],
      description: "Premium wellness treatments for complete rejuvenation",
      color: "from-pink-600 to-pink-800"
    },
    {
      icon: Scissors,
      title: "Beauty Zone",
      subtitle: "Premium Aesthetics",
      features: ["Hair Styling", "Skincare Treatments", "Manicure & Pedicure", "Aesthetic Services", "Bridal Packages"],
      description: "Professional beauty services with luxury finishes",
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: Users2,
      title: "Women's Zone",
      subtitle: "Private & Comfortable",
      features: ["Private Training Area", "Dedicated Changing Rooms", "Women-Only Classes", "Personal Training", "Cultural Sensitivity"],
      description: "Exclusive space designed with privacy and comfort in mind",
      color: "from-rose-600 to-rose-800"
    },
    {
      icon: Coffee,
      title: "Fitbar & Restaurant",
      subtitle: "Nutrition & Dining",
      features: ["Protein Bar", "Healthy Meals", "Fresh Juices", "Supplements", "Social Dining"],
      description: "Nutritious options to fuel your wellness journey",
      color: "from-green-600 to-green-800"
    },
    {
      icon: ShoppingBag,
      title: "Wellness Shop",
      subtitle: "Premium Retail",
      features: ["Athletic Wear", "Supplements", "Wellness Products", "Equipment", "Exclusive Brands"],
      description: "Curated selection of premium wellness and fitness products",
      color: "from-amber-600 to-amber-800"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
            PREMIUM <span className="text-yellow-400">SERVICES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of luxury wellness services, 
            each designed to exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              {/* Service Card */}
              <div className={`relative bg-black/50 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-yellow-400/50 group-hover:transform group-hover:scale-105 ${
                activeService === index ? 'border-yellow-400 scale-105' : ''
              }`}>
                {/* Card Header */}
                <div className={`relative p-8 bg-gradient-to-br ${service.color}`}>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-12 h-12 text-white" />
                    <div className={`w-6 h-6 rounded-full border-2 border-white transition-all duration-300 ${
                      activeService === index ? 'bg-white' : 'bg-transparent'
                    }`}>
                      {activeService === index && (
                        <div className="w-2 h-2 bg-black rounded-full mx-auto mt-1"></div>
                      )}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm">{service.subtitle}</p>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Expandable Features */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    activeService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-gray-700 pt-6">
                      <h4 className="text-yellow-400 font-semibold mb-4">Features Include:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  <div className="flex items-center justify-center pt-6">
                    <div className={`text-yellow-400 text-sm font-medium transition-all duration-300 ${
                      activeService === index ? 'rotate-180' : ''
                    }`}>
                      {activeService === index ? 'Show Less' : 'Show More'}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Notice */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              Culturally Sensitive Design
            </h3>
            <p className="text-gray-300 leading-relaxed">
              All our facilities are designed with deep respect for Azerbaijani culture and values. 
              Our women's zones ensure complete privacy and comfort, while maintaining the highest 
              standards of luxury and service excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;