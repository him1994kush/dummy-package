import React from "react";
import Text from "../../Text";

function Span({ data }) {
  return (
    <>
      <Text
        as="span"
        highlightedText={data.highlightWords ? data.highlightWords : []}
        highlightedColor={data.highlightedColor ? data.highlightedColor : ""}
        className={`${
          data.className
            ? data.className
            : "text-3xl lg:text-5xl text-midBlue font-poppins font-extrabold pb-2"
        }`}
      >
        {data.text}
      </Text>
    </>
  );
}
export default Span;
