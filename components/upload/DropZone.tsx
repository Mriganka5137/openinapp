"use client";
import Image from "next/image";
import React, { useState } from "react";

const DropZone = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // If file is not csv, xlsx or xls, show error
    if (!e.dataTransfer.files[0].name.match(/(\.csv|\.xlsx|\.xls)$/i)) {
      console.log("File type not supported");
      return;
    }
    console.log(e.dataTransfer.files);
    setFiles(e.dataTransfer.files);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files;
    setFiles(newFiles);
  };

  return (
    <div
      className=" w-full border border-dashed h-full border-color-light-beerus rounded-lg flex justify-center items-center flex-col font-figTree"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Image
        src="/assets/excel.svg"
        width={30}
        height={30}
        alt="excel"
        className="mb-5"
      />
      {files ? (
        <div className="flex flex-col  items-center gap-4">
          <p className="text-base font-normal text-color-light-trunks text-center font-figTree">
            {files[0].name}
          </p>
          <button
            onClick={() => setFiles(null)}
            className="text-[14px] font-figTree text-center text-color-error"
          >
            Remove
          </button>
        </div>
      ) : (
        <div className=" flex gap-1">
          <p className="text-color-light-trunks">
            Drop your Excel sheet here or
          </p>
          <input
            id="file"
            type="file"
            onChange={handleFileChange}
            multiple
            accept=".xlsx, .xls, .csv"
            placeholder="browse"
            className="hidden"
          />
          <label htmlFor="file" className="text-color-brand cursor-pointer">
            browse
          </label>
        </div>
      )}
    </div>
  );
};

export default DropZone;
