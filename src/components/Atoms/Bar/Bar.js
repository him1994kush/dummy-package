import React from "react";

function Bar({ data }) {
  return (
    <div
      className={`${
        data.className ? data.className : "border-4 border-yellow w-16 my-20"
      }`}
    ></div>
  );
}

export default Bar;
