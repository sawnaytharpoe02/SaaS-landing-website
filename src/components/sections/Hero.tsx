import React from "react";
import Button from "@/components/Button";
import ChevronRight from "@/assets/icons/chevron_white.svg";
import Container from "../Container";
import Image from "next/image";
import CursorImage from "@/assets/image/cursor.png";
import MessageImage from "@/assets/image/message.png";

const Hero = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#000000,#200D42,#4F21A1,#A46EDB)]">
      <div className="relative flex flex-col items-center space-y-8 overflow-clip px-3 py-[72px] text-center">
        <Button className="mx-auto flex w-fit items-center justify-center rounded-lg border border-grey-22 bg-transparent py-1 text-xs">
          <p className="mr-2 text-white/50">Version 2.0 is here</p>
          <div className="inline-flex items-center gap-2 text-white">
            <span>Read more</span> <ChevronRight />
          </div>
        </Button>
        <div className="relative">
          <Image
            src={CursorImage}
            alt=""
            className="absolute hidden sm:-left-[150px] sm:top-[68px] sm:inline-block lg:-left-[142px] lg:top-[190px]"
            width={200}
            height={200}
            sizes="min"
          />
          <Image
            src={MessageImage}
            alt=""
            className="absolute hidden sm:-right-[166px] sm:top-[74px] sm:inline-block lg:-right-[164px] lg:top-[90px]"
            width={200}
            height={200}
          />
          <h1 className="sm:text-4xl text-xl leading-none tracking-tighter text-white md:text-5xl lg:text-12xl">
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
        <div className="absolute h-[359px] w-[900px] rounded-[100%] border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_69%,#9560EB)] top-[calc(100%-120px)]" />
      </div>
    </div>
  );
};

export default Hero;
