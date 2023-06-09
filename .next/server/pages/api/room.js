"use strict";
(() => {
var exports = {};
exports.id = 848;
exports.ids = [848];
exports.modules = {

/***/ 7372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRooms)
/* harmony export */ });
//Typer ici les attributs de la table de la BDD
const url = "http://127.0.0.1:8090/api/room";
//Fonction getRooms qui permet de retourner une promesse depuis telle adresse des donées que l'on va convertir en tableau d'object vers JSON en tableau de données
/*export default function getRooms(){
  /*  return new Promise<room>((resolve) =>{
       fetch('http://127.0.0.1:8090/api/room').then((response) => {
            resolve(response.json().then((data) => data))
        })
    })}*/ /*  /*      fetch('http://127.0.0.1:8090/api/room',{ method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}})
            .then(response => response.text())
                .then( (data) =>{
                    console.log(data)
                    return new Promise((resolve, reject) => {
                        resolve(data ? JSON.parse(data) : {} )
                    })

                })
            .catch(rejected => {
                console.log(rejected);
            });
    })

}*/ async function getRooms() {
    return fetch("http://127.0.0.1:8090/api/room").then((response)=>response.json()).then((responseJSON)=>{
        return responseJSON;
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7372));
module.exports = __webpack_exports__;

})();