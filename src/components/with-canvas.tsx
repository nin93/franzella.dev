import { ReactNode } from "react";

export type WithCanvasProps = {
  children: ReactNode;
  className?: string;
  canvas?: ReactNode;
};

export default function WithCanvas({
  canvas,
  children,
  className,
}: WithCanvasProps) {
  return (
    <div className={`flex ${className}`}>
      <div className="w-4/5 xl:w-1/2">{children}</div>

      <div className="w-1/5 lg:w-1/2">{canvas}</div>
    </div>
  );
}
