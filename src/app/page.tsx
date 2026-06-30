import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/landing/Hero';
import { Stats } from '@/components/landing/Stats';
import { Problem } from '@/components/landing/Problem';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Features } from '@/components/landing/Features';
import { CtaBand } from '@/components/landing/CtaBand';

const title = 'CVOptimiza — CV adaptado a cada oferta, compatible con ATS';
const description =
  'Pega la oferta de trabajo y generamos un CV limpio, optimizado para ATS y adaptado a esa postulación específica. Gratis, en español, para Chile.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    images: [{ url: '/brand-assets/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/brand-assets/og-image.svg'],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <HowItWorks />
        <Features />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
