"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Rectangle = exports.Link = exports.Light = exports.Default = exports.Dark = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Atoms/Buttons/Button",
  component: _Button.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  data: {
    title: "Translate now"
  }
};
var Dark = Template.bind({});
exports.Dark = Dark;
Dark.args = {
  data: {
    title: "Contact us",
    className: "text-lg text-white text-center font-opensans font-semibold uppercase cursor-pointer bg-blue hover:bg-prussian-blue-light transition-colors duration-300 px-8 py-4 rounded-full"
  }
};
var Light = Template.bind({});
exports.Light = Light;
Light.args = {
  data: {
    title: "Contact us",
    className: "text-lg text-darkBlue text-center font-opensans font-semibold uppercase cursor-pointer bg-white hover:bg-yellow hover:text-white transition-colors duration-300 px-8 py-4 rounded-full"
  }
};
var Link = Template.bind({});
exports.Link = Link;
Link.args = {
  data: {
    title: "Translate now",
    link: "https://www.google.com/"
  }
};
var Rectangle = Template.bind({});
exports.Rectangle = Rectangle;
Rectangle.args = {
  data: {
    title: "Submit",
    className: "text-lg text-white text-center font-opensans font-semibold uppercase cursor-pointer bg-yellow hover:bg-yellowHover transition-colors duration-300 px-9 py-3"
  }
};