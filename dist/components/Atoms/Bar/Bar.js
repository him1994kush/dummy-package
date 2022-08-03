"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Bar(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(data.className ? data.className : "border-4 border-yellow w-16 my-20")
  });
}

var _default = Bar;
exports.default = _default;