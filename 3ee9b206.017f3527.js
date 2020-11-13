(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(85)),c={title:"Creating an ink! Project",slug:"/getting-started/creating-an-ink-project"},i={unversionedId:"getting-started/creating",id:"getting-started/creating",isDocsHomePage:!1,title:"Creating an ink! Project",description:"We are going to use the ink! CLI to generate the files we need for a Substrate smart contract project.",source:"@site/docs/getting-started/creating.md",slug:"/getting-started/creating-an-ink-project",permalink:"/ink-docs/getting-started/creating-an-ink-project",editUrl:"https://github.com/ink-docs/edit/master/docs/getting-started/creating.md",version:"current",sidebar:"reference",previous:{title:"Setup",permalink:"/ink-docs/getting-started/setup"},next:{title:"Building Your Contract",permalink:"/ink-docs/getting-started/building-your-contract"}},l=[{value:"Contract Source Code",id:"contract-source-code",children:[]},{value:"Testing Your Contract",id:"testing-your-contract",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We are going to use the ink! CLI to generate the files we need for a Substrate smart contract project."),Object(a.b)("p",null,"Make sure you are in your working directory, and then run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cargo contract new flipper\n")),Object(a.b)("p",null,"This command will create a new project folder named ",Object(a.b)("inlineCode",{parentName:"p"},"flipper")," which we will explore:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd flipper/\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ink! Contract Project")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"flipper\n|\n+-- lib.rs                <-- Contract Source Code\n|\n+-- Cargo.toml            <-- Rust Dependencies and ink! Configuration\n|\n+-- .gitignore\n")),Object(a.b)("h2",{id:"contract-source-code"},"Contract Source Code"),Object(a.b)("p",null,'The ink CLI automatically generates the source code for the "Flipper" contract, which is about the simplest "smart" contract you can build. You can take a sneak peak as to what will come by looking at the source code here:'),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/paritytech/ink/blob/v3.0.0-rc1/examples/flipper/lib.rs"}),"Flipper Example Source Code")),Object(a.b)("p",null,"The Flipper contract is nothing more than a ",Object(a.b)("inlineCode",{parentName:"p"},"bool")," which gets flipped from true to false through the ",Object(a.b)("inlineCode",{parentName:"p"},"flip()")," function. We won't go so deep into the details of this source code because we will be walking you through the steps to build a more advanced contract!"),Object(a.b)("h2",{id:"testing-your-contract"},"Testing Your Contract"),Object(a.b)("p",null,"You will see at the bottom of the source code there is a simple test which verifies the functionality of the contract. We can quickly test that this code is functioning as expected using the ",Object(a.b)("strong",{parentName:"p"},"off-chain test environment")," that ink! provides."),Object(a.b)("p",null,"In your project folder run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cargo +nightly test\n")),Object(a.b)("p",null,"To which you should see a successful test completion:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ cargo +nightly test\n    running 2 tests\n    test flipper::tests::it_works ... ok\n    test flipper::tests::default_works ... ok\n\n    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n")),Object(a.b)("p",null,"Now that we are feeling confident things are working, we can actually compile this contract to Wasm."))}u.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(g,i(i({ref:t},s),{},{components:n})):o.a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);