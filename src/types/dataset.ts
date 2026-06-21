import { Experience, ExperienceCategory } from "./experience";

const categories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const destinations = [
  "Kyoto",
  "Reykjavik",
  "Marrakech",
  "Cusco",
  "Cape Town",
  "Queenstown",
  "Lisbon",
  "Bali",
  "Amalfi Coast",
  "Patagonia",
];

const experienceDataset: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const idNumber = index + 1;
  const category = categories[index % categories.length];
  const destination = destinations[index % destinations.length];

  return {
    id: `exp-${idNumber}`,
    title: `${category} Escape ${idNumber}`,
    description: `Enjoy a curated ${category.toLowerCase()} experience in ${destination} with local experts and memorable highlights.`,
    category,
    destination,
    price: 40 + ((idNumber * 13) % 220),
    rating: 3 + (idNumber % 3),
    imageUrl: `https://picsum.photos/seed/wanderlust-${idNumber}/800/600`,
  };
});

export { experienceDataset };