(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{60:function(e,t,a){e.exports=a(90)},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(16),c=a.n(r),o=a(7),s=a(22);var u=e=>{let{blog:t}=e;return n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(s.b,{to:"/blogs/".concat(t.id)},t.title," by ",t.author))))},m=a(92);const i=n.a.forwardRef((e,t)=>{const[a,r]=Object(l.useState)(!1),c={display:a?"none":""},o={display:a?"":"none"},s=()=>{r(!a)};return Object(l.useImperativeHandle)(t,()=>({toggleVisibility:s})),n.a.createElement("div",null,n.a.createElement("p",{style:c},n.a.createElement(m.a,{variant:"primary",onClick:s},e.buttonLabel)),n.a.createElement("div",{style:o},e.children,n.a.createElement(m.a,{variant:"danger",onClick:s},"Cancel")))});i.displayName="Togglable";var d=i,E=a(97),b=a(52);var g=e=>{let{createBlog:t}=e;const[a,r]=Object(l.useState)(""),[c,o]=Object(l.useState)(""),[s,u]=Object(l.useState)("");return n.a.createElement("div",null,n.a.createElement("h2",null,"Add a new blog"),n.a.createElement(E.a,{onSubmit:e=>{e.preventDefault(),t({title:a,author:c,url:s}),r(""),o(""),u("")}},n.a.createElement(b.a,null,n.a.createElement(E.a.Label,null,"Title"),n.a.createElement(E.a.Control,{id:"title",type:"text",value:a,onChange:e=>{let{target:t}=e;return r(t.value)}})),n.a.createElement(b.a,null,n.a.createElement(E.a.Label,null,"Author"),n.a.createElement(E.a.Control,{id:"author",type:"text",value:c,onChange:e=>{let{target:t}=e;return o(t.value)}})),n.a.createElement(b.a,null,n.a.createElement(E.a.Label,null,"URL"),n.a.createElement(E.a.Control,{id:"url",type:"text",value:s,onChange:e=>{let{target:t}=e;return u(t.value)}})),n.a.createElement(m.a,{variant:"primary",type:"submit",id:"createButton"},"Add blog"),n.a.createElement("p",null)))},p=a(21),h=a.n(p);const y="/api/blogs";let v=null;var f=()=>h.a.get(y).then(e=>e.data),O=e=>{v="bearer ".concat(e)},w=async e=>{const t={headers:{Authorization:v}};return(await h.a.post(y,e,t)).data},C=(e,t)=>h.a.put("".concat(y,"/").concat(e),t).then(e=>e.data),T=(e,t)=>h.a.post("".concat(y,"/").concat(e,"/comments"),t).then(e=>e.data);let j;const k=(e,t)=>(clearTimeout(j),async a=>{a({type:"SET_NOTIFICATION",data:{text:e,cName:t}}),j=setTimeout(()=>{a({type:"CLEAR_NOTIFICATION"})},5e3)});var L=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return{text:t.data.text,cName:t.data.cName};case"CLEAR_NOTIFICATION":return"";default:return e}};var S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return t.data;case"CREATE_NEW":return[...e,t.data];case"UPDATE_BLOG":{const a=t.data;return e.map(e=>e.id!==a.id?e:a)}case"DELETE_BLOG":{const a=t.data;return e.filter(e=>e.id!==a)}default:return e}},I=a(93);var N=e=>{let{blogs:t}=e;const a=Object(o.b)(),l=async e=>{var t;r.current.toggleVisibility(),a((t=e,async e=>{try{const a=await w(t);e({type:"CREATE_NEW",data:a}),e(k("a new blog ".concat(a.title," by ").concat(a.author," added"),"success"))}catch(a){e(k("Failed to create new blog, please provide all information","danger"))}}))},r=n.a.createRef();return n.a.createElement("div",null,n.a.createElement(d,{buttonLabel:"add new blog",ref:r},n.a.createElement(g,{createBlog:l})),n.a.createElement("h2",null,"Blogs"),n.a.createElement(I.a,{striped:!0,hover:!0},t.sort((e,t)=>{let{likes:a}=e,{likes:l}=t;return l-a}).map(e=>n.a.createElement(u,{key:e.id,blog:e}))))},A=a(99);var B=()=>{const e=Object(o.c)(e=>e.notification);return null===e?null:n.a.createElement(A.a,{variant:e.cName},e.text)},U=a(5);var _=e=>{let{blogs:t,uniqueUsers:a}=e;for(let l of a){const e=t.filter(e=>e.user.id===l.id);l.blogs=e}return t||a?(console.log(a),n.a.createElement("div",null,n.a.createElement(I.a,{striped:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Users"),n.a.createElement("th",null,"Blogs created"))),n.a.createElement("tbody",null,a.map(e=>n.a.createElement("tr",{key:e.id},n.a.createElement("th",null,n.a.createElement(s.b,{to:"/users/".concat(e.id)},e.name)),n.a.createElement("th",null,e.blogs.length))))))):null};var R=async e=>(await h.a.post("/api/login",e)).data;const x=window.localStorage.getItem("loggedBlogAppUser");let D;x&&(D=JSON.parse(x),O(D.token));var G=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D||null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":return t.data;case"CLEAR_USER":return null;default:return e}},F=a(94),P=a(53);var q=e=>{const[t,a]=Object(l.useState)(""),[r,c]=Object(l.useState)(""),s=Object(o.b)();return n.a.createElement("div",null,n.a.createElement("h2",null,"Please login to Blog app"),n.a.createElement("p",null),n.a.createElement(E.a,{onSubmit:l=>{l.preventDefault(),a(""),c(""),s(((e,t)=>async a=>{try{const l=await R({username:e,password:t});window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(l)),O(l.token),a({type:"USER_LOGIN",data:l}),a(k("Welcome ".concat(l.name),"success"))}catch(l){a(k("Wrong username or password","danger"))}})(t,r)),e.history.push("/blogs")}},n.a.createElement(b.a,{as:F.a},n.a.createElement(E.a.Label,{column:!0,sm:2},"Username"),n.a.createElement(P.a,{sm:5},n.a.createElement(E.a.Control,{id:"username",type:"text",value:t,name:"Username",onChange:e=>{let{target:t}=e;return a(t.value)}}))),n.a.createElement(b.a,{as:F.a},n.a.createElement(E.a.Label,{column:!0,sm:2},"Password"),n.a.createElement(P.a,{sm:5},n.a.createElement(E.a.Control,{id:"password",type:"password",value:r,name:"Password",onChange:e=>{let{target:t}=e;return c(t.value)}}))),n.a.createElement(m.a,{variant:"primary",type:"submit"},"Login")))},M=a(95),W=a(56);var J=e=>{let{userMatch:t,users:a,uniqueUsers:l,blogs:r}=e;for(let n of l){const e=r.filter(e=>e.user.id===n.id);n.blogs=e}const c=t?a.find(e=>e.id===t.params.id):null;return c?n.a.createElement("div",null,n.a.createElement("h2",null,c.name),n.a.createElement(M.a,null,"Added blogs",c.blogs.map(e=>n.a.createElement(W.a,{key:e.id,action:!0,href:"/blogs/".concat(e.id),variant:"primary"},e.title)))):null},z=a(98),V=a(100);var H=e=>{let{user:t,history:a}=e;const l=Object(o.b)();return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(z.a,{bg:"light",variant:"light"},n.a.createElement(V.a.Item,null,n.a.createElement(V.a.Link,{href:"/blogs"},"Blogs")),n.a.createElement(V.a.Item,null,n.a.createElement(V.a.Link,{href:"/users"},"Users")),n.a.createElement(z.a.Collapse,{className:"justify-content-end"},n.a.createElement(z.a.Text,null,t.name," logged in \xa0",n.a.createElement(m.a,{variant:"secondary",size:"sm",type:"submit",id:"logOutButton",onClick:()=>{l((window.localStorage.clear(),{type:"CLEAR_USER"})),l(k("".concat(t.name," has safely logged out"),"success")),a.push("/")}},"log out"))))),n.a.createElement("h1",null,"Blog app"))},K=a(101);const Q=e=>{let{content:t}=e;return n.a.createElement(n.a.Fragment,null,n.a.createElement(W.a,null,t))};var X=e=>{let{blog:t,like:a,addComment:r}=e;const[c,o]=Object(l.useState)("");return n.a.createElement("div",null,n.a.createElement(K.a,{className:"mb-2"},n.a.createElement(K.a.Body,null,n.a.createElement(K.a.Title,null,t.title),n.a.createElement(K.a.Text,null,"Blog by ",t.author),n.a.createElement(K.a.Subtitle,null,t.likes," likes ",n.a.createElement(m.a,{variant:"success",type:"button",size:"sm",onClick:()=>a(t)},"Like")),n.a.createElement(K.a.Link,{href:t.url},t.url),n.a.createElement(K.a.Text,null,"Added by ",t.user.username),n.a.createElement("strong",null,"comments:"),n.a.createElement(M.a,{variant:"flush"},t.comments.map(e=>n.a.createElement(Q,{key:e.id,content:e.content}))))),n.a.createElement(E.a,{onSubmit:e=>{e.preventDefault(),r(c),o("")}},n.a.createElement(b.a,null,n.a.createElement(E.a.Label,null,"Add your comment:"),n.a.createElement(E.a.Control,{id:"comment",type:"text",value:c,onChange:e=>{let{target:t}=e;return o(t.value)}})),n.a.createElement(m.a,{type:"submit"},"Send comment")))};var Y=e=>{let{blogs:t,blogMatch:a,user:l}=e;const r=Object(o.b)(),c=a?t.find(e=>e.id===a.params.id):null;return c?n.a.createElement(X,{blog:c,like:e=>{r((e=>async t=>{try{const a={...e,likes:e.likes+1};t({type:"UPDATE_BLOG",data:await C(e.id,a)}),t(k("Thanks for liking!","success"))}catch(a){t(k("Blog '".concat(e.title,"' was already removed from the server"),"danger"))}})(e))},addComment:e=>{r(((e,t)=>async a=>{try{a({type:"UPDATE_BLOG",data:await T(t.id,e)}),a(k("Thanks for commenting!","success"))}catch(l){a(k("Unable to add comment","danger"))}})({content:e},c))},user:l}):null},Z=a(57),$=a(96);a(89);var ee=()=>{const e=Object(o.b)();Object(l.useEffect)(()=>{e(async e=>{e({type:"INIT_BLOGS",data:await f()})})},[e]);const t=Object(o.c)(e=>e.user),a=Object(o.c)(e=>e.blogs),r=a.map(e=>e.user),c=Object(Z.uniqBy)(r,"id"),s=Object(U.g)(),u=Object(U.h)("/users/:id"),m=Object(U.h)("/blogs/:id");return n.a.createElement($.a,{className:"justify-content-md-center mt-2 mb-2"},n.a.createElement(B,null),t?n.a.createElement(H,{user:t,history:s}):null,n.a.createElement(U.d,null,n.a.createElement(U.b,{path:"/api/users/:id"},t?n.a.createElement(J,{blogs:a,userMatch:u,users:r,uniqueUsers:c}):n.a.createElement(U.a,{to:"/"})),n.a.createElement(U.b,{path:"/api/blogs/:id"},t?n.a.createElement(Y,{blogs:a,blogMatch:m,user:t}):n.a.createElement(U.a,{to:"/"})),n.a.createElement(U.b,{path:"/api/blogs"},t?n.a.createElement(N,{blogs:a,history:s,user:t}):n.a.createElement(U.a,{to:"/"})),n.a.createElement(U.b,{path:"/api/users"},t?n.a.createElement(_,{blogs:a,uniqueUsers:c}):n.a.createElement(U.a,{to:"/"})),n.a.createElement(U.b,{path:"/"},t?n.a.createElement(U.a,{to:"/api/blogs"}):n.a.createElement(q,{history:s}))))},te=a(28),ae=a(59),le=a(58);const ne=Object(te.combineReducers)({blogs:S,notification:L,user:G});var re=Object(te.createStore)(ne,Object(le.composeWithDevTools)(Object(te.applyMiddleware)(ae.a)));c.a.render(n.a.createElement(o.a,{store:re},n.a.createElement(s.a,null,n.a.createElement(ee,null))),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.823afd1e.chunk.js.map