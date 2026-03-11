import { ReactNode } from "react";

export type H1Props = {
  children: ReactNode;
};

export default function H1({ children }: H1Props) {
  return (
    <h1 className="text-strong-foreground-dark font-serif text-2xl font-semibold lg:text-3xl">
      {children}
    </h1>
  );
}
