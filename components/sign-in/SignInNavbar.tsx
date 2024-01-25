import React from "react";
import Logo from "./Logo";

const SignInNavbar = () => {
  return (
    <nav className="lg:hidden w-full bg-color-brand min-h-20">
      <Logo className="w-7 h-7 " />
    </nav>
  );
};

export default SignInNavbar;
