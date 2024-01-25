import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface Props {
  className?: string;
}

const LogoWithBrand = ({ className }: Props) => {
  return (
    <div className={cn(" flex items-center gap-4 p-12", className)}>
      <Image src="/assets/SubtractLogo.svg" width={42} height={42} alt="logo" />
      <p className="font-nunito text-2xl font-semibold">Base</p>
    </div>
  );
};

export default LogoWithBrand;
