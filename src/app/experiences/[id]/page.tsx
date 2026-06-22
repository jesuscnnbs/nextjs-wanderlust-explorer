import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import TopBar from "@/components/TopBar";
import FavouriteButton from "@/components/FavouriteButton";
import { experienceDataset } from "@/types/dataset";

type ExperienceDetailPageProps = {
	params: Promise<{
		id: string;
	}>;
};

const categoryColors: Record<string, string> = {
  Adventure: "bg-[#fed7b0]",
  Culture: "bg-[#d4c5f9]",
  Food: "bg-[#fcc8d0]",
  Wellness: "bg-[#c5e8b7]",
  Nature: "bg-[#b5e2e0]",
};

export default async function ExperienceDetailPage({
	params,
}: ExperienceDetailPageProps) {
	const { id } = await params;
	const experience = experienceDataset.find((item) => item.id === id);

	if (!experience) {
		notFound();
	}

	return (
		<main className="min-h-screen bg-[#efe6da] text-[#1a1816]">
			<section className="mx-auto w-full">
				<TopBar />

				<div className="mx-auto max-w-3xl px-6 py-10">
					<Link
						href="/experiences"
						className="mb-6 inline-flex items-center text-sm font-semibold text-[#3d352e] underline-offset-4 hover:underline gap-2"
					>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>

						Back to experiences
					</Link>

					<article className="overflow-hidden rounded-3xl border-2 border-[#121212] bg-[#e2d3bf]">
						<Image
							src={experience.imageUrl}
							alt={experience.title}
							className="h-72 w-full object-cover border-b-2 border-[#121212]"
              width={800}
              height={288}
						/>

						<div className="space-y-5 p-6">
							<div className="flex flex-wrap items-center gap-3">
								<span className={`rounded-full border border-[#121212] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1a1816] ${categoryColors[experience.category] ?? "bg-[#e0d6c8]"}`}>
									{experience.category}
								</span>
								<span className="text-sm font-bold text-[#3d352e]">
									{experience.rating}.0 ★
								</span>
								<span className="text-sm font-bold text-[#3d352e]">
									{experience.destination}
								</span>
							</div>

							<h1 className="text-3xl font-bold tracking-tight text-[#1a1816]">
								{experience.title}
							</h1>

							<p className="text-base leading-7 text-[#3d352e]">
								{experience.description}
							</p>

							<p className="text-2xl font-bold text-[#1a1816]">
								${experience.price}
							</p>

							<FavouriteButton experienceId={experience.id} />
						</div>
					</article>
				</div>
			</section>
		</main>
	);
}
