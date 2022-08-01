import React from "react";
import Text from "../../Text";

function H3({ data }) {
  return (
    <>
      <Text
        as="h3"
        highlightedText={data.highlightWords ? data.highlightWords : []}
        highlightedColor={data.highlightedColor ? data.highlightedColor : ""}
        className={`${
          data.className
            ? data.className
            : "text-26px leading-10 text-midBlue font-poppins font-semibold pb-2"
        }`}
      >
        {data.title}
      </Text>
    </>
  );
}
export default H3;
