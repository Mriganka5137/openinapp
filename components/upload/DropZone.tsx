"use client";
import Image from "next/image";
import React, { useState } from "react";
import BeforeUpload from "./BeforeUpload";
import AfterUpload from "./AfterUpload";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const DropZone = () => {
  const [formTypeErrors, setFormTypeErrors] = useState<boolean>(false);
  const { files, setFiles } = useStore();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setFormTypeErrors(false);
    if (!e.dataTransfer.files[0].name.match(/(\.csv|\.xlsx|\.xls)$/i)) {
      setFormTypeErrors(true);
      return;
    }
    setFiles(e.dataTransfer.files);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormTypeErrors(false);
    const allowedFileTypes = ["text/csv", "application/vnd.ms-excel"];
    if (!event.target.files) {
      setFormTypeErrors(true);
      return;
    }

    if (!allowedFileTypes.includes(event.target.files[0].type)) {
      setFormTypeErrors(true);
      return;
    }
    const newFiles = event.target.files;
    setFiles(newFiles);
  };

  console.log(formTypeErrors);

  return (
    <div
      className={cn(
        "w-full h-[258px] border border-dashed  border-color-light-beerus rounded-lg flex justify-center items-center flex-col font-figTree",
        formTypeErrors && "border-color-error border-2"
      )}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Image
        src="/assets/excel.svg"
        width={30}
        height={30}
        alt="excel"
        className="mb-5 w-8 h-8"
      />
      {files ? (
        <AfterUpload files={files} setFiles={setFiles} />
      ) : (
        <BeforeUpload
          errors={formTypeErrors}
          handleFileChange={handleFileChange}
        />
      )}
    </div>
  );
};

export default DropZone;
