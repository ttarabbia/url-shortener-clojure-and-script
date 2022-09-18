["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/labs/useragent/useragent.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.labs.userAgent\");\n  const USE_CLIENT_HINTS_OVERRIDE = goog.define(\"goog.labs.userAgent.USE_CLIENT_HINTS_OVERRIDE\", \"\");\n  const USE_CLIENT_HINTS = goog.define(\"goog.labs.userAgent.USE_CLIENT_HINTS\", false);\n  exports.USE_CLIENT_HINTS = (() => {\n    const override = USE_CLIENT_HINTS_OVERRIDE ? goog.getObjectByName(USE_CLIENT_HINTS_OVERRIDE) : null;\n    return override != null ? override : USE_CLIENT_HINTS;\n  })();\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Defines for goog.labs.userAgent.\n */\n\ngoog.module('goog.labs.userAgent');\n\n/**\n * @define {string} Optional runtime override for the USE_CLIENT_HINTS flag.\n * If this is set (for example, to 'foo.bar') then any value of USE_CLIENT_HINTS\n * will be overridden by `globalThis.foo.bar` if it is non-null.\n * This flag will be removed in December 2021.\n */\nconst USE_CLIENT_HINTS_OVERRIDE =\n    goog.define('goog.labs.userAgent.USE_CLIENT_HINTS_OVERRIDE', '');\n\n/**\n * @define {boolean} If true, use navigator.userAgentData\n * TODO(user) Flip flag in 2021/12.\n */\nconst USE_CLIENT_HINTS =\n    goog.define('goog.labs.userAgent.USE_CLIENT_HINTS', false);\n\n// TODO(user): Replace the IIFE with a simple null-coalescing operator.\n// NOTE: This can't be done with a helper function, or else we risk an inlining\n// back-off causing a huge code size regression if a non-inlined helper function\n// prevents the optimizer from detecting the (possibly large) dead code paths.\n/** @const {boolean} */\nexports.USE_CLIENT_HINTS = (() => {\n  const override = USE_CLIENT_HINTS_OVERRIDE ?\n         goog.getObjectByName(USE_CLIENT_HINTS_OVERRIDE) :\n         null;\n  return override != null ? override : USE_CLIENT_HINTS;\n})();\n","~:compiled-at",1663511977611,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.labs.useragent.useragent.js\",\n\"lineCount\":12,\n\"mappings\":\"AAAA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAAA,cAAA;AAUAA,MAAKC,CAAAA,MAAL,CAAY,qBAAZ,CAAA;AAQA,QAAMC,4BACFF,IAAKG,CAAAA,MAAL,CAAY,+CAAZ,EAA6D,EAA7D,CADJ;AAOA,QAAMC,mBACFJ,IAAKG,CAAAA,MAAL,CAAY,sCAAZ,EAAoD,KAApD,CADJ;AAQAE,SAAQD,CAAAA,gBAAR,GAA4B,CAAA,EAAA,IAAM;AAChC,UAAME,WAAWJ,yBAAA,GACVF,IAAKO,CAAAA,eAAL,CAAqBL,yBAArB,CADU,GAEV,IAFP;AAGA,WAAOI,QAAA,IAAY,IAAZ,GAAmBA,QAAnB,GAA8BF,gBAArC;AAJgC,GAAN,CAAD,EAA3B;AAjCA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/labs/useragent/useragent.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Defines for goog.labs.userAgent.\\n */\\n\\ngoog.module('goog.labs.userAgent');\\n\\n/**\\n * @define {string} Optional runtime override for the USE_CLIENT_HINTS flag.\\n * If this is set (for example, to 'foo.bar') then any value of USE_CLIENT_HINTS\\n * will be overridden by `globalThis.foo.bar` if it is non-null.\\n * This flag will be removed in December 2021.\\n */\\nconst USE_CLIENT_HINTS_OVERRIDE =\\n    goog.define('goog.labs.userAgent.USE_CLIENT_HINTS_OVERRIDE', '');\\n\\n/**\\n * @define {boolean} If true, use navigator.userAgentData\\n * TODO(user) Flip flag in 2021/12.\\n */\\nconst USE_CLIENT_HINTS =\\n    goog.define('goog.labs.userAgent.USE_CLIENT_HINTS', false);\\n\\n// TODO(user): Replace the IIFE with a simple null-coalescing operator.\\n// NOTE: This can't be done with a helper function, or else we risk an inlining\\n// back-off causing a huge code size regression if a non-inlined helper function\\n// prevents the optimizer from detecting the (possibly large) dead code paths.\\n/** @const {boolean} */\\nexports.USE_CLIENT_HINTS = (() => {\\n  const override = USE_CLIENT_HINTS_OVERRIDE ?\\n         goog.getObjectByName(USE_CLIENT_HINTS_OVERRIDE) :\\n         null;\\n  return override != null ? override : USE_CLIENT_HINTS;\\n})();\\n\"],\n\"names\":[\"goog\",\"module\",\"USE_CLIENT_HINTS_OVERRIDE\",\"define\",\"USE_CLIENT_HINTS\",\"exports\",\"override\",\"getObjectByName\"]\n}\n"]