import React from "react";
import InputField from "./InputField";

export default {
  component: InputField,
  title: "Atoms/InputField",
};

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    labelName: {
      name: "Message",
      className: "text-white",
    },
    type: "text",
    placeholder: "Name",
    className: "h-8 px-4 mt-4 text-black rounded border-black",
    id: "inputField",
    name: "Name",
  },
};
