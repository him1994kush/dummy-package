import React from "react";
import Text from ".";

export default {
  component: Text,
  title: "Components/Text",
};

const Template = (args) => <Text {...args} />;
export const Default = Template.bind({});

Default.args = {
  children: "Something",
  as: "span",
  className: "",
};
