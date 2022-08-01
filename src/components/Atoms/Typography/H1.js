import React from "react";
import Text from "../../Text";

function H1({ data }) {
  return (
    <>
      <Text
        as="h1"
        highlightedText={data.highlightWords ? data.highlightWords : []}
        highlightedColor={data.highlightedColor ? data.highlightedColor : ""}
        className={`${
          data.className
            ? data.className
            : "text-3xl leading-55px lg:text-5xl lg:leading-70px text-midBlue font-poppins font-extrabold pb-2"
        }`}
      >
        {data.title}
      </Text>
    </>
  );
}
export default H1;
