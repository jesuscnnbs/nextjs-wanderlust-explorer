import ExperienceList from "@/components/ExperienceList";
import TopBar from "@/components/TopBar";
import { experienceDataset } from "@/types/dataset";

export default function ExperiencesPage() {
	const displayedExperiences = experienceDataset;

	return (
		<main className="min-h-screen bg-[#efe6da] text-[#1a1816]">
			<section className="mx-auto w-full">
				<TopBar />

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
