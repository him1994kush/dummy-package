import React from "react";
import P from "./P";

export default {
  component: P,
  title: "Atoms/Typography/P",
};

const Template = (args) => <P {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    description:
      "At Tomedes, we've made it our mission to provide professional translation services that leave a lasting impression. Our human translators are up for the challenge, whichever translation you need, standard document or certified. We speak your language to convey your meaning to the world easily.",
  },
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  data: {
    className: "text-lg leading-7 text-midBlue font-opensans",
    description:
      "Legal translation is a highly specialized field. Our professional legal translators are adept in the various fields of law. We translate affidavits, patents, contracts, and other legal documents. If you're in need of legal translation, our legal experts are up for the task. Learn more today.",
    highlightWords: [
      "We translate affidavits, patents, contracts, and other legal documents.",
    ],
    highlightedColor: "orange",
  },
};

export const Style2 = Template.bind({});
Style2.args = {
  data: {
    className:
      "text-26px sm:text-4xl text-midBlue text-center font-secondary font-bold",
    description:
      "Language translation services allow you to be understood properly and connect strongly with your target audience.",
  },
};
