import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
});

const title = 'CVOptimiza — CV adaptado a cada oferta, compatible con ATS';
const description =
  'Pega la oferta de trabajo y generamos un CV limpio, optimizado para ATS y adaptado a esa postulación específica. Gratis, en español, para Chile.';

export const metadata: Metadata = {
  metadataBase: new URL('https://cvoptimiza.cl'),
  title: {
    default: title,
    template: '%s | CVOptimiza',
  },
  description,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/brand-assets/icon.svg',
    shortcut: '/brand-assets/favicon.ico',
    apple: '/brand-assets/apple-touch-icon.png',
  },
  openGraph: {
    title,
    description,
    url: 'https://cvoptimiza.cl',
    siteName: 'CVOptimiza',
    locale: 'es_CL',
    type: 'website',
    images: [{ url: '/brand-assets/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/brand-assets/og-image.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-[var(--bg)] text-[var(--fg)]">
        {children}
      </body>
    </html>
  );
}
