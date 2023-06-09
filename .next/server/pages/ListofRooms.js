"use strict";
(() => {
var exports = {};
exports.id = 43;
exports.ids = [43];
exports.modules = {

/***/ 7008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ListofRooms)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/api/room.ts
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

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/pages/ListofRooms.tsx




function ListofRooms() {
    const [roomName, setRoomName] = (0,external_react_.useState)([]);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        getRooms().then((data)=>setRoomName(data)); //On affecte les données retourner avec la fonction getRooms a notre state
    }, []);
    function handleClick(idRoom, uuid, id) {
        var jsonDatas = {
            idRoom: idRoom,
            uuid: uuid,
            idUser: id
        };
        var url = "http://127.0.0.1:8090/api/rooms/" + uuid + "/users/" + id;
        fetch(url, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(jsonDatas) // body data type must match "Content-Type" header
        });
        console.log(jsonDatas);
        router.push({
            pathname: "/RoomPage",
            query: {
                idRoom: idRoom,
                idUser: id
            }
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Room"
            }),
            roomName.map((item, index)=>{
                let UUID = item.uuid;
                let idRoom = item.id;
                let id = 1; //remplace le user co 
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: item.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            id: UUID,
                            children: [
                                "UUID: ",
                                item.uuid
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>handleClick(idRoom, UUID, id),
                            children: "Se connecter a la room"
                        })
                    ]
                }, item.id);
            })
        ]
    });
}


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
var __webpack_exports__ = (__webpack_exec__(7008));
module.exports = __webpack_exports__;

})();