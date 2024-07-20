import { cn } from "@/utils";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
const Title = ({ children, className }: TitleProps) => {
  return <div className={cn("font-bold text-[32px] sm:text-xl text-center", className)}>{children}</div>;
};

export default Title;
