import React from "react";
import Logo from "./Logo";

import Socials from "./Socials";

const Hero = () => {
  return (
    <section className=" w-1/3 h-full  max-lg:hidden justify-between flex flex-col p-16 max-lg:p-8">
      <Logo className="" />
      <h1 className="text-white font-montserrat text-7xl font-bold  ml-[132px] tracking-wide max-lg:ml-[50px]">
        BASE
      </h1>
      <Socials />
    </section>
  );
};

export default Hero;
