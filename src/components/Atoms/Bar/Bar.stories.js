import React from "react";
import Bar from "./Bar";

export default {
  component: Bar,
  title: "Atoms/Bar",
};

const Template = (args) => <Bar {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Legal Translation",
  },
};
