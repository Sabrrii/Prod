"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiCall": () => (/* binding */ ApiCall)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//URL d'ou les données sont récupérées
const ApiURL = "http://127.0.0.1:8090/api/user";
//L'url des suite dans une constante
const myApiUrl = "http://127.0.0.1:8090/api/suite";
//Function qui récupère les données de l'API
async function ApiCall() {
    return new Promise((resolve, reject)=>{
        fetch(ApiURL).then((resp)=>{
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
var __webpack_exports__ = (__webpack_exec__(429));
module.exports = __webpack_exports__;

})();