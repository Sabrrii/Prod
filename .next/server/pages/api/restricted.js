"use strict";
(() => {
var exports = {};
exports.id = 45;
exports.ids = [45,748];
exports.modules = {

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 1687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ restricted)
});

;// CONCATENATED MODULE: external "next-auth/next"
const next_namespaceObject = require("next-auth/next");
// EXTERNAL MODULE: ./src/pages/api/auth/[...nextauth].ts
var _nextauth_ = __webpack_require__(8355);
;// CONCATENATED MODULE: ./src/pages/api/restricted.js


// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ const restricted = (async (req, res)=>{
    const session = await (0,next_namespaceObject.getServerSession)(req, res, _nextauth_.authOptions);
    if (session) {
        res.send({
            content: "This is protected content. You can access this content because you are signed in."
        });
    } else {
        res.send({
            error: "You must be signed in to view the protected content on this page."
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [496], () => (__webpack_exec__(1687)));
module.exports = __webpack_exports__;

})();