"use strict";(self.webpackChunkthirdweb_learn_theme=self.webpackChunkthirdweb_learn_theme||[]).push([[2532],{6215:(t,e,n)=>{n.d(e,{W:()=>a});var s=n(42009),i=n(6475),r=n(54146);class a extends r.Z{constructor(t){let{chains:e=i.gL9,options:n}=t;super(),(0,s._)(this,"id",void 0),(0,s._)(this,"name",void 0),(0,s._)(this,"chains",void 0),(0,s._)(this,"options",void 0),(0,s._)(this,"ready",void 0),this.chains=e,this.options=n}getBlockExplorerUrls(t){const e=t.explorers?.map((t=>t.url))??[];return e.length>0?e:void 0}isChainUnsupported(t){return!this.chains.some((e=>e.chainId===t))}updateChains(t){this.chains=t}}},10393:(t,e,n)=>{n.d(e,{A:()=>a,C:()=>o,R:()=>h,S:()=>d,U:()=>u,a:()=>c});var s=n(42009);class i extends Error{constructor(t,e){const{cause:n,code:i,data:r}=e;if(!Number.isInteger(i))throw new Error('"code" must be an integer.');if(!t||"string"!=typeof t)throw new Error('"message" must be a nonempty string.');super(t),(0,s._)(this,"cause",void 0),(0,s._)(this,"code",void 0),(0,s._)(this,"data",void 0),this.cause=n,this.code=i,this.data=r}}class r extends i{constructor(t,e){const{cause:n,code:s,data:i}=e;if(!(Number.isInteger(s)&&s>=1e3&&s<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(t,{cause:n,code:s,data:i})}}class a extends Error{constructor(){super(...arguments),(0,s._)(this,"name","AddChainError"),(0,s._)(this,"message","Error adding chain")}}class o extends Error{constructor(t){let{chainId:e,connectorId:n}=t;super(`Chain "${e}" not configured for connector "${n}".`),(0,s._)(this,"name","ChainNotConfigured")}}class c extends Error{constructor(){super(...arguments),(0,s._)(this,"name","ConnectorNotFoundError"),(0,s._)(this,"message","Connector not found")}}class h extends i{constructor(t){super("Resource unavailable",{cause:t,code:-32002}),(0,s._)(this,"name","ResourceUnavailable")}}class d extends r{constructor(t){super("Error switching chain",{cause:t,code:4902}),(0,s._)(this,"name","SwitchChainError")}}class u extends r{constructor(t){super("User rejected request",{cause:t,code:4001}),(0,s._)(this,"name","UserRejectedRequestError")}}},4646:(t,e,n)=>{function s(t){return"string"==typeof t?Number.parseInt(t,"0x"===t.trim().substring(0,2)?16:10):"bigint"==typeof t?Number(t):t}n.d(e,{n:()=>s})},12532:(t,e,n)=>{n.d(e,{CoinbaseWalletConnector:()=>m});var s=n(71958),i=n(16074),r=n(42009),a=n(241),o=n(56371),c=n(23123),h=n(6215),d=n(4646),u=n(10393),l=(n(54146),n(25108)),g=new WeakMap,p=new WeakMap,w=new WeakSet;class m extends h.W{constructor(t){let{chains:e,options:n}=t;super({chains:e,options:{reloadOnDisconnect:!1,...n}}),(0,s._)(this,w),(0,r._)(this,"id",c.w.coinbase),(0,r._)(this,"name","Coinbase Wallet"),(0,r._)(this,"ready",!0),(0,i._)(this,g,{writable:!0,value:void 0}),(0,i._)(this,p,{writable:!0,value:void 0}),(0,r._)(this,"onAccountsChanged",(t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:(0,o.getAddress)(t[0])})})),(0,r._)(this,"onChainChanged",(t=>{const e=(0,d.n)(t),n=this.isChainUnsupported(e);this.emit("change",{chain:{id:e,unsupported:n}})})),(0,r._)(this,"onDisconnect",(()=>{this.emit("disconnect")}))}async connect(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const e=await this.getProvider();this.setupListeners(),this.emit("message",{type:"connecting"});const n=await e.enable(),s=(0,o.getAddress)(n[0]);let i=await this.getChainId(),r=this.isChainUnsupported(i);if(t&&i!==t)try{i=(await this.switchChain(t)).chainId,r=this.isChainUnsupported(i)}catch(e){l.error(`Connected but failed to switch to desired chain ${t}`,e)}return{account:s,chain:{id:i,unsupported:r},provider:new a.Q(e)}}catch(t){if(/(user closed modal|accounts received is empty)/i.test(t.message))throw new u.U(t);throw t}}async disconnect(){if(!(0,i.b)(this,p))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const t=await this.getProvider(),e=await t.request({method:"eth_accounts"});if(0===e.length)throw new Error("No accounts found");return(0,o.getAddress)(e[0])}async getChainId(){const t=await this.getProvider();return(0,d.n)(t.chainId)}async getProvider(){if(!(0,i.b)(this,p)){let t=(await Promise.all([n.e(5811),n.e(4654)]).then(n.bind(n,45811))).default;"function"!=typeof t&&"function"==typeof t.default&&(t=t.default),(0,i.a)(this,g,new t(this.options));const e=(0,i.b)(this,g).walletExtension?.getChainId(),s=this.chains.find((t=>this.options.chainId?t.chainId===this.options.chainId:t.chainId===e))||this.chains[0],r=this.options.chainId||s?.chainId,a=this.options.jsonRpcUrl||s?.rpc[0];(0,i.a)(this,p,(0,i.b)(this,g).makeWeb3Provider(a,r))}return(0,i.b)(this,p)}async getSigner(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new a.Q(e,t).getSigner(n)}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){const e=await this.getProvider(),n=(0,o.hexValue)(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find((e=>e.chainId===t))??{chainId:t,name:`Chain ${n}`,slug:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],testnet:!1,chain:"ethereum",shortName:"eth"}}catch(i){const r=this.chains.find((e=>e.chainId===t));if(!r)throw new u.C({chainId:t,connectorId:this.id});if(4902===i.code)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:r.rpc,blockExplorerUrls:this.getBlockExplorerUrls(r)}]}),r}catch(t){if((0,s.a)(this,w,C).call(this,t))throw new u.U(t);throw new u.A}if((0,s.a)(this,w,C).call(this,i))throw new u.U(i);throw new u.S(i)}}async setupListeners(){const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)}async getQrUrl(){if(await this.getProvider(),!(0,i.b)(this,g))throw new Error("Coinbase Wallet SDK not initialized");return(0,i.b)(this,g).getQrUrl()}}function C(t){return/(user rejected)/i.test(t.message)}}}]);