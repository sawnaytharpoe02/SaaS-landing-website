"use client";

import React from "react";
import Button from "@/components/Button";
import ChevronRight from "@/assets/icons/chevron_white.svg";
import Image from "next/image";
import CursorImage from "@/assets/image/cursor.png";
import MessageImage from "@/assets/image/message.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center space-y-8 overflow-clip bg-[linear-gradient(to_bottom,#000000,#200D42,#4F21A1,#A46EDB)] px-3 pb-[10rem] pt-20 text-center">
      <Button className="mx-auto flex w-fit items-center justify-center rounded-lg border border-grey-22 bg-transparent py-1 text-xs">
        <p className="mr-2 text-white/50">Version 2.0 is here</p>
        <div className="inline-flex items-center gap-2 text-white">
          <span>Read more</span> <ChevronRight />
        </div>
      </Button>
      <div className="relative">
        <motion.div
          drag
          dragSnapToOrigin
          className="absolute hidden cursor-grab sm:-left-[150px] sm:top-[68px] sm:inline-block lg:-left-[142px] lg:top-[190px]"
        >
          <Image
            src={CursorImage}
            alt="Cursor Icon"
            className=""
            width={200}
            height={200}
            draggable={false}
          />
        </motion.div>
        <motion.div drag dragSnapToOrigin className="absolute hidden cursor-grab sm:-right-[166px] sm:top-[74px] sm:inline-block lg:-right-[164px] lg:top-[90px]">
          <Image
            src={MessageImage}
            alt="Message Icon"
            width={200}
            height={200}
            draggable={false}
          />
        </motion.div>
        <h1 className="text-xl leading-none tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-12xl">
          One Task <br /> at a Time
        </h1>
      </div>
      <p className="max-w-sm text-white/80">
        Celebrate the joy of accomplishment with an app designed to track your
        progress, motivate your efforts, and celebrate your successes.
      </p>
      <Button size="lg" className="relative z-10">
        Get for free
      </Button>
      <div className="absolute top-[calc(100%-210px)] h-[375px] w-[909px] rounded-[100%] border border-[#B48CDE] bg-gradient-radial sm:min-h-[1014px] sm:w-[1924px] sm:bg-gradient-radial-sm lg:min-w-[2344px]" />
    </div>
  );
};

export default Hero;
