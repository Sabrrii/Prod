"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dashboard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/pages/dashboard.tsx




const Dashboard = ()=>{
    // état local pour stocker les salles de l'utilisateur
    const [rooms, setRooms] = (0,external_react_.useState)([]);
    // fonction pour récupérer les salles de l'utilisateur
    const fetchRooms = async ()=>{
        // récupérer l'ID de l'utilisateur à partir de l'authentification (si nécessaire)
        const userId = 1; // exemple d'ID d'utilisateur
        // requête GET à l'API pour récupérer les salles de l'utilisateur
        const response = await fetch(`http://127.0.0.1:8090/api/user/${userId}/rooms`);
        if (response.ok) {
            // si la requête a réussi, on met à jour l'état local des salles
            const rooms = await response.json();
            setRooms(rooms);
        } else {
            // sinon, on affiche un message d'erreur
            alert("Une erreur est survenue lors de la r\xe9cup\xe9ration des salles.");
        }
    };
    // appeler fetchRooms au chargement de la page
    (0,external_react_.useEffect)(()=>{
        fetchRooms();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-3a6e17627f83f4b5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "jsx-3a6e17627f83f4b5",
                children: "Dashboard"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-3a6e17627f83f4b5" + " " + "room-list",
                children: rooms.map((room)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/room/${room.id}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "jsx-3a6e17627f83f4b5" + " " + "room-card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "jsx-3a6e17627f83f4b5",
                                    children: room.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "jsx-3a6e17627f83f4b5",
                                    children: room.description
                                })
                            ]
                        })
                    }, room.id))
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "3a6e17627f83f4b5",
                children: ".room-list.jsx-3a6e17627f83f4b5{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.room-card.jsx-3a6e17627f83f4b5{width:300px;height:200px;margin:20px;padding:20px;background-color:#fff;-webkit-box-shadow:0 2px 6px rgba(0,0,0,.1);-moz-box-shadow:0 2px 6px rgba(0,0,0,.1);box-shadow:0 2px 6px rgba(0,0,0,.1);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;text-decoration:none;color:#000;-webkit-transition:all.3s ease-in-out;-moz-transition:all.3s ease-in-out;-o-transition:all.3s ease-in-out;transition:all.3s ease-in-out}.room-card.jsx-3a6e17627f83f4b5:hover{-webkit-transform:translatey(-5px);-moz-transform:translatey(-5px);-ms-transform:translatey(-5px);-o-transform:translatey(-5px);transform:translatey(-5px);-webkit-box-shadow:0 5px 15px rgba(0,0,0,.2);-moz-box-shadow:0 5px 15px rgba(0,0,0,.2);box-shadow:0 5px 15px rgba(0,0,0,.2)}"
            })
        ]
    });
};
/* harmony default export */ const dashboard = (Dashboard);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(7481)));
module.exports = __webpack_exports__;

})();