export type ExperienceCategory =
  | "Adventure"
  | "Culture"
  | "Food"
  | "Wellness"
  | "Nature";


export enum ExperienceCategoryEnum {
  Culture,
  Adventure,
  Wellness,
  Food,
  Nature,
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: ExperienceCategory;
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}
