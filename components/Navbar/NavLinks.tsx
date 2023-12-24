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
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useCategories } from "@/sanity/lib/hooks";

type CategoryItem = {
  title: string;
  href: string;
  description?: string;
};

interface INavLink {
  triggerText: string;
  triggerHref?: string;
  items: CategoryItem[];
  isLoading?: boolean;
}

export function NavLinks() {
  const categories = useCategories();

  const components: INavLink[] = [
    {
      triggerText: "Trang chủ",
      items: [
        {
          title: "Nổi bật",
          href: "/#featured",
        },
        {
          title: "Bài viết mới",
          href: "/#new-post",
        },
        {
          title: "Liên hệ",
          href: "/#contact",
        },
      ],
    },
    {
      isLoading: !categories.length,
      triggerText: "Chủ đề",
      items: categories.map((e) => ({
        ...e,
        href: `/category/${e.slug.current}`,
      })),
    },
  ];

  return (
    <NavigationMenu className="z-50 hidden lg:block">
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
                <ul className="grid gap-3 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.9fr_1fr]">
                  {component.isLoading ? (
                    <>
                      <Skeleton className="h-[40px] w-full rounded-full" />
                      <Skeleton className="h-[40px] w-full rounded-full" />
                      <Skeleton className="h-[40px] w-full rounded-full" />
                      <Skeleton className="h-[40px] w-full rounded-full" />
                    </>
                  ) : (
                    component.items.map((item) => (
                      <ListItem
                        key={item.title}
                        href={item.href}
                        title={item.title}
                      >
                        {item.description}
                      </ListItem>
                    ))
                  )}
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
