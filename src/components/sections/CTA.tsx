import React from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Content from "@/components/Content";
import Button from "@/components/Button";
import Image from "next/image";
import EmojiStarImage from "@/assets/image/emojistar.png";
import GearImage from "@/assets/image/gear.png";

const CTA = () => {
  return (
    <div className="overflow-clip bg-[#05020A] py-40 text-white">
      <Container className="relative flex max-w-xl flex-col items-center justify-center">
        <Image
          src={EmojiStarImage}
          alt="emoji start img"
          className="absolute -top-[120px] -left-[250px] hidden sm:inline"
        />
        <Image
          src={GearImage}
          alt="gear img"
          className="absolute hidden sm:inline -right-[230px] -bottom-[100px]"
        />
        <Title>Get instant access</Title>
        <p className="mb-8 max-w-lg text-center text-md text-light-grey">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <div className="flex w-full flex-col justify-center gap-2 px-5 sm:max-w-lg sm:flex-row">
          <input
            type="email"
            className="flex-1 rounded-md bg-white/20 px-3 text-sm outline-none py-2 sm:py-0"
            placeholder="name@email.com"
          />
          <Button>Get access</Button>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
