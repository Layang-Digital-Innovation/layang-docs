import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center flex-1 px-6">
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        Layang Digital Innovation
      </h1>

      <p className="text-lg text-muted-foreground max-w-2xl mb-6">
        Layang Docs adalah dokumentasi resmi untuk pengembangan, arsitektur,
        dan integrasi sistem yang dikembangkan oleh Layang Digital Innovation.
      </p>

      <div className="flex gap-4 justify-center">
        <Link
          href="/docs"
          className="rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Buka Dokumentasi
        </Link>

        <Link
          href="/docs/getting-started"
          className="rounded-lg border px-6 py-3 font-medium hover:bg-muted transition"
        >
          Getting Started
        </Link>
      </div>
    </main>
  );
}
