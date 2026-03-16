"use client";

import PaginatedList from "@/components/layout/paginated-list";
import ProjectList from "@/components/layout/project-list";

import { PROJECTS } from "@/constants/projects";

import usePage from "@/hooks/use-page";

const perPage = 3;
const totalPages = Math.ceil(PROJECTS.length / perPage);

export default function Projects() {
  const currentPage = usePage(totalPages);
  const offset = perPage * (currentPage - 1);

  const projects = PROJECTS.slice(offset, offset + perPage);

  return (
    <>
      <PaginatedList
        title="Projects"
        currentPage={currentPage}
        totalPages={totalPages}
      >
        <ProjectList projects={projects} />
      </PaginatedList>
    </>
  );
}
