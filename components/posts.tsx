"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RevealWrapper, RevealList } from "next-reveal";

import { Button } from "@/components/ui/button";

export function Posts() {
  return (
    <section className="">
      <RevealWrapper reset={true}>
        <h1 className="text-[2.5rem] font-bold z-10 w-full text-left px-10">
          Latest Posts
        </h1>
        <p className="w-full text-left font-mono px-10 py-1">
          Have a read on my thoughts on all things dev, travel, productivity,
          etc.
        </p>
      </RevealWrapper>

      <RevealList
        interval={60}
        delay={200}
        reset={true}
        className="grid grid-cols-1 gap-3 p-10 pt-7"
      >
        <Card className="w-full rounded-sm border-none shadow-md">
          <CardHeader>
            <CardTitle className="font-bold">
              How To Print Hello World
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="">
              Deploy your new project in one-click.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-full rounded-sm border-none shadow-md">
          <CardHeader>
            <CardTitle className="font-bold">
              How To Print Hello World
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="">
              Deploy your new project in one-click.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-full rounded-sm border-none shadow-md">
          <CardHeader>
            <CardTitle className="font-bold">
              How To Print Hello World
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="">
              Deploy your new project in one-click.
            </CardDescription>
          </CardContent>
        </Card>
      </RevealList>
      <Button className="mx-10 my-2 font-mono transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:!bg-primary">
        Go to all posts
      </Button>
    </section>
  );
}
