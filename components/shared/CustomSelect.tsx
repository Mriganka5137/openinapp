"use client";
import { useStore } from "@/lib/store";
import Image from "next/image";
import React, { useState } from "react";

type SelectProps = {
  options: string[]; // Array of option objects
  onSelect?: (selectedOption: string) => void; // Optional callback for selection
};

const CustomSelect: React.FC<SelectProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect && onSelect(option);
  };

  return (
    <div className="relative inline-block w-[150px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-full px-6 py-2 text-left bg-white rounded-lg cursor-pointer border border-color-select-border focus:outline-none  text-color-light-bulma flex justify-between items-center max-h-8  text-[14px] ${
          isOpen ? "border-b" : ""
        }`}
      >
        {selectedOption ? selectedOption : "Select Tags"}
        {isOpen ? (
          <Image
            src="/assets/down-arrow.svg"
            width={16}
            height={16}
            alt="down-arrow"
            className=" rotate-180 w-4 h-4"
          />
        ) : (
          <Image
            src="/assets/down-arrow.svg"
            width={16}
            height={16}
            alt="down-arrow "
            className="h-4 w-4"
          />
        )}
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-1 origin-top-right rounded-lg shadow-md bg-white z-50 w-[150px] p-2 max-h-52 overflow-auto invisible-scrollbar">
          {options.map((option) => (
            <li
              key={option}
              className={`px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer rounded-lg `}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
