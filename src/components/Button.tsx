import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils";
import Link from "next/link";

const buttonVariants = cva(
  "rounded-md inline-flex items-center justify-center font-inter",
  {
    variants: {
      variant: {
        primary: "bg-white text-sm text-black",
        secondary: "",
      },
      size: {
        xs: "",
        sm: "",
        default: "px-2 py-1.5",
        lg: 'px-3 py-2'
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
};
type ButtonProps = ButtonBaseProps &
  (ButtonAsButtonProps | ButtonAsAnchorProps);

const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  const classes = cn(buttonVariants({ variant, size, className }));

  if ("href" in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
