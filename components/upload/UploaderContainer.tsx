"use client";
import React, { useState } from "react";
import DropZone from "./DropZone";
import { CsvData, useStore } from "@/lib/store";
import Papa from "papaparse";
import { cn } from "@/lib/utils";
import Image from "next/image";

const UploaderContainer = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { files, setData, setColumns, setValues, submitted, setSubmitted } =
    useStore();
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
          setSubmitted(true);
        }, 1000);
      },
    });
  };

  return (
    <div className=" max-w-[596px]   bg-white mx-auto mt-[137px] max-sm:mt-6 rounded-lg p-4">
      <DropZone />
      <button
        disabled={submitted}
        onClick={handleClick}
        className={cn(
          " w-full bg-color-brand rounded-[10px] text-white font-montserrat font-semibold text-base py-2.5 mt-5 flex justify-center items-center",
          submitted && "opacity-40"
        )}
      >
        {submitting ? (
          <div className="w-5 h-5 border-2 border-white rounded-full loader"></div>
        ) : (
          <span className=" text-[14px] font-figTree font-light">
            <Image
              src="/assets/upload.svg"
              width={20}
              height={20}
              alt="upload"
              className="inline-block mr-2"
            />
            Upload
          </span>
        )}
      </button>
    </div>
  );
};

export default UploaderContainer;
