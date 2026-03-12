import { ProjectProps } from "@/components/project";

export const PROJECTS: ProjectProps[] = [
  {
    title: "stateofneptune.com",
    description: "State Of Neptune's official band website.",
    href: "https://www.stateofneptune.com/",
    sourceCodeHref: "https://github.com/stateofneptune/stateofneptune.com",
    tech: ["Qwik", "TypeScript", "Tailwind"],
    src: "/assets/stateofneptune-com-img.png",
  },
  {
    title: "Alea",
    description:
      "Library to work with most known probability distributions. Features pseudo-random number generator (PRNG) implementations, high-level APIs for repeatable random sampling and cumulative distribution functions (CDF).",
    href: "https://github.com/nin93/alea",
    sourceCodeHref: "https://github.com/nin93/alea",
    tech: ["Crystal"],
    src: "/assets/image.avif",
  },
  {
    title: "Talgene",
    description: "Abstraction layer over genetic algorithm implementations.",
    href: "https://github.com/nin93/talgene",
    sourceCodeHref: "https://github.com/nin93/talgene",
    tech: ["Crystal"],
    src: "/assets/image.avif",
  },
];
