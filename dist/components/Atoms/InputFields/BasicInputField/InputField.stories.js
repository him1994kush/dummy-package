"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputField = _interopRequireDefault(require("./InputField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _InputField.default,
  title: "Atoms/InputField"
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_InputField.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  data: {
    labelName: {
      name: "Message",
      className: "text-white"
    },
    type: "text",
    placeholder: "Name",
    className: "h-8 px-4 mt-4 text-black rounded border-black",
    id: "inputField",
    name: "Name"
  }
};