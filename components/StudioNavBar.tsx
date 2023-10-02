import { Undo2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const StudioNavBar = (props: any) => {
  return (
    <div>
      {props.renderDefault({ ...props, title: "custom title" })}
      <div className="p-2 flex gap-2 bg-foreground text-background">
        <Undo2 />
        <Link href='/'>Back to website</Link>
      </div>
    </div>
  );
};

export default StudioNavBar;
