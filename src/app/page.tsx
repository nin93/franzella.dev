import { Dithering } from "@paper-design/shaders-react";

import Paragraph from "@/components/paragraph";
import H1 from "@/components/h1";

function Info() {
  return (
    <div className="text-foreground-dark mb-8 flex items-center justify-end px-4 md:mr-6">
      <div className="max-w-md space-y-4 px-4 lg:max-w-lg">
        <H1>Elia Franzella</H1>

        <Paragraph className="mt-8">
          I&apos;m a developer specializing in building highly scalable,
          event-driven backend systems.
        </Paragraph>

        <Paragraph>
          Over the course of 5 years I designed and developed modern backend
          solutions within distributed and cloud-native software ecosystems
          using the NestJS framework. I built, maintained and reformed RESTful,
          gRPC and GraphQL APIs, monitoring and enhancing stability and
          performance using tools like Instana and Kibana (ELK).
        </Paragraph>

        <Paragraph>
          Feel free to reach out to me at{" "}
          <a
            href="mailto:franzella.elia@gmail.com"
            className="text-strong-foreground-dark underline underline-offset-2"
          >
            franzella.elia@gmail.com
          </a>
          .
        </Paragraph>

        <div className="mt-8 flex items-center gap-4 text-sm transition-colors lg:text-base">
          <a
            href="https://www.github.com/nin93/"
            className="focus-within:text-foreground-dark text-muted-foreground-dark hover:text-foreground-dark text-xs transition-colors xl:text-sm"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/elia-franzella-20a046234/"
            className="focus-within:text-foreground-dark text-muted-foreground-dark hover:text-foreground-dark text-xs transition-colors xl:text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen">
        <div className="flex w-3/4 flex-col justify-center lg:mb-24 xl:w-1/2">
          <Info />
        </div>

        <div className="w-1/4 lg:w-1/2">
          <Dithering
            className="h-full"
            colorBack="#0d0f00"
            colorFront="#770b03"
            shape="simplex"
            type="4x4"
            size={4.6}
            speed={0.86}
            scale={0.8}
            offsetX={1}
            offsetY={0}
          />
        </div>
      </section>
    </>
  );
}
