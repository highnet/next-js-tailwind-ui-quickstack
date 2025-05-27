"use client";

import { Toolbar } from "@base-ui-components/react/toolbar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";

export default function Footer() {
  return (
    <Toolbar.Root className="flex w-full items-center gap-2 sm:gap-4 rounded-md border-t border-gray-200 bg-gray-50 p-1 sm:p-2 mt-8">
      <Link href="/" passHref>
        <div className="flex items-center gap-2 sm:gap-4 cursor-pointer">
          <Image src="/next.svg" alt="Logo" width={48} height={48} className="sm:w-16 sm:h-16" />
          <span className="font-semibold text-gray-900 text-sm sm:text-base">MyApp</span>
        </div>
      </Link>
      <Toolbar.Group className="flex gap-1 mx-auto">
        <Link href="/" passHref>
          <Button variant="link" size="sm" className="text-xs sm:text-sm px-2 sm:px-4">
            Home
          </Button>
        </Link>
        <Link href="/about" passHref>
          <Button variant="link" size="sm" className="text-xs sm:text-sm px-2 sm:px-4">
            About
          </Button>
        </Link>
      </Toolbar.Group>
    </Toolbar.Root>
  );
}
