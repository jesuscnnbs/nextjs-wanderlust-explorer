import Link from "next/link";
import { notFound } from "next/navigation";
import { experienceDataset } from "@/types/dataset";

type ExperienceDetailPageProps = {
	params: Promise<{
		id: string;
	}>;
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
		<main className="min-h-screen bg-zinc-50 py-12 dark:bg-zinc-950">
			<section className="mx-auto w-full max-w-4xl px-6">
				<Link
					href="/experiences"
					className="mb-6 inline-flex items-center text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
				>
					Back to experiences
				</Link>

				<article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
					<img
						src={experience.imageUrl}
						alt={experience.title}
						className="h-72 w-full object-cover"
					/>

					<div className="space-y-5 p-6">
						<div className="flex flex-wrap items-center gap-3">
							<span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
								{experience.category}
							</span>
							<span className="text-sm font-medium text-amber-600">
								{experience.rating}.0 ★
							</span>
							<span className="text-sm text-zinc-500 dark:text-zinc-400">
								{experience.destination}
							</span>
						</div>

						<h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
							{experience.title}
						</h1>

						<p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
							{experience.description}
						</p>

						<p className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
							${experience.price}
						</p>
					</div>
				</article>
			</section>
		</main>
	);
}
