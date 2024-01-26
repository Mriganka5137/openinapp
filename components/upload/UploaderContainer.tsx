"use client";
import React, { useState } from "react";
import DropZone from "./DropZone";
import PrimaryButton from "../shared/PrimaryButton";
import { useStore } from "@/lib/store";
import Papa from "papaparse";
export interface CsvData {
  // Define the structure of your CSV data
  id: number;
  links: string;
  prefix: string;
  selectTags: string;
  selectedTags: string;
}

const UploaderContainer = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [data, setData] = useState<CsvData[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [values, setValues] = useState<string[][]>([]);
  const { files } = useStore();
  const handleClick = () => {
    setSubmitting(true);

    if (!files || files.length === 0) {
      // Handle the case where no file is selected
      return;
    }

    Papa.parse(files[0], {
      header: true,
      dynamicTyping: true,
      complete: function (results) {
        if (!results || !results.data || results.data.length === 0) {
          // Handle parsing errors or empty data
          return;
        }

        const firstItem = results.data[0];
        const columnArray = Object.keys(firstItem!);
        const valueArray = results.data.map((item) => Object.values(item!));

        setData(results.data as CsvData[]);
        setColumns(columnArray);
        setValues(valueArray);
      },
    });

    setSubmitting(false);
  };
  console.log(data);
  console.log(columns);
  console.log(values);

  return (
    <div className=" max-w-[596px]   bg-white mx-auto mt-[137px] max-sm:mt-6 rounded-lg p-4">
      <DropZone />
      <PrimaryButton handleClick={handleClick}> Upload</PrimaryButton>
    </div>
  );
};

export default UploaderContainer;
