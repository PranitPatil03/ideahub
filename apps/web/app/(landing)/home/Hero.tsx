import Image from "next/image";
import { cn } from "@repo/ui/lib/utils";
import { SquaresPattern } from "../../../app/(landing)/home/SquaresPattern";

export function HeroText(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const { className, ...rest } = props;

  return (
    <h1
      className={cn("font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900", className)}
      {...rest}
    />
  );
}

export function HeroSubtitle(props: { children: React.ReactNode }) {
  return (
    <div className="font-sans mt-4 sm:mt-6 text-center">
      <p className="font-sans text-sm md:text-xl  text-gray-600 max-w-2xl mx-auto">{props.children}</p>
    </div>
  );
}

export function Hero(props: {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
}) {
  return (
    <div className="relative pt-5 overflow-hidden">
      <SquaresPattern />
      <div className="pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:max-w-4xl text-center">
            <HeroText>
              {props.title || "Build professional resumes 10x faster"}
            </HeroText>
            <HeroSubtitle>
              {props.subtitle || (
                <>
                  AI-enhanced resume builder for career success.
                  <br />
                  Effortlessly transform your skills into job-winning resumes.
                </>
              )}
            </HeroSubtitle>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="relative mx-auto max-w-7xl">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={props.image || "/images/newsletters.png"}
                  alt="Inbox screenshot"
                  width={2432}
                  height={1442}
                  layout="responsive"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
