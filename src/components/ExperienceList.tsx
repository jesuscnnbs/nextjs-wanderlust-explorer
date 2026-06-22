import ExperienceCard from "@/components/ExperienceCard";
import { Experience } from "@/types/experience";

type ExperienceListProps = {
  experiences: Experience[];
};

export default function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-4 md:grid-cols-2 lg:grid-cols-3">
      {experiences.map((experience, index) => (
        <ExperienceCard key={experience.id} experience={experience} index={index} />
      ))}
    </div>
  );
}
