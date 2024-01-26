"use client";
import { sidebarLinks } from "@/lib/constant";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();

  const header = sidebarLinks.find((link) => link.route === path)?.header;

  return <h3 className="font-figTree text-2xl font-semibold">{header}</h3>;
};

export default Header;
