"use strict";(self.webpackChunkthirdweb_learn_theme=self.webpackChunkthirdweb_learn_theme||[]).push([[8997],{6215:(e,t,s)=>{s.d(t,{W:()=>r});var i=s(42009),n=s(6475),a=s(54146);class r extends a.Z{constructor(e){let{chains:t=n.gL9,options:s}=e;super(),(0,i._)(this,"id",void 0),(0,i._)(this,"name",void 0),(0,i._)(this,"chains",void 0),(0,i._)(this,"options",void 0),(0,i._)(this,"ready",void 0),this.chains=t,this.options=s}getBlockExplorerUrls(e){const t=e.explorers?.map((e=>e.url))??[];return t.length>0?t:void 0}isChainUnsupported(e){return!this.chains.some((t=>t.chainId===e))}updateChains(e){this.chains=e}}},10393:(e,t,s)=>{s.d(t,{A:()=>r,C:()=>o,R:()=>c,S:()=>d,U:()=>u,a:()=>h});var i=s(42009);class n extends Error{constructor(e,t){const{cause:s,code:n,data:a}=t;if(!Number.isInteger(n))throw new Error('"code" must be an integer.');if(!e||"string"!=typeof e)throw new Error('"message" must be a nonempty string.');super(e),(0,i._)(this,"cause",void 0),(0,i._)(this,"code",void 0),(0,i._)(this,"data",void 0),this.cause=s,this.code=n,this.data=a}}class a extends n{constructor(e,t){const{cause:s,code:i,data:n}=t;if(!(Number.isInteger(i)&&i>=1e3&&i<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:s,code:i,data:n})}}class r extends Error{constructor(){super(...arguments),(0,i._)(this,"name","AddChainError"),(0,i._)(this,"message","Error adding chain")}}class o extends Error{constructor(e){let{chainId:t,connectorId:s}=e;super(`Chain "${t}" not configured for connector "${s}".`),(0,i._)(this,"name","ChainNotConfigured")}}class h extends Error{constructor(){super(...arguments),(0,i._)(this,"name","ConnectorNotFoundError"),(0,i._)(this,"message","Connector not found")}}class c extends n{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,i._)(this,"name","ResourceUnavailable")}}class d extends a{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,i._)(this,"name","SwitchChainError")}}class u extends a{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,i._)(this,"name","UserRejectedRequestError")}}},4646:(e,t,s)=>{function i(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}s.d(t,{n:()=>i})},38997:(e,t,s)=>{s.d(t,{WalletConnectV1Connector:()=>b});var i=s(71958),n=s(16074),a=s(42009),r=s(23123),o=s(64594),h=s(241),c=s(93286),d=s(6215),u=s(4646),l=s(10393),m=(s(54146),s(25108));const p="last-used-chain-id",g="last-session";var w=new WeakMap,v=new WeakMap,C=new WeakSet,_=new WeakSet;class b extends d.W{constructor(e){super(e),(0,i._)(this,_),(0,i._)(this,C),(0,a._)(this,"id",r.w.walletConnectV1),(0,a._)(this,"name","WalletConnectV1"),(0,a._)(this,"ready",!0),(0,n._)(this,w,{writable:!0,value:void 0}),(0,n._)(this,v,{writable:!0,value:void 0}),(0,a._)(this,"walletName",void 0),(0,a._)(this,"onSwitchChain",(()=>{this.emit("message",{type:"switch_chain"})})),(0,a._)(this,"onDisplayUri",(async(e,t)=>{e&&this.emit("message",{data:e,type:"display_uri_error"}),this.emit("message",{data:t.params[0],type:"display_uri"})})),(0,a._)(this,"onRequestSent",((e,t)=>{e&&this.emit("message",{data:e,type:"request"}),this.emit("message",{data:t.params[0],type:"request"})})),(0,a._)(this,"onMessage",(e=>{this.emit("message",e)})),(0,a._)(this,"onAccountsChanged",(e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:o.getAddress(e[0])})})),(0,a._)(this,"onChainChanged",(e=>{const t=(0,u.n)(e),s=this.isChainUnsupported(t);(0,n.b)(this,v).setItem(p,String(e)),this.emit("change",{chain:{id:t,unsupported:s}})})),(0,a._)(this,"onDisconnect",(async()=>{this.walletName=void 0,(0,n.b)(this,v).removeItem(p),(0,n.b)(this,v).removeItem(g),(0,i.a)(this,_,I).call(this),this.emit("disconnect")})),(0,n.a)(this,v,e.storage)}async connect(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let t=e;if(!t){const e=await(0,n.b)(this,v).getItem(p),s=e?parseInt(e):void 0;s&&!this.isChainUnsupported(s)&&(t=s)}const s=await this.getProvider({chainId:t,create:!0});this.setupListeners(),setTimeout((()=>this.emit("message",{type:"connecting"})),0);const a=await s.enable(),r=o.getAddress(a[0]);let c=await this.getChainId(),d=this.isChainUnsupported(c);if(this.walletName=s.connector?.peerMeta?.name??"",e)try{await this.switchChain(e),c=e,d=this.isChainUnsupported(c)}catch(t){m.error(`could not switch to desired chain id: ${e} `,t)}return(0,i.a)(this,C,y).call(this),this.emit("connect",{account:r,chain:{id:c,unsupported:d},provider:s}),{account:r,chain:{id:c,unsupported:d},provider:new h.Q(s)}}catch(e){if(/user closed modal/i.test(e.message))throw new l.U(e);throw e}}async disconnect(){const e=await this.getProvider();await e.disconnect()}async getAccount(){const e=(await this.getProvider()).accounts;return o.getAddress(e[0])}async getChainId(){const e=await this.getProvider();return(0,u.n)(e.chainId)}async getProvider(){let{chainId:e,create:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!(0,n.b)(this,w)||e||t){const t=this.options?.infuraId?{}:this.chains.reduce(((e,t)=>({...e,[t.chainId]:t.rpc[0]})),{}),i=(await Promise.all([s.e(2592),s.e(9104)]).then(s.bind(s,49104))).default,a=await(0,n.b)(this,v).getItem(g),r=a?JSON.parse(a):void 0;this.walletName=r?.peerMeta?.name||void 0,(0,n.a)(this,w,new i({...this.options,chainId:e,rpc:{...t,...this.options?.rpc},session:r||void 0}))}return(0,n.b)(this,w)}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[t,s]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]);return new h.Q(t,e).getSigner(s)}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(e){const t=await this.getProvider(),s=c.hexValue(e);try{return await Promise.race([t.request({method:"wallet_switchEthereumChain",params:[{chainId:s}]}),new Promise((t=>this.on("change",(s=>{let{chain:i}=s;i?.id===e&&t(e)}))))]),this.chains.find((t=>t.chainId===e))??{chainId:e,name:`Chain ${s}`,network:`${s}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],shortName:"eth",chain:"ETH",slug:"ethereum",testnet:!1}}catch(i){const n="string"==typeof i?i:i?.message;if(/user rejected request/i.test(n))throw new l.U(i);const a=this.chains.find((t=>t.chainId===e));if(!a)throw new l.S(`Chain ${e} is not added in the list of supported chains`);if(/Unrecognized chain ID/i.test(n)){this.emit("message",{type:"add_chain"});const e=this.getBlockExplorerUrls(a);return await t.request({method:"wallet_addEthereumChain",params:[{chainId:s,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:a.rpc,blockExplorerUrls:e}]}),a}throw new l.S(i)}}async setupListeners(){(0,n.b)(this,w)&&((0,n.b)(this,w).on("accountsChanged",this.onAccountsChanged),(0,n.b)(this,w).on("chainChanged",this.onChainChanged),(0,n.b)(this,w).on("disconnect",this.onDisconnect),(0,n.b)(this,w).on("message",this.onMessage),(0,n.b)(this,w).on("switchChain",this.onSwitchChain),(0,n.b)(this,w).on("display_uri",this.onDisplayUri),(0,n.b)(this,w).on("call_request_sent",this.onRequestSent))}}async function y(){const e=(0,n.b)(this,w)?.connector.session;this.walletName=e?.peerMeta?.name||"";const t=JSON.stringify(e);(0,n.b)(this,v).setItem(g,t)}function I(){(0,n.b)(this,w)&&((0,n.b)(this,w).removeListener("accountsChanged",this.onAccountsChanged),(0,n.b)(this,w).removeListener("chainChanged",this.onChainChanged),(0,n.b)(this,w).removeListener("disconnect",this.onDisconnect),(0,n.b)(this,w).removeListener("message",this.onMessage),(0,n.b)(this,w).removeListener("switchChain",this.onSwitchChain),(0,n.b)(this,w).removeListener("display_uri",this.onDisplayUri),(0,n.b)(this,w).removeListener("call_request_sent",this.onRequestSent))}}}]);