import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CustomSelect from "../shared/CustomSelect";

interface TableRowProps {
  id: string;
  links: string;
  prefix: string;
  tags: string[];
  selectCategory: string | null;
}

const TableRow = ({
  id,
  links,
  prefix,
  tags,
  selectCategory,
}: TableRowProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleRemoveTag = (tag: string) => {
    const newTags = selectedTags.filter((t) => t !== tag);
    setSelectedTags(newTags);
  };

  return (
    <tr className="">
      <td className=" text-left px-6 py-3 text-[14px] font-normal text-color-light-bulma  tracking-wider capitalize font-figTree mb-5 rounded-l-lg bg-white max-sm:bg-transparent">
        {parseInt(id) < 10 ? `0${id}` : id}
      </td>
      <td className=" text-left px-6 py-3 text-[14px] font-normal text-color-link tracking-wider lowercase underline font-figTree bg-white max-sm:rounded-l-lg line">
        <Link
          href={links}
          as={`http://${links}`}
          target="_blank"
          className="line-clamp-1"
        >
          {links}
        </Link>
      </td>
      <td className=" text-left px-6 py-3 text-[14px] font-normal text-color-light-bulma   tracking-wider lowercase bg-white">
        {prefix}
      </td>
      <td className=" text-left px-6 py-3 text-xs font-normal text-color-input-text  tracking-wider capitalize bg-white">
        <CustomSelect
          options={tags}
          onSelect={(value) => {
            selectedTags.includes(value)
              ? null
              : setSelectedTags([...selectedTags, value]);
          }}
        />
      </td>
      <td className=" text-left px-6 py-3 text-xs font-normal text-color-input-text  tracking-wider capitalize flex gap-2 flex-wrap min-w-[250px] rounded-r-lg bg-white  ">
        {selectedTags.map((tag, index) => (
          <div
            className="bg-color-brand  px-2 py-1 rounded flex gap-1 items-center justify-start "
            key={tag}
          >
            <span className="text-white font-figTree text-[10px] uppercase">
              {tag}
            </span>
            <Image
              src="/assets/cancel.svg"
              width={16}
              height={16}
              alt="cancel"
              className="cursor-pointer"
              onClick={() => handleRemoveTag(tag)}
            />
          </div>
        ))}
      </td>
    </tr>
  );
};

export default TableRow;
