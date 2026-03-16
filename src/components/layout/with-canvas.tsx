import { ReactNode } from "react";

export type WithCanvasProps = {
  children: ReactNode;
  canvas?: ReactNode;
};

export default function WithCanvas({ canvas, children }: WithCanvasProps) {
  return (
    <div className="flex">
      <div className="flex w-6/7 justify-end md:mr-6 lg:mr-8 xl:w-4/7">
        <div className="w-full max-w-lg px-4 lg:max-w-xl">{children}</div>
      </div>

      <div className="w-1/7 lg:w-3/7">{canvas}</div>
    </div>
  );
}
