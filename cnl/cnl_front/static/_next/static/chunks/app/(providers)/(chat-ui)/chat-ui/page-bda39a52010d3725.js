(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[727],{2862:function(e,t,s){Promise.resolve().then(s.bind(s,6004))},1118:function(e,t,s){"use strict";s.d(t,{Z:function(){return S}});var o=s(7514),r=s(4358),n=s(5310),a=s(8803),l=s(9805),i=s(4524),c=s(9680),d=s(6244),u=s.n(d);let m=(0,a.createContext)({});var x=s(48),f=s(3146),g=s.n(f);function h(){let e;let t=(0,a.useContext)(m),s=(0,n.Z)("rounded-2xl px-7 py-3 shadow mx-1 w-min",u().className),r=(0,n.Z)("bg-white rounded-bl-none mr-2");return e=(0,n.Z)(s,r),(0,o.jsx)("div",{className:(0,n.Z)(e),style:{backgroundColor:t.botMessageBgColor,color:t.botMessageTextColor},children:(0,o.jsx)("div",{className:g()["dot-flashing"]})})}function p(e){let{content:t,allowFeedback:s,onFeedback:r}=e,l=(0,a.useContext)(m),i=(0,n.Z)("rounded-2xl px-3 py-2 shadow  mx-1 max-w-max whitespace-pre-wrap",u().className),c=(0,n.Z)("rounded-bl-none mr-2"),d=(0,n.Z)(i,c),[f,g]=(0,a.useState)(!1);return(0,o.jsx)("div",{className:"flex w-full",children:(0,o.jsxs)("div",{className:"group flex w-full",children:[(0,o.jsx)("div",{className:(0,n.Z)(d),style:{backgroundColor:l.botMessageBgColor,color:l.botMessageTextColor},children:t}),s&&(0,o.jsx)("div",{className:"self-center opacity-0 transition-opacity group-hover:opacity-100",children:(0,o.jsx)("button",{className:"rounded-sm p-1 hover:bg-gray-200",onClick:()=>{r()},children:(0,o.jsx)(x.Z,{className:"size-4"})})})]})})}function v(e){let{content:t}=e,s=(0,a.useContext)(m),r=(0,n.Z)("rounded-2xl px-3 py-2 shadow mx-1 max-w-max whitespace-pre-wrap",u().className),l=(0,n.Z)("rounded-br-none ml-2"),i=(0,n.Z)(r,l);return(0,o.jsx)("div",{className:"flex w-full justify-end",children:(0,o.jsx)("div",{className:(0,n.Z)(i),style:{backgroundColor:s.userMessageBgColor,color:s.userMessageTextColor},children:t})})}var b=s(4456),y=s.n(b);function j(e){let{children:t,type:s}=e;return"first"===s?(0,o.jsx)("div",{className:"mt-2",children:t}):"middle"===s?(0,o.jsx)("div",{className:"mt-1",children:t}):void 0}function N(e){let{children:t,show:s=!0}=e;return(0,o.jsx)(c.u,{appear:!0,show:s,enter:"transition ease-in duration-75",enterFrom:"opacity-0 translate-y-2",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-2",children:t})}function w(e){let{blocks:t,paddingBottom:s=0,showTypingAnimation:r=!1,allowMessageClick:a=!1,onMessageClick:l=()=>{},allowFeedback:i=!1,onFeedback:c=()=>{}}=e;return(0,o.jsxs)("div",{className:(0,n.Z)("h-full max-h-full gap-2 overflow-auto px-4",y()["no-scrollbar"]),style:{paddingBottom:"".concat(s+5,"px")},children:[t.map((e,s)=>{let r=(0,o.jsx)("div",{onClick:()=>{l({message_id:e.message_id})},className:(0,n.Z)(a&&"hover:cursor-pointer"),children:"bot"===e.from_?(0,o.jsx)(p,{content:e.content,onFeedback:()=>c(e.message_id),allowFeedback:i},e.message_id):"user"===e.from_?(0,o.jsx)(v,{content:e.content},e.message_id):void 0});return r=s>0&&t[s-1].from_===e.from_?(0,o.jsx)(j,{type:"middle",children:r}):(0,o.jsx)(j,{type:"first",children:r}),s===t.length-1&&(r=(0,o.jsx)(N,{children:r})),r=(0,o.jsx)("div",{children:r},e.message_id)}),(0,o.jsx)(N,{show:r,children:(0,o.jsx)(h,{})})]})}var _=s(7525),C=s(8974);function k(e){let{className:t,...s}=e;return(0,o.jsx)("button",{className:(0,n.Z)("rounded-md border bg-gray-100 text-gray-600 hover:bg-gray-200 px-3 py-2 text-sm font-semibold",t),...s})}function Z(e){let{onClose:t}=e,[s,r]=(0,a.useState)("");return(0,o.jsx)("div",{className:"absolute bottom-0 end-0 start-0 top-0 z-10 flex flex-col justify-center overflow-y-auto bg-gray-50 bg-opacity-10 backdrop-blur-sm",onClick:()=>t({status:"cancel",content:""}),children:(0,o.jsxs)("div",{className:"shadow my-2 w-11/12 max-w-4xl shrink -translate-y-12 rounded-lg bg-white p-5",onClick:e=>e.stopPropagation(),children:[(0,o.jsxs)("div",{className:"px-0.5",children:[(0,o.jsx)("button",{onClick:()=>t({status:"cancel",content:""}),className:"float-right -m-1 rounded-md p-2 text-xl font-semibold hover:bg-slate-100",children:(0,o.jsx)(C.Z,{className:"h-5 w-5"})}),(0,o.jsx)("h2",{className:"text-xl font-medium text-gray-900",children:"Feedback"})]}),(0,o.jsxs)("div",{className:"no-scrollbar  overflow-scroll px-0.5",children:[(0,o.jsx)("textarea",{placeholder:"Share additional feedback",className:"mt-3.5 w-full rounded-md focus:border-gray-700 focus:outline-none focus:ring-gray-200",value:s,onChange:e=>r(e.target.value)}),(0,o.jsx)("div",{className:"mt-1.5",children:(0,o.jsx)(k,{onClick:()=>t({status:"success",content:s}),children:"Submit"})})]})]})})}function S(e){let{history:t,showTypingAnimation:s=!1,allowMessageSend:c=!1,onMessageSend:d=()=>{},allowMessageClick:u=!1,onMessageClick:x=()=>{},allowFeedback:f=!1,theme:g=_.u}=e,[h,p]=(0,a.useState)([]),[v,b]=(0,a.useState)(c?100:0),[y,j]=(0,a.useState)(""),[N,C]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=document.getElementById("cnl-chat-ui").offsetHeight;C(e),p(t),console.log("Chat UI height: ".concat(e,"px"))},[]),(0,a.useEffect)(()=>{p(t)},[t]);let k=()=>{d(y),j("")};(0,a.useEffect)(()=>{document.documentElement.style.setProperty("--cnl-typing-animation-dots-color",g.botMessageTextColor),document.documentElement.style.setProperty("--cnl-bg-color",g.bgColor)},[g]);let[S,E]=(0,a.useState)(!1),[T,M]=(0,a.useState)("");return(0,o.jsx)(m.Provider,{value:g,children:(0,o.jsxs)("div",{id:"cnl-chat-ui",className:(0,n.Z)("relative mx-auto h-full w-full max-w-screen-md flex-col items-center "),style:{backgroundColor:g.bgColor,...0!==N?{maxHeight:"".concat(N,"px")}:{}},children:[(0,o.jsx)(w,{blocks:h,paddingBottom:v,showTypingAnimation:s,onMessageClick:x,allowMessageClick:u,allowFeedback:f,onFeedback:e=>{M(e),E(!0)}}),c&&(0,o.jsxs)("div",{className:(0,n.Z)("absolute bottom-0 flex w-full  rounded-3xl bg-gradient-to-t from-[var(--cnl-bg-color)] from-60% pb-3 pl-3 pt-3 "),children:[(0,o.jsx)(i.Z,{maxRows:2,className:"flex-grow resize-none  rounded-3xl p-3 shadow focus:border-none focus:outline-none  focus:ring-0",onHeightChange:e=>{b(e+16)},onChange:e=>j(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(k(),e.preventDefault())},value:y}),(0,o.jsx)("button",{className:"my-1 ml-2 mr-3 max-h-full",onClick:()=>k(),children:(0,o.jsx)(r.Z,{className:"size-7 opacity-80"})})]}),S&&l.createPortal((0,o.jsx)(Z,{onClose:()=>E(!S)}),document.getElementById("cnl-chat-ui"))]})})}},7525:function(e,t,s){"use strict";s.d(t,{u:function(){return o}});let o={accentColor:"#111827",bgColor:"#f9fafb",botMessageBgColor:"#ffffff",botMessageTextColor:"#4b5563",userMessageBgColor:"#dbeafe",userMessageTextColor:"#1e40af",size:"lg",rounded:"sm"}},6004:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return k}});var o=s(7514),r=s(9680),n=s(5804),a=s(8974),l=s(902),i=s(5310),c=s(5847),d=s(8803),u=s(9055),m=s(783),x=s(7525),f=s(2514),g=s(9546),h=s(1118);function p(e){let{conversationId:t,engineUrl:s,initialHistory:r,onHistoryChange:n,theme:a}=e,[l,i]=(0,d.useState)(r);(0,d.useEffect)(()=>{n({newHistory:l})},[l]);let[c,u]=(0,d.useState)(!1),x=e=>{i(t=>"start-typing-animation"===e.type?(u(!0),t):"bot-message"===e.type?(u(!1),[...t,{from_:"bot",message_id:e.message_id,content:e.content}]):"user-message"===e.type?[...t,{from_:"user",message_id:e.message_id,content:e.content}]:t)};(0,d.useEffect)(()=>{let e=!0,o=async()=>{try{let e=await fetch("".concat(s,"/get_unread_for_front?conversation_id=").concat(t));if(!e.ok)throw Error("HTTP error! Status: ".concat(e.status));(await e.json()).forEach(e=>x(e))}catch(e){console.error("Error fetching data:",e)}finally{e&&(r=setTimeout(o,1e3))}},r=setTimeout(o,1e3);return()=>{e=!1,clearTimeout(r)}},[]);let p=(0,f.D)({mutationFn:async e=>{let{event:t}=e,{data:o}=await g.Z.post("".concat(s,"/add_event"),t);return o}});return(0,o.jsx)(h.Z,{history:l,allowMessageSend:!0,onMessageSend:e=>{let s={conversation_id:t,type:"user-message",content:e,message_id:(0,m.Z)()};p.mutate({event:s},{onSuccess(e){},onError(e){}}),i(t=>[...t,{message_id:(0,m.Z)(),from_:"user",content:e}])},showTypingAnimation:c,theme:a})}var v=s(1586),b=s(177),y=s(5037),j=s(5044),N=s.n(j);let w=e=>{for(let[t,s]of Object.entries(N()))if("object"==typeof s){for(let[o,r]of Object.entries(s))if(r===e)return{color:t,shade:o}}return{color:"",shade:""}};function _(e){let{currentColor:t,onColorChange:s}=e,r=["white","50","100","200","300","400","500","600","700","800","900","950"],n=w(t),[a,l]=(0,d.useState)(!1),c=e=>{s(e)},[u,m]=(0,d.useState)(0),x=(0,d.useRef)(null),f=(0,d.useRef)(null),g=()=>{let e=window.innerHeight;null!==x.current&&m(e-x.current.getBoundingClientRect().top)};return(0,d.useEffect)(()=>{g()},[]),(0,d.useEffect)(()=>{function e(e){x.current&&!x.current.contains(e.target)&&f.current!==e.target&&l(!1)}return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]),(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)("button",{ref:f,className:"h-6 w-10 rounded-md",style:{backgroundColor:t},onClick:()=>l(!a)}),(0,o.jsx)("div",{ref:x,children:a&&(0,o.jsxs)("div",{style:{maxHeight:u},className:"absolute -right-2 z-50  min-w-fit overflow-auto rounded border bg-white px-2 py-1 shadow",children:[(0,o.jsx)("div",{className:"grid min-w-max grid-cols-12 gap-1",children:["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"].map(e=>r.map(t=>"white"!==t?(0,o.jsx)("button",{className:(0,i.Z)(" h-5 w-6 rounded",n.color===e&&n.shade===t&&"outline outline-offset-1 outline-gray-600"),style:{backgroundColor:N()[e][t]},onClick:s=>{s.stopPropagation,s.preventDefault,c(N()[e][t])}},"".concat(e,"-").concat(t)):(0,o.jsx)("button",{className:" h-5 w-6 rounded border border-gray-50",style:{backgroundColor:"#ffffff"},onClick:e=>{e.stopPropagation,e.preventDefault,c("#ffffff")}},"".concat(e,"-").concat(t))))}),(0,o.jsxs)("div",{className:"mt-2",children:[(0,o.jsx)("p",{children:"Pick custom color:"}),(0,o.jsx)("input",{type:"color",className:"bg-white hover:cursor-pointer",value:t,onChange:e=>c(e.target.value)})]})]})})]})}function C(e){let{onThemeChange:t,currentTheme:s}=e,r={colors:{accent_color:s.accentColor,bg_color:s.bgColor,bot_message_bg_color:s.botMessageBgColor,bot_message_text_color:s.botMessageTextColor,user_message_bg_color:s.userMessageBgColor,user_message_text_color:s.userMessageTextColor},rounded:s.rounded},[n,a]=(0,d.useState)(r),[l,i]=(0,d.useState)(!1),c=(e,s)=>{let o={...n,colors:{...n.colors,[e]:s}};a(o),t({accentColor:o.colors.accent_color,bgColor:o.colors.bg_color,botMessageBgColor:o.colors.bot_message_bg_color,botMessageTextColor:o.colors.bot_message_text_color,userMessageBgColor:o.colors.user_message_bg_color,userMessageTextColor:o.colors.user_message_text_color,size:"lg",rounded:o.rounded})},u=(0,d.useRef)(null),m=(0,d.useRef)(null);return(0,d.useEffect)(()=>{function e(e){!u.current||u.current.contains(e.target)||m.current.contains(e.target)||i(!1)}return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]),(0,o.jsxs)("div",{className:"relative p-1 px-1.5",children:[(0,o.jsx)("div",{className:"flex justify-end",children:(0,o.jsx)("button",{ref:m,onClick:()=>i(!l),className:"rounded-full p-2 hover:bg-gray-200",children:(0,o.jsx)(v.Z,{className:"h-6 w-6"})})}),l&&(0,o.jsx)("div",{ref:u,className:"z-50 mt-0.5 w-auto max-w-fit rounded-md border bg-white p-4",children:(0,o.jsxs)("div",{className:"grid grid-cols-[auto_auto] items-center gap-4",children:[Object.entries(n.colors).map(e=>{let[t,s]=e;return(0,o.jsxs)(d.Fragment,{children:[(0,o.jsx)("div",{className:"justify-self-end text-sm font-semibold capitalize",children:t.split("_").join(" ")}),(0,o.jsx)(_,{currentColor:s,onColorChange:e=>{c(t,e)}})]},t)}),(0,o.jsxs)(d.Fragment,{children:[(0,o.jsx)("div",{className:"justify-self-end text-sm font-semibold capitalize",children:"Rounded"}),(0,o.jsxs)("select",{value:n.rounded,onChange:e=>a({...n,rounded:e.target.value}),className:"rounded-md py-0.5 pl-1 pr-3  focus:ring-0",children:[(0,o.jsx)("option",{value:"sm",children:"Small"}),(0,o.jsx)("option",{value:"md",children:"Medium"}),(0,o.jsx)("option",{value:"lg",children:"Large"})]})]},"rounded"),(0,o.jsx)(d.Fragment,{children:(0,o.jsxs)(y.z,{variant:"outline",onClick:()=>{let e=JSON.stringify(n,null,2);navigator.clipboard.writeText(e)},children:["Copy config ",(0,o.jsx)(b.Z,{className:"size-5 ml-2"})]})},"copy-config")]})})]})}function k(){var e;let[t,s]=(0,d.useState)(!1),[f,g]=(0,d.useState)(x.u),[h,v]=(0,d.useState)(null),[b,y]=(0,d.useState)([]);(0,d.useEffect)(()=>{if(0===b.length){let e=(0,m.Z)();y([{conversation_id:e,conversation_history:[],last_activity:new Date().toISOString()}]),v(e)}},[]);let[j,N]=(0,d.useState)("");return(0,d.useEffect)(()=>{y(e=>{let t=e;return(t=t.slice(0,100)).sort((e,t)=>t.last_activity.localeCompare(e.last_activity)),t})},[j]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"h-full",children:[(0,o.jsx)(r.u.Root,{show:t,as:d.Fragment,children:(0,o.jsxs)(n.V,{as:"div",className:"relative z-50 lg:hidden",onClose:s,children:[(0,o.jsx)(r.u.Child,{as:d.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,o.jsx)("div",{className:"fixed inset-0 bg-gray-900/80"})}),(0,o.jsx)("div",{className:"fixed inset-0 flex",children:(0,o.jsx)(r.u.Child,{as:d.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,o.jsxs)(n.V.Panel,{className:"relative mr-16 flex w-full max-w-xs flex-1",children:[(0,o.jsx)(r.u.Child,{as:d.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,o.jsx)("div",{className:"absolute left-full top-0 flex w-16 justify-center pt-5",children:(0,o.jsxs)("button",{type:"button",className:"-m-2.5 p-2.5",onClick:()=>s(!1),children:[(0,o.jsx)("span",{className:"sr-only",children:"Close sidebar"}),(0,o.jsx)(a.Z,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})}),(0,o.jsxs)("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2",children:[(0,o.jsx)("div",{className:"flex h-16 shrink-0 items-center",children:(0,o.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:"Your Company"})}),(0,o.jsx)("nav",{className:"flex flex-1 flex-col",children:(0,o.jsxs)("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[(0,o.jsx)("li",{children:(0,o.jsx)("ul",{role:"list",className:"-mx-2 space-y-1"})}),(0,o.jsxs)("li",{children:[(0,o.jsx)("div",{className:"text-xs font-semibold leading-6 text-gray-400",children:"Your teams"}),(0,o.jsx)("ul",{role:"list",className:"-mx-2 mt-2 space-y-1"})]})]})})]})]})})})]})}),(0,o.jsx)("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:(0,o.jsxs)("div",{className:"flex grow flex-col overflow-y-auto border-r border-gray-200 bg-white px-6",children:[(0,o.jsx)(u.E,{}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{className:" w-full  rounded-md border border-gray-200 px-2 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 ",onClick:()=>{let e=(0,m.Z)();y([...b,{conversation_id:e,last_activity:new Date().toISOString(),conversation_history:[]}]),v(e)},children:(0,o.jsxs)("span",{className:"-ml-6  flex items-center justify-center gap-2",children:[(0,o.jsx)(c.Z,{className:"h-5 w-5"})," New chat"]})})}),(0,o.jsxs)("div",{className:"mt-6",children:[(0,o.jsx)("div",{className:"text-xs font-semibold leading-6 text-gray-500",children:"Chat history"}),(0,o.jsx)("div",{className:"mt-3",children:(0,o.jsx)("ul",{role:"list",className:"-mx-2 space-y-1",children:b.filter(e=>{var t,s;return(null===(s=e.conversation_history[0])||void 0===s?void 0:null===(t=s.content)||void 0===t?void 0:t.length)>0}).map(e=>{var t;let s=e.conversation_id===h;return(0,o.jsx)("li",{children:(0,o.jsx)("button",{className:(0,i.Z)(s?"bg-gray-50":"text-gray-700 hover:bg-gray-50","group flex w-full gap-x-3 rounded-md px-2 py-1 text-sm font-medium leading-6"),children:(0,o.jsx)("span",{className:"truncate",children:null===(t=e.conversation_history[0])||void 0===t?void 0:t.content})})},e.conversation_id)})})})]})]})}),(0,o.jsxs)("div",{className:"sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden",children:[(0,o.jsxs)("button",{type:"button",className:"-m-2.5 p-2.5 text-gray-700 lg:hidden",onClick:()=>s(!0),children:[(0,o.jsx)("span",{className:"sr-only",children:"Open sidebar"}),(0,o.jsx)(l.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,o.jsx)("div",{className:"flex-1 text-sm font-semibold leading-6 text-gray-900",children:"Dashboard"}),(0,o.jsxs)("a",{href:"#",children:[(0,o.jsx)("span",{className:"sr-only",children:"Your profile"}),(0,o.jsx)("img",{className:"h-8 w-8 rounded-full bg-gray-50",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})]})]}),(0,o.jsxs)("main",{className:"h-full lg:pl-72",style:{backgroundColor:f.bgColor},children:[(0,o.jsx)("div",{className:"fixed right-0 top-0 z-40",children:(0,o.jsx)(C,{onThemeChange:e=>{g(e)},currentTheme:x.u})}),(0,o.jsx)("div",{className:" h-full ",children:(0,o.jsx)(p,{initialHistory:(null===(e=b.find(e=>e.conversation_id===h))||void 0===e?void 0:e.conversation_history)||[],onHistoryChange:e=>{let{newHistory:t}=e;y(e=>e.map(e=>e.conversation_id===h?{...e,conversation_history:t,last_activity:new Date().toISOString()}:e)),N((0,m.Z)())},theme:f,conversationId:h||"",engineUrl:"".concat("http://localhost:5008")},h||"")})]})]})})}},9055:function(e,t,s){"use strict";s.d(t,{E:function(){return r}});var o=s(7514);function r(){return(0,o.jsxs)("div",{className:"h-16 flex shrink-0 items-center text-xl font-bold text-primary",children:["C",(0,o.jsx)("span",{className:"tracking-wide",children:"NL"})," "]})}},5037:function(e,t,s){"use strict";s.d(t,{z:function(){return c}});var o=s(7514),r=s(8803),n=s(8155),a=s(4894),l=s(5893);let i=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef((e,t)=>{let{className:s,variant:r,size:a,asChild:c=!1,...d}=e,u=c?n.g7:"button";return(0,o.jsx)(u,{className:(0,l.cn)(i({variant:r,size:a,className:s})),ref:t,...d})});c.displayName="Button"},5893:function(e,t,s){"use strict";s.d(t,{cn:function(){return n}});var o=s(5310),r=s(6895);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,r.m6)((0,o.W)(t))}},4456:function(e){e.exports={"no-scrollbar":"noScrollBar_no-scrollbar__genmS"}},3146:function(e){e.exports={"dot-flashing":"typingAnimationBlock_dot-flashing__ZRQVw"}}},function(e){e.O(0,[412,796,38,984,56,470,861,744],function(){return e(e.s=2862)}),_N_E=e.O()}]);