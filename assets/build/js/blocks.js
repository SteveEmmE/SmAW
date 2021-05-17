/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/gutenberg/blocks/aos-control/edit.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/aos-control/edit.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var fade = attributes.fade,
      flip = attributes.flip,
      slide = attributes.slide,
      zoom = attributes.zoom,
      offset = attributes.offset,
      delay = attributes.delay,
      duration = attributes.duration,
      easing = attributes.easing,
      anchorPlacement = attributes.anchorPlacement,
      once = attributes.once;

  var onChangeFade = function onChangeFade(newValue) {
    return setAttributes({
      fade: newValue
    });
  };

  var onChangeFlip = function onChangeFlip(newValue) {
    return setAttributes({
      flip: newValue
    });
  };

  var onChangeSlide = function onChangeSlide(newValue) {
    return setAttributes({
      slide: newValue
    });
  };

  var onChangeZoom = function onChangeZoom(newValue) {
    return setAttributes({
      zoom: newValue
    });
  };

  var onChangeAnchorPlacement = function onChangeAnchorPlacement(newValue) {
    return setAttributes({
      anchorPlacement: newValue
    });
  };

  var onChangeEasing = function onChangeEasing(newValue) {
    return setAttributes({
      easing: newValue
    });
  };

  var onChangeOffset = function onChangeOffset(newValue) {
    return setAttributes({
      offset: newValue
    });
  };

  var onChangeDelay = function onChangeDelay(newValue) {
    return setAttributes({
      delay: newValue
    });
  };

  var onChangeDuration = function onChangeDuration(newValue) {
    return setAttributes({
      duration: newValue
    });
  };

  var onChangeOnce = function onChangeOnce(newValue) {
    return setAttributes({
      once: newValue
    });
  };

  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    style: {
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Fade Animation"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: 'Select fade direction:',
    value: fade,
    onChange: onChangeFade,
    options: [{
      value: '',
      label: 'none'
    }, {
      value: 'fade-up',
      label: 'up'
    }, {
      value: 'fade-down',
      label: 'down'
    }, {
      value: 'fade-left',
      label: 'left'
    }, {
      value: 'fade-right',
      label: 'right'
    }, {
      value: 'fade-up-right',
      label: 'up-right'
    }, {
      value: 'fade-up-left',
      label: 'up-left'
    }, {
      value: 'fade-down-right',
      label: 'down-right'
    }, {
      value: 'fade-down-left',
      label: 'down-left'
    }]
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Flip Animation"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: 'Select flip direction:',
    value: flip,
    onChange: onChangeFlip,
    options: [{
      value: '',
      label: 'none'
    }, {
      value: 'flip-up',
      label: 'up'
    }, {
      value: 'flip-down',
      label: 'down'
    }, {
      value: 'flip-left',
      label: 'left'
    }, {
      value: 'flip-right',
      label: 'right'
    }]
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Slide Animation"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: 'Select slide direction:',
    value: slide,
    onChange: onChangeSlide,
    options: [{
      value: '',
      label: 'none'
    }, {
      value: 'slide-up',
      label: 'up'
    }, {
      value: 'slide-down',
      label: 'down'
    }, {
      value: 'slide-left',
      label: 'left'
    }, {
      value: 'slide-right',
      label: 'right'
    }]
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Zoom Animation"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: 'Select zoom direction:',
    value: zoom,
    onChange: onChangeZoom,
    options: [{
      value: '',
      label: 'none'
    }, {
      value: 'zoom-in',
      label: 'in'
    }, {
      value: 'zoom-in-up',
      label: 'in-up'
    }, {
      value: 'zoom-in-down',
      label: 'in-down'
    }, {
      value: 'zoom-in-left',
      label: 'in-left'
    }, {
      value: 'zoom-in-right',
      label: 'in-right'
    }, {
      value: 'zoom-out',
      label: 'out'
    }, {
      value: 'zoom-out-up',
      label: 'out-up'
    }, {
      value: 'zoom-out-down',
      label: 'out-down'
    }, {
      value: 'zoom-out-left',
      label: 'out-left'
    }, {
      value: 'zoom-out-right',
      label: 'out-right'
    }]
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Anchor Placement"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: 'Defines which position of the element regarding to window should trigger the animation (element-window):',
    value: anchorPlacement,
    onChange: onChangeAnchorPlacement,
    options: [{
      value: 'top-bottom',
      label: 'top-bottom'
    }, {
      value: 'top-center',
      label: 'top-center'
    }, {
      value: 'top-top',
      label: 'top-top'
    }, {
      value: 'center-bottom',
      label: 'center-bottom'
    }, {
      value: 'center-center',
      label: 'center-center'
    }, {
      value: 'center-top',
      label: 'center-top'
    }, {
      value: 'bottom-bottom',
      label: 'bottom-bottom'
    }, {
      value: 'bottom-center',
      label: 'bottom-center'
    }, {
      value: 'bottom-top',
      label: 'bottom-top'
    }]
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Easing"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: 'Select the option:',
    value: easing,
    onChange: onChangeEasing,
    options: [{
      value: 'ease',
      label: 'ease'
    }, {
      value: 'linear',
      label: 'linear'
    }, {
      value: 'ease-in',
      label: 'ease-in'
    }, {
      value: 'ease-out',
      label: 'ease-out'
    }, {
      value: 'ease-in-out',
      label: 'ease-in-out'
    }, {
      value: 'ease-in-back',
      label: 'ease-in-back'
    }, {
      value: 'ease-out-back',
      label: 'ease-out-back'
    }, {
      value: 'ease-in-out-back',
      label: 'ease-in-out-back'
    }, {
      value: 'ease-in-sine',
      label: 'ease-in-sine'
    }, {
      value: 'ease-out-sine',
      label: 'ease-out-sine'
    }, {
      value: 'ease-in-out-sine',
      label: 'ease-in-out-sine'
    }, {
      value: 'ease-in-quad',
      label: 'ease-in-quad'
    }, {
      value: 'ease-out-quad',
      label: 'ease-out-quad'
    }, {
      value: 'ease-in-out-quad',
      label: 'ease-in-out-quad'
    }, {
      value: 'ease-in-cubic',
      label: 'ease-in-cubic'
    }, {
      value: 'ease-out-cubic',
      label: 'ease-out-cubic'
    }, {
      value: 'ease-in-out-cubic',
      label: 'ease-in-out-cubic'
    }, {
      value: 'ease-in-quart',
      label: 'ease-in-quart'
    }, {
      value: 'ease-out-quart',
      label: 'ease-out-quart'
    }, {
      value: 'ease-in-out-quart',
      label: 'ease-in-out-quart'
    }]
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Offset"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Offset (in px) from the original trigger point",
    value: offset,
    onChange: onChangeOffset,
    step: 50,
    min: 0,
    max: 4000,
    initialPosition: 150
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Delay"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Values from 0 to 3000, with step 50ms",
    value: delay,
    onChange: onChangeDelay,
    step: 50,
    min: 0,
    max: 4000,
    initialPosition: 0
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Duration"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Values from 0 to 3000, with step 50ms",
    value: duration,
    onChange: onChangeDuration,
    step: 50,
    min: 0,
    max: 4000,
    initialPosition: 400
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Whether animation should happen only once - while scrolling down",
    help: once ? 'only while scrolling down' : 'every time the trigger has reached',
    checked: once,
    onChange: onChangeOnce
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/aos-control/index.js":
/*!******************************************************!*\
  !*** ./src/js/gutenberg/blocks/aos-control/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/aos-control/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/js/gutenberg/blocks/aos-control/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('smaw-blocks/aos-control', {
  title: 'Smaw AOS Control',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Controller for AOS - Animation On Scroll', 'smaw'),
  icon: 'controls-play',
  category: 'smaw-blocks',
  attributes: {
    aosActive: {
      type: 'boolean',
      default: false
    },
    fade: {
      type: 'string',
      default: ''
    },
    flip: {
      type: 'string',
      default: ''
    },
    slide: {
      type: 'string',
      default: ''
    },
    zoom: {
      type: 'string',
      default: ''
    },
    offset: {
      type: 'number',
      default: 150
    },
    delay: {
      type: 'number',
      default: 0
    },
    duration: {
      type: 'number',
      default: 400
    },
    easing: {
      type: 'string',
      default: 'ease'
    },
    anchorPlacement: {
      type: 'string',
      default: 'top-bottom'
    },
    once: {
      type: 'boolean',
      default: false
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_3__.default
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/aos-control/save.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/aos-control/save.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var fade = attributes.fade,
      flip = attributes.flip,
      slide = attributes.slide,
      zoom = attributes.zoom,
      offset = attributes.offset,
      delay = attributes.delay,
      duration = attributes.duration,
      easing = attributes.easing,
      anchorPlacement = attributes.anchorPlacement,
      once = attributes.once;
  return /*#__PURE__*/React.createElement("div", {
    "data-aos": fade + flip + slide + zoom,
    "data-aos-anchor-placement": anchorPlacement,
    "data-aos-easing": easing,
    "data-aos-duration": duration,
    "data-aos-delay": delay,
    "data-aos-offset": offset,
    "data-aos-once": once
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/js/gutenberg/blocks/background/edit.js":
/*!****************************************************!*\
  !*** ./src/js/gutenberg/blocks/background/edit.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);




var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var imgUrl = attributes.imgUrl,
      backgroundColor = attributes.backgroundColor,
      focalPoints = attributes.focalPoints,
      repeat = attributes.repeat,
      sizeX = attributes.sizeX,
      sizeY = attributes.sizeY;

  function onChangeImgUrl(media) {
    var photo = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(media, ['sizes', 'full', 'url']) || lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(media, ['media_details', 'sizes', 'full', 'source_url']);
    setAttributes({
      imgUrl: photo
    });
  }

  function onChangeBackgroundColor(newColor) {
    var rgbaColor = "rgba(".concat(newColor.rgb.r, ",").concat(newColor.rgb.g, ",").concat(newColor.rgb.b, ",").concat(newColor.rgb.a, ")");
    setAttributes({
      backgroundColor: rgbaColor
    });
  }

  function onChangeFocalPoints(newFocalPoints) {
    setAttributes({
      focalPoints: newFocalPoints
    });
  }

  function onChangeRepeat(newValue) {
    setAttributes({
      repeat: newValue
    });
  }

  function onChangeSizeX(newValue) {
    setAttributes({
      sizeX: newValue
    });
  }

  function onChangeSizeY(newValue) {
    setAttributes({
      sizeY: newValue
    });
  }

  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    style: {
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Background Image"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaPlaceholder, {
    key: 0,
    style: {
      width: '100%',
      height: '100%'
    },
    icon: "format-image",
    labels: {
      title: 'Media area'
    },
    className: "block-image image",
    onSelect: onChangeImgUrl,
    accept: "image/*",
    allowedTypes: ['image']
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Background Color"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    color: backgroundColor,
    onChangeComplete: onChangeBackgroundColor
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FocalPointPicker, {
    value: focalPoints,
    onChange: onChangeFocalPoints
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "X background size",
    value: sizeX,
    onChange: onChangeSizeX,
    min: 0,
    max: 100,
    initialPosition: 100
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Y background size",
    value: sizeY,
    onChange: onChangeSizeY,
    min: 0,
    max: 100,
    initialPosition: 0
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "repeat",
    checked: repeat,
    onChange: onChangeRepeat
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: imgUrl != '' ? "url(".concat(imgUrl, ")") : '',
      backgroundColor: backgroundColor,
      backgroundPosition: "".concat((1 - focalPoints.x) * 100, "% ").concat(focalPoints.y * 100, "%"),
      backgroundSize: "".concat(sizeX != 0 ? sizeX + '%' : 'auto', " ").concat(sizeY != 0 ? sizeY + '%' : 'auto'),
      backgroundRepeat: repeat ? 'repeat' : 'no-repeat'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/background/index.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/background/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/background/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/js/gutenberg/blocks/background/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('smaw-blocks/background', {
  title: 'Smaw Background',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background image', 'smaw'),
  icon: 'format-image',
  category: 'smaw-blocks',
  supports: {
    align: ['left', 'right', 'full', 'wide']
  },
  attributes: {
    imgUrl: {
      type: 'string',
      default: ''
    },
    backgroundColor: {
      type: 'string',
      default: ''
    },
    focalPoints: {
      type: 'object',
      default: {
        x: 0.5,
        y: 0.5
      }
    },
    repeat: {
      type: 'boolean',
      default: false
    },
    sizeX: {
      type: 'number',
      default: '100'
    },
    sizeY: {
      type: 'number',
      default: '0'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_3__.default
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/background/save.js":
/*!****************************************************!*\
  !*** ./src/js/gutenberg/blocks/background/save.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var imgUrl = attributes.imgUrl,
      backgroundColor = attributes.backgroundColor,
      focalPoints = attributes.focalPoints,
      repeat = attributes.repeat,
      sizeX = attributes.sizeX,
      sizeY = attributes.sizeY;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: imgUrl != '' ? "url(".concat(imgUrl, ")") : '',
      backgroundColor: backgroundColor,
      backgroundPosition: "".concat((1 - focalPoints.x) * 100, "% ").concat(focalPoints.y * 100, "%"),
      backgroundSize: "".concat(sizeX != 0 ? sizeX + '%' : 'auto', " ").concat(sizeY != 0 ? sizeY + '%' : 'auto'),
      backgroundRepeat: repeat ? 'repeat' : 'no-repeat'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/js/gutenberg/blocks/image-width-desc/edit.js":
/*!**********************************************************!*\
  !*** ./src/js/gutenberg/blocks/image-width-desc/edit.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var id = attributes.id,
      images = attributes.images,
      imageWidth = attributes.imageWidth,
      imageWidthSave = attributes.imageWidthSave,
      imageHeight = attributes.imageHeight,
      rowDirection = attributes.rowDirection,
      responsiveReverse = attributes.responsiveReverse,
      innerBlockWidth = attributes.innerBlockWidth;

  function onChangeImagesUrl(media) {
    console.log(media); //let newUrl = get( media, [ 'sizes', 'full', 'url' ] ) || get( media, [ 'media_details', 'sizes', 'full', 'source_url' ] );

    var newId;
    var tmpMediaUrls = [];
    media.forEach(function (m, i) {
      var photo = get(m, ['sizes', 'full', 'url']) || get(m, ['media_details', 'sizes', 'full', 'source_url']);
      tmpMediaUrls.push(photo);
      console.log(photo);
      if (i == 0) newId = get(m, ['id']);
    });
    setAttributes({
      images: tmpMediaUrls
    });
    setAttributes({
      id: 'id' + newId
    });
  }

  function onChangeRowDirection() {
    setAttributes({
      rowDirection: !rowDirection
    });
  }

  function onResizeStop(event, direction, elt, delta) {
    var actualImageWidth = parseInt(imageWidth, 10) + delta.width;
    var actualImageHeight = parseInt(imageHeight, 10) + delta.height;
    setAttributes({
      imageWidth: actualImageWidth + 'px'
    });
    setAttributes({
      imageHeight: actualImageHeight + 'px'
    });
    console.log(wpBlockWidth + ' - ' + wpBlockImageWidth + ' = ' + innerBlockWidth);
    console.log(wpBlockWidth - wpBlockImageWidth + 'px');
    var wpBlockWidth = document.querySelector('.tc-row').offsetWidth;
    var wpBlockImageWidth = document.querySelector('.tc-col-image' + id ? ".".concat(id) : 0).offsetWidth;
    setAttributes({
      innerBlockWidth: wpBlockWidth - wpBlockImageWidth + 'px'
    });
    setAttributes({
      imageWidthSave: parseInt(actualImageWidth / wpBlockWidth * 100) + '%'
    });
    console.log(parseInt(wpBlockImageWidth / wpBlockWidth * 100) + '%');
    toggleSelection(true);
  }

  function onChangeResponsiveReverse() {
    setAttributes({
      responsiveReverse: !responsiveReverse
    });
  }

  console.log(responsiveReverse);
  console.log(rowDirection ? 'tc-row__reverse' : '');
  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    style: {
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Set Line Width"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaPlaceholder, {
    key: 0,
    style: {
      imageWidth: '100%',
      height: '100%'
    },
    icon: "format-image",
    labels: {
      title: 'Media area'
    },
    className: "block-image image",
    onSelect: onChangeImagesUrl,
    accept: "image/*",
    allowedTypes: ['image'],
    multiple: "true"
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Row Direction Control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Row Direction",
    checked: rowDirection,
    onChange: onChangeRowDirection
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Responsive Control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "responsive reverse",
    checked: responsiveReverse,
    onChange: onChangeResponsiveReverse
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tc-row ".concat(rowDirection ? 'tc-row__reverse' : '', " ").concat(responsiveReverse ? 'responsive-reverse' : ''),
    style: {
      backgroundColor: backgroundColor
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ResizableBox, {
    size: {
      imageWidth: imageWidth,
      imageHeight: imageHeight
    },
    minHeight: "50",
    minWidth: "50",
    enable: {
      top: true,
      right: true,
      bottom: true,
      left: true,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false
    },
    onResizeStop: onResizeStop,
    onResizeStart: function onResizeStart() {
      var wpBlockImageWidth = document.querySelector('.tc-col-image' + id ? ".".concat(id) : 0).offsetWidth;
      var wpBlockImageHeight = document.querySelector('.tc-col-image' + id ? ".".concat(id) : 0).offsetHeight;
      setAttributes({
        imageWidth: wpBlockImageWidth
      });
      setAttributes({
        imageHeight: wpBlockImageHeight
      });
      toggleSelection(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tc-col-image editor " + id,
    style: {
      width: imageWidth,
      height: imageHeight
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tc-col-image-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: images[0],
    style: {
      opacity: 1
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tc-col-inner-blocks",
    style: {
      width: innerBlockWidth
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null)))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/image-width-desc/index.js":
/*!***********************************************************!*\
  !*** ./src/js/gutenberg/blocks/image-width-desc/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/image-width-desc/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/js/gutenberg/blocks/image-width-desc/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('smaw-blocks/image-with-desc', {
  title: 'Image With Description',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image Width Description', 'smaw'),
  icon: 'align-pull-left',
  category: 'smaw-blocks',
  attributes: {
    id: {
      type: 'string',
      default: ''
    },
    images: {
      type: 'array',
      default: []
    },
    imageWidth: {
      type: 'string',
      default: ''
    },
    imageWidthSave: {
      type: 'string',
      default: '50%'
    },
    imageHeight: {
      type: 'string',
      default: '500'
    },
    rowDirection: {
      type: 'boolean',
      default: 'false'
    },
    responsiveReverse: {
      type: 'boolean',
      default: false
    },
    innerBlockWidth: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_3__.default
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/image-width-desc/save.js":
/*!**********************************************************!*\
  !*** ./src/js/gutenberg/blocks/image-width-desc/save.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


var Save = function Save(_ref) {
  var attributes = _ref.attributes;
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/js/gutenberg/blocks/image/edit.js":
/*!***********************************************!*\
  !*** ./src/js/gutenberg/blocks/image/edit.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);




var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      toggleSelection = _ref.toggleSelection;
  var imagesSrc = attributes.imagesSrc,
      imagesHeight = attributes.imagesHeight,
      imagesWidth = attributes.imagesWidth,
      imagesWidthOverflow = attributes.imagesWidthOverflow;

  function onChangeImagesSrc(media) {
    var tmpImagesSrc = [];
    var tmpImagesWidth = [];
    console.log(media);
    media.forEach(function (m) {
      var url = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(m, ['sizes', 'full', 'url']) || lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(m, ['media_details', 'sizes', 'full', 'source_url']);
      var width = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(m, ['sizes', 'full', 'width']) || lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(m, ['media_details', 'sizes', 'full', 'width']);
      tmpImagesWidth.push(width);
      tmpImagesSrc.push(url);
    });
    setAttributes({
      imagesSrc: tmpImagesSrc
    });
    setAttributes({
      imagesWidth: tmpImagesWidth
    });
  }

  console.log(imagesSrc);

  function onChangeImagesWidthOverflow() {
    setAttributes({
      imagesWidthOverflow: !imagesWidthOverflow
    });
    console.log(imagesWidthOverflow);
  }

  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Select the image/images"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaPlaceholder, {
    key: 0,
    style: {
      width: '100%',
      height: '100%'
    },
    icon: "format-image",
    labels: {
      title: 'Media area'
    },
    className: "block-image image",
    onSelect: onChangeImagesSrc,
    accept: "image/*",
    allowedTypes: ['image'],
    multiple: "true"
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Width Overflow",
    checked: imagesWidthOverflow,
    onChange: onChangeImagesWidthOverflow
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ResizableBox, {
    size: {
      width: '100%',
      height: imagesHeight
    },
    minHeight: "50",
    minWidth: "50",
    enable: {
      top: false,
      right: false,
      bottom: true,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false
    },
    onResizeStop: function onResizeStop(event, direction, elt, delta) {
      setAttributes({
        imagesHeight: parseInt(imagesHeight, 10) + delta.height + 'px'
      });
      toggleSelection(true);
    },
    onResizeStart: function onResizeStart() {
      toggleSelection(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-container",
    style: {
      height: imagesHeight
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: imagesSrc[0],
    style: {
      display: 'block',
      height: '100%',
      minWidth: "".concat(imagesWidthOverflow ? imagesWidth[0] + 'px' : 'auto'),
      opacity: 1
    }
  })))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/image/index.js":
/*!************************************************!*\
  !*** ./src/js/gutenberg/blocks/image/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/image/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/js/gutenberg/blocks/image/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('smaw-blocks/custom-image', {
  title: 'Smaw Image',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image with custom properties', 'smaw'),
  icon: 'format-image',
  category: 'smaw-blocks',
  attributes: {
    imagesSrc: {
      type: 'array',
      default: []
    },
    imagesHeight: {
      type: 'string',
      default: '500px'
    },
    imagesWidthOverflow: {
      type: 'boolean',
      default: false
    },
    imagesWidth: {
      type: 'array',
      default: []
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_3__.default
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/image/save.js":
/*!***********************************************!*\
  !*** ./src/js/gutenberg/blocks/image/save.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var imagesSrc = attributes.imagesSrc,
      imagesHeight = attributes.imagesHeight,
      imagesWidth = attributes.imagesWidth,
      imagesWidthOverflow = attributes.imagesWidthOverflow;
  return /*#__PURE__*/React.createElement("div", {
    className: "image-container",
    style: {
      height: imagesHeight
    }
  }, imagesSrc.map(function (image, i) {
    return /*#__PURE__*/React.createElement("img", {
      className: "".concat(i == 0 ? 'foreground' : ''),
      src: image,
      style: {
        display: 'block',
        height: '100%',
        minWidth: "".concat(imagesWidthOverflow ? imagesWidth[i] + 'px' : 'auto')
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/js/gutenberg/blocks/mp-control/edit.js":
/*!****************************************************!*\
  !*** ./src/js/gutenberg/blocks/mp-control/edit.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);




var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var margin = attributes.margin,
      padding = attributes.padding;

  function onChangeMargin(newMargin) {
    setAttributes({
      margin: newMargin
    });
  }

  function onChangePadding(newPadding) {
    setAttributes({
      padding: newPadding
    });
  }

  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    style: {
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Margin Control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    values: margin,
    onChange: onChangeMargin
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Padding Control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    values: padding,
    onChange: onChangePadding
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: padding.top,
      paddingBottom: padding.bottom,
      paddingLeft: padding.left,
      paddingRight: padding.right,
      marginTop: margin.top,
      marginBottom: margin.bottom,
      marginLeft: margin.left,
      marginRight: margin.right
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/mp-control/index.js":
/*!*****************************************************!*\
  !*** ./src/js/gutenberg/blocks/mp-control/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/mp-control/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/js/gutenberg/blocks/mp-control/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('smaw-blocks/mp-control', {
  title: 'Smaw MP Control',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin Padding Controller', 'smaw'),
  icon: 'editor-expand',
  category: 'smaw-blocks',
  attributes: {
    margin: {
      type: 'object',
      default: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0'
      }
    },
    padding: {
      type: 'object',
      default: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0'
      }
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_3__.default
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/mp-control/save.js":
/*!****************************************************!*\
  !*** ./src/js/gutenberg/blocks/mp-control/save.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var margin = attributes.margin,
      padding = attributes.padding;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: padding.top,
      paddingBottom: padding.bottom,
      paddingLeft: padding.left,
      paddingRight: padding.right,
      marginTop: margin.top,
      marginBottom: margin.bottom,
      marginLeft: margin.left,
      marginRight: margin.right
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/js/gutenberg/blocks/parallax-background/edit.js":
/*!*************************************************************!*\
  !*** ./src/js/gutenberg/blocks/parallax-background/edit.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);




var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      toggleSelection = _ref.toggleSelection;
  var imageSrc = attributes.imageSrc,
      imageZoom = attributes.imageZoom,
      centering = attributes.centering,
      positionX = attributes.positionX,
      positionY = attributes.positionY,
      speed = attributes.speed,
      speedXs = attributes.speedXs,
      speedMobile = attributes.speedMobile,
      speedTablet = attributes.speedTablet,
      speedDesktop = attributes.speedDesktop,
      sectionHeight = attributes.sectionHeight,
      sectionWidth = attributes.sectionWidth,
      zIndex = attributes.zIndex;

  function onChangeImageSrc(media) {
    var src = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(media, ['sizes', 'full', 'url']) || lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(media, ['media_details', 'sizes', 'full', 'source_url']);
    setAttributes({
      imageSrc: src
    });
  }

  function onChangeImageZoom(newZoom) {
    setAttributes({
      imageZoom: newZoom
    });
  }

  function onChangePositionX(newPosition) {
    setAttributes({
      positionX: newPosition
    });
  }

  function onChangePositionY(newPosition) {
    setAttributes({
      positionY: newPosition
    });
  }

  function onChangeSpeed(newSpeed) {
    setAttributes({
      speed: newSpeed
    });
  }

  function onChangeSpeedXs(newSpeed) {
    setAttributes({
      speedXs: newSpeed
    });
  }

  function onChangeSpeedMobile(newSpeed) {
    setAttributes({
      speedMobile: newSpeed
    });
  }

  function onChangeSpeedTablet(newSpeed) {
    setAttributes({
      speedTablet: newSpeed
    });
  }

  function onChangeSpeedDesktop(newSpeed) {
    setAttributes({
      speedDesktop: newSpeed
    });
  }

  function onChangezIndex(newzIndex) {
    setAttributes({
      zIndex: newzIndex
    });
  }

  function onChangeCentering() {
    setAttributes({
      centering: !centering
    });
  }

  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    style: {
      marginBottom: 'px'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Select Image"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaPlaceholder, {
    key: 0,
    style: {
      videoWidth: '100%',
      height: '100%'
    },
    icon: "format-image",
    labels: {
      title: 'Media area'
    },
    className: "block-image image",
    onSelect: onChangeImageSrc,
    accept: "image/*",
    allowedTypes: ['image']
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: 'Position'
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: 'Zoom:',
    value: imageZoom,
    onChange: onChangeImageZoom,
    min: 100,
    max: 200
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: 'Horizontal Position:',
    value: positionX,
    onChange: onChangePositionX,
    min: -100,
    max: 100
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: 'Vertical Position:',
    value: positionY,
    onChange: onChangePositionY,
    min: -100,
    max: 100
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Speed"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "speed",
    value: speed,
    onChange: onChangeSpeed,
    min: -10,
    max: 10,
    initialPosition: 0.2
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "speed xs",
    value: speedXs,
    onChange: onChangeSpeedXs,
    min: -10,
    max: 10
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "speed mobile",
    value: speedMobile,
    onChange: onChangeSpeedMobile,
    min: -10,
    max: 10
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "speed tablet",
    value: speedTablet,
    onChange: onChangeSpeedTablet,
    min: -10,
    max: 10
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "speed desktop",
    value: speedDesktop,
    onChange: onChangeSpeedDesktop,
    min: -10,
    max: 10
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "z-index"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "z-index",
    value: zIndex,
    onChange: onChangezIndex,
    min: -100,
    max: 100,
    initialPosition: 0
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Centering"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "centering",
    help: centering ? 'Active' : 'Deactive',
    checked: centering,
    onChange: onChangeCentering
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ResizableBox, {
    size: {
      sectionWidth: sectionWidth,
      sectionHeight: sectionHeight
    },
    minHeight: "50",
    minWidth: "50",
    enable: {
      top: false,
      right: false,
      bottom: true,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false
    },
    onResizeStop: function onResizeStop(event, direction, elt, delta) {
      setAttributes({
        sectionHeight: parseInt(sectionHeight, 10) + delta.height
      });
      toggleSelection(true);
    },
    onResizeStart: function onResizeStart() {
      toggleSelection(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "parallax-container",
    style: {
      height: sectionHeight
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rellax",
    "data-rellax-speed": speed,
    "data-rellax-xs-speed": speedXs,
    "data-rellax-mobile-speed": speedMobile,
    "data-rellax-tablet-speed": speedTablet,
    "data-rellax-desktop-speed": speedDesktop,
    "data-rellax-percentage": centering ? '0.5' : '',
    style: {
      backgroundPositionX: "".concat(positionX, "%"),
      height: "".concat(imageZoom, "%"),
      top: "".concat(positionY, "%"),
      zIndex: zIndex,
      backgroundImage: "url('".concat(imageSrc, "')")
    }
  })))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/parallax-background/index.js":
/*!**************************************************************!*\
  !*** ./src/js/gutenberg/blocks/parallax-background/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/parallax-background/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/js/gutenberg/blocks/parallax-background/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('smaw-blocks/parallax-background', {
  title: 'Smaw Parallax Background',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Parallax Background Image', 'smaw'),
  icon: 'format-image',
  category: 'smaw-blocks',
  attributes: {
    imageSrc: {
      type: 'string',
      default: ''
    },
    imageZoom: {
      type: 'number',
      default: 0
    },
    centering: {
      type: 'boolean',
      default: true
    },
    speed: {
      type: 'number',
      default: 0.2
    },
    speedXs: {
      type: 'number',
      default: 0
    },
    speedMobile: {
      type: 'number',
      default: 0
    },
    speedTablet: {
      type: 'number',
      default: 0
    },
    speedDesktop: {
      type: 'number',
      default: 0
    },
    zIndex: {
      type: 'number',
      default: 0
    },
    sectionHeight: {
      type: 'number',
      default: 400
    },
    sectionWidth: {
      type: 'number',
      default: 100
    },
    positionX: {
      type: 'number',
      default: 0
    },
    positionY: {
      type: 'number',
      default: 0
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_3__.default
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/parallax-background/save.js":
/*!*************************************************************!*\
  !*** ./src/js/gutenberg/blocks/parallax-background/save.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var imageSrc = attributes.imageSrc,
      imageZoom = attributes.imageZoom,
      centering = attributes.centering,
      positionX = attributes.positionX,
      positionY = attributes.positionY,
      speed = attributes.speed,
      speedXs = attributes.speedXs,
      speedMobile = attributes.speedMobile,
      speedTablet = attributes.speedTablet,
      speedDesktop = attributes.speedDesktop,
      sectionHeight = attributes.sectionHeight,
      sectionWidth = attributes.sectionWidth,
      zIndex = attributes.zIndex;
  return /*#__PURE__*/React.createElement("div", {
    className: "parallax-container",
    style: {
      height: sectionHeight
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rellax",
    "data-rellax-speed": speed,
    "data-rellax-xs-speed": speedXs,
    "data-rellax-mobile-speed": speedMobile,
    "data-rellax-tablet-speed": speedTablet,
    "data-rellax-desktop-speed": speedDesktop,
    "data-rellax-percentage": centering ? '0.5' : '',
    style: {
      backgroundPositionX: "".concat(positionX, "%"),
      height: "".concat(imageZoom, "%"),
      top: "".concat(positionY, "%"),
      zIndex: zIndex,
      backgroundImage: "url('".concat(imageSrc, "')")
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/js/gutenberg/blocks/positioning-control/edit.js":
/*!*************************************************************!*\
  !*** ./src/js/gutenberg/blocks/positioning-control/edit.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);




var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var position = attributes.position,
      displacement = attributes.displacement;

  function onChangeDisplacement(newValues) {
    var newDisplacement = {};

    for (var value in newValues) {
      if (newValues[value].charAt(0) == '0') newDisplacement[value] = '';else newDisplacement[value] = newValues[value];
      console.log("".concat(value, ": ").concat(newValues[value]));
    }

    setAttributes({
      displacement: newDisplacement
    });
  }

  function onChangePosition(newValue) {
    setAttributes({
      position: newValue
    });
  }

  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    style: {
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: 'Positioning:',
    value: position,
    onChange: onChangePosition,
    options: [{
      value: null,
      label: 'Select positiion',
      disabled: true
    }, {
      value: 'relative',
      label: 'relative'
    }, {
      value: 'absolute',
      label: 'absolute'
    }]
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Displacement Control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    values: displacement,
    onChange: onChangeDisplacement
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: position,
      top: displacement.top,
      bottom: displacement.bottom,
      left: displacement.left,
      right: displacement.right
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/positioning-control/index.js":
/*!**************************************************************!*\
  !*** ./src/js/gutenberg/blocks/positioning-control/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/positioning-control/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/js/gutenberg/blocks/positioning-control/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('smaw-blocks/positioning-control', {
  title: 'Smaw Positioning Control',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Relative/Absolute Position Control', 'smaw'),
  icon: 'move',
  category: 'smaw-blocks',
  attributes: {
    position: {
      type: 'string',
      default: 'relative'
    },
    displacement: {
      type: 'object',
      default: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0'
      }
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_3__.default
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/positioning-control/save.js":
/*!*************************************************************!*\
  !*** ./src/js/gutenberg/blocks/positioning-control/save.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var position = attributes.position,
      displacement = attributes.displacement;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: position,
      top: displacement.top,
      bottom: displacement.bottom,
      left: displacement.left,
      right: displacement.right
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/js/gutenberg/blocks/sizes-control/edit.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/sizes-control/edit.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var maxWidthActive = attributes.maxWidthActive,
      maxWidth = attributes.maxWidth,
      maxHeightActive = attributes.maxHeightActive,
      maxHeight = attributes.maxHeight,
      minWidthActive = attributes.minWidthActive,
      minWidth = attributes.minWidth,
      minHeightActive = attributes.minHeightActive,
      minHeight = attributes.minHeight,
      sectionAlignment = attributes.sectionAlignment;

  function onChangeMaxWidthActive() {
    setAttributes({
      maxWidthActive: !maxWidthActive
    });
  }

  function onChangeMaxHeightActive() {
    setAttributes({
      maxHeightActive: !maxHeightActive
    });
  }

  function onChangeMinWidthActive() {
    setAttributes({
      minWidthActive: !minWidthActive
    });
  }

  function onChangeMinHeightActive() {
    setAttributes({
      minHeightActive: !minHeightActive
    });
  }

  function onChangeMaxWidth(newValue) {
    setAttributes({
      maxWidth: newValue
    });
  }

  function onChangeMaxHeight(newValue) {
    setAttributes({
      maxHeight: newValue
    });
  }

  function onChangeMinWidth(newValue) {
    setAttributes({
      minWidth: newValue
    });
  }

  function onChangeMinHeight(newValue) {
    setAttributes({
      minHeight: newValue
    });
  }

  function onChangeSectionAlignment(newAlignment) {
    setAttributes({
      sectionAlignment: newAlignment
    });
  }

  return [/*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    style: {
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Max Width",
    help: maxWidthActive ? 'Active' : 'Deactive',
    checked: maxWidthActive,
    onChange: onChangeMaxWidthActive
  }), maxWidthActive ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Max Width Value",
    value: maxWidth,
    onChange: onChangeMaxWidth,
    min: 0,
    max: 2000
  }) : ''), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Max Height",
    help: maxHeightActive ? 'Active' : 'Deactive',
    checked: maxHeightActive,
    onChange: onChangeMaxHeightActive
  }), maxHeightActive ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Max Height Value",
    value: maxHeight,
    onChange: onChangeMaxHeight,
    min: 0,
    max: 2000
  }) : ''), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Min Width",
    help: minWidthActive ? 'Active' : 'Deactive',
    checked: minWidthActive,
    onChange: onChangeMinWidthActive
  }), minWidthActive ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Min Width Value",
    value: minWidth,
    onChange: onChangeMinWidth,
    min: 0,
    max: 2000
  }) : ''), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Min Height",
    help: minHeightActive ? 'Active' : 'Deactive',
    checked: minHeightActive,
    onChange: onChangeMinHeightActive
  }), minHeightActive ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Min Height Value",
    value: minHeight,
    onChange: onChangeMinHeight,
    min: 0,
    max: 2000
  }) : ''), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Alignment"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    value: sectionAlignment,
    onChange: onChangeSectionAlignment,
    options: [{
      value: null,
      label: 'Select an Alignment',
      disabled: true
    }, {
      value: '',
      label: 'none'
    }, {
      value: 'mr-a',
      label: 'left'
    }, {
      value: 'mx-a',
      label: 'center'
    }, {
      value: 'ml-a',
      label: 'right'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: sectionAlignment + " sizes-control",
    style: {
      maxWidth: maxWidthActive ? maxWidth : 'none',
      maxHeight: maxHeightActive ? maxHeight : 'none',
      minWidth: minWidthActive ? minWidth : 'none',
      minHeight: minHeightActive ? minHeight : 'none'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, null))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/sizes-control/index.js":
/*!********************************************************!*\
  !*** ./src/js/gutenberg/blocks/sizes-control/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/sizes-control/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/js/gutenberg/blocks/sizes-control/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('smaw-blocks/sizes-control', {
  title: 'Smaw Sizes Control',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Max/Min Width Control', 'smaw'),
  icon: 'image-flip-horizontal',
  category: 'smaw-blocks',
  attributes: {
    maxWidthActive: {
      type: 'boolean',
      default: false
    },
    maxWidth: {
      type: 'number',
      default: 600
    },
    maxHeightActive: {
      type: 'boolean',
      default: false
    },
    maxHeight: {
      type: 'number',
      default: 600
    },
    minWidthActive: {
      type: 'boolean',
      default: false
    },
    minWidth: {
      type: 'number',
      default: 600
    },
    minHeightActive: {
      type: 'boolean',
      default: false
    },
    minHeight: {
      type: 'number',
      default: 600
    },
    sectionAlignment: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_3__.default
});

/***/ }),

/***/ "./src/js/gutenberg/blocks/sizes-control/save.js":
/*!*******************************************************!*\
  !*** ./src/js/gutenberg/blocks/sizes-control/save.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var maxWidthActive = attributes.maxWidthActive,
      maxWidth = attributes.maxWidth,
      maxHeightActive = attributes.maxHeightActive,
      maxHeight = attributes.maxHeight,
      minWidthActive = attributes.minWidthActive,
      minWidth = attributes.minWidth,
      minHeightActive = attributes.minHeightActive,
      minHeight = attributes.minHeight,
      sectionAlignment = attributes.sectionAlignment;
  return /*#__PURE__*/React.createElement("div", {
    className: sectionAlignment + " sizes-control",
    style: {
      maxWidth: maxWidthActive ? maxWidth : 'none',
      maxHeight: maxHeightActive ? maxHeight : 'none',
      minWidth: minWidthActive ? minWidth : 'none',
      minHeight: minHeightActive ? minHeight : 'none'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ (function(module) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ (function(module) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ (function(module) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ (function(module) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./src/sass/blocks.scss":
/*!******************************!*\
  !*** ./src/sass/blocks.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./src/js/blocks.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_blocks_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/blocks.scss */ "./src/sass/blocks.scss");
/* harmony import */ var _gutenberg_blocks_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutenberg/blocks/background */ "./src/js/gutenberg/blocks/background/index.js");
/* harmony import */ var _gutenberg_blocks_mp_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gutenberg/blocks/mp-control */ "./src/js/gutenberg/blocks/mp-control/index.js");
/* harmony import */ var _gutenberg_blocks_sizes_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gutenberg/blocks/sizes-control */ "./src/js/gutenberg/blocks/sizes-control/index.js");
/* harmony import */ var _gutenberg_blocks_positioning_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gutenberg/blocks/positioning-control */ "./src/js/gutenberg/blocks/positioning-control/index.js");
/* harmony import */ var _gutenberg_blocks_aos_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gutenberg/blocks/aos-control */ "./src/js/gutenberg/blocks/aos-control/index.js");
/* harmony import */ var _gutenberg_blocks_parallax_background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gutenberg/blocks/parallax-background */ "./src/js/gutenberg/blocks/parallax-background/index.js");
/* harmony import */ var _gutenberg_blocks_image_width_desc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gutenberg/blocks/image-width-desc */ "./src/js/gutenberg/blocks/image-width-desc/index.js");
/* harmony import */ var _gutenberg_blocks_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gutenberg/blocks/image */ "./src/js/gutenberg/blocks/image/index.js");









/* let sliders = jQuery('.image-container');

Array.from($(sliders)).forEach((slider) => {
    let slides = Array.from($(slider).find('img'));
    setInterval(() => {
        $(slides[0]).removeClass('foreground');
        slides.push(slides.shift());
        $(slides[0]).addClass('foreground');
    },2000)
})

 */
}();
/******/ })()
;
//# sourceMappingURL=blocks.js.map