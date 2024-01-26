import Header from "@/components/upload/Header";
import MobileNav from "@/components/upload/MobileNav";
import MobileSidebar from "@/components/upload/MobileSidebar";
import ProfileIcon from "@/components/upload/ProfileIcon";
import Sidebar from "@/components/upload/Sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <section className="flex overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full bg-color-upload-background h-screen">
        <div className=" w-full flex justify-between px-[30px] pt-12 max-lg:hidden">
          <Header />
          <ProfileIcon />
        </div>
        <MobileNav />
        <MobileSidebar />
        {children}
      </div>
    </section>
  );
};

export default layout;
