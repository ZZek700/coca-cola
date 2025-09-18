import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutPage from './pages/about.page.tsx';
import HomePage from './pages/home.page.tsx';
import AppLayout from './layouts/app.layout.tsx';
import GalleryPage from './pages/gallery.page.tsx';
import TrainersPage from './pages/trainers.page.tsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='gallery' element={<GalleryPage />} />
          <Route path='trainers' element={<TrainersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
