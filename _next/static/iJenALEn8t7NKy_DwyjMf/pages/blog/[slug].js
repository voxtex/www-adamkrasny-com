(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/a9y":function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),a=n("Nsbk");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var l=n("TqRt");e.__esModule=!0,e.default=void 0;var s=l(n("q1tI")),f=l(n("8Kt/")),p={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function d(t){var e=t.res,n=t.err;return{statusCode:e&&e.statusCode?e.statusCode:n?n.statusCode:404}}var y=function(t){i(n,t);var e=c(n);function n(){return r(this,n),e.apply(this,arguments)}return o(n,[{key:"render",value:function(){var t=this.props.statusCode,e=this.props.title||p[t]||"An unexpected error has occurred";return s.default.createElement("div",{style:m.error},s.default.createElement(f.default,null,s.default.createElement("title",null,t,": ",e)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),t?s.default.createElement("h1",{style:m.h1},t):null,s.default.createElement("div",{style:m.desc},s.default.createElement("h2",{style:m.h2},e,"."))))}}]),n}(s.default.Component);e.default=y,y.displayName="ErrorPage",y.getInitialProps=d,y.origGetInitialProps=d;var m={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},HDwi:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n("rfmo")}])},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},TqRt:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},eomm:function(t,e,n){t.exports=n("/a9y")},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},rfmo:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return l}));var r=n("MX0m"),o=n.n(r),i=n("eomm"),u=n.n(i),a=n("q1tI"),c=n.n(a).a.createElement,l=!0;e.default=function(t){var e=t.post;return e?c("div",{className:"jsx-2907914692"},c("div",{dangerouslySetInnerHTML:{__html:e.content},className:"jsx-2907914692 post"}),c(o.a,{id:"2907914692"},[".post.jsx-2907914692>h1:first-child{margin-top:0;}"])):c(u.a,{statusCode:404})}}},[["HDwi",0,1,3]]]);