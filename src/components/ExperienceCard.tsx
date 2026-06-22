"use client";

import Image from "next/image";
import Link from "next/link";
import { Experience } from "@/types/experience";
import { useFavourites } from "@/context/FavouritesContext";

type ExperienceCardProps = {
  experience: Experience;
  index: number;
};

const categoryColors: Record<string, string> = {
  Adventure: "bg-[#fed7b0]",
  Culture: "bg-[#d4c5f9]",
  Food: "bg-[#fcc8d0]",
  Wellness: "bg-[#c5e8b7]",
  Nature: "bg-[#b5e2e0]",
};

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const venueCount = 3 + (index % 4);
  const miles = 1 + (index % 3);
  const categoryColor = categoryColors[experience.category] ?? "bg-[#e0d6c8]";
  const { isFavourite, addFavourite, removeFavourite } = useFavourites();
  const liked = isFavourite(experience.id);

  return (
    <article
      className="relative rounded-xl overflow-hidden border-2 border-[#121212] bg-[#ecdfcf]"
    >
      <div className="relative border-b-2 border-[#121212] bg-[#bdd8df] px-4 py-2">
        <button
          onClick={() => (liked ? removeFavourite(experience.id) : addFavourite(experience.id))}
          className="absolute left-2 top-1/2 -translate-y-1/2"
          aria-label={liked ? "Remove from favourites" : "Add to favourites"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "#f4acb7" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
        <h2 className="text-center text-xl font-semibold leading-tight">{experience.title}</h2>
      </div>

      <div
        className={`absolute -right-8.5 top-5 w-40 rotate-45 border-y border-[#121212] py-1 text-center text-[10px] font-bold uppercase tracking-[0.15em] ${categoryColor}`}
      >
        {experience.category}
      </div>

      <div className="grid grid-cols-3 divide-x-2 divide-[#121212] border-b-2 border-[#121212] text-center">
        <p className="px-2 py-2 text-sm font-bold">${experience.price}</p>
        <p className="px-2 py-2 text-sm font-bold">{miles} mile</p>
        <p className="px-2 py-2 text-sm font-bold">{venueCount} venues</p>
      </div>

      <div className="grid grid-cols-[88px_1fr] gap-3 px-4 py-4">
        <div className="relative h-[88px] w-[88px] overflow-hidden rounded-full border-2 border-[#121212]">
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            sizes="88px"
            className="object-cover"
            loading="lazy"
          />
        </div>

        <p className="line-clamp-4 text-[13px] leading-5">{experience.description}</p>
      </div>

      <div className="px-4 pb-4">
        <Link
          href={`/experiences/${experience.id}`}
          className="flex gap-3 h-11 items-center justify-center rounded-full border-2 border-[#121212] bg-[#121212] text-sm font-bold uppercase tracking-[0.12em] text-[#fff7e8] transition hover:bg-[#292826]"
        >
          View 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </Link>
      </div>
    </article>
  );
}
