import React from "react";
import Link from "./Link";

export default {
  component: Link,
  title: "Atoms/Typography/Link",
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Get Started",
    link: "https://tomedes-base-dev.vercel.app/",
    target: "_blank",
  },
};
