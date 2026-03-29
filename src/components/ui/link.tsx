import { ReactNode } from "react";

import LinkNext from "next/link";

export type LinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
};

export default function Link({
  children,
  href,
  className,
  icon,
  external,
}: LinkProps) {
  return (
    <LinkNext
      href={href}
      className={`fill-foreground-dimmed hover:fill-foreground text-foreground-dimmed hover:text-foreground transition-colors ${className}`}
      target={external ? "_blank" : "_self"}
    >
      {children}
      {icon}
    </LinkNext>
  );
}
