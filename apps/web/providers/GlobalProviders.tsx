import type { ReactNode } from "react";
import { SWRProvider } from "../providers/SWRProvider";

interface GlobalProvidersProps {
  children: ReactNode;
}

export function GlobalProviders({ children }: GlobalProvidersProps) {
  return <SWRProvider>{children}</SWRProvider>;
}
