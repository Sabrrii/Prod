"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 3813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUser)
/* harmony export */ });
//Typer ici les attributs de la table de la BDD
//Fonction getRooms qui permet de retourner une promesse depuis telle adresse des donées que l'on va convertir en tableau d'object vers JSON en tableau de données
function getUser() {
    return new Promise((resolve)=>{
        fetch("http://127.0.0.1:8090/api/login").then((response)=>{
            resolve(response.json().then((data)=>data));
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
var __webpack_exports__ = (__webpack_exec__(3813));
module.exports = __webpack_exports__;

})();