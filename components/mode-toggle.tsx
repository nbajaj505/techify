import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const router = useRouter();

  function changeSetMode(mode: string) {
    setTheme(mode);
    setTimeout(function () {}, 2000);
    window.location.reload();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-10 px-0">
          {/* The Tailwind allows the icon to be hidden or shown depending on the current mode of the website */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      {/* The "next-themes" npm package allows the onClick function to change the theme by initiating the setTheme func. */}
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeSetMode("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeSetMode("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeSetMode("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
