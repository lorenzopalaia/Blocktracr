"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import LaunchUI from "../logos/launch-ui";

export default function Navigation() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <LaunchUI />
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Blocktracr
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Empower your crypto journey with Blocktracr. Track your
                      portfolio in real time with dynamic charts, live price
                      updates, and market insights.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/coins" title="Coins">
                Stay ahead with live crypto prices and trending market insights
                that give you the edge.
              </ListItem>
              <ListItem href="/dashboard" title="Dashboard">
                Dive into your portfolio with a dynamic dashboard featuring
                interactive charts and real-time updates.
              </ListItem>
              <ListItem href="/demo" title="Demo">
                Explore the Blocktracr experience with our interactive demo.
              </ListItem>
              <ListItem href="/signin" title="Sign in">
                Sign in now to unlock an unparalleled crypto tracking experience
                with intuitive insights.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
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
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
