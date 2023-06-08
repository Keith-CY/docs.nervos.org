"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(v,s(s({ref:t},d),{},{components:n})):r.createElement(v,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>v,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=n(4996),i=(n(9960),["components"]),c={id:"communitynodes",title:"Community Nodes"},l=void 0,d={unversionedId:"basics/communitynodes",id:"basics/communitynodes",title:"Community Nodes",description:"Developers on the CKB can test and build their projects by accessing the service through the API nodes granted by Nervos.",source:"@site/docs/basics/sharedNodes.md",sourceDirName:"basics",slug:"/basics/communitynodes",permalink:"/docs/basics/communitynodes",draft:!1,editUrl:"https://github.com/nervosnetwork/docs-new/tree/develop/website/docs/basics/sharedNodes.md",tags:[],version:"current",frontMatter:{id:"communitynodes",title:"Community Nodes"},sidebar:"Basics",previous:{title:"Tools",permalink:"/docs/basics/tools"},next:{title:"Glossary",permalink:"/docs/basics/glossary"}},p={},u=[{value:"Ankr",id:"ankr",level:2}],m={toc:u};function v(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Developers on the CKB can test and build their projects by accessing the service through the API nodes granted by Nervos."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If your RPC is remotely accessible, restrict access to the following interfaces when running CKB nodes:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},"clear_banned_addresses\nset_ban\nset_network_active\nadd_node\nremove_node\nremove_transaction\nclear_tx_pool\n")))),(0,a.kt)("h2",{id:"ankr"},"Ankr"),(0,a.kt)("p",null,"Ankr is a decentralized Web3 infrastructure provider offering a distributed node infrastructure that supports a multi-chain network to help developers interact with multiple blockchains. CKB developers can now access the Ankr API and RPC to test or build their own DApps."),(0,a.kt)("img",{src:(0,s.Z)("img/ankr.png")}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ankr.com/rpc/nervos?tab=infrastructure"},"Nervos Ankr Endpoints")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ankr.com/docs/build/chains/nervos/"},"Ankr Documentation on Nervos"))))}v.isMDXComponent=!0}}]);