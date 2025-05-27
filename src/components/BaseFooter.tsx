import * as React from "react";
import { Toolbar } from "@base-ui-components/react/toolbar";
import Link from "next/link"; // Import Link from next/link for navigation
import Image from "next/image"; // Import Image from next/image for the logo

export default function BaseFooter() {
  return (
    <Toolbar.Root className="flex w-full items-center gap-4 rounded-md border-t border-gray-200 bg-gray-50 p-2 mt-8">
      <div className="flex items-center gap-2">
        <Image src="/next.svg" alt="Logo" width={32} height={32} />
        <span className="font-semibold text-gray-900">MyApp</span>
      </div>
      <Toolbar.Group className="flex gap-1 ml-auto">
        <Link href="/" passHref legacyBehavior>
          <Toolbar.Link className="flex h-8 items-center justify-center rounded-sm px-3 font-medium text-gray-600 select-none hover:bg-gray-100 focus-visible:bg-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-200">
            Home
          </Toolbar.Link>
        </Link>
        <Link href="/about" passHref legacyBehavior>
          <Toolbar.Link className="flex h-8 items-center justify-center rounded-sm px-3 font-medium text-gray-600 select-none hover:bg-gray-100 focus-visible:bg-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-200">
            About
          </Toolbar.Link>
        </Link>
      </Toolbar.Group>
    </Toolbar.Root>
  );
}
