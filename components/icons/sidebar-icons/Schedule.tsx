"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  className?: string;
}
const Schedule = ({ className }: Props) => {
  const path = usePathname();
  const route = "/schedule";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "fill-color-sidebar-icon-secondary w-6 h-6",
        className,
        path === route && "fill-color-brand"
      )}
      viewBox="0 0 24 27"
    >
      <g opacity="0.4">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.81 2.47565H16.191C19.28 2.47565 21 4.43586 21 7.79464V19.1705C21 22.5843 19.28 24.5005 16.191 24.5005H7.81C4.77 24.5005 3 22.5843 3 19.1705V7.79464C3 4.43586 4.77 2.47565 7.81 2.47565ZM8.07999 7.60743V7.59642H11.069C11.5 7.59642 11.85 7.98185 11.85 8.45429C11.85 8.93993 11.5 9.32537 11.069 9.32537H8.07999C7.64899 9.32537 7.29999 8.93994 7.29999 8.4664C7.29999 7.99287 7.64899 7.60743 8.07999 7.60743ZM8.07999 14.303H15.92C16.35 14.303 16.7 13.9176 16.7 13.444C16.7 12.9705 16.35 12.5839 15.92 12.5839H8.07999C7.64899 12.5839 7.29999 12.9705 7.29999 13.444C7.29999 13.9176 7.64899 14.303 8.07999 14.303ZM8.07999 19.3357H15.92C16.319 19.2916 16.62 18.9161 16.62 18.4767C16.62 18.0252 16.319 17.6508 15.92 17.6067H8.07999C7.77999 17.5737 7.48999 17.7278 7.32999 18.0142C7.16999 18.2895 7.16999 18.6529 7.32999 18.9392C7.48999 19.2145 7.77999 19.3797 8.07999 19.3357Z"
        />
      </g>
    </svg>
  );
};

export default Schedule;
