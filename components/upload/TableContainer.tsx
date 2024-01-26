import { useStore } from "@/lib/store";
import React from "react";
import TableRow from "./TableRow";

const TableContainer = () => {
  const { columns, values } = useStore();
  console.log(values);
  return (
    <table className=" w-full bg-color-input-background rounded-lg max-sm:overflow-x-auto border-spacing-y-4 border-separate p-4 max-md:text-[12px]">
      <thead>
        <tr>
          {columns?.map((column, index) => (
            <th
              key={index}
              className=" text-left px-6 py-3 text-xs font-medium text-color-input-text  tracking-wider capitalize "
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className=" gap-5">
        {values?.map((item) => {
          const [id, links, prefix, selectTags, selectCategory] = item;
          const tags = selectTags.split(",");

          return (
            <TableRow
              key={id}
              id={id}
              links={links}
              prefix={prefix}
              tags={tags}
              selectCategory={selectCategory}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TableContainer;
