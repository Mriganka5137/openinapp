import React from "react";
import Logo from "./Logo";

import Socials from "./Socials";

const Hero = () => {
  return (
    <section className=" hero w-1/2 h-full bg-color-brand max-md:hidden justify-between flex flex-col p-16">
      <Logo className="" />
      <h1 className="text-white font-montserrat text-7xl font-bold  ml-[132px] tracking-wide">
        BASE
      </h1>
      <Socials />
    </section>
  );
};

export default Hero;
