import { cn } from "@/utils";
import React from "react";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}
const Content = ({ children, className }: ContentProps) => {
  return <div className={cn("text-lg text-white", className)}>{children}</div>;
};

export default Content;
