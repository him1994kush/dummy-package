"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _.default,
  title: "Atoms/CheckList"
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  data: {
    className: "flex items-center space-x-4",
    desc: {
      description: "Legal"
    }
  }
};