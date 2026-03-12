import { ReactNode } from "react";

export type LeftContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function LeftContainer({
  children,
  className,
}: LeftContainerProps) {
  return (
    <div className="flex justify-end md:mr-6 lg:mr-8">
      <div className={`max-w-lg space-y-4 lg:max-w-xl ${className}`}>
        {children}
      </div>
    </div>
  );
}
