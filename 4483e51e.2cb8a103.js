(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||r;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},160:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/flipper-code-page-5a4372c716551ab9d83ce53b5566eaa0.png"},161:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/flipper-upload-events-b65f62297c5315c3b09855f5cd814fbe.png"},162:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/flipper-instance-page-6768d7ddd4c78d8d308bdae3722ae193.png"},163:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/flipper-instance-events-0fafd9708b94eddcefc87f757fe37311.png"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(110)),c={title:"Deploy Your Contract",slug:"/getting-started/deploy-your-contract"},i={unversionedId:"getting-started/deploying",id:"getting-started/deploying",isDocsHomePage:!1,title:"Deploy Your Contract",description:"Now that we have generated the Wasm binary from our source code and started a Canvas node, we want to deploy this contract onto our Substrate blockchain.",source:"@site/docs/getting-started/deploying.md",slug:"/getting-started/deploy-your-contract",permalink:"/pro-docs/getting-started/deploy-your-contract",editUrl:"https://github.com/pro-docs/edit/master/docs/getting-started/deploying.md",version:"current",sidebar:"reference",previous:{title:"Run a Substrate Node",permalink:"/pro-docs/getting-started/running-substrate"},next:{title:"Call Your Contract",permalink:"/pro-docs/getting-started/calling-your-contract"}},s=[{value:"Putting Your Code on the Blockchain",id:"putting-your-code-on-the-blockchain",children:[]},{value:"Creating an Instance of Your Contract",id:"creating-an-instance-of-your-contract",children:[]}],l={rightToc:s};function p(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Now that we have generated the Wasm binary from our source code and started a Canvas node, we want to deploy this contract onto our Substrate blockchain."),Object(r.b)("p",null,"Smart contract deployment on Substrate is a little different than on traditional smart contract blockchains."),Object(r.b)("p",null,"Whereas a completely new blob of smart contract source code is deployed each time you push a contract on other platforms, Substrate opts to optimize this behavior. For example, the standard ERC20 token has been deployed to Ethereum thousands of times, sometimes only with changes to the initial configuration (through the Solidity ",Object(r.b)("inlineCode",{parentName:"p"},"constructor")," function). Each of these instances take up space on the blockchain equivalent to the contract source code size, even though no code was actually changed."),Object(r.b)("p",null,"In Substrate, the contract deployment process is split into two halves:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Putting your code on the blockchain"),Object(r.b)("li",{parentName:"ol"},"Creating an instance of your contract")),Object(r.b)("p",null,"With this pattern, contract code like the ERC20 standard can be put on the blockchain a single time, but instantiated any number of times. No need to continually upload the same source code over and waste space on the blockchain."),Object(r.b)("h2",{id:"putting-your-code-on-the-blockchain"},"Putting Your Code on the Blockchain"),Object(r.b)("p",null,"Open the specially designed ",Object(r.b)("strong",{parentName:"p"},"Upload")," section of the Canvas UI."),Object(r.b)("p",null,"Use the dropdown to select a ",Object(r.b)("em",{parentName:"p"},"deployment account")," with some account balance, like ",Object(r.b)("inlineCode",{parentName:"p"},"Alice"),". Enter a name for the contract in the input field. Provide the ",Object(r.b)("inlineCode",{parentName:"p"},"flipper.contract")," file as the bundled Wasm blob and metadata."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Contracts code page for deploying Flipper",src:n(160).default})),Object(r.b)("p",null,"Click ",Object(r.b)("strong",{parentName:"p"},"Upload")," and then ",Object(r.b)("strong",{parentName:"p"},"Sign & Submit")," on the confirmation page."),Object(r.b)("p",null,"This should emit a ",Object(r.b)("inlineCode",{parentName:"p"},"contracts.PutCode")," event. If the transaction succeeds you will get an ",Object(r.b)("inlineCode",{parentName:"p"},"system.ExtrinsicSuccess")," event and your WASM contract will be stored on your Substrate blockchain!"),Object(r.b)("p",null,Object(r.b)("img",{alt:"An image of events from Flipper code upload",src:n(161).default})),Object(r.b)("h2",{id:"creating-an-instance-of-your-contract"},"Creating an Instance of Your Contract"),Object(r.b)("p",null,"Smart contracts exist as an extension of the account system on the blockchain. Thus creating an instance of this contract will create a new ",Object(r.b)("inlineCode",{parentName:"p"},"AccountId")," which will store any balance managed by the smart contract and allow us to interact with the contract."),Object(r.b)("p",null,"After you uploaded the contract in the previous step, a confirmation screen displays the information that represents our smart contract. We now need to deploy our smart contract to create an ",Object(r.b)("strong",{parentName:"p"},"instance"),". Press the ",Object(r.b)("strong",{parentName:"p"},'"Deploy Code"')," button on the confirmation screen."),Object(r.b)("p",null,"To instantiate our contract, accept the default options to give this contract account an ",Object(r.b)("em",{parentName:"p"},"endowment")," of ",Object(r.b)("inlineCode",{parentName:"p"},"1000 Units")," in order to pay the storage rent and set a ",Object(r.b)("em",{parentName:"p"},"maximum gas allowed")," value of ",Object(r.b)("inlineCode",{parentName:"p"},"1000000"),":"),Object(r.b)("p",null,Object(r.b)("img",{alt:"An image of the Contracts Instance Page",src:n(162).default})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," As mentioned earlier, contract creation involves creation of a new Account. As such, you must be sure to give the contract account at least the existential deposit defined by your blockchain. We also need to be able to pay the contract's rent (",Object(r.b)("em",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"em"},"endowment")),"). If we consume all of this deposit, the contract will become invalid. We can always refill the contract's balance and keep it on chain.")),Object(r.b)("p",null,"When you press ",Object(r.b)("strong",{parentName:"p"},"Deploy"),", you should see a flurry of events appear including the creation of a new account (",Object(r.b)("inlineCode",{parentName:"p"},"system.NewAccount"),") and the instantiation of the contract (",Object(r.b)("inlineCode",{parentName:"p"},"contracts.instantiate"),"):"),Object(r.b)("p",null,Object(r.b)("img",{alt:"An image of events from instantiation of Flipper",src:n(163).default})))}p.isMDXComponent=!0}}]);