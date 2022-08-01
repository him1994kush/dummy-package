import * as React from "react";

const Text = ({
  children,
  className = "",
  as: Tag = "span",
  highlightedText = [],
  highlightedColor = "regal-blue",
  onClick = undefined,
  ...rest
}) => {
  const TextDefaultClass = {
    h1: "text-4xl font-semibold font-primary my-5",
    h2: "text-3xl font-semibold font-primary my-5",
    h3: "text-2xl font-semibold font-primary",
    h4: "text-3xl font-semibold font-primary",
    h5: "text-lg font-semibold font-primary",
    p: "text-sm font-regular font-opensans",
    span: "text-sm font-regular font-opensans",
    div: "text-sm font-regular font-opensans",
    li: "text-sm font-regular font-opensans",
    ul: "text-sm font-regular font-opensans",
    ol: "text-sm font-regular font-opensans",
    a: "text-sm font-regular font-opensans cursor-pointer",
  };

  function wrapKeywordWithHTML(keyword) {
    return `<span class="text-${highlightedColor}">  ${keyword} </span>`;
  }

  function transformContent(content, keywords) {
    let temp = content;

    //for loop to replace keyword
    if (keywords !== undefined && keywords !== "No Data Found") {
      keywords.forEach((keyword) => {
        temp = temp.replace(
          new RegExp(keyword, "ig"),
          wrapKeywordWithHTML(keyword)
        );
      });
    }

    return temp;
  }

  if (typeof children !== "string") {
    return (
      <Tag
        onClick={onClick}
        {...rest}
        className={`${className ? className : TextDefaultClass[Tag]}`}
      >
        {children}
      </Tag>
    );
  } else {
    return (
      <Tag
        {...rest}
        onClick={onClick}
        className={`${className ? className : TextDefaultClass[Tag]}`}
        dangerouslySetInnerHTML={{
          __html: highlightedText.length
            ? transformContent(children, highlightedText)
            : children,
        }}
      ></Tag>
    );
  }
};

export default Text;
