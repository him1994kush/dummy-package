"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("../../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function H3(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    as: "h3",
    highlightedText: data.highlightWords ? data.highlightWords : [],
    highlightedColor: data.highlightedColor ? data.highlightedColor : "",
    className: "".concat(data.className ? data.className : "text-26px leading-10 text-midBlue font-poppins font-semibold pb-2")
  }, data.title));
}

var _default = H3;
exports.default = _default;