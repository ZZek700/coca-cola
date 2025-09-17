import React, {useState} from 'react';
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
  const [showSplash, setShowSplash] = useState(true); // showSplash state'i useState ile tanımlanıyor
  const [videoMuted, setVideoMuted] = useState(true); // videoMuted state'i useState ile tanımlanıyor

  const handleEnter = () => {
    setShowSplash(false);
    setVideoMuted(false);
  };
  
  const handleToggleMute = (muted: boolean) => {
    setVideoMuted(muted); // VideoHero'dan gelen mute durumunu güncelle
  };
  
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