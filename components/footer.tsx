import Link from "next/link";
import { FaGithub, FaXTwitter, FaGoodreads } from "react-icons/fa6";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "../config/site";

export function Footer() {
  return (
    <footer className="flex flex-col gap-3 font-mono justify-center items-center border-t-[1px] h-[250px] mt-10">
      <div className="flex flex-row">
        <Link
          href={siteConfig.url}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex"
        >
          <div
            className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}
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
            className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}
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
            className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}
          >
            <FaGoodreads className="h-6 w-6" />
          </div>
        </Link>
      </div>
      <p>Site developed by Neil Bajaj</p>
      <p>Techify © 2024</p>
    </footer>
  );
}
