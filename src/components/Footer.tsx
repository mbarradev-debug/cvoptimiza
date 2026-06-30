import Link from 'next/link';

// Placeholder minimo — implementacion completa en DBO-950 (CVO-018).
export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 text-sm text-muted-fg sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} CVOptimiza</p>
        <div className="flex gap-4">
          <Link href="/privacidad" className="hover:text-fg">
            Privacidad
          </Link>
          <Link href="/terminos" className="hover:text-fg">
            Términos
          </Link>
        </div>
      </div>
    </footer>
  );
}
