import { ReactNode } from "react";

import LinkNext from "next/link";

export type LinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
};

export default function Link({ children, href, className, icon }: LinkProps) {
  return (
    <LinkNext
      href={href}
      className={`${className} focus-within:text-foreground-dark text-muted-foreground-dark hover:text-foreground-dark transition-colors`}
    >
      {children}
      {icon}
    </LinkNext>
  );
}
