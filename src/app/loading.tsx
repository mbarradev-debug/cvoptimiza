export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Cargando"
      className="flex flex-1 items-center justify-center py-24"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-accent border-t-transparent" />
      <span className="sr-only">Cargando…</span>
    </div>
  );
}
