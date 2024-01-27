import React from "react";
interface Props {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: boolean;
}

const BeforeUpload = ({ handleFileChange, errors }: Props) => {
  return (
    <div className=" flex gap-1">
      {errors && (
        <p className="text-color-error ">Please upload a .csv file only</p>
      )}
      {!errors && (
        <p className="text-color-light-trunks">
          <span className="max-sm:hidden">Drop your Excel sheet here or</span>
          <span className="sm:hidden"> Upload your Excel sheet </span>
        </p>
      )}
      <input
        id="file"
        type="file"
        onChange={handleFileChange}
        multiple
        accept=".csv"
        placeholder="browse"
        className="hidden"
      />
      <label htmlFor="file" className="text-color-brand cursor-pointer">
        <span className="max-sm:hidden">browse</span>
        <span className="sm:hidden">here</span>
      </label>
    </div>
  );
};

export default BeforeUpload;
