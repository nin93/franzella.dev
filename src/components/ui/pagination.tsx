"use client";

import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

import Link from "@/components/ui/link";

export type PaginationProps = {
  className?: string;
  totalPages: number;
  currentPage: number;
};

type PaginationButtonProps = {
  href: string;
};

function PaginationPrevious({ href }: PaginationButtonProps) {
  return (
    <Link href={href} className="flex items-center gap-1 p-2 text-sm">
      <ChevronLeft className="w-3 md:w-4" />
      Prev
    </Link>
  );
}

function PaginationNext({ href }: PaginationButtonProps) {
  return (
    <Link href={href} className="flex items-center gap-1 p-2 text-sm">
      Next
      <ChevronRight className="w-3 md:w-4" />
    </Link>
  );
}

export default function Pagination({
  className,
  currentPage,
  totalPages,
}: PaginationProps) {
  const hasLeftEllipsis = currentPage > 2;
  const hasRightEllipsis = currentPage < totalPages - 1;

  const leftPage = currentPage > 1 && currentPage - 1;
  const rightPage = currentPage < totalPages && currentPage + 1;

  return (
    <div
      className={`${className} flex w-full items-center justify-center gap-4 md:gap-8`}
    >
      <PaginationPrevious href={`?page=${Math.max(1, currentPage - 1)}`} />

      <div className="flex items-center gap-2 md:gap-4">
        {hasLeftEllipsis ? (
          <Link href={`?page=1`} className="p-2 text-sm">
            <Ellipsis size={10} />
          </Link>
        ) : (
          <></>
        )}

        {leftPage ? (
          <Link href={`?page=${leftPage}`} className="p-2 text-sm">
            {leftPage}
          </Link>
        ) : (
          <></>
        )}

        <span className="text-strong-foreground-dark p-2 text-sm">
          {currentPage}
        </span>

        {rightPage ? (
          <Link href={`?page=${rightPage}`} className="p-2 text-sm">
            {rightPage}
          </Link>
        ) : (
          <></>
        )}

        {hasRightEllipsis ? (
          <Link href={`?page=${totalPages}`} className="p-2 text-sm">
            <Ellipsis size={10} />
          </Link>
        ) : (
          <></>
        )}
      </div>

      <PaginationNext href={`?page=${Math.min(currentPage + 1, totalPages)}`} />
    </div>
  );
}
