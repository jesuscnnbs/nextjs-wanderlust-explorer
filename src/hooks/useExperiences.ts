import { useMemo } from "react";
import type { Experience } from "@/types/experience";

export type ExperienceFilters = {
  search?: string;
  category?: string;
  destination?: string;
  priceBucket?: string;
  minRating?: number;
};

function priceBucketToRange(bucket?: string): [number, number] | null {
  if (!bucket) return null;
  switch (bucket) {
    case "0-99":
      return [0, 99];
    case "100-199":
      return [100, 199];
    case "200+":
      return [200, Infinity];
    default:
      return null;
  }
}

export function useExperiences(
  experiences: Experience[],
  filters: ExperienceFilters,
): Experience[] {
  return useMemo(() => {
    let result = experiences;

    if (filters.search) {
      const regex = new RegExp(filters.search, "i");
      result = result.filter((exp) => regex.test(exp.title));
    }

    if (filters.category && filters.category !== "all") {
      result = result.filter((exp) => exp.category === filters.category);
    }

    if (filters.destination && filters.destination !== "all") {
      result = result.filter(
        (exp) => exp.destination === filters.destination,
      );
    }

    if (filters.priceBucket) {
      const range = priceBucketToRange(filters.priceBucket);
      if (range) {
        result = result.filter(
          (exp) => exp.price >= range[0] && exp.price <= range[1],
        );
      }
    }

    if (filters.minRating) {
      result = result.filter((exp) => exp.rating >= filters.minRating!);
    }

    return result;
  }, [experiences, filters]);
}
