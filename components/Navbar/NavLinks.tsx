"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface INavLink {
  triggerText: string;
  triggerHref?: string;
  items: {
    title: string;
    href: string;
    description: string;
  }[];
}

const components: INavLink[] = [
  {
    triggerText: "Home",
    items: [
      {
        title: "Featured post",
        href: "#featured",
        description: "Featured posts",
      },
      {
        title: "New post",
        href: "#new-post",
        description: "Newest posts here",
      },
      {
        title: "Contact",
        href: "#contact",
        description: "Connect with me",
      },
    ],
  },
  {
    triggerText: "Categories",
    items: [
      {
        title: "Frontend",
        href: "/frontend",
        description: "Sharing about Frontend things",
      },
      {
        title: "Miscellaneous",
        href: "/misc",
        description: "Other things that may help",
      },
      {
        title: "Code snippets",
        href: "/docs/primitives/progress",
        description: "Code snippets that may help",
      },
    ],
  },
  { triggerText: "About", items: [], triggerHref: "#about" },
];

export function NavLinks() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        {components.map((component) =>
          component.triggerHref ? (
            <NavigationMenuItem key={component.triggerText}>
              <Link href={component.triggerHref} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {component.triggerText}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={component.triggerText}>
              <NavigationMenuTrigger>
                {component.triggerText}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {component.items.map((item) => (
                    <ListItem
                      key={item.title}
                      href={item.href}
                      title={item.title}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
