import React from "react";
import Button from "@/components/Button";
import LogoImage from "@/assets/icons/logosaas.svg";
import Container from "@/components/Container";
import Link from "next/link";
import HamburgerMenu from "@/assets/icons/hamburger.svg";

const NavLinks = [
  { title: "About", href: "#" },
  { title: "Features", href: "#" },
  { title: "Customers", href: "#" },
  { title: "Update", href: "#" },
  { title: "Help", href: "#" },
];

const Header = () => {
  return (
    <div className="h-navigation-height flex items-center bg-black">
      <Container className="flex w-full items-center justify-between">
        <div className="relative">
          <div className="absolute left-1 top-1 h-8 w-8 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md" />
          <LogoImage className="relative h-12 w-12" />
        </div>
        <div className="hidden items-center space-y-4 sm:flex">
          <ul className="flex [&_a]:text-sm [&_a]:text-white items-center gap-6">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
            <Button>Get for free</Button>
          </ul>
        </div>
        <div className="flex cursor-pointer items-center justify-center sm:hidden">
          <HamburgerMenu className="h-6 w-6" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
