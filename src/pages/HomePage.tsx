import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/components/sections/Hero';
import { StatsBar } from '@/components/sections/StatsBar';
import { TreatmentsPreview } from '@/components/sections/TreatmentsPreview';
import { DoctorSection } from '@/components/sections/DoctorSection';
import { CTA } from '@/components/sections/CTA';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { TestimonialsPreview } from '@/components/sections/TestimonialsPreview';
import { FaqPreview } from '@/components/sections/FaqPreview';

export default function HomePage() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <StatsBar />
      <TreatmentsPreview limit={6} />
      <DoctorSection />
      <CTA />
      <GalleryPreview limit={4} />
      <TestimonialsPreview limit={3} />
      <FaqPreview limit={5} />
    </>
  );
}
