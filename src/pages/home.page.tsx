import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import VideoHero from '../components/VideoHero';
import About from '../components/About';
import Interactive3DServices from '../components/Interactive3DServices';
import Premium3DMembership from '../components/Premium3DMembership';
import AnimatedStatistics from '../components/AnimatedStatistics';
import Contact from '../components/Contact';
import '../styles/animations.css';
import SplashScreen from '../components/SplashScreen';


export default function HomePage() {
  // Check if user has seen splash screen in this session
  const hasSeenSplash = sessionStorage.getItem('hasSeenSplash') === 'true';
  const [showSplash, setShowSplash] = useState(!hasSeenSplash); // Only show splash if not seen in session
  const [videoMuted, setVideoMuted] = useState(true); // videoMuted state'i useState ile tanımlanıyor

  const handleEnter = () => {
    setShowSplash(false);
    setVideoMuted(false);
    // Mark splash as seen in session storage
    sessionStorage.setItem('hasSeenSplash', 'true');
  };
  
  const handleToggleMute = (muted: boolean) => {
    setVideoMuted(muted); // VideoHero'dan gelen mute durumunu güncelle
  };

  // Handle scroll to hash section when page loads
  useEffect(() => {
    const scrollToHashSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1); // Remove '#' from hash
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Small delay to ensure page is fully rendered
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    // Scroll to hash section when component mounts
    scrollToHashSection();

    // Also listen for hash changes (back/forward navigation)
    const handleHashChange = () => {
      scrollToHashSection();
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
   return (
     <>
      {showSplash ? <SplashScreen onEnter={handleEnter} /> : (
    <div className="min-h-screen bg-crown-dark text-crown-primary overflow-x-hidden">
      <Header />
      <VideoHero isMuted={videoMuted} onToggleMute={handleToggleMute} />
      <Interactive3DServices />
      <AnimatedStatistics />
      <Premium3DMembership />
      <Contact />
    </div>
       )}
     </>
  );
}