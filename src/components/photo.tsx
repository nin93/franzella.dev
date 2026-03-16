import Image from "next/image";

import Paragraph from "./typography/paragraph";
import H3 from "./typography/h3";

export type PhotoProps = {
  className?: string;
  title: string;
  medium: string;
  date: string;
  src: string;
};

export default function Photo({
  title,
  src,
  className,
  medium,
  date,
}: PhotoProps) {
  return (
    <div className={`${className} space-y-4`}>
      <H3>{title}</H3>

      <div className="overflow-hidden">
        <Image
          className="w-full"
          unoptimized
          width={512}
          height={288}
          src={src}
          alt={title}
        />
      </div>

      <Paragraph>{medium}</Paragraph>

      <Paragraph className="text-muted-foreground-dark">{date}</Paragraph>
    </div>
  );
}
