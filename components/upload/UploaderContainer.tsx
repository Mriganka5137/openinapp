"use client";
import React, { useState } from "react";
import DropZone from "./DropZone";
import { CsvData, useStore } from "@/lib/store";
import Papa from "papaparse";

const UploaderContainer = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { files, setData, setColumns, setValues } = useStore();
  console.log(files);
  const handleClick = () => {
    if (!files || files.length === 0) {
      // Handle the case where no file is selected
      return;
    }

    Papa.parse(files[0], {
      header: true,
      dynamicTyping: true,
      complete: function (results) {
        setSubmitting(true);

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
        setTimeout(() => {
          setSubmitting(false);
        }, 2000);
      },
    });
  };

  return (
    <div className=" max-w-[596px]   bg-white mx-auto mt-[137px] max-sm:mt-6 rounded-lg p-4">
      <DropZone />
      <button
        disabled={submitting}
        onClick={handleClick}
        className=" w-full bg-color-brand rounded-[10px] text-white font-montserrat font-semibold text-base py-2.5 mt-5"
      >
        {submitting ? (
          <span className="animate-spin">
            Uploading...
          </span> /* Add spin animation */
        ) : (
          <span>Upload</span>
        )}
      </button>
    </div>
  );
};

export default UploaderContainer;
