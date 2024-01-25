import React from "react";
import Image from "next/image";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <section
      className="flex-shrink-0
     w-[218px] bg-white h-screen max-sm:hidden"
    >
      <div className=" flex items-center gap-4 p-12 ">
        <Image
          src="/assets/SubtractLogo.svg"
          width={42}
          height={42}
          alt="logo"
        />
        <p className="font-nunito text-2xl font-semibold">Base</p>
      </div>
      <SidebarLinks />
    </section>
  );
};

export default Sidebar;
