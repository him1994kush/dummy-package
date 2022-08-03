"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("../../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function P(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    as: "p",
    highlightedText: data.highlightWords ? data.highlightWords : [],
    highlightedColor: data.highlightedColor ? data.highlightedColor : "",
    className: "".concat(data.className ? data.className : "text-lg sm:text-20px leading-8 text-midBlue font-opensans pb-2")
  }, data.description));
}

var _default = P;
exports.default = _default;