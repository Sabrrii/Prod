(() => {
var exports = {};
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 4242:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "SignUp_box__2qeAQ",
	"label": "SignUp_label__0Ii7e",
	"input": "SignUp_input__B9K9I",
	"button": "SignUp_button__7N2Ha"
};


/***/ }),

/***/ 7340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignUp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/SignUp.module.css
var SignUp_module = __webpack_require__(4242);
var SignUp_module_default = /*#__PURE__*/__webpack_require__.n(SignUp_module);
;// CONCATENATED MODULE: ./src/pages/api/signUp.ts

async function signUp(user) {
    const newUser = {
        userName: user.userName,
        email: user.email,
        password: user.password
    };
    //Fait la connexion avec l'api (peut etre effectuer depuis un autre fichier )
    const response = await fetch("http://127.0.0.1:8090/api/User", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
    if (response.ok) {
        alert("User created");
    } else {
        alert("User not created");
    }
}

;// CONCATENATED MODULE: ./src/pages/SignUp.tsx




const SignUpForm = ()=>{
    const [user, setUser] = (0,external_react_.useState)({
        username: "",
        email: "",
        password: ""
    });
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setUser((prevUser)=>({
                ...prevUser,
                [name]: value
            }));
    };
    //*  La vérification des champs login et email se fait via un trigger dans la base de données qui vérifie si le login ou l'email existe déjà
    //*  la verif peux etre faite cote client aussi ,mais j'ai des problemes a bien la mettre en place avec la redirection
    //*  donc pour l'instant ,il y'a seulement cote serveur
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: ()=>signUp(SignUpForm),
        method: "Post",
        className: (SignUp_module_default()).box,
        action: "/",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: (SignUp_module_default()).label,
                children: [
                    "UserName:",
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: (SignUp_module_default()).input,
                        required: true,
                        type: "text",
                        name: "username",
                        value: user.username,
                        onChange: handleChange
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: (SignUp_module_default()).label,
                children: [
                    "Email",
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: (SignUp_module_default()).input,
                        required: true,
                        type: "email",
                        name: "email",
                        value: user.email,
                        onChange: handleChange
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: (SignUp_module_default()).label,
                children: [
                    "Password:",
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: (SignUp_module_default()).input,
                        required: true,
                        type: "password",
                        name: "password",
                        value: user.password,
                        onChange: handleChange
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (SignUp_module_default()).button,
                type: "submit",
                children: "Sign Up"
            })
        ]
    });
};
/* harmony default export */ const SignUp = (SignUpForm);


/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7340));
module.exports = __webpack_exports__;

})();