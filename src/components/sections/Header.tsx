"use client";

import React, { useEffect } from "react";
import Button from "@/components/Button";
import LogoImage from "@/assets/icons/logosaas.svg";
import Container from "@/components/Container";
import Link from "next/link";
import HamburgerMenu from "@/assets/icons/hamburger.svg";
import { cn } from "@/utils";

const NavLinks = [
  { title: "About", href: "#" },
  { title: "Features", href: "#" },
  { title: "Customers", href: "#" },
  { title: "Update", href: "#" },
  { title: "Help", href: "#" },
];

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);

  useEffect(() => {
    const doc = document.querySelector("html");
    if (doc) doc.classList.toggle("overflow-hidden", isHamburgerOpen);
  }, [isHamburgerOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setIsHamburgerOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  },[])
  return (
    <header className="bg-black mt-banner-height sm:mt-0">
      <Container className="flex h-navigation-height w-full items-center justify-between">
        <div className="relative">
          <div className="absolute left-1 top-1 h-8 w-8 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md" />
          <LogoImage className="relative h-12 w-12" />
        </div>
        <nav
          className={cn(
            "fixed left-0 top-[calc(var(--navigation-height)+var(--banner-height))] z-20 h-[calc(100vh-var(--navigation-height))] w-full overflow-auto bg-black transition-opacity duration-200 ease-in",
            "md:relative md:right-0 md:top-0 md:h-auto md:w-auto md:translate-x-0 md:opacity-100",
            isHamburgerOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-[100vw] opacity-0",
          )}
        >
          <ul
            className={cn(
              "flex flex-col gap-6 p-6 duration-300 ease-in [&_a:hover]:text-white/50 [&_a]:text-sm [&_a]:text-white [&_a]:transition-colors",
              "md:flex-row md:items-center md:space-x-4 md:p-0",
            )}
          >
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
            <Button>Get for free</Button>
          </ul>
        </nav>
        <div
          className="flex cursor-pointer items-center justify-center md:hidden"
          onClick={() => setIsHamburgerOpen((prev) => !prev)}
        >
          <HamburgerMenu className="h-6 w-6" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
