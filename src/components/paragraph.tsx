import { ReactNode } from "react";

export type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export default function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p
      className={`${className} text-foreground-dark text-justify text-xs leading-relaxed wrap-anywhere xl:text-sm`}
    >
      {children}
    </p>
  );
}
