"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Style1 = exports.Highlighted = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _H = _interopRequireDefault(require("./H3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _H.default,
  title: "Atoms/Typography/H3"
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_H.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  data: {
    title: "Legal Translation"
  }
};
var Highlighted = Template.bind({});
exports.Highlighted = Highlighted;
Highlighted.args = {
  data: {
    title: "Make Meaningful Cultural<br>Connections",
    highlightWords: ["Connections"],
    highlightedColor: "orange"
  }
};
var Style1 = Template.bind({});
exports.Style1 = Style1;
Style1.args = {
  data: {
    className: "text-20px sm:text-2xl text-midBlue font-secondary font-semibold lg:pl-8 classImp text-center lg:text-left",
    title: "Customer Satisfaction Rate"
  }
};