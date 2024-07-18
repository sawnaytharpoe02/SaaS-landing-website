import React from "react";
import Button from "@/components/Button";
import ChevronRight from "@/assets/icons/chevron_white.svg";
import Container from "../Container";

const Hero = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#000000,#200D42,#4F21A1,#A46EDB)]">
      <Container>
        <div className="flex max-w-sm flex-col space-y-8 px-3 py-[72px] text-center text-white">
          <Button className="flex items-center justify-center rounded-lg border border- bg-transparent py-1 w-fit mx-auto text-xs text-white">
            <p className="mr-2 text-white/20">Version 2.0 is here</p>
            <div className="inline-flex items-center gap-2">
              <span>Read more</span> <ChevronRight />       
            </div>
          </Button>

          <h1 className="text-xl leading-none tracking-tighter">
            One task <br /> at a Time
          </h1>
          <p className="text-white/80">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <Button>Get for free</Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
