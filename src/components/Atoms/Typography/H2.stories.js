import React from "react";
import H2 from "./H2";

export default {
  component: H2,
  title: "Atoms/Typography/H2",
};

const Template = (args) => <H2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Certified for Private and Public Institutions",
  },
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  data: {
    className: "text-4xl text-midBlue text-center font-poppins font-bold",
    title: "Trusted by  95,000+<br>Satisfied Clients Worldwide",
    highlightWords: ["95,000"],
    highlightedColor: "orange",
  },
};

export const Center = Template.bind({});
Center.args = {
  data: {
    className:
      "text-4xl text-midBlue text-center font-poppins w-9/12 sm:w-[70%] pb-16",
    title: "What makes our translation services different?",
  },
};
