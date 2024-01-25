import React from "react";
import ProfileIcon from "./ProfileIcon";
import LogoWithBrand from "../shared/LogoWithBrand";
import HamburgerMenu from "../icons/HamburgerMenu";

const MobileNav = () => {
  return (
    <nav className=" sm:hidden flex bg-white justify-between px-5 py-7">
      <div className="flex items-center gap-4">
        <HamburgerMenu />
        <LogoWithBrand className="p-0" />
      </div>
      <ProfileIcon />
    </nav>
  );
};

export default MobileNav;
