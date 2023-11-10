import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `ring-offset-background focus-visible:ring-ring ease-bounce 
    inline-flex items-center justify-center rounded-full border 
    bg-white text-sm font-medium transition-all duration-300 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
    disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        ["bounce-in"]:
          "translate-x-[-2px] translate-y-[-2px] shadow-[2px_2px] hover:translate-x-0 hover:translate-y-0 hover:shadow-none",
        ["bounce-out"]:
          "transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[2px_2px]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "bounce-in",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
