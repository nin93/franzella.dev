import { ReactNode } from "react";

export type FilledProps = {
  children: ReactNode;
};

export default function Filled({ children }: FilledProps) {
  return (
    <span className="bg-muted-background-dark flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs md:text-sm">
      {children}
    </span>
  );
}
