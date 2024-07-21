"use client";

import React, { useRef } from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Content from "@/components/Content";
import Image from "next/image";
import AppNightImage from "@/assets/image/App Night.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Project = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-[linear-gradient(to_bottom,#000,#4C248A)] py-12 text-white">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-5 text-center">
          <Title>Intuitive interface</Title>
          <Content>
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </Content>
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "700px",
            }}
            className="relative h-[220px] w-[340px] md:h-[437px] md:w-[704px] xl:h-[704px] xl:w-[1092px]"
          >
            <Image
              src={AppNightImage}
              alt="App Night Image"
              fill
              priority
              sizes="(max-width: 640px) 356px, (max-width: 768px) 704px, 1092px"
              className="absolute"
              ref={imgRef}
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Project;
