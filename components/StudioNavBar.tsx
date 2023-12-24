import { Undo2 } from "lucide-react";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StudioNavBar = (props: any) => {
  return (
    <div>
      <div className="flex gap-2 bg-foreground p-2 text-background">
        <Undo2 />
        <Link href="/">Back to website</Link>
      </div>
      {props.renderDefault({ ...props, title: "custom title" })}
    </div>
  );
};

export default StudioNavBar;
