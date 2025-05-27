"use client";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex-col">
        <h1 className="text-4xl font-bold">Main</h1>
        <p className="mt-4">This is the main page.</p>
        <Button
          className="mt-2"
          onClick={() => alert("Action Button Clicked!")}
        >
          Click Me
        </Button>
      </div>
    </main>
  );
}
