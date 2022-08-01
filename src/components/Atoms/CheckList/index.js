import React from "react";
import P from "../Typography/P";

function CheckList({ data }) {
  return (
    <div className={data.className ? data.className : ""}>
      <img
        src="https://tomedes.gumlet.io/assets/quality-policy/icon-check.svg"
        alt=""
      />
      <P data={data.desc} />
    </div>
  );
}

export default CheckList;
