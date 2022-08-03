"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Style2 = exports.Highlighted = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _P = _interopRequireDefault(require("./P"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _P.default,
  title: "Atoms/Typography/P"
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_P.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  data: {
    description: "At Tomedes, we've made it our mission to provide professional translation services that leave a lasting impression. Our human translators are up for the challenge, whichever translation you need, standard document or certified. We speak your language to convey your meaning to the world easily."
  }
};
var Highlighted = Template.bind({});
exports.Highlighted = Highlighted;
Highlighted.args = {
  data: {
    className: "text-lg leading-7 text-midBlue font-opensans",
    description: "Legal translation is a highly specialized field. Our professional legal translators are adept in the various fields of law. We translate affidavits, patents, contracts, and other legal documents. If you're in need of legal translation, our legal experts are up for the task. Learn more today.",
    highlightWords: ["We translate affidavits, patents, contracts, and other legal documents."],
    highlightedColor: "orange"
  }
};
var Style2 = Template.bind({});
exports.Style2 = Style2;
Style2.args = {
  data: {
    className: "text-26px sm:text-4xl text-midBlue text-center font-secondary font-bold",
    description: "Language translation services allow you to be understood properly and connect strongly with your target audience."
  }
};