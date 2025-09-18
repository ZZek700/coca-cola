import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membership: '',
    message: '',
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.visit_title'),
      details: t('contact.visit_details', { returnObjects: true }) as string[],
      color: 'text-blue-400',
    },
    {
      icon: Phone,
      title: t('contact.call_title'),
      details: t('contact.call_details', { returnObjects: true }) as string[],
      color: 'text-green-400',
    },
    {
      icon: Mail,
      title: t('contact.email_title'),
      details: t('contact.email_details', { returnObjects: true }) as string[],
      color: 'text-purple-400',
    },
    {
      icon: Clock,
      title: t('contact.hours_title'),
      details: t('contact.hours_details', { returnObjects: true }) as string[],
      color: 'text-yellow-400',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <section id='contact' ref={sectionRef} className='py-20 bg-crown-dark relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-crown-dark-red to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-br from-crown-dark-red/5 via-transparent to-crown-complementary/5'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-crown-white mb-4 sm:mb-6 tracking-wide px-4'>
            {t('contact.section_title')}{' '}
            <span className='text-crown-primary'>{t('contact.section_title_highlight')}</span>
          </h2>
          <p className='text-lg sm:text-xl text-crown-white max-w-3xl mx-auto leading-relaxed px-4'>
            {t('contact.section_description')}
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto px-4'>
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className='text-2xl sm:text-3xl font-bold text-crown-primary mb-6 sm:mb-8'>
              {t('contact.contact_info')}
            </h3>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12'>
              {contactInfo.map((info, index) => (
                <div key={index} className='group'>
                  <div className='bg-gray-800 border border-gray-700 rounded-xl p-4 sm:p-6 hover:bg-gray-700 hover:border-crown-dark-red/30 transition-all duration-300 group-hover:transform group-hover:scale-105 shadow-lg'>
                    <div className='flex items-start space-x-3 sm:space-x-4'>
                      <div
                        className={`p-2 sm:p-3 bg-crown-primary rounded-lg group-hover:bg-crown-primary transition-colors duration-300 flex-shrink-0`}
                      >
                        <info.icon className='w-5 h-5 sm:w-6 sm:h-6 text-crown-white' />
                      </div>
                      <div className='flex-1'>
                        <h4 className='text-crown-white font-semibold mb-2 text-sm sm:text-base'>{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className={`text-crown-complementary text-xs sm:text-sm ${detailIndex === 0 ? 'font-medium' : ''}`}
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className='text-crown-white font-semibold mb-6'>{t('contact.follow_journey')}</h4>
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className='group flex items-center justify-center w-12 h-12 bg-gray-800 border border-gray-700 rounded-full hover:bg-crown-primary hover:border-crown-primary transition-all duration-300 hover:scale-110'
                    aria-label={social.label}
                  >
                    <social.icon className='w-5 h-5 text-crown-white transition-colors duration-300' />
                  </a>
                ))}
              </div>
              <p className='text-crown-complementary text-sm mt-4'>{t('contact.social_description')}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className='bg-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl'>
              <h3 className='text-2xl sm:text-3xl font-bold text-crown-primary mb-6 sm:mb-8'>
                {t('contact.form_title')}
              </h3>

              <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
                <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
                  <div>
                    <label htmlFor='name' className='block text-crown-white text-sm font-medium mb-2'>
                      {t('contact.full_name')} {t('contact.required')}
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-crown-white placeholder-gray-500 focus:outline-none focus:border-crown-primary transition-all duration-300'
                      placeholder={t('contact.full_name_placeholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='block text-crown-white text-sm font-medium mb-2'>
                      {t('contact.email_address')} {t('contact.required')}
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-crown-white placeholder-gray-500 focus:outline-none focus:border-crown-primary transition-all duration-300'
                      placeholder={t('contact.email_placeholder')}
                    />
                  </div>
                </div>

                <div className='grid sm:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='phone' className='block text-crown-white text-sm font-medium mb-2'>
                      {t('contact.phone_number')}
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-crown-white placeholder-gray-500 focus:outline-none focus:border-crown-primary transition-all duration-300'
                      placeholder={t('contact.phone_placeholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor='membership' className='block text-crown-white text-sm font-medium mb-2'>
                      {t('contact.interested_in')}
                    </label>
                    <select
                      id='membership'
                      name='membership'
                      value={formData.membership}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-crown-white focus:outline-none focus:border-crown-primary transition-all duration-300'
                    >
                      <option value=''>{t('contact.select_membership')}</option>
                      <option value='essential'>{t('contact.essential_option')}</option>
                      <option value='premium'>{t('contact.premium_option')}</option>
                      <option value='royal'>{t('contact.royal_option')}</option>
                      <option value='womens'>{t('contact.womens_option')}</option>
                      <option value='tour'>{t('contact.tour_option')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor='message' className='block text-crown-white text-sm font-medium mb-2'>
                    {t('contact.message')}
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-crown-white placeholder-gray-500 focus:outline-none focus:border-crown-primary transition-all duration-300 resize-none'
                    placeholder={t('contact.message_placeholder')}
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full bg-crown-primary text-crown-white font-semibold py-4 px-6 rounded-lg hover:bg-crown-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-crown-primary/25'
                >
                  {t('contact.send_message')}
                </button>

                <p className='text-crown-complementary text-xs text-center'>{t('contact.privacy_notice')}</p>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-20 pt-12 border-t border-gray-700 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0'>
            <div className='flex items-center space-x-3'>
              <img src='/CROWN_WHITE_LOGO.png' alt='Crown Wellness Club Logo' className='w-8 h-8 object-contain' />
              <span className='text-crown-white font-semibold text-lg'>Crown Wellness Club</span>
            </div>

            <p className='text-crown-complementary text-sm'>{t('contact.footer_text')}</p>

            <div className='flex items-center space-x-6 text-crown-complementary text-sm'>
              <a href='#' className='hover:text-crown-primary transition-colors duration-300'>
                {t('contact.footer_links.privacy')}
              </a>
              <a href='#' className='hover:text-crown-primary transition-colors duration-300'>
                {t('contact.footer_links.terms')}
              </a>
              <a href='#' className='hover:text-crown-primary transition-colors duration-300'>
                {t('contact.footer_links.support')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
