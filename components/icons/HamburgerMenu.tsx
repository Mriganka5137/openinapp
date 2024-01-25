"use client";
import { cn } from "@/lib/utils";
import React from "react";
import LogoWithBrand from "../shared/LogoWithBrand";
import SidebarLinks from "../upload/SidebarLinks";
import { useStore } from "@/lib/store";
interface Props {
  className?: string;
}

const HamburgerMenu = ({ className }: Props) => {
  const setVisible = useStore((state) => state.setVisible);
  return (
    <svg
      viewBox="0 0 18 14"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "w-4 h-3 fill-color-light-bulma cursor-pointer ",
        className
      )}
      onClick={() => {
        setVisible(true);
      }}
    >
      <path
        id="burger-regular"
        d="M1 1H17M1 13H17M1 7H17"
        stroke="#231F20"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HamburgerMenu;
