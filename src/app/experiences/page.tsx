import Link from "next/link";
import Image from "next/image";
import { experienceDataset } from "@/types/dataset";

export default function ExperiencesPage() {
	return (
		<main className="min-h-screen bg-zinc-50 py-12 dark:bg-zinc-950">
			<section className="mx-auto w-full max-w-6xl px-6">
				<header className="mb-8">
					<h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
						Explore Experiences
					</h1>
					<p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
						Discover {experienceDataset.length} travel experiences across adventure,
						food, culture, wellness, and nature.
					</p>
				</header>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{experienceDataset.map((experience) => (
						<article
							key={experience.id}
							className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
						>
							<Image
								src={experience.imageUrl}
								alt={experience.title}
								width={400}
								height={176}
								className="h-44 w-full object-cover"
								loading="lazy"
							/>

							<div className="space-y-3 p-5">
								<div className="flex items-center justify-between">
									<span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
										{experience.category}
									</span>
									<span className="text-sm font-medium text-amber-600">
										{experience.rating}.0 ★
									</span>
								</div>

								<h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
									{experience.title}
								</h2>

								<p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
									{experience.description}
								</p>

								<div className="flex items-center justify-between pt-1">
									<p className="text-sm text-zinc-500 dark:text-zinc-400">
										{experience.destination}
									</p>

									<div className="text-right">
										<p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
											from
										</p>
										<p className="text-base font-bold text-zinc-900 dark:text-zinc-100">
											${experience.price}
										</p>
									</div>
								</div>

								<Link
									href={`/experiences/${experience.id}`}
									className="mt-2 inline-flex items-center text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
								>
									View Details
								</Link>
							</div>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
