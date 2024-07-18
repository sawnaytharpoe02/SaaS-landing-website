import { cn } from "@/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn("max-w-[120rem] mx-auto px-4 sm:px-8", className)}>{children}</div>;
};

export default Container;
