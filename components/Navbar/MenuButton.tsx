import { Menu } from 'lucide-react'

import { Sheet, SheetContent, SheetDescription,SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'


const MenuButton = () => {
  return (
    <Sheet>
    <SheetTrigger>
      <Menu width={32} height={32} />
    </SheetTrigger>
    <SheetContent side='left'>
      <SheetHeader>
        <SheetTitle>Are you sure absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  )
}

export default MenuButton