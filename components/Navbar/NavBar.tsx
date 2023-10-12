import Image from "next/image";
import Link from "next/link";

import MenuButton from "./MenuButton";
import SearchButton from "./SearchButton";

export function NavigationMenuDemo() {
  return (
    <div className="md:my-8 md:px-8 md:py-3">
      <div className="border-b border-black bg-white p-3 md:rounded-full md:border">
        <div className="mx-4 flex items-center justify-between">
          <MenuButton />

          <Link href="/" className="up-on-hover transform-none transition-all">
            <Image alt="Logo" src="/logo-groovy.png" width={160} height={40} />
          </Link>

          <SearchButton />
        </div>
      </div>
    </div>
  );
}
