import React from "react";
interface Props {
  children: React.ReactNode;
}

const PrimaryButton = ({ children }: Props) => {
  return (
    <button className=" w-full bg-color-brand rounded-[10px] text-white font-montserrat font-semibold text-base py-2.5 mt-5 hover:-translate-y-[1px] transition-transform duration-200 ease-in-out">
      {children}
    </button>
  );
};

export default PrimaryButton;