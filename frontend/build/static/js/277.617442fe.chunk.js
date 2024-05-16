"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[277],{7277:(e,o,t)=>{t.r(o),t.d(o,{default:()=>y});var r=t(4446),n=t(5043),l=t(2570),s=t(8748),c=t(5316),a=t(579);const i=()=>(0,a.jsx)(c.A,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",sx:{position:"relative",marginTop:"1rem",width:"100%",color:"#d1dce6",fontSize:"16px",fontFamily:"Comfortaa",img:{transform:"translateY(5px)"}},children:(0,a.jsxs)("div",{style:{padding:"10px"},children:["Made with "," ",(0,a.jsx)("img",{src:"https://img.icons8.com/material/20/ec5f67/hearts.png",alt:"heart"})," "," by ",(0,a.jsx)("a",{style:{textDecoration:"none",color:"#6699cc"},href:"https://github.com/ayomitide-oaj",children:"ayomitideoaj"})]})}),d=()=>(0,a.jsxs)(c.A,{display:"flex",flexDirection:"column",padding:6,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)("img",{src:"https://user-images.githubusercontent.com/27065646/53551960-ae4dff80-3b3a-11e9-9075-cef786c69364.png",alt:"logo",style:{width:"150px",height:"auto"}}),(0,a.jsx)("br",{}),(0,a.jsx)("h2",{children:" SocialsFinder "})]});var h=t(9309),m=t(3516),u=t(6360),x=t(3033);const f={floatingLabelFocusStyle:{color:"#6699cc"},underlineStyle:{fontFamily:"Comfortaa",color:"#6699cc"},floatingLabelStyle:{color:"#6699cc",fontFamily:"Comfortaa"}},g=(0,a.jsxs)("a",{style:{color:"#d1dce6",fontFamily:"Comfortaa",fontSize:"16px"},children:["[ ",(0,a.jsx)("a",{style:{color:"#fcb103"},children:"!"})," ]"]}),p=(0,a.jsxs)("a",{style:{color:"#d1dce6",fontFamily:"Comfortaa",fontSize:"16px"},children:["[ ",(0,a.jsx)("a",{style:{color:"#ec5f67"},children:"X"})," ]"]}),j=(0,a.jsxs)("a",{style:{color:"#d1dce6",fontFamily:"Comfortaa",fontSize:"16px"},children:["[ ",(0,a.jsx)("a",{style:{color:"#99c794"},children:"+"})," ]"]}),y=()=>{const[e,o]=n.useState([]),[t,c]=n.useState(!1),[y,b]=n.useState("");return console.log(e),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",alignItems:"center",maxWidth:"30rem",margin:"0 auto",fontFamily:"Comfortaa",color:"#d1dce6"},children:[(0,a.jsx)(d,{}),(0,a.jsxs)("div",{children:["SocialsFinder is a powerful tool that can be used to find usernames across many ",(0,a.jsx)("a",{style:{textDecoration:"none",color:"#6699cc"},href:"https://github.com/sherlock-project/sherlock/blob/master/sites.md",children:"social networks"}),". This project is a wrapper around the ",(0,a.jsx)("a",{style:{textDecoration:"none",color:"#6699cc"},href:"https://github.com/sherlock-project",children:"Sherlock Project."})]}),(0,a.jsx)(m.l1,{initialValues:{username:""},validationSchema:x.Ik().shape({username:x.Yj().required("Username is required")}),onSubmit:e=>{b((o=>e.username)),o([]),c(!0);const t=new WebSocket("ws://www.socialsfinderwrapper.onrender.com/api/v1/handles/".concat(e.username));t.onopen=()=>{console.log("connected"),t.send(e.username)},t.onmessage=e=>{const t=JSON.parse(e.data);t&&o((e=>[...e,t]))},t.onclose=()=>{console.log("disconnected"),c(!1)}},children:o=>{let{values:n,handleChange:c,handleSubmit:i}=o;return(0,a.jsxs)("form",{onSubmit:i,children:[(0,a.jsx)(h.A,{id:"username",name:"username",label:"Search Username",variant:"outlined",value:n.username,onChange:c,InputLabelProps:{style:f.floatingLabelStyle},InputProps:{style:f.underlineStyle},sx:{position:"relative",width:"90%",margin:"1rem 0","& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#6699cc"},"&:hover fieldset":{borderColor:"#6699cc"},"&.Mui-focused fieldset":{borderColor:"#6699cc"}}}}),(0,a.jsx)(r.A,{fullWidth:!0,loading:t,loadingPosition:"start",startIcon:(0,a.jsx)(u.A,{}),size:"large",type:"submit",variant:"outlined",sx:{width:"90%",borderColor:"#6699cc",backgroundColor:"#6699cc",color:"#d1dce6","&:hover":{backgroundColor:"#6699cc",borderColor:"#6699cc",boxShadow:"none"},"&.Mui-disabled":{backgroundColor:"#ea6068",borderColor:"#ea6068",color:"#d1dce6"}},children:t?"Loading":"Search"}),e.length>0&&(0,a.jsxs)("div",{style:{color:"#99c794",paddingTop:"2rem"},children:[g," Checking username ",(0,a.jsx)("a",{style:{color:"#d1dce6"},children:y})," on:"]}),(0,a.jsxs)(l.A,{children:[(0,a.jsx)("ul",{children:e.map((e=>(0,a.jsxs)(s.A,{style:{color:"#99c794",textAlign:"left",position:"relative"},children:[j," ",e.site,": ",(0,a.jsx)("a",{style:{color:"#d1dce6"},href:e.url,target:"_blank",children:e.site})]})))}),(0,a.jsx)("ul",{children:e.length>0&&!1===t&&(0,a.jsxs)(s.A,{style:{color:"#99c794",textAlign:"left"},children:[p," End Results: ",(0,a.jsx)("a",{style:{color:"#d1dce6"},children:e.length})]})})]})]})}})]}),(0,a.jsx)(i,{})]})}}}]);
//# sourceMappingURL=277.617442fe.chunk.js.map