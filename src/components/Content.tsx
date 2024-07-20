import { cn } from "@/utils";
import React from "react";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}
const Content = ({ children, className }: ContentProps) => {
  return <div className={cn("text-md sm:text-lg text-white font-light", className)}>{children}</div>;
};

export default Content;
