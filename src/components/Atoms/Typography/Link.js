import React from "react";
import Text from "../../Text";

function Link({ data }) {
  return (
    <>
      <Text
        as="a"
        highlightedText={data.highlightWords ? data.highlightWords : []}
        highlightedColor={data.highlightedColor ? data.highlightedColor : ""}
        className={`${
          data.className
            ? data.className
            : "text-22px text-midBlue font-secondary font-bold underline hover:text-orange transition-all duration-300"
        }`}
        href={data.link}
        target={data.target ? data.target : "_self"}
      >
        {data.title}
      </Text>
    </>
  );
}
export default Link;
