"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9591],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),h=l,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],o={id:"cell",title:"Cell"},s=void 0,c={unversionedId:"reference/cell",id:"reference/cell",title:"Cell",description:"Nervos CKB (Common Knowledge Base) is a layer 1 blockchain, a decentralized and secure layer that provides common knowledge custody for the network.  Common knowledge refers to states that are agreed via global consensus.",source:"@site/docs/reference/cell.md",sourceDirName:"reference",slug:"/reference/cell",permalink:"/docs/reference/cell",draft:!1,tags:[],version:"current",lastUpdatedBy:"busyforking",lastUpdatedAt:1664888336,formattedLastUpdatedAt:"10/4/2022",frontMatter:{id:"cell",title:"Cell"},sidebar:"Reference",previous:{title:"Introduction",permalink:"/docs/reference/introduction"},next:{title:"Script",permalink:"/docs/reference/script"}},d={},p=[{value:"Data Structure",id:"data-structure",level:2},{value:"Cell data",id:"cell-data",level:3},{value:"Cell information size calculation",id:"cell-information-size-calculation",level:3},{value:"Live Cell",id:"live-cell",level:2},{value:"Index-Query-Assemble Pattern",id:"index-query-assemble-pattern",level:2},{value:"Tools",id:"tools",level:3},{value:"lumos",id:"lumos",level:4},{value:"ckb-indexer",id:"ckb-indexer",level:4},{value:"perkins-tent",id:"perkins-tent",level:4}],u={toc:p};function h(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nervos CKB (Common Knowledge Base) is a layer 1 blockchain, a decentralized and secure layer that provides common knowledge custody for the network.  Common knowledge refers to ",(0,r.kt)("strong",{parentName:"p"},"states")," that are agreed via global consensus."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cells are the primary state units")," in CKB and assets owned by users. They must follow associated validation rules specified by scripts. In Bitcoin, money is the typical common knowledge stored in the Bitcoin ledger. Nervos CKB, however, takes one step further to store arbitrary common knowledge. We starts from Bitcoin's general architecture, and creates the ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/nervosnetwork/https-medium-com-nervosnetwork-cell-model-7323fca57571"},"Cell Model")," by generalizing from the UTXO model, while at the same time retaining the consistency and simplicity of Bitcoin."),(0,r.kt)("h2",{id:"data-structure"},"Data Structure"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "capacity": "0x19995d0ccf",\n  "lock": {\n    "code_hash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",\n    "args": "0x0a486fb8f6fe60f76f001d6372da41be91172259",\n    "hash_type": "type"\n  },\n  "type": null\n}\n')),(0,r.kt)("p",null,"A Cell has three fields\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"capacity"),": Capacity serves 2 purposes: on one hand, it represents the amount of CKB tokens stored in the cell, on the other hand, it also sets the limit on how much information the cell can store. The basic unit for capacity is ",(0,r.kt)("inlineCode",{parentName:"li"},"shannon"),", a bigger unit ",(0,r.kt)("inlineCode",{parentName:"li"},"CKByte"),", or just ",(0,r.kt)("inlineCode",{parentName:"li"},"CKB")," is also used. 1 CKB equals ",(0,r.kt)("inlineCode",{parentName:"li"},"10**8")," shannons, 1 CKB also means the cell can store 1 byte of information. See below for how to calculate the total information size of a cell."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lock script"),": A script used to guard the cell: when the specified cell is used as an input cell in a transaction, the lock script included in a cell will be executed. The transaction will be rejected when the lock script fails in execution. One typical use case for lock script, is to represent the ownership of a cell, meaning a signature verification phase is usually included in the cell."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type script"),": A script used to validate cell structure. The type script of a cell will be executed both when the cell is included as an input cell, as well as when the cell is created as an output cell. Due to this nature, type script is typically used to validate dapp logic, such as creating UDTs.")),(0,r.kt)("p",null,"Each cell must have a lock script, while type script is optional, and can be omitted. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/script"},"Script")," for the actual format of lock and type script."),(0,r.kt)("h3",{id:"cell-data"},"Cell data"),(0,r.kt)("p",null,"In addition to the above fields, each cell also contains a cell data field. Cell data is just a series of unformatted binary data. Depending on each dapp, anything could be stored in the cell data part:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Script code as explained in ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/script"},"Script"),"."),(0,r.kt)("li",{parentName:"ul"},"Token amount for User Defined Token cells."),(0,r.kt)("li",{parentName:"ul"},"Latest game stats for an on-chain fantasy game.")),(0,r.kt)("p",null,"For future potential, cell data is not stored directly in a cell. It is kept directly in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/transaction#data-structure"},"Transaction"),". You might find a field named ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs_data")," in each transaction. This array should have the same length with ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs"),". At each index location, the corresponding cell data could be located for each created output cell in the transaction. Conceptually, we still consider cell data as part of each output cell."),(0,r.kt)("h3",{id:"cell-information-size-calculation"},"Cell information size calculation"),(0,r.kt)("p",null,"Each cell on Nervos CKB, must not have a lower capacity than the total size of information stored in the cell. The size of information for a cell is calculated as the sum of the following fields:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"8 bytes for cell capacity field."),(0,r.kt)("li",{parentName:"ol"},"32 bytes for code hash in lock script."),(0,r.kt)("li",{parentName:"ol"},"1 byte for hash type in lock script."),(0,r.kt)("li",{parentName:"ol"},"Actual bytes of args field in lock script."),(0,r.kt)("li",{parentName:"ol"},"If type script is present, 32 bytes for code hash in type script."),(0,r.kt)("li",{parentName:"ol"},"If type script is present, 1 byte for hash type in type script."),(0,r.kt)("li",{parentName:"ol"},"If type script is present, actual bytes of args field in type script."),(0,r.kt)("li",{parentName:"ol"},"Actual bytes of cell data.")),(0,r.kt)("p",null,"By summing up all the above fields, we get the total size of information a cell needs. Cell capacity, when measured in ",(0,r.kt)("inlineCode",{parentName:"p"},"CKBytes"),", respresents the maximum size of information that can be held, meaning a valid cell must ensure the CKBytes stored in capacity equal or is larger than the total size of information."),(0,r.kt)("h2",{id:"live-cell"},"Live Cell"),(0,r.kt)("p",null,"Live cell refers to an unspent cell in CKB. It is similar to the concept of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unspent_transaction_output"},"UTXO")," in Bitcoin's terminology. The full set of live cells in CKB, is consider the full state of CKB at that particular point. Any transaction on CKB would consume some cells that were live cells just at the point before it is committed, and created new cells that are considered live cells after it is committed."),(0,r.kt)("h2",{id:"index-query-assemble-pattern"},"Index-Query-Assemble Pattern"),(0,r.kt)("p",null,"Nervos CKB is designed based on the concept of cells. A transaction, at its core, really just consumes some cells, and create another set of cells. As a result, the ability to locate and transform cells, plays a critical role in building any CKB dapps, which leads to the ",(0,r.kt)("inlineCode",{parentName:"p"},"index-query-assemble")," pattern:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Index: when a new block is committed to CKB, a dapp should be able to index relevant cells to its own storage for latter usage."),(0,r.kt)("li",{parentName:"ul"},"Query: when a user action is requested, cells satisfying certain criteria will be queried from the dapp storage."),(0,r.kt)("li",{parentName:"ul"},"Assemble: based on queried cells, a new transaction would be assembled to fulfill user requests.")),(0,r.kt)("p",null,"We believe all CKB dapps can be decomposed into individual actions following this pattern. Here are some examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In a normal CKB wallet, cells should be indexed based on lock scripts. A transfer action would first query cells from the sender, and assemble a transaction which transfer CKBytes to the receiver."),(0,r.kt)("li",{parentName:"ul"},"A NervosDAO manager might index only cells related to NervosDAO. A user might then pick a NervosDAO cell and perform withdraw action, even though there is only one cell related, we can still view it as cells queried from the NervosDAO manager, and a transaction will also be assembled which performs the actual withdraw action."),(0,r.kt)("li",{parentName:"ul"},"A state based dapp might choose to store the latest state in a CKB cell. The dapp will still need to track the latest live cell, which can also be viewed as an indexing operation, any action on the state will result in the latest live cell being queried, assembled into a transaction, then accepted by CKB with a new output cell containing the updated state.")),(0,r.kt)("h3",{id:"tools"},"Tools"),(0,r.kt)("p",null,"Indexing & querying plays a central role in any CKB dapps. In most cases, you don't have to build an indexer from scratch. There are several existing tools one can leverage to fulfill the job:"),(0,r.kt)("h4",{id:"lumos"},"lumos"),(0,r.kt)("p",null,"Our dapp framework, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos"},"lumos")," already contains a ready-to-use indexer. When you are using lumos, it is very likely the indexer is already setup for you to use. Please refer to our labs for how to setup lumos."),(0,r.kt)("h4",{id:"ckb-indexer"},"ckb-indexer"),(0,r.kt)("p",null,"A standalone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/quake/ckb-indexer"},"ckb-indexer")," also handles the job of indexing cells. It provides an RPC mechanism you can use to query for relevant cells. Please refer to the documentation of ckb-indexer for more details."),(0,r.kt)("h4",{id:"perkins-tent"},"perkins-tent"),(0,r.kt)("p",null,"If you are looking at a one-stop solution, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xxuejie/perkins-tent"},"Perkins' Tent")," provides a single docker image that starts both CKB and ckb-indexer in one dockerisntance. With a single command, you should be able to start a CKB instance and be ready to use the enclosed ckb-indexer for querying tasks."))}h.isMDXComponent=!0}}]);