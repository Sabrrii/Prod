"use strict";
(() => {
var exports = {};
exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 1349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const CreateRoomForm = ()=>{
    // état local pour stocker les valeurs des champs du formulaire
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [idSuite, setIdSuite] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // valeur initiale arbitraire
    const [idOwner, setIdOwner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // valeur initiale arbitraire
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // on récupère l'objet router de Next.js
    // fonction qui sera appelée à la soumission du formulaire
    const handleSubmit = async (event)=>{
        event.preventDefault(); // empêche la soumission du formulaire d'actualiser la page
        const newRoom = {
            id: 0,
            name,
            description,
            idSuite,
            idOwner
        };
        // requête POST à l'API pour enregistrer la nouvelle room dans la base de données
        const response = await fetch("http://127.0.0.1:8090/api/room", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRoom)
        });
        if (response.ok) {
            // si la requête a réussi, on affiche un message de succès et on vide les champs du formulaire
            alert("Room cr\xe9\xe9e avec succ\xe8s !");
            setName("");
            setDescription("");
            setIdSuite(0);
            setIdOwner(0);
            router.push("/dashboard"); // on redirige vers la page d'accueil
        } else {
            // sinon, on affiche un message d'erreur
            alert("Une erreur est survenue lors de la cr\xe9ation de la room.");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "name",
                        children: "Nom de la room :"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        id: "name",
                        value: name,
                        onChange: (event)=>setName(event.target.value),
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "description",
                        children: "Description :"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        id: "description",
                        value: description,
                        onChange: (event)=>setDescription(event.target.value),
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "idSuite",
                        children: "ID de la suite :"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "number",
                        id: "idSuite",
                        value: idSuite,
                        onChange: (event)=>setIdSuite(Number(event.target.value)),
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "idOwner",
                        children: "ID de lutilisateur propri\xe9taire :"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "number",
                        id: "idOwner",
                        value: idOwner,
                        onChange: (event)=>setIdOwner(Number(event.target.value)),
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                children: "Cr\xe9er la room"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateRoomForm);


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
var __webpack_exports__ = (__webpack_exec__(1349));
module.exports = __webpack_exports__;

})();