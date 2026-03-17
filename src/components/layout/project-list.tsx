import Project, { ProjectProps } from "@/components/models/project";

export type ProjectListProps = {
  projects: ProjectProps[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <>
      {projects.map((project, i) => (
        <Project
          key={`project_${i}`}
          className="border-muted-background-dark pb-8 not-last:border-b"
          {...project}
        />
      ))}
    </>
  );
}
