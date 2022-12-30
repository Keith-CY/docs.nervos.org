"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,u=d["".concat(l,".").concat(f)]||d[f]||h[f]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(4996),s=(n(9960),["components"]),l={id:"tx-pool",title:"Transaction Pool"},c=void 0,p={unversionedId:"essays/tx-pool",id:"essays/tx-pool",title:"Transaction Pool",description:"Transaction Chaining",source:"@site/docs/essays/tx-pool.md",sourceDirName:"essays",slug:"/essays/tx-pool",permalink:"/docs/essays/tx-pool",draft:!1,editUrl:"https://github.com/nervosnetwork/docs-new/tree/develop/website/docs/essays/tx-pool.md",tags:[],version:"current",frontMatter:{id:"tx-pool",title:"Transaction Pool"},sidebar:"defaultSidebar",previous:{title:"CKB VM Verification Rules",permalink:"/docs/essays/rules"},next:{title:"The General Workflow for Constructing a Transaction",permalink:"/docs/essays/workflow"}},h={},d=[{value:"Transaction Chaining",id:"transaction-chaining",level:2},{value:"Orphan Transaction",id:"orphan-transaction",level:2},{value:"Transaction Weight",id:"transaction-weight",level:2},{value:"Fee Rate",id:"fee-rate",level:2},{value:"Transaction Prioritization",id:"transaction-prioritization",level:2},{value:"Child-Pays-For-Parent (CPFP)",id:"child-pays-for-parent-cpfp",level:2}],f={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"transaction-chaining"},"Transaction Chaining"),(0,r.kt)("p",null,"In CKB, transactions are organized in chains, whereby one transaction spends or ",(0,r.kt)("inlineCode",{parentName:"p"},"dep")," references the outputs of the previous transaction (known as the parent)  and creates outputs for the subsequent transaction (known as the child)."),(0,r.kt)("h2",{id:"orphan-transaction"},"Orphan Transaction"),(0,r.kt)("p",null,"When a chain of transactions is transmitted across the network, they don\u2019t always arrive in order. Sometimes, the child arrives before the parent. In that case, the nodes that see the child first can see the parent transaction it refers to, which is not yet known. Rather than rejecting the child, they put it in a temporary pool and await the arrival of its parent before propagating it to every other node. The pool of transactions without parents is known as the orphan transaction pool. Once the parent arrives, any orphans that reference the Cell created by the parents are released from the pool, revalidated recursively, then the entire chain of transactions can be included in the transaction pool, ready to be mined in a block."),(0,r.kt)("p",null,"Two limits are set on the number of orphan transactions stored in memory, to prevent a denial-of-service attack against CKB nodes. They are defined as DEFAULT_MAX_ORPHAN_TRANSACTIONS and ORPHAN_TX_EXPIRE_TIME in the source code of the CKB client. If the number of orphan transactions in the pool exceeds DEFAULT_MAX_ORPHAN_TRANSACTIONS, one or more randomly selected orphan transactions are evicted, until the pool size is reduced within the limits. If the time of the orphan transactions remaining in the pool exceeds ORPHAN_TX_EXPIRE_TIME, the orphans will also be cleared."),(0,r.kt)("h2",{id:"transaction-weight"},"Transaction Weight"),(0,r.kt)("p",null,"Transaction weight is a measurement of the size and the cycles of a transaction. The calculation is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const BYTES_PER_CYCLES: f64 = 0.000_170_571_4_f64;\n\nmax(size, (cycles * BYTES_PER_CYCLES))\n")),(0,r.kt)("p",null,"Miners select transactions to fill the limited block space that awards the highest fee. Because of the two different limits, serialized size and consumed cycles, the selection algorithm is a multi-dimensional knapsack problem (MDKP). By introducing transaction weight, MDKP is reduced to a typical knapsack problem."),(0,r.kt)("p",null,"For more details on max block size and cycles, see Consensus Parameters."),(0,r.kt)("h2",{id:"fee-rate"},"Fee Rate"),(0,r.kt)("p",null,"Fee rate is the total transaction fees divided by the transaction weight."),(0,r.kt)("h2",{id:"transaction-prioritization"},"Transaction Prioritization"),(0,r.kt)("p",null,"When CKB generates a block template to package transactions, it sorts the transactions according to certain rules to ensure that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Packaged transactions are topologically sorted, meaning that any parent of a transaction is also included. They must appear somewhere in the list before the transaction."),(0,r.kt)("li",{parentName:"ul"},"Packaged transactions should not conflict.")),(0,r.kt)("p",null,"On top of that, packages are designed for ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Incentive_compatibility"},"incentive-compatibility"),". Packaged transactions are not prioritized in terms of individual transactions, but rather in terms of transaction chains."),(0,r.kt)("p",null,"Let's use an example to simply show the selection process when packaging a transaction. As illustrated below, there are two transaction chains: A and B."),(0,r.kt)("img",{src:(0,o.Z)("img/tx AB 1.png")}),(0,r.kt)("p",null,"The transaction information in Chain A is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ta1 fee: 10, weight: 10"),(0,r.kt)("li",{parentName:"ul"},"Ta2 fee: 20, weight: 5"),(0,r.kt)("li",{parentName:"ul"},"Ta3 fee: 10, weight: 10")),(0,r.kt)("p",null,"The transaction information in Chain B is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tb1 fee: 15, weight: 10"),(0,r.kt)("li",{parentName:"ul"},"Tb2 fee: 15, weight: 10"),(0,r.kt)("li",{parentName:"ul"},"Tb3 fee: 15, weight: 10")),(0,r.kt)("p",null,"At this point we can obtain the fee rate of A as 1.6 (10 + 20 + 10) / (10 + 5 + 10) and that of B as 1.5 (15 + 15 + 15) / (10 + 10 + 10). This gives priority to the first transaction in Chain A, Ta1, even though the fee rate of Ta1 is lower than Tb1."),(0,r.kt)("img",{src:(0,o.Z)("img/tx AB 2.png")}),(0,r.kt)("p",null,"After picking out Ta1, the fee rate of Chain A changes, and at this point we no longer count Ta1 in A. The overall fee rate of A changes to 2 (20 + 10) / (5 + 10). By the same reasoning, it can be shown that the next candidate is Ta2."),(0,r.kt)("img",{src:(0,o.Z)("img/tx AB 3.png")}),(0,r.kt)("p",null,"Next, after Ta1 and Ta2 are picked out, A's fee rate changes to 1 (10 / 10), exceeded by B's fee rate. So the next candidate is not Ta3 but Tb1."),(0,r.kt)("img",{src:(0,o.Z)("img/tx AB 4.png")}),(0,r.kt)("p",null,"The above is a brief description of the process of selecting a transaction for the block_template. The specific implementation of the algorithm also involves several other factors, such as size_limit, cycles_limit."),(0,r.kt)("h2",{id:"child-pays-for-parent-cpfp"},"Child-Pays-For-Parent (CPFP)"),(0,r.kt)("p",null,"In the case of a transaction sent with a small fee, it might be necessary to speed up the confirmation time for it to be considered settled. At this point, there is no way to directly increase the fee of the transaction itself. Instead, it is possible to create a new transaction that takes the unconfirmed transaction as its input, and spend it at a higher fee. Miners who want to benefit from this second, more profitable transaction will also need to confirm the first transaction. This is known as child-pays-for-parent (CPFP)."))}u.isMDXComponent=!0}}]);