(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(s,".").concat(b)]||p[b]||m[b]||o;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},53:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(110)),s={title:"Why Rust for Smart Contracts?",slug:"/why-rust-for-smart-contracts"},i={unversionedId:"intro/why-rust",id:"intro/why-rust",isDocsHomePage:!1,title:"Why Rust for Smart Contracts?",description:"pro! chooses not to invent a new programming language, but rather adapt a subset of Rust to serve our purpose.",source:"@site/docs/intro/why-rust.md",slug:"/why-rust-for-smart-contracts",permalink:"/pro-docs/why-rust-for-smart-contracts",editUrl:"https://github.com/pro-docs/edit/master/docs/intro/why-rust.md",version:"current",sidebar:"reference",previous:{title:"Overview",permalink:"/pro-docs/"},next:{title:"Why WebAssembly for Smart Contracts?",permalink:"/pro-docs/why-webassembly-for-smart-contracts"}},c=[],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"pro! chooses not to invent a new programming language, but rather adapt a subset of Rust to serve our purpose.\nIf this doesn't already convince you, you find many more good reasons here:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("span",{class:"highlight"},"Rust is an ideal smart contract language:")," It is type safe, memory safe, and free of undefined behaviors. It generates small binaries because it doesn\u2019t include extra bloat, like a garbage collector, and advanced optimizations and tree shaking remove dead code. Through compiler flags, Rust can automatically protect against integer overflow."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("span",{class:"highlight"},"Rust ecosystem:")," You gain from all of support available to the Rust ecosystem for free. As the language develops, pro! will automatically gain access to new features and functionality, improving how you can write smart contracts in the future."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("span",{class:"highlight"},"Tooling:")," Because pro! follows Rust standards, tools like rustfmt, clippy and rust-analyzer already work out of the box. Same goes for code formatting and syntax highlighting in most modern text editors. Also Rust has an integrated test and benchmark runner,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("span",{class:"highlight"},"No overhead:")," Minimal runtime."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("span",{class:"highlight"},"Safe & Efficient:")," Zero-cost & safe abstractions."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("span",{class:"highlight"},"Productive:")," Cargo + ",Object(o.b)("a",{href:"https://crates.io"},"crates.io")," Ecosystem."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("span",{class:"highlight"},"1st class Wasm:")," Rust provides the first class support for the WebAssembly."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("span",{class:"highlight"},"Small Size:")," In the space-constrained blockchain world size is important. The Rust compiler is a great help for that, since it reorders struct fields in order to make each type as small as possible. Thus Rust data structures are very compact, in many cases even more compact than in C.")))}u.isMDXComponent=!0}}]);