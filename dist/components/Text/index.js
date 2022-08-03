"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _excluded = ["children", "className", "as", "highlightedText", "highlightedColor", "onClick"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Text = function Text(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$as = _ref.as,
      Tag = _ref$as === void 0 ? "span" : _ref$as,
      _ref$highlightedText = _ref.highlightedText,
      highlightedText = _ref$highlightedText === void 0 ? [] : _ref$highlightedText,
      _ref$highlightedColor = _ref.highlightedColor,
      highlightedColor = _ref$highlightedColor === void 0 ? "regal-blue" : _ref$highlightedColor,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? undefined : _ref$onClick,
      rest = _objectWithoutProperties(_ref, _excluded);

  var TextDefaultClass = {
    h1: "text-4xl font-semibold font-primary my-5",
    h2: "text-3xl font-semibold font-primary my-5",
    h3: "text-2xl font-semibold font-primary",
    h4: "text-3xl font-semibold font-primary",
    h5: "text-lg font-semibold font-primary",
    p: "text-sm font-regular font-opensans",
    span: "text-sm font-regular font-opensans",
    div: "text-sm font-regular font-opensans",
    li: "text-sm font-regular font-opensans",
    ul: "text-sm font-regular font-opensans",
    ol: "text-sm font-regular font-opensans",
    a: "text-sm font-regular font-opensans cursor-pointer"
  };

  function wrapKeywordWithHTML(keyword) {
    return "<span class=\"text-".concat(highlightedColor, "\">  ").concat(keyword, " </span>");
  }

  function transformContent(content, keywords) {
    var temp = content; //for loop to replace keyword

    if (keywords !== undefined && keywords !== "No Data Found") {
      keywords.forEach(function (keyword) {
        temp = temp.replace(new RegExp(keyword, "ig"), wrapKeywordWithHTML(keyword));
      });
    }

    return temp;
  }

  if (typeof children !== "string") {
    return /*#__PURE__*/React.createElement(Tag, _extends({
      onClick: onClick
    }, rest, {
      className: "".concat(className ? className : TextDefaultClass[Tag])
    }), children);
  } else {
    return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
      onClick: onClick,
      className: "".concat(className ? className : TextDefaultClass[Tag]),
      dangerouslySetInnerHTML: {
        __html: highlightedText.length ? transformContent(children, highlightedText) : children
      }
    }));
  }
};

var _default = Text;
exports.default = _default;