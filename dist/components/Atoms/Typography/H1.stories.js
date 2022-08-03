"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _H = _interopRequireDefault(require("./H1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _H.default,
  title: "Atoms/Typography/H1"
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_H.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  data: {
    title: "Professional Translation Services On a Global Scale"
  }
};