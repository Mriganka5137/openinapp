import React from "react";
import Socials from "./Socials";
import Github from "../icons/Github";
import Twitter from "../icons/Twitter";
import LinkedIn from "../icons/LinkedIn";
import Discord from "../icons/Discord";

const Footer = () => {
  return (
    <div className="flex justify-center gap-4 lg:hidden mt-10 ">
      <Github className="fill-color-secondary-text w-7 h-7" />
      <Twitter className="fill-color-secondary-text w-7 h-7" />
      <LinkedIn className="fill-color-secondary-text w-7 h-7" />
      <Discord className="fill-color-secondary-text w-7 h-7" />
    </div>
  );
};

export default Footer;
