"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{9438:function(e,t,r){r.d(t,{B:function(){return o}});var i=r(8803),n=r(9352),a=r(6957),s=r(8155);function o(e){let t=e+"CollectionProvider",[r,o]=(0,n.b)(t),[l,u]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e+"CollectionSlot",d=i.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=u(c,r),l=(0,a.e)(t,o.collectionRef);return i.createElement(s.g7,{ref:l},n)}),h=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,n=i.useRef(null),a=i.useRef(new Map).current;return i.createElement(l,{scope:t,itemMap:a,collectionRef:n},r)},Slot:d,ItemSlot:i.forwardRef((e,t)=>{let{scope:r,children:n,...o}=e,l=i.useRef(null),c=(0,a.e)(t,l),d=u(h,r);return i.useEffect(()=>(d.itemMap.set(l,{ref:l,...o}),()=>void d.itemMap.delete(l))),i.createElement(s.g7,{[p]:"",ref:c},n)})},function(t){let r=u(e+"CollectionConsumer",t);return i.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(p,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},o]}},4669:function(e,t,r){r.d(t,{Dx:function(){return Y},aU:function(){return J},dk:function(){return z},fC:function(){return B},l_:function(){return X},x8:function(){return $},zt:function(){return G}});var i=r(1988),n=r(8803),a=r(9805),s=r(7656),o=r(6957),l=r(9438),u=r(9352),c=r(1219),d=r(1214),h=r(3214),p=r(564),f=r(6896),y=r(9057),m=r(8843),w=r(3325);let _="ToastProvider",[g,E,b]=(0,l.B)("Toast"),[T,M]=(0,u.b)("Toast",[b]),[C,P]=T(_),R=e=>{let{__scopeToast:t,label:r="Notification",duration:i=5e3,swipeDirection:a="right",swipeThreshold:s=50,children:o}=e,[l,u]=(0,n.useState)(null),[c,d]=(0,n.useState)(0),h=(0,n.useRef)(!1),p=(0,n.useRef)(!1);return(0,n.createElement)(g.Provider,{scope:t},(0,n.createElement)(C,{scope:t,label:r,duration:i,swipeDirection:a,swipeThreshold:s,toastCount:c,viewport:l,onViewportChange:u,onToastAdd:(0,n.useCallback)(()=>d(e=>e+1),[]),onToastRemove:(0,n.useCallback)(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:p},o))};R.propTypes={label:e=>e.label&&"string"==typeof e.label&&!e.label.trim()?Error("Invalid prop `label` supplied to `".concat(_,"`. Expected non-empty `string`.")):null};let F=["F8"],x="toast.viewportPause",D="toast.viewportResume",S=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,hotkey:a=F,label:s="Notifications ({hotkey})",...l}=e,u=P("ToastViewport",r),d=E(r),h=(0,n.useRef)(null),f=(0,n.useRef)(null),y=(0,n.useRef)(null),m=(0,n.useRef)(null),w=(0,o.e)(t,m,u.onViewportChange),_=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=u.toastCount>0;(0,n.useEffect)(()=>{let e=e=>{var t;a.every(t=>e[t]||e.code===t)&&(null===(t=m.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[a]),(0,n.useEffect)(()=>{let e=h.current,t=m.current;if(b&&e&&t){let r=()=>{if(!u.isClosePausedRef.current){let e=new CustomEvent(x);t.dispatchEvent(e),u.isClosePausedRef.current=!0}},i=()=>{if(u.isClosePausedRef.current){let e=new CustomEvent(D);t.dispatchEvent(e),u.isClosePausedRef.current=!1}},n=t=>{e.contains(t.relatedTarget)||i()},a=()=>{e.contains(document.activeElement)||i()};return e.addEventListener("focusin",r),e.addEventListener("focusout",n),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",a),window.addEventListener("blur",r),window.addEventListener("focus",i),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",n),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",a),window.removeEventListener("blur",r),window.removeEventListener("focus",i)}}},[b,u.isClosePausedRef]);let T=(0,n.useCallback)(e=>{let{tabbingDirection:t}=e,r=d().map(e=>{let r=e.ref.current,i=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===t?i:i.reverse()});return("forwards"===t?r.reverse():r).flat()},[d]);return(0,n.useEffect)(()=>{let e=m.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var i,n,a;let r=document.activeElement,s=t.shiftKey;if(t.target===e&&s){null===(i=f.current)||void 0===i||i.focus();return}let o=T({tabbingDirection:s?"backwards":"forwards"}),l=o.findIndex(e=>e===r);j(o.slice(l+1))?t.preventDefault():s?null===(n=f.current)||void 0===n||n.focus():null===(a=y.current)||void 0===a||a.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[d,T]),(0,n.createElement)(c.I0,{ref:h,role:"region","aria-label":s.replace("{hotkey}",_),tabIndex:-1,style:{pointerEvents:b?void 0:"none"}},b&&(0,n.createElement)(k,{ref:f,onFocusFromOutsideViewport:()=>{j(T({tabbingDirection:"forwards"}))}}),(0,n.createElement)(g.Slot,{scope:r},(0,n.createElement)(p.WV.ol,(0,i.Z)({tabIndex:-1},l,{ref:w}))),b&&(0,n.createElement)(k,{ref:y,onFocusFromOutsideViewport:()=>{j(T({tabbingDirection:"backwards"}))}}))}),k=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:a,...s}=e,o=P("ToastFocusProxy",r);return(0,n.createElement)(w.T,(0,i.Z)({"aria-hidden":!0,tabIndex:0},s,{ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;null!==(t=o.viewport)&&void 0!==t&&t.contains(r)||a()}}))}),A="Toast",O=(0,n.forwardRef)((e,t)=>{let{forceMount:r,open:a,defaultOpen:o,onOpenChange:l,...u}=e,[c=!0,d]=(0,y.T)({prop:a,defaultProp:o,onChange:l});return(0,n.createElement)(h.z,{present:r||c},(0,n.createElement)(K,(0,i.Z)({open:c},u,{ref:t,onClose:()=>d(!1),onPause:(0,f.W)(e.onPause),onResume:(0,f.W)(e.onResume),onSwipeStart:(0,s.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,s.M)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(r,"px"))}),onSwipeCancel:(0,s.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,s.M)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(r,"px")),d(!1)})})))}),[q,W]=T(A,{onClose(){}}),K=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,type:l="foreground",duration:u,open:d,onClose:h,onEscapeKeyDown:y,onPause:m,onResume:w,onSwipeStart:_,onSwipeMove:E,onSwipeCancel:b,onSwipeEnd:T,...M}=e,C=P(A,r),[R,F]=(0,n.useState)(null),S=(0,o.e)(t,e=>F(e)),k=(0,n.useRef)(null),O=(0,n.useRef)(null),W=u||C.duration,K=(0,n.useRef)(0),I=(0,n.useRef)(W),V=(0,n.useRef)(0),{onToastAdd:L,onToastRemove:U}=C,N=(0,f.W)(()=>{var e;(null==R?void 0:R.contains(document.activeElement))&&(null===(e=C.viewport)||void 0===e||e.focus()),h()}),j=(0,n.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(V.current),K.current=new Date().getTime(),V.current=window.setTimeout(N,e))},[N]);(0,n.useEffect)(()=>{let e=C.viewport;if(e){let t=()=>{j(I.current),null==w||w()},r=()=>{let e=new Date().getTime()-K.current;I.current=I.current-e,window.clearTimeout(V.current),null==m||m()};return e.addEventListener(x,r),e.addEventListener(D,t),()=>{e.removeEventListener(x,r),e.removeEventListener(D,t)}}},[C.viewport,W,m,w,j]),(0,n.useEffect)(()=>{d&&!C.isClosePausedRef.current&&j(W)},[d,W,C.isClosePausedRef,j]),(0,n.useEffect)(()=>(L(),()=>U()),[L,U]);let G=(0,n.useMemo)(()=>R?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let i=t.ariaHidden||t.hidden||"none"===t.style.display,n=""===t.dataset.radixToastAnnounceExclude;if(!i){if(n){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(R):null,[R]);return C.viewport?(0,n.createElement)(n.Fragment,null,G&&(0,n.createElement)(Q,{__scopeToast:r,role:"status","aria-live":"foreground"===l?"assertive":"polite","aria-atomic":!0},G),(0,n.createElement)(q,{scope:r,onClose:N},(0,a.createPortal)((0,n.createElement)(g.ItemSlot,{scope:r},(0,n.createElement)(c.fC,{asChild:!0,onEscapeKeyDown:(0,s.M)(y,()=>{C.isFocusedToastEscapeKeyDownRef.current||N(),C.isFocusedToastEscapeKeyDownRef.current=!1})},(0,n.createElement)(p.WV.li,(0,i.Z)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":C.swipeDirection},M,{ref:S,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,s.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==y||y(e.nativeEvent),e.nativeEvent.defaultPrevented||(C.isFocusedToastEscapeKeyDownRef.current=!0,N()))}),onPointerDown:(0,s.M)(e.onPointerDown,e=>{0===e.button&&(k.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,s.M)(e.onPointerMove,e=>{if(!k.current)return;let t=e.clientX-k.current.x,r=e.clientY-k.current.y,i=!!O.current,n=["left","right"].includes(C.swipeDirection),a=["left","up"].includes(C.swipeDirection)?Math.min:Math.max,s=n?a(0,t):0,o=n?0:a(0,r),l="touch"===e.pointerType?10:2,u={x:s,y:o},c={originalEvent:e,delta:u};i?(O.current=u,Z("toast.swipeMove",E,c,{discrete:!1})):H(u,C.swipeDirection,l)?(O.current=u,Z("toast.swipeStart",_,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(r)>l)&&(k.current=null)}),onPointerUp:(0,s.M)(e.onPointerUp,e=>{let t=O.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),O.current=null,k.current=null,t){let r=e.currentTarget,i={originalEvent:e,delta:t};H(t,C.swipeDirection,C.swipeThreshold)?Z("toast.swipeEnd",T,i,{discrete:!0}):Z("toast.swipeCancel",b,i,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),C.viewport))):null});K.propTypes={type:e=>e.type&&!["foreground","background"].includes(e.type)?Error("Invalid prop `type` supplied to `".concat(A,"`. Expected `foreground | background`.")):null};let Q=e=>{let{__scopeToast:t,children:r,...i}=e,a=P(A,t),[s,o]=(0,n.useState)(!1),[l,u]=(0,n.useState)(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=(0,f.W)(e);(0,m.b)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>o(!0)),(0,n.useEffect)(()=>{let e=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:(0,n.createElement)(d.h,{asChild:!0},(0,n.createElement)(w.T,i,s&&(0,n.createElement)(n.Fragment,null,a.label," ",r)))},I=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,...a}=e;return(0,n.createElement)(p.WV.div,(0,i.Z)({},a,{ref:t}))}),V=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,...a}=e;return(0,n.createElement)(p.WV.div,(0,i.Z)({},a,{ref:t}))}),L=(0,n.forwardRef)((e,t)=>{let{altText:r,...a}=e;return r?(0,n.createElement)(N,{altText:r,asChild:!0},(0,n.createElement)(U,(0,i.Z)({},a,{ref:t}))):null});L.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `".concat("ToastAction","`"))};let U=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,...a}=e,o=W("ToastClose",r);return(0,n.createElement)(N,{asChild:!0},(0,n.createElement)(p.WV.button,(0,i.Z)({type:"button"},a,{ref:t,onClick:(0,s.M)(e.onClick,o.onClose)})))}),N=(0,n.forwardRef)((e,t)=>{let{__scopeToast:r,altText:a,...s}=e;return(0,n.createElement)(p.WV.div,(0,i.Z)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":a||void 0},s,{ref:t}))});function Z(e,t,r,i){let{discrete:n}=i,a=r.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&a.addEventListener(e,t,{once:!0}),n?(0,p.jH)(a,s):a.dispatchEvent(s)}let H=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=Math.abs(e.x),n=Math.abs(e.y),a=i>n;return"left"===t||"right"===t?a&&i>r:!a&&n>r};function j(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}let G=R,X=S,B=O,Y=I,z=V,J=L,$=U},3325:function(e,t,r){r.d(t,{T:function(){return s}});var i=r(1988),n=r(8803),a=r(564);let s=(0,n.forwardRef)((e,t)=>(0,n.createElement)(a.WV.span,(0,i.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}})))},5303:function(e,t,r){r.d(t,{S:function(){return G}});var i,n,a,s,o,l,u,c,d,h,p,f,y,m,w,_,g,E,b,T,M,C,P=r(9952),R=r(3076),F=r(5568),x=r(8921);function D(e,t){var r=(0,x.J)(e,t,"update");return function(e,t){if(t.set){if(!t.get)throw TypeError("attempted to read set only private field");return"__destrWrapper"in t||(t.__destrWrapper={set value(v){t.set.call(e,v)},get value(){return t.get.call(e)}}),t.__destrWrapper}if(!t.writable)throw TypeError("attempted to set read only private field");return t}(e,r)}var S=r(3295),k=r(6276),A=r(565),O=r(7191),q=r(8015),W=r(6482),K=(i=new WeakMap,n=new WeakMap,a=new WeakMap,s=new WeakMap,o=new WeakMap,l=new WeakMap,u=new WeakMap,c=new WeakMap,d=new WeakSet,h=new WeakSet,class extends W.F{get meta(){return this.options.meta}optionalRemove(){(0,P._)(this,l).length||"idle"!==this.state.fetchStatus||(0,P._)(this,a).remove(this)}setData(e,t){let r=(0,S.oE)(this.state.data,e,this.options);return(0,k._)(this,h,I).call(this,{data:r,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),r}setState(e,t){(0,k._)(this,h,I).call(this,{type:"setState",state:e,setStateOptions:t})}cancel(e){var t;let r=(0,P._)(this,s);return null===(t=(0,P._)(this,o))||void 0===t||t.cancel(e),r?r.then(S.ZT).catch(S.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState((0,P._)(this,i))}isActive(){return(0,P._)(this,l).some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||(0,P._)(this,l).some(e=>e.getCurrentResult().isStale)}isStaleByTime(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,S.Kp)(this.state.dataUpdatedAt,e)}onFocus(){var e;let t=(0,P._)(this,l).find(e=>e.shouldFetchOnWindowFocus());null==t||t.refetch({cancelRefetch:!1}),null===(e=(0,P._)(this,o))||void 0===e||e.continue()}onOnline(){var e;let t=(0,P._)(this,l).find(e=>e.shouldFetchOnReconnect());null==t||t.refetch({cancelRefetch:!1}),null===(e=(0,P._)(this,o))||void 0===e||e.continue()}addObserver(e){(0,P._)(this,l).includes(e)||((0,P._)(this,l).push(e),this.clearGcTimeout(),(0,P._)(this,a).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){(0,P._)(this,l).includes(e)&&((0,F._)(this,l,(0,P._)(this,l).filter(t=>t!==e)),(0,P._)(this,l).length||((0,P._)(this,o)&&((0,P._)(this,c)?(0,P._)(this,o).cancel({revert:!0}):(0,P._)(this,o).cancelRetry()),this.scheduleGc()),(0,P._)(this,a).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return(0,P._)(this,l).length}invalidate(){this.state.isInvalidated||(0,k._)(this,h,I).call(this,{type:"invalidate"})}fetch(e,t){var r,i,u,p;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&(null==t?void 0:t.cancelRefetch))this.cancel({silent:!0});else if((0,P._)(this,s))return null===(u=(0,P._)(this,o))||void 0===u||u.continueRetry(),(0,P._)(this,s)}if(e&&(0,k._)(this,d,Q).call(this,e),!this.options.queryFn){let e=(0,P._)(this,l).find(e=>e.options.queryFn);e&&(0,k._)(this,d,Q).call(this,e.options)}let f=new AbortController,y={queryKey:this.queryKey,meta:this.meta},m=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>((0,F._)(this,c,!0),f.signal)})};m(y);let w={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?((0,F._)(this,c,!1),this.options.persister)?this.options.persister(this.options.queryFn,y,this):this.options.queryFn(y):Promise.reject(Error("Missing queryFn: '".concat(this.options.queryHash,"'")))};m(w),null===(r=this.options.behavior)||void 0===r||r.onFetch(w,this),(0,F._)(this,n,this.state),("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null===(i=w.fetchOptions)||void 0===i?void 0:i.meta))&&(0,k._)(this,h,I).call(this,{type:"fetch",meta:null===(p=w.fetchOptions)||void 0===p?void 0:p.meta});let _=e=>{if((0,q.DV)(e)&&e.silent||(0,k._)(this,h,I).call(this,{type:"error",error:e}),!(0,q.DV)(e)){var t,r,i,n;null===(t=(r=(0,P._)(this,a).config).onError)||void 0===t||t.call(r,e,this),null===(i=(n=(0,P._)(this,a).config).onSettled)||void 0===i||i.call(n,this.state.data,e,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return(0,F._)(this,o,(0,q.Mz)({fn:w.fetchFn,abort:f.abort.bind(f),onSuccess:e=>{var t,r,i,n;if(void 0===e){_(Error("".concat(this.queryHash," data is undefined")));return}this.setData(e),null===(t=(r=(0,P._)(this,a).config).onSuccess)||void 0===t||t.call(r,e,this),null===(i=(n=(0,P._)(this,a).config).onSettled)||void 0===i||i.call(n,e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:_,onFail:(e,t)=>{(0,k._)(this,h,I).call(this,{type:"failed",failureCount:e,error:t})},onPause:()=>{(0,k._)(this,h,I).call(this,{type:"pause"})},onContinue:()=>{(0,k._)(this,h,I).call(this,{type:"continue"})},retry:w.options.retry,retryDelay:w.options.retryDelay,networkMode:w.options.networkMode})),(0,F._)(this,s,(0,P._)(this,o).promise),(0,P._)(this,s)}constructor(e){super(),(0,A._)(this,d),(0,A._)(this,h),(0,R._)(this,i,{writable:!0,value:void 0}),(0,R._)(this,n,{writable:!0,value:void 0}),(0,R._)(this,a,{writable:!0,value:void 0}),(0,R._)(this,s,{writable:!0,value:void 0}),(0,R._)(this,o,{writable:!0,value:void 0}),(0,R._)(this,l,{writable:!0,value:void 0}),(0,R._)(this,u,{writable:!0,value:void 0}),(0,R._)(this,c,{writable:!0,value:void 0}),(0,F._)(this,c,!1),(0,F._)(this,u,e.defaultOptions),(0,k._)(this,d,Q).call(this,e.options),(0,F._)(this,l,[]),(0,F._)(this,a,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,(0,F._)(this,i,e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,i=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?null!=i?i:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}(this.options)),this.state=(0,P._)(this,i),this.scheduleGc()}});function Q(e){this.options={...(0,P._)(this,u),...e},this.updateGcTime(this.options.gcTime)}function I(e){this.state=(t=>{var r,i;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!==(r=e.meta)&&void 0!==r?r:null,fetchStatus:(0,q.Kw)(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!==(i=e.dataUpdatedAt)&&void 0!==i?i:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let a=e.error;if((0,q.DV)(a)&&a.revert&&(0,P._)(this,n))return{...(0,P._)(this,n),fetchStatus:"idle"};return{...t,error:a,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),O.V.batch(()=>{(0,P._)(this,l).forEach(e=>{e.onQueryUpdate()}),(0,P._)(this,a).notify({query:this,type:"updated",action:e})})}var V=r(5798),L=(p=new WeakMap,class extends V.l{build(e,t,r){var i;let n=t.queryKey,a=null!==(i=t.queryHash)&&void 0!==i?i:(0,S.Rm)(n,t),s=this.get(a);return s||(s=new K({cache:this,queryKey:n,queryHash:a,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(n)}),this.add(s)),s}add(e){(0,P._)(this,p).has(e.queryHash)||((0,P._)(this,p).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=(0,P._)(this,p).get(e.queryHash);t&&(e.destroy(),t===e&&(0,P._)(this,p).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){O.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return(0,P._)(this,p).get(e)}getAll(){return[...(0,P._)(this,p).values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,S._x)(t,e))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,S._x)(e,t)):t}notify(e){O.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){O.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){O.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}constructor(e={}){super(),(0,R._)(this,p,{writable:!0,value:void 0}),this.config=e,(0,F._)(this,p,new Map)}}),U=r(7532),N=(f=new WeakMap,y=new WeakMap,m=new WeakMap,class extends V.l{build(e,t,r){let i=new U.m({mutationCache:this,mutationId:++D(this,y).value,options:e.defaultMutationOptions(t),state:r});return this.add(i),i}add(e){(0,P._)(this,f).push(e),this.notify({type:"added",mutation:e})}remove(e){(0,F._)(this,f,(0,P._)(this,f).filter(t=>t!==e)),this.notify({type:"removed",mutation:e})}clear(){O.V.batch(()=>{(0,P._)(this,f).forEach(e=>{this.remove(e)})})}getAll(){return(0,P._)(this,f)}find(e){let t={exact:!0,...e};return(0,P._)(this,f).find(e=>(0,S.X7)(t,e))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,P._)(this,f).filter(t=>(0,S.X7)(e,t))}notify(e){O.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){var e;return(0,F._)(this,m,(null!==(e=(0,P._)(this,m))&&void 0!==e?e:Promise.resolve()).then(()=>{let e=(0,P._)(this,f).filter(e=>e.state.isPaused);return O.V.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(S.ZT)),Promise.resolve()))}).then(()=>{(0,F._)(this,m,void 0)})),(0,P._)(this,m)}constructor(e={}){super(),(0,R._)(this,f,{writable:!0,value:void 0}),(0,R._)(this,y,{writable:!0,value:void 0}),(0,R._)(this,m,{writable:!0,value:void 0}),this.config=e,(0,F._)(this,f,[]),(0,F._)(this,y,0)}}),Z=r(2658),H=r(4880);function j(e,t){let{pages:r,pageParams:i}=t,n=r.length-1;return e.getNextPageParam(r[n],r,i[n],i)}var G=(w=new WeakMap,_=new WeakMap,g=new WeakMap,E=new WeakMap,b=new WeakMap,T=new WeakMap,M=new WeakMap,C=new WeakMap,class{mount(){D(this,T).value++,1===(0,P._)(this,T)&&((0,F._)(this,M,Z.j.subscribe(()=>{Z.j.isFocused()&&(this.resumePausedMutations(),(0,P._)(this,w).onFocus())})),(0,F._)(this,C,H.N.subscribe(()=>{H.N.isOnline()&&(this.resumePausedMutations(),(0,P._)(this,w).onOnline())})))}unmount(){var e,t;D(this,T).value--,0===(0,P._)(this,T)&&(null===(e=(0,P._)(this,M))||void 0===e||e.call(this),(0,F._)(this,M,void 0),null===(t=(0,P._)(this,C))||void 0===t||t.call(this),(0,F._)(this,C,void 0))}isFetching(e){return(0,P._)(this,w).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return(0,P._)(this,_).findAll({...e,status:"pending"}).length}getQueryData(e){var t;return null===(t=(0,P._)(this,w).find({queryKey:e}))||void 0===t?void 0:t.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);return void 0!==t?Promise.resolve(t):this.fetchQuery(e)}getQueriesData(e){return this.getQueryCache().findAll(e).map(e=>{let{queryKey:t,state:r}=e;return[t,r.data]})}setQueryData(e,t,r){let i=(0,P._)(this,w).find({queryKey:e}),n=null==i?void 0:i.state.data,a=(0,S.SE)(t,n);if(void 0===a)return;let s=this.defaultQueryOptions({queryKey:e});return(0,P._)(this,w).build(this,s).setData(a,{...r,manual:!0})}setQueriesData(e,t,r){return O.V.batch(()=>this.getQueryCache().findAll(e).map(e=>{let{queryKey:i}=e;return[i,this.setQueryData(i,t,r)]}))}getQueryState(e){var t;return null===(t=(0,P._)(this,w).find({queryKey:e}))||void 0===t?void 0:t.state}removeQueries(e){let t=(0,P._)(this,w);O.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=(0,P._)(this,w),i={type:"active",...e};return O.V.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(i,t)))}cancelQueries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={revert:!0,...t};return Promise.all(O.V.batch(()=>(0,P._)(this,w).findAll(e).map(e=>e.cancel(r)))).then(S.ZT).catch(S.ZT)}invalidateQueries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return O.V.batch(()=>{var r,i;if((0,P._)(this,w).findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let n={...e,type:null!==(i=null!==(r=e.refetchType)&&void 0!==r?r:e.type)&&void 0!==i?i:"active"};return this.refetchQueries(n,t)})}refetchQueries(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,i={...r,cancelRefetch:null===(e=null==r?void 0:r.cancelRefetch)||void 0===e||e};return Promise.all(O.V.batch(()=>(0,P._)(this,w).findAll(t).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,i);return i.throwOnError||(t=t.catch(S.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(S.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=(0,P._)(this,w).build(this,t);return r.isStaleByTime(t.staleTime)?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(S.ZT).catch(S.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,r)=>{let i=async()=>{var r,i,n,a,s,o;let l;let u=e.options,c=null===(n=e.fetchOptions)||void 0===n?void 0:null===(i=n.meta)||void 0===i?void 0:null===(r=i.fetchMore)||void 0===r?void 0:r.direction,d=(null===(a=e.state.data)||void 0===a?void 0:a.pages)||[],h=(null===(s=e.state.data)||void 0===s?void 0:s.pageParams)||[],p=!1,f=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?p=!0:e.signal.addEventListener("abort",()=>{p=!0}),e.signal)})},y=e.options.queryFn||(()=>Promise.reject(Error("Missing queryFn: '".concat(e.options.queryHash,"'")))),m=async(t,r,i)=>{if(p)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let n={queryKey:e.queryKey,pageParam:r,direction:i?"backward":"forward",meta:e.options.meta};f(n);let a=await y(n),{maxPages:s}=e.options,o=i?S.Ht:S.VX;return{pages:o(t.pages,a,s),pageParams:o(t.pageParams,r,s)}};if(c&&d.length){let e="backward"===c,t={pages:d,pageParams:h},r=(e?function(e,t){var r;let{pages:i,pageParams:n}=t;return null===(r=e.getPreviousPageParam)||void 0===r?void 0:r.call(e,i[0],i,n[0],n)}:j)(u,t);l=await m(t,r,e)}else{l=await m({pages:[],pageParams:[]},null!==(o=h[0])&&void 0!==o?o:u.initialPageParam);let e=null!=t?t:d.length;for(let t=1;t<e;t++){let e=j(u,l);l=await m(l,e)}}return l};e.options.persister?e.fetchFn=()=>{var t,n;return null===(t=(n=e.options).persister)||void 0===t?void 0:t.call(n,i,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r)}:e.fetchFn=i}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(S.ZT).catch(S.ZT)}resumePausedMutations(){return(0,P._)(this,_).resumePausedMutations()}getQueryCache(){return(0,P._)(this,w)}getMutationCache(){return(0,P._)(this,_)}getDefaultOptions(){return(0,P._)(this,g)}setDefaultOptions(e){(0,F._)(this,g,e)}setQueryDefaults(e,t){(0,P._)(this,E).set((0,S.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...(0,P._)(this,E).values()],r={};return t.forEach(t=>{(0,S.to)(e,t.queryKey)&&(r={...r,...t.defaultOptions})}),r}setMutationDefaults(e,t){(0,P._)(this,b).set((0,S.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...(0,P._)(this,b).values()],r={};return t.forEach(t=>{(0,S.to)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(null==e?void 0:e._defaulted)return e;let t={...(0,P._)(this,g).queries,...(null==e?void 0:e.queryKey)&&this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,S.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),void 0===t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t}defaultMutationOptions(e){return(null==e?void 0:e._defaulted)?e:{...(0,P._)(this,g).mutations,...(null==e?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){(0,P._)(this,w).clear(),(0,P._)(this,_).clear()}constructor(e={}){(0,R._)(this,w,{writable:!0,value:void 0}),(0,R._)(this,_,{writable:!0,value:void 0}),(0,R._)(this,g,{writable:!0,value:void 0}),(0,R._)(this,E,{writable:!0,value:void 0}),(0,R._)(this,b,{writable:!0,value:void 0}),(0,R._)(this,T,{writable:!0,value:void 0}),(0,R._)(this,M,{writable:!0,value:void 0}),(0,R._)(this,C,{writable:!0,value:void 0}),(0,F._)(this,w,e.queryCache||new L),(0,F._)(this,_,e.mutationCache||new N),(0,F._)(this,g,e.defaultOptions||{}),(0,F._)(this,E,new Map),(0,F._)(this,b,new Map),(0,F._)(this,T,0)}})}}]);