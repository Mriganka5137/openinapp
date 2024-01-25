import React from "react";
import Image from "next/image";
import SidebarLinks from "./SidebarLinks";
import LogoWithBrand from "../shared/LogoWithBrand";

const Sidebar = () => {
  return (
    <section
      className="flex-shrink-0
     w-[218px] bg-white h-screen max-sm:hidden"
    >
      <LogoWithBrand />
      <SidebarLinks />
    </section>
  );
};

export default Sidebar;
