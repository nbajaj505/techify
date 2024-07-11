"use client";
import ParticlesComponent from "./particles";
import { Me } from "@/components/draggable-img";
import { RevealWrapper } from "next-reveal";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <div>
      <section className=" h-[700px] pt-10 sm:p-5">
        <RevealWrapper className="flex flex-col items-center justify-center text-center h-full">
          <ParticlesComponent id="particles" className="-z-10" />
          <p
            className="w-full text-left font-mono pl-[60%] animate-bounce"
            id="moveable-img-tag"
          >
            <FaLocationArrow className="rotate-180 inline mr-2" />
            Drag the image!
          </p>
          <Me />
          <h1 className="text-5xl font-bold m-5">Hi, I'm Neil!</h1>
          <p className="w-[50%] font-mono font-[30px] text=[#1d1d1f]">
            Greetings! As you can probably tell, I'm Neil - a full stack
            developer in the making and the author and developer of the site you
            are currently on! This site is my way of allowing me to share my
            learning on not just tech, but productivity, travel, and whatever
            else is on my mind.
          </p>
          <Link
            href="#about"
            className={cn(
              buttonVariants({ variant: "default" }),
              "block mx-auto my-5 font-mono transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:!bg-primary"
            )}
          >
            Learn More
          </Link>
        </RevealWrapper>
      </section>
    </div>
  );
}
