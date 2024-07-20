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
  { title: "Acme Logo", src: AcmeImage },
  { title: "Quantum Logo", src: QuantumImage },
  { title: "Echo Valley Logo", src: EchoImage },
  { title: "Celstia Logo", src: CelstiaImage },
  { title: "Pulse Logo", src: PulseImage },
  { title: "Apex Logo", src: ApexImage },
];

const LogoTicker = () => {
  return (
    <div className="bg-black pb-24 text-white">
      <Container className="flex flex-col items-center">
        <p className="text-grey text-center">
          Trusted by the world’s most innovative teams
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-4 overflow-hidden">
          {ImageLists.map((img) => (
            <Image src={img.src} alt={img.title} className="h-[25px] sm:h-[28px] w-auto" />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LogoTicker;
