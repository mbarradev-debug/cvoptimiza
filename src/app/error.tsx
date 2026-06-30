'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
      <h2 className="text-xl font-semibold text-fg">Algo salió mal</h2>
      <p className="max-w-md text-muted-fg">
        Ocurrió un error inesperado. Puedes intentar de nuevo o volver más tarde.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-md bg-accent px-5 py-2.5 font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-secondary"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
