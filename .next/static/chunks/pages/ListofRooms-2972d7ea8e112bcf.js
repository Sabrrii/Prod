(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{1207:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ListofRooms",function(){return o(7008)}])},7008:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return s}});var t=o(5893),i=o(7294);async function r(){return fetch("http://127.0.0.1:8090/api/room").then(n=>n.json()).then(n=>n)}var u=o(1163);function s(){let[n,e]=(0,i.useState)([]),o=(0,u.useRouter)();return(0,i.useEffect)(()=>{r().then(n=>e(n))},[]),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:"Room"}),n.map((n,e)=>{let i=n.uuid,r=n.id;return(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:n.name}),(0,t.jsxs)("p",{id:i,children:["UUID: ",n.uuid]}),(0,t.jsx)("button",{onClick:()=>{var n;return n={idRoom:r,uuid:i,idUser:1},void(fetch("http://127.0.0.1:8090/api/rooms/"+i+"/users/1",{method:"POST",mode:"cors",body:JSON.stringify(n)}),console.log(n),o.push({pathname:"/RoomPage",query:{idRoom:r,idUser:1}}))},children:"Se connecter a la room"})]},n.id)})]})}},1163:function(n,e,o){n.exports=o(6885)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=1207)}),_N_E=n.O()}]);