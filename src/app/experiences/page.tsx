"use client";

import { Suspense } from "react";
import ExperienceList from "@/components/ExperienceList";
import TopBar from "@/components/TopBar";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import { useExperiences } from "@/hooks/useExperiences";
import { experienceDataset } from "@/types/dataset";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

function ExperiencesPageContent() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const search = searchParams.get("search") ?? "";
	const category = searchParams.get("category") ?? "";
	const destination = searchParams.get("destination") ?? "";
	const priceBucket = searchParams.get("price") ?? "";

	const filters = {
		search,
		category,
		destination,
		priceBucket,
	};

	const displayedExperiences = useExperiences(experienceDataset, filters);

	const updateFilter = (key: string, value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		if (value) {
			params.set(key, value);
		} else {
			params.delete(key);
		}
		router.replace(`${pathname}?${params.toString()}`, { scroll: false });
	};

	const updateFilters = ({
		category: cat,
		destination: dest,
		priceBucket: price,
	}: {
		category: string;
		destination: string;
		priceBucket: string;
	}) => {
		const params = new URLSearchParams(searchParams.toString());
		if (cat) params.set("category", cat);
		else params.delete("category");
		if (dest) params.set("destination", dest);
		else params.delete("destination");
		if (price) params.set("price", price);
		else params.delete("price");
		router.replace(`${pathname}?${params.toString()}`, { scroll: false });
	};

	const filterState = { category, destination, priceBucket };

	return (
		<main className="min-h-screen bg-[#efe6da] text-[#1a1816]">
			<section className="mx-auto w-full">
				<TopBar />

				<div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 pt-4 pb-2">
					<SearchBar value={search} onChange={(v) => updateFilter("search", v)} />
					<FilterBar filters={filterState} onChange={updateFilters} />
				</div>

				<ExperienceList experiences={displayedExperiences} />

				<div className="border-t-2 border-[#121212] bg-[#e2d3bf] px-4 py-3">
					<p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#3d352e]">
						Showing {displayedExperiences.length} of {experienceDataset.length} tours
					</p>
				</div>
			</section>
		</main>
	);
}

export default function ExperiencesPage() {
	return (
		<Suspense>
			<ExperiencesPageContent />
		</Suspense>
	);
}
