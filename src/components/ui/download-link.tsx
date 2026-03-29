import { ReactNode } from "react";

import Link from "next/link";

export type DownloadLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  filename: string;
};

export default function DownloadLink({
  href,
  className,
  filename,
  children,
}: DownloadLinkProps) {
  return (
    <Link
      href={href}
      className={`${className} text-foreground-dimmed hover:text-foreground transition-colors`}
      download={filename}
      target="_blank"
    >
      {children}
    </Link>
  );
}
