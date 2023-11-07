import { Search } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const SearchButton = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="lg:text-text bg-text border-text hover:text-text lg:hover:text-accent-foreground rounded-full border p-3 text-white transition-all hover:bg-white hover:shadow-[2px_2px] lg:border-none lg:bg-transparent lg:hover:shadow-none">
          <Search width={20} height={20} />
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>Search menu</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SearchButton;
