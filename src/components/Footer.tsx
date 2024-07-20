import React from "react";
import TwitterIcon from "@/assets/icons/twitter.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import PinterestIcon from "@/assets/icons/pinterest.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import TiktokIcon from "@/assets/icons/tiktok.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import Container from "@/components/Container";

const Socials = [
  { component: TwitterIcon, name: "Twitter" },
  { component: InstagramIcon, name: "Instagram" },
  { component: PinterestIcon, name: "Pinterest" },
  { component: LinkedinIcon, name: "LinkedIn" },
  { component: TiktokIcon, name: "TikTok" },
  { component: YoutubeIcon, name: "YouTube" },
];

const Footer = () => {
  return (
    <div className="w-full bg-[#05020A] py-10 sm:py-5 border-t border-white/10">
      <Container className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-5 sm:gap-0">
        <p className="text-[#808080] text-xs sm:text-sm">
          @ 2024 Your Company, Inc. All rights reserved
        </p>
        <div className="flex items-center space-x-4">
          {Socials.map(({ component: IconComponent, name }) => (
            <IconComponent key={name} alt={name} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
