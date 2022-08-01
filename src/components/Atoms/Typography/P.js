import React from "react";
import Text from "../../Text";

function P({ data }) {
  return (
    <>
      <Text
        as="p"
        highlightedText={data.highlightWords ? data.highlightWords : []}
        highlightedColor={data.highlightedColor ? data.highlightedColor : ""}
        className={`${
          data.className
            ? data.className
            : "text-lg sm:text-20px leading-8 text-midBlue font-opensans pb-2"
        }`}
      >
        {data.description}
      </Text>
    </>
  );
}
export default P;
