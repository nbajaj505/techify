import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa6";
import { siteConfig } from "../config/site";
export function HamburgerNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <Link href="/" className="flex space-x-3 mr-6 mb-3">
          <FaLaptopCode className="h-7 w-7" />
          <span className="font-bold text-md">{siteConfig.name} Blog</span>
        </Link>
        <div className="flex flex-col gap-2 w-full font-mono py-4 border-t-[1px] border-black items-start">
          <Button variant="ghost">
            <Link href="#blog">_blog</Link>
          </Button>
          <Button variant="ghost">
            <Link href="#about">_about</Link>
          </Button>
          <Button variant="ghost">_subscribe</Button>
        </div>
        <hr className="w-[50%] border-black" />
        <div className="flex flex-col gap-2 w-full font-mono pt-4  items-start">
          <span className="font-sans font-bold">social links:</span>
          <Button variant="ghost">
            <Link href="#blog">@github</Link>
          </Button>
          <Button variant="ghost">
            <Link href="#about">@twitter</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
