import React, { useState, useEffect } from 'react';
import { Crown, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
//yhg
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { t, i18n } = useTranslation();
  const {pathname} = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Only track sections when on home page
      if (pathname === '/') {
        const sections = ['services', 'membership', 'contact'];
        const scrollPosition = window.scrollY + 150; // Offset for header height
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            const elementBottom = elementTop + rect.height;
            
            if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
              setActiveSection(section);
              break;
            } else {
              setActiveSection('');
            }
          }
        }
      } else {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navItems = [
    {label: 'home', href: '/'},
    {label: 'about', href: '/about'},
    {label: 'services', href: '/#services'},
    {label: 'gallery', href: '/gallery'},
    {label: 'trainers', href: '/trainers'},
    {label: 'membership', href: '/#membership'},
    {label: 'contact', href: '/#contact'},    
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href === '/') {
      // Home is only active if we're on home AND there's no hash AND no active section
      return pathname === '/' && !window.location.hash && !activeSection;
    }
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2); // Remove '/#' to get section id
      // Check both URL hash and scroll-based active section
      return pathname === '/' && (
        window.location.hash === `#${sectionId}` || 
        activeSection === sectionId
      );
    }
    return pathname === href;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link and we're already on the home page, handle smooth scroll
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const targetId = href.substring(2); // Remove '/#' to get just the id
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Update URL hash without triggering navigation
        window.history.pushState(null, '', `#${targetId}`);
        setIsMobileMenuOpen(false);
      }
    } else if (href.startsWith('#')) {
      // Handle direct hash links (without leading slash)
      e.preventDefault();
      const targetId = href.substring(1); // Remove '#' to get just the id
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Update URL hash without triggering navigation
        window.history.pushState(null, '', `#${targetId}`);
        setIsMobileMenuOpen(false);
      }
    }
    // For regular links, let default behavior handle navigation
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-crown-dark/90 backdrop-blur-md shadow-xl' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <img 
                src="/CROWN_WHITE_LOGO.png" 
                alt="Crown Wellness Club Logo"
                className="w-10 h-10 object-contain group-hover:scale-110 transition-all duration-300 transform filter drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-crown-primary opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-crown-white tracking-wider">CROWN</h1>
              <p className="text-xs text-crown-white tracking-widest">WELLNESS CLUB</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`transition-colors duration-300 text-base font-medium tracking-wide relative group ${
                      isActive 
                        ? 'text-crown-primary' 
                        : 'text-crown-white hover:text-crown-primary'
                    }`}
                  >
                    {t(`nav.${item.label}`)}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-crown-primary transition-all duration-300 ${
                      isActive 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}></span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Language Toggle */}
          <div className="hidden lg:flex items-center space-x-3">
            <button 
              className={`text-crown-white hover:text-crown-primary transition-colors duration-300 text-base font-medium ${i18n.language === 'az' ? 'text-crown-primary' : ''}`}
              onClick={() => changeLanguage('az')}
            >
              AZ
            </button>
            <span className="text-crown-complementary">|</span>
            <button 
              className={`text-crown-white hover:text-crown-primary transition-colors duration-300 text-base font-medium ${i18n.language === 'en' ? 'text-crown-primary' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <span className="text-crown-complementary">|</span>
            <button 
              className={`text-crown-white hover:text-crown-primary transition-colors duration-300 text-base font-medium ${i18n.language === 'ru' ? 'text-crown-primary' : ''}`}
              onClick={() => changeLanguage('ru')}
            >
              RU
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-crown-white hover:text-crown-primary transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-6 pb-4 space-y-4">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block transition-colors duration-300 text-base font-medium tracking-wide ${
                    isActive 
                      ? 'text-crown-primary' 
                      : 'text-crown-white hover:text-crown-primary'
                  }`}
                >
                  {t(`nav.${item.label}`)}
                </a>
              );
            })}
            <div className="flex items-center space-x-4 pt-4 border-t border-crown-primary/30">
              <button 
                onClick={() => changeLanguage('az')}
                className={`text-crown-white hover:text-crown-primary transition-colors duration-300 text-base font-medium ${i18n.language === 'az' ? 'text-crown-primary' : ''}`}
              >
                AZ
              </button>
              <span className="text-crown-complementary">|</span>
              <button 
                onClick={() => changeLanguage('en')}
                className={`text-crown-white hover:text-crown-primary transition-colors duration-300 text-lg font-medium ${i18n.language === 'en' ? 'text-crown-primary' : ''}`}
              >
                EN
              </button>
              <span className="text-crown-complementary">|</span>
              <button 
                onClick={() => changeLanguage('ru')}
                className={`text-crown-white hover:text-crown-primary transition-colors duration-300 text-lg font-medium ${i18n.language === 'ru' ? 'text-crown-primary' : ''}`}
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;