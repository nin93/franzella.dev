import Photo, { PhotoProps } from "@/components/photo";

export type PhotographListProps = {
  photographs: PhotoProps[];
};

export default function PhotographList({ photographs }: PhotographListProps) {
  return (
    <>
      {photographs.map((project, i) => (
        <Photo
          key={`project_${i}`}
          className="border-muted-background-dark pb-8 not-last:border-b"
          {...project}
        />
      ))}
    </>
  );
}
