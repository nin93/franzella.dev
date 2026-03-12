import H1 from "@/components/h1";
import H2 from "@/components/h2";
import H3 from "@/components/h3";
import WithCanvas from "@/components/with-canvas";
import DitheringCanvas from "@/components/dithering-canvas";
import LeftContainer from "@/components/left-container";
import Paragraph from "@/components/paragraph";
import Link from "@/components/link";
import Header from "@/components/header";
import { WORKING_EXPERIENCES } from "@/constants/working-experiences";
import WorkingExperience from "@/components/working-experience";

function Info() {
  return (
    <>
      <H1>Elia Franzella</H1>

      <Paragraph>
        I&apos;m a developer specializing in building highly scalable,
        event-driven backend systems.
      </Paragraph>

      <Paragraph>
        Over the course of 5 years I designed and developed modern backend
        solutions within distributed and cloud-native software ecosystems using
        the NestJS framework. I built, maintained and reformed RESTful, gRPC and
        GraphQL APIs, monitoring and enhancing stability and performance using
        tools like Instana and Kibana (ELK).
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

      <div className="flex items-center gap-4 text-sm transition-colors lg:text-base">
        <Link href="https://www.github.com/nin93/">GitHub</Link>

        <Link href="https://www.linkedin.com/in/elia-franzella-20a046234/">
          LinkedIn
        </Link>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <WithCanvas
        canvas={
          <>
            <DitheringCanvas
              className="h-full"
              colorBack="#0d0f00"
              colorFront="#770b03"
            />
          </>
        }
      >
        <LeftContainer className="min-h-screen w-full px-4">
          <Header className="m-0 py-8" />

          <div className="flex h-full flex-col justify-center space-y-4 pb-24">
            <Info />
          </div>
        </LeftContainer>

        <LeftContainer className="w-full px-4">
          <div className="border-muted-background-dark space-y-8 border-t pt-10">
            <H2>Working Experience</H2>

            {WORKING_EXPERIENCES.map((props, i) => (
              <WorkingExperience key={`experience_${i}`} {...props} />
            ))}
          </div>
        </LeftContainer>
      </WithCanvas>

      {/* <section className="mt-8 flex flex-col space-y-8"> */}
      {/*   {PROJECTS.map((project, i) => ( */}
      {/*     <div key={`project_${i}`} className="flex justify-end"> */}
      {/*       <div className="text-foreground-dark mb-8 flex w-1/2 justify-end px-8"> */}
      {/*         <div className="max-w-md space-y-4 px-4 lg:max-w-lg"> */}
      {/*           <Project {...project} /> */}
      {/**/}
      {/*           <div className="mt-8"></div> */}
      {/*         </div> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   ))} */}
      {/* </section> */}
    </>
  );
}
