import React from "react";
import Textarea from "./Textarea";

export default {
  component: Textarea,
  title: "Atoms/Textarea",
};

const Template = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    type: "text",
    placeholder: "Message",
    id: "inputField",
    labelName: {
      name: "Message",
      className: "text-white",
      span: true,
    },
  },
};
