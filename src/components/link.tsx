import { ReactNode } from "react";

export type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export default function Link({
  children,
  href,
  className,
  external,
}: LinkProps) {
  return (
    <a
      href={href}
      className={`${className} focus-within:text-foreground-dark text-muted-foreground-dark hover:text-foreground-dark transition-colors`}
      target="_blank"
    >
      {children}
    </a>
  );
}
