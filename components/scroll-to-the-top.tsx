"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showButton && (
        <div className="fixed bottom-6 right-6 z-20">
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="icon"
            className="rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/80 dark:focus:ring-primary"
          >
            {/* <Link href="/"> */}
            <ChevronUpIcon className="h-6 w-6" />
            {/* </Link> */}
          </Button>
        </div>
      )}
    </>
  );
}

function ChevronUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
