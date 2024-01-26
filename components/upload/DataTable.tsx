"use client";
import { useStore } from "@/lib/store";
import React from "react";

const DataTable = () => {
  const { submitted, columns, values } = useStore();
  if (!submitted) return null;
  return <div>I have Data</div>;
};

export default DataTable;
