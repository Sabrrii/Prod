(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[530],{8680:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/RoomForm",function(){return r(1349)}])},1349:function(e,t,r){"use strict";r.r(t);var i=r(5893),n=r(7294),u=r(1163);let a=()=>{let[e,t]=(0,n.useState)(""),[r,a]=(0,n.useState)(""),[s,l]=(0,n.useState)(0),[o,d]=(0,n.useState)(0),c=(0,u.useRouter)(),h=async i=>{i.preventDefault();let n=await fetch("http://127.0.0.1:8090/api/room",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:0,name:e,description:r,idSuite:s,idOwner:o})});n.ok?(alert("Room cr\xe9\xe9e avec succ\xe8s !"),t(""),a(""),l(0),d(0),c.push("/dashboard")):alert("Une erreur est survenue lors de la cr\xe9ation de la room.")};return(0,i.jsxs)("form",{onSubmit:h,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"name",children:"Nom de la room :"}),(0,i.jsx)("input",{type:"text",id:"name",value:e,onChange:e=>t(e.target.value),required:!0})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"description",children:"Description :"}),(0,i.jsx)("textarea",{id:"description",value:r,onChange:e=>a(e.target.value),required:!0})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"idSuite",children:"ID de la suite :"}),(0,i.jsx)("input",{type:"number",id:"idSuite",value:s,onChange:e=>l(Number(e.target.value)),required:!0})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"idOwner",children:"ID de lutilisateur propri\xe9taire :"}),(0,i.jsx)("input",{type:"number",id:"idOwner",value:o,onChange:e=>d(Number(e.target.value)),required:!0})]}),(0,i.jsx)("button",{type:"submit",children:"Cr\xe9er la room"})]})};t.default=a},1163:function(e,t,r){e.exports=r(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8680)}),_N_E=e.O()}]);