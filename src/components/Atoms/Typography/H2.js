import React from "react";
import Text from "../../Text";

function H2({ data }) {
  return (
    <>
      <Text
        as="h2"
        highlightedText={data.highlightWords ? data.highlightWords : []}
        highlightedColor={data.highlightedColor ? data.highlightedColor : ""}
        className={`${
          data.className
            ? data.className
            : "text-4xl text-midBlue font-poppins font-bold pb-2"
        }`}
      >
        {data.title}
      </Text>
    </>
  );
}
export default H2;
