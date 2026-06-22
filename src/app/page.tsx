import Link from "next/link";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#efe6da] text-[#1a1816]">
      <section className="mx-auto w-full">
        <TopBar />

        <div className="flex items-center justify-center px-6 py-20">
          <section className="w-full max-w-3xl rounded-3xl border-2 border-[#121212] bg-[#e2d3bf] p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3d352e]">
              Wanderlust Explorer
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-[#1a1816] sm:text-5xl">
              Find your next unforgettable experience.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#3d352e]">
              Browse curated adventures, cultural escapes, food tours, and wellness
              retreats in destinations around the world.
            </p>

            <div className="mt-9">
              <Link
                href="/experiences"
                className="inline-flex items-center rounded-full bg-[#1a1816] px-6 py-3 text-sm font-semibold text-[#efe6da] transition hover:opacity-80"
              >
                Explore Experiences
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
