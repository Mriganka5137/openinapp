"use client";
import React from "react";
import LogoWithBrand from "../shared/LogoWithBrand";
import SidebarLinks from "./SidebarLinks";
import { cn } from "@/lib/utils";
import { useStore } from "@/lib/store";
import Cancel from "../icons/sidebar-icons/Cancel";

const MobileSidebar = () => {
  const visible = useStore((state) => state.visible);
  return (
    <div
      className={cn(
        " fixed top-0 bg-white h-screen w-[300px] rounded-r-[20px] rounded-br-[20px] z-50 lg:hidden duration-500 ease-in-out transition-all",
        visible ? " left-0" : "-left-full"
      )}
    >
      <div className=" flex items-center justify-between py-8 px-5">
        <LogoWithBrand className="p-0" />
        <Cancel />
      </div>
      <SidebarLinks />
    </div>
  );
};

export default MobileSidebar;
