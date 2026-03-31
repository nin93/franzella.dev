import H2 from "@/components/typography/h2";
import Link from "@/components/ui/link";

export default function NotFound() {
  return (
    <div className="mt-24 flex min-h-96 items-center px-12 pb-14">
      <div className="space-y-4">
        <H2>
          <p className="text-center">404 — Not Found</p>
        </H2>

        <p className="text-center text-sm leading-relaxed wrap-anywhere md:text-base">
          Hey! The content you were looking for is not available or has been
          removed. If you think something is broken, report a problem.
        </p>

        <div className="mt-6 flex items-center justify-center gap-12">
          <Link href="/" className="text-base">
            Home
          </Link>

          <Link
            href="mailto:franzella.elia@gmail.com"
            className="text-center text-base"
          >
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}
