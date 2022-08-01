import React from "react";

const Textarea = ({ data }) => {
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

        <textarea
          id={data.id ? data.id : ""}
          name={data.name ? data.name : ""}
          placeholder={data.placeholder ? data.placeholder : ""}
          className={
            data.className
              ? data.className
              : "pl-2 py-2 rounded mt-4 min-h-[96px] text-black"
          }
        />
      </label>
    </div>
  );
};

export default Textarea;
