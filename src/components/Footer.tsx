"use client";

import * as React from "react";
import { Toolbar } from "@base-ui-components/react/toolbar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";

export default function Footer() {
  return (
    <Toolbar.Root className="flex w-full items-center gap-4 rounded-md border-t border-gray-200 bg-gray-50 p-2 mt-8">
      <Link href="/" passHref>
        <div className="flex items-center gap-4 cursor-pointer">
          <Image src="/next.svg" alt="Logo" width={64} height={64} />
          <span className="font-semibold text-gray-900">MyApp</span>
        </div>
      </Link>
      <Toolbar.Group className="flex gap-1 mx-auto">
        <Link href="/" passHref>
          <Button variant="link">Home</Button>
        </Link>
        <Link href="/about" passHref>
          <Button variant="link">About</Button>
        </Link>
      </Toolbar.Group>
    </Toolbar.Root>
  );
}
