import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Saas Landing Page - Next.js + Tailwind CSS + TypeScript",
  description:
    "A simple landing page for a SaaS product built with Next.js, Tailwind CSS, and TypeScript. Design Inspiration template by Framer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={cn(
          "min-h-screen text-base",
          inter.variable,
          dmSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
