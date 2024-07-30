"use client";

import Image from "next/image";
import { Button } from "@repo/ui/components/ui/button";
import { Panel } from "./Panel";

export function ErrorDisplay(props: {
  error: { info?: { error: string }; error?: string };
}) {
  if (props.error?.info?.error || props.error?.error)
    return (
      <NotFound>
        There was an error: {props.error?.info?.error || props.error?.error}
      </NotFound>
    );

  if (props.error) {
    return (
      <NotFound>
        There was an error. Please refresh or contact support if the error
        persists.
      </NotFound>
    );
  }

  return null;
}

const NotFound = (props: { children: React.ReactNode }) => {
  return (
    <div className="text-gray-700">
      <Panel>{props.children}</Panel>
    </div>
  );
};

export const NotLoggedIn = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:p-20 md:p-32">
      <div className="text-lg text-gray-700">You are not signed in 😞</div>
      <Button variant="outline" className="mt-2">
        Sign in
      </Button>
      <div className="mt-8">
        <Image
          src="/images/falling.svg"
          alt=""
          width={400}
          height={400}
          unoptimized
        />
      </div>
    </div>
  );
};
