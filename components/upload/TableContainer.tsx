import { useStore } from "@/lib/store";
import React from "react";

const TableContainer = () => {
  const { columns, values } = useStore();

  return (
    <table className=" w-full bg-color-input-background rounded-lg overflow-x-auto">
      <thead>
        <tr>
          {columns?.map((column, index) => (
            <th
              key={index}
              className=" text-left px-6 py-3 text-xs font-medium text-color-input-text  tracking-wider capitalize border"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default TableContainer;
