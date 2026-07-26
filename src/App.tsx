import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import TreatmentsPage from '@/pages/TreatmentsPage';
import TreatmentDetailPage from '@/pages/TreatmentDetailPage';
import DoctorPage from '@/pages/DoctorPage';
import GalleryPage from '@/pages/GalleryPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import FaqPage from '@/pages/FaqPage';
import ContactPage from '@/pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
