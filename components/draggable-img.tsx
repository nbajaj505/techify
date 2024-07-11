"use client";
import { siteConfig } from "../config/site";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import neil from "../neil.png";
import Link from "next/link";

export var hidden = false;

export function Me() {
  const constraintsRef = useRef(null);
  return (
    <motion.div ref={constraintsRef}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="flex h-[150px] w-[150px] m-auto"
      >
        <Image
          src={neil}
          alt={siteConfig.author}
          className="rounded-full h-[150px] w-[150px] border border-4 border-[#6E7277] shadow-md"
          id="moveable-img"
        />
      </motion.div>
    </motion.div>
  );
}
