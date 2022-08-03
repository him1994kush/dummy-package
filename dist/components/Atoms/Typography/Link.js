"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("../../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Link(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    as: "a",
    highlightedText: data.highlightWords ? data.highlightWords : [],
    highlightedColor: data.highlightedColor ? data.highlightedColor : "",
    className: "".concat(data.className ? data.className : "text-22px text-midBlue font-secondary font-bold underline hover:text-orange transition-all duration-300"),
    href: data.link,
    target: data.target ? data.target : "_self"
  }, data.title));
}

var _default = Link;
exports.default = _default;