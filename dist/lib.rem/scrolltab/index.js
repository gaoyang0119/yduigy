/*! vue-ydui v1.2.5 by YDCSS (c) 2018 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ScrollTabPanel=e.ScrollTab=void 0;var o=n(126),r=i(o),s=n(125),a=i(s);e.ScrollTab=r.default,e.ScrollTabPanel=a.default},1:function(t,e){t.exports=function(t,e,n,i){var o,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,r=t.default);var a="function"==typeof r?r.options:r;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var l=a.computed||(a.computed={});Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}})}return{esModule:o,exports:r,options:a}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},3:function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=d[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(r(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(r(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function r(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(h)return b;i.parentNode.removeChild(i)}if(v){var r=p++;i=u||(u=o()),e=s.bind(null,i,r,!1),n=s.bind(null,i,r,!0)}else i=o(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function s(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function a(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,c=n(4),d={},f=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,h=!1,b=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var o=c(t,e);return i(o),function(e){for(var n=[],r=0;r<o.length;r++){var s=o[r],a=d[s.id];a.refs--,n.push(a)}e?(o=c(t,e),i(o)):o=[];for(var r=0;r<n.length;r++){var a=n[r];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete d[a.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=r[0],a=r[1],l=r[2],c=r[3],d={id:t+":"+o,css:a,media:l,sourceMap:c};i[s]?i[s].parts.push(d):n.push(i[s]={id:s,parts:[d]})}return n}},46:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,'.yd-scrolltab{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-scrolltab-nav{height:100%;background-color:#f5f5f5;overflow-y:auto;-webkit-overflow-scrolling:touch;position:relative;z-index:1}.yd-scrolltab-nav:after{content:"";position:absolute;z-index:0;top:0;right:0;width:1px;height:100%;background-image:-webkit-linear-gradient(left,#dfdfdf 50%,transparent 0);background-image:linear-gradient(90deg,#dfdfdf 50%,transparent 0)}.yd-scrolltab-item{padding:0 .3rem;height:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;z-index:1}.yd-scrolltab-item:after{height:1px;position:absolute;z-index:0;bottom:0;left:0;content:"";width:100%;background-image:-webkit-linear-gradient(bottom,#dfdfdf 50%,transparent 0);background-image:linear-gradient(0deg,#dfdfdf 50%,transparent 0)}.yd-scrolltab-item:before{content:"";position:absolute;z-index:0;top:0;right:0;width:1px;height:100%;background-image:-webkit-linear-gradient(left,#dfdfdf 50%,transparent 0);background-image:linear-gradient(90deg,#dfdfdf 50%,transparent 0)}.yd-scrolltab-item:active{background:none}.yd-scrolltab-active{background-color:#fff}.yd-scrolltab-active:before{content:"";position:absolute;z-index:0;top:0;right:0;width:1px;height:100%;background-image:-webkit-linear-gradient(left,#fff 50%,transparent 0);background-image:linear-gradient(90deg,#fff 50%,transparent 0)}.yd-scrolltab-active:active{background-color:#fff}.yd-scrolltab-icon{margin-right:.2rem;font-size:.32rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.yd-scrolltab-icon>img{height:.4rem;display:inline-block}.yd-scrolltab-title{font-size:.3rem;color:#666;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:1.6rem}.yd-scrolltab-content{height:100%;background-color:#fff;overflow-y:auto;-webkit-overflow-scrolling:touch;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:0 .24rem .24rem;position:relative}.yd-scrolltab-content-title{font-size:.3rem;font-weight:400;color:#555;display:block;padding-bottom:.1rem;padding-top:.32rem;margin-bottom:.2rem;position:relative;z-index:1}.yd-scrolltab-content-title:after{height:1px;position:absolute;z-index:0;bottom:0;left:0;content:"";width:100%;background-image:-webkit-linear-gradient(bottom,#e4e4e4 50%,transparent 0);background-image:linear-gradient(0deg,#e4e4e4 50%,transparent 0)}',""])},125:function(t,e,n){var i=n(1)(n(305),n(156),null,null);t.exports=i.exports},126:function(t,e,n){n(224);var i=n(1)(n(306),n(161),null,null);t.exports=i.exports},156:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-scrolltab-content-item"},[n("strong",{staticClass:"yd-scrolltab-content-title"},[t._v(t._s(t.label))]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},161:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-scrolltab"},[n("div",{ref:"navbox",staticClass:"yd-scrolltab-nav"},t._l(t.navList,function(e,i){return n("a",{key:i,ref:"tabitem_"+i,refInFor:!0,staticClass:"yd-scrolltab-item",class:t.activeIndex==i?"yd-scrolltab-active":"",attrs:{href:"javascript:;"},on:{click:function(e){t.moveHandler(i)}}},[n("div",{staticClass:"yd-scrolltab-icon"},[n("i",{class:e.icon})]),t._v(" "),n("div",{staticClass:"yd-scrolltab-title"},[t._v(t._s(e.label))])])})),t._v(" "),n("div",{ref:"scrollView",staticClass:"yd-scrolltab-content"},[t._t("default")],2)])},staticRenderFns:[]}},224:function(t,e,n){var i=n(46);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);n(3)("3b20ff8b",i,!0)},305:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-scrolltab-panel",props:{label:String,icon:String,active:Boolean},mounted:function(){this.$parent.addItem({label:this.label,icon:this.icon,_uid:this._uid})}}},306:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-scrolltab",data:function(){return{scrolling:!1,navList:[],activeIndex:this.index,timer:null,navtop:0}},props:{index:{validator:function(t){return/^(([1-9]\d*)|0)$/.test(t)},default:0},callback:{type:Function}},methods:{init:function(){this.scrollView=this.$refs.scrollView,this.contentOffsetTop=this.scrollView.getBoundingClientRect().top,this.bindEvent()},addItem:function(t){this.navList.push(t)},getPanels:function(){return this.$children.filter(function(t){return"yd-scrolltab-panel"===t.$options.name})},bindEvent:function(){this.scrollView.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.scrollHandler)},setDefault:function(){var t=this;this.getPanels().every(function(e,n){return t.activeIndex!==n||(t.moveHandler(n),!1)})},moveHandler:function(t){this.activeIndex=t,this.scrollContent(t)},scrollContent:function(t){var e=this;if(!this.scrolling){this.scrolling=!0;var n=this.getPanels()[t].$el.getBoundingClientRect().top;this.scrollView.scrollTop=n+this.scrollView.scrollTop-this.contentOffsetTop+2,setTimeout(function(){e.scrolling=!1},10)}},navInView:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.$refs["tabitem_"+t][0],n=~~e.offsetHeight;e.offsetTop-n<=this.navtop?this.navtop-=n:e.offsetTop+3*n>=this.scrollView.offsetHeight&&(this.navtop+=n),this.$refs.navbox.scrollTop=this.navtop},scrollHandler:function(){var t=this;if(!this.scrolling){var e=this.getPanels(),n=e.length,i=this.scrollView,o=i.offsetHeight,r=i.scrollTop,s=e[0].$el.offsetHeight;return r>=s*n-o?void(this.activeIndex=n-1):void e.forEach(function(e,n){e.$el.getBoundingClientRect().top<=t.contentOffsetTop&&(t.activeIndex=n)})}}},watch:{navList:function(){this.setDefault()},activeIndex:function(t){this.navInView(t),this.callback&&this.callback(t)},index:function(t){this.scrollContent(t),this.activeIndex=t}},mounted:function(){this.init()},beforeDestroy:function(){this.scrollView.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.scrollHandler)}}}})});