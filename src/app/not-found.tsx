import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
      <h2 className="text-xl font-semibold text-fg">Página no encontrada</h2>
      <p className="max-w-md text-muted-fg">La página que buscas no existe o fue movida.</p>
      <Link
        href="/"
        className="rounded-md bg-accent px-5 py-2.5 font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-secondary"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
