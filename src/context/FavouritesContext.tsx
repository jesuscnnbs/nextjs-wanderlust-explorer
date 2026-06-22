"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface FavouritesContextValue {
  favourites: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
}

const FavouritesContext = createContext<FavouritesContextValue | undefined>(undefined);

export function FavouritesProvider({ children }: { children: ReactNode }) {
  const [favourites, setFavourites] = useState<string[]>([]);

  const addFavourite = (id: string) =>
    setFavourites((prev) => (prev.includes(id) ? prev : [...prev, id]));

  const removeFavourite = (id: string) =>
    setFavourites((prev) => prev.filter((fid) => fid !== id));

  const isFavourite = (id: string) => favourites.includes(id);

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const ctx = useContext(FavouritesContext);
  if (!ctx) throw new Error("useFavourites must be used within a FavouritesProvider");
  return ctx;
}
