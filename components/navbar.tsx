"use client";

import { siteConfig } from "../config/site";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  FaLaptopCode,
  FaGithub,
  FaXTwitter,
  FaGoodreads,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { RevealList } from "next-reveal";
import { HamburgerNav } from "./hamburger-menu";
import { ModeToggle } from "./mode-toggle";

export function NavigationBar() {
  return (
    <header className="sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-20">
      <RevealList
        interval={60}
        delay={500}
        className="container flex text-center items-center justify-center h-14 max-w-screen-2xl"
      >
        {/* Logo */}
        <Link href="/" className="flex space-x-3 mr-6">
          <FaLaptopCode className="h-7 w-7" />
          <span className="font-bold text-md">{siteConfig.name} Blog</span>
        </Link>
        {/* Navigation */}
        <nav className="space-x-2 font-mono text-sm">
          <Link
            href="#blog"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden md:inline-block"
            )}
          >
            _blog
          </Link>
          <Link
            href="#about"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden md:inline-block"
            )}
          >
            _about
          </Link>
        </nav>
        {/* Social link + icons that are snapped to the right of navigation */}
        <div className="flex flex-1 items-center justify-end space-x-6">
          <nav className="flex items-center">
            <Link
              href={siteConfig.url}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0"
                )}
              >
                <FaGithub className="h-6 w-6" />
              </div>
            </Link>
            <Link
              href={siteConfig.url}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0"
                )}
              >
                <FaXTwitter className="h-6 w-6" />
              </div>
            </Link>
            <Link
              href={siteConfig.url}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0"
                )}
              >
                <FaGoodreads className="h-6 w-6" />
              </div>
            </Link>
          </nav>
          <Button
            variant="outline"
            className="font-mono font-medium hidden md:inline-flex"
          >
            #subscribe
          </Button>
          <ModeToggle />
          <HamburgerNav />
        </div>
      </RevealList>
    </header>
  );
}
