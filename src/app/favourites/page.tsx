"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import ExperienceList from "@/components/ExperienceList";
import { useFavourites } from "@/context/FavouritesContext";
import { experienceDataset } from "@/types/dataset";

export default function FavouritesPage() {
  const { favourites } = useFavourites();
  const displayedExperiences = experienceDataset.filter((exp) =>
    favourites.includes(exp.id),
  );

  return (
    <main className="min-h-screen bg-[#efe6da] text-[#1a1816]">
      <section className="mx-auto w-full">
        <TopBar />

        <div className="border-b-2 border-[#121212] bg-[#e2d3bf] px-4 py-4">
          <div className="mx-auto flex max-w-7xl items-center gap-3 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 animate-pulse text-[#1a1816]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <h1 className="text-2xl font-bold tracking-tight text-[#1a1816]">
              Your Favourites
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 animate-pulse text-[#1a1816]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        </div>

        {displayedExperiences.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-20">
            <p className="mb-2 text-lg font-bold text-[#3d352e]">
              No favourites yet
            </p>
            <p className="mb-6 text-sm text-[#3d352e]">
              Start adding experiences you love.
            </p>
            <Link
              href="/experiences"
              className="inline-flex items-center rounded-full bg-[#1a1816] px-6 py-3 text-sm font-semibold text-[#efe6da] transition hover:opacity-80"
            >
              Browse Experiences
            </Link>
          </div>
        ) : (
          <ExperienceList experiences={displayedExperiences} />
        )}

        <div className="border-t-2 border-[#121212] bg-[#e2d3bf] px-4 py-3">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#3d352e]">
            {displayedExperiences.length > 0
              ? `Showing ${displayedExperiences.length} of ${displayedExperiences.length} favourited tours`
              : "No tours favourited yet"}
          </p>
        </div>
      </section>
    </main>
  );
}
