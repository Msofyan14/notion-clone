"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="justify-between md:ml-auto md:justify-end w-full flex items-center gap-x-2 ">
        <Button variant="ghost" size="sm">
          Log in
        </Button>
        <Button size="sm">Get Jotion free</Button>
        <ModeToggle />
      </div>
    </div>
  );
};