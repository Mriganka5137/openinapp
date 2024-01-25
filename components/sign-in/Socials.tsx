import React from "react";
import Discord from "../icons/Discord";
import Github from "../icons/Github";
import LinkedIn from "../icons/LinkedIn";
import Twitter from "../icons/Twitter";

const Socials = () => {
  return (
    <div className=" flex justify-between w-80 ml-20">
      <Github className="w-11 h-11  hover:-translate-y-1 transition-all ease-in-out" />
      <Twitter className="w-11 h-11 hover:-translate-y-1 transition-all ease-in-out" />
      <LinkedIn className="w-12 h-12  hover:-translate-y-1 transition-all ease-in-out" />
      <Discord className="w-12 h-12 hover:-translate-y-1 transition-all ease-in-out" />
    </div>
  );
};

export default Socials;
