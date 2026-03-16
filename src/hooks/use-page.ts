"use client";

import { useSearchParams } from "next/navigation";

export default function usePage(rightBound: number) {
  const params = useSearchParams();
  const page = params.get("page") || "1";

  return Math.max(Math.min(page ? parseInt(page) || 1 : 1, rightBound), 1);
}
