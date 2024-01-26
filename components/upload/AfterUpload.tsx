import React from "react";
interface Props {
  files: FileList;
  setFiles: (files: FileList | null) => void;
}

const AfterUpload = ({ files, setFiles }: Props) => {
  return (
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
  );
};

export default AfterUpload;
