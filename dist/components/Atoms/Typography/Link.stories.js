"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("./Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _Link.default,
  title: "Atoms/Typography/Link"
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Link.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  data: {
    title: "Get Started",
    link: "https://tomedes-base-dev.vercel.app/",
    target: "_blank"
  }
};