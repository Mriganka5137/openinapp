import React from "react";
import Logo from "./Logo";

const SignInNavbar = () => {
  return (
    <nav
      className="lg:hidden w-full bg-color-brand min-h-20 flex 
      justify-start items-center px-4 py-2 gap-3
    "
    >
      <Logo className="w-7 h-7 " />
      <p className="text-[20px] text-white font-nunito font-semibold">Base</p>
    </nav>
  );
};

export default SignInNavbar;
