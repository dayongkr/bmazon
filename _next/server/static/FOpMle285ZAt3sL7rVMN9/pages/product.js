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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("uhzS");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gspt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (formattingComma);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "uhzS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/product/categoryTag.js
var __jsx = external_react_default.a.createElement;


const CategoryTag = ({
  text = '카테고리'
}) => {
  return __jsx("span", {
    className: "categoryTag"
  }, text);
};

/* harmony default export */ var categoryTag = (CategoryTag);
// EXTERNAL MODULE: ./function/formattingComma.js
var formattingComma = __webpack_require__("gspt");

// CONCATENATED MODULE: ./components/product/optionsWrapper.js
var optionsWrapper_jsx = external_react_default.a.createElement;


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
  return optionsWrapper_jsx("div", {
    className: "productOptionsWrapper",
    onClick: click
  }, optionsWrapper_jsx("div", {
    className: "productOptions"
  }, optionsWrapper_jsx("div", {
    className: "productOptionText"
  }, optionsWrapper_jsx("p", {
    className: "optionName"
  }, title), optionsWrapper_jsx("p", {
    className: "option"
  }, // 선택된 옵션 이름 찾기
  listValue[listType][option.filter(item => item.asin === selectedAsin)[0].list[index]])), optionsWrapper_jsx("div", {
    className: "productOptionImage"
  }, listType === 'color_name' && optionsWrapper_jsx("img", {
    className: "optionImage",
    src: img,
    alt: "\uC635\uC158\uC774\uBBF8\uC9C0"
  }), optionsWrapper_jsx("img", {
    width: "30px",
    src: "/static/images/keyboard_arrow_right-24px.svg",
    alt: "none"
  }))));
};

/* harmony default export */ var optionsWrapper = (OptionsWrapper);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/product/optionSliderItem.js
var optionSliderItem_jsx = external_react_default.a.createElement;



const OptionSliderItem = ({
  options,
  selected,
  sliderIndex,
  optionIndex,
  optionSelect,
  setOptionSelect
}) => {
  const router = Object(router_["useRouter"])();
  const liRef = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
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
  const onClickOption = Object(external_react_["useCallback"])(() => {
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
  return optionSliderItem_jsx("li", {
    ref: liRef,
    onClick: onClickOption
  }, optionSliderItem_jsx("p", {
    className: "optionName"
  }, options.listValue[options.listName[sliderIndex]][optionIndex]));
};

/* harmony default export */ var optionSliderItem = (OptionSliderItem);
// CONCATENATED MODULE: ./components/product/optionSliderList.js
var optionSliderList_jsx = external_react_default.a.createElement;



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
  return optionSliderList_jsx(external_react_default.a.Fragment, null, optionSliderList_jsx("p", {
    className: "optionTitle"
  }, optionSliderList_jsx("span", {
    className: "title"
  }, title, ":"), ` ${selectOptionTitle}`), optionSliderList_jsx("ul", {
    className: "optionSlider"
  }, options && options.listValue[sliderItem].map((item, optionIndex) => {
    return optionSliderList_jsx(optionSliderItem, {
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

/* harmony default export */ var optionSliderList = (OptionSliderList);
// CONCATENATED MODULE: ./components/product/productDetailsWrapper.js
var productDetailsWrapper_jsx = external_react_default.a.createElement;







const ProductDetailsWrapper = () => {
  const {
    rate,
    date,
    time
  } = Object(external_react_redux_["useSelector"])(state => state.exchange);
  const {
    name,
    price,
    category,
    asin,
    options,
    imageUrl
  } = Object(external_react_redux_["useSelector"])(state => state.product);
  const {
    0: dimmed,
    1: setDimmed
  } = Object(external_react_["useState"])('none');
  const {
    0: optionSelect,
    1: setOptionSelect
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    if (options) {
      setOptionSelect([...options.option.filter(item => item.asin === asin)[0].list]);
    }
  }, [options]);
  const onClickOption = Object(external_react_["useCallback"])(e => {
    if (dimmed === 'none') {
      setDimmed('block');
    } else {
      setDimmed('none');
    }
  }, [dimmed]);
  return productDetailsWrapper_jsx("div", {
    id: "productDetailsWrapper"
  }, productDetailsWrapper_jsx("p", {
    className: "title"
  }, name && name), productDetailsWrapper_jsx("div", {
    id: "productCategoryWrapper"
  }, category && category.map(item => productDetailsWrapper_jsx(categoryTag, {
    key: item,
    text: item
  }))), productDetailsWrapper_jsx("div", {
    id: "productPrice"
  }, productDetailsWrapper_jsx("span", {
    className: "main"
  }, price && rate && `₩${Object(formattingComma["a" /* default */])(price * rate, true)}`), productDetailsWrapper_jsx("span", {
    className: "sub"
  }, price && `\$${Object(formattingComma["a" /* default */])(price)}`)), productDetailsWrapper_jsx("p", {
    className: "exchangeRateDate"
  }, productDetailsWrapper_jsx("span", {
    className: "main"
  }, rate && `$1 = ₩${Object(formattingComma["a" /* default */])(rate)}`), rate && date && time && `(${date} ${time.substring(0, 5)} 기준)`), productDetailsWrapper_jsx("p", {
    className: "shipPrice"
  }, "\uBC30\uC1A1\uBE44", productDetailsWrapper_jsx("span", {
    className: "main"
  }, rate && `₩${Object(formattingComma["a" /* default */])(7.89 * rate, true)}`)), options && options.listName.map((item, index) => {
    return productDetailsWrapper_jsx(optionsWrapper, {
      options: options,
      click: onClickOption,
      img: imageUrl,
      index: index,
      selectedAsin: asin,
      key: item + 'OptionsWrapper',
      listType: item
    });
  }), productDetailsWrapper_jsx("div", {
    id: "dimmedOption",
    style: {
      display: dimmed
    }
  }, productDetailsWrapper_jsx("div", {
    id: "optionBackground",
    onClick: onClickOption
  }), productDetailsWrapper_jsx("div", {
    id: "optionSliderWrapper"
  }, options && options.listName.map((sliderItem, sliderIndex) => {
    return productDetailsWrapper_jsx(optionSliderList, {
      sliderItem: sliderItem,
      sliderIndex: sliderIndex,
      options: options,
      key: sliderItem + `listName`,
      asin: asin,
      optionSelect: optionSelect,
      setOptionSelect: setOptionSelect
    });
  }))), productDetailsWrapper_jsx("div", {
    id: "productButtonWrapper"
  }, productDetailsWrapper_jsx("button", {
    className: "productHeartButton"
  }, productDetailsWrapper_jsx("img", {
    src: "/static/images/favorite_border-24px.svg",
    width: "17",
    alt: "\uCC1C\uD558\uAE30 \uBC84\uD2BC"
  }), "\uCC1C\uD558\uAE30"), productDetailsWrapper_jsx("button", {
    className: "productShareButton"
  }, productDetailsWrapper_jsx("img", {
    src: "/static/images/share-24px.svg",
    width: "17",
    alt: "\uACF5\uC720\uD558\uAE30 \uBC84\uD2BC"
  }), "\uACF5\uC720\uD558\uAE30")));
};

/* harmony default export */ var productDetailsWrapper = (ProductDetailsWrapper);
// CONCATENATED MODULE: ./components/product/productMainNavigation.js
var productMainNavigation_jsx = external_react_default.a.createElement;


const ProductMainNavigation = () => {
  const navRef = Object(external_react_["useRef"])();

  const onClickList = e => {
    for (let i = 0; i < navRef.current.children.length; i += 1) {
      if (navRef.current.children[i].classList.contains('active')) {
        navRef.current.children[i].classList.remove('active');
        break;
      }
    }

    e.target.classList.add('active');
  };

  Object(external_react_["useEffect"])(() => {
    if (navRef.current) {
      for (let i = 0; i < navRef.current.children.length; i += 1) {
        navRef.current.children[i].addEventListener('click', onClickList);
      }
    }
  }, [navRef]);
  return productMainNavigation_jsx("div", {
    id: "productMainNavigationWrapper"
  }, productMainNavigation_jsx("ul", {
    id: "productMainNavigation",
    ref: navRef
  }, productMainNavigation_jsx("li", {
    className: "active"
  }, "\uC0C1\uD488\uC18C\uAC1C"), productMainNavigation_jsx("li", null, "\uD574\uC678\uB9AC\uBDF0"), productMainNavigation_jsx("li", null, "\uAD6D\uB0B4\uB9AC\uBDF0"), productMainNavigation_jsx("li", null, "\uCEE4\uBBA4\uB2C8\uD2F0"), productMainNavigation_jsx("li", null, "\uAD6D\uB0B4 \uCD5C\uC800\uAC00 \uBE44\uAD50"), productMainNavigation_jsx("li", null, "\uAD6C\uB9E4\uB300\uD589 \uC815\uCC45")));
};

/* harmony default export */ var productMainNavigation = (ProductMainNavigation);
// EXTERNAL MODULE: ./reducers/product.js
var product = __webpack_require__("zHiX");

// CONCATENATED MODULE: ./pages/product.js
var product_jsx = external_react_default.a.createElement;








const Product = ({
  asin
}) => {
  const {
    imageUrl,
    details
  } = Object(external_react_redux_["useSelector"])(state => state.product);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    dispatch({
      type: product["c" /* PRODUCT_INFORMATION_RESET */]
    });
    dispatch({
      type: product["b" /* PRODUCT_INFORMATION_REQUEST */],
      data: {
        url: `https://amazon.com/dp/${asin}`,
        asin
      }
    });
  }, []);
  return product_jsx(external_react_default.a.Fragment, null, product_jsx(head_default.a, null, product_jsx("link", {
    rel: "stylesheet",
    href: "/static/style/amazon.css"
  }), product_jsx("link", {
    rel: "stylesheet",
    href: "/static/style/product.css"
  })), product_jsx("div", {
    id: "productMainImageWrapper"
  }, imageUrl && product_jsx("img", {
    src: imageUrl,
    id: "productMainImage"
  })), product_jsx("div", {
    id: "productWrapper"
  }, product_jsx(productDetailsWrapper, null), product_jsx(productMainNavigation, null), product_jsx("div", {
    id: "productDetailInfoWrapper",
    className: "aplus-v2 mobile celwidget weblabRtl",
    cel_widget_id: "m-aplus",
    "data-cel-widget": "m-aplus"
  }, product_jsx("div", {
    dangerouslySetInnerHTML: {
      __html: details
    }
  }))), product_jsx("div", {
    id: "productBottomNavigation"
  }, product_jsx("div", {
    id: "productPutCartButton"
  }, "\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30")));
};

Product.getInitialProps = async context => {
  return {
    asin: context.query.asin
  };
};

/* harmony default export */ var pages_product = __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zHiX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PRODUCT_INFORMATION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PRODUCT_INFORMATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRODUCT_INFORMATION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PRODUCT_INFORMATION_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PRODUCT_OPTION_INFORMATION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PRODUCT_OPTION_INFORMATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PRODUCT_OPTION_INFORMATION_FAILURE; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");

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
/* harmony default export */ __webpack_exports__["h"] = ((state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_INFORMATION_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          url: action.data.url,
          asin: action.data.asin
        });
      }

    case PRODUCT_INFORMATION_SUCCESS:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    case PRODUCT_INFORMATION_RESET:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    case PRODUCT_OPTION_INFORMATION_SUCCESS:
      {
        const option = state.options.option;
        const currentIndex = option.findIndex(item => item.asin === action.data.asin);
        option[currentIndex].imageUrl = action.data.imageUrl;
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          options: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state.options, {
            option: [...option]
          })
        });
      }

    case PRODUCT_OPTION_INFORMATION_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    default:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }
  }
});

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });