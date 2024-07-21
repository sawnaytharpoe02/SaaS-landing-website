"use client";

import React, { useEffect, useRef } from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Image from "next/image";
import EmojiStarImage from "@/assets/image/emojistar.png";
import GearImage from "@/assets/image/gear.png";
import { motion, useScroll, useTransform } from "framer-motion";

const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  return (
    <div
      ref={containerRef}
      className="overflow-clip bg-[#05020A] py-40 text-white"
    >
      <Container className="relative max-w-xl">
        <motion.div style={{ translateY }}>
          <Image
            src={EmojiStarImage}
            alt="emoji start img"
            className="absolute -top-[120px] right-[calc(100%+50px)] hidden sm:inline"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={GearImage}
            alt="gear img"
            className="absolute top-5 left-[calc(100%+20px)] hidden sm:inline"
          />
        </motion.div>
        <div className="flex flex-col items-center">
          <Title>Get instant access</Title>
          <p className="mb-8 max-w-lg text-center text-md text-light-grey">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 px-5 sm:max-w-lg sm:flex-row">
            <input
              type="email"
              className="flex-1 rounded-md bg-white/20 px-3 py-2 text-sm outline-none sm:py-0"
              placeholder="name@email.com"
            />
            <Button>Get access</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
