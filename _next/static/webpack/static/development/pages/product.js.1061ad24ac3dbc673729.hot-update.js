webpackHotUpdate("static/development/pages/product.js",{

/***/ "./components/product/optionsWrapper.jsx":
/*!***********************************************!*\
  !*** ./components/product/optionsWrapper.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_components_product_optionsWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styled-components/product/optionsWrapper */ "./styled-components/product/optionsWrapper.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var OptionsWrapper = function OptionsWrapper(_ref) {
  var options = _ref.options,
      click = _ref.click,
      img = _ref.img,
      index = _ref.index,
      selectedAsin = _ref.selectedAsin,
      listType = _ref.listType;
  var option = options.option,
      listName = options.listName,
      listValue = options.listValue;
  var title = listName[index] // 옵션 타이틀 지정
  .replace(/_|name/g, ' ').split('').map(function (item, index) {
    return index === 0 ? item.toUpperCase() : item;
  }).join('').trim();
  return __jsx("div", {
    className: "productOptionsWrapper",
    onClick: click
  }, __jsx(_styled_components_product_optionsWrapper__WEBPACK_IMPORTED_MODULE_1__["ProductOptions"], null, __jsx("div", {
    className: "productOptionText"
  }, __jsx("p", {
    className: "optionName"
  }, title), __jsx("p", {
    className: "option"
  }, // 선택된 옵션 이름 찾기
  listValue[listType][option.filter(function (item) {
    return item.asin === selectedAsin;
  })[0].list[index]])), __jsx("div", {
    className: "productOptionImage"
  }, listType === 'color_name' && __jsx("img", {
    className: "optionImage",
    src: img,
    alt: "\uC635\uC158\uC774\uBBF8\uC9C0"
  }), __jsx("img", {
    width: "30px",
    src: "/static/images/keyboard_arrow_right-24px.svg",
    alt: "none"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (OptionsWrapper);

/***/ })

})
//# sourceMappingURL=product.js.1061ad24ac3dbc673729.hot-update.js.map