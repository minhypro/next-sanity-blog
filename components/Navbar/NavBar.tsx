import Image from "next/image";
import Link from "next/link";

import MenuButton from "./MenuButton";
import { NavLinks } from "./NavLinks";
import SearchButton from "./SearchButton";
import SocialButtons from "./SocialButtons";

export function NavigationMenuDemo() {
  return (
    <div className="md:container md:my-8 md:px-8 md:py-3">
      <div className="mx-auto border-b border-black bg-white p-4 md:rounded-full md:border lg:max-w-5xl lg:px-10 lg:py-5 xl:max-w-6xl">
        <div className="mx-4 flex items-center justify-between">
          <MenuButton />

          <Link
            href="/"
            className="ease-bounce transition-all hover:translate-y-[-2px]"
          >
            <Image alt="Logo" src="/Mikegabyte.svg" width={210} height={40} />
          </Link>

          <div className="flex items-center justify-between">
            <NavLinks />

            <SearchButton />

            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
