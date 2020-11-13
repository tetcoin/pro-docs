(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(85)),i={title:"Setup",slug:"/getting-started/setup"},c={unversionedId:"getting-started/setup",id:"getting-started/setup",isDocsHomePage:!1,title:"Setup",description:"To follow this tutorial, you will need to set up some stuff on your computer.",source:"@site/docs/getting-started/setup.md",slug:"/getting-started/setup",permalink:"/ink-docs/getting-started/setup",editUrl:"https://github.com/ink-docs/edit/master/docs/getting-started/setup.md",version:"current",sidebar:"reference",previous:{title:"How it works \u2012 Substrate",permalink:"/ink-docs/how-it-works"},next:{title:"Creating an ink! Project",permalink:"/ink-docs/getting-started/creating-an-ink-project"}},s=[{value:"Substrate Prerequisites",id:"substrate-prerequisites",children:[]},{value:"Installing The Canvas Node",id:"installing-the-canvas-node",children:[]},{value:"ink! CLI",id:"ink-cli",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To follow this tutorial, you will need to set up some stuff on your computer."),Object(o.b)("h2",{id:"substrate-prerequisites"},"Substrate Prerequisites"),Object(o.b)("p",null,"Follow the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://substrate.dev/docs/en/knowledgebase/getting-started/"}),"official installation steps")," from the\nSubstrate Developer Hub Knowledge Base."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"rustup component add rust-src --toolchain nightly\nrustup target add wasm32-unknown-unknown --toolchain stable\n")),Object(o.b)("h2",{id:"installing-the-canvas-node"},"Installing The Canvas Node"),Object(o.b)("p",null,"We need to use a Canvas node with the built-in Contracts module. For this workshop we'll use the pre-designed Substrate node client."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cargo install canvas-node --git https://github.com/paritytech/canvas-node.git --tag v0.1.3 --force\n")),Object(o.b)("h2",{id:"ink-cli"},"ink! CLI"),Object(o.b)("p",null,"The final tool we will be installing is the ink! command line utility which will make setting up Substrate smart contract projects easier."),Object(o.b)("p",null,"You can install the utility using Cargo with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cargo install cargo-contract --vers 0.7.1 --force\n")),Object(o.b)("p",null,"You can then use ",Object(o.b)("inlineCode",{parentName:"p"},"cargo contract --help")," to start exploring the commands made available to you."))}u.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(g,c(c({ref:t},l),{},{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);