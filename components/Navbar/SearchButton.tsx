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
        <div className="rounded-full bg-black p-3">
          <Search width={20} height={20} className="text-white" />
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="w-full">
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
