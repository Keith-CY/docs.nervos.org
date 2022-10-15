"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,b=u["".concat(i,".").concat(p)]||u[p]||f[p]||c;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>f});var a=n(7462),r=n(3366),c=(n(7294),n(3905)),o=["components"],s={id:"transaction",title:"Transaction"},i=void 0,l={unversionedId:"reference/transaction",id:"reference/transaction",title:"Transaction",description:"Transactions are the most fundamental entities for interacting with Nervos CKB. At Layer 1, we are focusing on states, the design of CKB as a Layer 1 blockchain, naturally emphasizes on states. In CKB, transactions are the only way to trigger state changes.",source:"@site/docs/reference/transaction.md",sourceDirName:"reference",slug:"/reference/transaction",permalink:"/docs/reference/transaction",draft:!1,tags:[],version:"current",lastUpdatedBy:"busyforking",lastUpdatedAt:1665837900,formattedLastUpdatedAt:"10/15/2022",frontMatter:{id:"transaction",title:"Transaction"},sidebar:"Reference",previous:{title:"Script",permalink:"/docs/reference/script"},next:{title:"JSON-RPC",permalink:"/docs/reference/rpc"}},d={},f=[{value:"Data Structure",id:"data-structure",level:2}],u={toc:f};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Transactions are the most fundamental entities for interacting with Nervos CKB. At Layer 1, we are focusing on states, the design of CKB as a Layer 1 blockchain, naturally emphasizes on states. In CKB, transactions are the only way to trigger state changes."),(0,c.kt)("p",null,"A state change on CKB is represented by a transaction destroying some cells from previous transactions, and creating some new cells. The concept of state, is reflected via a set of live cells(including the data included in each cell) in CKB. A transaction is atomic, it either gets accepted, or rejected. Partial transaction will never be committed to Nervos CKB>"),(0,c.kt)("p",null,"Due to the above nature of CKB, state changes are usually calculated outside of Nervos CKB, the resulting state is then assembled into a transaction, which is then submitted, validated and finally accepted by Nervos CKB, which is then propagated to the entire network."),(0,c.kt)("h2",{id:"data-structure"},"Data Structure"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Example:")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'{\n  "cell_deps": [\n    {\n      "dep_type": "dep_group",\n      "out_point": {\n        "index": "0x0",\n        "tx_hash": "0xf8de3bb47d055cdf460d93a2a6e1b05f7432f9777c8c474abf4eec1d4aee5d37"\n      }\n    },\n    {\n      "dep_type": "code",\n      "out_point": {\n        "index": "0x0",\n        "tx_hash": "0xc1b2ae129fad7465aaa9acc9785f842ba3e6e8b8051d899defa89f5508a77958"\n      }\n    }\n  ],\n  "hash": "0x65b253cdcb6226e7f8cffec5c47c959b3d74af2caf7970a1eb1500e9b92aa200",\n  "header_deps": [],\n  "inputs": [\n    {\n      "previous_output": {\n        "index": "0x0",\n        "tx_hash": "0x6e64c2a3f248da5115c49ef8100b3a29c4f665517626a513b340821ba8b95f80"\n      },\n      "since": "0x0"\n    }\n  ],\n  "outputs": [\n    {\n      "capacity": "0x34e62ce00",\n      "lock": {\n        "args": "0x927f3e74dceb87c81ba65a19da4f098b4de75a0d",\n        "code_hash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",\n        "hash_type": "type"\n      },\n      "type": {\n        "args": "0x6e9b17739760ffc617017f157ed40641f7aa51b2af9ee017b35a0b35a1e2297b",\n        "code_hash": "0x48dbf59b4c7ee1547238021b4869bceedf4eea6b43772e5d66ef8865b6ae7212",\n        "hash_type": "data"\n      }\n    },\n    {\n      "capacity": "0x711befb618",\n      "lock": {\n        "args": "0x927f3e74dceb87c81ba65a19da4f098b4de75a0d",\n        "code_hash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",\n        "hash_type": "type"\n      },\n      "type": null\n    }\n  ],\n  "outputs_data": [\n    "0x40420f00000000000000000000000000",\n    "0x"\n  ],\n  "version": "0x0",\n  "witnesses": [\n    "0x55000000100000005500000055000000410000007926ec98874bb86143d178826253e18425e50bf85fbb4b7cf9188462e7e87bc810ac602e55b9c73890ab8306368d7d02d96234f250750269e1aa023eb5b71b5100"\n  ]\n}\n')),(0,c.kt)("p",null,"There are already 2 RFCs that describe the transaction structure in great details:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md"},"Data Structures")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md"},"Transaction Structure"))))}p.isMDXComponent=!0}}]);