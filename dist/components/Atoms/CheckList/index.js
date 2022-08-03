"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _P = _interopRequireDefault(require("../Typography/P"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckList(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: data.className ? data.className : ""
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://tomedes.gumlet.io/assets/quality-policy/icon-check.svg",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement(_P.default, {
    data: data.desc
  }));
}

var _default = CheckList;
exports.default = _default;