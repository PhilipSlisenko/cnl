"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796],{1319:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(8803),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),u=(t,n)=>{let e=(0,r.forwardRef)((e,u)=>{let{color:s="currentColor",size:l=24,strokeWidth:c=2,absoluteStrokeWidth:a,className:f="",children:h,...d}=e;return(0,r.createElement)("svg",{ref:u,...i,width:l,height:l,stroke:s,strokeWidth:a?24*Number(c)/Number(l):c,className:["lucide","lucide-".concat(o(t)),f].join(" "),...d},[...n.map(t=>{let[n,e]=t;return(0,r.createElement)(n,e)}),...Array.isArray(h)?h:[h]])});return e.displayName="".concat(t),e}},6568:function(t,n,e){e.d(n,{E:function(){return r}});function r(t,n){if(n.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}},8921:function(t,n,e){e.d(n,{J:function(){return r}});function r(t,n,e){if(!n.has(t))throw TypeError("attempted to "+e+" private field on non-instance");return n.get(t)}},9952:function(t,n,e){e.d(n,{_:function(){return i}});var r=e(8921);function i(t,n){var e=(0,r.J)(t,n,"get");return e.get?e.get.call(t):e.value}},3076:function(t,n,e){e.d(n,{_:function(){return i}});var r=e(6568);function i(t,n,e){(0,r.E)(t,n),n.set(t,e)}},5568:function(t,n,e){e.d(n,{_:function(){return i}});var r=e(8921);function i(t,n,e){var i=(0,r.J)(t,n,"set");return!function(t,n,e){if(n.set)n.set.call(t,e);else{if(!n.writable)throw TypeError("attempted to set read only private field");n.value=e}}(t,i,e),e}},6276:function(t,n,e){e.d(n,{_:function(){return r}});function r(t,n,e){if(!n.has(t))throw TypeError("attempted to get private field on non-instance");return e}},565:function(t,n,e){e.d(n,{_:function(){return i}});var r=e(6568);function i(t,n){(0,r.E)(t,n),n.add(t)}},2658:function(t,n,e){e.d(n,{j:function(){return f}});var r,i,o,u=e(9952),s=e(3076),l=e(5568),c=e(5798),a=e(3295),f=new(r=new WeakMap,i=new WeakMap,o=new WeakMap,class extends c.l{onSubscribe(){(0,u._)(this,i)||this.setEventListener((0,u._)(this,o))}onUnsubscribe(){var t;this.hasListeners()||(null===(t=(0,u._)(this,i))||void 0===t||t.call(this),(0,l._)(this,i,void 0))}setEventListener(t){var n;(0,l._)(this,o,t),null===(n=(0,u._)(this,i))||void 0===n||n.call(this),(0,l._)(this,i,t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()}))}setFocused(t){(0,u._)(this,r)!==t&&((0,l._)(this,r,t),this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){var t;return"boolean"==typeof(0,u._)(this,r)?(0,u._)(this,r):(null===(t=globalThis.document)||void 0===t?void 0:t.visibilityState)!=="hidden"}constructor(){super(),(0,s._)(this,r,{writable:!0,value:void 0}),(0,s._)(this,i,{writable:!0,value:void 0}),(0,s._)(this,o,{writable:!0,value:void 0}),(0,l._)(this,o,t=>{if(!a.sk&&window.addEventListener){let n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}})},7191:function(t,n,e){e.d(n,{V:function(){return r}});var r=function(){let t=[],n=0,e=t=>{t()},r=t=>{t()},i=t=>setTimeout(t,0),o=r=>{n?t.push(r):i(()=>{e(r)})},u=()=>{let n=t;t=[],n.length&&i(()=>{r(()=>{n.forEach(t=>{e(t)})})})};return{batch:t=>{let e;n++;try{e=t()}finally{--n||u()}return e},batchCalls:t=>function(){for(var n=arguments.length,e=Array(n),r=0;r<n;r++)e[r]=arguments[r];o(()=>{t(...e)})},schedule:o,setNotifyFunction:t=>{e=t},setBatchNotifyFunction:t=>{r=t},setScheduler:t=>{i=t}}}()},4880:function(t,n,e){e.d(n,{N:function(){return f}});var r,i,o,u=e(9952),s=e(3076),l=e(5568),c=e(5798),a=e(3295),f=new(r=new WeakMap,i=new WeakMap,o=new WeakMap,class extends c.l{onSubscribe(){(0,u._)(this,i)||this.setEventListener((0,u._)(this,o))}onUnsubscribe(){var t;this.hasListeners()||(null===(t=(0,u._)(this,i))||void 0===t||t.call(this),(0,l._)(this,i,void 0))}setEventListener(t){var n;(0,l._)(this,o,t),null===(n=(0,u._)(this,i))||void 0===n||n.call(this),(0,l._)(this,i,t(this.setOnline.bind(this)))}setOnline(t){(0,u._)(this,r)!==t&&((0,l._)(this,r,t),this.listeners.forEach(n=>{n(t)}))}isOnline(){return(0,u._)(this,r)}constructor(){super(),(0,s._)(this,r,{writable:!0,value:void 0}),(0,s._)(this,i,{writable:!0,value:void 0}),(0,s._)(this,o,{writable:!0,value:void 0}),(0,l._)(this,r,!0),(0,l._)(this,o,t=>{if(!a.sk&&window.addEventListener){let n=()=>t(!0),e=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",e,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",e)}}})}})},8015:function(t,n,e){e.d(n,{DV:function(){return c},Kw:function(){return s},Mz:function(){return a}});var r=e(2658),i=e(4880),o=e(3295);function u(t){return Math.min(1e3*2**t,3e4)}function s(t){return(null!=t?t:"online")!=="online"||i.N.isOnline()}var l=class{constructor(t){this.revert=null==t?void 0:t.revert,this.silent=null==t?void 0:t.silent}};function c(t){return t instanceof l}function a(t){let n,e,c,a=!1,f=0,h=!1,d=new Promise((t,n)=>{e=t,c=n}),v=()=>!r.j.isFocused()||"always"!==t.networkMode&&!i.N.isOnline(),w=r=>{if(!h){var i;h=!0,null===(i=t.onSuccess)||void 0===i||i.call(t,r),null==n||n(),e(r)}},b=e=>{if(!h){var r;h=!0,null===(r=t.onError)||void 0===r||r.call(t,e),null==n||n(),c(e)}},y=()=>new Promise(e=>{var r;n=t=>{let n=h||!v();return n&&e(t),n},null===(r=t.onPause)||void 0===r||r.call(t)}).then(()=>{if(n=void 0,!h){var e;null===(e=t.onContinue)||void 0===e||e.call(t)}}),p=()=>{let n;if(!h){try{n=t.fn()}catch(t){n=Promise.reject(t)}Promise.resolve(n).then(w).catch(n=>{var e,r,i;if(h)return;let s=null!==(r=t.retry)&&void 0!==r?r:o.sk?0:3,l=null!==(i=t.retryDelay)&&void 0!==i?i:u,c="function"==typeof l?l(f,n):l,d=!0===s||"number"==typeof s&&f<s||"function"==typeof s&&s(f,n);if(a||!d){b(n);return}f++,null===(e=t.onFail)||void 0===e||e.call(t,f,n),(0,o._v)(c).then(()=>{if(v())return y()}).then(()=>{a?b(n):p()})})}};return s(t.networkMode)?p():y().then(p),{promise:d,cancel:n=>{if(!h){var e;b(new l(n)),null===(e=t.abort)||void 0===e||e.call(t)}},continue:()=>(null==n?void 0:n())?d:Promise.resolve(),cancelRetry:()=>{a=!0},continueRetry:()=>{a=!1}}}},5798:function(t,n,e){e.d(n,{l:function(){return r}});var r=class{subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}}},3295:function(t,n,e){e.d(n,{Ht:function(){return m},Kp:function(){return s},PN:function(){return u},Rm:function(){return a},SE:function(){return o},VS:function(){return d},VX:function(){return _},X7:function(){return c},Ym:function(){return f},ZT:function(){return i},_v:function(){return y},_x:function(){return l},oE:function(){return p},sk:function(){return r},to:function(){return h}});var r="Deno"in window;function i(){}function o(t,n){return"function"==typeof t?t(n):t}function u(t){return"number"==typeof t&&t>=0&&t!==1/0}function s(t,n){return Math.max(t+(n||0)-Date.now(),0)}function l(t,n){let{type:e="all",exact:r,fetchStatus:i,predicate:o,queryKey:u,stale:s}=t;if(u){if(r){if(n.queryHash!==a(u,n.options))return!1}else if(!h(n.queryKey,u))return!1}if("all"!==e){let t=n.isActive();if("active"===e&&!t||"inactive"===e&&t)return!1}return("boolean"!=typeof s||n.isStale()===s)&&(void 0===i||i===n.state.fetchStatus)&&(!o||!!o(n))}function c(t,n){let{exact:e,status:r,predicate:i,mutationKey:o}=t;if(o){if(!n.options.mutationKey)return!1;if(e){if(f(n.options.mutationKey)!==f(o))return!1}else if(!h(n.options.mutationKey,o))return!1}return(!r||n.state.status===r)&&(!i||!!i(n))}function a(t,n){return((null==n?void 0:n.queryKeyHashFn)||f)(t)}function f(t){return JSON.stringify(t,(t,n)=>w(n)?Object.keys(n).sort().reduce((t,e)=>(t[e]=n[e],t),{}):n)}function h(t,n){return t===n||typeof t==typeof n&&!!t&&!!n&&"object"==typeof t&&"object"==typeof n&&!Object.keys(n).some(e=>!h(t[e],n[e]))}function d(t,n){if(t&&!n||n&&!t)return!1;for(let e in t)if(t[e]!==n[e])return!1;return!0}function v(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function w(t){if(!b(t))return!1;let n=t.constructor;if(void 0===n)return!0;let e=n.prototype;return!!(b(e)&&e.hasOwnProperty("isPrototypeOf"))}function b(t){return"[object Object]"===Object.prototype.toString.call(t)}function y(t){return new Promise(n=>{setTimeout(n,t)})}function p(t,n,e){return"function"==typeof e.structuralSharing?e.structuralSharing(t,n):!1!==e.structuralSharing?function t(n,e){if(n===e)return n;let r=v(n)&&v(e);if(r||w(n)&&w(e)){let i=r?n:Object.keys(n),o=i.length,u=r?e:Object.keys(e),s=u.length,l=r?[]:{},c=0;for(let o=0;o<s;o++){let s=r?o:u[o];!r&&void 0===n[s]&&void 0===e[s]&&i.includes(s)?(l[s]=void 0,c++):(l[s]=t(n[s],e[s]),l[s]===n[s]&&void 0!==n[s]&&c++)}return o===s&&c===o?n:l}return e}(t,n):n}function _(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=[...t,n];return e&&r.length>e?r.slice(1):r}function m(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=[n,...t];return e&&r.length>e?r.slice(0,-1):r}},5982:function(t,n,e){e.d(n,{NL:function(){return o},aH:function(){return u}});var r=e(8803),i=r.createContext(void 0),o=t=>{let n=r.useContext(i);if(t)return t;if(!n)throw Error("No QueryClient set, use QueryClientProvider to set one");return n},u=t=>{let{client:n,children:e}=t;return r.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),r.createElement(i.Provider,{value:n},e)}}}]);