"use client";

import React from "react";
import AcmeImage from "@/assets/image/acme.png";
import QuantumImage from "@/assets/image/quantum.png";
import EchoImage from "@/assets/image/echo.png";
import CelstiaImage from "@/assets/image/celestia.png";
import PulseImage from "@/assets/image/pulse.png";
import ApexImage from "@/assets/image/apex.png";
import Image from "next/image";
import Container from "@/components/Container";
import { motion } from "framer-motion";

const ImageLists = [
  { alt: "Acme Logo", src: AcmeImage },
  { alt: "Quantum Logo", src: QuantumImage },
  { alt: "Echo Valley Logo", src: EchoImage },
  { alt: "Celstia Logo", src: CelstiaImage },
  { alt: "Pulse Logo", src: PulseImage },
  { alt: "Apex Logo", src: ApexImage },
];

const LogoTicker = () => {
  return (
    <div className="bg-black pb-24 text-white">
      <Container className="flex flex-col items-center">
        <p className="text-center text-grey">
          Trusted by the world’s most innovative teams
        </p>
        <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-5xl relative mt-12 flex overflow-hidden before:absolute before:left-0 before:z-10 before:h-8 before:w-8 before:bg-black/40 before:blur-[4px] before:content-[''] after:absolute after:right-0 after:h-8 after:w-8 after:bg-black/40 after:blur-[4px] after:content-[''] sm:before:w-12 sm:after:w-12">
          <motion.div
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            initial={{ translateX: "0" }}
            animate={{ translateX: "-50%" }}
            className="flex flex-none items-center gap-16 pr-16"
          >
            {ImageLists.map((img) => (
              <Image
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="h-8 w-auto flex-none"
              />
            ))}

            {ImageLists.map((img) => (
              <Image
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="h-8 w-auto flex-none"
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default LogoTicker;
