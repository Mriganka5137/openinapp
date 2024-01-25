import Sidebar from "@/components/upload/Sidebar";
import React from "react";
interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <section className="flex">
      <Sidebar />
      {children}
    </section>
  );
};

export default layout;
