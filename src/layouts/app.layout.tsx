import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function AppLayout() {
  return (
    <div className='min-h-screen bg-crown-dark text-crown-primary overflow-x-hidden w-full max-w-full'>
      <Header />
      <Outlet />
    </div>
  );
}
