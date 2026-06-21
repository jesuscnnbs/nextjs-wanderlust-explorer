import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 px-6 py-20 dark:bg-zinc-950">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-600/20" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-orange-200/70 blur-3xl dark:bg-orange-600/20" />

      <section className="relative w-full max-w-3xl rounded-3xl border border-zinc-200 bg-white/90 p-10 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Wanderlust Explorer
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Find your next unforgettable experience.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Browse curated adventures, cultural escapes, food tours, and wellness
          retreats in destinations around the world.
        </p>

        <div className="mt-9">
          <Link
            href="/experiences"
            className="inline-flex items-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Explore Experiences
          </Link>
        </div>
      </section>
    </main>
  );
}
