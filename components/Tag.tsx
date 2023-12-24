import { HTMLAttributes } from "react";

import { cn } from "@/lib";
import { MainColor } from "@/lib/interface";

import { Button } from "./ui/button";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  title: string;
  color?: "red" | "sky" | "violet";
  className?: string;
  mainColor?: MainColor;
  variant?:
    | "no-bounce"
    | "bounce-in"
    | "bounce-out"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const defaultColor: MainColor = {
  alpha: 1,
  hsl: {
    a: 1,
    s: 0.3865030674846626,
    _type: "hslaColor",
    h: 211.42857142857144,
    l: 0.6803921568627451,
  },
  hex: "#beadfa",
  rgb: { a: 1, b: 250, r: 190, g: 173, _type: "rgbaColor" },
};

const Tag = ({
  title,
  mainColor = defaultColor,
  variant = "bounce-out",
  className,
  size = "default",
}: TagProps) => {
  const iconSize = {
    default: "mr-2 h-3 w-3 ",
    sm: "mr-2 h-3 w-3 ",
    lg: "mr-2 h-3 w-3 ",
    icon: "mr-2 h-3 w-3 ",
  };
  return (
    <Button
      variant={variant}
      size={size}
      className={cn("whitespace-nowrap", className)}
    >
      <span
        className={cn(
          "[clip-path:polygon(50%_0%,_100%_38%,_82%_100%,_18%_100%,_0%_38%)]",
          iconSize[size],
        )}
        style={{
          backgroundColor: `rgba(${mainColor.rgb.r}, ${mainColor.rgb.g}, ${mainColor.rgb.b}, ${mainColor.alpha})`,
        }}
      />
      {title}
    </Button>
  );
};

export default Tag;
