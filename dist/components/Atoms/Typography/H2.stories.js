"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Highlighted = exports.Default = exports.Center = void 0;

var _react = _interopRequireDefault(require("react"));

var _H = _interopRequireDefault(require("./H2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _H.default,
  title: "Atoms/Typography/H2"
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_H.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  data: {
    title: "Certified for Private and Public Institutions"
  }
};
var Highlighted = Template.bind({});
exports.Highlighted = Highlighted;
Highlighted.args = {
  data: {
    className: "text-4xl text-midBlue text-center font-poppins font-bold",
    title: "Trusted by  95,000+<br>Satisfied Clients Worldwide",
    highlightWords: ["95,000"],
    highlightedColor: "orange"
  }
};
var Center = Template.bind({});
exports.Center = Center;
Center.args = {
  data: {
    className: "text-4xl text-midBlue text-center font-poppins w-9/12 sm:w-[70%] pb-16",
    title: "What makes our translation services different?"
  }
};