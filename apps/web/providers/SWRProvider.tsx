"use client";

import { useCallback, useState, createContext, useMemo } from "react";
import { SWRConfig, mutate } from "swr";
import { captureException } from "../utils/error";

const fetcher = async (url: string, init?: RequestInit | undefined) => {
  const res = await fetch(url, init);

  if (!res.ok) {
    const error: Error & { info?: any; status?: number } = new Error(
      "An error occurred while fetching the data.",
    );
    error.info = await res.json();
    error.status = res.status;

    captureException(error, {
      extra: { url, extraMessage: "SWR fetch error" },
    });

    throw error;
  }

  return res.json();
};

interface Context {
  resetCache: () => void;
}

const defaultContextValue = {
  resetCache: () => {},
};

const SWRContext = createContext<Context>(defaultContextValue);

export const SWRProvider = (props: { children: React.ReactNode }) => {
  const [provider, setProvider] = useState(new Map());

  const resetCache = useCallback(() => {
    mutate(() => true, undefined, { revalidate: false });

    setProvider(new Map());
  }, []);

  const value = useMemo(() => ({ resetCache }), [resetCache]);

  return (
    <SWRContext.Provider value={value}>
      <SWRConfig value={{ fetcher, provider: () => provider }}>
        {props.children}
      </SWRConfig>
    </SWRContext.Provider>
  );
};
