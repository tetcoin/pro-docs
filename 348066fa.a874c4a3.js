(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{110:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=a.a.createContext({}),l=function(t){var e=a.a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=l(t.components);return a.a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.a.createElement(f,s(s({ref:e},c),{},{components:r})):a.a.createElement(f,s({ref:e},c))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return s})),r.d(e,"rightToc",(function(){return u})),r.d(e,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(110)),i={title:"Custom Datastructures",slug:"/datastructures/custom-datastructure"},s={unversionedId:"datastructures/custom",id:"datastructures/custom",isDocsHomePage:!1,title:"Custom Datastructures",description:"While the inkstorage crate provides tons of useful utilities and data structures to organize and manipulate the contract's storage contract authors are not limited by its capabilities. By implementing the core SpreadLayout and PackedLayout traits users are able to define their very own custom storage data structures with their own set of requirement and features that work along the inkstorage data structures as long as they fulfill the mere requirements stated by those two traits.",source:"@site/docs/datastructures/custom.md",slug:"/datastructures/custom-datastructure",permalink:"/pro-docs/datastructures/custom-datastructure",editUrl:"https://github.com/pro-docs/edit/master/docs/datastructures/custom.md",version:"current",sidebar:"reference",previous:{title:"Dynamic Storage Allocator",permalink:"/pro-docs/datastructures/dynamic-allocation"},next:{title:"Overview",permalink:"/pro-docs/examples"}},u=[],c={rightToc:u};function l(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"While the ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage")," crate provides tons of useful utilities and data structures to organize and manipulate the contract's storage contract authors are not limited by its capabilities. By implementing the core ",Object(o.b)("inlineCode",{parentName:"p"},"SpreadLayout")," and ",Object(o.b)("inlineCode",{parentName:"p"},"PackedLayout")," traits users are able to define their very own custom storage data structures with their own set of requirement and features that work along the ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage")," data structures as long as they fulfill the mere requirements stated by those two traits."),Object(o.b)("p",null,"In the future we plan on providing some more pro! workshops and tutorials guiding the approach to design and implement a custom storage data structure."))}l.isMDXComponent=!0}}]);