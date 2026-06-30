import Link from 'next/link';

// Placeholder minimo — implementacion completa en DBO-956 (CVO-024).
export function CtaBand() {
  return (
    <section className="bg-primary px-6 py-16 text-center">
      <Link
        href="/generar"
        className="inline-block rounded-md bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover"
      >
        Genera tu CV gratis
      </Link>
    </section>
  );
}
