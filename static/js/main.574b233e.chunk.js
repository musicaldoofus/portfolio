(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,t,n){e.exports=n(36)},24:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),l=n.n(r),i=n(2),h=n(3),c=n(7),s=(n(24),function(e){var t=e.children,n=e.cName,r=Object(a.useState)(!1),l=Object(i.a)(r,2),h=l[0],s=l[1],u=Object(c.f)();return Object(a.useEffect)((function(){s(!0)}),[u]),o.a.createElement("main",{className:"".concat(n||""," ").concat(h?"active":"initial")},t)}),u=function(e){var t=e.color,n=e.top,r=e.left,l=e.width,h=e.height,c=e.handleClose,s=Object(a.useState)(!1),u=Object(i.a)(s,2),d=u[0],m=u[1];Object(a.useEffect)((function(){m(!0)}),[]);var p={left:r,top:n,width:l,height:h,opacity:1};return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"accent-block-expanded ".concat(t),style:d?{left:0,top:0,width:"100%",height:"100%"}:p}),o.a.createElement("button",{onClick:function(){m(!1),c()},style:{}},"\xd7"))},d=(n(29),function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useRef)(null),h=Object(a.useRef)(null),c=Object(a.useRef)(null),d=function(e){var t="blue"===e?l:h,n=t.current.getBoundingClientRect(),a=n.width,o=n.height,i=n.top,s=n.left;r({color:e,width:a,height:o,top:i,left:s});var u=document.querySelector(".nav-links").getBoundingClientRect().top,d=c.current.getBoundingClientRect().left,m=0-(i-u),p="transform: translate(".concat(0-(s-d),"px, ").concat(m,"px)");t.current.style=p};return o.a.createElement(s,null,o.a.createElement("div",{ref:c,className:"page root"},o.a.createElement("header",{className:"header-center"},o.a.createElement("h1",null,"Hi there, I'm Michael. I design ",o.a.createElement("span",{ref:l,onClick:function(){return d("blue")},className:"accent-block blue ".concat(n&&"blue"===n.color?"expanded":"initial")},"learning")," for ",o.a.createElement("span",{ref:h,onClick:function(){return d("pink")},className:"accent-block pink ".concat(n&&"pink"===n.color?"expanded":"initial")},"humans"),"."))),n&&o.a.createElement(u,Object.assign({},n,{handleClose:function(){return r(void 0)}})))}),m=function(e){var t=e.header,n=e.paragraph;return o.a.createElement("div",{className:"about-card stub"},o.a.createElement("h2",null,t),o.a.createElement("p",null,n))},p=[{header:"I recognize the power of behavior change.",paragraph:""},{header:"Solving puzzles is my passion.",paragraph:""},{header:"I deliver quality experiences that delight users and create business impact.",paragraph:""},{header:"I'm media- and format-agnostic. Users don't have time for my technical stuff.",paragraph:""},{header:"I [consult -> design -> develop -> iterate -> evaluate -> implement -> repeat]",paragraph:""}],w=(n(30),function(){var e=Object(a.useState)(void 0),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){r(document.querySelector(".nav-links").getBoundingClientRect().y)}),[]),o.a.createElement(s,null,o.a.createElement("div",{className:"page about",style:{paddingTop:"".concat(n,"px")}},o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("h1",null,"/ About")),o.a.createElement("p",null,"Let's get to know each other.")),p.map((function(e){return o.a.createElement(m,e)}))))}),k=(n(31),function(e){var t=e.stubId,n=e.title,a=e.postedDate,r=e.duration,l=e.description;return o.a.createElement("div",{className:"stub"},o.a.createElement(h.c,{to:"/blog/".concat(t)},o.a.createElement("h3",null,o.a.createElement("b",null,n)),o.a.createElement("p",null,o.a.createElement("em",null,"Posted: ",a)),o.a.createElement("p",null,o.a.createElement("em",null,"Duration: ",r," read")),o.a.createElement("p",null,l)))}),f=[{stubId:"serverless-worth-the-work",title:"It's worth the work: saving cash through serverless architecture",postedDate:"March 3, 2020",duration:"3 minute",description:"",markupContent:"\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        "},{stubId:"serverless-worth-the-work",title:"It's worth the work: saving cash through serverless architecture",postedDate:"March 3, 2020",duration:"3 minute",description:"",markupContent:"\n            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        "},{stubId:"serverless-worth-the-work",title:"It's worth the work: saving cash through serverless architecture",postedDate:"March 3, 2020",duration:"3 minute",description:"",markupContent:"\n            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        "},{stubId:"serverless-worth-the-work",title:"It's worth the work: saving cash through serverless architecture",postedDate:"March 3, 2020",duration:"3 minute",description:"",markupContent:"\n            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        "},{stubId:"serverless-worth-the-work",title:"It's worth the work: saving cash through serverless architecture",postedDate:"March 3, 2020",duration:"3 minute",description:"",markupContent:"\n            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        "},{stubId:"serverless-worth-the-work",title:"It's worth the work: saving cash through serverless architecture",postedDate:"March 3, 2020",duration:"3 minute",description:"",markupContent:"\n            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        "},{stubId:"serverless-worth-the-work",title:"It's worth the work: saving cash through serverless architecture",postedDate:"March 3, 2020",duration:"3 minute",description:"",markupContent:"\n            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        "},{stubId:"serverless-worth-the-work",title:"It's worth the work: saving cash through serverless architecture",postedDate:"March 3, 2020",duration:"3 minute",description:"",markupContent:"\n            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.\n        "}],b=function(){var e=Object(a.useState)(void 0),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){r(document.querySelector(".nav-links").getBoundingClientRect().y)}),[]),o.a.createElement(s,{cName:"blog"},o.a.createElement("div",{className:"page blog blog-root",style:{paddingTop:"".concat(n,"px")}},o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("h1",null," / Blog")),o.a.createElement("p",null,"Professional and personal thoughts.")),o.a.createElement("div",{className:"stubs-list"},f.map((function(e){return o.a.createElement(k,Object.assign({key:e.stubId},e))})))))},y=function(e){var t=e.match,n=Object(a.useState)(void 0),r=Object(i.a)(n,2),l=r[0],c=r[1];Object(a.useEffect)((function(){c(document.querySelector(".nav-links").getBoundingClientRect().y)}),[]);var u=f.filter((function(e){return e.stubId===t.params.stubId}))[0];if(!t.params||!t.params.hasOwnProperty("stubId")||!u)return o.a.createElement(s,{cName:"blog"},o.a.createElement("div",null,o.a.createElement("h2",null,"Oops."),o.a.createElement("p",null,"Looks like that post doesn't exist.")));var d=u.title,m=u.postedDate,p=u.duration,w=u.description,k=u.markupContent;return o.a.createElement(s,{cName:"blog"},o.a.createElement("div",{className:"blog-post",style:{paddingTop:"".concat(l,"px")}},o.a.createElement("div",null,o.a.createElement(h.c,{to:"/blog"},o.a.createElement("h1",{className:"header-small muted"},"/ Blog")),o.a.createElement("header",null,o.a.createElement("h2",null,d)),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("em",null,"Posted: ",m)),o.a.createElement("p",null,o.a.createElement("em",null,"Duration: ",p," read")),w&&o.a.createElement("p",null,w))),o.a.createElement("div",{className:"blog-content"},k)))},v=(n(32),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{exact:!0,path:"/blog",component:b}),o.a.createElement(c.a,{path:"/blog/:stubId",component:y}))}),E=function(){return o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/",component:d}),o.a.createElement(c.a,{path:"/blog",component:v}),o.a.createElement(c.a,{path:"/about",component:w}))},I=[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/work",label:"Work"},{to:"/blog",label:"Blog"},{to:"/contact",label:"Contact"}],g=(n(33),function(){return o.a.createElement("nav",null,o.a.createElement("div",{className:"nav-links"},o.a.createElement("ul",null,I.map((function(e){var t=e.to,n=e.label;return o.a.createElement("li",{key:t},o.a.createElement(h.c,{to:t,"aria-current":"page"},n))})))))}),T=(n(34),function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(c.f)();return Object(a.useEffect)((function(){l&&"/"!==l.pathname?r(!0):r(!1)}),[l]),o.a.createElement("footer",{id:"footer",role:"contentinfo",className:"".concat(n?"box-shadow":"initial")},o.a.createElement("span",null,"Copryight 2020 Michael Burns"))}),O=function(){return window.location.href.indexOf("github")>-1?o.a.createElement(h.b,null,o.a.createElement(g,null),o.a.createElement(E,null)):o.a.createElement(h.a,null,o.a.createElement(g,null),o.a.createElement(E,null),o.a.createElement(T,null))},A=(n(35),function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){window.setTimeout((function(){r(!1)}),1500)}),[]),o.a.createElement("div",{className:"app"},n&&o.a.createElement("div",{className:"intro-line-container"},o.a.createElement("div",{className:"intro-line"})),o.a.createElement(O,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.574b233e.chunk.js.map