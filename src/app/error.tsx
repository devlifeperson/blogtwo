"use client";

import { useMemo } from "react";
import { isAxiosError } from "axios";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const errMsg = useMemo(() => {
    if (isAxiosError(error)) {
      console.log("[Error] Error:", error.response?.data);
      return error.response?.data.message;
    } else {
      return error.message;
    }
  }, [error]);

  return (
    <div className="grid flex-1 place-content-center gap-5 bg-background px-4 text-center">
      <div className="-mt-28">
        <h1 className="text-9xl font-black text-gray-200">ERROR</h1>

        <p className="text-2xl font-bold tracking-tight sm:text-4xl">
          Something went wrong!
        </p>

        <pre className="mt-2 text-gray-500">{errMsg}</pre>
      </div>

      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
