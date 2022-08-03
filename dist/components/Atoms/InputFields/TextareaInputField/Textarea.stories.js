"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Textarea = _interopRequireDefault(require("./Textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _Textarea.default,
  title: "Atoms/Textarea"
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Textarea.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  data: {
    type: "text",
    placeholder: "Message",
    id: "inputField",
    labelName: {
      name: "Message",
      className: "text-white",
      span: true
    }
  }
};