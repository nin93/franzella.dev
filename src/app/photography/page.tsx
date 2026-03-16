"use client";

import PaginatedList from "@/components/layout/paginated-list";
import PhotographList from "@/components/layout/photograph-list";

import { PHOTOS } from "@/constants/photos";

import usePage from "@/hooks/use-page";

const perPage = 3;
const totalPages = Math.ceil(PHOTOS.length / perPage);

export default function Photography() {
  const currentPage = usePage(totalPages);
  const offset = perPage * (currentPage - 1);

  const photographs = PHOTOS.slice(offset, offset + perPage);

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
