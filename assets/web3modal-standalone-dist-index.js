"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_web3modal_standalone_dist_index_es_js"],{

/***/ "./node_modules/proxy-compare/dist/index.modern.js":
/*!*********************************************************!*\
  !*** ./node_modules/proxy-compare/dist/index.modern.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   affectedToPathList: () => (/* binding */ w),
/* harmony export */   createProxy: () => (/* binding */ a),
/* harmony export */   getUntracked: () => (/* binding */ y),
/* harmony export */   isChanged: () => (/* binding */ p),
/* harmony export */   markToTrack: () => (/* binding */ h),
/* harmony export */   replaceNewProxy: () => (/* binding */ O),
/* harmony export */   trackMemo: () => (/* binding */ g)
/* harmony export */ });
const e=Symbol(),t=Symbol(),r="a",n="w";let o=(e,t)=>new Proxy(e,t);const s=Object.getPrototypeOf,c=new WeakMap,l=e=>e&&(c.has(e)?c.get(e):s(e)===Object.prototype||s(e)===Array.prototype),f=e=>"object"==typeof e&&null!==e,i=e=>{if(Array.isArray(e))return Array.from(e);const t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(s(e),t)},u=e=>e[t]||e,a=(s,c,f,p)=>{if(!l(s))return s;let g=p&&p.get(s);if(!g){const e=u(s);g=(e=>Object.values(Object.getOwnPropertyDescriptors(e)).some(e=>!e.configurable&&!e.writable))(e)?[e,i(e)]:[e],null==p||p.set(s,g)}const[y,h]=g;let w=f&&f.get(y);return w&&w[1].f===!!h||(w=((o,s)=>{const c={f:s};let l=!1;const f=(e,t)=>{if(!l){let s=c[r].get(o);if(s||(s={},c[r].set(o,s)),e===n)s[n]=!0;else{let r=s[e];r||(r=new Set,s[e]=r),r.add(t)}}},i={get:(e,n)=>n===t?o:(f("k",n),a(Reflect.get(e,n),c[r],c.c,c.t)),has:(t,n)=>n===e?(l=!0,c[r].delete(o),!0):(f("h",n),Reflect.has(t,n)),getOwnPropertyDescriptor:(e,t)=>(f("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(f(n),Reflect.ownKeys(e))};return s&&(i.set=i.deleteProperty=()=>!1),[i,c]})(y,!!h),w[1].p=o(h||y,w[0]),f&&f.set(y,w)),w[1][r]=c,w[1].c=f,w[1].t=p,w[1].p},p=(e,t,r,o)=>{if(Object.is(e,t))return!1;if(!f(e)||!f(t))return!0;const s=r.get(u(e));if(!s)return!0;if(o){const r=o.get(e);if(r&&r.n===t)return r.g;o.set(e,{n:t,g:!1})}let c=null;try{for(const r of s.h||[])if(c=Reflect.has(e,r)!==Reflect.has(t,r),c)return c;if(!0===s[n]){if(c=((e,t)=>{const r=Reflect.ownKeys(e),n=Reflect.ownKeys(t);return r.length!==n.length||r.some((e,t)=>e!==n[t])})(e,t),c)return c}else for(const r of s.o||[])if(c=!!Reflect.getOwnPropertyDescriptor(e,r)!=!!Reflect.getOwnPropertyDescriptor(t,r),c)return c;for(const n of s.k||[])if(c=p(e[n],t[n],r,o),c)return c;return null===c&&(c=!0),c}finally{o&&o.set(e,{n:t,g:c})}},g=t=>!!l(t)&&e in t,y=e=>l(e)&&e[t]||null,h=(e,t=!0)=>{c.set(e,t)},w=(e,t,r)=>{const o=[],s=new WeakSet,c=(e,l)=>{if(s.has(e))return;f(e)&&s.add(e);const i=f(e)&&t.get(u(e));if(i){var a,p;if(null==(a=i.h)||a.forEach(e=>{const t=`:has(${String(e)})`;o.push(l?[...l,t]:[t])}),!0===i[n]){const e=":ownKeys";o.push(l?[...l,e]:[e])}else{var g;null==(g=i.o)||g.forEach(e=>{const t=`:hasOwn(${String(e)})`;o.push(l?[...l,t]:[t])})}null==(p=i.k)||p.forEach(t=>{r&&!("value"in(Object.getOwnPropertyDescriptor(e,t)||{}))||c(e[t],l?[...l,t]:[t])})}else l&&o.push(l)};return c(e),o},O=e=>{o=e};
//# sourceMappingURL=index.modern.mjs.map


/***/ }),

/***/ "./node_modules/@web3modal/core/dist/index.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/@web3modal/core/dist/index.es.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountCtrl: () => (/* binding */ K),
/* harmony export */   ClientCtrl: () => (/* binding */ C),
/* harmony export */   ConfigCtrl: () => (/* binding */ y),
/* harmony export */   CoreUtil: () => (/* binding */ c),
/* harmony export */   EventsCtrl: () => (/* binding */ H),
/* harmony export */   ExplorerCtrl: () => (/* binding */ ne),
/* harmony export */   ModalCtrl: () => (/* binding */ se),
/* harmony export */   OptionsCtrl: () => (/* binding */ d),
/* harmony export */   RouterCtrl: () => (/* binding */ b),
/* harmony export */   ThemeCtrl: () => (/* binding */ ae),
/* harmony export */   ToastCtrl: () => (/* binding */ oe),
/* harmony export */   WcConnectionCtrl: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! valtio/vanilla */ "./node_modules/valtio/esm/vanilla.mjs");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
let N;const C={ethereumClient:void 0,setEthereumClient(e){N=e},client(){if(N)return N;throw new Error("ClientCtrl has no client set")}},i=(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.proxy)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),b={state:i,subscribe(e){return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.subscribe)(i,()=>e(i))},push(e,t){e!==i.view&&(i.view=e,t&&(i.data=t),i.history.push(e))},reset(e){i.view=e,i.history=[e]},replace(e){i.history.length>1&&(i.history[i.history.length-1]=e,i.view=e)},goBack(){if(i.history.length>1){i.history.pop();const[e]=i.history.slice(-1);i.view=e}},setData(e){i.data=e}},c={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",W3M_PREFER_INJECTED_URL_FLAG:"w3mPreferInjected",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return c.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return c.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,n){if(c.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);let s=e;s.includes("://")||(s=e.replaceAll("/","").replaceAll(":",""),s=`${s}://`),this.setWalletConnectDeepLink(s,n);const a=encodeURIComponent(t);return`${s}wc?uri=${a}`},formatUniversalUrl(e,t,n){if(!c.isHttpUrl(e))return this.formatNativeUrl(e,t,n);let s=e;e.endsWith("/")&&(s=e.slice(0,-1)),this.setWalletConnectDeepLink(s,n);const a=encodeURIComponent(t);return`${s}/wc?uri=${a}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(c.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(c.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(c.WALLETCONNECT_DEEPLINK_CHOICE)},setWeb3ModalVersionInStorage(){typeof localStorage<"u"&&localStorage.setItem(c.W3M_VERSION,"2.4.2")},getWalletRouterData(){var e;const t=(e=b.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t},getSwitchNetworkRouterData(){var e;const t=(e=b.state.data)==null?void 0:e.SwitchNetwork;if(!t)throw new Error('Missing "SwitchNetwork" view data');return t},isPreferInjectedFlag(){return typeof location<"u"?new URLSearchParams(location.search).has(c.W3M_PREFER_INJECTED_URL_FLAG):!1}},B=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.proxy)({enabled:B,userSessionId:"",events:[],connectedWalletId:void 0}),H={state:u,subscribe(e){return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.subscribe)(u.events,()=>e((0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.snapshot)(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof crypto<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},l=(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.proxy)({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,isPreferInjected:!1,walletConnectVersion:1}),d={state:l,subscribe(e){return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.subscribe)(l,()=>e(l))},setChains(e){l.chains=e},setStandaloneChains(e){l.standaloneChains=e},setStandaloneUri(e){l.standaloneUri=e},getSelectedChain(){const e=C.client().getNetwork().chain;return e&&(l.selectedChain=e),l.selectedChain},setSelectedChain(e){l.selectedChain=e},setIsStandalone(e){l.isStandalone=e},setIsCustomDesktop(e){l.isCustomDesktop=e},setIsCustomMobile(e){l.isCustomMobile=e},setIsDataLoaded(e){l.isDataLoaded=e},setIsUiLoaded(e){l.isUiLoaded=e},setWalletConnectVersion(e){l.walletConnectVersion=e},setIsPreferInjected(e){l.isPreferInjected=e},setIsAuth(e){l.isAuth=e}},O=(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.proxy)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,tokenContracts:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableAuthMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),y={state:O,subscribe(e){return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.subscribe)(O,()=>e(O))},setConfig(e){var t,n,s,a;H.initialize(),d.setStandaloneChains(e.standaloneChains),d.setIsStandalone(!!((t=e.standaloneChains)!=null&&t.length)||!!e.enableStandaloneMode),d.setIsAuth(!!e.enableAuthMode),d.setIsCustomMobile(!!((n=e.mobileWallets)!=null&&n.length)),d.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),d.setWalletConnectVersion((a=e.walletConnectVersion)!=null?a:1),d.state.isStandalone||(d.setChains(C.client().chains),d.setIsPreferInjected(C.client().isInjectedProviderInstalled()&&c.isPreferInjectedFlag())),e.defaultChain&&d.setSelectedChain(e.defaultChain),c.setWeb3ModalVersionInStorage(),Object.assign(O,e)}},o=(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.proxy)({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),K={state:o,subscribe(e){return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.subscribe)(o,()=>e(o))},getAccount(){const e=C.client().getAccount();o.address=e.address,o.isConnected=e.isConnected},async fetchProfile(e,t){var n;try{o.profileLoading=!0;const s=t??o.address,a=(n=d.state.chains)==null?void 0:n.find(r=>r.id===1);if(s&&a){const r=await C.client().fetchEnsName({address:s,chainId:1});if(r){const p=await C.client().fetchEnsAvatar({name:r,chainId:1});p&&await e(p),o.profileAvatar=p}o.profileName=r}}finally{o.profileLoading=!1}},async fetchBalance(e){try{const{chain:t}=C.client().getNetwork(),{tokenContracts:n}=y.state;let s;t&&n&&(s=n[t.id]),o.balanceLoading=!0;const a=e??o.address;if(a){const r=await C.client().fetchBalance({address:a,token:s});o.balance={amount:r.formatted,symbol:r.symbol}}}finally{o.balanceLoading=!1}},setAddress(e){o.address=e},setIsConnected(e){o.isConnected=e},resetBalance(){o.balance=void 0},resetAccount(){o.address=void 0,o.isConnected=!1,o.profileName=void 0,o.profileAvatar=void 0,o.balance=void 0}},M="https://explorer-api.walletconnect.com";async function U(e,t){const n=new URL(e,M);return n.searchParams.append("projectId",y.state.projectId),Object.entries(t).forEach(([s,a])=>{a&&n.searchParams.append(s,String(a))}),(await fetch(n)).json()}const I={async getDesktopListings(e){return U("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return U("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return U("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return U("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${M}/w3m/v1/getWalletImage/${e}?projectId=${y.state.projectId}`},getAssetImageUrl(e){return`${M}/w3m/v1/getAssetImage/${e}?projectId=${y.state.projectId}`}};var F=Object.defineProperty,D=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t)=>{for(var n in t||(t={}))J.call(t,n)&&k(e,n,t[n]);if(D)for(var n of D(t))z.call(t,n)&&k(e,n,t[n]);return e};const P=c.isMobile(),g=(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.proxy)({wallets:{listings:[],total:0,page:1},injectedWallets:[],search:{listings:[],total:0,page:1},recomendedWallets:[]}),ne={state:g,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=y.state;if(e==="NONE"||t==="ALL"&&!e)return g.recomendedWallets;if(c.isArray(e)){const n={recommendedIds:e.join(",")},{listings:s}=await I.getAllListings(n),a=Object.values(s);a.sort((r,p)=>{const h=e.indexOf(r.id),v=e.indexOf(p.id);return h-v}),g.recomendedWallets=a}else{const{standaloneChains:n,walletConnectVersion:s,isAuth:a}=d.state,r=n?.join(","),p=c.isArray(t),h={page:1,sdks:a?"auth_v1":void 0,entries:c.RECOMMENDED_WALLET_AMOUNT,chains:r,version:s,excludedIds:p?t.join(","):void 0},{listings:v}=P?await I.getMobileListings(h):await I.getDesktopListings(h);g.recomendedWallets=Object.values(v)}return g.recomendedWallets},async getWallets(e){const t=G({},e),{explorerRecommendedWalletIds:n,explorerExcludedWalletIds:s}=y.state,{recomendedWallets:a}=g;if(s==="ALL")return g.wallets;t.search||(a.length?t.excludedIds=a.map(W=>W.id).join(","):c.isArray(n)&&(t.excludedIds=n.join(","))),c.isArray(s)&&(t.excludedIds=[t.excludedIds,s].filter(Boolean).join(",")),d.state.isAuth&&(t.sdks="auth_v1");const{page:r,search:p}=e,{listings:h,total:v}=P?await I.getMobileListings(t):await I.getDesktopListings(t),j=Object.values(h),L=p?"search":"wallets";return g[L]={listings:[...g[L].listings,...j],total:v,page:r??1},{listings:j,total:v}},async getInjectedWallets(){const{listings:e}=await I.getInjectedListings({}),t=Object.values(e);return g.injectedWallets=t,g.injectedWallets},getWalletImageUrl(e){return I.getWalletImageUrl(e)},getAssetImageUrl(e){return I.getAssetImageUrl(e)},resetSearch(){g.search={listings:[],total:0,page:1}}},A=(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.proxy)({pairingUri:"",pairingError:!1}),_={state:A,subscribe(e){return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.subscribe)(A,()=>e(A))},setPairingUri(e){A.pairingUri=e},setPairingError(e){A.pairingError=e}},E=(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.proxy)({open:!1}),se={state:E,subscribe(e){return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.subscribe)(E,()=>e(E))},async open(e){return new Promise(t=>{const{isStandalone:n,isUiLoaded:s,isDataLoaded:a,isPreferInjected:r,selectedChain:p}=d.state,{isConnected:h}=K.state,{enableNetworkView:v}=y.state;if(n)d.setStandaloneUri(e?.uri),d.setStandaloneChains(e?.standaloneChains),b.reset("ConnectWallet");else if(e!=null&&e.route)b.reset(e.route);else if(h)b.reset("Account");else if(v)b.reset("SelectNetwork");else if(r){C.client().connectConnector("injected",p?.id).catch(L=>console.error(L)),t();return}else b.reset("ConnectWallet");const{pairingUri:j}=_.state;if(s&&a&&(n||j||h))E.open=!0,t();else{const L=setInterval(()=>{const W=d.state,T=_.state;W.isUiLoaded&&W.isDataLoaded&&(W.isStandalone||T.pairingUri||h)&&(clearInterval(L),E.open=!0,t())},200)}})},close(){E.open=!1}};var q=Object.defineProperty,x=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y=(e,t)=>{for(var n in t||(t={}))Q.call(t,n)&&R(e,n,t[n]);if(x)for(var n of x(t))X.call(t,n)&&R(e,n,t[n]);return e};function Z(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const S=(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.proxy)({themeMode:Z()?"dark":"light"}),ae={state:S,subscribe(e){return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.subscribe)(S,()=>e(S))},setThemeConfig(e){const{themeMode:t,themeVariables:n}=e;t&&(S.themeMode=t),n&&(S.themeVariables=Y({},n))}},w=(0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.proxy)({open:!1,message:"",variant:"success"}),oe={state:w,subscribe(e){return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_1__.subscribe)(w,()=>e(w))},openToast(e,t){w.open=!0,w.message=e,w.variant=t},closeToast(){w.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}));


/***/ }),

/***/ "./node_modules/@web3modal/standalone/dist/index.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/@web3modal/standalone/dist/index.es.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Web3Modal: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _web3modal_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3modal/core */ "./node_modules/@web3modal/core/dist/index.es.js");
var c=Object.defineProperty,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,a=(o,e,t)=>e in o?c(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,m=(o,e)=>{for(var t in e||(e={}))d.call(e,t)&&a(o,t,e[t]);if(i)for(var t of i(e))b.call(e,t)&&a(o,t,e[t]);return o};class f{constructor(e){this.openModal=_web3modal_core__WEBPACK_IMPORTED_MODULE_0__.ModalCtrl.open,this.closeModal=_web3modal_core__WEBPACK_IMPORTED_MODULE_0__.ModalCtrl.close,this.subscribeModal=_web3modal_core__WEBPACK_IMPORTED_MODULE_0__.ModalCtrl.subscribe,this.setTheme=_web3modal_core__WEBPACK_IMPORTED_MODULE_0__.ThemeCtrl.setThemeConfig,_web3modal_core__WEBPACK_IMPORTED_MODULE_0__.ThemeCtrl.setThemeConfig(e),_web3modal_core__WEBPACK_IMPORTED_MODULE_0__.ConfigCtrl.setConfig(m({enableStandaloneMode:!0},e)),this.initUi()}async initUi(){if(typeof window<"u"){await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_lit_decorators_js-node_modules_lit_index_js"), __webpack_require__.e("vendors-node_modules_qrcode_lib_browser_js"), __webpack_require__.e("vendors-node_modules_web3modal_ui_dist_index_es_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @web3modal/ui */ "./node_modules/@web3modal/ui/dist/index.es.js"));const e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),_web3modal_core__WEBPACK_IMPORTED_MODULE_0__.OptionsCtrl.setIsUiLoaded(!0)}}}


/***/ }),

/***/ "./node_modules/valtio/esm/vanilla.mjs":
/*!*********************************************!*\
  !*** ./node_modules/valtio/esm/vanilla.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVersion: () => (/* binding */ getVersion),
/* harmony export */   proxy: () => (/* binding */ proxy),
/* harmony export */   ref: () => (/* binding */ ref),
/* harmony export */   snapshot: () => (/* binding */ snapshot),
/* harmony export */   subscribe: () => (/* binding */ subscribe),
/* harmony export */   unstable_buildProxyFunction: () => (/* binding */ unstable_buildProxyFunction)
/* harmony export */ });
/* harmony import */ var proxy_compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! proxy-compare */ "./node_modules/proxy-compare/dist/index.modern.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


const isObject = (x) => typeof x === "object" && x !== null;
const proxyStateMap = /* @__PURE__ */ new WeakMap();
const refSet = /* @__PURE__ */ new WeakSet();
const buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler) => new Proxy(target, handler), canProxy = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = (promise) => {
  switch (promise.status) {
    case "fulfilled":
      return promise.value;
    case "rejected":
      throw promise.reason;
    default:
      throw promise;
  }
}, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version, handlePromise = defaultHandlePromise) => {
  const cache = snapCache.get(target);
  if ((cache == null ? void 0 : cache[0]) === version) {
    return cache[1];
  }
  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.markToTrack)(snap, true);
  snapCache.set(target, [version, snap]);
  Reflect.ownKeys(target).forEach((key) => {
    if (Object.getOwnPropertyDescriptor(snap, key)) {
      return;
    }
    const value = Reflect.get(target, key);
    const desc = {
      value,
      enumerable: true,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: true
    };
    if (refSet.has(value)) {
      (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.markToTrack)(value, false);
    } else if (value instanceof Promise) {
      delete desc.value;
      desc.get = () => handlePromise(value);
    } else if (proxyStateMap.has(value)) {
      const [target2, ensureVersion] = proxyStateMap.get(
        value
      );
      desc.value = createSnapshot(
        target2,
        ensureVersion(),
        handlePromise
      );
    }
    Object.defineProperty(snap, key, desc);
  });
  return snap;
}, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [1, 1], proxyFunction = (initialObject) => {
  if (!isObject(initialObject)) {
    throw new Error("object required");
  }
  const found = proxyCache.get(initialObject);
  if (found) {
    return found;
  }
  let version = versionHolder[0];
  const listeners = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
    if (version !== nextVersion) {
      version = nextVersion;
      listeners.forEach((listener) => listener(op, nextVersion));
    }
  };
  let checkVersion = versionHolder[1];
  const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
    if (checkVersion !== nextCheckVersion && !listeners.size) {
      checkVersion = nextCheckVersion;
      propProxyStates.forEach(([propProxyState]) => {
        const propVersion = propProxyState[1](nextCheckVersion);
        if (propVersion > version) {
          version = propVersion;
        }
      });
    }
    return version;
  };
  const createPropListener = (prop) => (op, nextVersion) => {
    const newOp = [...op];
    newOp[1] = [prop, ...newOp[1]];
    notifyUpdate(newOp, nextVersion);
  };
  const propProxyStates = /* @__PURE__ */ new Map();
  const addPropListener = (prop, propProxyState) => {
    if ( true && propProxyStates.has(prop)) {
      throw new Error("prop listener already exists");
    }
    if (listeners.size) {
      const remove = propProxyState[3](createPropListener(prop));
      propProxyStates.set(prop, [propProxyState, remove]);
    } else {
      propProxyStates.set(prop, [propProxyState]);
    }
  };
  const removePropListener = (prop) => {
    var _a;
    const entry = propProxyStates.get(prop);
    if (entry) {
      propProxyStates.delete(prop);
      (_a = entry[1]) == null ? void 0 : _a.call(entry);
    }
  };
  const addListener = (listener) => {
    listeners.add(listener);
    if (listeners.size === 1) {
      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
        if ( true && prevRemove) {
          throw new Error("remove already exists");
        }
        const remove = propProxyState[3](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      });
    }
    const removeListener = () => {
      listeners.delete(listener);
      if (listeners.size === 0) {
        propProxyStates.forEach(([propProxyState, remove], prop) => {
          if (remove) {
            remove();
            propProxyStates.set(prop, [propProxyState]);
          }
        });
      }
    };
    return removeListener;
  };
  const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
  const handler = {
    deleteProperty(target, prop) {
      const prevValue = Reflect.get(target, prop);
      removePropListener(prop);
      const deleted = Reflect.deleteProperty(target, prop);
      if (deleted) {
        notifyUpdate(["delete", [prop], prevValue]);
      }
      return deleted;
    },
    set(target, prop, value, receiver) {
      const hasPrevValue = Reflect.has(target, prop);
      const prevValue = Reflect.get(target, prop, receiver);
      if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
        return true;
      }
      removePropListener(prop);
      if (isObject(value)) {
        value = (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.getUntracked)(value) || value;
      }
      let nextValue = value;
      if (value instanceof Promise) {
        value.then((v) => {
          value.status = "fulfilled";
          value.value = v;
          notifyUpdate(["resolve", [prop], v]);
        }).catch((e) => {
          value.status = "rejected";
          value.reason = e;
          notifyUpdate(["reject", [prop], e]);
        });
      } else {
        if (!proxyStateMap.has(value) && canProxy(value)) {
          nextValue = proxyFunction(value);
        }
        const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
        if (childProxyState) {
          addPropListener(prop, childProxyState);
        }
      }
      Reflect.set(target, prop, nextValue, receiver);
      notifyUpdate(["set", [prop], value, prevValue]);
      return true;
    }
  };
  const proxyObject = newProxy(baseObject, handler);
  proxyCache.set(initialObject, proxyObject);
  const proxyState = [
    baseObject,
    ensureVersion,
    createSnapshot,
    addListener
  ];
  proxyStateMap.set(proxyObject, proxyState);
  Reflect.ownKeys(initialObject).forEach((key) => {
    const desc = Object.getOwnPropertyDescriptor(
      initialObject,
      key
    );
    if ("value" in desc) {
      proxyObject[key] = initialObject[key];
      delete desc.value;
      delete desc.writable;
    }
    Object.defineProperty(baseObject, key, desc);
  });
  return proxyObject;
}) => [
  // public functions
  proxyFunction,
  // shared state
  proxyStateMap,
  refSet,
  // internal things
  objectIs,
  newProxy,
  canProxy,
  defaultHandlePromise,
  snapCache,
  createSnapshot,
  proxyCache,
  versionHolder
];
const [defaultProxyFunction] = buildProxyFunction();
function proxy(initialObject = {}) {
  return defaultProxyFunction(initialObject);
}
function getVersion(proxyObject) {
  const proxyState = proxyStateMap.get(proxyObject);
  return proxyState == null ? void 0 : proxyState[1]();
}
function subscribe(proxyObject, callback, notifyInSync) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ( true && !proxyState) {
    console.warn("Please use proxy object");
  }
  let promise;
  const ops = [];
  const addListener = proxyState[3];
  let isListenerActive = false;
  const listener = (op) => {
    ops.push(op);
    if (notifyInSync) {
      callback(ops.splice(0));
      return;
    }
    if (!promise) {
      promise = Promise.resolve().then(() => {
        promise = void 0;
        if (isListenerActive) {
          callback(ops.splice(0));
        }
      });
    }
  };
  const removeListener = addListener(listener);
  isListenerActive = true;
  return () => {
    isListenerActive = false;
    removeListener();
  };
}
function snapshot(proxyObject, handlePromise) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ( true && !proxyState) {
    console.warn("Please use proxy object");
  }
  const [target, ensureVersion, createSnapshot] = proxyState;
  return createSnapshot(target, ensureVersion(), handlePromise);
}
function ref(obj) {
  refSet.add(obj);
  return obj;
}
const unstable_buildProxyFunction = buildProxyFunction;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFXO0FBQ2pCLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBMEQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQTBEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBMEQ7QUFDaEUsSUFBSSxPQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUEwRDtBQUNoRSxJQUFJLE9BQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvcHJveHktY29tcGFyZS9kaXN0L2luZGV4Lm1vZGVybi5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2ViM21vZGFsL2NvcmUvZGlzdC9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2ViM21vZGFsL3N0YW5kYWxvbmUvZGlzdC9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy92YWx0aW8vZXNtL3ZhbmlsbGEubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGU9U3ltYm9sKCksdD1TeW1ib2woKSxyPVwiYVwiLG49XCJ3XCI7bGV0IG89KGUsdCk9Pm5ldyBQcm94eShlLHQpO2NvbnN0IHM9T2JqZWN0LmdldFByb3RvdHlwZU9mLGM9bmV3IFdlYWtNYXAsbD1lPT5lJiYoYy5oYXMoZSk/Yy5nZXQoZSk6cyhlKT09PU9iamVjdC5wcm90b3R5cGV8fHMoZSk9PT1BcnJheS5wcm90b3R5cGUpLGY9ZT0+XCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPT1lLGk9ZT0+e2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIEFycmF5LmZyb20oZSk7Y29uc3QgdD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhlKTtyZXR1cm4gT2JqZWN0LnZhbHVlcyh0KS5mb3JFYWNoKGU9PntlLmNvbmZpZ3VyYWJsZT0hMH0pLE9iamVjdC5jcmVhdGUocyhlKSx0KX0sdT1lPT5lW3RdfHxlLGE9KHMsYyxmLHApPT57aWYoIWwocykpcmV0dXJuIHM7bGV0IGc9cCYmcC5nZXQocyk7aWYoIWcpe2NvbnN0IGU9dShzKTtnPShlPT5PYmplY3QudmFsdWVzKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKGUpKS5zb21lKGU9PiFlLmNvbmZpZ3VyYWJsZSYmIWUud3JpdGFibGUpKShlKT9bZSxpKGUpXTpbZV0sbnVsbD09cHx8cC5zZXQocyxnKX1jb25zdFt5LGhdPWc7bGV0IHc9ZiYmZi5nZXQoeSk7cmV0dXJuIHcmJndbMV0uZj09PSEhaHx8KHc9KChvLHMpPT57Y29uc3QgYz17ZjpzfTtsZXQgbD0hMTtjb25zdCBmPShlLHQpPT57aWYoIWwpe2xldCBzPWNbcl0uZ2V0KG8pO2lmKHN8fChzPXt9LGNbcl0uc2V0KG8scykpLGU9PT1uKXNbbl09ITA7ZWxzZXtsZXQgcj1zW2VdO3J8fChyPW5ldyBTZXQsc1tlXT1yKSxyLmFkZCh0KX19fSxpPXtnZXQ6KGUsbik9Pm49PT10P286KGYoXCJrXCIsbiksYShSZWZsZWN0LmdldChlLG4pLGNbcl0sYy5jLGMudCkpLGhhczoodCxuKT0+bj09PWU/KGw9ITAsY1tyXS5kZWxldGUobyksITApOihmKFwiaFwiLG4pLFJlZmxlY3QuaGFzKHQsbikpLGdldE93blByb3BlcnR5RGVzY3JpcHRvcjooZSx0KT0+KGYoXCJvXCIsdCksUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KSksb3duS2V5czplPT4oZihuKSxSZWZsZWN0Lm93bktleXMoZSkpfTtyZXR1cm4gcyYmKGkuc2V0PWkuZGVsZXRlUHJvcGVydHk9KCk9PiExKSxbaSxjXX0pKHksISFoKSx3WzFdLnA9byhofHx5LHdbMF0pLGYmJmYuc2V0KHksdykpLHdbMV1bcl09Yyx3WzFdLmM9Zix3WzFdLnQ9cCx3WzFdLnB9LHA9KGUsdCxyLG8pPT57aWYoT2JqZWN0LmlzKGUsdCkpcmV0dXJuITE7aWYoIWYoZSl8fCFmKHQpKXJldHVybiEwO2NvbnN0IHM9ci5nZXQodShlKSk7aWYoIXMpcmV0dXJuITA7aWYobyl7Y29uc3Qgcj1vLmdldChlKTtpZihyJiZyLm49PT10KXJldHVybiByLmc7by5zZXQoZSx7bjp0LGc6ITF9KX1sZXQgYz1udWxsO3RyeXtmb3IoY29uc3QgciBvZiBzLmh8fFtdKWlmKGM9UmVmbGVjdC5oYXMoZSxyKSE9PVJlZmxlY3QuaGFzKHQsciksYylyZXR1cm4gYztpZighMD09PXNbbl0pe2lmKGM9KChlLHQpPT57Y29uc3Qgcj1SZWZsZWN0Lm93bktleXMoZSksbj1SZWZsZWN0Lm93bktleXModCk7cmV0dXJuIHIubGVuZ3RoIT09bi5sZW5ndGh8fHIuc29tZSgoZSx0KT0+ZSE9PW5bdF0pfSkoZSx0KSxjKXJldHVybiBjfWVsc2UgZm9yKGNvbnN0IHIgb2Ygcy5vfHxbXSlpZihjPSEhUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxyKSE9ISFSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LHIpLGMpcmV0dXJuIGM7Zm9yKGNvbnN0IG4gb2Ygcy5rfHxbXSlpZihjPXAoZVtuXSx0W25dLHIsbyksYylyZXR1cm4gYztyZXR1cm4gbnVsbD09PWMmJihjPSEwKSxjfWZpbmFsbHl7byYmby5zZXQoZSx7bjp0LGc6Y30pfX0sZz10PT4hIWwodCkmJmUgaW4gdCx5PWU9PmwoZSkmJmVbdF18fG51bGwsaD0oZSx0PSEwKT0+e2Muc2V0KGUsdCl9LHc9KGUsdCxyKT0+e2NvbnN0IG89W10scz1uZXcgV2Vha1NldCxjPShlLGwpPT57aWYocy5oYXMoZSkpcmV0dXJuO2YoZSkmJnMuYWRkKGUpO2NvbnN0IGk9ZihlKSYmdC5nZXQodShlKSk7aWYoaSl7dmFyIGEscDtpZihudWxsPT0oYT1pLmgpfHxhLmZvckVhY2goZT0+e2NvbnN0IHQ9YDpoYXMoJHtTdHJpbmcoZSl9KWA7by5wdXNoKGw/Wy4uLmwsdF06W3RdKX0pLCEwPT09aVtuXSl7Y29uc3QgZT1cIjpvd25LZXlzXCI7by5wdXNoKGw/Wy4uLmwsZV06W2VdKX1lbHNle3ZhciBnO251bGw9PShnPWkubyl8fGcuZm9yRWFjaChlPT57Y29uc3QgdD1gOmhhc093bigke1N0cmluZyhlKX0pYDtvLnB1c2gobD9bLi4ubCx0XTpbdF0pfSl9bnVsbD09KHA9aS5rKXx8cC5mb3JFYWNoKHQ9PntyJiYhKFwidmFsdWVcImluKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KXx8e30pKXx8YyhlW3RdLGw/Wy4uLmwsdF06W3RdKX0pfWVsc2UgbCYmby5wdXNoKGwpfTtyZXR1cm4gYyhlKSxvfSxPPWU9PntvPWV9O2V4cG9ydHt3IGFzIGFmZmVjdGVkVG9QYXRoTGlzdCxhIGFzIGNyZWF0ZVByb3h5LHkgYXMgZ2V0VW50cmFja2VkLHAgYXMgaXNDaGFuZ2VkLGggYXMgbWFya1RvVHJhY2ssTyBhcyByZXBsYWNlTmV3UHJveHksZyBhcyB0cmFja01lbW99O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubW9kZXJuLm1qcy5tYXBcbiIsImltcG9ydHtwcm94eSBhcyBtLHN1YnNjcmliZSBhcyBmLHNuYXBzaG90IGFzICR9ZnJvbVwidmFsdGlvL3ZhbmlsbGFcIjtpbXBvcnR7QnVmZmVyIGFzIFZ9ZnJvbVwiYnVmZmVyXCI7bGV0IE47Y29uc3QgQz17ZXRoZXJldW1DbGllbnQ6dm9pZCAwLHNldEV0aGVyZXVtQ2xpZW50KGUpe049ZX0sY2xpZW50KCl7aWYoTilyZXR1cm4gTjt0aHJvdyBuZXcgRXJyb3IoXCJDbGllbnRDdHJsIGhhcyBubyBjbGllbnQgc2V0XCIpfX0saT1tKHtoaXN0b3J5OltcIkNvbm5lY3RXYWxsZXRcIl0sdmlldzpcIkNvbm5lY3RXYWxsZXRcIixkYXRhOnZvaWQgMH0pLGI9e3N0YXRlOmksc3Vic2NyaWJlKGUpe3JldHVybiBmKGksKCk9PmUoaSkpfSxwdXNoKGUsdCl7ZSE9PWkudmlldyYmKGkudmlldz1lLHQmJihpLmRhdGE9dCksaS5oaXN0b3J5LnB1c2goZSkpfSxyZXNldChlKXtpLnZpZXc9ZSxpLmhpc3Rvcnk9W2VdfSxyZXBsYWNlKGUpe2kuaGlzdG9yeS5sZW5ndGg+MSYmKGkuaGlzdG9yeVtpLmhpc3RvcnkubGVuZ3RoLTFdPWUsaS52aWV3PWUpfSxnb0JhY2soKXtpZihpLmhpc3RvcnkubGVuZ3RoPjEpe2kuaGlzdG9yeS5wb3AoKTtjb25zdFtlXT1pLmhpc3Rvcnkuc2xpY2UoLTEpO2kudmlldz1lfX0sc2V0RGF0YShlKXtpLmRhdGE9ZX19LGM9e1dBTExFVENPTk5FQ1RfREVFUExJTktfQ0hPSUNFOlwiV0FMTEVUQ09OTkVDVF9ERUVQTElOS19DSE9JQ0VcIixXM01fVkVSU0lPTjpcIlczTV9WRVJTSU9OXCIsVzNNX1BSRUZFUl9JTkpFQ1RFRF9VUkxfRkxBRzpcInczbVByZWZlckluamVjdGVkXCIsUkVDT01NRU5ERURfV0FMTEVUX0FNT1VOVDo5LGlzTW9iaWxlKCl7cmV0dXJuIHR5cGVvZiB3aW5kb3c8XCJ1XCI/ISEod2luZG93Lm1hdGNoTWVkaWEoXCIocG9pbnRlcjpjb2Fyc2UpXCIpLm1hdGNoZXN8fC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxPcGVyYSBNaW5pL3UudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSk6ITF9LGlzQW5kcm9pZCgpe3JldHVybiBjLmlzTW9iaWxlKCkmJm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImFuZHJvaWRcIil9LGlzSW9zKCl7Y29uc3QgZT1uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7cmV0dXJuIGMuaXNNb2JpbGUoKSYmKGUuaW5jbHVkZXMoXCJpcGhvbmVcIil8fGUuaW5jbHVkZXMoXCJpcGFkXCIpKX0saXNIdHRwVXJsKGUpe3JldHVybiBlLnN0YXJ0c1dpdGgoXCJodHRwOi8vXCIpfHxlLnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKX0saXNBcnJheShlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKSYmZS5sZW5ndGg+MH0sZm9ybWF0TmF0aXZlVXJsKGUsdCxuKXtpZihjLmlzSHR0cFVybChlKSlyZXR1cm4gdGhpcy5mb3JtYXRVbml2ZXJzYWxVcmwoZSx0LG4pO2xldCBzPWU7cy5pbmNsdWRlcyhcIjovL1wiKXx8KHM9ZS5yZXBsYWNlQWxsKFwiL1wiLFwiXCIpLnJlcGxhY2VBbGwoXCI6XCIsXCJcIikscz1gJHtzfTovL2ApLHRoaXMuc2V0V2FsbGV0Q29ubmVjdERlZXBMaW5rKHMsbik7Y29uc3QgYT1lbmNvZGVVUklDb21wb25lbnQodCk7cmV0dXJuYCR7c313Yz91cmk9JHthfWB9LGZvcm1hdFVuaXZlcnNhbFVybChlLHQsbil7aWYoIWMuaXNIdHRwVXJsKGUpKXJldHVybiB0aGlzLmZvcm1hdE5hdGl2ZVVybChlLHQsbik7bGV0IHM9ZTtlLmVuZHNXaXRoKFwiL1wiKSYmKHM9ZS5zbGljZSgwLC0xKSksdGhpcy5zZXRXYWxsZXRDb25uZWN0RGVlcExpbmsocyxuKTtjb25zdCBhPWVuY29kZVVSSUNvbXBvbmVudCh0KTtyZXR1cm5gJHtzfS93Yz91cmk9JHthfWB9LGFzeW5jIHdhaXQoZSl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9PntzZXRUaW1lb3V0KHQsZSl9KX0sb3BlbkhyZWYoZSx0KXt3aW5kb3cub3BlbihlLHQsXCJub3JlZmVycmVyIG5vb3BlbmVyXCIpfSxzZXRXYWxsZXRDb25uZWN0RGVlcExpbmsoZSx0KXtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjLldBTExFVENPTk5FQ1RfREVFUExJTktfQ0hPSUNFLEpTT04uc3RyaW5naWZ5KHtocmVmOmUsbmFtZTp0fSkpfSxzZXRXYWxsZXRDb25uZWN0QW5kcm9pZERlZXBMaW5rKGUpe2NvbnN0W3RdPWUuc3BsaXQoXCI/XCIpO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGMuV0FMTEVUQ09OTkVDVF9ERUVQTElOS19DSE9JQ0UsSlNPTi5zdHJpbmdpZnkoe2hyZWY6dCxuYW1lOlwiQW5kcm9pZFwifSkpfSxyZW1vdmVXYWxsZXRDb25uZWN0RGVlcExpbmsoKXtsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShjLldBTExFVENPTk5FQ1RfREVFUExJTktfQ0hPSUNFKX0sc2V0V2ViM01vZGFsVmVyc2lvbkluU3RvcmFnZSgpe3R5cGVvZiBsb2NhbFN0b3JhZ2U8XCJ1XCImJmxvY2FsU3RvcmFnZS5zZXRJdGVtKGMuVzNNX1ZFUlNJT04sXCIyLjQuMlwiKX0sZ2V0V2FsbGV0Um91dGVyRGF0YSgpe3ZhciBlO2NvbnN0IHQ9KGU9Yi5zdGF0ZS5kYXRhKT09bnVsbD92b2lkIDA6ZS5XYWxsZXQ7aWYoIXQpdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFwiV2FsbGV0XCIgdmlldyBkYXRhJyk7cmV0dXJuIHR9LGdldFN3aXRjaE5ldHdvcmtSb3V0ZXJEYXRhKCl7dmFyIGU7Y29uc3QgdD0oZT1iLnN0YXRlLmRhdGEpPT1udWxsP3ZvaWQgMDplLlN3aXRjaE5ldHdvcms7aWYoIXQpdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFwiU3dpdGNoTmV0d29ya1wiIHZpZXcgZGF0YScpO3JldHVybiB0fSxpc1ByZWZlckluamVjdGVkRmxhZygpe3JldHVybiB0eXBlb2YgbG9jYXRpb248XCJ1XCI/bmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpLmhhcyhjLlczTV9QUkVGRVJfSU5KRUNURURfVVJMX0ZMQUcpOiExfX0sQj10eXBlb2YgbG9jYXRpb248XCJ1XCImJihsb2NhdGlvbi5ob3N0bmFtZS5pbmNsdWRlcyhcImxvY2FsaG9zdFwiKXx8bG9jYXRpb24ucHJvdG9jb2wuaW5jbHVkZXMoXCJodHRwc1wiKSksdT1tKHtlbmFibGVkOkIsdXNlclNlc3Npb25JZDpcIlwiLGV2ZW50czpbXSxjb25uZWN0ZWRXYWxsZXRJZDp2b2lkIDB9KSxIPXtzdGF0ZTp1LHN1YnNjcmliZShlKXtyZXR1cm4gZih1LmV2ZW50cywoKT0+ZSgkKHUuZXZlbnRzW3UuZXZlbnRzLmxlbmd0aC0xXSkpKX0saW5pdGlhbGl6ZSgpe3UuZW5hYmxlZCYmdHlwZW9mIGNyeXB0bzxcInVcIiYmKHUudXNlclNlc3Npb25JZD1jcnlwdG8ucmFuZG9tVVVJRCgpKX0sc2V0Q29ubmVjdGVkV2FsbGV0SWQoZSl7dS5jb25uZWN0ZWRXYWxsZXRJZD1lfSxjbGljayhlKXtpZih1LmVuYWJsZWQpe2NvbnN0IHQ9e3R5cGU6XCJDTElDS1wiLG5hbWU6ZS5uYW1lLHVzZXJTZXNzaW9uSWQ6dS51c2VyU2Vzc2lvbklkLHRpbWVzdGFtcDpEYXRlLm5vdygpLGRhdGE6ZX07dS5ldmVudHMucHVzaCh0KX19LHRyYWNrKGUpe2lmKHUuZW5hYmxlZCl7Y29uc3QgdD17dHlwZTpcIlRSQUNLXCIsbmFtZTplLm5hbWUsdXNlclNlc3Npb25JZDp1LnVzZXJTZXNzaW9uSWQsdGltZXN0YW1wOkRhdGUubm93KCksZGF0YTplfTt1LmV2ZW50cy5wdXNoKHQpfX0sdmlldyhlKXtpZih1LmVuYWJsZWQpe2NvbnN0IHQ9e3R5cGU6XCJWSUVXXCIsbmFtZTplLm5hbWUsdXNlclNlc3Npb25JZDp1LnVzZXJTZXNzaW9uSWQsdGltZXN0YW1wOkRhdGUubm93KCksZGF0YTplfTt1LmV2ZW50cy5wdXNoKHQpfX19LGw9bSh7c2VsZWN0ZWRDaGFpbjp2b2lkIDAsY2hhaW5zOnZvaWQgMCxzdGFuZGFsb25lQ2hhaW5zOnZvaWQgMCxzdGFuZGFsb25lVXJpOnZvaWQgMCxpc1N0YW5kYWxvbmU6ITEsaXNBdXRoOiExLGlzQ3VzdG9tRGVza3RvcDohMSxpc0N1c3RvbU1vYmlsZTohMSxpc0RhdGFMb2FkZWQ6ITEsaXNVaUxvYWRlZDohMSxpc1ByZWZlckluamVjdGVkOiExLHdhbGxldENvbm5lY3RWZXJzaW9uOjF9KSxkPXtzdGF0ZTpsLHN1YnNjcmliZShlKXtyZXR1cm4gZihsLCgpPT5lKGwpKX0sc2V0Q2hhaW5zKGUpe2wuY2hhaW5zPWV9LHNldFN0YW5kYWxvbmVDaGFpbnMoZSl7bC5zdGFuZGFsb25lQ2hhaW5zPWV9LHNldFN0YW5kYWxvbmVVcmkoZSl7bC5zdGFuZGFsb25lVXJpPWV9LGdldFNlbGVjdGVkQ2hhaW4oKXtjb25zdCBlPUMuY2xpZW50KCkuZ2V0TmV0d29yaygpLmNoYWluO3JldHVybiBlJiYobC5zZWxlY3RlZENoYWluPWUpLGwuc2VsZWN0ZWRDaGFpbn0sc2V0U2VsZWN0ZWRDaGFpbihlKXtsLnNlbGVjdGVkQ2hhaW49ZX0sc2V0SXNTdGFuZGFsb25lKGUpe2wuaXNTdGFuZGFsb25lPWV9LHNldElzQ3VzdG9tRGVza3RvcChlKXtsLmlzQ3VzdG9tRGVza3RvcD1lfSxzZXRJc0N1c3RvbU1vYmlsZShlKXtsLmlzQ3VzdG9tTW9iaWxlPWV9LHNldElzRGF0YUxvYWRlZChlKXtsLmlzRGF0YUxvYWRlZD1lfSxzZXRJc1VpTG9hZGVkKGUpe2wuaXNVaUxvYWRlZD1lfSxzZXRXYWxsZXRDb25uZWN0VmVyc2lvbihlKXtsLndhbGxldENvbm5lY3RWZXJzaW9uPWV9LHNldElzUHJlZmVySW5qZWN0ZWQoZSl7bC5pc1ByZWZlckluamVjdGVkPWV9LHNldElzQXV0aChlKXtsLmlzQXV0aD1lfX0sTz1tKHtwcm9qZWN0SWQ6XCJcIixtb2JpbGVXYWxsZXRzOnZvaWQgMCxkZXNrdG9wV2FsbGV0czp2b2lkIDAsd2FsbGV0SW1hZ2VzOnZvaWQgMCxjaGFpbkltYWdlczp2b2lkIDAsdG9rZW5JbWFnZXM6dm9pZCAwLHRva2VuQ29udHJhY3RzOnZvaWQgMCxzdGFuZGFsb25lQ2hhaW5zOnZvaWQgMCxlbmFibGVTdGFuZGFsb25lTW9kZTohMSxlbmFibGVBdXRoTW9kZTohMSxlbmFibGVOZXR3b3JrVmlldzohMSxlbmFibGVBY2NvdW50VmlldzohMCxlbmFibGVFeHBsb3JlcjohMCxkZWZhdWx0Q2hhaW46dm9pZCAwLGV4cGxvcmVyRXhjbHVkZWRXYWxsZXRJZHM6dm9pZCAwLGV4cGxvcmVyUmVjb21tZW5kZWRXYWxsZXRJZHM6dm9pZCAwLHRlcm1zT2ZTZXJ2aWNlVXJsOnZvaWQgMCxwcml2YWN5UG9saWN5VXJsOnZvaWQgMH0pLHk9e3N0YXRlOk8sc3Vic2NyaWJlKGUpe3JldHVybiBmKE8sKCk9PmUoTykpfSxzZXRDb25maWcoZSl7dmFyIHQsbixzLGE7SC5pbml0aWFsaXplKCksZC5zZXRTdGFuZGFsb25lQ2hhaW5zKGUuc3RhbmRhbG9uZUNoYWlucyksZC5zZXRJc1N0YW5kYWxvbmUoISEoKHQ9ZS5zdGFuZGFsb25lQ2hhaW5zKSE9bnVsbCYmdC5sZW5ndGgpfHwhIWUuZW5hYmxlU3RhbmRhbG9uZU1vZGUpLGQuc2V0SXNBdXRoKCEhZS5lbmFibGVBdXRoTW9kZSksZC5zZXRJc0N1c3RvbU1vYmlsZSghISgobj1lLm1vYmlsZVdhbGxldHMpIT1udWxsJiZuLmxlbmd0aCkpLGQuc2V0SXNDdXN0b21EZXNrdG9wKCEhKChzPWUuZGVza3RvcFdhbGxldHMpIT1udWxsJiZzLmxlbmd0aCkpLGQuc2V0V2FsbGV0Q29ubmVjdFZlcnNpb24oKGE9ZS53YWxsZXRDb25uZWN0VmVyc2lvbikhPW51bGw/YToxKSxkLnN0YXRlLmlzU3RhbmRhbG9uZXx8KGQuc2V0Q2hhaW5zKEMuY2xpZW50KCkuY2hhaW5zKSxkLnNldElzUHJlZmVySW5qZWN0ZWQoQy5jbGllbnQoKS5pc0luamVjdGVkUHJvdmlkZXJJbnN0YWxsZWQoKSYmYy5pc1ByZWZlckluamVjdGVkRmxhZygpKSksZS5kZWZhdWx0Q2hhaW4mJmQuc2V0U2VsZWN0ZWRDaGFpbihlLmRlZmF1bHRDaGFpbiksYy5zZXRXZWIzTW9kYWxWZXJzaW9uSW5TdG9yYWdlKCksT2JqZWN0LmFzc2lnbihPLGUpfX0sbz1tKHthZGRyZXNzOnZvaWQgMCxwcm9maWxlTmFtZTp2b2lkIDAscHJvZmlsZUF2YXRhcjp2b2lkIDAscHJvZmlsZUxvYWRpbmc6ITEsYmFsYW5jZUxvYWRpbmc6ITEsYmFsYW5jZTp2b2lkIDAsaXNDb25uZWN0ZWQ6ITF9KSxLPXtzdGF0ZTpvLHN1YnNjcmliZShlKXtyZXR1cm4gZihvLCgpPT5lKG8pKX0sZ2V0QWNjb3VudCgpe2NvbnN0IGU9Qy5jbGllbnQoKS5nZXRBY2NvdW50KCk7by5hZGRyZXNzPWUuYWRkcmVzcyxvLmlzQ29ubmVjdGVkPWUuaXNDb25uZWN0ZWR9LGFzeW5jIGZldGNoUHJvZmlsZShlLHQpe3ZhciBuO3RyeXtvLnByb2ZpbGVMb2FkaW5nPSEwO2NvbnN0IHM9dD8/by5hZGRyZXNzLGE9KG49ZC5zdGF0ZS5jaGFpbnMpPT1udWxsP3ZvaWQgMDpuLmZpbmQocj0+ci5pZD09PTEpO2lmKHMmJmEpe2NvbnN0IHI9YXdhaXQgQy5jbGllbnQoKS5mZXRjaEVuc05hbWUoe2FkZHJlc3M6cyxjaGFpbklkOjF9KTtpZihyKXtjb25zdCBwPWF3YWl0IEMuY2xpZW50KCkuZmV0Y2hFbnNBdmF0YXIoe25hbWU6cixjaGFpbklkOjF9KTtwJiZhd2FpdCBlKHApLG8ucHJvZmlsZUF2YXRhcj1wfW8ucHJvZmlsZU5hbWU9cn19ZmluYWxseXtvLnByb2ZpbGVMb2FkaW5nPSExfX0sYXN5bmMgZmV0Y2hCYWxhbmNlKGUpe3RyeXtjb25zdHtjaGFpbjp0fT1DLmNsaWVudCgpLmdldE5ldHdvcmsoKSx7dG9rZW5Db250cmFjdHM6bn09eS5zdGF0ZTtsZXQgczt0JiZuJiYocz1uW3QuaWRdKSxvLmJhbGFuY2VMb2FkaW5nPSEwO2NvbnN0IGE9ZT8/by5hZGRyZXNzO2lmKGEpe2NvbnN0IHI9YXdhaXQgQy5jbGllbnQoKS5mZXRjaEJhbGFuY2Uoe2FkZHJlc3M6YSx0b2tlbjpzfSk7by5iYWxhbmNlPXthbW91bnQ6ci5mb3JtYXR0ZWQsc3ltYm9sOnIuc3ltYm9sfX19ZmluYWxseXtvLmJhbGFuY2VMb2FkaW5nPSExfX0sc2V0QWRkcmVzcyhlKXtvLmFkZHJlc3M9ZX0sc2V0SXNDb25uZWN0ZWQoZSl7by5pc0Nvbm5lY3RlZD1lfSxyZXNldEJhbGFuY2UoKXtvLmJhbGFuY2U9dm9pZCAwfSxyZXNldEFjY291bnQoKXtvLmFkZHJlc3M9dm9pZCAwLG8uaXNDb25uZWN0ZWQ9ITEsby5wcm9maWxlTmFtZT12b2lkIDAsby5wcm9maWxlQXZhdGFyPXZvaWQgMCxvLmJhbGFuY2U9dm9pZCAwfX0sTT1cImh0dHBzOi8vZXhwbG9yZXItYXBpLndhbGxldGNvbm5lY3QuY29tXCI7YXN5bmMgZnVuY3Rpb24gVShlLHQpe2NvbnN0IG49bmV3IFVSTChlLE0pO3JldHVybiBuLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJwcm9qZWN0SWRcIix5LnN0YXRlLnByb2plY3RJZCksT2JqZWN0LmVudHJpZXModCkuZm9yRWFjaCgoW3MsYV0pPT57YSYmbi5zZWFyY2hQYXJhbXMuYXBwZW5kKHMsU3RyaW5nKGEpKX0pLChhd2FpdCBmZXRjaChuKSkuanNvbigpfWNvbnN0IEk9e2FzeW5jIGdldERlc2t0b3BMaXN0aW5ncyhlKXtyZXR1cm4gVShcIi93M20vdjEvZ2V0RGVza3RvcExpc3RpbmdzXCIsZSl9LGFzeW5jIGdldE1vYmlsZUxpc3RpbmdzKGUpe3JldHVybiBVKFwiL3czbS92MS9nZXRNb2JpbGVMaXN0aW5nc1wiLGUpfSxhc3luYyBnZXRJbmplY3RlZExpc3RpbmdzKGUpe3JldHVybiBVKFwiL3czbS92MS9nZXRJbmplY3RlZExpc3RpbmdzXCIsZSl9LGFzeW5jIGdldEFsbExpc3RpbmdzKGUpe3JldHVybiBVKFwiL3czbS92MS9nZXRBbGxMaXN0aW5nc1wiLGUpfSxnZXRXYWxsZXRJbWFnZVVybChlKXtyZXR1cm5gJHtNfS93M20vdjEvZ2V0V2FsbGV0SW1hZ2UvJHtlfT9wcm9qZWN0SWQ9JHt5LnN0YXRlLnByb2plY3RJZH1gfSxnZXRBc3NldEltYWdlVXJsKGUpe3JldHVybmAke019L3czbS92MS9nZXRBc3NldEltYWdlLyR7ZX0/cHJvamVjdElkPSR7eS5zdGF0ZS5wcm9qZWN0SWR9YH19O3ZhciBGPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSxEPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LHo9T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxrPShlLHQsbik9PnQgaW4gZT9GKGUsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bn0pOmVbdF09bixHPShlLHQpPT57Zm9yKHZhciBuIGluIHR8fCh0PXt9KSlKLmNhbGwodCxuKSYmayhlLG4sdFtuXSk7aWYoRClmb3IodmFyIG4gb2YgRCh0KSl6LmNhbGwodCxuKSYmayhlLG4sdFtuXSk7cmV0dXJuIGV9O2NvbnN0IFA9Yy5pc01vYmlsZSgpLGc9bSh7d2FsbGV0czp7bGlzdGluZ3M6W10sdG90YWw6MCxwYWdlOjF9LGluamVjdGVkV2FsbGV0czpbXSxzZWFyY2g6e2xpc3RpbmdzOltdLHRvdGFsOjAscGFnZToxfSxyZWNvbWVuZGVkV2FsbGV0czpbXX0pLG5lPXtzdGF0ZTpnLGFzeW5jIGdldFJlY29tZW5kZWRXYWxsZXRzKCl7Y29uc3R7ZXhwbG9yZXJSZWNvbW1lbmRlZFdhbGxldElkczplLGV4cGxvcmVyRXhjbHVkZWRXYWxsZXRJZHM6dH09eS5zdGF0ZTtpZihlPT09XCJOT05FXCJ8fHQ9PT1cIkFMTFwiJiYhZSlyZXR1cm4gZy5yZWNvbWVuZGVkV2FsbGV0cztpZihjLmlzQXJyYXkoZSkpe2NvbnN0IG49e3JlY29tbWVuZGVkSWRzOmUuam9pbihcIixcIil9LHtsaXN0aW5nczpzfT1hd2FpdCBJLmdldEFsbExpc3RpbmdzKG4pLGE9T2JqZWN0LnZhbHVlcyhzKTthLnNvcnQoKHIscCk9Pntjb25zdCBoPWUuaW5kZXhPZihyLmlkKSx2PWUuaW5kZXhPZihwLmlkKTtyZXR1cm4gaC12fSksZy5yZWNvbWVuZGVkV2FsbGV0cz1hfWVsc2V7Y29uc3R7c3RhbmRhbG9uZUNoYWluczpuLHdhbGxldENvbm5lY3RWZXJzaW9uOnMsaXNBdXRoOmF9PWQuc3RhdGUscj1uPy5qb2luKFwiLFwiKSxwPWMuaXNBcnJheSh0KSxoPXtwYWdlOjEsc2RrczphP1wiYXV0aF92MVwiOnZvaWQgMCxlbnRyaWVzOmMuUkVDT01NRU5ERURfV0FMTEVUX0FNT1VOVCxjaGFpbnM6cix2ZXJzaW9uOnMsZXhjbHVkZWRJZHM6cD90LmpvaW4oXCIsXCIpOnZvaWQgMH0se2xpc3RpbmdzOnZ9PVA/YXdhaXQgSS5nZXRNb2JpbGVMaXN0aW5ncyhoKTphd2FpdCBJLmdldERlc2t0b3BMaXN0aW5ncyhoKTtnLnJlY29tZW5kZWRXYWxsZXRzPU9iamVjdC52YWx1ZXModil9cmV0dXJuIGcucmVjb21lbmRlZFdhbGxldHN9LGFzeW5jIGdldFdhbGxldHMoZSl7Y29uc3QgdD1HKHt9LGUpLHtleHBsb3JlclJlY29tbWVuZGVkV2FsbGV0SWRzOm4sZXhwbG9yZXJFeGNsdWRlZFdhbGxldElkczpzfT15LnN0YXRlLHtyZWNvbWVuZGVkV2FsbGV0czphfT1nO2lmKHM9PT1cIkFMTFwiKXJldHVybiBnLndhbGxldHM7dC5zZWFyY2h8fChhLmxlbmd0aD90LmV4Y2x1ZGVkSWRzPWEubWFwKFc9PlcuaWQpLmpvaW4oXCIsXCIpOmMuaXNBcnJheShuKSYmKHQuZXhjbHVkZWRJZHM9bi5qb2luKFwiLFwiKSkpLGMuaXNBcnJheShzKSYmKHQuZXhjbHVkZWRJZHM9W3QuZXhjbHVkZWRJZHMsc10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIsXCIpKSxkLnN0YXRlLmlzQXV0aCYmKHQuc2Rrcz1cImF1dGhfdjFcIik7Y29uc3R7cGFnZTpyLHNlYXJjaDpwfT1lLHtsaXN0aW5nczpoLHRvdGFsOnZ9PVA/YXdhaXQgSS5nZXRNb2JpbGVMaXN0aW5ncyh0KTphd2FpdCBJLmdldERlc2t0b3BMaXN0aW5ncyh0KSxqPU9iamVjdC52YWx1ZXMoaCksTD1wP1wic2VhcmNoXCI6XCJ3YWxsZXRzXCI7cmV0dXJuIGdbTF09e2xpc3RpbmdzOlsuLi5nW0xdLmxpc3RpbmdzLC4uLmpdLHRvdGFsOnYscGFnZTpyPz8xfSx7bGlzdGluZ3M6aix0b3RhbDp2fX0sYXN5bmMgZ2V0SW5qZWN0ZWRXYWxsZXRzKCl7Y29uc3R7bGlzdGluZ3M6ZX09YXdhaXQgSS5nZXRJbmplY3RlZExpc3RpbmdzKHt9KSx0PU9iamVjdC52YWx1ZXMoZSk7cmV0dXJuIGcuaW5qZWN0ZWRXYWxsZXRzPXQsZy5pbmplY3RlZFdhbGxldHN9LGdldFdhbGxldEltYWdlVXJsKGUpe3JldHVybiBJLmdldFdhbGxldEltYWdlVXJsKGUpfSxnZXRBc3NldEltYWdlVXJsKGUpe3JldHVybiBJLmdldEFzc2V0SW1hZ2VVcmwoZSl9LHJlc2V0U2VhcmNoKCl7Zy5zZWFyY2g9e2xpc3RpbmdzOltdLHRvdGFsOjAscGFnZToxfX19LEE9bSh7cGFpcmluZ1VyaTpcIlwiLHBhaXJpbmdFcnJvcjohMX0pLF89e3N0YXRlOkEsc3Vic2NyaWJlKGUpe3JldHVybiBmKEEsKCk9PmUoQSkpfSxzZXRQYWlyaW5nVXJpKGUpe0EucGFpcmluZ1VyaT1lfSxzZXRQYWlyaW5nRXJyb3IoZSl7QS5wYWlyaW5nRXJyb3I9ZX19LEU9bSh7b3BlbjohMX0pLHNlPXtzdGF0ZTpFLHN1YnNjcmliZShlKXtyZXR1cm4gZihFLCgpPT5lKEUpKX0sYXN5bmMgb3BlbihlKXtyZXR1cm4gbmV3IFByb21pc2UodD0+e2NvbnN0e2lzU3RhbmRhbG9uZTpuLGlzVWlMb2FkZWQ6cyxpc0RhdGFMb2FkZWQ6YSxpc1ByZWZlckluamVjdGVkOnIsc2VsZWN0ZWRDaGFpbjpwfT1kLnN0YXRlLHtpc0Nvbm5lY3RlZDpofT1LLnN0YXRlLHtlbmFibGVOZXR3b3JrVmlldzp2fT15LnN0YXRlO2lmKG4pZC5zZXRTdGFuZGFsb25lVXJpKGU/LnVyaSksZC5zZXRTdGFuZGFsb25lQ2hhaW5zKGU/LnN0YW5kYWxvbmVDaGFpbnMpLGIucmVzZXQoXCJDb25uZWN0V2FsbGV0XCIpO2Vsc2UgaWYoZSE9bnVsbCYmZS5yb3V0ZSliLnJlc2V0KGUucm91dGUpO2Vsc2UgaWYoaCliLnJlc2V0KFwiQWNjb3VudFwiKTtlbHNlIGlmKHYpYi5yZXNldChcIlNlbGVjdE5ldHdvcmtcIik7ZWxzZSBpZihyKXtDLmNsaWVudCgpLmNvbm5lY3RDb25uZWN0b3IoXCJpbmplY3RlZFwiLHA/LmlkKS5jYXRjaChMPT5jb25zb2xlLmVycm9yKEwpKSx0KCk7cmV0dXJufWVsc2UgYi5yZXNldChcIkNvbm5lY3RXYWxsZXRcIik7Y29uc3R7cGFpcmluZ1VyaTpqfT1fLnN0YXRlO2lmKHMmJmEmJihufHxqfHxoKSlFLm9wZW49ITAsdCgpO2Vsc2V7Y29uc3QgTD1zZXRJbnRlcnZhbCgoKT0+e2NvbnN0IFc9ZC5zdGF0ZSxUPV8uc3RhdGU7Vy5pc1VpTG9hZGVkJiZXLmlzRGF0YUxvYWRlZCYmKFcuaXNTdGFuZGFsb25lfHxULnBhaXJpbmdVcml8fGgpJiYoY2xlYXJJbnRlcnZhbChMKSxFLm9wZW49ITAsdCgpKX0sMjAwKX19KX0sY2xvc2UoKXtFLm9wZW49ITF9fTt2YXIgcT1PYmplY3QuZGVmaW5lUHJvcGVydHkseD1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFE9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxYPU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUsUj0oZSx0LG4pPT50IGluIGU/cShlLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm59KTplW3RdPW4sWT0oZSx0KT0+e2Zvcih2YXIgbiBpbiB0fHwodD17fSkpUS5jYWxsKHQsbikmJlIoZSxuLHRbbl0pO2lmKHgpZm9yKHZhciBuIG9mIHgodCkpWC5jYWxsKHQsbikmJlIoZSxuLHRbbl0pO3JldHVybiBlfTtmdW5jdGlvbiBaKCl7cmV0dXJuIHR5cGVvZiBtYXRjaE1lZGlhPFwidVwiJiZtYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzfWNvbnN0IFM9bSh7dGhlbWVNb2RlOlooKT9cImRhcmtcIjpcImxpZ2h0XCJ9KSxhZT17c3RhdGU6UyxzdWJzY3JpYmUoZSl7cmV0dXJuIGYoUywoKT0+ZShTKSl9LHNldFRoZW1lQ29uZmlnKGUpe2NvbnN0e3RoZW1lTW9kZTp0LHRoZW1lVmFyaWFibGVzOm59PWU7dCYmKFMudGhlbWVNb2RlPXQpLG4mJihTLnRoZW1lVmFyaWFibGVzPVkoe30sbikpfX0sdz1tKHtvcGVuOiExLG1lc3NhZ2U6XCJcIix2YXJpYW50Olwic3VjY2Vzc1wifSksb2U9e3N0YXRlOncsc3Vic2NyaWJlKGUpe3JldHVybiBmKHcsKCk9PmUodykpfSxvcGVuVG9hc3QoZSx0KXt3Lm9wZW49ITAsdy5tZXNzYWdlPWUsdy52YXJpYW50PXR9LGNsb3NlVG9hc3QoKXt3Lm9wZW49ITF9fTt0eXBlb2Ygd2luZG93PFwidVwiJiYod2luZG93LkJ1ZmZlcnx8KHdpbmRvdy5CdWZmZXI9Viksd2luZG93Lmdsb2JhbHx8KHdpbmRvdy5nbG9iYWw9d2luZG93KSx3aW5kb3cucHJvY2Vzc3x8KHdpbmRvdy5wcm9jZXNzPXtlbnY6e319KSk7ZXhwb3J0e0sgYXMgQWNjb3VudEN0cmwsQyBhcyBDbGllbnRDdHJsLHkgYXMgQ29uZmlnQ3RybCxjIGFzIENvcmVVdGlsLEggYXMgRXZlbnRzQ3RybCxuZSBhcyBFeHBsb3JlckN0cmwsc2UgYXMgTW9kYWxDdHJsLGQgYXMgT3B0aW9uc0N0cmwsYiBhcyBSb3V0ZXJDdHJsLGFlIGFzIFRoZW1lQ3RybCxvZSBhcyBUb2FzdEN0cmwsXyBhcyBXY0Nvbm5lY3Rpb25DdHJsfTtcbiIsImltcG9ydHtNb2RhbEN0cmwgYXMgcixUaGVtZUN0cmwgYXMgbixDb25maWdDdHJsIGFzIGwsT3B0aW9uc0N0cmwgYXMgc31mcm9tXCJAd2ViM21vZGFsL2NvcmVcIjt2YXIgYz1PYmplY3QuZGVmaW5lUHJvcGVydHksaT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLGQ9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxiPU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUsYT0obyxlLHQpPT5lIGluIG8/YyhvLGUse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KTpvW2VdPXQsbT0obyxlKT0+e2Zvcih2YXIgdCBpbiBlfHwoZT17fSkpZC5jYWxsKGUsdCkmJmEobyx0LGVbdF0pO2lmKGkpZm9yKHZhciB0IG9mIGkoZSkpYi5jYWxsKGUsdCkmJmEobyx0LGVbdF0pO3JldHVybiBvfTtjbGFzcyBme2NvbnN0cnVjdG9yKGUpe3RoaXMub3Blbk1vZGFsPXIub3Blbix0aGlzLmNsb3NlTW9kYWw9ci5jbG9zZSx0aGlzLnN1YnNjcmliZU1vZGFsPXIuc3Vic2NyaWJlLHRoaXMuc2V0VGhlbWU9bi5zZXRUaGVtZUNvbmZpZyxuLnNldFRoZW1lQ29uZmlnKGUpLGwuc2V0Q29uZmlnKG0oe2VuYWJsZVN0YW5kYWxvbmVNb2RlOiEwfSxlKSksdGhpcy5pbml0VWkoKX1hc3luYyBpbml0VWkoKXtpZih0eXBlb2Ygd2luZG93PFwidVwiKXthd2FpdCBpbXBvcnQoXCJAd2ViM21vZGFsL3VpXCIpO2NvbnN0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInczbS1tb2RhbFwiKTtkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLGUpLHMuc2V0SXNVaUxvYWRlZCghMCl9fX1leHBvcnR7ZiBhcyBXZWIzTW9kYWx9O1xuIiwiaW1wb3J0IHsgbWFya1RvVHJhY2ssIGdldFVudHJhY2tlZCB9IGZyb20gJ3Byb3h5LWNvbXBhcmUnO1xuXG5jb25zdCBpc09iamVjdCA9ICh4KSA9PiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiB4ICE9PSBudWxsO1xuY29uc3QgcHJveHlTdGF0ZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuY29uc3QgcmVmU2V0ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5jb25zdCBidWlsZFByb3h5RnVuY3Rpb24gPSAob2JqZWN0SXMgPSBPYmplY3QuaXMsIG5ld1Byb3h5ID0gKHRhcmdldCwgaGFuZGxlcikgPT4gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlciksIGNhblByb3h5ID0gKHgpID0+IGlzT2JqZWN0KHgpICYmICFyZWZTZXQuaGFzKHgpICYmIChBcnJheS5pc0FycmF5KHgpIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIHgpKSAmJiAhKHggaW5zdGFuY2VvZiBXZWFrTWFwKSAmJiAhKHggaW5zdGFuY2VvZiBXZWFrU2V0KSAmJiAhKHggaW5zdGFuY2VvZiBFcnJvcikgJiYgISh4IGluc3RhbmNlb2YgTnVtYmVyKSAmJiAhKHggaW5zdGFuY2VvZiBEYXRlKSAmJiAhKHggaW5zdGFuY2VvZiBTdHJpbmcpICYmICEoeCBpbnN0YW5jZW9mIFJlZ0V4cCkgJiYgISh4IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpLCBkZWZhdWx0SGFuZGxlUHJvbWlzZSA9IChwcm9taXNlKSA9PiB7XG4gIHN3aXRjaCAocHJvbWlzZS5zdGF0dXMpIHtcbiAgICBjYXNlIFwiZnVsZmlsbGVkXCI6XG4gICAgICByZXR1cm4gcHJvbWlzZS52YWx1ZTtcbiAgICBjYXNlIFwicmVqZWN0ZWRcIjpcbiAgICAgIHRocm93IHByb21pc2UucmVhc29uO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBwcm9taXNlO1xuICB9XG59LCBzbmFwQ2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgY3JlYXRlU25hcHNob3QgPSAodGFyZ2V0LCB2ZXJzaW9uLCBoYW5kbGVQcm9taXNlID0gZGVmYXVsdEhhbmRsZVByb21pc2UpID0+IHtcbiAgY29uc3QgY2FjaGUgPSBzbmFwQ2FjaGUuZ2V0KHRhcmdldCk7XG4gIGlmICgoY2FjaGUgPT0gbnVsbCA/IHZvaWQgMCA6IGNhY2hlWzBdKSA9PT0gdmVyc2lvbikge1xuICAgIHJldHVybiBjYWNoZVsxXTtcbiAgfVxuICBjb25zdCBzbmFwID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gW10gOiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpKTtcbiAgbWFya1RvVHJhY2soc25hcCwgdHJ1ZSk7XG4gIHNuYXBDYWNoZS5zZXQodGFyZ2V0LCBbdmVyc2lvbiwgc25hcF0pO1xuICBSZWZsZWN0Lm93bktleXModGFyZ2V0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzbmFwLCBrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBrZXkpO1xuICAgIGNvbnN0IGRlc2MgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsIHRvIGF2b2lkIGNvcHlpbmcgd2l0aCBwcm94eS1jb21wYXJlLlxuICAgICAgLy8gSXQncyBzdGlsbCBub24td3JpdGFibGUsIHNvIGl0IGF2b2lkcyBhc3NpZ25pbmcgYSB2YWx1ZS5cbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH07XG4gICAgaWYgKHJlZlNldC5oYXModmFsdWUpKSB7XG4gICAgICBtYXJrVG9UcmFjayh2YWx1ZSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICBkZWxldGUgZGVzYy52YWx1ZTtcbiAgICAgIGRlc2MuZ2V0ID0gKCkgPT4gaGFuZGxlUHJvbWlzZSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChwcm94eVN0YXRlTWFwLmhhcyh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IFt0YXJnZXQyLCBlbnN1cmVWZXJzaW9uXSA9IHByb3h5U3RhdGVNYXAuZ2V0KFxuICAgICAgICB2YWx1ZVxuICAgICAgKTtcbiAgICAgIGRlc2MudmFsdWUgPSBjcmVhdGVTbmFwc2hvdChcbiAgICAgICAgdGFyZ2V0MixcbiAgICAgICAgZW5zdXJlVmVyc2lvbigpLFxuICAgICAgICBoYW5kbGVQcm9taXNlXG4gICAgICApO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc25hcCwga2V5LCBkZXNjKTtcbiAgfSk7XG4gIHJldHVybiBzbmFwO1xufSwgcHJveHlDYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCB2ZXJzaW9uSG9sZGVyID0gWzEsIDFdLCBwcm94eUZ1bmN0aW9uID0gKGluaXRpYWxPYmplY3QpID0+IHtcbiAgaWYgKCFpc09iamVjdChpbml0aWFsT2JqZWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm9iamVjdCByZXF1aXJlZFwiKTtcbiAgfVxuICBjb25zdCBmb3VuZCA9IHByb3h5Q2FjaGUuZ2V0KGluaXRpYWxPYmplY3QpO1xuICBpZiAoZm91bmQpIHtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cbiAgbGV0IHZlcnNpb24gPSB2ZXJzaW9uSG9sZGVyWzBdO1xuICBjb25zdCBsaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBjb25zdCBub3RpZnlVcGRhdGUgPSAob3AsIG5leHRWZXJzaW9uID0gKyt2ZXJzaW9uSG9sZGVyWzBdKSA9PiB7XG4gICAgaWYgKHZlcnNpb24gIT09IG5leHRWZXJzaW9uKSB7XG4gICAgICB2ZXJzaW9uID0gbmV4dFZlcnNpb247XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKG9wLCBuZXh0VmVyc2lvbikpO1xuICAgIH1cbiAgfTtcbiAgbGV0IGNoZWNrVmVyc2lvbiA9IHZlcnNpb25Ib2xkZXJbMV07XG4gIGNvbnN0IGVuc3VyZVZlcnNpb24gPSAobmV4dENoZWNrVmVyc2lvbiA9ICsrdmVyc2lvbkhvbGRlclsxXSkgPT4ge1xuICAgIGlmIChjaGVja1ZlcnNpb24gIT09IG5leHRDaGVja1ZlcnNpb24gJiYgIWxpc3RlbmVycy5zaXplKSB7XG4gICAgICBjaGVja1ZlcnNpb24gPSBuZXh0Q2hlY2tWZXJzaW9uO1xuICAgICAgcHJvcFByb3h5U3RhdGVzLmZvckVhY2goKFtwcm9wUHJveHlTdGF0ZV0pID0+IHtcbiAgICAgICAgY29uc3QgcHJvcFZlcnNpb24gPSBwcm9wUHJveHlTdGF0ZVsxXShuZXh0Q2hlY2tWZXJzaW9uKTtcbiAgICAgICAgaWYgKHByb3BWZXJzaW9uID4gdmVyc2lvbikge1xuICAgICAgICAgIHZlcnNpb24gPSBwcm9wVmVyc2lvbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9O1xuICBjb25zdCBjcmVhdGVQcm9wTGlzdGVuZXIgPSAocHJvcCkgPT4gKG9wLCBuZXh0VmVyc2lvbikgPT4ge1xuICAgIGNvbnN0IG5ld09wID0gWy4uLm9wXTtcbiAgICBuZXdPcFsxXSA9IFtwcm9wLCAuLi5uZXdPcFsxXV07XG4gICAgbm90aWZ5VXBkYXRlKG5ld09wLCBuZXh0VmVyc2lvbik7XG4gIH07XG4gIGNvbnN0IHByb3BQcm94eVN0YXRlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGNvbnN0IGFkZFByb3BMaXN0ZW5lciA9IChwcm9wLCBwcm9wUHJveHlTdGF0ZSkgPT4ge1xuICAgIGlmICgoaW1wb3J0Lm1ldGEuZW52ICYmIGltcG9ydC5tZXRhLmVudi5NT0RFKSAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcHJvcFByb3h5U3RhdGVzLmhhcyhwcm9wKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvcCBsaXN0ZW5lciBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICB9XG4gICAgaWYgKGxpc3RlbmVycy5zaXplKSB7XG4gICAgICBjb25zdCByZW1vdmUgPSBwcm9wUHJveHlTdGF0ZVszXShjcmVhdGVQcm9wTGlzdGVuZXIocHJvcCkpO1xuICAgICAgcHJvcFByb3h5U3RhdGVzLnNldChwcm9wLCBbcHJvcFByb3h5U3RhdGUsIHJlbW92ZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wUHJveHlTdGF0ZXMuc2V0KHByb3AsIFtwcm9wUHJveHlTdGF0ZV0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlUHJvcExpc3RlbmVyID0gKHByb3ApID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZW50cnkgPSBwcm9wUHJveHlTdGF0ZXMuZ2V0KHByb3ApO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgcHJvcFByb3h5U3RhdGVzLmRlbGV0ZShwcm9wKTtcbiAgICAgIChfYSA9IGVudHJ5WzFdKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChlbnRyeSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgIGlmIChsaXN0ZW5lcnMuc2l6ZSA9PT0gMSkge1xuICAgICAgcHJvcFByb3h5U3RhdGVzLmZvckVhY2goKFtwcm9wUHJveHlTdGF0ZSwgcHJldlJlbW92ZV0sIHByb3ApID0+IHtcbiAgICAgICAgaWYgKChpbXBvcnQubWV0YS5lbnYgJiYgaW1wb3J0Lm1ldGEuZW52Lk1PREUpICE9PSBcInByb2R1Y3Rpb25cIiAmJiBwcmV2UmVtb3ZlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVtb3ZlIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IHByb3BQcm94eVN0YXRlWzNdKGNyZWF0ZVByb3BMaXN0ZW5lcihwcm9wKSk7XG4gICAgICAgIHByb3BQcm94eVN0YXRlcy5zZXQocHJvcCwgW3Byb3BQcm94eVN0YXRlLCByZW1vdmVdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgaWYgKGxpc3RlbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHByb3BQcm94eVN0YXRlcy5mb3JFYWNoKChbcHJvcFByb3h5U3RhdGUsIHJlbW92ZV0sIHByb3ApID0+IHtcbiAgICAgICAgICBpZiAocmVtb3ZlKSB7XG4gICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgICAgIHByb3BQcm94eVN0YXRlcy5zZXQocHJvcCwgW3Byb3BQcm94eVN0YXRlXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiByZW1vdmVMaXN0ZW5lcjtcbiAgfTtcbiAgY29uc3QgYmFzZU9iamVjdCA9IEFycmF5LmlzQXJyYXkoaW5pdGlhbE9iamVjdCkgPyBbXSA6IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKGluaXRpYWxPYmplY3QpKTtcbiAgY29uc3QgaGFuZGxlciA9IHtcbiAgICBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHtcbiAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCk7XG4gICAgICByZW1vdmVQcm9wTGlzdGVuZXIocHJvcCk7XG4gICAgICBjb25zdCBkZWxldGVkID0gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApO1xuICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgbm90aWZ5VXBkYXRlKFtcImRlbGV0ZVwiLCBbcHJvcF0sIHByZXZWYWx1ZV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlbGV0ZWQ7XG4gICAgfSxcbiAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgIGNvbnN0IGhhc1ByZXZWYWx1ZSA9IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcCk7XG4gICAgICBjb25zdCBwcmV2VmFsdWUgPSBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICAgIGlmIChoYXNQcmV2VmFsdWUgJiYgKG9iamVjdElzKHByZXZWYWx1ZSwgdmFsdWUpIHx8IHByb3h5Q2FjaGUuaGFzKHZhbHVlKSAmJiBvYmplY3RJcyhwcmV2VmFsdWUsIHByb3h5Q2FjaGUuZ2V0KHZhbHVlKSkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmVtb3ZlUHJvcExpc3RlbmVyKHByb3ApO1xuICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IGdldFVudHJhY2tlZCh2YWx1ZSkgfHwgdmFsdWU7XG4gICAgICB9XG4gICAgICBsZXQgbmV4dFZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHZhbHVlLnRoZW4oKHYpID0+IHtcbiAgICAgICAgICB2YWx1ZS5zdGF0dXMgPSBcImZ1bGZpbGxlZFwiO1xuICAgICAgICAgIHZhbHVlLnZhbHVlID0gdjtcbiAgICAgICAgICBub3RpZnlVcGRhdGUoW1wicmVzb2x2ZVwiLCBbcHJvcF0sIHZdKTtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICB2YWx1ZS5zdGF0dXMgPSBcInJlamVjdGVkXCI7XG4gICAgICAgICAgdmFsdWUucmVhc29uID0gZTtcbiAgICAgICAgICBub3RpZnlVcGRhdGUoW1wicmVqZWN0XCIsIFtwcm9wXSwgZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghcHJveHlTdGF0ZU1hcC5oYXModmFsdWUpICYmIGNhblByb3h5KHZhbHVlKSkge1xuICAgICAgICAgIG5leHRWYWx1ZSA9IHByb3h5RnVuY3Rpb24odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkUHJveHlTdGF0ZSA9ICFyZWZTZXQuaGFzKG5leHRWYWx1ZSkgJiYgcHJveHlTdGF0ZU1hcC5nZXQobmV4dFZhbHVlKTtcbiAgICAgICAgaWYgKGNoaWxkUHJveHlTdGF0ZSkge1xuICAgICAgICAgIGFkZFByb3BMaXN0ZW5lcihwcm9wLCBjaGlsZFByb3h5U3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3AsIG5leHRWYWx1ZSwgcmVjZWl2ZXIpO1xuICAgICAgbm90aWZ5VXBkYXRlKFtcInNldFwiLCBbcHJvcF0sIHZhbHVlLCBwcmV2VmFsdWVdKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcHJveHlPYmplY3QgPSBuZXdQcm94eShiYXNlT2JqZWN0LCBoYW5kbGVyKTtcbiAgcHJveHlDYWNoZS5zZXQoaW5pdGlhbE9iamVjdCwgcHJveHlPYmplY3QpO1xuICBjb25zdCBwcm94eVN0YXRlID0gW1xuICAgIGJhc2VPYmplY3QsXG4gICAgZW5zdXJlVmVyc2lvbixcbiAgICBjcmVhdGVTbmFwc2hvdCxcbiAgICBhZGRMaXN0ZW5lclxuICBdO1xuICBwcm94eVN0YXRlTWFwLnNldChwcm94eU9iamVjdCwgcHJveHlTdGF0ZSk7XG4gIFJlZmxlY3Qub3duS2V5cyhpbml0aWFsT2JqZWN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgIGluaXRpYWxPYmplY3QsXG4gICAgICBrZXlcbiAgICApO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgICAgcHJveHlPYmplY3Rba2V5XSA9IGluaXRpYWxPYmplY3Rba2V5XTtcbiAgICAgIGRlbGV0ZSBkZXNjLnZhbHVlO1xuICAgICAgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiYXNlT2JqZWN0LCBrZXksIGRlc2MpO1xuICB9KTtcbiAgcmV0dXJuIHByb3h5T2JqZWN0O1xufSkgPT4gW1xuICAvLyBwdWJsaWMgZnVuY3Rpb25zXG4gIHByb3h5RnVuY3Rpb24sXG4gIC8vIHNoYXJlZCBzdGF0ZVxuICBwcm94eVN0YXRlTWFwLFxuICByZWZTZXQsXG4gIC8vIGludGVybmFsIHRoaW5nc1xuICBvYmplY3RJcyxcbiAgbmV3UHJveHksXG4gIGNhblByb3h5LFxuICBkZWZhdWx0SGFuZGxlUHJvbWlzZSxcbiAgc25hcENhY2hlLFxuICBjcmVhdGVTbmFwc2hvdCxcbiAgcHJveHlDYWNoZSxcbiAgdmVyc2lvbkhvbGRlclxuXTtcbmNvbnN0IFtkZWZhdWx0UHJveHlGdW5jdGlvbl0gPSBidWlsZFByb3h5RnVuY3Rpb24oKTtcbmZ1bmN0aW9uIHByb3h5KGluaXRpYWxPYmplY3QgPSB7fSkge1xuICByZXR1cm4gZGVmYXVsdFByb3h5RnVuY3Rpb24oaW5pdGlhbE9iamVjdCk7XG59XG5mdW5jdGlvbiBnZXRWZXJzaW9uKHByb3h5T2JqZWN0KSB7XG4gIGNvbnN0IHByb3h5U3RhdGUgPSBwcm94eVN0YXRlTWFwLmdldChwcm94eU9iamVjdCk7XG4gIHJldHVybiBwcm94eVN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBwcm94eVN0YXRlWzFdKCk7XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUocHJveHlPYmplY3QsIGNhbGxiYWNrLCBub3RpZnlJblN5bmMpIHtcbiAgY29uc3QgcHJveHlTdGF0ZSA9IHByb3h5U3RhdGVNYXAuZ2V0KHByb3h5T2JqZWN0KTtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgJiYgaW1wb3J0Lm1ldGEuZW52Lk1PREUpICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhcHJveHlTdGF0ZSkge1xuICAgIGNvbnNvbGUud2FybihcIlBsZWFzZSB1c2UgcHJveHkgb2JqZWN0XCIpO1xuICB9XG4gIGxldCBwcm9taXNlO1xuICBjb25zdCBvcHMgPSBbXTtcbiAgY29uc3QgYWRkTGlzdGVuZXIgPSBwcm94eVN0YXRlWzNdO1xuICBsZXQgaXNMaXN0ZW5lckFjdGl2ZSA9IGZhbHNlO1xuICBjb25zdCBsaXN0ZW5lciA9IChvcCkgPT4ge1xuICAgIG9wcy5wdXNoKG9wKTtcbiAgICBpZiAobm90aWZ5SW5TeW5jKSB7XG4gICAgICBjYWxsYmFjayhvcHMuc3BsaWNlKDApKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHByb21pc2UgPSB2b2lkIDA7XG4gICAgICAgIGlmIChpc0xpc3RlbmVyQWN0aXZlKSB7XG4gICAgICAgICAgY2FsbGJhY2sob3BzLnNwbGljZSgwKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlTGlzdGVuZXIgPSBhZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIGlzTGlzdGVuZXJBY3RpdmUgPSB0cnVlO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlzTGlzdGVuZXJBY3RpdmUgPSBmYWxzZTtcbiAgICByZW1vdmVMaXN0ZW5lcigpO1xuICB9O1xufVxuZnVuY3Rpb24gc25hcHNob3QocHJveHlPYmplY3QsIGhhbmRsZVByb21pc2UpIHtcbiAgY29uc3QgcHJveHlTdGF0ZSA9IHByb3h5U3RhdGVNYXAuZ2V0KHByb3h5T2JqZWN0KTtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgJiYgaW1wb3J0Lm1ldGEuZW52Lk1PREUpICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhcHJveHlTdGF0ZSkge1xuICAgIGNvbnNvbGUud2FybihcIlBsZWFzZSB1c2UgcHJveHkgb2JqZWN0XCIpO1xuICB9XG4gIGNvbnN0IFt0YXJnZXQsIGVuc3VyZVZlcnNpb24sIGNyZWF0ZVNuYXBzaG90XSA9IHByb3h5U3RhdGU7XG4gIHJldHVybiBjcmVhdGVTbmFwc2hvdCh0YXJnZXQsIGVuc3VyZVZlcnNpb24oKSwgaGFuZGxlUHJvbWlzZSk7XG59XG5mdW5jdGlvbiByZWYob2JqKSB7XG4gIHJlZlNldC5hZGQob2JqKTtcbiAgcmV0dXJuIG9iajtcbn1cbmNvbnN0IHVuc3RhYmxlX2J1aWxkUHJveHlGdW5jdGlvbiA9IGJ1aWxkUHJveHlGdW5jdGlvbjtcblxuZXhwb3J0IHsgZ2V0VmVyc2lvbiwgcHJveHksIHJlZiwgc25hcHNob3QsIHN1YnNjcmliZSwgdW5zdGFibGVfYnVpbGRQcm94eUZ1bmN0aW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=