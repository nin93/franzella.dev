import { ReactNode } from "react";

export type H2Props = {
  children: ReactNode;
};

export default function H2({ children }: H2Props) {
  return (
    <h2 className="text-strong-foreground-dark font-serif text-xl font-semibold lg:text-2xl">
      {children}
    </h2>
  );
}
