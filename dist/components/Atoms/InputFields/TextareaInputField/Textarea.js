"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = function Textarea(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: data.width ? "w-1/2" : ""
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "",
    className: "flex flex-col text-black"
  }, data.labelName ? /*#__PURE__*/_react.default.createElement("div", {
    className: data.labelName.className ? data.labelName.className : "flex mt-4"
  }, data.labelName.name ? data.labelName.name : "", data.labelName.span ? /*#__PURE__*/_react.default.createElement("span", {
    className: "text-red"
  }, "\xA0 *") : "") : "", /*#__PURE__*/_react.default.createElement("textarea", {
    id: data.id ? data.id : "",
    name: data.name ? data.name : "",
    placeholder: data.placeholder ? data.placeholder : "",
    className: data.className ? data.className : "pl-2 py-2 rounded mt-4 min-h-[96px] text-black"
  })));
};

var _default = Textarea;
exports.default = _default;