import React from "react";
import Bell from "../icons/Bell";
import Image from "next/image";

const ProfileIcon = () => {
  return (
    <div className=" flex gap-7 items-center">
      <Bell />
      <div className="w-[31px] h-[31px] rounded-full overflow-hidden">
        <Image
          src="/assets/profile.png"
          alt="profile"
          width={100}
          height={100}
          className="object-cover  w-[52px] h-[52px]"
        />
      </div>
    </div>
  );
};

export default ProfileIcon;
