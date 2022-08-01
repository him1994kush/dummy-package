import React from "react";
import H3 from "./H3";

export default {
  component: H3,
  title: "Atoms/Typography/H3",
};

const Template = (args) => <H3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Legal Translation",
  },
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  data: {
    title: "Make Meaningful Cultural<br>Connections",
    highlightWords: ["Connections"],
    highlightedColor: "orange",
  },
};

export const Style1 = Template.bind({});
Style1.args = {
  data: {
    className:
      "text-20px sm:text-2xl text-midBlue font-secondary font-semibold lg:pl-8 classImp text-center lg:text-left",
    title: "Customer Satisfaction Rate",
  },
};
