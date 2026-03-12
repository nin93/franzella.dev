import H3 from "./h3";
import Paragraph from "./paragraph";

export type WorkingExperienceProps = {
  role: string;
  company: string;
  start: string;
  finish?: string;
  location: string;
  className?: string;
};

export default function WorkingExperience({
  role,
  company,
  location,
  start,
  finish,
  className,
}: WorkingExperienceProps) {
  return (
    <div className={className}>
      <H3>
        {role} — {company}
      </H3>

      <div className="flex items-baseline justify-between gap-2">
        <Paragraph>{location}</Paragraph>

        <span className="text-muted-foreground-dark text-sm md:text-base">
          {start} - {finish || "present"}
        </span>
      </div>
    </div>
  );
}
