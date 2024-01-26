import React from "react";
import DropZone from "./DropZone";
import PrimaryButton from "../shared/PrimaryButton";

const UploaderContainer = () => {
  return (
    <div className=" max-w-[596px]   bg-white mx-auto mt-[137px] max-sm:mt-6 rounded-lg p-4">
      <DropZone />
      <PrimaryButton> Upload</PrimaryButton>
    </div>
  );
};

export default UploaderContainer;
