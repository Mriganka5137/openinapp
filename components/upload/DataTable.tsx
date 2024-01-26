"use client";
import { useStore } from "@/lib/store";
import React from "react";
import TableContainer from "./TableContainer";

const DataTable = () => {
  const { submitted, columns, values } = useStore();
  if (!submitted) return null;
  return (
    <section className=" max-w-[1065px] mx-auto mt-32 pb-20 overflow-x-auto">
      <h2 className=" text-2xl font-figTree font-medium mb-12">Uploads</h2>
      <TableContainer />
    </section>
  );
};

export default DataTable;
