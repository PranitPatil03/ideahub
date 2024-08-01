import React from "react";
import { cn } from "@repo/ui/lib/utils";

export function HeroText(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const { className, ...rest } = props;

  return (
    <h1
      className={cn(
        "font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900",
        className,
      )}
      {...rest}
    />
  );
}

export function HeroSubtitle(props: { children: React.ReactNode }) {
  return (
    <div className="font-sans mt-4 sm:mt-6 text-center">
      <p className="font-sans text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
        {props.children}
      </p>
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
      <div className="pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:max-w-4xl text-center">
            <HeroText>
              {props.title || "Transform Ideas into Realities"}
            </HeroText>
            <HeroSubtitle>
              {props.subtitle || (
                <>
                  your go-to platform for turning ideas into reality. Connect with a community of innovators,
                  collaborate on projects, and create impactful solutions effortlessly.
                </>
              )}
            </HeroSubtitle>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
