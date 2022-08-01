import React from "react";
import Span from "./Span";

export default {
  component: Span,
  title: "Atoms/Span",
};

const Template = (args) => <Span {...args} />;
export const Default = Template.bind({});

Default.args = {
  data: {
    text: "Professional Translation Services On a Global Scale",
  },
};
