import Link from 'next/link';
import { Logo } from '@/components/Logo';

// Placeholder minimo — implementacion completa en DBO-949 (CVO-017).
export function Navbar() {
  return (
    <header className="border-b border-border bg-card">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="CVOptimiza">
          <Logo />
        </Link>
        <Link
          href="/generar"
          className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover"
        >
          Generar CV
        </Link>
      </nav>
    </header>
  );
}
