import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
interface Props {
  className?: string;
}
const Logo = ({ className }: Props) => {
  return (
    <Link
      href="/"
      className={cn(
        " w-[80px] h-[80px] bg-color-logo rounded-full flex justify-center items-center",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 87 30"
        fill="none"
        stroke="#605BFF"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.02979 11.0531L32.0871 25.7478L58.8048 3.70578L84.8545 17.0646"
          strokeWidth="6"
        />
      </svg>
    </Link>
  );
};

export default Logo;
