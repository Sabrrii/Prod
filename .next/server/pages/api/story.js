"use strict";
(() => {
var exports = {};
exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ getStory)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/pages/api/story.ts


function getStory() {
    return new Promise((resolve)=>{
        fetch("http://127.0.0.1:8090/api/story").then((response)=>{
            resolve(response.json().then((data)=>data));
        });
    });
}
const CreateStoryForm = ()=>{
    // état local pour stocker les valeurs des champs du formulaire
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState(0); // valeur initiale arbitraire
    const [completed, setCompleted] = useState(false);
    const [idRoom, setIdRoom] = useState(0); // valeur initiale arbitraire
    const router = useRouter(); // on récupère l'objet router de Next.js
    // fonction qui sera appelée à la soumission du formulaire
    const handleSubmit = async (event)=>{
        event.preventDefault(); // empêche la soumission du formulaire d'actualiser la page
        const newStory = {
            id: 0,
            name,
            description,
            points,
            completed,
            idRoom
        };
        // requête POST à l'API pour enregistrer la nouvelle room dans la base de données
        const response = await fetch("http://127.0.0.1:8090/api/Story", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStory)
        });
        if (response.ok) {
            // si la requête a réussi, on affiche un message de succès et on vide les champs du formulaire
            alert("Room cr\xe9\xe9e avec succ\xe8s !");
            setName("");
            setDescription("");
            setPoints(0);
            setCompleted(false);
            setIdRoom(0);
            router.push("/dashboard"); // on redirige vers la page d'accueil
        } else {
            // sinon, on affiche un message d'erreur
            alert("Une erreur est survenue lors de la cr\xe9ation de la room.");
        }
    };
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(394));
module.exports = __webpack_exports__;

})();