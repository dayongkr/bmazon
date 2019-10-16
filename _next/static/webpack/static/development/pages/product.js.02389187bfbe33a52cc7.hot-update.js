webpackHotUpdate("static/development/pages/product.js",{

/***/ "./components/product/productDetailsWrapper.jsx":
/*!******************************************************!*\
  !*** ./components/product/productDetailsWrapper.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _categoryTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoryTag */ "./components/product/categoryTag.jsx");
/* harmony import */ var _function_formattingComma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../function/formattingComma */ "./function/formattingComma.js");
/* harmony import */ var _optionsWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./optionsWrapper */ "./components/product/optionsWrapper.jsx");
/* harmony import */ var _optionSliderList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./optionSliderList */ "./components/product/optionSliderList.jsx");
/* harmony import */ var _styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styled-components/product/productDetailsWrapper */ "./styled-components/product/productDetailsWrapper.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var ProductDetailsWrapper = function ProductDetailsWrapper() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.exchange;
  }),
      rate = _useSelector.rate,
      date = _useSelector.date,
      time = _useSelector.time;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.product;
  }),
      name = _useSelector2.name,
      price = _useSelector2.price,
      category = _useSelector2.category,
      asin = _useSelector2.asin,
      options = _useSelector2.options,
      imageUrl = _useSelector2.imageUrl;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('none'),
      dimmed = _useState[0],
      setDimmed = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      optionSelect = _useState2[0],
      setOptionSelect = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (options) {
      setOptionSelect(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(options.option.filter(function (item) {
        return item.asin === asin;
      })[0].list));
    }
  }, [options]);
  var onClickOption = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    if (dimmed === 'none') {
      setDimmed('block');
    } else {
      setDimmed('none');
    }
  }, [dimmed]);
  return __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsWrapperStyled"], null, __jsx("p", {
    className: "title"
  }, name && name), __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_7__["ProductCategoryWrapper"], null, category && category.map(function (item) {
    return __jsx(_categoryTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item,
      text: item
    });
  })), __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_7__["ProductPrice"], null, __jsx("span", {
    className: "main"
  }, price && rate && "\u20A9".concat(Object(_function_formattingComma__WEBPACK_IMPORTED_MODULE_4__["default"])(price * rate, true))), __jsx("span", {
    className: "sub"
  }, price && "$".concat(Object(_function_formattingComma__WEBPACK_IMPORTED_MODULE_4__["default"])(price)))), __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_7__["ExchangeRateDate"], null, __jsx("span", {
    className: "main"
  }, rate && "$1 = \u20A9".concat(Object(_function_formattingComma__WEBPACK_IMPORTED_MODULE_4__["default"])(rate))), rate && date && time && "(".concat(date, " ").concat(time.substring(0, 5), " \uAE30\uC900)")), __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_7__["ShipPrice"], null, "\uBC30\uC1A1\uBE44", __jsx("span", {
    className: "main"
  }, rate && "\u20A9".concat(Object(_function_formattingComma__WEBPACK_IMPORTED_MODULE_4__["default"])(7.89 * rate, true)))), options && options.listName.map(function (item, index) {
    return __jsx(_optionsWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      options: options,
      click: onClickOption,
      img: imageUrl,
      index: index,
      selectedAsin: asin,
      key: item + 'OptionsWrapper',
      listType: item
    });
  }), __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_7__["DimmedOption"], {
    style: {
      display: dimmed
    }
  }, __jsx("div", {
    id: "optionBackground",
    onClick: onClickOption
  }), __jsx("div", {
    id: "optionSliderWrapper"
  }, options && options.listName.map(function (sliderItem, sliderIndex) {
    return __jsx(_optionSliderList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sliderItem: sliderItem,
      sliderIndex: sliderIndex,
      options: options,
      key: sliderItem + "listName",
      asin: asin,
      optionSelect: optionSelect,
      setOptionSelect: setOptionSelect
    });
  }))), __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_7__["ProductButtonWrapper"], null, __jsx("button", {
    className: "productHeartButton"
  }, __jsx("img", {
    src: "/static/images/favorite_border-24px.svg",
    width: "17",
    alt: "\uCC1C\uD558\uAE30 \uBC84\uD2BC"
  }), "\uCC1C\uD558\uAE30"), __jsx("button", {
    className: "productShareButton"
  }, __jsx("img", {
    src: "/static/images/share-24px.svg",
    width: "17",
    alt: "\uACF5\uC720\uD558\uAE30 \uBC84\uD2BC"
  }), "\uACF5\uC720\uD558\uAE30")));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductDetailsWrapper);

/***/ })

})
//# sourceMappingURL=product.js.02389187bfbe33a52cc7.hot-update.js.map