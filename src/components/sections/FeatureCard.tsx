"use client";

import React, { useEffect, useRef } from "react";
import LeafIcon from "@/assets/icons/leaf.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const borderRef = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const borderRect = borderRef.current?.getBoundingClientRect();
      if (!borderRect) return;

      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="relative flex max-w-[21rem] cursor-pointer flex-col items-center justify-center gap-4 rounded-xl bg-dark-grey p-8 text-white">
      <motion.div
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={borderRef}
        className="border-violet/90 absolute inset-0 rounded-xl border-2"
      />
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-white">
        <LeafIcon />
      </div>
      <h3 className="text-md font-bold">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
