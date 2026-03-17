import Photograph, { PhotographProps } from "@/components/models/photograph";

export type PhotographListProps = {
  photographs: PhotographProps[];
};

export default function PhotographList({ photographs }: PhotographListProps) {
  return (
    <>
      {photographs.map((project, i) => (
        <Photograph
          key={`project_${i}`}
          className="border-muted-background-dark pb-8 not-last:border-b"
          {...project}
        />
      ))}
    </>
  );
}
