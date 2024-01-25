import { useStore } from "@/lib/store";
import React from "react";

const Cancel = () => {
  const setVisible = useStore((state) => state.setVisible);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      onClick={() => setVisible(false)}
    >
      <path
        d="M25.3424 14.6568L19.6855 20.3137M19.6855 20.3137L14.0287 14.6568M19.6855 20.3137L14.0287 25.9706M19.6855 20.3137L25.3424 25.9706"
        stroke="#999CA0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cancel;
