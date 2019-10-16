module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/product/categoryTag.jsx":
/*!********************************************!*\
  !*** ./components/product/categoryTag.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CategoryTag = ({
  text = '카테고리'
}) => {
  return __jsx("span", {
    className: "categoryTag"
  }, text);
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryTag);

/***/ }),

/***/ "./components/product/optionSliderItem.jsx":
/*!*************************************************!*\
  !*** ./components/product/optionSliderItem.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const OptionSliderItem = ({
  options,
  selected,
  sliderIndex,
  optionIndex,
  optionSelect,
  setOptionSelect
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const liRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (liRef.current) {
      if (selected) {
        liRef.current.classList.add('selected');
      } else {
        liRef.current.classList.remove('selected');
      }

      if (optionSelect.length === 1) {
        if (!options.option.some(item => item.list[sliderIndex] == optionIndex)) {
          liRef.current.classList.add('none');
        } else {
          liRef.current.classList.remove('none');
        }
      } else {
        if (sliderIndex + 1 === optionSelect.length) {
          if (!options.option.filter(item => item.list[0] === optionSelect[0]).some(item => item.list[sliderIndex] == optionIndex)) {
            liRef.current.classList.add('none');
          } else {
            liRef.current.classList.remove('none');
          }
        } else {
          if (!options.option.filter(item => item.list[sliderIndex + 1] === optionSelect[sliderIndex + 1]).some(item => item.list[sliderIndex] == optionIndex)) {
            liRef.current.classList.add('none');
          } else {
            liRef.current.classList.remove('none');
          }
        }
      }
    }
  }, [optionSelect, options]);
  const onClickOption = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const selectedOption = optionSelect.map((item, index) => {
      if (index === sliderIndex) {
        return optionIndex + '';
      } else {
        return item;
      }
    });

    if (liRef.current) {
      if (liRef.current.classList.contains('none')) {
        // 가능한 옵션 찾기
        const availableOption = options.option.filter(item => item.list[sliderIndex] == optionIndex).sort((x, y) => x.list.reduce((x, y) => x + y) - y.list.reduce((x, y) => x + y))[0];
        setOptionSelect([...availableOption.list]);
      } else {
        if (sliderIndex + 1 === options.listName.length) {
          setOptionSelect([...selectedOption]);
          const optionAsin = options.option.filter(item => item.list.every((item, sliderIndex) => item === selectedOption[sliderIndex]))[0].asin;
          router.push(`/product/${optionAsin}`);
        } else {
          setOptionSelect([...selectedOption]);
        }
      }
    }
  }, [optionSelect]);
  return __jsx("li", {
    ref: liRef,
    onClick: onClickOption
  }, __jsx("p", {
    className: "optionName"
  }, options.listValue[options.listName[sliderIndex]][optionIndex]));
};

/* harmony default export */ __webpack_exports__["default"] = (OptionSliderItem);

/***/ }),

/***/ "./components/product/optionSliderList.jsx":
/*!*************************************************!*\
  !*** ./components/product/optionSliderList.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _optionSliderItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optionSliderItem */ "./components/product/optionSliderItem.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const OptionSliderList = ({
  sliderIndex,
  options,
  sliderItem,
  asin,
  optionSelect,
  setOptionSelect
}) => {
  const selectOptionTitle = options.listValue[sliderItem][options.option.filter(sliderItem => sliderItem.asin === asin)[0].list[sliderIndex]];
  const title = sliderItem.replace(/_|name/g, ' ').split('').map((item, index) => index === 0 ? item.toUpperCase() : item).join('').trim();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    className: "optionTitle"
  }, __jsx("span", {
    className: "title"
  }, title, ":"), ` ${selectOptionTitle}`), __jsx("ul", {
    className: "optionSlider"
  }, options && options.listValue[sliderItem].map((item, optionIndex) => {
    return __jsx(_optionSliderItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item,
      options: options,
      sliderIndex: sliderIndex,
      optionIndex: optionIndex,
      selected: optionSelect[sliderIndex] == optionIndex,
      optionSelect: optionSelect,
      setOptionSelect: setOptionSelect
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OptionSliderList);

/***/ }),

/***/ "./components/product/optionsWrapper.jsx":
/*!***********************************************!*\
  !*** ./components/product/optionsWrapper.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_components_product_optionsWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styled-components/product/optionsWrapper */ "./styled-components/product/optionsWrapper.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const OptionsWrapper = ({
  options,
  click,
  img,
  index,
  selectedAsin,
  listType
}) => {
  const {
    option,
    listName,
    listValue
  } = options;
  const title = listName[index] // 옵션 타이틀 지정
  .replace(/_|name/g, ' ').split('').map((item, index) => index === 0 ? item.toUpperCase() : item).join('').trim();
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
  listValue[listType][option.filter(item => item.asin === selectedAsin)[0].list[index]])), __jsx("div", {
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

/***/ }),

/***/ "./components/product/productDetailsWrapper.jsx":
/*!******************************************************!*\
  !*** ./components/product/productDetailsWrapper.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _categoryTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoryTag */ "./components/product/categoryTag.jsx");
/* harmony import */ var _function_formattingComma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../function/formattingComma */ "./function/formattingComma.js");
/* harmony import */ var _optionsWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./optionsWrapper */ "./components/product/optionsWrapper.jsx");
/* harmony import */ var _optionSliderList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./optionSliderList */ "./components/product/optionSliderList.jsx");
/* harmony import */ var _styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styled-components/product/productDetailsWrapper */ "./styled-components/product/productDetailsWrapper.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const ProductDetailsWrapper = () => {
  const {
    rate,
    date,
    time
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.exchange);
  const {
    name,
    price,
    category,
    asin,
    options,
    imageUrl
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.product);
  const {
    0: dimmed,
    1: setDimmed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('none');
  const {
    0: optionSelect,
    1: setOptionSelect
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (options) {
      setOptionSelect([...options.option.filter(item => item.asin === asin)[0].list]);
    }
  }, [options]);
  const onClickOption = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    if (dimmed === 'none') {
      setDimmed('block');
    } else {
      setDimmed('none');
    }
  }, [dimmed]);
  return __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsWrapperStyled"], null, __jsx("p", {
    className: "title"
  }, name && name), __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_6__["ProductCategoryWrapper"], null, category && category.map(item => __jsx(_categoryTag__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: item,
    text: item
  }))), __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_6__["ProductPrice"], null, __jsx("span", {
    className: "main"
  }, price && rate && `₩${Object(_function_formattingComma__WEBPACK_IMPORTED_MODULE_3__["default"])(price * rate, true)}`), __jsx("span", {
    className: "sub"
  }, price && `\$${Object(_function_formattingComma__WEBPACK_IMPORTED_MODULE_3__["default"])(price)}`)), __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_6__["ExchangeRateDate"], null, __jsx("span", {
    className: "main"
  }, rate && `$1 = ₩${Object(_function_formattingComma__WEBPACK_IMPORTED_MODULE_3__["default"])(rate)}`), rate && date && time && `(${date} ${time.substring(0, 5)} 기준)`), __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_6__["ShipPrice"], null, "\uBC30\uC1A1\uBE44", __jsx("span", {
    className: "main"
  }, rate && `₩${Object(_function_formattingComma__WEBPACK_IMPORTED_MODULE_3__["default"])(7.89 * rate, true)}`)), options && options.listName.map((item, index) => {
    return __jsx(_optionsWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      options: options,
      click: onClickOption,
      img: imageUrl,
      index: index,
      selectedAsin: asin,
      key: item + 'OptionsWrapper',
      listType: item
    });
  }), __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_6__["DimmedOption"], {
    style: {
      display: dimmed
    }
  }, __jsx("div", {
    id: "optionBackground",
    onClick: onClickOption
  }), __jsx("div", {
    id: "optionSliderWrapper"
  }, options && options.listName.map((sliderItem, sliderIndex) => {
    return __jsx(_optionSliderList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sliderItem: sliderItem,
      sliderIndex: sliderIndex,
      options: options,
      key: sliderItem + `listName`,
      asin: asin,
      optionSelect: optionSelect,
      setOptionSelect: setOptionSelect
    });
  }))), __jsx(_styled_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_6__["ProductButtonWrapper"], null, __jsx("button", {
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

/***/ }),

/***/ "./components/product/productMainNavigation.jsx":
/*!******************************************************!*\
  !*** ./components/product/productMainNavigation.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_components_product_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styled-components/product/product */ "./styled-components/product/product.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ProductMainNavigation = () => {
  const navRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  const onClickList = e => {
    for (let i = 0; i < navRef.current.children.length; i += 1) {
      if (navRef.current.children[i].classList.contains('active')) {
        navRef.current.children[i].classList.remove('active');
        break;
      }
    }

    e.target.classList.add('active');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (navRef.current) {
      for (let i = 0; i < navRef.current.children.length; i += 1) {
        navRef.current.children[i].addEventListener('click', onClickList);
      }
    }
  }, [navRef]);
  return __jsx(_styled_components_product_product__WEBPACK_IMPORTED_MODULE_1__["ProductMainNavigationWrapper"], null, __jsx(_styled_components_product_product__WEBPACK_IMPORTED_MODULE_1__["ProductMainNavigationStyled"], null, __jsx("li", {
    className: "active"
  }, "\uC0C1\uD488\uC18C\uAC1C"), __jsx("li", null, "\uD574\uC678\uB9AC\uBDF0"), __jsx("li", null, "\uAD6D\uB0B4\uB9AC\uBDF0"), __jsx("li", null, "\uCEE4\uBBA4\uB2C8\uD2F0"), __jsx("li", null, "\uAD6D\uB0B4 \uCD5C\uC800\uAC00 \uBE44\uAD50"), __jsx("li", null, "\uAD6C\uB9E4\uB300\uD589 \uC815\uCC45")));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductMainNavigation);

/***/ }),

/***/ "./function/formattingComma.js":
/*!*************************************!*\
  !*** ./function/formattingComma.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const formattingComma = (number, ceil) => {
  if (isNaN(Number(number))) {
    return number;
  }

  if (typeof number === 'string') {
    number = Number(number);
  }

  if (ceil) {
    return String(Math.ceil(number)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (formattingComma);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/product.jsx":
/*!***************************!*\
  !*** ./pages/product.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/product/productDetailsWrapper */ "./components/product/productDetailsWrapper.jsx");
/* harmony import */ var _components_product_productMainNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/product/productMainNavigation */ "./components/product/productMainNavigation.jsx");
/* harmony import */ var _reducers_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/product */ "./reducers/product.js");
/* harmony import */ var _styled_components_product_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled-components/product/product */ "./styled-components/product/product.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Product = ({
  asin
}) => {
  const {
    imageUrl,
    details
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.product);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_product__WEBPACK_IMPORTED_MODULE_4__["PRODUCT_INFORMATION_RESET"]
    });
    dispatch({
      type: _reducers_product__WEBPACK_IMPORTED_MODULE_4__["PRODUCT_INFORMATION_REQUEST"],
      data: {
        url: `https://amazon.com/dp/${asin}`,
        asin
      }
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styled_components_product_product__WEBPACK_IMPORTED_MODULE_5__["ProductMainImageWrapper"], null, imageUrl && __jsx("img", {
    src: imageUrl,
    id: "productMainImage"
  })), __jsx(_styled_components_product_product__WEBPACK_IMPORTED_MODULE_5__["ProductWrapper"], null, __jsx(_components_product_productDetailsWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_product_productMainNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_styled_components_product_product__WEBPACK_IMPORTED_MODULE_5__["ProductDetailInfoWrapper"], {
    className: "aplus-v2 mobile celwidget weblabRtl",
    cel_widget_id: "m-aplus",
    "data-cel-widget": "m-aplus"
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: details
    }
  }))), __jsx(_styled_components_product_product__WEBPACK_IMPORTED_MODULE_5__["ProductBottomNavigation"], null, __jsx("div", {
    id: "productPutCartButton"
  }, "\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30")));
};

Product.getInitialProps = async context => {
  return {
    asin: context.query.asin
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./reducers/product.js":
/*!*****************************!*\
  !*** ./reducers/product.js ***!
  \*****************************/
/*! exports provided: initialState, PRODUCT_INFORMATION_REQUEST, PRODUCT_INFORMATION_SUCCESS, PRODUCT_INFORMATION_FAILURE, PRODUCT_INFORMATION_RESET, PRODUCT_OPTION_INFORMATION_REQUEST, PRODUCT_OPTION_INFORMATION_SUCCESS, PRODUCT_OPTION_INFORMATION_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_INFORMATION_REQUEST", function() { return PRODUCT_INFORMATION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_INFORMATION_SUCCESS", function() { return PRODUCT_INFORMATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_INFORMATION_FAILURE", function() { return PRODUCT_INFORMATION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_INFORMATION_RESET", function() { return PRODUCT_INFORMATION_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_OPTION_INFORMATION_REQUEST", function() { return PRODUCT_OPTION_INFORMATION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_OPTION_INFORMATION_SUCCESS", function() { return PRODUCT_OPTION_INFORMATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_OPTION_INFORMATION_FAILURE", function() { return PRODUCT_OPTION_INFORMATION_FAILURE; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

const initialState = {
  product: {
    imageUrl: '',
    url: '',
    asin: '',
    name: '',
    price: '',
    category: [],
    details: ''
  }
};
const PRODUCT_INFORMATION_REQUEST = 'PRODUCT_INFORMATION_REQUEST';
const PRODUCT_INFORMATION_SUCCESS = 'PRODUCT_INFORMATION_SUCCESS';
const PRODUCT_INFORMATION_FAILURE = 'PRODUCT_INFORMATION_FAILURE';
const PRODUCT_INFORMATION_RESET = 'PRODUCT_INFORMATION_RESET';
const PRODUCT_OPTION_INFORMATION_REQUEST = 'PRODUCT_OPTION_INFORMATION_REQUEST';
const PRODUCT_OPTION_INFORMATION_SUCCESS = 'PRODUCT_OPTION_INFORMATION_SUCCESS';
const PRODUCT_OPTION_INFORMATION_FAILURE = 'PRODUCT_OPTION_INFORMATION_FAILURE';
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_INFORMATION_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          url: action.data.url,
          asin: action.data.asin
        });
      }

    case PRODUCT_INFORMATION_SUCCESS:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          imageUrl: action.data.imageUrl,
          name: action.data.name,
          price: action.data.price,
          category: action.data.category,
          details: action.data.details,
          options: action.data.options
        });
      }

    case PRODUCT_INFORMATION_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
      }

    case PRODUCT_INFORMATION_RESET:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          imageUrl: '',
          url: '',
          asin: '',
          name: '',
          price: '',
          category: [],
          details: ''
        });
      }

    case PRODUCT_OPTION_INFORMATION_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
      }

    case PRODUCT_OPTION_INFORMATION_SUCCESS:
      {
        const option = state.options.option;
        const currentIndex = option.findIndex(item => item.asin === action.data.asin);
        option[currentIndex].imageUrl = action.data.imageUrl;
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          options: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.options, {
            option: [...option]
          })
        });
      }

    case PRODUCT_OPTION_INFORMATION_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
      }

    default:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
      }
  }
});

/***/ }),

/***/ "./styled-components/product/optionsWrapper.js":
/*!*****************************************************!*\
  !*** ./styled-components/product/optionsWrapper.js ***!
  \*****************************************************/
/*! exports provided: ProductOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOptions", function() { return ProductOptions; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ProductOptions = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "optionsWrapper__ProductOptions",
  componentId: "tktbdo-0"
})(["margin-top:15px;height:75px;border-radius:5px;padding:15px 5px 15px 15px;display:flex;justify-content:space-between;align-items:center;border:1px solid #eee;box-shadow:0px 5px 5px rgba(0,0,0,0.1);cursor:pointer;& .optionName{color:#666;}& .option{font-weight:bold;margin-top:10px;}& .productOptionImage{display:flex;justify-content:center;align-items:center;}& .optionImage{height:50px;}"]);

/***/ }),

/***/ "./styled-components/product/product.js":
/*!**********************************************!*\
  !*** ./styled-components/product/product.js ***!
  \**********************************************/
/*! exports provided: ProductMainImageWrapper, ProductWrapper, ProductBottomNavigation, ProductMainNavigationWrapper, ProductMainNavigationStyled, ProductDetailInfoWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMainImageWrapper", function() { return ProductMainImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductWrapper", function() { return ProductWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBottomNavigation", function() { return ProductBottomNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMainNavigationWrapper", function() { return ProductMainNavigationWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMainNavigationStyled", function() { return ProductMainNavigationStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailInfoWrapper", function() { return ProductDetailInfoWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ProductMainImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product__ProductMainImageWrapper",
  componentId: "sc-1ro2mj5-0"
})(["height:100vw;background-color:white;display:flex;justify-content:center;align-items:center;& #productMainImage{height:100vw;}"]);
const ProductWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product__ProductWrapper",
  componentId: "sc-1ro2mj5-1"
})(["background-color:white;margin-bottom:70px;"]);
const ProductBottomNavigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product__ProductBottomNavigation",
  componentId: "sc-1ro2mj5-2"
})(["width:100%;height:70px;background-color:white;box-shadow:0px -3px 6px rgba(0,0,0,0.1);position:fixed;bottom:0;padding:10px;& #productPutCartButton{width:100%;height:50px;background-color:#5e3eda;border-radius:5px;color:white;font-weight:bold;text-align:center;line-height:50px;}"]);
const ProductMainNavigationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product__ProductMainNavigationWrapper",
  componentId: "sc-1ro2mj5-3"
})(["height:50px;border-bottom:1px solid #eee;overflow-x:auto;overflow-y:hidden;"]);
const ProductMainNavigationStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "product__ProductMainNavigationStyled",
  componentId: "sc-1ro2mj5-4"
})(["font-size:14px;color:#999;white-space:nowrap;&::after{content:'';display:block;clear:both;}& li{display:inline-block;height:50px;line-height:50px;cursor:pointer;}& li.active{font-weight:bold;color:#333;border-bottom:3px solid #333;}& li:first-child{margin-left:20px;}& li:last-child{margin-right:20px;}& li + li{margin-left:20px;}"]);
const ProductDetailInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product__ProductDetailInfoWrapper",
  componentId: "sc-1ro2mj5-5"
})(["overflow-x:auto;margin:5px 0;padding:15px;& img{vertical-align:top;max-width:100%;border:0;}& .a-spacing-base,& .a-ws .a-ws-spacing-base{margin-bottom:1.3rem !important;}& h1 h2{padding-bottom:0.4rem;}& h4{font-weight:bold;line-height:1.35;}& h1,& h2,& h3,& h4{text-rendering:optimizeLegibility;}& .a-spacing-small,& .a-ws .a-ws-spacing-small{margin-bottom:0.9rem !important;}& .a-unordered-list{margin:0 0 0 1.8rem;}& .a-unordered-list li{word-wrap:break-word;list-style:disc;}& p{margin:0 0 1.3rem 0;}& p + p{margin-top:-0.4rem;}& .a-text-bold{font-weight:700 !important;}& a,& a.a-touch-press,& a:link,& a:visited{text-decoration:none;color:#0066c0;}& .a-text-center{text-align:center !important;padding-bottom:1.5rem;}.aplus-v2 .premium-aplus .aplus-h1{font-size:22px;line-height:1.2em;font-weight:500;}& .a-button{background:#e7e9ec;border-radius:0.3rem;border-color:#adb1b8 #a2a6ac #8d9096;border-style:solid;border-width:0.1rem;cursor:pointer;display:block;padding:0;text-align:center;text-decoration:none !important;-webkit-tap-highlight-color:rgba(0,0,0,0);}& .a-button-dark,& .a-button-search{background:#444c55;border-color:#3d444c #2f353b #2c3137;color:#fff;}& .a-button-dark .a-button-inner,& .a-button-search .a-button-inner{box-shadow:0 0.1rem 0 rgba(255,255,255,0.15) inset;}& .a-button-dark .a-button-inner,& .a-button-search .a-button-inner{background:#5b626a;background:-webkit-linear-gradient(top,#72787f,#444c55) !important;background:linear-gradient(to bottom,#72787f,#444c55) !important;}& .a-button .a-button-inner{background:#eff1f3;background:-webkit-linear-gradient(top,#f7f8fa,#e7e9ec);background:linear-gradient(to bottom,#f7f8fa,#e7e9ec);}& .a-button-inner{display:block;position:relative;overflow:hidden;height:100%;box-shadow:0 0.1rem 0 rgba(255,255,255,0.6) inset;border-radius:0.2rem;}& .a-button a,& .a-button:hover a{text-decoration:none !important;}& a.a-button-text,& button.a-button-text{width:100%;height:100%;}& .a-button-text{background-color:transparent;border:0;display:block;line-height:1.35;margin:0;outline:0;padding:1.2rem 1.6rem 1.2rem 1.7rem;text-align:center;color:#fff;}& a{-webkit-tap-highlight-color:transparent;}& .a-button-dark .a-button-text,& .a-button-search .a-button-text{font-weight:700;color:#fff;}"]);

/***/ }),

/***/ "./styled-components/product/productDetailsWrapper.js":
/*!************************************************************!*\
  !*** ./styled-components/product/productDetailsWrapper.js ***!
  \************************************************************/
/*! exports provided: ProductDetailsWrapperStyled, ProductCategoryWrapper, ProductPrice, ExchangeRateDate, ShipPrice, ProductButtonWrapper, DimmedOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsWrapperStyled", function() { return ProductDetailsWrapperStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryWrapper", function() { return ProductCategoryWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPrice", function() { return ProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRateDate", function() { return ExchangeRateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipPrice", function() { return ShipPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductButtonWrapper", function() { return ProductButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DimmedOption", function() { return DimmedOption; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ProductDetailsWrapperStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productDetailsWrapper__ProductDetailsWrapperStyled",
  componentId: "sc-1206yy3-0"
})(["width:100%;position:relative;padding:25px 20px 20px;& .title{font-size:18px;font-weight:bold;line-height:21px;}"]);
const ProductCategoryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productDetailsWrapper__ProductCategoryWrapper",
  componentId: "sc-1206yy3-1"
})(["margin:5px 0;& .categoryTag{display:inline-block;font-size:12px;padding:5px 8px;background-color:#333;color:white;border-radius:5px;margin-right:5px;cursor:pointer;margin-top:5px;}"]);
const ProductPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productDetailsWrapper__ProductPrice",
  componentId: "sc-1206yy3-2"
})(["margin:15px 0 10px;font-size:16px;color:#999;font-style:italic;& .main{font-size:30px;font-weight:bold;color:#333;font-style:normal;margin-right:5px;}"]);
const ExchangeRateDate = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "productDetailsWrapper__ExchangeRateDate",
  componentId: "sc-1206yy3-3"
})(["font-size:12px;color:#999;font-style:italic;& .main{font-size:12px;color:#666;margin-right:5px;font-style:normal;font-weight:bold;}"]);
const ShipPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "productDetailsWrapper__ShipPrice",
  componentId: "sc-1206yy3-4"
})(["font-size:12px;color:#999;margin:5px 0 0;& .main{color:#999;font-weight:bold;margin-left:5px;}"]);
const ProductButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productDetailsWrapper__ProductButtonWrapper",
  componentId: "sc-1206yy3-5"
})(["margin:15px 0 10px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #eee;padding:15px 0 0;& button{border-radius:5px;background-color:#eee;height:40px;font-weight:bold;font-size:14px;color:#666;border:none;display:flex;justify-content:center;align-items:center;outline:none;cursor:pointer;}& img{margin-right:3px;}& .productHeartButton{width:65%;margin-right:10px;}& .productShareButton{width:35%;}"]);
const DimmedOption = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productDetailsWrapper__DimmedOption",
  componentId: "sc-1206yy3-6"
})(["width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:100;& #optionBackground{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.5);cursor:pointer;}& #optionSliderWrapper{padding-bottom:20px;position:absolute;left:0;right:0;bottom:0;background-color:white;min-height:110px;}& ul{overflow-y:auto;white-space:nowrap;}& .optionTitle{margin:0 0 0 10px;height:40px;line-height:40px;color:#666;font-weight:bold;}& .optionTitle .title{font-weight:bold;color:#333;font-size:1.1em;}& li{display:inline-flex;justify-content:center;align-items:center;border:1px solid rgb(180,180,180);border-radius:5px;height:70px;padding:10px;margin:0 10px;min-width:130px;position:relative;cursor:pointer;}& li + li{margin-left:0;}& li.selected{border:1px solid #5e3eda;background-color:rgba(94,62,218,0.1);}& li.none{border:1px dashed #999;color:#999;}& li .optionImageWrapper{width:100%;display:flex;justify-content:center;align-items:center;}"]);

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/product.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dayong/Desktop/dev/bmazon/pages/product.jsx */"./pages/product.jsx");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=product.js.map