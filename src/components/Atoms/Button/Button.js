import React from "react";
import Text from "../../Text";

function Button({ data }) {
  return (
    <>
      {data.link ? (
        <Text
          as="a"
          highlightedText={data.highlightWords ? data.highlightWords : []}
          highlightedColor={data.highlightedColor ? data.highlightedColor : ""}
          href={data.link}
          target={data.target ? data.target : "_self"}
          onClick={data.onClick ? data.onClick : undefined}
          className={`${
            data.className
              ? data.className
              : "text-17px text-white text-center font-opensans font-semibold uppercase cursor-pointer bg-yellow hover:bg-yellowHover transition-colors duration-300 px-8 py-4 rounded-full inline-block"
          }`}
        >
          {data.title}
        </Text>
      ) : (
        <Text
          as="button"
          highlightedText={data.highlightWords ? data.highlightWords : []}
          highlightedColor={data.highlightedColor ? data.highlightedColor : ""}
          onClick={data.onClick ? data.onClick : undefined}
          className={`${
            data.className
              ? data.className
              : "text-17px text-white text-center font-opensans font-semibold uppercase cursor-pointer bg-yellow hover:bg-yellowHover transition-colors duration-300 px-8 py-4 rounded-full"
          }`}
        >
          {data.title}
        </Text>
      )}
    </>
  );
}
export default Button;
