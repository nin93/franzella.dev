import { Dithering } from "@paper-design/shaders-react";

export type DitheringCanvasProps = {
  className?: string;
  colorBack: string;
  colorFront: string;
};

export default function DitheringCanvas({
  className,
  colorBack,
  colorFront,
}: DitheringCanvasProps) {
  return (
    <Dithering
      className={className}
      colorBack={colorBack}
      colorFront={colorFront}
      shape="simplex"
      type="4x4"
      size={3.572}
      speed={0.86}
      scale={0.8}
      offsetX={1}
      offsetY={0}
    />
  );
}
