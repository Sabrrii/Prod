(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[147],{5257:function(o,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/RoomPage",function(){return n(1466)}])},1466:function(o,e,n){"use strict";n.r(e);var t=n(5893),i=n(1163),c=n(7294);let s=()=>((0,c.useEffect)(()=>{(()=>{let o=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.replaceState({},document.title,o)})()},[]),null),l=()=>{let o=(0,i.useRouter)(),e=o.query.idRoom,n=o.query.idUser,[l,r]=(0,c.useState)();return(console.log("idRoom "+e),console.log("idUSer "+n),(0,c.useEffect)(()=>{let o=async()=>{let o=await fetch("http://127.0.0.1:8090/api/room/".concat(e)),n=await o.json();r(n),console.log(n)};e&&o()},[e]),console.log(l),l)?(0,t.jsxs)("div",{children:[(0,t.jsx)(s,{}),(0,t.jsx)("h1",{children:l.name}),(0,t.jsx)("p",{children:l.description}),(0,t.jsx)("p",{children:l.points}),(0,t.jsx)("p",{children:l.uuid}),(0,t.jsx)("button",{onClick:()=>{var o,e;return e={uuid:o=l.uuid,idUser:n},void(fetch("http://127.0.0.1:8090/api/rooms/"+o+"/users/"+n,{method:"DELETE",mode:"cors",body:JSON.stringify(e)}),console.log(e),window.location.href="http://localhost:3000/")},children:"Se d\xe9connecter de la room"})]}):(0,t.jsx)("div",{children:"Loading..."})};e.default=l},1163:function(o,e,n){o.exports=n(6885)}},function(o){o.O(0,[774,888,179],function(){return o(o.s=5257)}),_N_E=o.O()}]);