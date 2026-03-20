"use client";

import PaginatedList from "@/components/layout/paginated-list";
import ProjectList from "@/components/layout/project-list";

import { PROJECTS } from "@/constants/projects";

import usePage from "@/hooks/use-page";

const PROJECTS_PER_PAGE = 2;
const totalPages = Math.ceil(PROJECTS.length / PROJECTS_PER_PAGE);

export default function Projects() {
  const currentPage = usePage(totalPages);
  const offset = PROJECTS_PER_PAGE * (currentPage - 1);

  const projects = PROJECTS.slice(offset, offset + PROJECTS_PER_PAGE);

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
