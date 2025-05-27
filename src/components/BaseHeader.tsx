import * as React from "react";
import { Toolbar } from "@base-ui-components/react/toolbar";
import Link from "next/link";
import Image from "next/image";

export default function BaseHeader() {
  return (
    <Toolbar.Root className="flex w-full items-center gap-4 rounded-md border border-gray-200 bg-gray-50 p-2">
      <Link href="/" passHref>
        <div className="flex items-center gap-4 cursor-pointer">
          <Image src="/next.svg" alt="Logo" width={64} height={64} />
          <span className="font-semibold text-gray-900">MyApp</span>
        </div>
      </Link>
      <Toolbar.Group className="flex gap-1 ml-auto">
        <Link href="/" passHref>
          <div className="flex h-8 items-center justify-center rounded-sm px-3 font-medium text-gray-600 select-none hover:bg-gray-100 focus-visible:bg-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-200">
            Home
          </div>
        </Link>
        <Link href="/about" passHref>
          <div className="flex h-8 items-center justify-center rounded-sm px-3 font-medium text-gray-600 select-none hover:bg-gray-100 focus-visible:bg-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-200">
            About
          </div>
        </Link>
      </Toolbar.Group>
    </Toolbar.Root>
  );
}
