"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  className?: string;
}
const Upload = ({ className }: Props) => {
  const path = usePathname();
  const route = "/upload";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "fill-color-sidebar-icon w-6 h-6",
        className,
        path === route && "fill-color-brand"
      )}
      viewBox="0 0 448 512"
    >
      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z" />
    </svg>
  );
};

export default Upload;
