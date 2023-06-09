"use strict";
(() => {
var exports = {};
exports.id = 240;
exports.ids = [240];
exports.modules = {

/***/ 6493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiCallSuite": () => (/* binding */ ApiCallSuite)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//L'url des suite dans une constante
const myApiUrl = "http://127.0.0.1:8090/api/suite";
//fonction asyncrone (executable en même temps que les autres fonction acyncrone)
//fonction qui retourne le tableau en json pour pouvoir recuperer les données grace a .map
//[ ()=> ]-> reenvoie un call back
async function ApiCallSuite() {
    return new Promise((resolve)=>{
        fetch(myApiUrl).then((resp)=>{
            resolve(resp.json().then((data)=>data));
        });
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6493));
module.exports = __webpack_exports__;

})();