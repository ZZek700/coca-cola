import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutPage from './pages/about.page.tsx';
import HomePage from './pages/home.page.tsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
