import React from "react";
import Button from "./Button";

export default {
  title: "Atoms/Buttons/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Translate now",
  },
};

export const Dark = Template.bind({});
Dark.args = {
  data: {
    title: "Contact us",
    className:
      "text-lg text-white text-center font-opensans font-semibold uppercase cursor-pointer bg-blue hover:bg-prussian-blue-light transition-colors duration-300 px-8 py-4 rounded-full",
  },
};

export const Light = Template.bind({});
Light.args = {
  data: {
    title: "Contact us",
    className:
      "text-lg text-darkBlue text-center font-opensans font-semibold uppercase cursor-pointer bg-white hover:bg-yellow hover:text-white transition-colors duration-300 px-8 py-4 rounded-full",
  },
};

export const Link = Template.bind({});
Link.args = {
  data: {
    title: "Translate now",
    link: "https://www.google.com/",
  },
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  data: {
    title: "Submit",
    className:
      "text-lg text-white text-center font-opensans font-semibold uppercase cursor-pointer bg-yellow hover:bg-yellowHover transition-colors duration-300 px-9 py-3",
  },
};
