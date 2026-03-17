"use client";

import PaginatedList from "@/components/layout/paginated-list";
import PhotographList from "@/components/layout/photograph-list";

import { PHOTOGRAPHS } from "@/constants/photographs";

import usePage from "@/hooks/use-page";

const perPage = 3;
const totalPages = Math.ceil(PHOTOGRAPHS.length / perPage);

export default function Photography() {
  const currentPage = usePage(totalPages);
  const offset = perPage * (currentPage - 1);

  const photographs = PHOTOGRAPHS.slice(offset, offset + perPage);

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
