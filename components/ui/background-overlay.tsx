import { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const BackgroundOverlay = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div
      className={cn("absolute inset-0 rounded-xl opacity-25", className)}
      {...props}
    ></div>
  );
};
