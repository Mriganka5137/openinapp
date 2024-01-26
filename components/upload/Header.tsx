"use client";
import { sidebarLinks } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  const path = usePathname();

  const header = sidebarLinks.find((link) => link.route === path)?.header;

  return (
    <h3 className={cn("font-figTree text-2xl font-semibold", className)}>
      {header}
    </h3>
  );
};

export default Header;
