"use client";

import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex-col">
        <h1 className="text-4xl font-bold">Main</h1>
        <p className="mt-2">This is the main page.</p>
        <div className="mt-4 flex gap-2">
          <Button
            className="mt-2"
            onClick={() => window.open("https://nextjs.org", "_blank")}
          >
            Next.js
          </Button>
          <Button
            className="mt-2"
            onClick={() => window.open("https://tailwindcss.com", "_blank")}
            variant="destructive"
          >
            Tailwind CSS
          </Button>
          <Button
            className="mt-2"
            onClick={() => window.open("https://mui.com/base-ui/", "_blank")}
            variant="secondary"
          >
            Base UI
          </Button>
        </div>
        <Button
          className="mt-4"
          onClick={() =>
            window.open(
              "https://github.com/highnet/next-js-tailwind-ui-quickstack",
              "_blank"
            )
          }
          variant="outline"
        >
          Source Code
        </Button>
      </div>
    </main>
  );
}
