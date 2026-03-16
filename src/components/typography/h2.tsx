import { ReactNode } from "react";

export type H2Props = {
  children: ReactNode;
};

export default function H2({ children }: H2Props) {
  return (
    <h2 className="text-strong-foreground-dark font-mono text-2xl font-semibold lg:text-3xl">
      {children}
    </h2>
  );
}
