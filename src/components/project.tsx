import { ReactNode } from "react";

import Image from "next/image";

import Paragraph from "./typography/paragraph";
import Link from "./link";
import H3 from "./typography/h3";
import Filled from "./ui/filled";

export type ProjectTechProps = {
  label: string;
  icon: ReactNode;
};

export type ProjectProps = {
  description: string;
  title: string;
  href: string;
  sourceCodeHref: string;
  className?: string;
  src: string;
  tech: ProjectTechProps[];
  reverse?: boolean;
};

export default function Project({
  title,
  description,
  href,
  sourceCodeHref,
  src,
  tech,
  className,
}: ProjectProps) {
  const urlSourceLink = URL.parse(sourceCodeHref);

  return (
    <div className={`${className} space-y-4`}>
      <H3>{title}</H3>

      <div className="overflow-hidden">
        <a href={href} target="_blank">
          <Image
            className="w-full transition-transform duration-350 hover:scale-[102%]"
            width={512}
            height={288}
            src={src}
            alt={title}
          />
        </a>
      </div>

      <Paragraph>{description}</Paragraph>

      <div className="flex flex-wrap gap-2 md:gap-4">
        {tech.map((tech, i) => (
          <Filled key={`project_${title}_tech_${i}`}>
            <span className="fill-foreground-dark w-3">{tech.icon}</span>
            {tech.label}
          </Filled>
        ))}
      </div>

      {urlSourceLink ? (
        <>
          <Link href={sourceCodeHref} className="text-xs md:text-base">
            {urlSourceLink.hostname + urlSourceLink.pathname}
          </Link>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
