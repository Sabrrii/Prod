"use strict";
(() => {
var exports = {};
exports.id = 901;
exports.ids = [901];
exports.modules = {

/***/ 6703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/pages/api/hello.ts
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

;// CONCATENATED MODULE: ./src/pages/api/Suite.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//L'url des suite dans une constante
const Suite_myApiUrl = "http://127.0.0.1:8090/api/suite";
//fonction asyncrone (executable en même temps que les autres fonction acyncrone)
//fonction qui retourne le tableau en json pour pouvoir recuperer les données grace a .map
//[ ()=> ]-> reenvoie un call back
async function ApiCallSuite() {
    return new Promise((resolve)=>{
        fetch(Suite_myApiUrl).then((resp)=>{
            resolve(resp.json().then((data)=>data));
        });
    });
}

;// CONCATENATED MODULE: ./src/pages/indexBroken.tsx





function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Story Points Pro"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            })
        ]
    });
    //Variable qui récupere les données de l'API ,ICI des objets de type user
    const tab = ApiCallSuite();
    let [suite, setSuite] = (0,external_react_.useState)([]);
    const users = ApiCall();
    let [user, setUsers] = external_react_default().useState([]);
    users.then((data)=>{
        setUsers(data);
    });
    tab.then((data)=>{
        setSuite(data);
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            children: [
                user.map((p)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("textarea", {
                        children: [
                            p.username,
                            ",",
                            p.email
                        ]
                    }, p.id);
                }),
                suite.map((item)=>{
                    return item.suitevalues;
                })
            ]
        })
    });
}


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6703));
module.exports = __webpack_exports__;

})();