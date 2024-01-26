"use client";
import { useStore } from "@/lib/store";
import React from "react";

const DataTable = () => {
  const files = useStore((state) => state.files);
  return <>{files && <p>Files</p>}</>;
};

export default DataTable;
