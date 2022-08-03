"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Span = _interopRequireDefault(require("./Span"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _Span.default,
  title: "Atoms/Span"
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Span.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  data: {
    text: "Professional Translation Services On a Global Scale"
  }
};