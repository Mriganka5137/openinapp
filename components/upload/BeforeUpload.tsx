import React from "react";
interface Props {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BeforeUpload = ({ handleFileChange }: Props) => {
  return (
    <div className=" flex gap-1">
      <p className="text-color-light-trunks">Drop your Excel sheet here or</p>
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
  );
};

export default BeforeUpload;
