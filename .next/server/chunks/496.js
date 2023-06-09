"use strict";
exports.id = 496;
exports.ids = [496];
exports.modules = {

/***/ 8355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7449);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
    providers: [
        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({
            id: "",
            type: "credentials",
            name: "Credentials",
            credentials: {
                username: {
                    name: "username",
                    label: "Username",
                    type: "text",
                    placeholder: "jsmith"
                },
                password: {
                    name: "password",
                    label: "Password",
                    type: "password"
                }
            },
            authorize: async function(credentials, req) {
                var data = new URLSearchParams();
                console.log("username credential: " + credentials?.username);
                console.log("password credential: " + credentials?.password);
                // @ts-ignore
                data.append("username", credentials.username);
                // @ts-ignore
                data.append("password", credentials.password);
                console.log("data: " + data);
                const res = await fetch("http://127.0.0.1:8090/api/connect", {
                    method: "POST",
                    body: data,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });
                const user = await res.json().then((data)=>data);
                debugger;
                console.log("user: " + user);
                if (res.ok && user) {
                    return user;
                }
                return null;
            }
        })
    ],
    callbacks: {
        jwt: async ({ token , user  })=>{
            user && (token.user = user);
            return token;
        },
        session: async ({ session , token  })=>{
            // @ts-ignore
            session.user = token.user;
            return session;
        },
        redirect ({ url , baseUrl  }) {
            return url;
        }
    }
}));


/***/ })

};
;