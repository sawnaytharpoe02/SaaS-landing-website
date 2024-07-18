import { cn } from "@/utils";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
const Title = ({ children, className }: TitleProps) => {
  return <div className={cn("font-bold text-xl", className)}>{children}</div>;
};

export default Title;
