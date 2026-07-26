import { type ReactNode, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { getMedicalSchema, siteConfig } from '@/data/seo';

export function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const id = 'medical-schema';
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(getMedicalSchema());
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      {/* Site config exposed for potential runtime use */}
      <meta name="x-site-name" content={siteConfig.name} />
    </>
  );
}
