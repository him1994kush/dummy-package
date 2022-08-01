import React from "react";
import CheckList from ".";

export default {
  component: CheckList,
  title: "Atoms/CheckList",
};

const Template = (args) => <CheckList {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    className: "flex items-center space-x-4",
    desc: {
      description: "Legal",
    },
  },
};
