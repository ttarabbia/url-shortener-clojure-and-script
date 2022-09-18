["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/style/transition.js"],"~:js","goog.provide(\"goog.style.transition\");\ngoog.provide(\"goog.style.transition.Css3Property\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.dom\");\ngoog.require(\"goog.dom.TagName\");\ngoog.require(\"goog.dom.safe\");\ngoog.require(\"goog.dom.vendor\");\ngoog.require(\"goog.functions\");\ngoog.require(\"goog.html.SafeHtml\");\ngoog.require(\"goog.style\");\ngoog.require(\"goog.userAgent\");\ngoog.style.transition.Css3Property;\ngoog.style.transition.set = function(element, properties) {\n  if (!Array.isArray(properties)) {\n    properties = [properties];\n  }\n  goog.asserts.assert(properties.length > 0, \"At least one Css3Property should be specified.\");\n  var values = properties.map(function(p) {\n    if (typeof p === \"string\") {\n      return p;\n    } else {\n      goog.asserts.assertObject(p, \"Expected css3 property to be an object.\");\n      var propString = p.property + \" \" + p.duration + \"s \" + p.timing + \" \" + p.delay + \"s\";\n      goog.asserts.assert(p.property && typeof p.duration === \"number\" && p.timing && typeof p.delay === \"number\", \"Unexpected css3 property value: %s\", propString);\n      return propString;\n    }\n  });\n  goog.style.transition.setPropertyValue_(element, values.join(\",\"));\n};\ngoog.style.transition.removeAll = function(element) {\n  goog.style.transition.setPropertyValue_(element, \"\");\n};\ngoog.style.transition.isSupported = goog.functions.cacheReturnValue(function() {\n  if (goog.userAgent.IE) {\n    return goog.userAgent.isVersionOrHigher(\"10.0\");\n  }\n  var el = goog.dom.createElement(goog.dom.TagName.DIV);\n  var transition = \"opacity 1s linear\";\n  var vendorPrefix = goog.dom.vendor.getVendorPrefix();\n  var style = {\"transition\":transition};\n  if (vendorPrefix) {\n    style[vendorPrefix + \"-transition\"] = transition;\n  }\n  goog.dom.safe.setInnerHtml(el, goog.html.SafeHtml.create(\"div\", {\"style\":style}));\n  var testElement = el.firstChild;\n  goog.asserts.assert(testElement.nodeType == Node.ELEMENT_NODE);\n  return goog.style.getStyle(testElement, \"transition\") != \"\";\n});\ngoog.style.transition.setPropertyValue_ = function(element, transitionValue) {\n  goog.style.setStyle(element, \"transition\", transitionValue);\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Utility methods to deal with CSS3 transitions\n * programmatically.\n */\n\ngoog.provide('goog.style.transition');\ngoog.provide('goog.style.transition.Css3Property');\n\ngoog.require('goog.asserts');\ngoog.require('goog.dom');\ngoog.require('goog.dom.TagName');\ngoog.require('goog.dom.safe');\ngoog.require('goog.dom.vendor');\ngoog.require('goog.functions');\ngoog.require('goog.html.SafeHtml');\ngoog.require('goog.style');\ngoog.require('goog.userAgent');\n\n\n/**\n * A typedef to represent a CSS3 transition property. Duration and delay\n * are both in seconds. Timing is CSS3 timing function string, such as\n * 'easein', 'linear'.\n *\n * Alternatively, specifying string in the form of '[property] [duration]\n * [timing] [delay]' as specified in CSS3 transition is fine too.\n *\n * @typedef { {\n *   property: string,\n *   duration: number,\n *   timing: string,\n *   delay: number\n * } | string }\n */\ngoog.style.transition.Css3Property;\n\n\n/**\n * Sets the element CSS3 transition to properties.\n * @param {Element} element The element to set transition on.\n * @param {goog.style.transition.Css3Property|\n *     Array<goog.style.transition.Css3Property>} properties A single CSS3\n *     transition property or array of properties.\n * @suppress {strictMissingProperties} Part of the go/strict_warnings_migration\n */\ngoog.style.transition.set = function(element, properties) {\n  'use strict';\n  if (!Array.isArray(properties)) {\n    properties = [properties];\n  }\n  goog.asserts.assert(\n      properties.length > 0, 'At least one Css3Property should be specified.');\n\n  var values = properties.map(function(p) {\n    'use strict';\n    if (typeof p === 'string') {\n      return p;\n    } else {\n      goog.asserts.assertObject(p, 'Expected css3 property to be an object.');\n      var propString =\n          p.property + ' ' + p.duration + 's ' + p.timing + ' ' + p.delay + 's';\n      goog.asserts.assert(\n          p.property && typeof p.duration === 'number' && p.timing &&\n              typeof p.delay === 'number',\n          'Unexpected css3 property value: %s', propString);\n      return propString;\n    }\n  });\n  goog.style.transition.setPropertyValue_(element, values.join(','));\n};\n\n\n/**\n * Removes any programmatically-added CSS3 transition in the given element.\n * @param {Element} element The element to remove transition from.\n */\ngoog.style.transition.removeAll = function(element) {\n  'use strict';\n  goog.style.transition.setPropertyValue_(element, '');\n};\n\n\n/**\n * @return {boolean} Whether CSS3 transition is supported.\n */\ngoog.style.transition.isSupported = goog.functions.cacheReturnValue(function() {\n  'use strict';\n  // Since IE would allow any attribute, we need to explicitly check the\n  // browser version here instead.\n  if (goog.userAgent.IE) {\n    return goog.userAgent.isVersionOrHigher('10.0');\n  }\n\n  // We create a test element with style=-vendor-transition\n  // We then detect whether those style properties are recognized and\n  // available from js.\n  var el = goog.dom.createElement(goog.dom.TagName.DIV);\n  var transition = 'opacity 1s linear';\n  var vendorPrefix = goog.dom.vendor.getVendorPrefix();\n  var style = {'transition': transition};\n  if (vendorPrefix) {\n    style[vendorPrefix + '-transition'] = transition;\n  }\n  goog.dom.safe.setInnerHtml(\n      el, goog.html.SafeHtml.create('div', {'style': style}));\n\n  var testElement = /** @type {Element} */ (el.firstChild);\n  goog.asserts.assert(testElement.nodeType == Node.ELEMENT_NODE);\n\n  return goog.style.getStyle(testElement, 'transition') != '';\n});\n\n\n/**\n * Sets CSS3 transition property value to the given value.\n * @param {Element} element The element to set transition on.\n * @param {string} transitionValue The CSS3 transition property value.\n * @private\n */\ngoog.style.transition.setPropertyValue_ = function(element, transitionValue) {\n  'use strict';\n  goog.style.setStyle(element, 'transition', transitionValue);\n};\n","~:compiled-at",1663512739470,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.style.transition.js\",\n\"lineCount\":52,\n\"mappings\":\"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\",\n\"sources\":[\"goog/style/transition.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Utility methods to deal with CSS3 transitions\\n * programmatically.\\n */\\n\\ngoog.provide('goog.style.transition');\\ngoog.provide('goog.style.transition.Css3Property');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.dom');\\ngoog.require('goog.dom.TagName');\\ngoog.require('goog.dom.safe');\\ngoog.require('goog.dom.vendor');\\ngoog.require('goog.functions');\\ngoog.require('goog.html.SafeHtml');\\ngoog.require('goog.style');\\ngoog.require('goog.userAgent');\\n\\n\\n/**\\n * A typedef to represent a CSS3 transition property. Duration and delay\\n * are both in seconds. Timing is CSS3 timing function string, such as\\n * 'easein', 'linear'.\\n *\\n * Alternatively, specifying string in the form of '[property] [duration]\\n * [timing] [delay]' as specified in CSS3 transition is fine too.\\n *\\n * @typedef { {\\n *   property: string,\\n *   duration: number,\\n *   timing: string,\\n *   delay: number\\n * } | string }\\n */\\ngoog.style.transition.Css3Property;\\n\\n\\n/**\\n * Sets the element CSS3 transition to properties.\\n * @param {Element} element The element to set transition on.\\n * @param {goog.style.transition.Css3Property|\\n *     Array<goog.style.transition.Css3Property>} properties A single CSS3\\n *     transition property or array of properties.\\n * @suppress {strictMissingProperties} Part of the go/strict_warnings_migration\\n */\\ngoog.style.transition.set = function(element, properties) {\\n  'use strict';\\n  if (!Array.isArray(properties)) {\\n    properties = [properties];\\n  }\\n  goog.asserts.assert(\\n      properties.length > 0, 'At least one Css3Property should be specified.');\\n\\n  var values = properties.map(function(p) {\\n    'use strict';\\n    if (typeof p === 'string') {\\n      return p;\\n    } else {\\n      goog.asserts.assertObject(p, 'Expected css3 property to be an object.');\\n      var propString =\\n          p.property + ' ' + p.duration + 's ' + p.timing + ' ' + p.delay + 's';\\n      goog.asserts.assert(\\n          p.property && typeof p.duration === 'number' && p.timing &&\\n              typeof p.delay === 'number',\\n          'Unexpected css3 property value: %s', propString);\\n      return propString;\\n    }\\n  });\\n  goog.style.transition.setPropertyValue_(element, values.join(','));\\n};\\n\\n\\n/**\\n * Removes any programmatically-added CSS3 transition in the given element.\\n * @param {Element} element The element to remove transition from.\\n */\\ngoog.style.transition.removeAll = function(element) {\\n  'use strict';\\n  goog.style.transition.setPropertyValue_(element, '');\\n};\\n\\n\\n/**\\n * @return {boolean} Whether CSS3 transition is supported.\\n */\\ngoog.style.transition.isSupported = goog.functions.cacheReturnValue(function() {\\n  'use strict';\\n  // Since IE would allow any attribute, we need to explicitly check the\\n  // browser version here instead.\\n  if (goog.userAgent.IE) {\\n    return goog.userAgent.isVersionOrHigher('10.0');\\n  }\\n\\n  // We create a test element with style=-vendor-transition\\n  // We then detect whether those style properties are recognized and\\n  // available from js.\\n  var el = goog.dom.createElement(goog.dom.TagName.DIV);\\n  var transition = 'opacity 1s linear';\\n  var vendorPrefix = goog.dom.vendor.getVendorPrefix();\\n  var style = {'transition': transition};\\n  if (vendorPrefix) {\\n    style[vendorPrefix + '-transition'] = transition;\\n  }\\n  goog.dom.safe.setInnerHtml(\\n      el, goog.html.SafeHtml.create('div', {'style': style}));\\n\\n  var testElement = /** @type {Element} */ (el.firstChild);\\n  goog.asserts.assert(testElement.nodeType == Node.ELEMENT_NODE);\\n\\n  return goog.style.getStyle(testElement, 'transition') != '';\\n});\\n\\n\\n/**\\n * Sets CSS3 transition property value to the given value.\\n * @param {Element} element The element to set transition on.\\n * @param {string} transitionValue The CSS3 transition property value.\\n * @private\\n */\\ngoog.style.transition.setPropertyValue_ = function(element, transitionValue) {\\n  'use strict';\\n  goog.style.setStyle(element, 'transition', transitionValue);\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"style\",\"transition\",\"Css3Property\",\"set\",\"goog.style.transition.set\",\"element\",\"properties\",\"Array\",\"isArray\",\"asserts\",\"assert\",\"length\",\"values\",\"map\",\"p\",\"assertObject\",\"propString\",\"property\",\"duration\",\"timing\",\"delay\",\"setPropertyValue_\",\"join\",\"removeAll\",\"goog.style.transition.removeAll\",\"isSupported\",\"functions\",\"cacheReturnValue\",\"userAgent\",\"IE\",\"isVersionOrHigher\",\"el\",\"dom\",\"createElement\",\"TagName\",\"DIV\",\"vendorPrefix\",\"vendor\",\"getVendorPrefix\",\"safe\",\"setInnerHtml\",\"html\",\"SafeHtml\",\"create\",\"testElement\",\"firstChild\",\"nodeType\",\"Node\",\"ELEMENT_NODE\",\"getStyle\",\"goog.style.transition.setPropertyValue_\",\"transitionValue\",\"setStyle\"]\n}\n"]