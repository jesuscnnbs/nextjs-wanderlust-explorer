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
