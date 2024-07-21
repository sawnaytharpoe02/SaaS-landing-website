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
        <div className="relative mt-12 flex items-center justify-center gap-x-16 gap-y-4 overflow-hidden before:absolute before:left-0 before:top-0 before:h-8 sm:before:w-12 before:bg-black/30 after:absolute before:blur-[4px] after:blur-[4px] after:right-0 after:top-0 after:h-8 before:w-8 after:w-8 sm:after:w-12 after:bg-black/30">
          {ImageLists.map((img) => (
            <Image key={img.alt} src={img.src} alt={img.alt} className="h-8 w-auto" />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LogoTicker;
