import { ReactNode } from "react";

export type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export default function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p
      className={`${className} text-foreground-dark text-justify text-sm leading-relaxed wrap-anywhere md:text-base`}
    >
      {children}
    </p>
  );
}
