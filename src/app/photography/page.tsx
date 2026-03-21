"use client";

import PaginatedList from "@/components/layout/paginated-list";
import PhotographList from "@/components/layout/photograph-list";

import { PHOTOGRAPHS } from "@/app/photography/constants/photographs";

import usePage from "@/hooks/use-page";

const PHOTOGRAPHS_PER_PAGE = 2;
const totalPages = Math.ceil(PHOTOGRAPHS.length / PHOTOGRAPHS_PER_PAGE);

export default function Photography() {
  const currentPage = usePage(totalPages);
  const offset = PHOTOGRAPHS_PER_PAGE * (currentPage - 1);

  const photographs = PHOTOGRAPHS.slice(offset, offset + PHOTOGRAPHS_PER_PAGE);

  return (
    <>
      <PaginatedList
        title="Photography"
        currentPage={currentPage}
        totalPages={totalPages}
      >
        <PhotographList photographs={photographs} />
      </PaginatedList>
    </>
  );
}
