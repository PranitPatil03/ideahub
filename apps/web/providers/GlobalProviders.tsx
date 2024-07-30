import type { ReactNode } from "react";
import { SessionProvider } from "../providers/SessionProvider";
import { SWRProvider } from "../providers/SWRProvider";

interface GlobalProvidersProps {
  children: ReactNode;
}

export function GlobalProviders({ children }: GlobalProvidersProps) {
  return (
    <SWRProvider>
      <SessionProvider>{children}</SessionProvider>
    </SWRProvider>
  );
}
