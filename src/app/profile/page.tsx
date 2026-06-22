"use client";

import TopBar from "@/components/TopBar";
import { useFavourites } from "@/context/FavouritesContext";

export default function ProfilePage() {
  const { favourites } = useFavourites();

  return (
    <main className="min-h-screen bg-[#efe6da] text-[#1a1816]">
      <section className="mx-auto w-full">
        <TopBar />

        <div className="mx-auto max-w-3xl px-6 py-10">
          <div className="overflow-hidden rounded-3xl border-2 border-[#121212] bg-[#e2d3bf]">
            <div className="border-b-2 border-[#121212] bg-[#bdd8df] px-6 py-4 text-center">
              <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#121212] bg-[#efc51d] text-3xl font-bold">
                JD
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Jamie Doe</h1>
              <p className="text-sm font-semibold text-[#3d352e]">
                jamie.doe@wanderlust.com
              </p>
            </div>

            <div className="space-y-4 p-6">
              <div className="rounded-xl border-2 border-[#121212] bg-[#ecdfcf] px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3d352e]">
                  Member since
                </p>
                <p className="mt-1 text-lg font-bold">March 2025</p>
              </div>

              <div className="rounded-xl border-2 border-[#121212] bg-[#ecdfcf] px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3d352e]">
                  Saved favourites
                </p>
                <p className="mt-1 text-lg font-bold">
                  {favourites.length} experience{favourites.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="rounded-xl border-2 border-[#121212] bg-[#ecdfcf] px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3d352e]">
                  Bio
                </p>
                <p className="mt-1 text-sm leading-6 text-[#3d352e]">
                  Adventure seeker and culture enthusiast. Always looking for the
                  next unforgettable experience — whether it is hiking through
                  lush landscapes, sampling street food in bustling markets, or
                  unwinding at a hidden wellness retreat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
