import React from "react";

const InputField = ({ data }) => {
  return (
    <div className={data.width ? "w-1/2" : ""}>
      <label htmlFor="" className="flex flex-col text-black">
        {data.labelName ? (
          <div
            className={
              data.labelName.className ? data.labelName.className : "flex mt-4"
            }
          >
            {data.labelName.name ? data.labelName.name : ""}
            {data.labelName.span ? (
              <span className="text-red">&nbsp; *</span>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        <input
          type={data.type ? data.type : ""}
          placeholder={data.placeholder ? data.placeholder : ""}
          className={
            data.className ? data.className : "h-8 px-4 mt-4 text-black"
          }
          id={data.id ? data.id : ""}
          name={data.name ? data.name : ""}
        />
      </label>
    </div>
  );
};

export default InputField;
