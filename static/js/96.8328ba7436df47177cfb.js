webpackJsonp([96],{1218:function(t,e,o){var n=o(1219);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(270)("69eab490",n,!0)},1219:function(t,e,o){e=t.exports=o(86)(),e.push([t.i,"\n.ximg-demo {\n  width: 100%;\n  height: auto;\n}\n.ximg-error {\n  background-color: yellow;\n}\n.ximg-error:after {\n  content: '\\52A0\\8F7D\\5931\\8D25';\n  color: red;\n}\n",""])},1220:function(t,e,o){"use strict";var n=o(660);n.a},1221:function(t,e,o){"use strict";var n=o(660);e.a={components:{XImg:n.a},methods:{success:function(t,e){console.log("success load",t);var o=e.parentNode.querySelector("span");e.parentNode.removeChild(o)},error:function(t,e,o){console.log("error load",o,t),e.parentNode.querySelector("span").innerText="load error"}},data:function(){return{list:["https://o5omsejde.qnssl.com/demo/test1.jpg","https://o5omsejde.qnssl.com/demo/test2.jpg","https://o5omsejde.qnssl.com/demo/test0.jpg","https://o5omsejde.qnssl.com/demo/test4.jpg","https://o5omsejde.qnssl.com/demo/test5.jpg","https://o5omsejde.qnssl.com/demo/test6.jpg","https://o5omsejde.qnssl.com/demo/test7.jpg","https://o5omsejde.qnssl.com/demo/test8.jpg"]}}}},1222:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"b",function(){return s});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.list,function(e){return o("div",{staticStyle:{"background-color":"yellow","text-align":"center"}},[o("span",{staticStyle:{"font-size":"20px"}},[t._v("Loading")]),t._v(" "),o("x-img",{staticClass:"ximg-demo",attrs:{src:e,"webp-src":e+"?type=webp","error-class":"ximg-error",offset:-100,container:"#vux_view_box_body"},on:{"on-success":t.success,"on-error":t.error}})],1)}))},s=[]},333:function(t,e,o){"use strict";function n(t){o(1218)}Object.defineProperty(e,"__esModule",{value:!0});var s=(o(1220),o(1221)),r=o(1222),i=o(0),c=n,a=Object(i.a)(s.a,r.a,r.b,!1,c,null,null);e.default=a.exports},660:function(t,e,o){"use strict";function n(t){o(717)}var s=(o(719),o(720)),r=o(721),i=o(0),c=n,a=Object(i.a)(s.a,r.a,r.b,!1,c,null,null);e.a=a.exports},661:function(t,e,o){var n,s;!function(r,i){n=i,void 0!==(s="function"==typeof n?n.call(e,o,e,t):n)&&(t.exports=s)}(0,function(){"use strict";function t(t){var o=t._util;if(o.elements=u(t.options.selector),o.count=o.elements.length,o.destroyed&&(o.destroyed=!1,t.options.container&&m(t.options.container,function(t){f(t,"scroll",o.validateT)}),f(window,"resize",o.saveViewportOffsetT),f(window,"resize",o.validateT),f(window,"scroll",o.validateT),t.options.scroller)){var n=t.options.scroller._xscroll,s=n.userConfig.useOriginScroll?"scroll":"scrollend";n.on("afterrender",o.validateT,t),n.on(s,o.validateT,t)}e(t)}function e(t){for(var e=t._util,n=0;n<e.count;n++){var s=e.elements[n];(o(s)||a(s,t.options.successClass))&&(t.load(s),e.elements.splice(n,1),e.count--,n--)}0===e.count&&t.destroy()}function o(t){var e=t.getBoundingClientRect();return e.right>=h.left&&e.bottom>=h.top&&e.left<=h.right&&e.top<=h.bottom}function n(t,e,o){if(!a(t,o.successClass)&&(e||o.loadInvisible||t.offsetWidth>0&&t.offsetHeight>0)){var n=t.getAttribute(g)||t.getAttribute(o.src);if(n){var u=n.split(o.separator),d=u[A&&u.length>1?1:0],v=c(t,"img");if(v||void 0===t.src){var h=new Image,y=function(){o.error&&o.error(t,"invalid"),l(t,o.errorClass),p(h,"error",y),p(h,"load",x)},x=function(){if(v){r(t,d),i(t,w,o.srcset);var e=t.parentNode;e&&c(e,"picture")&&m(e.getElementsByTagName("source"),function(t){i(t,w,o.srcset)}),o.scroller&&o.scroller.reset()}else t.style.backgroundImage='url("'+d+'")';s(t,o),p(h,"load",x),p(h,"error",y)};f(h,"error",y),f(h,"load",x),r(h,d)}else r(t,d),s(t,o)}else c(t,"video")?(m(t.getElementsByTagName("source"),function(t){i(t,b,o.src)}),t.load(),s(t,o)):(o.error&&o.error(t,"missing"),l(t,o.errorClass))}}function s(t,e){l(t,e.successClass),e.success&&e.success(t),t.removeAttribute(e.src),m(e.breakpoints,function(e){t.removeAttribute(e.src)})}function r(t,e){t[b]=e}function i(t,e,o){var n=t.getAttribute(o);n&&(t[e]=n,t.removeAttribute(o))}function c(t,e){return t.nodeName.toLowerCase()===e}function a(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")}function l(t,e){a(t,e)||(t.className+=" "+e)}function u(t){for(var e=[],o=document.querySelectorAll(t),n=o.length;n--;e.unshift(o[n]));return e}function d(t){h.bottom=(window.innerHeight||document.documentElement.clientHeight)+t,h.right=(window.innerWidth||document.documentElement.clientWidth)+t}function f(t,e,o){t.attachEvent?t.attachEvent&&t.attachEvent("on"+e,o):t.addEventListener(e,o,!1)}function p(t,e,o){t.detachEvent?t.detachEvent&&t.detachEvent("on"+e,o):t.removeEventListener(e,o,!1)}function m(t,e){if(t&&e)for(var o=t.length,n=0;n<o&&!1!==e(t[n],n);n++);}function v(t,e,o){var n=0;return function(){var s=+new Date;s-n<e||(n=s,t.apply(o,arguments))}}var g,h,A,b="src",w="srcset";return function(o){if(!document.querySelectorAll){var s=document.createStyleSheet();document.querySelectorAll=function(t,e,o,n,r){for(r=document.all,e=[],t=t.replace(/\[for\b/gi,"[htmlFor").split(","),o=t.length;o--;){for(s.addRule(t[o],"k:v"),n=r.length;n--;)r[n].currentStyle.k&&e.push(r[n]);s.removeRule(0)}return e}}var r=this,i=r._util={};i.elements=[],i.destroyed=!0,r.options=o||{},r.options.error=r.options.error||!1,r.options.offset=r.options.offset||100,r.options.success=r.options.success||!1,r.options.selector=r.options.selector||".b-lazy",r.options.separator=r.options.separator||"|",r.options.container=!!r.options.container&&document.querySelectorAll(r.options.container),r.options.errorClass=r.options.errorClass||"b-error",r.options.breakpoints=r.options.breakpoints||!1,r.options.loadInvisible=r.options.loadInvisible||!1,r.options.successClass=r.options.successClass||"b-loaded",r.options.validateDelay=r.options.validateDelay||25,r.options.saveViewportOffsetDelay=r.options.saveViewportOffsetDelay||50,r.options.srcset=r.options.srcset||"data-srcset",r.options.src=g=r.options.src||"data-src",A=window.devicePixelRatio>1,h={},h.top=0-r.options.offset,h.left=0-r.options.offset,r.revalidate=function(){t(this)},r.load=function(t,e){var o=this.options;void 0===t.length?n(t,e,o):m(t,function(t){n(t,e,o)})},r.destroy=function(){var t=this,e=t._util;t.options.container&&m(t.options.container,function(t){p(t,"scroll",e.validateT)}),p(window,"scroll",e.validateT),p(window,"resize",e.validateT),p(window,"resize",e.saveViewportOffsetT),t.scroller&&t.scroller._xscroll&&t.scroller._xscroll.off("scroll scrollend afterrender",e.validateT,t.scroller._xscroll),e.count=0,e.elements.length=0,e.destroyed=!0},i.validateT=v(function(){e(r)},r.options.validateDelay,r),i.saveViewportOffsetT=v(function(){d(r.options.offset)},r.options.saveViewportOffsetDelay,r),d(r.options.offset),m(r.options.breakpoints,function(t){if(t.width>=window.screen.width)return g=t.src,!1}),setTimeout(function(){t(r)})}})},662:function(t,e,o){"use strict";function n(){if("undefined"!=typeof window&&window.localStorage&&"object"===("undefined"==typeof localStorage?"undefined":i()(localStorage))&&(!localStorage.getItem(c)||"available"!==localStorage.getItem(c)&&"disable"!==localStorage.getItem(c))){var t=document.createElement("img");t.onload=function(){try{localStorage.setItem(c,"available")}catch(t){}},t.onerror=function(){try{localStorage.setItem(c,"disable")}catch(t){}},t.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA=="}}function s(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&n(),"undefined"!=typeof window&&!!window.localStorage&&"available"===window.localStorage.getItem(c)}e.a=n,e.b=s;var r=o(2),i=o.n(r),c="can_use_webp";n()},717:function(t,e,o){var n=o(718);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(270)("4ef13ce6",n,!0)},718:function(t,e,o){e=t.exports=o(86)(),e.push([t.i,"\n.vux-x-img, .b-lazy {\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n  max-width: 100%;\n}\n.b-lazy {\n  opacity: 0;\n}\n.b-lazy.b-loaded {\n  opacity: 1;\n}\n",""])},719:function(t,e,o){"use strict";var n=o(661),s=o.n(n),r=o(662),i=o(91);i.a,String,String,String,String,String,Number,Object,String,Number,String},720:function(t,e,o){"use strict";var n=o(661),s=o.n(n),r=o(662),i=o(91);e.a={name:"x-img",mixins:[i.a],created:function(){this.$vux&&this.$vux.bus&&this.$vux.bus.$on("vux:after-view-enter",this.init)},methods:{init:function(){var t=this;this.blazy&&this.blazy.destroy(),this.$el.src=this.defaultSrc,this.$el.className=this.$el.className.replace("b-loaded",""),this.blazy=new s.a({scroller:this.scroller,container:this.container,selector:"#vux-ximg-"+this.uuid,offset:t.offset,errorClass:t.errorClass,successClass:t.successClass,separator:t.separator,success:function(e){t.$emit("on-success",t.src,e)},error:function(e,o){t.$emit("on-error",t.src,e,o)}})}},mounted:function(){var t=this;this.$el.setAttribute("id","vux-ximg-"+this.uuid),this.$nextTick(function(){setTimeout(function(){t.init()},t.delay)}),Object(r.a)()},computed:{currentSrc:function(){return Object(r.b)()&&this.webpSrc?this.webpSrc:this.src}},props:{src:String,webpSrc:String,defaultSrc:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},errorClass:String,successClass:String,offset:{type:Number,default:100},scroller:Object,container:String,delay:{type:Number,default:0},separator:String},watch:{src:function(t){this.init()}},beforeDestroy:function(){this.blazy&&this.blazy.destroy(),this.blazy=null,this.$vux&&this.$vux.bus&&this.$vux.bus.$off("vux:after-view-enter",this.init)}}},721:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"b",function(){return s});var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"vux-x-img",attrs:{src:t.defaultSrc,"data-src":t.currentSrc}})},s=[]}});