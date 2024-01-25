"use client";
import { sidebarLinks } from "@/lib/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarLinks = () => {
  const path = usePathname();
  return (
    <div className=" flex flex-col ">
      {sidebarLinks.map((link, index) => (
        <Link
          href={link.route}
          key={index}
          className={cn(
            "flex items-center gap-[14px] p-4 hover:bg-gray-100 cursor-pointer pl-8",
            path === link.route &&
              "bg-gradient-to-r from-violet-300/70 from-1%  via-white via-30% to-transparent to-100% hover:bg-inherit"
          )}
        >
          {link.component}
          <p
            className={cn(
              "font-nunito text-base font-medium text-color-sidebar-icon ",
              path === link.route && "text-color-brand"
            )}
          >
            {link.label}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinks;
