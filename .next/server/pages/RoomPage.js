"use strict";
(() => {
var exports = {};
exports.id = 147;
exports.ids = [147];
exports.modules = {

/***/ 1466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const CleanURLComponent = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const cleanURL = ()=>{
            const cleanURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
            window.history.replaceState({}, document.title, cleanURL);
        };
        cleanURL();
    }, []);
    return null; // Composant vide, aucun rendu à l'écran
};
const Room = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    let idRoom = router.query.idRoom;
    let idUser = router.query.idUser;
    const [room, setRoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    console.log("idRoom " + idRoom);
    console.log("idUSer " + idUser);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const fetchRoom = async ()=>{
            const response = await fetch(`http://127.0.0.1:8090/api/room/${idRoom}`);
            const data = await response.json();
            setRoom(data);
            console.log(data);
        };
        if (idRoom) {
            fetchRoom();
        }
    }, [
        idRoom
    ]);
    console.log(room);
    if (!room) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    }
    function handleClick(uuid, id) {
        var jsonDatas = {
            uuid: uuid,
            idUser: idUser
        };
        var url = "http://127.0.0.1:8090/api/rooms/" + uuid + "/users/" + idUser;
        fetch(url, {
            method: "DELETE",
            mode: "cors",
            body: JSON.stringify(jsonDatas) // body data type must match "Content-Type" header
        });
        console.log(jsonDatas);
        window.location.href = "http://localhost:3000/";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CleanURLComponent, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: room.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: room.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: room.points
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: room.uuid
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>handleClick(room.uuid, idUser),
                children: "Se d\xe9connecter de la room"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Room);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__(1466));
module.exports = __webpack_exports__;

})();