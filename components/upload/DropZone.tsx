"use client";
import Image from "next/image";
import React, { useState } from "react";
import BeforeUpload from "./BeforeUpload";
import AfterUpload from "./AfterUpload";
import { useStore } from "@/lib/store";

const DropZone = () => {
  const { files, setFiles } = useStore();
  // const [files, setFiles] = useState<FileList | null>(null);
  // const [isSubmitting, setIsSubmitting] = useState(false);
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
      className=" w-full h-[258px] border border-dashed  border-color-light-beerus rounded-lg flex justify-center items-center flex-col font-figTree"
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
        <AfterUpload files={files} setFiles={setFiles} />
      ) : (
        <BeforeUpload handleFileChange={handleFileChange} />
      )}
    </div>
  );
};

export default DropZone;
