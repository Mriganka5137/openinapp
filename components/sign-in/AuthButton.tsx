import Image from "next/image";
import React from "react";
interface AuthButtonProps {
  iconLink: string;
  children: React.ReactNode;
}

const AuthButton = ({ iconLink, children }: AuthButtonProps) => {
  return (
    <button className=" flex bg-white items-center rounded-lg px-5 py-2 gap-2.5 max-sm:px-3 max-sm:gap-1.5">
      <Image
        src={iconLink}
        width={100}
        height={100}
        alt="icon"
        className=" w-4 h-4 "
      />{" "}
      <span className="text-color-secondary-text text-xs font-light tracking-wide max-sm:text-[10px] ">
        {children}
      </span>
    </button>
  );
};

export default AuthButton;
