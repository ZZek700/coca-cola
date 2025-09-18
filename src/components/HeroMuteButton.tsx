import { VolumeX, Volume2 } from 'lucide-react';

export default function HeroMuteButton({ isMuted, toggleMute }: { isMuted: boolean; toggleMute: () => void }) {
  return (
    <button
      onClick={toggleMute}
      className='absolute bottom-8 right-8 z-20 p-3 rounded-full bg-crown-dark/50 text-crown-white hover:bg-crown-primary/70 transition-colors duration-300 backdrop-blur-sm'
    >
      {isMuted ? <VolumeX className='w-5 h-5' /> : <Volume2 className='w-5 h-5' />}{' '}
    </button>
  );
}
