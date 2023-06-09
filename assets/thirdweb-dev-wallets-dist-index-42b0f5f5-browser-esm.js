(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_wallets_dist_index-42b0f5f5_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/wallets/dist/index-42b0f5f5.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/wallets/dist/index-42b0f5f5.browser.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WalletConnectProvider)
/* harmony export */ });
/* harmony import */ var _defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defineProperty-c8ecdc07.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/defineProperty-c8ecdc07.browser.esm.js");
/* harmony import */ var _walletconnect_jsonrpc_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/jsonrpc-types */ "./node_modules/@walletconnect/jsonrpc-types/dist/esm/index.js");
/* harmony import */ var _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/jsonrpc-utils */ "./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js");
/* harmony import */ var _walletconnect_legacy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @walletconnect/legacy-client */ "./node_modules/@walletconnect/legacy-client/dist/esm/index.js");
/* harmony import */ var _walletconnect_legacy_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @walletconnect/legacy-modal */ "./node_modules/@walletconnect/legacy-modal/dist/cjs/index.js");
/* harmony import */ var _walletconnect_legacy_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_legacy_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.mjs");
/* harmony import */ var _walletconnect_jsonrpc_http_connection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @walletconnect/jsonrpc-http-connection */ "./node_modules/@walletconnect/jsonrpc-http-connection/dist/esm/index.js");
/* harmony import */ var _walletconnect_jsonrpc_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @walletconnect/jsonrpc-provider */ "./node_modules/@walletconnect/jsonrpc-provider/dist/esm/index.js");
/* harmony import */ var _walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @walletconnect/legacy-types */ "./node_modules/@walletconnect/legacy-types/dist/esm/index.js");
/* harmony import */ var _walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @walletconnect/legacy-utils */ "./node_modules/@walletconnect/legacy-utils/dist/esm/index.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");











class SignerConnection extends _walletconnect_jsonrpc_types__WEBPACK_IMPORTED_MODULE_0__.IJsonRpcConnection {
  constructor(opts) {
    super();
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "events", new eventemitter3__WEBPACK_IMPORTED_MODULE_4__["default"]());
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "accounts", []);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "chainId", 1);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "pending", false);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "wc", void 0);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "bridge", "https://bridge.walletconnect.org");
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "qrcode", true);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "qrcodeModalOptions", undefined);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "opts", void 0);
    this.opts = opts;
    this.chainId = opts?.chainId || this.chainId;
    this.wc = this.register(opts);
  }
  get connected() {
    return typeof this.wc !== "undefined" && this.wc.connected;
  }
  get connecting() {
    return this.pending;
  }
  get connector() {
    this.wc = this.register(this.opts);
    return this.wc;
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async open(chainId) {
    if (this.connected) {
      this.onOpen();
      return;
    }
    return new Promise((resolve, reject) => {
      this.on("error", err => {
        reject(err);
      });
      this.on("open", () => {
        resolve();
      });
      this.create(chainId);
    });
  }
  async close() {
    if (typeof this.wc === "undefined") {
      return;
    }
    if (this.wc.connected) {
      this.wc.killSession();
    }
    this.onClose();
  }
  async send(payload) {
    this.wc = this.register(this.opts);
    if (!this.connected) {
      await this.open();
    }
    this.sendPayload(payload).then(res => this.events.emit("payload", res)).catch(e => this.events.emit("payload", (0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcError)(payload.id, e.message)));
  }
  async sendAsync(payload) {
    // noop
    console.log("sendAsync", payload);
  }

  // ---------- Private ----------------------------------------------- //

  register(opts) {
    if (this.wc) {
      return this.wc;
    }
    this.opts = opts || this.opts;
    this.bridge = opts?.connector ? opts.connector.bridge : opts?.bridge || "https://bridge.walletconnect.org";
    this.qrcode = typeof opts?.qrcode === "undefined" || opts.qrcode !== false;
    this.chainId = typeof opts?.chainId !== "undefined" ? opts.chainId : this.chainId;
    this.qrcodeModalOptions = opts?.qrcodeModalOptions;
    const connectorOpts = {
      bridge: this.bridge,
      qrcodeModal: this.qrcode ? (_walletconnect_legacy_modal__WEBPACK_IMPORTED_MODULE_3___default()) : undefined,
      qrcodeModalOptions: this.qrcodeModalOptions,
      storageId: opts?.storageId,
      signingMethods: opts?.signingMethods,
      clientMeta: opts?.clientMeta,
      session: opts?.session
    };
    this.wc = typeof opts?.connector !== "undefined" ? opts.connector : new _walletconnect_legacy_client__WEBPACK_IMPORTED_MODULE_2__["default"](connectorOpts);
    if (typeof this.wc === "undefined") {
      throw new Error("Failed to register WalletConnect connector");
    }
    if (this.wc.accounts.length) {
      this.accounts = this.wc.accounts;
    }
    if (this.wc.chainId) {
      this.chainId = this.wc.chainId;
    }
    // this.accounts = this.wc.accounts;
    // this.chainId = this.wc.chainId;
    this.registerConnectorEvents();
    return this.wc;
  }
  onOpen(wc) {
    this.pending = false;
    if (wc) {
      this.wc = wc;
    }
    this.events.emit("open");
  }
  onClose() {
    this.pending = false;
    if (this.wc) {
      this.wc = undefined;
    }
    this.events.emit("close");
  }
  onError(payload) {
    let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Failed or Rejected Request";
    let code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -32000;
    const errorPayload = {
      id: payload.id,
      jsonrpc: payload.jsonrpc,
      error: {
        code,
        message
      }
    };
    this.events.emit("payload", errorPayload);
    return errorPayload;
  }
  create(chainId) {
    this.wc = this.register(this.opts);
    this.chainId = chainId || this.chainId;
    if (this.connected || this.pending) {
      return;
    }
    this.pending = true;
    this.registerConnectorEvents();
    this.wc.createSession({
      chainId: this.chainId
    }).then(() => this.events.emit("created")).catch(e => this.events.emit("error", e));
  }
  registerConnectorEvents() {
    this.wc = this.register(this.opts);
    this.wc.on("connect", err => {
      if (err) {
        this.events.emit("error", err);
        return;
      }
      this.accounts = this.wc?.accounts || [];
      this.chainId = this.wc?.chainId || this.chainId;
      this.onOpen();
    });
    this.wc.on("disconnect", err => {
      if (err) {
        this.events.emit("error", err);
        return;
      }
      this.onClose();
    });
    this.wc.on("modal_closed", () => {
      this.events.emit("error", new Error("User closed modal"));
    });
    this.wc.on("session_update", (_error, payload) => {
      const {
        accounts,
        chainId
      } = payload.params[0];
      if (!this.accounts || accounts && this.accounts !== accounts) {
        this.accounts = accounts;
        this.events.emit("accountsChanged", accounts);
      }
      if (!this.chainId || chainId && this.chainId !== chainId) {
        this.chainId = chainId;
        this.events.emit("chainChanged", chainId);
      }
    });
  }
  async sendPayload(payload) {
    this.wc = this.register(this.opts);
    try {
      const response = await this.wc.unsafeSend(payload);
      return this.sanitizeResponse(response);
    } catch (error) {
      return this.onError(payload, error.message);
    }
  }
  sanitizeResponse(response) {
    return typeof response.error !== "undefined" && typeof response.error.code === "undefined" ? (0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcError)(response.id, response.error.message) : response;
  }
}
var SignerConnection$1 = SignerConnection;

class WalletConnectProvider {
  constructor(opts) {
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "events", new eventemitter3__WEBPACK_IMPORTED_MODULE_4__["default"]());
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "rpc", void 0);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "signer", void 0);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "http", void 0);
    this.rpc = {
      infuraId: opts?.infuraId,
      custom: opts?.rpc
    };
    this.signer = new _walletconnect_jsonrpc_provider__WEBPACK_IMPORTED_MODULE_6__.JsonRpcProvider(new SignerConnection$1(opts));
    const chainId = this.signer.connection.chainId || opts?.chainId || 1;
    this.http = this.setHttpProvider(chainId);
    this.registerEventListeners();
  }
  get connected() {
    return this.signer.connection.connected;
  }
  get connector() {
    return this.signer.connection.connector;
  }
  get accounts() {
    return this.signer.connection.accounts;
  }
  get chainId() {
    return this.signer.connection.chainId;
  }
  get rpcUrl() {
    return (this.http?.connection).url || "";
  }
  async request(args) {
    switch (args.method) {
      case "eth_requestAccounts":
        await this.connect();
        return this.signer.connection.accounts;
      case "eth_accounts":
        return this.signer.connection.accounts;
      case "eth_chainId":
        return this.signer.connection.chainId;
    }
    if (_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_7__.SIGNING_METHODS.includes(args.method)) {
      return this.signer.request(args);
    }
    if (typeof this.http === "undefined") {
      throw new Error(`Cannot request JSON-RPC method (${args.method}) without provided rpc url`);
    }
    return this.http.request(args);
  }
  async enable() {
    const accounts = await this.request({
      method: "eth_requestAccounts"
    });
    return accounts;
  }
  async connect() {
    if (!this.signer.connection.connected) {
      await this.signer.connect();
    }
  }
  async disconnect() {
    if (this.signer.connection.connected) {
      await this.signer.disconnect();
    }
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  get isWalletConnect() {
    return true;
  }

  // ---------- Private ----------------------------------------------- //

  registerEventListeners() {
    this.signer.connection.on("accountsChanged", accounts => {
      this.events.emit("accountsChanged", accounts);
    });
    this.signer.connection.on("chainChanged", chainId => {
      this.http = this.setHttpProvider(chainId);
      this.events.emit("chainChanged", chainId);
    });
    this.connector.on("display_uri", (error, payload) => {
      this.events.emit("display_uri", error, payload);
    });
    this.connector.on("call_request_sent", (error, payload) => {
      this.events.emit("call_request_sent", error, payload);
    });
    this.signer.on("disconnect", () => {
      this.events.emit("disconnect");
    });
  }
  setHttpProvider(chainId) {
    const rpcUrl = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_8__.getRpcUrl)(chainId, this.rpc);
    if (typeof rpcUrl === "undefined") {
      return undefined;
    }
    const http = new _walletconnect_jsonrpc_provider__WEBPACK_IMPORTED_MODULE_6__.JsonRpcProvider(new _walletconnect_jsonrpc_http_connection__WEBPACK_IMPORTED_MODULE_5__.HttpConnection(rpcUrl));
    return http;
  }
}




/***/ }),

/***/ "./node_modules/@walletconnect/jsonrpc-http-connection/dist/esm/http.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@walletconnect/jsonrpc-http-connection/dist/esm/http.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpConnection: () => (/* binding */ HttpConnection),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @walletconnect/safe-json */ "./node_modules/@walletconnect/safe-json/dist/esm/index.js");
/* harmony import */ var _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @walletconnect/jsonrpc-utils */ "./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js");




const DEFAULT_HTTP_HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
};
const DEFAULT_HTTP_METHOD = "POST";
const DEFAULT_FETCH_OPTS = {
    headers: DEFAULT_HTTP_HEADERS,
    method: DEFAULT_HTTP_METHOD,
};
const EVENT_EMITTER_MAX_LISTENERS_DEFAULT = 10;
class HttpConnection {
    constructor(url, disableProviderPing = false) {
        this.url = url;
        this.disableProviderPing = disableProviderPing;
        this.events = new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.isAvailable = false;
        this.registering = false;
        if (!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_3__.isHttpUrl)(url)) {
            throw new Error(`Provided URL is not compatible with HTTP connection: ${url}`);
        }
        this.url = url;
        this.disableProviderPing = disableProviderPing;
    }
    get connected() {
        return this.isAvailable;
    }
    get connecting() {
        return this.registering;
    }
    on(event, listener) {
        this.events.on(event, listener);
    }
    once(event, listener) {
        this.events.once(event, listener);
    }
    off(event, listener) {
        this.events.off(event, listener);
    }
    removeListener(event, listener) {
        this.events.removeListener(event, listener);
    }
    async open(url = this.url) {
        await this.register(url);
    }
    async close() {
        if (!this.isAvailable) {
            throw new Error("Connection already closed");
        }
        this.onClose();
    }
    async send(payload, context) {
        if (!this.isAvailable) {
            await this.register();
        }
        try {
            const body = (0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_2__.safeJsonStringify)(payload);
            const res = await cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()(this.url, Object.assign(Object.assign({}, DEFAULT_FETCH_OPTS), { body }));
            const data = await res.json();
            this.onPayload({ data });
        }
        catch (e) {
            this.onError(payload.id, e);
        }
    }
    async register(url = this.url) {
        if (!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_3__.isHttpUrl)(url)) {
            throw new Error(`Provided URL is not compatible with HTTP connection: ${url}`);
        }
        if (this.registering) {
            const currentMaxListeners = this.events.getMaxListeners();
            if (this.events.listenerCount("register_error") >= currentMaxListeners ||
                this.events.listenerCount("open") >= currentMaxListeners) {
                this.events.setMaxListeners(currentMaxListeners + 1);
            }
            return new Promise((resolve, reject) => {
                this.events.once("register_error", error => {
                    this.resetMaxListeners();
                    reject(error);
                });
                this.events.once("open", () => {
                    this.resetMaxListeners();
                    if (typeof this.isAvailable === "undefined") {
                        return reject(new Error("HTTP connection is missing or invalid"));
                    }
                    resolve();
                });
            });
        }
        this.url = url;
        this.registering = true;
        try {
            if (!this.disableProviderPing) {
                const body = (0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_2__.safeJsonStringify)({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
                await cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()(url, Object.assign(Object.assign({}, DEFAULT_FETCH_OPTS), { body }));
            }
            this.onOpen();
        }
        catch (e) {
            const error = this.parseError(e);
            this.events.emit("register_error", error);
            this.onClose();
            throw error;
        }
    }
    onOpen() {
        this.isAvailable = true;
        this.registering = false;
        this.events.emit("open");
    }
    onClose() {
        this.isAvailable = false;
        this.registering = false;
        this.events.emit("close");
    }
    onPayload(e) {
        if (typeof e.data === "undefined")
            return;
        const payload = typeof e.data === "string" ? (0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_2__.safeJsonParse)(e.data) : e.data;
        this.events.emit("payload", payload);
    }
    onError(id, e) {
        const error = this.parseError(e);
        const message = error.message || error.toString();
        const payload = (0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcError)(id, message);
        this.events.emit("payload", payload);
    }
    parseError(e, url = this.url) {
        return (0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_3__.parseConnectionError)(e, url, "HTTP");
    }
    resetMaxListeners() {
        if (this.events.getMaxListeners() > EVENT_EMITTER_MAX_LISTENERS_DEFAULT) {
            this.events.setMaxListeners(EVENT_EMITTER_MAX_LISTENERS_DEFAULT);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpConnection);
//# sourceMappingURL=http.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/jsonrpc-http-connection/dist/esm/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@walletconnect/jsonrpc-http-connection/dist/esm/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpConnection: () => (/* reexport safe */ _http__WEBPACK_IMPORTED_MODULE_0__.HttpConnection),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ "./node_modules/@walletconnect/jsonrpc-http-connection/dist/esm/http.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_http__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-client/dist/esm/core.js":
/*!********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-client/dist/esm/core.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/legacy-types */ "./node_modules/@walletconnect/legacy-types/dist/esm/index.js");
/* harmony import */ var _walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/legacy-utils */ "./node_modules/@walletconnect/legacy-utils/dist/esm/index.js");
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket */ "./node_modules/@walletconnect/legacy-client/dist/esm/socket.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./node_modules/@walletconnect/legacy-client/dist/esm/events.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./node_modules/@walletconnect/legacy-client/dist/esm/storage.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url */ "./node_modules/@walletconnect/legacy-client/dist/esm/url.js");






class Connector {
    constructor(opts) {
        this.protocol = "wc";
        this.version = 1;
        this._bridge = "";
        this._key = null;
        this._clientId = "";
        this._clientMeta = null;
        this._peerId = "";
        this._peerMeta = null;
        this._handshakeId = 0;
        this._handshakeTopic = "";
        this._connected = false;
        this._accounts = [];
        this._chainId = 0;
        this._networkId = 0;
        this._rpcUrl = "";
        this._eventManager = new _events__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this._clientMeta = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.getClientMeta)() || opts.connectorOpts.clientMeta || null;
        this._cryptoLib = opts.cryptoLib;
        this._sessionStorage = opts.sessionStorage || new _storage__WEBPACK_IMPORTED_MODULE_4__["default"](opts.connectorOpts.storageId);
        this._qrcodeModal = opts.connectorOpts.qrcodeModal;
        this._qrcodeModalOptions = opts.connectorOpts.qrcodeModalOptions;
        this._signingMethods = [..._walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.SIGNING_METHODS, ...(opts.connectorOpts.signingMethods || [])];
        if (!opts.connectorOpts.bridge && !opts.connectorOpts.uri && !opts.connectorOpts.session) {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_MISSING_REQUIRED);
        }
        if (opts.connectorOpts.bridge) {
            this.bridge = (0,_url__WEBPACK_IMPORTED_MODULE_5__.getBridgeUrl)(opts.connectorOpts.bridge);
        }
        if (opts.connectorOpts.uri) {
            this.uri = opts.connectorOpts.uri;
        }
        const session = opts.connectorOpts.session || this._getStorageSession();
        if (session) {
            this.session = session;
        }
        if (this.handshakeId) {
            this._subscribeToSessionResponse(this.handshakeId, "Session request rejected");
        }
        this._transport =
            opts.transport ||
                new _socket__WEBPACK_IMPORTED_MODULE_2__["default"]({
                    protocol: this.protocol,
                    version: this.version,
                    url: this.bridge,
                    subscriptions: [this.clientId],
                });
        this._subscribeToInternalEvents();
        this._initTransport();
        if (opts.connectorOpts.uri) {
            this._subscribeToSessionRequest();
        }
        if (opts.pushServerOpts) {
            this._registerPushServer(opts.pushServerOpts);
        }
    }
    set bridge(value) {
        if (!value) {
            return;
        }
        this._bridge = value;
    }
    get bridge() {
        return this._bridge;
    }
    set key(value) {
        if (!value) {
            return;
        }
        const key = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.convertHexToArrayBuffer)(value);
        this._key = key;
    }
    get key() {
        if (this._key) {
            const key = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.convertArrayBufferToHex)(this._key, true);
            return key;
        }
        return "";
    }
    set clientId(value) {
        if (!value) {
            return;
        }
        this._clientId = value;
    }
    get clientId() {
        let clientId = this._clientId;
        if (!clientId) {
            clientId = this._clientId = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.uuid)();
        }
        return this._clientId;
    }
    set peerId(value) {
        if (!value) {
            return;
        }
        this._peerId = value;
    }
    get peerId() {
        return this._peerId;
    }
    set clientMeta(value) {
    }
    get clientMeta() {
        let clientMeta = this._clientMeta;
        if (!clientMeta) {
            clientMeta = this._clientMeta = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.getClientMeta)();
        }
        return clientMeta;
    }
    set peerMeta(value) {
        this._peerMeta = value;
    }
    get peerMeta() {
        const peerMeta = this._peerMeta;
        return peerMeta;
    }
    set handshakeTopic(value) {
        if (!value) {
            return;
        }
        this._handshakeTopic = value;
    }
    get handshakeTopic() {
        return this._handshakeTopic;
    }
    set handshakeId(value) {
        if (!value) {
            return;
        }
        this._handshakeId = value;
    }
    get handshakeId() {
        return this._handshakeId;
    }
    get uri() {
        const _uri = this._formatUri();
        return _uri;
    }
    set uri(value) {
        if (!value) {
            return;
        }
        const { handshakeTopic, bridge, key } = this._parseUri(value);
        this.handshakeTopic = handshakeTopic;
        this.bridge = bridge;
        this.key = key;
    }
    set chainId(value) {
        this._chainId = value;
    }
    get chainId() {
        const chainId = this._chainId;
        return chainId;
    }
    set networkId(value) {
        this._networkId = value;
    }
    get networkId() {
        const networkId = this._networkId;
        return networkId;
    }
    set accounts(value) {
        this._accounts = value;
    }
    get accounts() {
        const accounts = this._accounts;
        return accounts;
    }
    set rpcUrl(value) {
        this._rpcUrl = value;
    }
    get rpcUrl() {
        const rpcUrl = this._rpcUrl;
        return rpcUrl;
    }
    set connected(value) {
    }
    get connected() {
        return this._connected;
    }
    set pending(value) {
    }
    get pending() {
        return !!this._handshakeTopic;
    }
    get session() {
        return {
            connected: this.connected,
            accounts: this.accounts,
            chainId: this.chainId,
            bridge: this.bridge,
            key: this.key,
            clientId: this.clientId,
            clientMeta: this.clientMeta,
            peerId: this.peerId,
            peerMeta: this.peerMeta,
            handshakeId: this.handshakeId,
            handshakeTopic: this.handshakeTopic,
        };
    }
    set session(value) {
        if (!value) {
            return;
        }
        this._connected = value.connected;
        this.accounts = value.accounts;
        this.chainId = value.chainId;
        this.bridge = value.bridge;
        this.key = value.key;
        this.clientId = value.clientId;
        this.clientMeta = value.clientMeta;
        this.peerId = value.peerId;
        this.peerMeta = value.peerMeta;
        this.handshakeId = value.handshakeId;
        this.handshakeTopic = value.handshakeTopic;
    }
    on(event, callback) {
        const eventEmitter = {
            event,
            callback,
        };
        this._eventManager.subscribe(eventEmitter);
    }
    off(event) {
        this._eventManager.unsubscribe(event);
    }
    async createInstantRequest(instantRequest) {
        this._key = await this._generateKey();
        const request = this._formatRequest({
            method: "wc_instantRequest",
            params: [
                {
                    peerId: this.clientId,
                    peerMeta: this.clientMeta,
                    request: this._formatRequest(instantRequest),
                },
            ],
        });
        this.handshakeId = request.id;
        this.handshakeTopic = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.uuid)();
        this._eventManager.trigger({
            event: "display_uri",
            params: [this.uri],
        });
        this.on("modal_closed", () => {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_QRCODE_MODAL_USER_CLOSED);
        });
        const endInstantRequest = () => {
            this.killSession();
        };
        try {
            const result = await this._sendCallRequest(request);
            if (result) {
                endInstantRequest();
            }
            return result;
        }
        catch (error) {
            endInstantRequest();
            throw error;
        }
    }
    async connect(opts) {
        if (!this._qrcodeModal) {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_QRCODE_MODAL_NOT_PROVIDED);
        }
        if (this.connected) {
            return {
                chainId: this.chainId,
                accounts: this.accounts,
            };
        }
        await this.createSession(opts);
        return new Promise(async (resolve, reject) => {
            this.on("modal_closed", () => reject(new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_QRCODE_MODAL_USER_CLOSED)));
            this.on("connect", (error, payload) => {
                if (error) {
                    return reject(error);
                }
                resolve(payload.params[0]);
            });
        });
    }
    async createSession(opts) {
        if (this._connected) {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_CONNECTED);
        }
        if (this.pending) {
            return;
        }
        this._key = await this._generateKey();
        const request = this._formatRequest({
            method: "wc_sessionRequest",
            params: [
                {
                    peerId: this.clientId,
                    peerMeta: this.clientMeta,
                    chainId: opts && opts.chainId ? opts.chainId : null,
                },
            ],
        });
        this.handshakeId = request.id;
        this.handshakeTopic = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.uuid)();
        this._sendSessionRequest(request, "Session update rejected", {
            topic: this.handshakeTopic,
        });
        this._eventManager.trigger({
            event: "display_uri",
            params: [this.uri],
        });
    }
    approveSession(sessionStatus) {
        if (this._connected) {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_CONNECTED);
        }
        this.chainId = sessionStatus.chainId;
        this.accounts = sessionStatus.accounts;
        this.networkId = sessionStatus.networkId || 0;
        this.rpcUrl = sessionStatus.rpcUrl || "";
        const sessionParams = {
            approved: true,
            chainId: this.chainId,
            networkId: this.networkId,
            accounts: this.accounts,
            rpcUrl: this.rpcUrl,
            peerId: this.clientId,
            peerMeta: this.clientMeta,
        };
        const response = {
            id: this.handshakeId,
            jsonrpc: "2.0",
            result: sessionParams,
        };
        this._sendResponse(response);
        this._connected = true;
        this._setStorageSession();
        this._eventManager.trigger({
            event: "connect",
            params: [
                {
                    peerId: this.peerId,
                    peerMeta: this.peerMeta,
                    chainId: this.chainId,
                    accounts: this.accounts,
                },
            ],
        });
    }
    rejectSession(sessionError) {
        if (this._connected) {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_CONNECTED);
        }
        const message = sessionError && sessionError.message ? sessionError.message : _walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_REJECTED;
        const response = this._formatResponse({
            id: this.handshakeId,
            error: { message },
        });
        this._sendResponse(response);
        this._connected = false;
        this._eventManager.trigger({
            event: "disconnect",
            params: [{ message }],
        });
        this._removeStorageSession();
    }
    updateSession(sessionStatus) {
        if (!this._connected) {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_DISCONNECTED);
        }
        this.chainId = sessionStatus.chainId;
        this.accounts = sessionStatus.accounts;
        this.networkId = sessionStatus.networkId || 0;
        this.rpcUrl = sessionStatus.rpcUrl || "";
        const sessionParams = {
            approved: true,
            chainId: this.chainId,
            networkId: this.networkId,
            accounts: this.accounts,
            rpcUrl: this.rpcUrl,
        };
        const request = this._formatRequest({
            method: "wc_sessionUpdate",
            params: [sessionParams],
        });
        this._sendSessionRequest(request, "Session update rejected");
        this._eventManager.trigger({
            event: "session_update",
            params: [
                {
                    chainId: this.chainId,
                    accounts: this.accounts,
                },
            ],
        });
        this._manageStorageSession();
    }
    async killSession(sessionError) {
        const message = sessionError ? sessionError.message : "Session Disconnected";
        const sessionParams = {
            approved: false,
            chainId: null,
            networkId: null,
            accounts: null,
        };
        const request = this._formatRequest({
            method: "wc_sessionUpdate",
            params: [sessionParams],
        });
        await this._sendRequest(request);
        this._handleSessionDisconnect(message);
    }
    async sendTransaction(tx) {
        if (!this._connected) {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_DISCONNECTED);
        }
        const parsedTx = tx;
        const request = this._formatRequest({
            method: "eth_sendTransaction",
            params: [parsedTx],
        });
        const result = await this._sendCallRequest(request);
        return result;
    }
    async signTransaction(tx) {
        if (!this._connected) {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_DISCONNECTED);
        }
        const parsedTx = tx;
        const request = this._formatRequest({
            method: "eth_signTransaction",
            params: [parsedTx],
        });
        const result = await this._sendCallRequest(request);
        return result;
    }
    async signMessage(params) {
        if (!this._connected) {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_DISCONNECTED);
        }
        const request = this._formatRequest({
            method: "eth_sign",
            params,
        });
        const result = await this._sendCallRequest(request);
        return result;
    }
    async signPersonalMessage(params) {
        if (!this._connected) {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_DISCONNECTED);
        }
        const request = this._formatRequest({
            method: "personal_sign",
            params,
        });
        const result = await this._sendCallRequest(request);
        return result;
    }
    async signTypedData(params) {
        if (!this._connected) {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_DISCONNECTED);
        }
        const request = this._formatRequest({
            method: "eth_signTypedData",
            params,
        });
        const result = await this._sendCallRequest(request);
        return result;
    }
    async updateChain(chainParams) {
        if (!this._connected) {
            throw new Error("Session currently disconnected");
        }
        const request = this._formatRequest({
            method: "wallet_updateChain",
            params: [chainParams],
        });
        const result = await this._sendCallRequest(request);
        return result;
    }
    unsafeSend(request, options) {
        this._sendRequest(request, options);
        this._eventManager.trigger({
            event: "call_request_sent",
            params: [{ request, options }],
        });
        return new Promise((resolve, reject) => {
            this._subscribeToResponse(request.id, (error, payload) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (!payload) {
                    throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_MISSING_JSON_RPC);
                }
                resolve(payload);
            });
        });
    }
    async sendCustomRequest(request, options) {
        if (!this._connected) {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_DISCONNECTED);
        }
        switch (request.method) {
            case "eth_accounts":
                return this.accounts;
            case "eth_chainId":
                return (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.convertNumberToHex)(this.chainId);
            case "eth_sendTransaction":
            case "eth_signTransaction":
                if (request.params) {
                }
                break;
            case "personal_sign":
                if (request.params) {
                }
                break;
            default:
                break;
        }
        const formattedRequest = this._formatRequest(request);
        const result = await this._sendCallRequest(formattedRequest, options);
        return result;
    }
    approveRequest(response) {
        if ((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.isJsonRpcResponseSuccess)(response)) {
            const formattedResponse = this._formatResponse(response);
            this._sendResponse(formattedResponse);
        }
        else {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_MISSING_RESULT);
        }
    }
    rejectRequest(response) {
        if ((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.isJsonRpcResponseError)(response)) {
            const formattedResponse = this._formatResponse(response);
            this._sendResponse(formattedResponse);
        }
        else {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_MISSING_ERROR);
        }
    }
    transportClose() {
        this._transport.close();
    }
    async _sendRequest(request, options) {
        const callRequest = this._formatRequest(request);
        const encryptionPayload = await this._encrypt(callRequest);
        const topic = typeof (options === null || options === void 0 ? void 0 : options.topic) !== "undefined" ? options.topic : this.peerId;
        const payload = JSON.stringify(encryptionPayload);
        const silent = typeof (options === null || options === void 0 ? void 0 : options.forcePushNotification) !== "undefined"
            ? !options.forcePushNotification
            : (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.isSilentPayload)(callRequest);
        this._transport.send(payload, topic, silent);
    }
    async _sendResponse(response) {
        const encryptionPayload = await this._encrypt(response);
        const topic = this.peerId;
        const payload = JSON.stringify(encryptionPayload);
        const silent = true;
        this._transport.send(payload, topic, silent);
    }
    async _sendSessionRequest(request, errorMsg, options) {
        this._sendRequest(request, options);
        this._subscribeToSessionResponse(request.id, errorMsg);
    }
    _sendCallRequest(request, options) {
        this._sendRequest(request, options);
        this._eventManager.trigger({
            event: "call_request_sent",
            params: [{ request, options }],
        });
        return this._subscribeToCallResponse(request.id);
    }
    _formatRequest(request) {
        if (typeof request.method === "undefined") {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_MISSING_METHOD);
        }
        const formattedRequest = {
            id: typeof request.id === "undefined" ? (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.payloadId)() : request.id,
            jsonrpc: "2.0",
            method: request.method,
            params: typeof request.params === "undefined" ? [] : request.params,
        };
        return formattedRequest;
    }
    _formatResponse(response) {
        if (typeof response.id === "undefined") {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_MISSING_ID);
        }
        const baseResponse = { id: response.id, jsonrpc: "2.0" };
        if ((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.isJsonRpcResponseError)(response)) {
            const error = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.formatRpcError)(response.error);
            const errorResponse = Object.assign(Object.assign(Object.assign({}, baseResponse), response), { error });
            return errorResponse;
        }
        else if ((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.isJsonRpcResponseSuccess)(response)) {
            const successResponse = Object.assign(Object.assign({}, baseResponse), response);
            return successResponse;
        }
        throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_INVALID_RESPONSE);
    }
    _handleSessionDisconnect(errorMsg) {
        const message = errorMsg || "Session Disconnected";
        if (!this._connected) {
            if (this._qrcodeModal) {
                this._qrcodeModal.close();
            }
            (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.removeLocal)(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.MOBILE_LINK_CHOICE_KEY);
        }
        if (this._connected) {
            this._connected = false;
        }
        if (this._handshakeId) {
            this._handshakeId = 0;
        }
        if (this._handshakeTopic) {
            this._handshakeTopic = "";
        }
        if (this._peerId) {
            this._peerId = "";
        }
        this._eventManager.trigger({
            event: "disconnect",
            params: [{ message }],
        });
        this._removeStorageSession();
        this.transportClose();
    }
    _handleSessionResponse(errorMsg, sessionParams) {
        if (sessionParams) {
            if (sessionParams.approved) {
                if (!this._connected) {
                    this._connected = true;
                    if (sessionParams.chainId) {
                        this.chainId = sessionParams.chainId;
                    }
                    if (sessionParams.accounts) {
                        this.accounts = sessionParams.accounts;
                    }
                    if (sessionParams.peerId && !this.peerId) {
                        this.peerId = sessionParams.peerId;
                    }
                    if (sessionParams.peerMeta && !this.peerMeta) {
                        this.peerMeta = sessionParams.peerMeta;
                    }
                    this._eventManager.trigger({
                        event: "connect",
                        params: [
                            {
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts,
                            },
                        ],
                    });
                }
                else {
                    if (sessionParams.chainId) {
                        this.chainId = sessionParams.chainId;
                    }
                    if (sessionParams.accounts) {
                        this.accounts = sessionParams.accounts;
                    }
                    this._eventManager.trigger({
                        event: "session_update",
                        params: [
                            {
                                chainId: this.chainId,
                                accounts: this.accounts,
                            },
                        ],
                    });
                }
                this._manageStorageSession();
            }
            else {
                this._handleSessionDisconnect(errorMsg);
            }
        }
        else {
            this._handleSessionDisconnect(errorMsg);
        }
    }
    async _handleIncomingMessages(socketMessage) {
        const activeTopics = [this.clientId, this.handshakeTopic];
        if (!activeTopics.includes(socketMessage.topic)) {
            return;
        }
        let encryptionPayload;
        try {
            encryptionPayload = JSON.parse(socketMessage.payload);
        }
        catch (error) {
            return;
        }
        const payload = await this._decrypt(encryptionPayload);
        if (payload) {
            this._eventManager.trigger(payload);
        }
    }
    _subscribeToSessionRequest() {
        this._transport.subscribe(this.handshakeTopic);
    }
    _subscribeToResponse(id, callback) {
        this.on(`response:${id}`, callback);
    }
    _subscribeToSessionResponse(id, errorMsg) {
        this._subscribeToResponse(id, (error, payload) => {
            if (error) {
                this._handleSessionResponse(error.message);
                return;
            }
            if ((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.isJsonRpcResponseSuccess)(payload)) {
                this._handleSessionResponse(errorMsg, payload.result);
            }
            else if (payload.error && payload.error.message) {
                this._handleSessionResponse(payload.error.message);
            }
            else {
                this._handleSessionResponse(errorMsg);
            }
        });
    }
    _subscribeToCallResponse(id) {
        return new Promise((resolve, reject) => {
            this._subscribeToResponse(id, (error, payload) => {
                if (error) {
                    reject(error);
                    return;
                }
                if ((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.isJsonRpcResponseSuccess)(payload)) {
                    resolve(payload.result);
                }
                else if (payload.error && payload.error.message) {
                    reject(payload.error);
                }
                else {
                    reject(new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_INVALID_RESPONSE));
                }
            });
        });
    }
    _subscribeToInternalEvents() {
        this.on("display_uri", () => {
            if (this._qrcodeModal) {
                this._qrcodeModal.open(this.uri, () => {
                    this._eventManager.trigger({
                        event: "modal_closed",
                        params: [],
                    });
                }, this._qrcodeModalOptions);
            }
        });
        this.on("connect", () => {
            if (this._qrcodeModal) {
                this._qrcodeModal.close();
            }
        });
        this.on("call_request_sent", (error, payload) => {
            const { request } = payload.params[0];
            if ((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.isMobile)() && this._signingMethods.includes(request.method)) {
                const mobileLinkUrl = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.getLocal)(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.MOBILE_LINK_CHOICE_KEY);
                if (mobileLinkUrl) {
                    window.location.href = mobileLinkUrl.href;
                }
            }
        });
        this.on("wc_sessionRequest", (error, payload) => {
            if (error) {
                this._eventManager.trigger({
                    event: "error",
                    params: [
                        {
                            code: "SESSION_REQUEST_ERROR",
                            message: error.toString(),
                        },
                    ],
                });
            }
            this.handshakeId = payload.id;
            this.peerId = payload.params[0].peerId;
            this.peerMeta = payload.params[0].peerMeta;
            const internalPayload = Object.assign(Object.assign({}, payload), { method: "session_request" });
            this._eventManager.trigger(internalPayload);
        });
        this.on("wc_sessionUpdate", (error, payload) => {
            if (error) {
                this._handleSessionResponse(error.message);
            }
            this._handleSessionResponse("Session disconnected", payload.params[0]);
        });
    }
    _initTransport() {
        this._transport.on("message", (socketMessage) => this._handleIncomingMessages(socketMessage));
        this._transport.on("open", () => this._eventManager.trigger({ event: "transport_open", params: [] }));
        this._transport.on("close", () => this._eventManager.trigger({ event: "transport_close", params: [] }));
        this._transport.on("error", () => this._eventManager.trigger({
            event: "transport_error",
            params: ["Websocket connection failed"],
        }));
        this._transport.open();
    }
    _formatUri() {
        const protocol = this.protocol;
        const handshakeTopic = this.handshakeTopic;
        const version = this.version;
        const bridge = encodeURIComponent(this.bridge);
        const key = this.key;
        const uri = `${protocol}:${handshakeTopic}@${version}?bridge=${bridge}&key=${key}`;
        return uri;
    }
    _parseUri(uri) {
        const result = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_1__.parseWalletConnectUri)(uri);
        if (result.protocol === this.protocol) {
            if (!result.handshakeTopic) {
                throw Error("Invalid or missing handshakeTopic parameter value");
            }
            const handshakeTopic = result.handshakeTopic;
            if (!result.bridge) {
                throw Error("Invalid or missing bridge url parameter value");
            }
            const bridge = decodeURIComponent(result.bridge);
            if (!result.key) {
                throw Error("Invalid or missing key parameter value");
            }
            const key = result.key;
            return { handshakeTopic, bridge, key };
        }
        else {
            throw new Error(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.ERROR_INVALID_URI);
        }
    }
    async _generateKey() {
        if (this._cryptoLib) {
            const result = await this._cryptoLib.generateKey();
            return result;
        }
        return null;
    }
    async _encrypt(data) {
        const key = this._key;
        if (this._cryptoLib && key) {
            const result = await this._cryptoLib.encrypt(data, key);
            return result;
        }
        return null;
    }
    async _decrypt(payload) {
        const key = this._key;
        if (this._cryptoLib && key) {
            const result = await this._cryptoLib.decrypt(payload, key);
            return result;
        }
        return null;
    }
    _getStorageSession() {
        let result = null;
        if (this._sessionStorage) {
            result = this._sessionStorage.getSession();
        }
        return result;
    }
    _setStorageSession() {
        if (this._sessionStorage) {
            this._sessionStorage.setSession(this.session);
        }
    }
    _removeStorageSession() {
        if (this._sessionStorage) {
            this._sessionStorage.removeSession();
        }
    }
    _manageStorageSession() {
        if (this._connected) {
            this._setStorageSession();
        }
        else {
            this._removeStorageSession();
        }
    }
    _registerPushServer(pushServerOpts) {
        if (!pushServerOpts.url || typeof pushServerOpts.url !== "string") {
            throw Error("Invalid or missing pushServerOpts.url parameter value");
        }
        if (!pushServerOpts.type || typeof pushServerOpts.type !== "string") {
            throw Error("Invalid or missing pushServerOpts.type parameter value");
        }
        if (!pushServerOpts.token || typeof pushServerOpts.token !== "string") {
            throw Error("Invalid or missing pushServerOpts.token parameter value");
        }
        const pushSubscription = {
            bridge: this.bridge,
            topic: this.clientId,
            type: pushServerOpts.type,
            token: pushServerOpts.token,
            peerName: "",
            language: pushServerOpts.language || "",
        };
        this.on("connect", async (error, payload) => {
            if (error) {
                throw error;
            }
            if (pushServerOpts.peerMeta) {
                const peerName = payload.params[0].peerMeta.name;
                pushSubscription.peerName = peerName;
            }
            try {
                const response = await fetch(`${pushServerOpts.url}/new`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(pushSubscription),
                });
                const json = await response.json();
                if (!json.success) {
                    throw Error("Failed to register in Push Server");
                }
            }
            catch (error) {
                throw Error("Failed to register in Push Server");
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Connector);
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-client/dist/esm/crypto.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-client/dist/esm/crypto.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decrypt: () => (/* binding */ decrypt),
/* harmony export */   encrypt: () => (/* binding */ encrypt),
/* harmony export */   generateKey: () => (/* binding */ generateKey),
/* harmony export */   verifyHmac: () => (/* binding */ verifyHmac)
/* harmony export */ });
/* harmony import */ var _walletconnect_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/crypto */ "./node_modules/@walletconnect/crypto/dist/esm/browser/index.js");
/* harmony import */ var _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/encoding */ "./node_modules/@walletconnect/encoding/dist/esm/index.js");
/* harmony import */ var _walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @walletconnect/legacy-utils */ "./node_modules/@walletconnect/legacy-utils/dist/esm/index.js");



async function generateKey(length) {
    const _length = (length || 256) / 8;
    const bytes = _walletconnect_crypto__WEBPACK_IMPORTED_MODULE_0__.randomBytes(_length);
    const result = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_2__.convertBufferToArrayBuffer)(_walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.arrayToBuffer(bytes));
    return result;
}
async function verifyHmac(payload, key) {
    const cipherText = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.hexToArray(payload.data);
    const iv = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.hexToArray(payload.iv);
    const hmac = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.hexToArray(payload.hmac);
    const hmacHex = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.arrayToHex(hmac, false);
    const unsigned = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.concatArrays(cipherText, iv);
    const chmac = await _walletconnect_crypto__WEBPACK_IMPORTED_MODULE_0__.hmacSha256Sign(key, unsigned);
    const chmacHex = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.arrayToHex(chmac, false);
    if (_walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.removeHexPrefix(hmacHex) === _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.removeHexPrefix(chmacHex)) {
        return true;
    }
    return false;
}
async function encrypt(data, key, providedIv) {
    const _key = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.bufferToArray((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_2__.convertArrayBufferToBuffer)(key));
    const ivArrayBuffer = providedIv || (await generateKey(128));
    const iv = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.bufferToArray((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_2__.convertArrayBufferToBuffer)(ivArrayBuffer));
    const ivHex = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.arrayToHex(iv, false);
    const contentString = JSON.stringify(data);
    const content = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.utf8ToArray(contentString);
    const cipherText = await _walletconnect_crypto__WEBPACK_IMPORTED_MODULE_0__.aesCbcEncrypt(iv, _key, content);
    const cipherTextHex = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.arrayToHex(cipherText, false);
    const unsigned = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.concatArrays(cipherText, iv);
    const hmac = await _walletconnect_crypto__WEBPACK_IMPORTED_MODULE_0__.hmacSha256Sign(_key, unsigned);
    const hmacHex = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.arrayToHex(hmac, false);
    return {
        data: cipherTextHex,
        hmac: hmacHex,
        iv: ivHex,
    };
}
async function decrypt(payload, key) {
    const _key = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.bufferToArray((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_2__.convertArrayBufferToBuffer)(key));
    if (!_key) {
        throw new Error("Missing key: required for decryption");
    }
    const verified = await verifyHmac(payload, _key);
    if (!verified) {
        return null;
    }
    const cipherText = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.hexToArray(payload.data);
    const iv = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.hexToArray(payload.iv);
    const buffer = await _walletconnect_crypto__WEBPACK_IMPORTED_MODULE_0__.aesCbcDecrypt(iv, _key, cipherText);
    const utf8 = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.arrayToUtf8(buffer);
    let data;
    try {
        data = JSON.parse(utf8);
    }
    catch (error) {
        return null;
    }
    return data;
}
//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-client/dist/esm/events.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-client/dist/esm/events.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/legacy-utils */ "./node_modules/@walletconnect/legacy-utils/dist/esm/index.js");

class EventManager {
    constructor() {
        this._eventEmitters = [];
    }
    subscribe(eventEmitter) {
        this._eventEmitters.push(eventEmitter);
    }
    unsubscribe(event) {
        this._eventEmitters = this._eventEmitters.filter(x => x.event !== event);
    }
    trigger(payload) {
        let eventEmitters = [];
        let event;
        if ((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.isJsonRpcRequest)(payload)) {
            event = payload.method;
        }
        else if ((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.isJsonRpcResponseSuccess)(payload) || (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.isJsonRpcResponseError)(payload)) {
            event = `response:${payload.id}`;
        }
        else if ((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.isInternalEvent)(payload)) {
            event = payload.event;
        }
        else {
            event = "";
        }
        if (event) {
            eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === event);
        }
        if ((!eventEmitters || !eventEmitters.length) &&
            !(0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.isReservedEvent)(event) &&
            !(0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.isInternalEvent)(event)) {
            eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === "call_request");
        }
        eventEmitters.forEach((eventEmitter) => {
            if ((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.isJsonRpcResponseError)(payload)) {
                const error = new Error(payload.error.message);
                eventEmitter.callback(error, null);
            }
            else {
                eventEmitter.callback(null, payload);
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventManager);
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-client/dist/esm/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-client/dist/esm/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/@walletconnect/legacy-client/dist/esm/core.js");
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crypto */ "./node_modules/@walletconnect/legacy-client/dist/esm/crypto.js");


class WalletConnect extends _core__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(connectorOpts, pushServerOpts) {
        super({
            cryptoLib: _crypto__WEBPACK_IMPORTED_MODULE_1__,
            connectorOpts,
            pushServerOpts,
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletConnect);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-client/dist/esm/network.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-client/dist/esm/network.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class NetworkMonitor {
    constructor() {
        this._eventEmitters = [];
        if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
            window.addEventListener("online", () => this.trigger("online"));
            window.addEventListener("offline", () => this.trigger("offline"));
        }
    }
    on(event, callback) {
        this._eventEmitters.push({
            event,
            callback,
        });
    }
    trigger(event) {
        let eventEmitters = [];
        if (event) {
            eventEmitters = this._eventEmitters.filter((eventEmitter) => eventEmitter.event === event);
        }
        eventEmitters.forEach((eventEmitter) => {
            eventEmitter.callback();
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NetworkMonitor);
//# sourceMappingURL=network.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-client/dist/esm/socket.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-client/dist/esm/socket.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/legacy-utils */ "./node_modules/@walletconnect/legacy-utils/dist/esm/index.js");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network */ "./node_modules/@walletconnect/legacy-client/dist/esm/network.js");


const WS = typeof __webpack_require__.g.WebSocket !== "undefined" ? __webpack_require__.g.WebSocket : __webpack_require__(/*! ws */ "./node_modules/ws/browser.js");
class SocketTransport {
    constructor(opts) {
        this.opts = opts;
        this._queue = [];
        this._events = [];
        this._subscriptions = [];
        this._protocol = opts.protocol;
        this._version = opts.version;
        this._url = "";
        this._netMonitor = null;
        this._socket = null;
        this._nextSocket = null;
        this._subscriptions = opts.subscriptions || [];
        this._netMonitor = opts.netMonitor || new _network__WEBPACK_IMPORTED_MODULE_1__["default"]();
        if (!opts.url || typeof opts.url !== "string") {
            throw new Error("Missing or invalid WebSocket url");
        }
        this._url = opts.url;
        this._netMonitor.on("online", () => this._socketCreate());
    }
    set readyState(value) {
    }
    get readyState() {
        return this._socket ? this._socket.readyState : -1;
    }
    set connecting(value) {
    }
    get connecting() {
        return this.readyState === 0;
    }
    set connected(value) {
    }
    get connected() {
        return this.readyState === 1;
    }
    set closing(value) {
    }
    get closing() {
        return this.readyState === 2;
    }
    set closed(value) {
    }
    get closed() {
        return this.readyState === 3;
    }
    open() {
        this._socketCreate();
    }
    close() {
        this._socketClose();
    }
    send(message, topic, silent) {
        if (!topic || typeof topic !== "string") {
            throw new Error("Missing or invalid topic field");
        }
        this._socketSend({
            topic: topic,
            type: "pub",
            payload: message,
            silent: !!silent,
        });
    }
    subscribe(topic) {
        this._socketSend({
            topic: topic,
            type: "sub",
            payload: "",
            silent: true,
        });
    }
    on(event, callback) {
        this._events.push({ event, callback });
    }
    _socketCreate() {
        if (this._nextSocket) {
            return;
        }
        const url = getWebSocketUrl(this._url, this._protocol, this._version);
        this._nextSocket = new WS(url);
        if (!this._nextSocket) {
            throw new Error("Failed to create socket");
        }
        this._nextSocket.onmessage = (event) => this._socketReceive(event);
        this._nextSocket.onopen = () => this._socketOpen();
        this._nextSocket.onerror = (event) => this._socketError(event);
        this._nextSocket.onclose = () => {
            setTimeout(() => {
                this._nextSocket = null;
                this._socketCreate();
            }, 1000);
        };
    }
    _socketOpen() {
        this._socketClose();
        this._socket = this._nextSocket;
        this._nextSocket = null;
        this._queueSubscriptions();
        this._pushQueue();
    }
    _socketClose() {
        if (this._socket) {
            this._socket.onclose = () => {
            };
            this._socket.close();
        }
    }
    _socketSend(socketMessage) {
        const message = JSON.stringify(socketMessage);
        if (this._socket && this._socket.readyState === 1) {
            this._socket.send(message);
        }
        else {
            this._setToQueue(socketMessage);
            this._socketCreate();
        }
    }
    async _socketReceive(event) {
        let socketMessage;
        try {
            socketMessage = JSON.parse(event.data);
        }
        catch (error) {
            return;
        }
        this._socketSend({
            topic: socketMessage.topic,
            type: "ack",
            payload: "",
            silent: true,
        });
        if (this._socket && this._socket.readyState === 1) {
            const events = this._events.filter(event => event.event === "message");
            if (events && events.length) {
                events.forEach(event => event.callback(socketMessage));
            }
        }
    }
    _socketError(e) {
        const events = this._events.filter(event => event.event === "error");
        if (events && events.length) {
            events.forEach(event => event.callback(e));
        }
    }
    _queueSubscriptions() {
        const subscriptions = this._subscriptions;
        subscriptions.forEach((topic) => this._queue.push({
            topic: topic,
            type: "sub",
            payload: "",
            silent: true,
        }));
        this._subscriptions = this.opts.subscriptions || [];
    }
    _setToQueue(socketMessage) {
        this._queue.push(socketMessage);
    }
    _pushQueue() {
        const queue = this._queue;
        queue.forEach((socketMessage) => this._socketSend(socketMessage));
        this._queue = [];
    }
}
function getWebSocketUrl(_url, protocol, version) {
    var _a, _b;
    const url = _url.startsWith("https")
        ? _url.replace("https", "wss")
        : _url.startsWith("http")
            ? _url.replace("http", "ws")
            : _url;
    const splitUrl = url.split("?");
    const params = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.isBrowser)()
        ? {
            protocol,
            version,
            env: "browser",
            host: ((_a = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.getLocation)()) === null || _a === void 0 ? void 0 : _a.host) || "",
        }
        : {
            protocol,
            version,
            env: ((_b = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.detectEnv)()) === null || _b === void 0 ? void 0 : _b.name) || "",
        };
    const queryString = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.appendToQueryString)((0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.getQueryString)(splitUrl[1] || ""), params);
    return splitUrl[0] + "?" + queryString;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketTransport);
//# sourceMappingURL=socket.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-client/dist/esm/storage.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-client/dist/esm/storage.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/legacy-utils */ "./node_modules/@walletconnect/legacy-utils/dist/esm/index.js");

class SessionStorage {
    constructor(storageId = "walletconnect") {
        this.storageId = storageId;
    }
    getSession() {
        let session = null;
        const json = (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.getLocal)(this.storageId);
        if (json && (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.isWalletConnectSession)(json)) {
            session = json;
        }
        return session;
    }
    setSession(session) {
        (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.setLocal)(this.storageId, session);
        return session;
    }
    removeSession() {
        (0,_walletconnect_legacy_utils__WEBPACK_IMPORTED_MODULE_0__.removeLocal)(this.storageId);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SessionStorage);
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-client/dist/esm/url.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-client/dist/esm/url.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractHostname: () => (/* binding */ extractHostname),
/* harmony export */   extractRootDomain: () => (/* binding */ extractRootDomain),
/* harmony export */   getBridgeUrl: () => (/* binding */ getBridgeUrl),
/* harmony export */   randomBridgeIndex: () => (/* binding */ randomBridgeIndex),
/* harmony export */   selectRandomBridgeUrl: () => (/* binding */ selectRandomBridgeUrl),
/* harmony export */   shouldSelectRandomly: () => (/* binding */ shouldSelectRandomly)
/* harmony export */ });
const domain = "walletconnect.org";
const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
const bridges = alphanumerical.split("").map(char => `https://${char}.bridge.walletconnect.org`);
function extractHostname(url) {
    let hostname = url.indexOf("//") > -1 ? url.split("/")[2] : url.split("/")[0];
    hostname = hostname.split(":")[0];
    hostname = hostname.split("?")[0];
    return hostname;
}
function extractRootDomain(url) {
    return extractHostname(url)
        .split(".")
        .slice(-2)
        .join(".");
}
function randomBridgeIndex() {
    return Math.floor(Math.random() * bridges.length);
}
function selectRandomBridgeUrl() {
    return bridges[randomBridgeIndex()];
}
function shouldSelectRandomly(url) {
    return extractRootDomain(url) === domain;
}
function getBridgeUrl(url) {
    if (shouldSelectRandomly(url)) {
        return selectRandomBridgeUrl();
    }
    return url;
}
//# sourceMappingURL=url.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-modal/dist/cjs/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-modal/dist/cjs/index.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var legacyUtils = __webpack_require__(/*! @walletconnect/legacy-utils */ "./node_modules/@walletconnect/legacy-utils/dist/esm/index.js");
var QRCode = _interopDefault(__webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js"));
var copy = _interopDefault(__webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js"));
var React = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");

function open(uri) {
  QRCode.toString(uri, {
    type: "terminal"
  }).then(console.log);
}

var WALLETCONNECT_STYLE_SHEET = ":root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, \"SF Pro Rounded\", \"SF Pro Text\", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell,\n    \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url(\"images/wc-logo.svg\") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n";

// A type of promise-like that resolves synchronously and supports only one observer
var _iteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
var _asyncIteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }
  if (result && result.then) {
    return result.then(void 0, recover);
  }
  return result;
}

var WALLETCONNECT_LOGO_SVG_URL = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E";

var WALLETCONNECT_HEADER_TEXT = "WalletConnect";
var ANIMATION_DURATION = 300;
var DEFAULT_BUTTON_COLOR = "rgb(64, 153, 255)";
var WALLETCONNECT_WRAPPER_ID = "walletconnect-wrapper";
var WALLETCONNECT_STYLE_ID = "walletconnect-style-sheet";
var WALLETCONNECT_MODAL_ID = "walletconnect-qrcode-modal";
var WALLETCONNECT_CLOSE_BUTTON_ID = "walletconnect-qrcode-close";
var WALLETCONNECT_CTA_TEXT_ID = "walletconnect-qrcode-text";
var WALLETCONNECT_CONNECT_BUTTON_ID = "walletconnect-connect-button";

function Header(props) {
  return React.createElement("div", {
    className: "walletconnect-modal__header"
  }, React.createElement("img", {
    src: WALLETCONNECT_LOGO_SVG_URL,
    className: "walletconnect-modal__headerLogo"
  }), React.createElement("p", null, WALLETCONNECT_HEADER_TEXT), React.createElement("div", {
    className: "walletconnect-modal__close__wrapper",
    onClick: props.onClose
  }, React.createElement("div", {
    id: WALLETCONNECT_CLOSE_BUTTON_ID,
    className: "walletconnect-modal__close__icon"
  }, React.createElement("div", {
    className: "walletconnect-modal__close__line1"
  }), React.createElement("div", {
    className: "walletconnect-modal__close__line2"
  }))));
}

function ConnectButton(props) {
  return React.createElement("a", {
    className: "walletconnect-connect__button",
    href: props.href,
    id: (WALLETCONNECT_CONNECT_BUTTON_ID + "-" + (props.name)),
    onClick: props.onClick,
    rel: "noopener noreferrer",
    style: {
      backgroundColor: props.color
    },
    target: "_blank"
  }, props.name);
}

var CARET_SVG_URL = "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";

function WalletButton(props) {
  var color = props.color;
  var href = props.href;
  var name = props.name;
  var logo = props.logo;
  var onClick = props.onClick;
  return React.createElement("a", {
    className: "walletconnect-modal__base__row",
    href: href,
    onClick: onClick,
    rel: "noopener noreferrer",
    target: "_blank"
  }, React.createElement("h3", {
    className: "walletconnect-modal__base__row__h3"
  }, name), React.createElement("div", {
    className: "walletconnect-modal__base__row__right"
  }, React.createElement("div", {
    className: "walletconnect-modal__base__row__right__app-icon",
    style: {
      background: ("url('" + logo + "') " + color),
      backgroundSize: "100%"
    }
  }), React.createElement("img", {
    src: CARET_SVG_URL,
    className: "walletconnect-modal__base__row__right__caret"
  })));
}

function WalletIcon(props) {
  var color = props.color;
  var href = props.href;
  var name = props.name;
  var logo = props.logo;
  var onClick = props.onClick;
  var fontSize = window.innerWidth < 768 ? ((name.length > 8 ? 2.5 : 2.7) + "vw") : "inherit";
  return React.createElement("a", {
    className: "walletconnect-connect__button__icon_anchor",
    href: href,
    onClick: onClick,
    rel: "noopener noreferrer",
    target: "_blank"
  }, React.createElement("div", {
    className: "walletconnect-connect__button__icon",
    style: {
      background: ("url('" + logo + "') " + color),
      backgroundSize: "100%"
    }
  }), React.createElement("div", {
    style: {
      fontSize: fontSize
    },
    className: "walletconnect-connect__button__text"
  }, name));
}

var GRID_MIN_COUNT = 5;
var LINKS_PER_PAGE = 12;
function LinkDisplay(props) {
  var android = legacyUtils.isAndroid();
  var ref = React.useState("");
  var input = ref[0];
  var setInput = ref[1];
  var ref$1 = React.useState("");
  var filter = ref$1[0];
  var setFilter = ref$1[1];
  var ref$2 = React.useState(1);
  var page = ref$2[0];
  var setPage = ref$2[1];
  var links = filter ? props.links.filter(function (link) { return link.name.toLowerCase().includes(filter.toLowerCase()); }) : props.links;
  var errorMessage = props.errorMessage;
  var grid = filter || links.length > GRID_MIN_COUNT;
  var pages = Math.ceil(links.length / LINKS_PER_PAGE);
  var range = [(page - 1) * LINKS_PER_PAGE + 1, page * LINKS_PER_PAGE];
  var pageLinks = links.length ? links.filter(function (_, index) { return index + 1 >= range[0] && index + 1 <= range[1]; }) : [];
  var hasPaging = !!(!android && pages > 1);
  var filterTimeout = undefined;
  function handleInput(e) {
    setInput(e.target.value);
    clearTimeout(filterTimeout);
    if (e.target.value) {
      filterTimeout = setTimeout(function () {
        setFilter(e.target.value);
        setPage(1);
      }, 1000);
    } else {
      setInput("");
      setFilter("");
      setPage(1);
    }
  }
  return React.createElement("div", null, React.createElement("p", {
    id: WALLETCONNECT_CTA_TEXT_ID,
    className: "walletconnect-qrcode__text"
  }, android ? props.text.connect_mobile_wallet : props.text.choose_preferred_wallet), !android && React.createElement("input", {
    className: "walletconnect-search__input",
    placeholder: "Search",
    value: input,
    onChange: handleInput
  }), React.createElement("div", {
    className: ("walletconnect-connect__buttons__wrapper" + (android ? "__android" : grid && links.length ? "__wrap" : ""))
  }, !android ? pageLinks.length ? pageLinks.map(function (entry) {
    var color = entry.color;
    var name = entry.name;
    var shortName = entry.shortName;
    var logo = entry.logo;
    var href = legacyUtils.formatIOSMobile(props.uri, entry);
    var handleClickIOS = React.useCallback(function () {
      legacyUtils.saveMobileLinkInfo({
        name: name,
        href: href
      });
    }, [pageLinks]);
    return !grid ? React.createElement(WalletButton, {
      color: color,
      href: href,
      name: name,
      logo: logo,
      onClick: handleClickIOS
    }) : React.createElement(WalletIcon, {
      color: color,
      href: href,
      name: shortName || name,
      logo: logo,
      onClick: handleClickIOS
    });
  }) : React.createElement(React.Fragment, null, React.createElement("p", null, errorMessage.length ? props.errorMessage : !!props.links.length && !links.length ? props.text.no_wallets_found : props.text.loading)) : React.createElement(ConnectButton, {
    name: props.text.connect,
    color: DEFAULT_BUTTON_COLOR,
    href: props.uri,
    onClick: React.useCallback(function () {
      legacyUtils.saveMobileLinkInfo({
        name: "Unknown",
        href: props.uri
      });
    }, [])
  })), hasPaging && React.createElement("div", {
    className: "walletconnect-modal__footer"
  }, Array(pages).fill(0).map(function (_, index) {
    var pageNumber = index + 1;
    var selected = page === pageNumber;
    return React.createElement("a", {
      style: {
        margin: "auto 10px",
        fontWeight: selected ? "bold" : "normal"
      },
      onClick: function () { return setPage(pageNumber); }
    }, pageNumber);
  })));
}

function Notification(props) {
  var show = !!props.message.trim();
  return React.createElement("div", {
    className: ("walletconnect-qrcode__notification" + (show ? " notification__show" : ""))
  }, props.message);
}

var formatQRCodeImage = function (data) {
  try {
    var result = "";
    return Promise.resolve(QRCode.toString(data, {
      margin: 0,
      type: "svg"
    })).then(function (dataString) {
      if (typeof dataString === "string") {
        result = dataString.replace("<svg", "<svg class=\"walletconnect-qrcode__image\"");
      }
      return result;
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
function QRCodeDisplay(props) {
  var ref = React.useState("");
  var notification = ref[0];
  var setNotification = ref[1];
  var ref$1 = React.useState("");
  var svg = ref$1[0];
  var setSvg = ref$1[1];
  React.useEffect(function () {
    try {
      return Promise.resolve(formatQRCodeImage(props.uri)).then(function (_formatQRCodeImage) {
        setSvg(_formatQRCodeImage);
      });
    } catch (e) {
      Promise.reject(e);
    }
  }, []);
  var copyToClipboard = function () {
    var success = copy(props.uri);
    if (success) {
      setNotification(props.text.copied_to_clipboard);
      setInterval(function () { return setNotification(""); }, 1200);
    } else {
      setNotification("Error");
      setInterval(function () { return setNotification(""); }, 1200);
    }
  };
  return React.createElement("div", null, React.createElement("p", {
    id: WALLETCONNECT_CTA_TEXT_ID,
    className: "walletconnect-qrcode__text"
  }, props.text.scan_qrcode_with_wallet), React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: svg
    }
  }), React.createElement("div", {
    className: "walletconnect-modal__footer"
  }, React.createElement("a", {
    onClick: copyToClipboard
  }, props.text.copy_to_clipboard)), React.createElement(Notification, {
    message: notification
  }));
}

function Modal(props) {
  var android = legacyUtils.isAndroid();
  var mobile = legacyUtils.isMobile();
  var whitelist = mobile ? props.qrcodeModalOptions && props.qrcodeModalOptions.mobileLinks ? props.qrcodeModalOptions.mobileLinks : undefined : props.qrcodeModalOptions && props.qrcodeModalOptions.desktopLinks ? props.qrcodeModalOptions.desktopLinks : undefined;
  var ref = React.useState(false);
  var loading = ref[0];
  var setLoading = ref[1];
  var ref$1 = React.useState(false);
  var fetched = ref$1[0];
  var setFetched = ref$1[1];
  var ref$2 = React.useState(!mobile);
  var displayQRCode = ref$2[0];
  var setDisplayQRCode = ref$2[1];
  var displayProps = {
    mobile: mobile,
    text: props.text,
    uri: props.uri,
    qrcodeModalOptions: props.qrcodeModalOptions
  };
  var ref$3 = React.useState("");
  var singleLinkHref = ref$3[0];
  var setSingleLinkHref = ref$3[1];
  var ref$4 = React.useState(false);
  var hasSingleLink = ref$4[0];
  var setHasSingleLink = ref$4[1];
  var ref$5 = React.useState([]);
  var links = ref$5[0];
  var setLinks = ref$5[1];
  var ref$6 = React.useState("");
  var errorMessage = ref$6[0];
  var setErrorMessage = ref$6[1];
  var getLinksIfNeeded = function () {
    if (fetched || loading || whitelist && !whitelist.length || links.length > 0) {
      return;
    }
    React.useEffect(function () {
      var initLinks = function () {
        try {
          if (android) { return Promise.resolve(); }
          setLoading(true);
          var _temp = _catch(function () {
            var url = props.qrcodeModalOptions && props.qrcodeModalOptions.registryUrl ? props.qrcodeModalOptions.registryUrl : legacyUtils.getWalletRegistryUrl();
            return Promise.resolve(fetch(url)).then(function (registryResponse) {
              return Promise.resolve(registryResponse.json()).then(function (_registryResponse$jso) {
                var registry = _registryResponse$jso.listings;
                var platform = mobile ? "mobile" : "desktop";
                var _links = legacyUtils.getMobileLinkRegistry(legacyUtils.formatMobileRegistry(registry, platform), whitelist);
                setLoading(false);
                setFetched(true);
                setErrorMessage(!_links.length ? props.text.no_supported_wallets : "");
                setLinks(_links);
                var hasSingleLink = _links.length === 1;
                if (hasSingleLink) {
                  setSingleLinkHref(legacyUtils.formatIOSMobile(props.uri, _links[0]));
                  setDisplayQRCode(true);
                }
                setHasSingleLink(hasSingleLink);
              });
            });
          }, function (e) {
            setLoading(false);
            setFetched(true);
            setErrorMessage(props.text.something_went_wrong);
            console.error(e);
          });
          return Promise.resolve(_temp && _temp.then ? _temp.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      initLinks();
    });
  };
  getLinksIfNeeded();
  var rightSelected = mobile ? displayQRCode : !displayQRCode;
  return React.createElement("div", {
    id: WALLETCONNECT_MODAL_ID,
    className: "walletconnect-qrcode__base animated fadeIn"
  }, React.createElement("div", {
    className: "walletconnect-modal__base"
  }, React.createElement(Header, {
    onClose: props.onClose
  }), hasSingleLink && displayQRCode ? React.createElement("div", {
    className: "walletconnect-modal__single_wallet"
  }, React.createElement("a", {
    onClick: function () { return legacyUtils.saveMobileLinkInfo({
      name: links[0].name,
      href: singleLinkHref
    }); },
    href: singleLinkHref,
    rel: "noopener noreferrer",
    target: "_blank"
  }, props.text.connect_with + " " + (hasSingleLink ? links[0].name : "") + " ›")) : android || loading || !loading && links.length ? React.createElement("div", {
    className: ("walletconnect-modal__mobile__toggle" + (rightSelected ? " right__selected" : ""))
  }, React.createElement("div", {
    className: "walletconnect-modal__mobile__toggle_selector"
  }), mobile ? React.createElement(React.Fragment, null, React.createElement("a", {
    onClick: function () { return (setDisplayQRCode(false), getLinksIfNeeded()); }
  }, props.text.mobile), React.createElement("a", {
    onClick: function () { return setDisplayQRCode(true); }
  }, props.text.qrcode)) : React.createElement(React.Fragment, null, React.createElement("a", {
    onClick: function () { return setDisplayQRCode(true); }
  }, props.text.qrcode), React.createElement("a", {
    onClick: function () { return (setDisplayQRCode(false), getLinksIfNeeded()); }
  }, props.text.desktop))) : null, React.createElement("div", null, displayQRCode || !android && !loading && !links.length ? React.createElement(QRCodeDisplay, Object.assign({}, displayProps)) : React.createElement(LinkDisplay, Object.assign({}, displayProps, {
    links: links,
    errorMessage: errorMessage
  })))));
}

var de = {
  choose_preferred_wallet: "Wähle bevorzugte Wallet",
  connect_mobile_wallet: "Verbinde mit Mobile Wallet",
  scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
  connect: "Verbinden",
  qrcode: "QR-Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "In die Zwischenablage kopieren",
  copied_to_clipboard: "In die Zwischenablage kopiert!",
  connect_with: "Verbinden mit Hilfe von",
  loading: "Laden...",
  something_went_wrong: "Etwas ist schief gelaufen",
  no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
  no_wallets_found: "keine Wallet gefunden"
};

var en = {
  choose_preferred_wallet: "Choose your preferred wallet",
  connect_mobile_wallet: "Connect to Mobile Wallet",
  scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
  connect: "Connect",
  qrcode: "QR Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "Copy to clipboard",
  copied_to_clipboard: "Copied to clipboard!",
  connect_with: "Connect with",
  loading: "Loading...",
  something_went_wrong: "Something went wrong",
  no_supported_wallets: "There are no supported wallets yet",
  no_wallets_found: "No wallets found"
};

var es = {
  choose_preferred_wallet: "Elige tu billetera preferida",
  connect_mobile_wallet: "Conectar a billetera móvil",
  scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
  connect: "Conectar",
  qrcode: "Código QR",
  mobile: "Móvil",
  desktop: "Desktop",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  connect_with: "Conectar mediante",
  loading: "Cargando...",
  something_went_wrong: "Algo salió mal",
  no_supported_wallets: "Todavía no hay billeteras compatibles",
  no_wallets_found: "No se encontraron billeteras"
};

var fr = {
  choose_preferred_wallet: "Choisissez votre portefeuille préféré",
  connect_mobile_wallet: "Se connecter au portefeuille mobile",
  scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
  connect: "Se connecter",
  qrcode: "QR Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "Copier",
  copied_to_clipboard: "Copié!",
  connect_with: "Connectez-vous à l'aide de",
  loading: "Chargement...",
  something_went_wrong: "Quelque chose a mal tourné",
  no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
  no_wallets_found: "Aucun portefeuille trouvé"
};

var ko = {
  choose_preferred_wallet: "원하는 지갑을 선택하세요",
  connect_mobile_wallet: "모바일 지갑과 연결",
  scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
  connect: "연결",
  qrcode: "QR 코드",
  mobile: "모바일",
  desktop: "데스크탑",
  copy_to_clipboard: "클립보드에 복사",
  copied_to_clipboard: "클립보드에 복사되었습니다!",
  connect_with: "와 연결하다",
  loading: "로드 중...",
  something_went_wrong: "문제가 발생했습니다.",
  no_supported_wallets: "아직 지원되는 지갑이 없습니다",
  no_wallets_found: "지갑을 찾을 수 없습니다"
};

var pt = {
  choose_preferred_wallet: "Escolha sua carteira preferida",
  connect_mobile_wallet: "Conectar-se à carteira móvel",
  scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
  connect: "Conectar",
  qrcode: "Código QR",
  mobile: "Móvel",
  desktop: "Desktop",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  connect_with: "Ligar por meio de",
  loading: "Carregamento...",
  something_went_wrong: "Algo correu mal",
  no_supported_wallets: "Ainda não há carteiras suportadas",
  no_wallets_found: "Nenhuma carteira encontrada"
};

var zh = {
  choose_preferred_wallet: "选择你的钱包",
  connect_mobile_wallet: "连接至移动端钱包",
  scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
  connect: "连接",
  qrcode: "二维码",
  mobile: "移动",
  desktop: "桌面",
  copy_to_clipboard: "复制到剪贴板",
  copied_to_clipboard: "复制到剪贴板成功！",
  connect_with: "通过以下方式连接",
  loading: "正在加载...",
  something_went_wrong: "出了问题",
  no_supported_wallets: "目前还没有支持的钱包",
  no_wallets_found: "没有找到钱包"
};

var fa = {
  choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
  connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
  scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
  connect: "اتصال",
  qrcode: "کد QR",
  mobile: "سیار",
  desktop: "دسکتاپ",
  copy_to_clipboard: "کپی به کلیپ بورد",
  copied_to_clipboard: "در کلیپ بورد کپی شد!",
  connect_with: "ارتباط با",
  loading: "...بارگذاری",
  something_went_wrong: "مشکلی پیش آمد",
  no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
  no_wallets_found: "هیچ کیف پولی پیدا نشد"
};

var languages = {
  de: de,
  en: en,
  es: es,
  fr: fr,
  ko: ko,
  pt: pt,
  zh: zh,
  fa: fa
};

function injectStyleSheet() {
  var doc = legacyUtils.getDocumentOrThrow();
  var prev = doc.getElementById(WALLETCONNECT_STYLE_ID);
  if (prev) {
    doc.head.removeChild(prev);
  }
  var style = doc.createElement("style");
  style.setAttribute("id", WALLETCONNECT_STYLE_ID);
  style.innerText = WALLETCONNECT_STYLE_SHEET;
  doc.head.appendChild(style);
}
function renderWrapper() {
  var doc = legacyUtils.getDocumentOrThrow();
  var wrapper = doc.createElement("div");
  wrapper.setAttribute("id", WALLETCONNECT_WRAPPER_ID);
  doc.body.appendChild(wrapper);
  return wrapper;
}
function triggerCloseAnimation() {
  var doc = legacyUtils.getDocumentOrThrow();
  var modal = doc.getElementById(WALLETCONNECT_MODAL_ID);
  if (modal) {
    modal.className = modal.className.replace("fadeIn", "fadeOut");
    setTimeout(function () {
      var wrapper = doc.getElementById(WALLETCONNECT_WRAPPER_ID);
      if (wrapper) {
        doc.body.removeChild(wrapper);
      }
    }, ANIMATION_DURATION);
  }
}
function getWrappedCallback(cb) {
  return function () {
    triggerCloseAnimation();
    if (cb) {
      cb();
    }
  };
}
function getText() {
  var lang = legacyUtils.getNavigatorOrThrow().language.split("-")[0] || "en";
  return languages[lang] || languages["en"];
}
function open$1(uri, cb, qrcodeModalOptions) {
  injectStyleSheet();
  var wrapper = renderWrapper();
  React.render(React.createElement(Modal, {
    text: getText(),
    uri: uri,
    onClose: getWrappedCallback(cb),
    qrcodeModalOptions: qrcodeModalOptions
  }), wrapper);
}
function close$1() {
  triggerCloseAnimation();
}

var isNode = function () { return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined"; };
function open$2(uri, cb, qrcodeModalOptions) {
  console.log(uri);
  if (isNode()) {
    open(uri);
  } else {
    open$1(uri, cb, qrcodeModalOptions);
  }
}
function close$2() {
  if (isNode()) ; else {
    close$1();
  }
}
var index = {
  open: open$2,
  close: close$2
};

module.exports = index;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/constants/errors.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/constants/errors.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_INVALID_RESPONSE: () => (/* binding */ ERROR_INVALID_RESPONSE),
/* harmony export */   ERROR_INVALID_URI: () => (/* binding */ ERROR_INVALID_URI),
/* harmony export */   ERROR_MISSING_ERROR: () => (/* binding */ ERROR_MISSING_ERROR),
/* harmony export */   ERROR_MISSING_ID: () => (/* binding */ ERROR_MISSING_ID),
/* harmony export */   ERROR_MISSING_JSON_RPC: () => (/* binding */ ERROR_MISSING_JSON_RPC),
/* harmony export */   ERROR_MISSING_METHOD: () => (/* binding */ ERROR_MISSING_METHOD),
/* harmony export */   ERROR_MISSING_REQUIRED: () => (/* binding */ ERROR_MISSING_REQUIRED),
/* harmony export */   ERROR_MISSING_RESULT: () => (/* binding */ ERROR_MISSING_RESULT),
/* harmony export */   ERROR_QRCODE_MODAL_NOT_PROVIDED: () => (/* binding */ ERROR_QRCODE_MODAL_NOT_PROVIDED),
/* harmony export */   ERROR_QRCODE_MODAL_USER_CLOSED: () => (/* binding */ ERROR_QRCODE_MODAL_USER_CLOSED),
/* harmony export */   ERROR_SESSION_CONNECTED: () => (/* binding */ ERROR_SESSION_CONNECTED),
/* harmony export */   ERROR_SESSION_DISCONNECTED: () => (/* binding */ ERROR_SESSION_DISCONNECTED),
/* harmony export */   ERROR_SESSION_REJECTED: () => (/* binding */ ERROR_SESSION_REJECTED)
/* harmony export */ });
const ERROR_SESSION_CONNECTED = "Session currently connected";
const ERROR_SESSION_DISCONNECTED = "Session currently disconnected";
const ERROR_SESSION_REJECTED = "Session Rejected";
const ERROR_MISSING_JSON_RPC = "Missing JSON RPC response";
const ERROR_MISSING_RESULT = `JSON-RPC success response must include "result" field`;
const ERROR_MISSING_ERROR = `JSON-RPC error response must include "error" field`;
const ERROR_MISSING_METHOD = `JSON RPC request must have valid "method" value`;
const ERROR_MISSING_ID = `JSON RPC request must have valid "id" value`;
const ERROR_MISSING_REQUIRED = "Missing one of the required parameters: bridge / uri / session";
const ERROR_INVALID_RESPONSE = "JSON RPC response format is invalid";
const ERROR_INVALID_URI = "URI format is invalid";
const ERROR_QRCODE_MODAL_NOT_PROVIDED = "QRCode Modal not provided";
const ERROR_QRCODE_MODAL_USER_CLOSED = "User close QRCode Modal";
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/constants/events.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/constants/events.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RESERVED_EVENTS: () => (/* binding */ RESERVED_EVENTS),
/* harmony export */   reservedEvents: () => (/* binding */ reservedEvents)
/* harmony export */ });
const RESERVED_EVENTS = [
    "session_request",
    "session_update",
    "exchange_key",
    "connect",
    "disconnect",
    "display_uri",
    "modal_closed",
    "transport_open",
    "transport_close",
    "transport_error",
];
const reservedEvents = RESERVED_EVENTS;
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/constants/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/constants/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_INVALID_RESPONSE: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_INVALID_RESPONSE),
/* harmony export */   ERROR_INVALID_URI: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_INVALID_URI),
/* harmony export */   ERROR_MISSING_ERROR: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_MISSING_ERROR),
/* harmony export */   ERROR_MISSING_ID: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_MISSING_ID),
/* harmony export */   ERROR_MISSING_JSON_RPC: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_MISSING_JSON_RPC),
/* harmony export */   ERROR_MISSING_METHOD: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_MISSING_METHOD),
/* harmony export */   ERROR_MISSING_REQUIRED: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_MISSING_REQUIRED),
/* harmony export */   ERROR_MISSING_RESULT: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_MISSING_RESULT),
/* harmony export */   ERROR_QRCODE_MODAL_NOT_PROVIDED: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_QRCODE_MODAL_NOT_PROVIDED),
/* harmony export */   ERROR_QRCODE_MODAL_USER_CLOSED: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_QRCODE_MODAL_USER_CLOSED),
/* harmony export */   ERROR_SESSION_CONNECTED: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_CONNECTED),
/* harmony export */   ERROR_SESSION_DISCONNECTED: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_DISCONNECTED),
/* harmony export */   ERROR_SESSION_REJECTED: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_SESSION_REJECTED),
/* harmony export */   INFURA_NETWORKS: () => (/* reexport safe */ _networks__WEBPACK_IMPORTED_MODULE_4__.INFURA_NETWORKS),
/* harmony export */   MOBILE_LINK_CHOICE_KEY: () => (/* reexport safe */ _mobile__WEBPACK_IMPORTED_MODULE_3__.MOBILE_LINK_CHOICE_KEY),
/* harmony export */   RESERVED_EVENTS: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_1__.RESERVED_EVENTS),
/* harmony export */   SIGNING_METHODS: () => (/* reexport safe */ _jsonrpc__WEBPACK_IMPORTED_MODULE_2__.SIGNING_METHODS),
/* harmony export */   STATE_METHODS: () => (/* reexport safe */ _jsonrpc__WEBPACK_IMPORTED_MODULE_2__.STATE_METHODS),
/* harmony export */   WALLET_METHODS: () => (/* reexport safe */ _jsonrpc__WEBPACK_IMPORTED_MODULE_2__.WALLET_METHODS),
/* harmony export */   infuraNetworks: () => (/* reexport safe */ _networks__WEBPACK_IMPORTED_MODULE_4__.infuraNetworks),
/* harmony export */   mobileLinkChoiceKey: () => (/* reexport safe */ _mobile__WEBPACK_IMPORTED_MODULE_3__.mobileLinkChoiceKey),
/* harmony export */   reservedEvents: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_1__.reservedEvents),
/* harmony export */   signingMethods: () => (/* reexport safe */ _jsonrpc__WEBPACK_IMPORTED_MODULE_2__.signingMethods),
/* harmony export */   stateMethods: () => (/* reexport safe */ _jsonrpc__WEBPACK_IMPORTED_MODULE_2__.stateMethods)
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./node_modules/@walletconnect/legacy-types/dist/esm/constants/errors.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./node_modules/@walletconnect/legacy-types/dist/esm/constants/events.js");
/* harmony import */ var _jsonrpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsonrpc */ "./node_modules/@walletconnect/legacy-types/dist/esm/constants/jsonrpc.js");
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile */ "./node_modules/@walletconnect/legacy-types/dist/esm/constants/mobile.js");
/* harmony import */ var _networks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./networks */ "./node_modules/@walletconnect/legacy-types/dist/esm/constants/networks.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/constants/jsonrpc.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/constants/jsonrpc.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SIGNING_METHODS: () => (/* binding */ SIGNING_METHODS),
/* harmony export */   STATE_METHODS: () => (/* binding */ STATE_METHODS),
/* harmony export */   WALLET_METHODS: () => (/* binding */ WALLET_METHODS),
/* harmony export */   signingMethods: () => (/* binding */ signingMethods),
/* harmony export */   stateMethods: () => (/* binding */ stateMethods)
/* harmony export */ });
const WALLET_METHODS = [
    "wallet_addEthereumChain",
    "wallet_switchEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
];
const SIGNING_METHODS = [
    "eth_sendTransaction",
    "eth_signTransaction",
    "eth_sign",
    "eth_signTypedData",
    "eth_signTypedData_v1",
    "eth_signTypedData_v2",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "personal_sign",
    ...WALLET_METHODS,
];
const STATE_METHODS = ["eth_accounts", "eth_chainId", "net_version"];
const signingMethods = SIGNING_METHODS;
const stateMethods = STATE_METHODS;
//# sourceMappingURL=jsonrpc.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/constants/mobile.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/constants/mobile.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOBILE_LINK_CHOICE_KEY: () => (/* binding */ MOBILE_LINK_CHOICE_KEY),
/* harmony export */   mobileLinkChoiceKey: () => (/* binding */ mobileLinkChoiceKey)
/* harmony export */ });
const MOBILE_LINK_CHOICE_KEY = "WALLETCONNECT_DEEPLINK_CHOICE";
const mobileLinkChoiceKey = MOBILE_LINK_CHOICE_KEY;
//# sourceMappingURL=mobile.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/constants/networks.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/constants/networks.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INFURA_NETWORKS: () => (/* binding */ INFURA_NETWORKS),
/* harmony export */   infuraNetworks: () => (/* binding */ infuraNetworks)
/* harmony export */ });
const INFURA_NETWORKS = {
    1: "mainnet",
    3: "ropsten",
    4: "rinkeby",
    5: "goerli",
    42: "kovan",
};
const infuraNetworks = INFURA_NETWORKS;
//# sourceMappingURL=networks.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/crypto.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/crypto.js ***!
  \*********************************************************************/
/***/ (() => {

//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/ethereum.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/ethereum.js ***!
  \***********************************************************************/
/***/ (() => {

//# sourceMappingURL=ethereum.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/events.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/events.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IEvents: () => (/* binding */ IEvents)
/* harmony export */ });
class IEvents {
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_INVALID_RESPONSE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_INVALID_RESPONSE),
/* harmony export */   ERROR_INVALID_URI: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_INVALID_URI),
/* harmony export */   ERROR_MISSING_ERROR: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MISSING_ERROR),
/* harmony export */   ERROR_MISSING_ID: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MISSING_ID),
/* harmony export */   ERROR_MISSING_JSON_RPC: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MISSING_JSON_RPC),
/* harmony export */   ERROR_MISSING_METHOD: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MISSING_METHOD),
/* harmony export */   ERROR_MISSING_REQUIRED: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MISSING_REQUIRED),
/* harmony export */   ERROR_MISSING_RESULT: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MISSING_RESULT),
/* harmony export */   ERROR_QRCODE_MODAL_NOT_PROVIDED: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_QRCODE_MODAL_NOT_PROVIDED),
/* harmony export */   ERROR_QRCODE_MODAL_USER_CLOSED: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_QRCODE_MODAL_USER_CLOSED),
/* harmony export */   ERROR_SESSION_CONNECTED: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_SESSION_CONNECTED),
/* harmony export */   ERROR_SESSION_DISCONNECTED: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_SESSION_DISCONNECTED),
/* harmony export */   ERROR_SESSION_REJECTED: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_SESSION_REJECTED),
/* harmony export */   IEvents: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_3__.IEvents),
/* harmony export */   INFURA_NETWORKS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.INFURA_NETWORKS),
/* harmony export */   MOBILE_LINK_CHOICE_KEY: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.MOBILE_LINK_CHOICE_KEY),
/* harmony export */   RESERVED_EVENTS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.RESERVED_EVENTS),
/* harmony export */   SIGNING_METHODS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.SIGNING_METHODS),
/* harmony export */   STATE_METHODS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.STATE_METHODS),
/* harmony export */   WALLET_METHODS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.WALLET_METHODS),
/* harmony export */   infuraNetworks: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.infuraNetworks),
/* harmony export */   mobileLinkChoiceKey: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.mobileLinkChoiceKey),
/* harmony export */   reservedEvents: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.reservedEvents),
/* harmony export */   signingMethods: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.signingMethods),
/* harmony export */   stateMethods: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.stateMethods)
/* harmony export */ });
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crypto */ "./node_modules/@walletconnect/legacy-types/dist/esm/crypto.js");
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _crypto__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _crypto__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@walletconnect/legacy-types/dist/esm/constants/index.js");
/* harmony import */ var _ethereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ethereum */ "./node_modules/@walletconnect/legacy-types/dist/esm/ethereum.js");
/* harmony import */ var _ethereum__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethereum__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _ethereum__WEBPACK_IMPORTED_MODULE_2__) if(["default","ERROR_INVALID_RESPONSE","ERROR_INVALID_URI","ERROR_MISSING_ERROR","ERROR_MISSING_ID","ERROR_MISSING_JSON_RPC","ERROR_MISSING_METHOD","ERROR_MISSING_REQUIRED","ERROR_MISSING_RESULT","ERROR_QRCODE_MODAL_NOT_PROVIDED","ERROR_QRCODE_MODAL_USER_CLOSED","ERROR_SESSION_CONNECTED","ERROR_SESSION_DISCONNECTED","ERROR_SESSION_REJECTED","INFURA_NETWORKS","MOBILE_LINK_CHOICE_KEY","RESERVED_EVENTS","SIGNING_METHODS","STATE_METHODS","WALLET_METHODS","infuraNetworks","mobileLinkChoiceKey","reservedEvents","signingMethods","stateMethods"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _ethereum__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./node_modules/@walletconnect/legacy-types/dist/esm/events.js");
/* harmony import */ var _jsonrpc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jsonrpc */ "./node_modules/@walletconnect/legacy-types/dist/esm/jsonrpc.js");
/* harmony import */ var _jsonrpc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jsonrpc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _jsonrpc__WEBPACK_IMPORTED_MODULE_4__) if(["default","ERROR_INVALID_RESPONSE","ERROR_INVALID_URI","ERROR_MISSING_ERROR","ERROR_MISSING_ID","ERROR_MISSING_JSON_RPC","ERROR_MISSING_METHOD","ERROR_MISSING_REQUIRED","ERROR_MISSING_RESULT","ERROR_QRCODE_MODAL_NOT_PROVIDED","ERROR_QRCODE_MODAL_USER_CLOSED","ERROR_SESSION_CONNECTED","ERROR_SESSION_DISCONNECTED","ERROR_SESSION_REJECTED","INFURA_NETWORKS","MOBILE_LINK_CHOICE_KEY","RESERVED_EVENTS","SIGNING_METHODS","STATE_METHODS","WALLET_METHODS","infuraNetworks","mobileLinkChoiceKey","reservedEvents","signingMethods","stateMethods","IEvents"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _jsonrpc__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./network */ "./node_modules/@walletconnect/legacy-types/dist/esm/network.js");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_network__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _network__WEBPACK_IMPORTED_MODULE_5__) if(["default","ERROR_INVALID_RESPONSE","ERROR_INVALID_URI","ERROR_MISSING_ERROR","ERROR_MISSING_ID","ERROR_MISSING_JSON_RPC","ERROR_MISSING_METHOD","ERROR_MISSING_REQUIRED","ERROR_MISSING_RESULT","ERROR_QRCODE_MODAL_NOT_PROVIDED","ERROR_QRCODE_MODAL_USER_CLOSED","ERROR_SESSION_CONNECTED","ERROR_SESSION_DISCONNECTED","ERROR_SESSION_REJECTED","INFURA_NETWORKS","MOBILE_LINK_CHOICE_KEY","RESERVED_EVENTS","SIGNING_METHODS","STATE_METHODS","WALLET_METHODS","infuraNetworks","mobileLinkChoiceKey","reservedEvents","signingMethods","stateMethods","IEvents"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _network__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _protocol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./protocol */ "./node_modules/@walletconnect/legacy-types/dist/esm/protocol.js");
/* harmony import */ var _protocol__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_protocol__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _protocol__WEBPACK_IMPORTED_MODULE_6__) if(["default","ERROR_INVALID_RESPONSE","ERROR_INVALID_URI","ERROR_MISSING_ERROR","ERROR_MISSING_ID","ERROR_MISSING_JSON_RPC","ERROR_MISSING_METHOD","ERROR_MISSING_REQUIRED","ERROR_MISSING_RESULT","ERROR_QRCODE_MODAL_NOT_PROVIDED","ERROR_QRCODE_MODAL_USER_CLOSED","ERROR_SESSION_CONNECTED","ERROR_SESSION_DISCONNECTED","ERROR_SESSION_REJECTED","INFURA_NETWORKS","MOBILE_LINK_CHOICE_KEY","RESERVED_EVENTS","SIGNING_METHODS","STATE_METHODS","WALLET_METHODS","infuraNetworks","mobileLinkChoiceKey","reservedEvents","signingMethods","stateMethods","IEvents"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _protocol__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./qrcode */ "./node_modules/@walletconnect/legacy-types/dist/esm/qrcode.js");
/* harmony import */ var _qrcode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_qrcode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _qrcode__WEBPACK_IMPORTED_MODULE_7__) if(["default","ERROR_INVALID_RESPONSE","ERROR_INVALID_URI","ERROR_MISSING_ERROR","ERROR_MISSING_ID","ERROR_MISSING_JSON_RPC","ERROR_MISSING_METHOD","ERROR_MISSING_REQUIRED","ERROR_MISSING_RESULT","ERROR_QRCODE_MODAL_NOT_PROVIDED","ERROR_QRCODE_MODAL_USER_CLOSED","ERROR_SESSION_CONNECTED","ERROR_SESSION_DISCONNECTED","ERROR_SESSION_REJECTED","INFURA_NETWORKS","MOBILE_LINK_CHOICE_KEY","RESERVED_EVENTS","SIGNING_METHODS","STATE_METHODS","WALLET_METHODS","infuraNetworks","mobileLinkChoiceKey","reservedEvents","signingMethods","stateMethods","IEvents"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _qrcode__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registry */ "./node_modules/@walletconnect/legacy-types/dist/esm/registry.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_registry__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _registry__WEBPACK_IMPORTED_MODULE_8__) if(["default","ERROR_INVALID_RESPONSE","ERROR_INVALID_URI","ERROR_MISSING_ERROR","ERROR_MISSING_ID","ERROR_MISSING_JSON_RPC","ERROR_MISSING_METHOD","ERROR_MISSING_REQUIRED","ERROR_MISSING_RESULT","ERROR_QRCODE_MODAL_NOT_PROVIDED","ERROR_QRCODE_MODAL_USER_CLOSED","ERROR_SESSION_CONNECTED","ERROR_SESSION_DISCONNECTED","ERROR_SESSION_REJECTED","INFURA_NETWORKS","MOBILE_LINK_CHOICE_KEY","RESERVED_EVENTS","SIGNING_METHODS","STATE_METHODS","WALLET_METHODS","infuraNetworks","mobileLinkChoiceKey","reservedEvents","signingMethods","stateMethods","IEvents"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _registry__WEBPACK_IMPORTED_MODULE_8__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./socket */ "./node_modules/@walletconnect/legacy-types/dist/esm/socket.js");
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_socket__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _socket__WEBPACK_IMPORTED_MODULE_9__) if(["default","ERROR_INVALID_RESPONSE","ERROR_INVALID_URI","ERROR_MISSING_ERROR","ERROR_MISSING_ID","ERROR_MISSING_JSON_RPC","ERROR_MISSING_METHOD","ERROR_MISSING_REQUIRED","ERROR_MISSING_RESULT","ERROR_QRCODE_MODAL_NOT_PROVIDED","ERROR_QRCODE_MODAL_USER_CLOSED","ERROR_SESSION_CONNECTED","ERROR_SESSION_DISCONNECTED","ERROR_SESSION_REJECTED","INFURA_NETWORKS","MOBILE_LINK_CHOICE_KEY","RESERVED_EVENTS","SIGNING_METHODS","STATE_METHODS","WALLET_METHODS","infuraNetworks","mobileLinkChoiceKey","reservedEvents","signingMethods","stateMethods","IEvents"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _socket__WEBPACK_IMPORTED_MODULE_9__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storage */ "./node_modules/@walletconnect/legacy-types/dist/esm/storage.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_storage__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _storage__WEBPACK_IMPORTED_MODULE_10__) if(["default","ERROR_INVALID_RESPONSE","ERROR_INVALID_URI","ERROR_MISSING_ERROR","ERROR_MISSING_ID","ERROR_MISSING_JSON_RPC","ERROR_MISSING_METHOD","ERROR_MISSING_REQUIRED","ERROR_MISSING_RESULT","ERROR_QRCODE_MODAL_NOT_PROVIDED","ERROR_QRCODE_MODAL_USER_CLOSED","ERROR_SESSION_CONNECTED","ERROR_SESSION_DISCONNECTED","ERROR_SESSION_REJECTED","INFURA_NETWORKS","MOBILE_LINK_CHOICE_KEY","RESERVED_EVENTS","SIGNING_METHODS","STATE_METHODS","WALLET_METHODS","infuraNetworks","mobileLinkChoiceKey","reservedEvents","signingMethods","stateMethods","IEvents"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _storage__WEBPACK_IMPORTED_MODULE_10__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/jsonrpc.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/jsonrpc.js ***!
  \**********************************************************************/
/***/ (() => {

//# sourceMappingURL=jsonrpc.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/network.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/network.js ***!
  \**********************************************************************/
/***/ (() => {

//# sourceMappingURL=network.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/protocol.js ***!
  \***********************************************************************/
/***/ (() => {

//# sourceMappingURL=protocol.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/qrcode.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/qrcode.js ***!
  \*********************************************************************/
/***/ (() => {

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/registry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/registry.js ***!
  \***********************************************************************/
/***/ (() => {

//# sourceMappingURL=registry.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/socket.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/socket.js ***!
  \*********************************************************************/
/***/ (() => {

//# sourceMappingURL=socket.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-types/dist/esm/storage.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-types/dist/esm/storage.js ***!
  \**********************************************************************/
/***/ (() => {

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/encoding.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/encoding.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   concatArrayBuffers: () => (/* binding */ concatArrayBuffers),
/* harmony export */   concatBuffers: () => (/* binding */ concatBuffers),
/* harmony export */   convertArrayBufferToBuffer: () => (/* binding */ convertArrayBufferToBuffer),
/* harmony export */   convertArrayBufferToHex: () => (/* binding */ convertArrayBufferToHex),
/* harmony export */   convertArrayBufferToNumber: () => (/* binding */ convertArrayBufferToNumber),
/* harmony export */   convertArrayBufferToUtf8: () => (/* binding */ convertArrayBufferToUtf8),
/* harmony export */   convertBufferToArrayBuffer: () => (/* binding */ convertBufferToArrayBuffer),
/* harmony export */   convertBufferToHex: () => (/* binding */ convertBufferToHex),
/* harmony export */   convertBufferToNumber: () => (/* binding */ convertBufferToNumber),
/* harmony export */   convertBufferToUtf8: () => (/* binding */ convertBufferToUtf8),
/* harmony export */   convertHexToArrayBuffer: () => (/* binding */ convertHexToArrayBuffer),
/* harmony export */   convertHexToBuffer: () => (/* binding */ convertHexToBuffer),
/* harmony export */   convertHexToNumber: () => (/* binding */ convertHexToNumber),
/* harmony export */   convertHexToUtf8: () => (/* binding */ convertHexToUtf8),
/* harmony export */   convertNumberToArrayBuffer: () => (/* binding */ convertNumberToArrayBuffer),
/* harmony export */   convertNumberToBuffer: () => (/* binding */ convertNumberToBuffer),
/* harmony export */   convertNumberToHex: () => (/* binding */ convertNumberToHex),
/* harmony export */   convertNumberToUtf8: () => (/* binding */ convertNumberToUtf8),
/* harmony export */   convertUtf8ToArrayBuffer: () => (/* binding */ convertUtf8ToArrayBuffer),
/* harmony export */   convertUtf8ToBuffer: () => (/* binding */ convertUtf8ToBuffer),
/* harmony export */   convertUtf8ToHex: () => (/* binding */ convertUtf8ToHex),
/* harmony export */   convertUtf8ToNumber: () => (/* binding */ convertUtf8ToNumber)
/* harmony export */ });
/* harmony import */ var _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/encoding */ "./node_modules/@walletconnect/encoding/dist/esm/index.js");

function convertArrayBufferToBuffer(arrBuf) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.arrayToBuffer(new Uint8Array(arrBuf));
}
function convertArrayBufferToUtf8(arrBuf) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.arrayToUtf8(new Uint8Array(arrBuf));
}
function convertArrayBufferToHex(arrBuf, noPrefix) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.arrayToHex(new Uint8Array(arrBuf), !noPrefix);
}
function convertArrayBufferToNumber(arrBuf) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.arrayToNumber(new Uint8Array(arrBuf));
}
function concatArrayBuffers(...args) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.hexToArray(args.map(b => _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.arrayToHex(new Uint8Array(b))).join("")).buffer;
}
function convertBufferToArrayBuffer(buf) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.bufferToArray(buf).buffer;
}
function convertBufferToUtf8(buf) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.bufferToUtf8(buf);
}
function convertBufferToHex(buf, noPrefix) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.bufferToHex(buf, !noPrefix);
}
function convertBufferToNumber(buf) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.bufferToNumber(buf);
}
function concatBuffers(...args) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.concatBuffers(...args);
}
function convertUtf8ToArrayBuffer(utf8) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.utf8ToArray(utf8).buffer;
}
function convertUtf8ToBuffer(utf8) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.utf8ToBuffer(utf8);
}
function convertUtf8ToHex(utf8, noPrefix) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.utf8ToHex(utf8, !noPrefix);
}
function convertUtf8ToNumber(utf8) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.utf8ToNumber(utf8);
}
function convertHexToBuffer(hex) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.hexToBuffer(hex);
}
function convertHexToArrayBuffer(hex) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.hexToArray(hex).buffer;
}
function convertHexToUtf8(hex) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.hexToUtf8(hex);
}
function convertHexToNumber(hex) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.hexToNumber(hex);
}
function convertNumberToBuffer(num) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.numberToBuffer(num);
}
function convertNumberToArrayBuffer(num) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.numberToArray(num).buffer;
}
function convertNumberToUtf8(num) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.numberToUtf8(num);
}
function convertNumberToHex(num, noPrefix) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.numberToHex(Number(num), !noPrefix);
}
//# sourceMappingURL=encoding.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/env.js":
/*!******************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/env.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   detectEnv: () => (/* binding */ detectEnv),
/* harmony export */   detectOS: () => (/* binding */ detectOS),
/* harmony export */   isAndroid: () => (/* binding */ isAndroid),
/* harmony export */   isBrowser: () => (/* binding */ isBrowser),
/* harmony export */   isIOS: () => (/* binding */ isIOS),
/* harmony export */   isMobile: () => (/* binding */ isMobile),
/* harmony export */   isNode: () => (/* binding */ isNode)
/* harmony export */ });
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/es/index.js");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window */ "./node_modules/@walletconnect/legacy-utils/dist/esm/window.js");


function detectEnv(userAgent) {
    return (0,detect_browser__WEBPACK_IMPORTED_MODULE_1__.detect)(userAgent);
}
function detectOS() {
    const env = detectEnv();
    return env && env.os ? env.os : undefined;
}
function isAndroid() {
    const os = detectOS();
    return os ? os.toLowerCase().includes("android") : false;
}
function isIOS() {
    const os = detectOS();
    return os
        ? os.toLowerCase().includes("ios") ||
            (os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
        : false;
}
function isMobile() {
    const os = detectOS();
    return os ? isAndroid() || isIOS() : false;
}
function isNode() {
    const env = detectEnv();
    const result = env && env.name ? env.name.toLowerCase() === "node" : false;
    return result;
}
function isBrowser() {
    const result = !isNode() && !!(0,_window__WEBPACK_IMPORTED_MODULE_0__.getNavigator)();
    return result;
}
//# sourceMappingURL=env.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addHexPrefix: () => (/* reexport safe */ _misc__WEBPACK_IMPORTED_MODULE_5__.addHexPrefix),
/* harmony export */   appendToQueryString: () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_10__.appendToQueryString),
/* harmony export */   concatArrayBuffers: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.concatArrayBuffers),
/* harmony export */   concatBuffers: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.concatBuffers),
/* harmony export */   convertArrayBufferToBuffer: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertArrayBufferToBuffer),
/* harmony export */   convertArrayBufferToHex: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertArrayBufferToHex),
/* harmony export */   convertArrayBufferToNumber: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertArrayBufferToNumber),
/* harmony export */   convertArrayBufferToUtf8: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertArrayBufferToUtf8),
/* harmony export */   convertBufferToArrayBuffer: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertBufferToArrayBuffer),
/* harmony export */   convertBufferToHex: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertBufferToHex),
/* harmony export */   convertBufferToNumber: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertBufferToNumber),
/* harmony export */   convertBufferToUtf8: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertBufferToUtf8),
/* harmony export */   convertHexToArrayBuffer: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertHexToArrayBuffer),
/* harmony export */   convertHexToBuffer: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertHexToBuffer),
/* harmony export */   convertHexToNumber: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertHexToNumber),
/* harmony export */   convertHexToUtf8: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertHexToUtf8),
/* harmony export */   convertNumberToArrayBuffer: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertNumberToArrayBuffer),
/* harmony export */   convertNumberToBuffer: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertNumberToBuffer),
/* harmony export */   convertNumberToHex: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertNumberToHex),
/* harmony export */   convertNumberToUtf8: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertNumberToUtf8),
/* harmony export */   convertUtf8ToArrayBuffer: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertUtf8ToArrayBuffer),
/* harmony export */   convertUtf8ToBuffer: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertUtf8ToBuffer),
/* harmony export */   convertUtf8ToHex: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertUtf8ToHex),
/* harmony export */   convertUtf8ToNumber: () => (/* reexport safe */ _encoding__WEBPACK_IMPORTED_MODULE_0__.convertUtf8ToNumber),
/* harmony export */   detectEnv: () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.detectEnv),
/* harmony export */   detectOS: () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.detectOS),
/* harmony export */   formatIOSMobile: () => (/* reexport safe */ _mobile__WEBPACK_IMPORTED_MODULE_6__.formatIOSMobile),
/* harmony export */   formatMobileRegistry: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_8__.formatMobileRegistry),
/* harmony export */   formatMobileRegistryEntry: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_8__.formatMobileRegistryEntry),
/* harmony export */   formatQueryString: () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_10__.formatQueryString),
/* harmony export */   formatRpcError: () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_7__.formatRpcError),
/* harmony export */   getClientMeta: () => (/* reexport safe */ _meta__WEBPACK_IMPORTED_MODULE_4__.getClientMeta),
/* harmony export */   getCrypto: () => (/* reexport safe */ _window__WEBPACK_IMPORTED_MODULE_12__.getCrypto),
/* harmony export */   getCryptoOrThrow: () => (/* reexport safe */ _window__WEBPACK_IMPORTED_MODULE_12__.getCryptoOrThrow),
/* harmony export */   getDappRegistryUrl: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_8__.getDappRegistryUrl),
/* harmony export */   getDocument: () => (/* reexport safe */ _window__WEBPACK_IMPORTED_MODULE_12__.getDocument),
/* harmony export */   getDocumentOrThrow: () => (/* reexport safe */ _window__WEBPACK_IMPORTED_MODULE_12__.getDocumentOrThrow),
/* harmony export */   getEncoding: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.getEncoding),
/* harmony export */   getFromWindow: () => (/* reexport safe */ _window__WEBPACK_IMPORTED_MODULE_12__.getFromWindow),
/* harmony export */   getFromWindowOrThrow: () => (/* reexport safe */ _window__WEBPACK_IMPORTED_MODULE_12__.getFromWindowOrThrow),
/* harmony export */   getInfuraRpcUrl: () => (/* reexport safe */ _misc__WEBPACK_IMPORTED_MODULE_5__.getInfuraRpcUrl),
/* harmony export */   getLocal: () => (/* reexport safe */ _local__WEBPACK_IMPORTED_MODULE_3__.getLocal),
/* harmony export */   getLocalStorage: () => (/* reexport safe */ _window__WEBPACK_IMPORTED_MODULE_12__.getLocalStorage),
/* harmony export */   getLocalStorageOrThrow: () => (/* reexport safe */ _window__WEBPACK_IMPORTED_MODULE_12__.getLocalStorageOrThrow),
/* harmony export */   getLocation: () => (/* reexport safe */ _window__WEBPACK_IMPORTED_MODULE_12__.getLocation),
/* harmony export */   getLocationOrThrow: () => (/* reexport safe */ _window__WEBPACK_IMPORTED_MODULE_12__.getLocationOrThrow),
/* harmony export */   getMobileLinkRegistry: () => (/* reexport safe */ _mobile__WEBPACK_IMPORTED_MODULE_6__.getMobileLinkRegistry),
/* harmony export */   getMobileRegistryEntry: () => (/* reexport safe */ _mobile__WEBPACK_IMPORTED_MODULE_6__.getMobileRegistryEntry),
/* harmony export */   getNavigator: () => (/* reexport safe */ _window__WEBPACK_IMPORTED_MODULE_12__.getNavigator),
/* harmony export */   getNavigatorOrThrow: () => (/* reexport safe */ _window__WEBPACK_IMPORTED_MODULE_12__.getNavigatorOrThrow),
/* harmony export */   getQueryString: () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_10__.getQueryString),
/* harmony export */   getRpcUrl: () => (/* reexport safe */ _misc__WEBPACK_IMPORTED_MODULE_5__.getRpcUrl),
/* harmony export */   getType: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.getType),
/* harmony export */   getWalletRegistryUrl: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_8__.getWalletRegistryUrl),
/* harmony export */   isAndroid: () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.isAndroid),
/* harmony export */   isArrayBuffer: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.isArrayBuffer),
/* harmony export */   isBrowser: () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.isBrowser),
/* harmony export */   isBuffer: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.isBuffer),
/* harmony export */   isEmptyArray: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.isEmptyArray),
/* harmony export */   isEmptyString: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.isEmptyString),
/* harmony export */   isHexString: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.isHexString),
/* harmony export */   isIOS: () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.isIOS),
/* harmony export */   isInternalEvent: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.isInternalEvent),
/* harmony export */   isJsonRpcRequest: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.isJsonRpcRequest),
/* harmony export */   isJsonRpcResponseError: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.isJsonRpcResponseError),
/* harmony export */   isJsonRpcResponseSuccess: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.isJsonRpcResponseSuccess),
/* harmony export */   isJsonRpcSubscription: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.isJsonRpcSubscription),
/* harmony export */   isMobile: () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.isMobile),
/* harmony export */   isNode: () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.isNode),
/* harmony export */   isReservedEvent: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.isReservedEvent),
/* harmony export */   isSilentPayload: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.isSilentPayload),
/* harmony export */   isTypedArray: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_11__.isTypedArray),
/* harmony export */   isWalletConnectSession: () => (/* reexport safe */ _session__WEBPACK_IMPORTED_MODULE_9__.isWalletConnectSession),
/* harmony export */   logDeprecationWarning: () => (/* reexport safe */ _misc__WEBPACK_IMPORTED_MODULE_5__.logDeprecationWarning),
/* harmony export */   parseQueryString: () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_10__.parseQueryString),
/* harmony export */   parseWalletConnectUri: () => (/* reexport safe */ _session__WEBPACK_IMPORTED_MODULE_9__.parseWalletConnectUri),
/* harmony export */   payloadId: () => (/* reexport safe */ _misc__WEBPACK_IMPORTED_MODULE_5__.payloadId),
/* harmony export */   promisify: () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_7__.promisify),
/* harmony export */   removeHexLeadingZeros: () => (/* reexport safe */ _misc__WEBPACK_IMPORTED_MODULE_5__.removeHexLeadingZeros),
/* harmony export */   removeHexPrefix: () => (/* reexport safe */ _misc__WEBPACK_IMPORTED_MODULE_5__.removeHexPrefix),
/* harmony export */   removeLocal: () => (/* reexport safe */ _local__WEBPACK_IMPORTED_MODULE_3__.removeLocal),
/* harmony export */   safeJsonParse: () => (/* reexport safe */ _json__WEBPACK_IMPORTED_MODULE_2__.safeJsonParse),
/* harmony export */   safeJsonStringify: () => (/* reexport safe */ _json__WEBPACK_IMPORTED_MODULE_2__.safeJsonStringify),
/* harmony export */   sanitizeHex: () => (/* reexport safe */ _misc__WEBPACK_IMPORTED_MODULE_5__.sanitizeHex),
/* harmony export */   saveMobileLinkInfo: () => (/* reexport safe */ _mobile__WEBPACK_IMPORTED_MODULE_6__.saveMobileLinkInfo),
/* harmony export */   setLocal: () => (/* reexport safe */ _local__WEBPACK_IMPORTED_MODULE_3__.setLocal),
/* harmony export */   uuid: () => (/* reexport safe */ _misc__WEBPACK_IMPORTED_MODULE_5__.uuid)
/* harmony export */ });
/* harmony import */ var _encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encoding */ "./node_modules/@walletconnect/legacy-utils/dist/esm/encoding.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/@walletconnect/legacy-utils/dist/esm/env.js");
/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json */ "./node_modules/@walletconnect/legacy-utils/dist/esm/json.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local */ "./node_modules/@walletconnect/legacy-utils/dist/esm/local.js");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta */ "./node_modules/@walletconnect/legacy-utils/dist/esm/meta.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./misc */ "./node_modules/@walletconnect/legacy-utils/dist/esm/misc.js");
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile */ "./node_modules/@walletconnect/legacy-utils/dist/esm/mobile.js");
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payload */ "./node_modules/@walletconnect/legacy-utils/dist/esm/payload.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registry */ "./node_modules/@walletconnect/legacy-utils/dist/esm/registry.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./session */ "./node_modules/@walletconnect/legacy-utils/dist/esm/session.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./url */ "./node_modules/@walletconnect/legacy-utils/dist/esm/url.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validators */ "./node_modules/@walletconnect/legacy-utils/dist/esm/validators.js");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./window */ "./node_modules/@walletconnect/legacy-utils/dist/esm/window.js");













//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/json.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/json.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeJsonParse: () => (/* binding */ safeJsonParse),
/* harmony export */   safeJsonStringify: () => (/* binding */ safeJsonStringify)
/* harmony export */ });
/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/safe-json */ "./node_modules/@walletconnect/safe-json/dist/esm/index.js");

const safeJsonParse = _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_0__.safeJsonParse;
const safeJsonStringify = _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_0__.safeJsonStringify;
//# sourceMappingURL=json.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/local.js":
/*!********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/local.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLocal: () => (/* binding */ getLocal),
/* harmony export */   removeLocal: () => (/* binding */ removeLocal),
/* harmony export */   setLocal: () => (/* binding */ setLocal)
/* harmony export */ });
/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json */ "./node_modules/@walletconnect/legacy-utils/dist/esm/json.js");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./window */ "./node_modules/@walletconnect/legacy-utils/dist/esm/window.js");


function setLocal(key, data) {
    const raw = (0,_json__WEBPACK_IMPORTED_MODULE_0__.safeJsonStringify)(data);
    const local = (0,_window__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)();
    if (local) {
        local.setItem(key, raw);
    }
}
function getLocal(key) {
    let data = null;
    let raw = null;
    const local = (0,_window__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)();
    if (local) {
        raw = local.getItem(key);
    }
    data = raw ? (0,_json__WEBPACK_IMPORTED_MODULE_0__.safeJsonParse)(raw) : raw;
    return data;
}
function removeLocal(key) {
    const local = (0,_window__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)();
    if (local) {
        local.removeItem(key);
    }
}
//# sourceMappingURL=local.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/meta.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/meta.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClientMeta: () => (/* binding */ getClientMeta)
/* harmony export */ });
/* harmony import */ var _walletconnect_window_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/window-metadata */ "./node_modules/@walletconnect/window-metadata/dist/cjs/index.js");

function getClientMeta() {
    return _walletconnect_window_metadata__WEBPACK_IMPORTED_MODULE_0__.getWindowMetadata();
}
//# sourceMappingURL=meta.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/misc.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/misc.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addHexPrefix: () => (/* binding */ addHexPrefix),
/* harmony export */   getInfuraRpcUrl: () => (/* binding */ getInfuraRpcUrl),
/* harmony export */   getRpcUrl: () => (/* binding */ getRpcUrl),
/* harmony export */   logDeprecationWarning: () => (/* binding */ logDeprecationWarning),
/* harmony export */   payloadId: () => (/* binding */ payloadId),
/* harmony export */   removeHexLeadingZeros: () => (/* binding */ removeHexLeadingZeros),
/* harmony export */   removeHexPrefix: () => (/* binding */ removeHexPrefix),
/* harmony export */   sanitizeHex: () => (/* binding */ sanitizeHex),
/* harmony export */   uuid: () => (/* binding */ uuid)
/* harmony export */ });
/* harmony import */ var _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/encoding */ "./node_modules/@walletconnect/encoding/dist/esm/index.js");
/* harmony import */ var _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/jsonrpc-utils */ "./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js");
/* harmony import */ var _walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @walletconnect/legacy-types */ "./node_modules/@walletconnect/legacy-types/dist/esm/index.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");



function sanitizeHex(hex) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.sanitizeHex(hex);
}
function addHexPrefix(hex) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.addHexPrefix(hex);
}
function removeHexPrefix(hex) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.removeHexPrefix(hex);
}
function removeHexLeadingZeros(hex) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.removeHexLeadingZeros(_walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.addHexPrefix(hex));
}
const payloadId = _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.payloadId;
function uuid() {
    const result = ((a, b) => {
        for (b = a = ""; a++ < 36; b += (a * 51) & 52 ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16) : "-") {
        }
        return b;
    })();
    return result;
}
function logDeprecationWarning() {
    console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!");
}
function getInfuraRpcUrl(chainId, infuraId) {
    let rpcUrl;
    const network = _walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_2__.INFURA_NETWORKS[chainId];
    if (network) {
        rpcUrl = `https://${network}.infura.io/v3/${infuraId}`;
    }
    return rpcUrl;
}
function getRpcUrl(chainId, rpc) {
    let rpcUrl;
    const infuraUrl = getInfuraRpcUrl(chainId, rpc.infuraId);
    if (rpc.custom && rpc.custom[chainId]) {
        rpcUrl = rpc.custom[chainId];
    }
    else if (infuraUrl) {
        rpcUrl = infuraUrl;
    }
    return rpcUrl;
}
//# sourceMappingURL=misc.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/mobile.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/mobile.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatIOSMobile: () => (/* binding */ formatIOSMobile),
/* harmony export */   getMobileLinkRegistry: () => (/* binding */ getMobileLinkRegistry),
/* harmony export */   getMobileRegistryEntry: () => (/* binding */ getMobileRegistryEntry),
/* harmony export */   saveMobileLinkInfo: () => (/* binding */ saveMobileLinkInfo)
/* harmony export */ });
/* harmony import */ var _walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/legacy-types */ "./node_modules/@walletconnect/legacy-types/dist/esm/index.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local */ "./node_modules/@walletconnect/legacy-utils/dist/esm/local.js");


function formatIOSMobile(uri, entry) {
    const encodedUri = encodeURIComponent(uri);
    return entry.universalLink
        ? `${entry.universalLink}/wc?uri=${encodedUri}`
        : entry.deepLink
            ? `${entry.deepLink}${entry.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${encodedUri}`
            : "";
}
function saveMobileLinkInfo(data) {
    const focusUri = data.href.split("?")[0];
    (0,_local__WEBPACK_IMPORTED_MODULE_1__.setLocal)(_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_0__.MOBILE_LINK_CHOICE_KEY, Object.assign(Object.assign({}, data), { href: focusUri }));
}
function getMobileRegistryEntry(registry, name) {
    return registry.filter((entry) => entry.name.toLowerCase().includes(name.toLowerCase()))[0];
}
function getMobileLinkRegistry(registry, whitelist) {
    let links = registry;
    if (whitelist) {
        links = whitelist.map((name) => getMobileRegistryEntry(registry, name)).filter(Boolean);
    }
    return links;
}
//# sourceMappingURL=mobile.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/payload.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/payload.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRpcError: () => (/* binding */ formatRpcError),
/* harmony export */   promisify: () => (/* binding */ promisify)
/* harmony export */ });
function promisify(originalFn, thisArg) {
    const promisifiedFunction = async (...callArgs) => {
        return new Promise((resolve, reject) => {
            const callback = (err, data) => {
                if (err === null || typeof err === "undefined") {
                    reject(err);
                }
                resolve(data);
            };
            originalFn.apply(thisArg, [...callArgs, callback]);
        });
    };
    return promisifiedFunction;
}
function formatRpcError(error) {
    const message = error.message || "Failed or Rejected Request";
    let code = -32000;
    if (error && !error.code) {
        switch (message) {
            case "Parse error":
                code = -32700;
                break;
            case "Invalid request":
                code = -32600;
                break;
            case "Method not found":
                code = -32601;
                break;
            case "Invalid params":
                code = -32602;
                break;
            case "Internal error":
                code = -32603;
                break;
            default:
                code = -32000;
                break;
        }
    }
    const result = {
        code,
        message,
    };
    if (error.data) {
        result.data = error.data;
    }
    return result;
}
//# sourceMappingURL=payload.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/registry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/registry.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatMobileRegistry: () => (/* binding */ formatMobileRegistry),
/* harmony export */   formatMobileRegistryEntry: () => (/* binding */ formatMobileRegistryEntry),
/* harmony export */   getDappRegistryUrl: () => (/* binding */ getDappRegistryUrl),
/* harmony export */   getWalletRegistryUrl: () => (/* binding */ getWalletRegistryUrl)
/* harmony export */ });
const API_URL = "https://registry.walletconnect.com";
function getWalletRegistryUrl() {
    return API_URL + "/api/v2/wallets";
}
function getDappRegistryUrl() {
    return API_URL + "/api/v2/dapps";
}
function formatMobileRegistryEntry(entry, platform = "mobile") {
    var _a;
    return {
        name: entry.name || "",
        shortName: entry.metadata.shortName || "",
        color: entry.metadata.colors.primary || "",
        logo: (_a = entry.image_url.sm) !== null && _a !== void 0 ? _a : "",
        universalLink: entry[platform].universal || "",
        deepLink: entry[platform].native || "",
    };
}
function formatMobileRegistry(registry, platform = "mobile") {
    return Object.values(registry)
        .filter(entry => !!entry[platform].universal || !!entry[platform].native)
        .map(entry => formatMobileRegistryEntry(entry, platform));
}
//# sourceMappingURL=registry.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/session.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/session.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isWalletConnectSession: () => (/* binding */ isWalletConnectSession),
/* harmony export */   parseWalletConnectUri: () => (/* binding */ parseWalletConnectUri)
/* harmony export */ });
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ "./node_modules/@walletconnect/legacy-utils/dist/esm/url.js");

function isWalletConnectSession(object) {
    return typeof object.bridge !== "undefined";
}
function parseWalletConnectUri(str) {
    const pathStart = str.indexOf(":");
    const pathEnd = str.indexOf("?") !== -1 ? str.indexOf("?") : undefined;
    const protocol = str.substring(0, pathStart);
    const path = str.substring(pathStart + 1, pathEnd);
    function parseRequiredParams(path) {
        const separator = "@";
        const values = path.split(separator);
        const requiredParams = {
            handshakeTopic: values[0],
            version: parseInt(values[1], 10),
        };
        return requiredParams;
    }
    const requiredParams = parseRequiredParams(path);
    const queryString = typeof pathEnd !== "undefined" ? str.substr(pathEnd) : "";
    function parseQueryParams(queryString) {
        const result = (0,_url__WEBPACK_IMPORTED_MODULE_0__.parseQueryString)(queryString);
        const parameters = {
            key: result.key || "",
            bridge: result.bridge || "",
        };
        return parameters;
    }
    const queryParams = parseQueryParams(queryString);
    const result = Object.assign(Object.assign({ protocol }, requiredParams), queryParams);
    return result;
}
//# sourceMappingURL=session.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/url.js":
/*!******************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/url.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendToQueryString: () => (/* binding */ appendToQueryString),
/* harmony export */   formatQueryString: () => (/* binding */ formatQueryString),
/* harmony export */   getQueryString: () => (/* binding */ getQueryString),
/* harmony export */   parseQueryString: () => (/* binding */ parseQueryString)
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

function getQueryString(url) {
    const pathEnd = url.indexOf("?") !== -1 ? url.indexOf("?") : undefined;
    const queryString = typeof pathEnd !== "undefined" ? url.substr(pathEnd) : "";
    return queryString;
}
function appendToQueryString(queryString, newQueryParams) {
    let queryParams = parseQueryString(queryString);
    queryParams = Object.assign(Object.assign({}, queryParams), newQueryParams);
    queryString = formatQueryString(queryParams);
    return queryString;
}
function parseQueryString(queryString) {
    return query_string__WEBPACK_IMPORTED_MODULE_0__.parse(queryString);
}
function formatQueryString(queryParams) {
    return query_string__WEBPACK_IMPORTED_MODULE_0__.stringify(queryParams);
}
//# sourceMappingURL=url.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/validators.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/validators.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEncoding: () => (/* binding */ getEncoding),
/* harmony export */   getType: () => (/* binding */ getType),
/* harmony export */   isArrayBuffer: () => (/* binding */ isArrayBuffer),
/* harmony export */   isBuffer: () => (/* binding */ isBuffer),
/* harmony export */   isEmptyArray: () => (/* binding */ isEmptyArray),
/* harmony export */   isEmptyString: () => (/* binding */ isEmptyString),
/* harmony export */   isHexString: () => (/* binding */ isHexString),
/* harmony export */   isInternalEvent: () => (/* binding */ isInternalEvent),
/* harmony export */   isJsonRpcRequest: () => (/* binding */ isJsonRpcRequest),
/* harmony export */   isJsonRpcResponseError: () => (/* binding */ isJsonRpcResponseError),
/* harmony export */   isJsonRpcResponseSuccess: () => (/* binding */ isJsonRpcResponseSuccess),
/* harmony export */   isJsonRpcSubscription: () => (/* binding */ isJsonRpcSubscription),
/* harmony export */   isReservedEvent: () => (/* binding */ isReservedEvent),
/* harmony export */   isSilentPayload: () => (/* binding */ isSilentPayload),
/* harmony export */   isTypedArray: () => (/* binding */ isTypedArray)
/* harmony export */ });
/* harmony import */ var _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/encoding */ "./node_modules/@walletconnect/encoding/dist/esm/index.js");
/* harmony import */ var _walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/legacy-types */ "./node_modules/@walletconnect/legacy-types/dist/esm/index.js");


function isEmptyString(value) {
    return value === "" || (typeof value === "string" && value.trim() === "");
}
function isEmptyArray(array) {
    return !(array && array.length);
}
function isBuffer(val) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.isBuffer(val);
}
function isTypedArray(val) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.isTypedArray(val);
}
function isArrayBuffer(val) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer(val);
}
function getType(val) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.getType(val);
}
function getEncoding(val) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.getEncoding(val);
}
function isHexString(value, length) {
    return _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.isHexString(value, length);
}
function isJsonRpcSubscription(object) {
    return typeof object.params === "object";
}
function isJsonRpcRequest(object) {
    return typeof object.method !== "undefined";
}
function isJsonRpcResponseSuccess(object) {
    return typeof object.result !== "undefined";
}
function isJsonRpcResponseError(object) {
    return typeof object.error !== "undefined";
}
function isInternalEvent(object) {
    return typeof object.event !== "undefined";
}
function isReservedEvent(event) {
    return _walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_1__.RESERVED_EVENTS.includes(event) || event.startsWith("wc_");
}
function isSilentPayload(request) {
    if (request.method.startsWith("wc_")) {
        return true;
    }
    if (_walletconnect_legacy_types__WEBPACK_IMPORTED_MODULE_1__.SIGNING_METHODS.includes(request.method)) {
        return false;
    }
    return true;
}
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ "./node_modules/@walletconnect/legacy-utils/dist/esm/window.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@walletconnect/legacy-utils/dist/esm/window.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCrypto: () => (/* binding */ getCrypto),
/* harmony export */   getCryptoOrThrow: () => (/* binding */ getCryptoOrThrow),
/* harmony export */   getDocument: () => (/* binding */ getDocument),
/* harmony export */   getDocumentOrThrow: () => (/* binding */ getDocumentOrThrow),
/* harmony export */   getFromWindow: () => (/* binding */ getFromWindow),
/* harmony export */   getFromWindowOrThrow: () => (/* binding */ getFromWindowOrThrow),
/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),
/* harmony export */   getLocalStorageOrThrow: () => (/* binding */ getLocalStorageOrThrow),
/* harmony export */   getLocation: () => (/* binding */ getLocation),
/* harmony export */   getLocationOrThrow: () => (/* binding */ getLocationOrThrow),
/* harmony export */   getNavigator: () => (/* binding */ getNavigator),
/* harmony export */   getNavigatorOrThrow: () => (/* binding */ getNavigatorOrThrow)
/* harmony export */ });
/* harmony import */ var _walletconnect_window_getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @walletconnect/window-getters */ "./node_modules/@walletconnect/window-getters/dist/cjs/index.js");

const getFromWindow = _walletconnect_window_getters__WEBPACK_IMPORTED_MODULE_0__.getFromWindow;
const getFromWindowOrThrow = _walletconnect_window_getters__WEBPACK_IMPORTED_MODULE_0__.getFromWindowOrThrow;
const getDocumentOrThrow = _walletconnect_window_getters__WEBPACK_IMPORTED_MODULE_0__.getDocumentOrThrow;
const getDocument = _walletconnect_window_getters__WEBPACK_IMPORTED_MODULE_0__.getDocument;
const getNavigatorOrThrow = _walletconnect_window_getters__WEBPACK_IMPORTED_MODULE_0__.getNavigatorOrThrow;
const getNavigator = _walletconnect_window_getters__WEBPACK_IMPORTED_MODULE_0__.getNavigator;
const getLocationOrThrow = _walletconnect_window_getters__WEBPACK_IMPORTED_MODULE_0__.getLocationOrThrow;
const getLocation = _walletconnect_window_getters__WEBPACK_IMPORTED_MODULE_0__.getLocation;
const getCryptoOrThrow = _walletconnect_window_getters__WEBPACK_IMPORTED_MODULE_0__.getCryptoOrThrow;
const getCrypto = _walletconnect_window_getters__WEBPACK_IMPORTED_MODULE_0__.getCrypto;
const getLocalStorageOrThrow = _walletconnect_window_getters__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageOrThrow;
const getLocalStorage = _walletconnect_window_getters__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage;
//# sourceMappingURL=window.js.map

/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Children: () => (/* binding */ O),
/* harmony export */   Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   PureComponent: () => (/* binding */ w),
/* harmony export */   StrictMode: () => (/* binding */ mn),
/* harmony export */   Suspense: () => (/* binding */ D),
/* harmony export */   SuspenseList: () => (/* binding */ V),
/* harmony export */   __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => (/* binding */ ln),
/* harmony export */   cloneElement: () => (/* binding */ sn),
/* harmony export */   createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createContext),
/* harmony export */   createElement: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement),
/* harmony export */   createFactory: () => (/* binding */ fn),
/* harmony export */   createPortal: () => (/* binding */ z),
/* harmony export */   createRef: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   "default": () => (/* binding */ Cn),
/* harmony export */   findDOMNode: () => (/* binding */ vn),
/* harmony export */   flushSync: () => (/* binding */ pn),
/* harmony export */   forwardRef: () => (/* binding */ k),
/* harmony export */   hydrate: () => (/* binding */ J),
/* harmony export */   isValidElement: () => (/* binding */ an),
/* harmony export */   lazy: () => (/* binding */ M),
/* harmony export */   memo: () => (/* binding */ x),
/* harmony export */   render: () => (/* binding */ G),
/* harmony export */   startTransition: () => (/* binding */ yn),
/* harmony export */   unmountComponentAtNode: () => (/* binding */ hn),
/* harmony export */   unstable_batchedUpdates: () => (/* binding */ dn),
/* harmony export */   useCallback: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback),
/* harmony export */   useContext: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext),
/* harmony export */   useDebugValue: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue),
/* harmony export */   useDeferredValue: () => (/* binding */ _n),
/* harmony export */   useEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect),
/* harmony export */   useErrorBoundary: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundary),
/* harmony export */   useId: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId),
/* harmony export */   useImperativeHandle: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle),
/* harmony export */   useInsertionEffect: () => (/* binding */ Sn),
/* harmony export */   useLayoutEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect),
/* harmony export */   useMemo: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo),
/* harmony export */   useReducer: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer),
/* harmony export */   useRef: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef),
/* harmony export */   useState: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState),
/* harmony export */   useSyncExternalStore: () => (/* binding */ gn),
/* harmony export */   useTransition: () => (/* binding */ bn),
/* harmony export */   version: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
function g(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n,t){return n===t&&(0!==n||1/n==1/t)||n!=n&&t!=t}function w(n){this.props=n}function x(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:C(this.props,n)}function u(e){return this.shouldComponentUpdate=r,(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(w.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).isPureReactComponent=!0,w.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var R=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n)};var N="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function k(n){function t(t){var e=g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=N,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var A=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).map(t))},O={map:A,forEach:A,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray},T=preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;preact__WEBPACK_IMPORTED_MODULE_0__.options.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);T(n,t,e,r)};var I=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function L(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return L(n,t,e)})),n}function U(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return U(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function D(){this.__u=0,this.t=null,this.__b=null}function F(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function M(n){var e,r,u;function o(o){if(e||(e=n()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(r,o)}return o.displayName="Lazy",o.__f=!0,o}function V(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),I&&I(n)},(D.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=F(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=U(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},D.prototype.componentWillUnmount=function(){this.t=[]},D.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=L(this.__b,r,o.__O=o.__P)}this.__b=null}var i=e.__a&&(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,n.fallback);return i&&(i.__h=null),[(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,e.__a?null:n.children),i]};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function P(n){return this.getChildContext=function(){return n.context},n.children}function j(n){var e=this,r=n.i;e.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null,e.l),e.l=null,e.i=null},e.i&&e.i!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(P,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function z(n,e){var r=(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(j,{__v:n,i:e});return r.containerInfo=e,r}(V.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).__a=function(n){var t=this,e=F(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u()};e?e(o):o()}},V.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){W(n,e,t)})};var B="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,H=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Z=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Y=/[A-Z0-9]/g,$="undefined"!=typeof document,q=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function G(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function J(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var K=preact__WEBPACK_IMPORTED_MODULE_0__.options.event;function Q(){}function X(){return this.cancelBubble}function nn(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_0__.options.event=function(n){return K&&(n=K(n)),n.persist=Q,n.isPropagationStopped=X,n.isDefaultPrevented=nn,n.nativeEvent=n};var tn,en={enumerable:!1,configurable:!0,get:function(){return this.class}},rn=preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||$&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var l=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===l?o="ondblclick":"onchange"!==l||"input"!==e&&"textarea"!==e||q(t.type)?"onfocus"===l?o="onfocusin":"onblur"===l?o="onfocusout":Z.test(o)?o=l:-1===e.indexOf("-")&&H.test(o)?o=o.replace(Y,"-$&").toLowerCase():null===i&&(i=void 0):l=o="oninput","oninput"===l&&u[o=l]&&(o="oninputCapture"),u[o]=i}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==e&&null!=u.defaultValue&&(u.value=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",en)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u}(n),n.$$typeof=B,rn&&rn(n)};var un=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){un&&un(n),tn=n.__c};var on=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed;preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(n){on&&on(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value),tn=null};var ln={ReactCurrentDispatcher:{current:{readContext:function(n){return tn.__n[n.__c].props.value}}}},cn="17.0.2";function fn(n){return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.bind(null,n)}function an(n){return!!n&&n.$$typeof===B}function sn(n){return an(n)?preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null,arguments):n}function hn(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null,n),!0)}function vn(n){return n&&(n.base||1===n.nodeType&&n)||null}var dn=function(n,t){return n(t)},pn=function(n,t){return n(t)},mn=preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;function yn(n){n()}function _n(n){return n}function bn(){return[!1,yn]}var Sn=preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;function gn(n,t){var e=t(),r=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({h:{__:e,v:t}}),u=r[0].h,o=r[1];return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function(){u.__=e,u.v=t,E(u.__,t())||o({h:u})},[n,e,t]),(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){return E(u.__,u.v())||o({h:u}),n(function(){E(u.__,u.v())||o({h:u})})},[n]),e}var Cn={useState:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,useId:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,useInsertionEffect:Sn,useTransition:bn,useDeferredValue:_n,useSyncExternalStore:gn,startTransition:yn,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,version:"17.0.2",Children:O,render:G,hydrate:J,unmountComponentAtNode:hn,createPortal:z,createElement:preact__WEBPACK_IMPORTED_MODULE_0__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_0__.createContext,createFactory:fn,cloneElement:sn,createRef:preact__WEBPACK_IMPORTED_MODULE_0__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,isValidElement:an,findDOMNode:vn,Component:preact__WEBPACK_IMPORTED_MODULE_0__.Component,PureComponent:w,memo:x,forwardRef:k,flushSync:pn,unstable_batchedUpdates:dn,StrictMode:mn,Suspense:D,SuspenseList:V,lazy:M,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ln};
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "./node_modules/split-on-first/index.js");
const filterObject = __webpack_require__(/*! filter-obj */ "./node_modules/query-string/node_modules/filter-obj/index.js");

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${encode(object.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};


/***/ }),

/***/ "./node_modules/query-string/node_modules/filter-obj/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/query-string/node_modules/filter-obj/index.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";

module.exports = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};


/***/ }),

/***/ "./node_modules/ws/browser.js":
/*!************************************!*\
  !*** ./node_modules/ws/browser.js ***!
  \************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXdhbGxldHMtZGlzdC1pbmRleC00MmIwZjVmNS1icm93c2VyLWVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdGO0FBQ2Q7QUFDQTtBQUNUO0FBQ0g7QUFDYjtBQUMrQjtBQUNOO0FBQ0o7QUFDTjs7QUFFeEQsK0JBQStCLDRFQUFrQjtBQUNqRDtBQUNBO0FBQ0EsSUFBSSwwRUFBZSxxQkFBcUIscURBQVk7QUFDcEQsSUFBSSwwRUFBZTtBQUNuQixJQUFJLDBFQUFlO0FBQ25CLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQixJQUFJLDBFQUFlO0FBQ25CLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQixJQUFJLDBFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUhBQW1ILGdGQUFrQjtBQUNySTtBQUNBO0FBQ0E7QUFDQSxJQUFJLE9BQU87QUFDWDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9FQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxvRUFBYTtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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YztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNFQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdFQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsZ0VBQWdFO0FBQzVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLHdEQUF3RDtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGNBQWMsT0FBTywyQkFBMkIsT0FBTyxvQ0FBb0MsT0FBTztBQUM3SDtBQUNBLEVBQUUsT0FBTztBQUNUO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BuQk87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDs7Ozs7Ozs7Ozs7Ozs7OztBQ2JPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNieUI7QUFDQTtBQUNDO0FBQ0Q7QUFDRTtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNQOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJPO0FBQ0E7QUFDUDs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7Ozs7Ozs7OztBQ1JBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeUI7QUFDRztBQUNEO0FBQ0Y7QUFDQztBQUNBO0FBQ0M7QUFDRjtBQUNFO0FBQ0Y7QUFDQztBQUMxQjs7Ozs7Ozs7OztBQ1hBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9EO0FBQzdDO0FBQ1AsV0FBVyxrRUFBc0I7QUFDakM7QUFDTztBQUNQLFdBQVcsZ0VBQW9CO0FBQy9CO0FBQ087QUFDUCxXQUFXLCtEQUFtQjtBQUM5QjtBQUNPO0FBQ1AsV0FBVyxrRUFBc0I7QUFDakM7QUFDTztBQUNQLFdBQVcsK0RBQW1CLGVBQWUsK0RBQW1CO0FBQ2hFO0FBQ087QUFDUCxXQUFXLGtFQUFzQjtBQUNqQztBQUNPO0FBQ1AsV0FBVyxpRUFBcUI7QUFDaEM7QUFDTztBQUNQLFdBQVcsZ0VBQW9CO0FBQy9CO0FBQ087QUFDUCxXQUFXLG1FQUF1QjtBQUNsQztBQUNPO0FBQ1AsV0FBVyxrRUFBc0I7QUFDakM7QUFDTztBQUNQLFdBQVcsZ0VBQW9CO0FBQy9CO0FBQ087QUFDUCxXQUFXLGlFQUFxQjtBQUNoQztBQUNPO0FBQ1AsV0FBVyw4REFBa0I7QUFDN0I7QUFDTztBQUNQLFdBQVcsaUVBQXFCO0FBQ2hDO0FBQ087QUFDUCxXQUFXLGdFQUFvQjtBQUMvQjtBQUNPO0FBQ1AsV0FBVywrREFBbUI7QUFDOUI7QUFDTztBQUNQLFdBQVcsOERBQWtCO0FBQzdCO0FBQ087QUFDUCxXQUFXLGdFQUFvQjtBQUMvQjtBQUNPO0FBQ1AsV0FBVyxtRUFBdUI7QUFDbEM7QUFDTztBQUNQLFdBQVcsa0VBQXNCO0FBQ2pDO0FBQ087QUFDUCxXQUFXLGlFQUFxQjtBQUNoQztBQUNPO0FBQ1AsV0FBVyxnRUFBb0I7QUFDL0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRXlDO0FBQ0Q7QUFDakM7QUFDUCxXQUFXLHNEQUFNO0FBQ2pCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxrQ0FBa0MscURBQVk7QUFDOUM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQzJCO0FBQ0w7QUFDQztBQUNDO0FBQ0Q7QUFDQTtBQUNFO0FBQ0M7QUFDQztBQUNEO0FBQ0o7QUFDTztBQUNKO0FBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JxRDtBQUM5QyxzQkFBc0IsbUVBQXNCO0FBQzVDLDBCQUEwQix1RUFBMEI7QUFDM0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIMEQ7QUFDZjtBQUNwQztBQUNQLGdCQUFnQix3REFBaUI7QUFDakMsa0JBQWtCLHdEQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBYTtBQUM5QjtBQUNBO0FBQ087QUFDUCxrQkFBa0Isd0RBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCaUU7QUFDMUQ7QUFDUCxXQUFXLDZFQUFnQztBQUMzQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKb0Q7QUFDUztBQUNDO0FBQ3ZEO0FBQ1AsV0FBVyxnRUFBb0I7QUFDL0I7QUFDTztBQUNQLFdBQVcsaUVBQXFCO0FBQ2hDO0FBQ087QUFDUCxXQUFXLG9FQUF3QjtBQUNuQztBQUNPO0FBQ1AsV0FBVywwRUFBOEIsQ0FBQyxpRUFBcUI7QUFDL0Q7QUFDTyxrQkFBa0IsbUVBQXNCO0FBQ3hDO0FBQ1A7QUFDQSx5QkFBeUIsVUFBVTtBQUNuQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQLElBQUksT0FBTztBQUNYO0FBQ087QUFDUDtBQUNBLG9CQUFvQix3RUFBZTtBQUNuQztBQUNBLDRCQUE0QixRQUFRLGdCQUFnQixTQUFTO0FBQzdEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q3NFO0FBQ25DO0FBQzVCO0FBQ1A7QUFDQTtBQUNBLGFBQWEsb0JBQW9CLFVBQVUsV0FBVztBQUN0RDtBQUNBLGlCQUFpQixlQUFlLEVBQUUsMENBQTBDLFNBQVMsV0FBVztBQUNoRztBQUNBO0FBQ087QUFDUDtBQUNBLElBQUksZ0RBQVEsQ0FBQywrRUFBc0IsZ0NBQWdDLFdBQVcsZ0JBQWdCO0FBQzlGO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCeUM7QUFDbEM7QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzREFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsVUFBVTtBQUMzRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ2lEO0FBQzFDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsV0FBVywrQ0FBc0I7QUFDakM7QUFDTztBQUNQLFdBQVcsbURBQTBCO0FBQ3JDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQm9EO0FBQzRCO0FBQ3pFO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1AsV0FBVyw2REFBaUI7QUFDNUI7QUFDTztBQUNQLFdBQVcsaUVBQXFCO0FBQ2hDO0FBQ087QUFDUCxXQUFXLGtFQUFzQjtBQUNqQztBQUNPO0FBQ1AsV0FBVyw0REFBZ0I7QUFDM0I7QUFDTztBQUNQLFdBQVcsZ0VBQW9CO0FBQy9CO0FBQ087QUFDUCxXQUFXLGdFQUFvQjtBQUMvQjtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1AsV0FBVyx3RUFBZTtBQUMxQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRCtEO0FBQ3hELHNCQUFzQix3RUFBMkI7QUFDakQsNkJBQTZCLCtFQUFrQztBQUMvRCwyQkFBMkIsNkVBQWdDO0FBQzNELG9CQUFvQixzRUFBeUI7QUFDN0MsNEJBQTRCLDhFQUFpQztBQUM3RCxxQkFBcUIsdUVBQTBCO0FBQy9DLDJCQUEyQiw2RUFBZ0M7QUFDM0Qsb0JBQW9CLHNFQUF5QjtBQUM3Qyx5QkFBeUIsMkVBQThCO0FBQ3ZELGtCQUFrQixvRUFBdUI7QUFDekMsK0JBQStCLGlGQUFvQztBQUNuRSx3QkFBd0IsMEVBQTZCO0FBQzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JvZSxnQkFBZ0IseUJBQXlCLFNBQVMsZ0JBQWdCLHFEQUFxRCx1REFBdUQsU0FBUyxnQkFBZ0IsNENBQTRDLGNBQWMsYUFBYSxnQkFBZ0IsY0FBYyxnQ0FBZ0Msb0ZBQW9GLGNBQWMsb0NBQW9DLHFEQUFDLE1BQU0sb0dBQW9HLGlCQUFpQiw2Q0FBQywwRUFBMEUseUNBQXlDLE1BQU0sMkNBQUMsS0FBSywyQ0FBQyxpQkFBaUIsbUVBQW1FLG9GQUFvRixjQUFjLGNBQWMsVUFBVSxJQUFJLHFDQUFxQywrSEFBK0gsb0JBQW9CLG9CQUFvQixvREFBQyxDQUFDLG9EQUFDLFlBQVksSUFBSSxrQ0FBa0MsU0FBUyxvREFBQyxhQUFhLGtCQUFrQixNQUFNLG9EQUFDLElBQUkscUNBQXFDLFlBQVksU0FBUyxnREFBQyxDQUFDLEdBQUcsMkNBQUMsS0FBSywyQ0FBQyx1QkFBdUIsd0JBQXdCLE9BQU8sOEVBQThFLFlBQVksTUFBTSwyQ0FBQyxTQUFTLGtCQUFrQiwrREFBK0Qsa0NBQWtDLCtCQUErQix1RkFBdUYsZ0JBQWdCLEtBQUssa0JBQWtCLHlEQUF5RCxnQkFBZ0IseUZBQXlGLGFBQWEscUNBQXFDLGNBQWMsZUFBZSwwQkFBMEIsY0FBYyxVQUFVLGNBQWMsK0JBQStCLGVBQWUsYUFBYSxJQUFJLFlBQVksY0FBYyxPQUFPLHFEQUFDLE1BQU0sdUNBQXVDLGFBQWEsd0JBQXdCLDJDQUFDLHFCQUFxQixZQUFZLHVEQUF1RCxrQkFBa0IsNkNBQUMsb0JBQW9CLG1CQUFtQixnQ0FBZ0MsaUNBQWlDLGlDQUFpQyxRQUFRLGlCQUFpQixhQUFhLGdCQUFnQixrQkFBa0Isc0NBQXNDLE1BQU0sZ0JBQWdCLGVBQWUsRUFBRSxZQUFZLGtCQUFrQixjQUFjLHdCQUF3Qix1QkFBdUIsY0FBYyw2Q0FBNkMsVUFBVSxrQ0FBa0MsYUFBYSxpQkFBaUIsMERBQTBELDBDQUEwQyxjQUFjLGFBQWEscURBQUMsQ0FBQyw0Q0FBQyxrQkFBa0Isd0JBQXdCLHFEQUFDLENBQUMsNENBQUMsaUNBQWlDLHNCQUFzQix5R0FBeUcsRUFBRSxFQUFFLEtBQUssV0FBVyxXQUFXLG1CQUFtQixhQUFhLGNBQWMsdUNBQXVDLGlCQUFpQixZQUFZLGNBQWMsaUJBQWlCLGtDQUFrQyw4Q0FBQyw2QkFBNkIsZ0VBQWdFLDhEQUE4RCwyQ0FBMkMsNEJBQTRCLDJDQUEyQyx5QkFBeUIsNkVBQTZFLEVBQUUsOENBQUMsQ0FBQyxxREFBQyxJQUFJLGtCQUFrQiw0Q0FBNEMsZ0JBQWdCLE1BQU0scURBQUMsSUFBSSxVQUFVLEVBQUUsMkJBQTJCLGlCQUFpQiw2Q0FBQyxrQkFBa0IsbUNBQW1DLDBCQUEwQixpQkFBaUIsOENBQThDLFlBQVksZ0NBQWdDLDJCQUEyQixNQUFNLG9EQUFDLGFBQWEsbURBQW1ELG1CQUFtQixJQUFJLHNDQUFzQyxrQkFBa0IseUVBQXlFLFdBQVcsNkJBQTZCLFNBQVMsR0FBRyxpZEFBaWQsa0dBQWtHLGtCQUFrQix1Q0FBdUMsOENBQUMsNkNBQTZDLGtCQUFrQixPQUFPLCtDQUFDLDZDQUE2Qyw2Q0FBQyw4QkFBOEIsOEZBQThGLHNCQUFzQiw2Q0FBQyxjQUFjLCtCQUErQix5QkFBeUIsaUJBQWlCLDhCQUE4QixvQ0FBb0MsR0FBRyxFQUFFLEVBQUUsTUFBTSwyQ0FBQyxPQUFPLGNBQWMsYUFBYSx5QkFBeUIsY0FBYyw2QkFBNkIsMkNBQUMsbUJBQW1CLGlHQUFpRyxXQUFXLDZDQUE2QyxtQkFBbUIsSUFBSSwyQ0FBQyxPQUFPLDJDQUFDLG1CQUFtQixxQ0FBcUMsNEJBQTRCLGdCQUFnQixXQUFXLGlIQUFpSCxzQkFBc0IsOFlBQThZLDBEQUEwRCxvREFBQyxpQ0FBaUMsb0RBQW9ELCtDQUErQyxvREFBQyxpQ0FBaUMsb0dBQW9HLDhLQUE4Syw0QkFBNEIsT0FBTywyQ0FBQyxLQUFLLDJDQUFDLGlCQUFpQixvQkFBb0IsT0FBTywyQ0FBQyxRQUFRLDJDQUFDLG9CQUFvQixVQUFVLHNCQUFzQiwwR0FBMEcsUUFBUSx3QkFBd0IsU0FBUyx3QkFBd0Isb0NBQW9DLGFBQWEsZUFBZSxPQUFPLGlEQUFDLGNBQWMsZUFBZSwwQkFBMEIsZUFBZSxhQUFhLGdEQUFDLHlCQUF5QixlQUFlLGdCQUFnQiw4Q0FBQyxhQUFhLGVBQWUsNENBQTRDLHFCQUFxQixZQUFZLGtCQUFrQixZQUFZLElBQUksNENBQUMsQ0FBQyxlQUFlLElBQUksZUFBZSxTQUFTLGNBQWMsY0FBYyxPQUFPLHlEQUFDLENBQUMsaUJBQWlCLFlBQVksc0RBQUMsRUFBRSxHQUFHLFVBQVUsa0JBQWtCLE9BQU8sNkRBQUMsWUFBWSw2QkFBNkIsSUFBSSxFQUFFLFVBQVUsdURBQUMsWUFBWSx5QkFBeUIsSUFBSSxlQUFlLGtCQUFrQixJQUFJLEVBQUUsRUFBRSxRQUFRLFFBQVEsU0FBUyxrREFBQyxPQUFPLCtDQUFDLFlBQVksb0RBQUMsV0FBVyxtREFBQyxpQkFBaUIseURBQUMsOEdBQThHLGdEQUFDLHFCQUFxQiw2REFBQyxTQUFTLGlEQUFDLGFBQWEscURBQUMsWUFBWSxvREFBQyxlQUFlLHVEQUFDLHVHQUF1RyxpREFBQyxlQUFlLGlEQUFDLDRDQUE0Qyw2Q0FBQyxVQUFVLDRDQUFDLDRDQUE0Qyw2Q0FBQyxtTEFBK3JCO0FBQ24wUzs7Ozs7Ozs7Ozs7O0FDRGE7QUFDYix3QkFBd0IsbUJBQU8sQ0FBQyxvRUFBbUI7QUFDbkQsd0JBQXdCLG1CQUFPLENBQUMsMEVBQXNCO0FBQ3RELHFCQUFxQixtQkFBTyxDQUFDLDhEQUFnQjtBQUM3QyxxQkFBcUIsbUJBQU8sQ0FBQyxnRkFBWTs7QUFFekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjs7QUFFQSxlQUFlO0FBQ2YsYUFBYTs7QUFFYixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx3REFBd0QsMkNBQTJDO0FBQ25HO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLHlEQUF5RCxZQUFZOztBQUVyRTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0EsYUFBYSwyQ0FBMkM7QUFDeEQ7O0FBRUEsV0FBVyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUs7QUFDcEM7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQSxFQUFFOztBQUVGLFFBQVEsZ0NBQWdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLGVBQWU7QUFDZjs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuWmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvd2FsbGV0cy9kaXN0L2luZGV4LTQyYjBmNWY1LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2pzb25ycGMtaHR0cC1jb25uZWN0aW9uL2Rpc3QvZXNtL2h0dHAuanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvanNvbnJwYy1odHRwLWNvbm5lY3Rpb24vZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LWNsaWVudC9kaXN0L2VzbS9jb3JlLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2xlZ2FjeS1jbGllbnQvZGlzdC9lc20vY3J5cHRvLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2xlZ2FjeS1jbGllbnQvZGlzdC9lc20vZXZlbnRzLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2xlZ2FjeS1jbGllbnQvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LWNsaWVudC9kaXN0L2VzbS9uZXR3b3JrLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2xlZ2FjeS1jbGllbnQvZGlzdC9lc20vc29ja2V0LmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2xlZ2FjeS1jbGllbnQvZGlzdC9lc20vc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9sZWdhY3ktY2xpZW50L2Rpc3QvZXNtL3VybC5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9sZWdhY3ktbW9kYWwvZGlzdC9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXR5cGVzL2Rpc3QvZXNtL2NvbnN0YW50cy9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXR5cGVzL2Rpc3QvZXNtL2NvbnN0YW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXR5cGVzL2Rpc3QvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9sZWdhY3ktdHlwZXMvZGlzdC9lc20vY29uc3RhbnRzL2pzb25ycGMuanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXR5cGVzL2Rpc3QvZXNtL2NvbnN0YW50cy9tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXR5cGVzL2Rpc3QvZXNtL2NvbnN0YW50cy9uZXR3b3Jrcy5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9sZWdhY3ktdHlwZXMvZGlzdC9lc20vY3J5cHRvLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2xlZ2FjeS10eXBlcy9kaXN0L2VzbS9ldGhlcmV1bS5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9sZWdhY3ktdHlwZXMvZGlzdC9lc20vZXZlbnRzLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2xlZ2FjeS10eXBlcy9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9sZWdhY3ktdHlwZXMvZGlzdC9lc20vanNvbnJwYy5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9sZWdhY3ktdHlwZXMvZGlzdC9lc20vbmV0d29yay5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9sZWdhY3ktdHlwZXMvZGlzdC9lc20vcHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXR5cGVzL2Rpc3QvZXNtL3FyY29kZS5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9sZWdhY3ktdHlwZXMvZGlzdC9lc20vcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXR5cGVzL2Rpc3QvZXNtL3NvY2tldC5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9sZWdhY3ktdHlwZXMvZGlzdC9lc20vc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9sZWdhY3ktdXRpbHMvZGlzdC9lc20vZW5jb2RpbmcuanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXV0aWxzL2Rpc3QvZXNtL2Vudi5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9sZWdhY3ktdXRpbHMvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXV0aWxzL2Rpc3QvZXNtL2pzb24uanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXV0aWxzL2Rpc3QvZXNtL2xvY2FsLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2xlZ2FjeS11dGlscy9kaXN0L2VzbS9tZXRhLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2xlZ2FjeS11dGlscy9kaXN0L2VzbS9taXNjLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2xlZ2FjeS11dGlscy9kaXN0L2VzbS9tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXV0aWxzL2Rpc3QvZXNtL3BheWxvYWQuanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXV0aWxzL2Rpc3QvZXNtL3JlZ2lzdHJ5LmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2xlZ2FjeS11dGlscy9kaXN0L2VzbS9zZXNzaW9uLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L2xlZ2FjeS11dGlscy9kaXN0L2VzbS91cmwuanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXV0aWxzL2Rpc3QvZXNtL3ZhbGlkYXRvcnMuanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbGVnYWN5LXV0aWxzL2Rpc3QvZXNtL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L2Rpc3QvY29tcGF0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL25vZGVfbW9kdWxlcy9maWx0ZXItb2JqL2luZGV4LmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL3dzL2Jyb3dzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXyBhcyBfZGVmaW5lUHJvcGVydHkgfSBmcm9tICcuL2RlZmluZVByb3BlcnR5LWM4ZWNkYzA3LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IElKc29uUnBjQ29ubmVjdGlvbiB9IGZyb20gJ0B3YWxsZXRjb25uZWN0L2pzb25ycGMtdHlwZXMnO1xuaW1wb3J0IHsgZm9ybWF0SnNvblJwY0Vycm9yIH0gZnJvbSAnQHdhbGxldGNvbm5lY3QvanNvbnJwYy11dGlscyc7XG5pbXBvcnQgV2FsbGV0Q29ubmVjdCBmcm9tICdAd2FsbGV0Y29ubmVjdC9sZWdhY3ktY2xpZW50JztcbmltcG9ydCBRUkNvZGVNb2RhbCBmcm9tICdAd2FsbGV0Y29ubmVjdC9sZWdhY3ktbW9kYWwnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCB7IEh0dHBDb25uZWN0aW9uIH0gZnJvbSAnQHdhbGxldGNvbm5lY3QvanNvbnJwYy1odHRwLWNvbm5lY3Rpb24nO1xuaW1wb3J0IHsgSnNvblJwY1Byb3ZpZGVyIH0gZnJvbSAnQHdhbGxldGNvbm5lY3QvanNvbnJwYy1wcm92aWRlcic7XG5pbXBvcnQgeyBTSUdOSU5HX01FVEhPRFMgfSBmcm9tICdAd2FsbGV0Y29ubmVjdC9sZWdhY3ktdHlwZXMnO1xuaW1wb3J0IHsgZ2V0UnBjVXJsIH0gZnJvbSAnQHdhbGxldGNvbm5lY3QvbGVnYWN5LXV0aWxzJztcblxuY2xhc3MgU2lnbmVyQ29ubmVjdGlvbiBleHRlbmRzIElKc29uUnBjQ29ubmVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcigpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImV2ZW50c1wiLCBuZXcgRXZlbnRFbWl0dGVyKCkpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFjY291bnRzXCIsIFtdKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjaGFpbklkXCIsIDEpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBlbmRpbmdcIiwgZmFsc2UpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndjXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYnJpZGdlXCIsIFwiaHR0cHM6Ly9icmlkZ2Uud2FsbGV0Y29ubmVjdC5vcmdcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicXJjb2RlXCIsIHRydWUpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInFyY29kZU1vZGFsT3B0aW9uc1wiLCB1bmRlZmluZWQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9wdHNcIiwgdm9pZCAwKTtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMuY2hhaW5JZCA9IG9wdHM/LmNoYWluSWQgfHwgdGhpcy5jaGFpbklkO1xuICAgIHRoaXMud2MgPSB0aGlzLnJlZ2lzdGVyKG9wdHMpO1xuICB9XG4gIGdldCBjb25uZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLndjICE9PSBcInVuZGVmaW5lZFwiICYmIHRoaXMud2MuY29ubmVjdGVkO1xuICB9XG4gIGdldCBjb25uZWN0aW5nKCkge1xuICAgIHJldHVybiB0aGlzLnBlbmRpbmc7XG4gIH1cbiAgZ2V0IGNvbm5lY3RvcigpIHtcbiAgICB0aGlzLndjID0gdGhpcy5yZWdpc3Rlcih0aGlzLm9wdHMpO1xuICAgIHJldHVybiB0aGlzLndjO1xuICB9XG4gIG9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuZXZlbnRzLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbiAgb25jZShldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLmV2ZW50cy5vbmNlKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbiAgb2ZmKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuZXZlbnRzLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICB9XG4gIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuZXZlbnRzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbiAgYXN5bmMgb3BlbihjaGFpbklkKSB7XG4gICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICB0aGlzLm9uT3BlbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5vbihcImVycm9yXCIsIGVyciA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm9uKFwib3BlblwiLCAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jcmVhdGUoY2hhaW5JZCk7XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLndjID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLndjLmNvbm5lY3RlZCkge1xuICAgICAgdGhpcy53Yy5raWxsU2Vzc2lvbigpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgfVxuICBhc3luYyBzZW5kKHBheWxvYWQpIHtcbiAgICB0aGlzLndjID0gdGhpcy5yZWdpc3Rlcih0aGlzLm9wdHMpO1xuICAgIGlmICghdGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMub3BlbigpO1xuICAgIH1cbiAgICB0aGlzLnNlbmRQYXlsb2FkKHBheWxvYWQpLnRoZW4ocmVzID0+IHRoaXMuZXZlbnRzLmVtaXQoXCJwYXlsb2FkXCIsIHJlcykpLmNhdGNoKGUgPT4gdGhpcy5ldmVudHMuZW1pdChcInBheWxvYWRcIiwgZm9ybWF0SnNvblJwY0Vycm9yKHBheWxvYWQuaWQsIGUubWVzc2FnZSkpKTtcbiAgfVxuICBhc3luYyBzZW5kQXN5bmMocGF5bG9hZCkge1xuICAgIC8vIG5vb3BcbiAgICBjb25zb2xlLmxvZyhcInNlbmRBc3luY1wiLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0gUHJpdmF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIHJlZ2lzdGVyKG9wdHMpIHtcbiAgICBpZiAodGhpcy53Yykge1xuICAgICAgcmV0dXJuIHRoaXMud2M7XG4gICAgfVxuICAgIHRoaXMub3B0cyA9IG9wdHMgfHwgdGhpcy5vcHRzO1xuICAgIHRoaXMuYnJpZGdlID0gb3B0cz8uY29ubmVjdG9yID8gb3B0cy5jb25uZWN0b3IuYnJpZGdlIDogb3B0cz8uYnJpZGdlIHx8IFwiaHR0cHM6Ly9icmlkZ2Uud2FsbGV0Y29ubmVjdC5vcmdcIjtcbiAgICB0aGlzLnFyY29kZSA9IHR5cGVvZiBvcHRzPy5xcmNvZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgb3B0cy5xcmNvZGUgIT09IGZhbHNlO1xuICAgIHRoaXMuY2hhaW5JZCA9IHR5cGVvZiBvcHRzPy5jaGFpbklkICE9PSBcInVuZGVmaW5lZFwiID8gb3B0cy5jaGFpbklkIDogdGhpcy5jaGFpbklkO1xuICAgIHRoaXMucXJjb2RlTW9kYWxPcHRpb25zID0gb3B0cz8ucXJjb2RlTW9kYWxPcHRpb25zO1xuICAgIGNvbnN0IGNvbm5lY3Rvck9wdHMgPSB7XG4gICAgICBicmlkZ2U6IHRoaXMuYnJpZGdlLFxuICAgICAgcXJjb2RlTW9kYWw6IHRoaXMucXJjb2RlID8gUVJDb2RlTW9kYWwgOiB1bmRlZmluZWQsXG4gICAgICBxcmNvZGVNb2RhbE9wdGlvbnM6IHRoaXMucXJjb2RlTW9kYWxPcHRpb25zLFxuICAgICAgc3RvcmFnZUlkOiBvcHRzPy5zdG9yYWdlSWQsXG4gICAgICBzaWduaW5nTWV0aG9kczogb3B0cz8uc2lnbmluZ01ldGhvZHMsXG4gICAgICBjbGllbnRNZXRhOiBvcHRzPy5jbGllbnRNZXRhLFxuICAgICAgc2Vzc2lvbjogb3B0cz8uc2Vzc2lvblxuICAgIH07XG4gICAgdGhpcy53YyA9IHR5cGVvZiBvcHRzPy5jb25uZWN0b3IgIT09IFwidW5kZWZpbmVkXCIgPyBvcHRzLmNvbm5lY3RvciA6IG5ldyBXYWxsZXRDb25uZWN0KGNvbm5lY3Rvck9wdHMpO1xuICAgIGlmICh0eXBlb2YgdGhpcy53YyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHJlZ2lzdGVyIFdhbGxldENvbm5lY3QgY29ubmVjdG9yXCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy53Yy5hY2NvdW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYWNjb3VudHMgPSB0aGlzLndjLmFjY291bnRzO1xuICAgIH1cbiAgICBpZiAodGhpcy53Yy5jaGFpbklkKSB7XG4gICAgICB0aGlzLmNoYWluSWQgPSB0aGlzLndjLmNoYWluSWQ7XG4gICAgfVxuICAgIC8vIHRoaXMuYWNjb3VudHMgPSB0aGlzLndjLmFjY291bnRzO1xuICAgIC8vIHRoaXMuY2hhaW5JZCA9IHRoaXMud2MuY2hhaW5JZDtcbiAgICB0aGlzLnJlZ2lzdGVyQ29ubmVjdG9yRXZlbnRzKCk7XG4gICAgcmV0dXJuIHRoaXMud2M7XG4gIH1cbiAgb25PcGVuKHdjKSB7XG4gICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgaWYgKHdjKSB7XG4gICAgICB0aGlzLndjID0gd2M7XG4gICAgfVxuICAgIHRoaXMuZXZlbnRzLmVtaXQoXCJvcGVuXCIpO1xuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMud2MpIHtcbiAgICAgIHRoaXMud2MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuZXZlbnRzLmVtaXQoXCJjbG9zZVwiKTtcbiAgfVxuICBvbkVycm9yKHBheWxvYWQpIHtcbiAgICBsZXQgbWVzc2FnZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogXCJGYWlsZWQgb3IgUmVqZWN0ZWQgUmVxdWVzdFwiO1xuICAgIGxldCBjb2RlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAtMzIwMDA7XG4gICAgY29uc3QgZXJyb3JQYXlsb2FkID0ge1xuICAgICAgaWQ6IHBheWxvYWQuaWQsXG4gICAgICBqc29ucnBjOiBwYXlsb2FkLmpzb25ycGMsXG4gICAgICBlcnJvcjoge1xuICAgICAgICBjb2RlLFxuICAgICAgICBtZXNzYWdlXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFwicGF5bG9hZFwiLCBlcnJvclBheWxvYWQpO1xuICAgIHJldHVybiBlcnJvclBheWxvYWQ7XG4gIH1cbiAgY3JlYXRlKGNoYWluSWQpIHtcbiAgICB0aGlzLndjID0gdGhpcy5yZWdpc3Rlcih0aGlzLm9wdHMpO1xuICAgIHRoaXMuY2hhaW5JZCA9IGNoYWluSWQgfHwgdGhpcy5jaGFpbklkO1xuICAgIGlmICh0aGlzLmNvbm5lY3RlZCB8fCB0aGlzLnBlbmRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnJlZ2lzdGVyQ29ubmVjdG9yRXZlbnRzKCk7XG4gICAgdGhpcy53Yy5jcmVhdGVTZXNzaW9uKHtcbiAgICAgIGNoYWluSWQ6IHRoaXMuY2hhaW5JZFxuICAgIH0pLnRoZW4oKCkgPT4gdGhpcy5ldmVudHMuZW1pdChcImNyZWF0ZWRcIikpLmNhdGNoKGUgPT4gdGhpcy5ldmVudHMuZW1pdChcImVycm9yXCIsIGUpKTtcbiAgfVxuICByZWdpc3RlckNvbm5lY3RvckV2ZW50cygpIHtcbiAgICB0aGlzLndjID0gdGhpcy5yZWdpc3Rlcih0aGlzLm9wdHMpO1xuICAgIHRoaXMud2Mub24oXCJjb25uZWN0XCIsIGVyciA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmFjY291bnRzID0gdGhpcy53Yz8uYWNjb3VudHMgfHwgW107XG4gICAgICB0aGlzLmNoYWluSWQgPSB0aGlzLndjPy5jaGFpbklkIHx8IHRoaXMuY2hhaW5JZDtcbiAgICAgIHRoaXMub25PcGVuKCk7XG4gICAgfSk7XG4gICAgdGhpcy53Yy5vbihcImRpc2Nvbm5lY3RcIiwgZXJyID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgIH0pO1xuICAgIHRoaXMud2Mub24oXCJtb2RhbF9jbG9zZWRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIlVzZXIgY2xvc2VkIG1vZGFsXCIpKTtcbiAgICB9KTtcbiAgICB0aGlzLndjLm9uKFwic2Vzc2lvbl91cGRhdGVcIiwgKF9lcnJvciwgcGF5bG9hZCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBhY2NvdW50cyxcbiAgICAgICAgY2hhaW5JZFxuICAgICAgfSA9IHBheWxvYWQucGFyYW1zWzBdO1xuICAgICAgaWYgKCF0aGlzLmFjY291bnRzIHx8IGFjY291bnRzICYmIHRoaXMuYWNjb3VudHMgIT09IGFjY291bnRzKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBhY2NvdW50cztcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdChcImFjY291bnRzQ2hhbmdlZFwiLCBhY2NvdW50cyk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY2hhaW5JZCB8fCBjaGFpbklkICYmIHRoaXMuY2hhaW5JZCAhPT0gY2hhaW5JZCkge1xuICAgICAgICB0aGlzLmNoYWluSWQgPSBjaGFpbklkO1xuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KFwiY2hhaW5DaGFuZ2VkXCIsIGNoYWluSWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFzeW5jIHNlbmRQYXlsb2FkKHBheWxvYWQpIHtcbiAgICB0aGlzLndjID0gdGhpcy5yZWdpc3Rlcih0aGlzLm9wdHMpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMud2MudW5zYWZlU2VuZChwYXlsb2FkKTtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbkVycm9yKHBheWxvYWQsIGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuICBzYW5pdGl6ZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiByZXNwb25zZS5lcnJvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcmVzcG9uc2UuZXJyb3IuY29kZSA9PT0gXCJ1bmRlZmluZWRcIiA/IGZvcm1hdEpzb25ScGNFcnJvcihyZXNwb25zZS5pZCwgcmVzcG9uc2UuZXJyb3IubWVzc2FnZSkgOiByZXNwb25zZTtcbiAgfVxufVxudmFyIFNpZ25lckNvbm5lY3Rpb24kMSA9IFNpZ25lckNvbm5lY3Rpb247XG5cbmNsYXNzIFdhbGxldENvbm5lY3RQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJldmVudHNcIiwgbmV3IEV2ZW50RW1pdHRlcigpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJycGNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzaWduZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJodHRwXCIsIHZvaWQgMCk7XG4gICAgdGhpcy5ycGMgPSB7XG4gICAgICBpbmZ1cmFJZDogb3B0cz8uaW5mdXJhSWQsXG4gICAgICBjdXN0b206IG9wdHM/LnJwY1xuICAgIH07XG4gICAgdGhpcy5zaWduZXIgPSBuZXcgSnNvblJwY1Byb3ZpZGVyKG5ldyBTaWduZXJDb25uZWN0aW9uJDEob3B0cykpO1xuICAgIGNvbnN0IGNoYWluSWQgPSB0aGlzLnNpZ25lci5jb25uZWN0aW9uLmNoYWluSWQgfHwgb3B0cz8uY2hhaW5JZCB8fCAxO1xuICAgIHRoaXMuaHR0cCA9IHRoaXMuc2V0SHR0cFByb3ZpZGVyKGNoYWluSWQpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICB9XG4gIGdldCBjb25uZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmVyLmNvbm5lY3Rpb24uY29ubmVjdGVkO1xuICB9XG4gIGdldCBjb25uZWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmVyLmNvbm5lY3Rpb24uY29ubmVjdG9yO1xuICB9XG4gIGdldCBhY2NvdW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduZXIuY29ubmVjdGlvbi5hY2NvdW50cztcbiAgfVxuICBnZXQgY2hhaW5JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduZXIuY29ubmVjdGlvbi5jaGFpbklkO1xuICB9XG4gIGdldCBycGNVcmwoKSB7XG4gICAgcmV0dXJuICh0aGlzLmh0dHA/LmNvbm5lY3Rpb24pLnVybCB8fCBcIlwiO1xuICB9XG4gIGFzeW5jIHJlcXVlc3QoYXJncykge1xuICAgIHN3aXRjaCAoYXJncy5tZXRob2QpIHtcbiAgICAgIGNhc2UgXCJldGhfcmVxdWVzdEFjY291bnRzXCI6XG4gICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5zaWduZXIuY29ubmVjdGlvbi5hY2NvdW50cztcbiAgICAgIGNhc2UgXCJldGhfYWNjb3VudHNcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmVyLmNvbm5lY3Rpb24uYWNjb3VudHM7XG4gICAgICBjYXNlIFwiZXRoX2NoYWluSWRcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmVyLmNvbm5lY3Rpb24uY2hhaW5JZDtcbiAgICB9XG4gICAgaWYgKFNJR05JTkdfTUVUSE9EUy5pbmNsdWRlcyhhcmdzLm1ldGhvZCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNpZ25lci5yZXF1ZXN0KGFyZ3MpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMuaHR0cCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgcmVxdWVzdCBKU09OLVJQQyBtZXRob2QgKCR7YXJncy5tZXRob2R9KSB3aXRob3V0IHByb3ZpZGVkIHJwYyB1cmxgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KGFyZ3MpO1xuICB9XG4gIGFzeW5jIGVuYWJsZSgpIHtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiXG4gICAgfSk7XG4gICAgcmV0dXJuIGFjY291bnRzO1xuICB9XG4gIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgaWYgKCF0aGlzLnNpZ25lci5jb25uZWN0aW9uLmNvbm5lY3RlZCkge1xuICAgICAgYXdhaXQgdGhpcy5zaWduZXIuY29ubmVjdCgpO1xuICAgIH1cbiAgfVxuICBhc3luYyBkaXNjb25uZWN0KCkge1xuICAgIGlmICh0aGlzLnNpZ25lci5jb25uZWN0aW9uLmNvbm5lY3RlZCkge1xuICAgICAgYXdhaXQgdGhpcy5zaWduZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfVxuICBvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLmV2ZW50cy5vbihldmVudCwgbGlzdGVuZXIpO1xuICB9XG4gIG9uY2UoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5ldmVudHMub25jZShldmVudCwgbGlzdGVuZXIpO1xuICB9XG4gIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuZXZlbnRzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbiAgb2ZmKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuZXZlbnRzLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICB9XG4gIGdldCBpc1dhbGxldENvbm5lY3QoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tIFByaXZhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICByZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuc2lnbmVyLmNvbm5lY3Rpb24ub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgYWNjb3VudHMgPT4ge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChcImFjY291bnRzQ2hhbmdlZFwiLCBhY2NvdW50cyk7XG4gICAgfSk7XG4gICAgdGhpcy5zaWduZXIuY29ubmVjdGlvbi5vbihcImNoYWluQ2hhbmdlZFwiLCBjaGFpbklkID0+IHtcbiAgICAgIHRoaXMuaHR0cCA9IHRoaXMuc2V0SHR0cFByb3ZpZGVyKGNoYWluSWQpO1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChcImNoYWluQ2hhbmdlZFwiLCBjaGFpbklkKTtcbiAgICB9KTtcbiAgICB0aGlzLmNvbm5lY3Rvci5vbihcImRpc3BsYXlfdXJpXCIsIChlcnJvciwgcGF5bG9hZCkgPT4ge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChcImRpc3BsYXlfdXJpXCIsIGVycm9yLCBwYXlsb2FkKTtcbiAgICB9KTtcbiAgICB0aGlzLmNvbm5lY3Rvci5vbihcImNhbGxfcmVxdWVzdF9zZW50XCIsIChlcnJvciwgcGF5bG9hZCkgPT4ge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChcImNhbGxfcmVxdWVzdF9zZW50XCIsIGVycm9yLCBwYXlsb2FkKTtcbiAgICB9KTtcbiAgICB0aGlzLnNpZ25lci5vbihcImRpc2Nvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChcImRpc2Nvbm5lY3RcIik7XG4gICAgfSk7XG4gIH1cbiAgc2V0SHR0cFByb3ZpZGVyKGNoYWluSWQpIHtcbiAgICBjb25zdCBycGNVcmwgPSBnZXRScGNVcmwoY2hhaW5JZCwgdGhpcy5ycGMpO1xuICAgIGlmICh0eXBlb2YgcnBjVXJsID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBodHRwID0gbmV3IEpzb25ScGNQcm92aWRlcihuZXcgSHR0cENvbm5lY3Rpb24ocnBjVXJsKSk7XG4gICAgcmV0dXJuIGh0dHA7XG4gIH1cbn1cblxuZXhwb3J0IHsgV2FsbGV0Q29ubmVjdFByb3ZpZGVyIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJldmVudHNcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiY3Jvc3MtZmV0Y2hcIjtcbmltcG9ydCB7IHNhZmVKc29uUGFyc2UsIHNhZmVKc29uU3RyaW5naWZ5IH0gZnJvbSBcIkB3YWxsZXRjb25uZWN0L3NhZmUtanNvblwiO1xuaW1wb3J0IHsgZm9ybWF0SnNvblJwY0Vycm9yLCBpc0h0dHBVcmwsIHBhcnNlQ29ubmVjdGlvbkVycm9yLCB9IGZyb20gXCJAd2FsbGV0Y29ubmVjdC9qc29ucnBjLXV0aWxzXCI7XG5jb25zdCBERUZBVUxUX0hUVFBfSEVBREVSUyA9IHtcbiAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxufTtcbmNvbnN0IERFRkFVTFRfSFRUUF9NRVRIT0QgPSBcIlBPU1RcIjtcbmNvbnN0IERFRkFVTFRfRkVUQ0hfT1BUUyA9IHtcbiAgICBoZWFkZXJzOiBERUZBVUxUX0hUVFBfSEVBREVSUyxcbiAgICBtZXRob2Q6IERFRkFVTFRfSFRUUF9NRVRIT0QsXG59O1xuY29uc3QgRVZFTlRfRU1JVFRFUl9NQVhfTElTVEVORVJTX0RFRkFVTFQgPSAxMDtcbmV4cG9ydCBjbGFzcyBIdHRwQ29ubmVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IodXJsLCBkaXNhYmxlUHJvdmlkZXJQaW5nID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuZGlzYWJsZVByb3ZpZGVyUGluZyA9IGRpc2FibGVQcm92aWRlclBpbmc7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLmlzQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFpc0h0dHBVcmwodXJsKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQcm92aWRlZCBVUkwgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBIVFRQIGNvbm5lY3Rpb246ICR7dXJsfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmRpc2FibGVQcm92aWRlclBpbmcgPSBkaXNhYmxlUHJvdmlkZXJQaW5nO1xuICAgIH1cbiAgICBnZXQgY29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0F2YWlsYWJsZTtcbiAgICB9XG4gICAgZ2V0IGNvbm5lY3RpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyaW5nO1xuICAgIH1cbiAgICBvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5ldmVudHMub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgb25jZShldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5ldmVudHMub25jZShldmVudCwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICBvZmYoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICByZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgYXN5bmMgb3Blbih1cmwgPSB0aGlzLnVybCkge1xuICAgICAgICBhd2FpdCB0aGlzLnJlZ2lzdGVyKHVybCk7XG4gICAgfVxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbm5lY3Rpb24gYWxyZWFkeSBjbG9zZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgfVxuICAgIGFzeW5jIHNlbmQocGF5bG9hZCwgY29udGV4dCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVnaXN0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IHNhZmVKc29uU3RyaW5naWZ5KHBheWxvYWQpO1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godGhpcy51cmwsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9GRVRDSF9PUFRTKSwgeyBib2R5IH0pKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgdGhpcy5vblBheWxvYWQoeyBkYXRhIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IocGF5bG9hZC5pZCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgcmVnaXN0ZXIodXJsID0gdGhpcy51cmwpIHtcbiAgICAgICAgaWYgKCFpc0h0dHBVcmwodXJsKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQcm92aWRlZCBVUkwgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBIVFRQIGNvbm5lY3Rpb246ICR7dXJsfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TWF4TGlzdGVuZXJzID0gdGhpcy5ldmVudHMuZ2V0TWF4TGlzdGVuZXJzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5ldmVudHMubGlzdGVuZXJDb3VudChcInJlZ2lzdGVyX2Vycm9yXCIpID49IGN1cnJlbnRNYXhMaXN0ZW5lcnMgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5saXN0ZW5lckNvdW50KFwib3BlblwiKSA+PSBjdXJyZW50TWF4TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuc2V0TWF4TGlzdGVuZXJzKGN1cnJlbnRNYXhMaXN0ZW5lcnMgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMub25jZShcInJlZ2lzdGVyX2Vycm9yXCIsIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldE1heExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLm9uY2UoXCJvcGVuXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldE1heExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuaXNBdmFpbGFibGUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKFwiSFRUUCBjb25uZWN0aW9uIGlzIG1pc3Npbmcgb3IgaW52YWxpZFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJpbmcgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVQcm92aWRlclBpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0gc2FmZUpzb25TdHJpbmdpZnkoeyBpZDogMSwganNvbnJwYzogXCIyLjBcIiwgbWV0aG9kOiBcInRlc3RcIiwgcGFyYW1zOiBbXSB9KTtcbiAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaCh1cmwsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9GRVRDSF9PUFRTKSwgeyBib2R5IH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25PcGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5wYXJzZUVycm9yKGUpO1xuICAgICAgICAgICAgdGhpcy5ldmVudHMuZW1pdChcInJlZ2lzdGVyX2Vycm9yXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25PcGVuKCkge1xuICAgICAgICB0aGlzLmlzQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWdpc3RlcmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KFwib3BlblwiKTtcbiAgICB9XG4gICAgb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5pc0F2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoXCJjbG9zZVwiKTtcbiAgICB9XG4gICAgb25QYXlsb2FkKGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlLmRhdGEgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB0eXBlb2YgZS5kYXRhID09PSBcInN0cmluZ1wiID8gc2FmZUpzb25QYXJzZShlLmRhdGEpIDogZS5kYXRhO1xuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KFwicGF5bG9hZFwiLCBwYXlsb2FkKTtcbiAgICB9XG4gICAgb25FcnJvcihpZCwgZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMucGFyc2VFcnJvcihlKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGZvcm1hdEpzb25ScGNFcnJvcihpZCwgbWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoXCJwYXlsb2FkXCIsIHBheWxvYWQpO1xuICAgIH1cbiAgICBwYXJzZUVycm9yKGUsIHVybCA9IHRoaXMudXJsKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUNvbm5lY3Rpb25FcnJvcihlLCB1cmwsIFwiSFRUUFwiKTtcbiAgICB9XG4gICAgcmVzZXRNYXhMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50cy5nZXRNYXhMaXN0ZW5lcnMoKSA+IEVWRU5UX0VNSVRURVJfTUFYX0xJU1RFTkVSU19ERUZBVUxUKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5zZXRNYXhMaXN0ZW5lcnMoRVZFTlRfRU1JVFRFUl9NQVhfTElTVEVORVJTX0RFRkFVTFQpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSHR0cENvbm5lY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwLmpzLm1hcCIsImltcG9ydCBIdHRwQ29ubmVjdGlvbiBmcm9tIFwiLi9odHRwXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9odHRwXCI7XG5leHBvcnQgZGVmYXVsdCBIdHRwQ29ubmVjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IEVSUk9SX1NFU1NJT05fQ09OTkVDVEVELCBFUlJPUl9TRVNTSU9OX0RJU0NPTk5FQ1RFRCwgRVJST1JfU0VTU0lPTl9SRUpFQ1RFRCwgRVJST1JfTUlTU0lOR19KU09OX1JQQywgRVJST1JfTUlTU0lOR19SRVNVTFQsIEVSUk9SX01JU1NJTkdfRVJST1IsIEVSUk9SX01JU1NJTkdfTUVUSE9ELCBFUlJPUl9NSVNTSU5HX0lELCBFUlJPUl9JTlZBTElEX1JFU1BPTlNFLCBFUlJPUl9JTlZBTElEX1VSSSwgRVJST1JfTUlTU0lOR19SRVFVSVJFRCwgRVJST1JfUVJDT0RFX01PREFMX05PVF9QUk9WSURFRCwgRVJST1JfUVJDT0RFX01PREFMX1VTRVJfQ0xPU0VELCBTSUdOSU5HX01FVEhPRFMsIE1PQklMRV9MSU5LX0NIT0lDRV9LRVksIH0gZnJvbSBcIkB3YWxsZXRjb25uZWN0L2xlZ2FjeS10eXBlc1wiO1xuaW1wb3J0IHsgY29udmVydEFycmF5QnVmZmVyVG9IZXgsIGNvbnZlcnRIZXhUb0FycmF5QnVmZmVyLCBwYXlsb2FkSWQsIHV1aWQsIGZvcm1hdFJwY0Vycm9yLCBwYXJzZVdhbGxldENvbm5lY3RVcmksIGNvbnZlcnROdW1iZXJUb0hleCwgaXNKc29uUnBjUmVzcG9uc2VTdWNjZXNzLCBpc0pzb25ScGNSZXNwb25zZUVycm9yLCBpc1NpbGVudFBheWxvYWQsIGdldExvY2FsLCByZW1vdmVMb2NhbCwgZ2V0Q2xpZW50TWV0YSwgaXNNb2JpbGUsIH0gZnJvbSBcIkB3YWxsZXRjb25uZWN0L2xlZ2FjeS11dGlsc1wiO1xuaW1wb3J0IFNvY2tldFRyYW5zcG9ydCBmcm9tIFwiLi9zb2NrZXRcIjtcbmltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgU2Vzc2lvblN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgZ2V0QnJpZGdlVXJsIH0gZnJvbSBcIi4vdXJsXCI7XG5jbGFzcyBDb25uZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IFwid2NcIjtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gMTtcbiAgICAgICAgdGhpcy5fYnJpZGdlID0gXCJcIjtcbiAgICAgICAgdGhpcy5fa2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY2xpZW50SWQgPSBcIlwiO1xuICAgICAgICB0aGlzLl9jbGllbnRNZXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcGVlcklkID0gXCJcIjtcbiAgICAgICAgdGhpcy5fcGVlck1ldGEgPSBudWxsO1xuICAgICAgICB0aGlzLl9oYW5kc2hha2VJZCA9IDA7XG4gICAgICAgIHRoaXMuX2hhbmRzaGFrZVRvcGljID0gXCJcIjtcbiAgICAgICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2FjY291bnRzID0gW107XG4gICAgICAgIHRoaXMuX2NoYWluSWQgPSAwO1xuICAgICAgICB0aGlzLl9uZXR3b3JrSWQgPSAwO1xuICAgICAgICB0aGlzLl9ycGNVcmwgPSBcIlwiO1xuICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuX2NsaWVudE1ldGEgPSBnZXRDbGllbnRNZXRhKCkgfHwgb3B0cy5jb25uZWN0b3JPcHRzLmNsaWVudE1ldGEgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5fY3J5cHRvTGliID0gb3B0cy5jcnlwdG9MaWI7XG4gICAgICAgIHRoaXMuX3Nlc3Npb25TdG9yYWdlID0gb3B0cy5zZXNzaW9uU3RvcmFnZSB8fCBuZXcgU2Vzc2lvblN0b3JhZ2Uob3B0cy5jb25uZWN0b3JPcHRzLnN0b3JhZ2VJZCk7XG4gICAgICAgIHRoaXMuX3FyY29kZU1vZGFsID0gb3B0cy5jb25uZWN0b3JPcHRzLnFyY29kZU1vZGFsO1xuICAgICAgICB0aGlzLl9xcmNvZGVNb2RhbE9wdGlvbnMgPSBvcHRzLmNvbm5lY3Rvck9wdHMucXJjb2RlTW9kYWxPcHRpb25zO1xuICAgICAgICB0aGlzLl9zaWduaW5nTWV0aG9kcyA9IFsuLi5TSUdOSU5HX01FVEhPRFMsIC4uLihvcHRzLmNvbm5lY3Rvck9wdHMuc2lnbmluZ01ldGhvZHMgfHwgW10pXTtcbiAgICAgICAgaWYgKCFvcHRzLmNvbm5lY3Rvck9wdHMuYnJpZGdlICYmICFvcHRzLmNvbm5lY3Rvck9wdHMudXJpICYmICFvcHRzLmNvbm5lY3Rvck9wdHMuc2Vzc2lvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01JU1NJTkdfUkVRVUlSRUQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLmNvbm5lY3Rvck9wdHMuYnJpZGdlKSB7XG4gICAgICAgICAgICB0aGlzLmJyaWRnZSA9IGdldEJyaWRnZVVybChvcHRzLmNvbm5lY3Rvck9wdHMuYnJpZGdlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5jb25uZWN0b3JPcHRzLnVyaSkge1xuICAgICAgICAgICAgdGhpcy51cmkgPSBvcHRzLmNvbm5lY3Rvck9wdHMudXJpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBvcHRzLmNvbm5lY3Rvck9wdHMuc2Vzc2lvbiB8fCB0aGlzLl9nZXRTdG9yYWdlU2Vzc2lvbigpO1xuICAgICAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYW5kc2hha2VJZCkge1xuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlVG9TZXNzaW9uUmVzcG9uc2UodGhpcy5oYW5kc2hha2VJZCwgXCJTZXNzaW9uIHJlcXVlc3QgcmVqZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0ID1cbiAgICAgICAgICAgIG9wdHMudHJhbnNwb3J0IHx8XG4gICAgICAgICAgICAgICAgbmV3IFNvY2tldFRyYW5zcG9ydCh7XG4gICAgICAgICAgICAgICAgICAgIHByb3RvY29sOiB0aGlzLnByb3RvY29sLFxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uOiB0aGlzLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgIHVybDogdGhpcy5icmlkZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbnM6IFt0aGlzLmNsaWVudElkXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlVG9JbnRlcm5hbEV2ZW50cygpO1xuICAgICAgICB0aGlzLl9pbml0VHJhbnNwb3J0KCk7XG4gICAgICAgIGlmIChvcHRzLmNvbm5lY3Rvck9wdHMudXJpKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmVUb1Nlc3Npb25SZXF1ZXN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMucHVzaFNlcnZlck9wdHMpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdGVyUHVzaFNlcnZlcihvcHRzLnB1c2hTZXJ2ZXJPcHRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQgYnJpZGdlKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9icmlkZ2UgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGJyaWRnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JyaWRnZTtcbiAgICB9XG4gICAgc2V0IGtleSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5ID0gY29udmVydEhleFRvQXJyYXlCdWZmZXIodmFsdWUpO1xuICAgICAgICB0aGlzLl9rZXkgPSBrZXk7XG4gICAgfVxuICAgIGdldCBrZXkoKSB7XG4gICAgICAgIGlmICh0aGlzLl9rZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGNvbnZlcnRBcnJheUJ1ZmZlclRvSGV4KHRoaXMuX2tleSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBzZXQgY2xpZW50SWQodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NsaWVudElkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBjbGllbnRJZCgpIHtcbiAgICAgICAgbGV0IGNsaWVudElkID0gdGhpcy5fY2xpZW50SWQ7XG4gICAgICAgIGlmICghY2xpZW50SWQpIHtcbiAgICAgICAgICAgIGNsaWVudElkID0gdGhpcy5fY2xpZW50SWQgPSB1dWlkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudElkO1xuICAgIH1cbiAgICBzZXQgcGVlcklkKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wZWVySWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHBlZXJJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BlZXJJZDtcbiAgICB9XG4gICAgc2V0IGNsaWVudE1ldGEodmFsdWUpIHtcbiAgICB9XG4gICAgZ2V0IGNsaWVudE1ldGEoKSB7XG4gICAgICAgIGxldCBjbGllbnRNZXRhID0gdGhpcy5fY2xpZW50TWV0YTtcbiAgICAgICAgaWYgKCFjbGllbnRNZXRhKSB7XG4gICAgICAgICAgICBjbGllbnRNZXRhID0gdGhpcy5fY2xpZW50TWV0YSA9IGdldENsaWVudE1ldGEoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xpZW50TWV0YTtcbiAgICB9XG4gICAgc2V0IHBlZXJNZXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3BlZXJNZXRhID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBwZWVyTWV0YSgpIHtcbiAgICAgICAgY29uc3QgcGVlck1ldGEgPSB0aGlzLl9wZWVyTWV0YTtcbiAgICAgICAgcmV0dXJuIHBlZXJNZXRhO1xuICAgIH1cbiAgICBzZXQgaGFuZHNoYWtlVG9waWModmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hhbmRzaGFrZVRvcGljID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBoYW5kc2hha2VUb3BpYygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRzaGFrZVRvcGljO1xuICAgIH1cbiAgICBzZXQgaGFuZHNoYWtlSWQodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hhbmRzaGFrZUlkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBoYW5kc2hha2VJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRzaGFrZUlkO1xuICAgIH1cbiAgICBnZXQgdXJpKCkge1xuICAgICAgICBjb25zdCBfdXJpID0gdGhpcy5fZm9ybWF0VXJpKCk7XG4gICAgICAgIHJldHVybiBfdXJpO1xuICAgIH1cbiAgICBzZXQgdXJpKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGhhbmRzaGFrZVRvcGljLCBicmlkZ2UsIGtleSB9ID0gdGhpcy5fcGFyc2VVcmkodmFsdWUpO1xuICAgICAgICB0aGlzLmhhbmRzaGFrZVRvcGljID0gaGFuZHNoYWtlVG9waWM7XG4gICAgICAgIHRoaXMuYnJpZGdlID0gYnJpZGdlO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG4gICAgc2V0IGNoYWluSWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY2hhaW5JZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgY2hhaW5JZCgpIHtcbiAgICAgICAgY29uc3QgY2hhaW5JZCA9IHRoaXMuX2NoYWluSWQ7XG4gICAgICAgIHJldHVybiBjaGFpbklkO1xuICAgIH1cbiAgICBzZXQgbmV0d29ya0lkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX25ldHdvcmtJZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbmV0d29ya0lkKCkge1xuICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSB0aGlzLl9uZXR3b3JrSWQ7XG4gICAgICAgIHJldHVybiBuZXR3b3JrSWQ7XG4gICAgfVxuICAgIHNldCBhY2NvdW50cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9hY2NvdW50cyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgYWNjb3VudHMoKSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gdGhpcy5fYWNjb3VudHM7XG4gICAgICAgIHJldHVybiBhY2NvdW50cztcbiAgICB9XG4gICAgc2V0IHJwY1VybCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9ycGNVcmwgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHJwY1VybCgpIHtcbiAgICAgICAgY29uc3QgcnBjVXJsID0gdGhpcy5fcnBjVXJsO1xuICAgICAgICByZXR1cm4gcnBjVXJsO1xuICAgIH1cbiAgICBzZXQgY29ubmVjdGVkKHZhbHVlKSB7XG4gICAgfVxuICAgIGdldCBjb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWQ7XG4gICAgfVxuICAgIHNldCBwZW5kaW5nKHZhbHVlKSB7XG4gICAgfVxuICAgIGdldCBwZW5kaW5nKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9oYW5kc2hha2VUb3BpYztcbiAgICB9XG4gICAgZ2V0IHNlc3Npb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb25uZWN0ZWQ6IHRoaXMuY29ubmVjdGVkLFxuICAgICAgICAgICAgYWNjb3VudHM6IHRoaXMuYWNjb3VudHMsXG4gICAgICAgICAgICBjaGFpbklkOiB0aGlzLmNoYWluSWQsXG4gICAgICAgICAgICBicmlkZ2U6IHRoaXMuYnJpZGdlLFxuICAgICAgICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgICAgICAgIGNsaWVudElkOiB0aGlzLmNsaWVudElkLFxuICAgICAgICAgICAgY2xpZW50TWV0YTogdGhpcy5jbGllbnRNZXRhLFxuICAgICAgICAgICAgcGVlcklkOiB0aGlzLnBlZXJJZCxcbiAgICAgICAgICAgIHBlZXJNZXRhOiB0aGlzLnBlZXJNZXRhLFxuICAgICAgICAgICAgaGFuZHNoYWtlSWQ6IHRoaXMuaGFuZHNoYWtlSWQsXG4gICAgICAgICAgICBoYW5kc2hha2VUb3BpYzogdGhpcy5oYW5kc2hha2VUb3BpYyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc2V0IHNlc3Npb24odmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IHZhbHVlLmNvbm5lY3RlZDtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IHZhbHVlLmFjY291bnRzO1xuICAgICAgICB0aGlzLmNoYWluSWQgPSB2YWx1ZS5jaGFpbklkO1xuICAgICAgICB0aGlzLmJyaWRnZSA9IHZhbHVlLmJyaWRnZTtcbiAgICAgICAgdGhpcy5rZXkgPSB2YWx1ZS5rZXk7XG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSB2YWx1ZS5jbGllbnRJZDtcbiAgICAgICAgdGhpcy5jbGllbnRNZXRhID0gdmFsdWUuY2xpZW50TWV0YTtcbiAgICAgICAgdGhpcy5wZWVySWQgPSB2YWx1ZS5wZWVySWQ7XG4gICAgICAgIHRoaXMucGVlck1ldGEgPSB2YWx1ZS5wZWVyTWV0YTtcbiAgICAgICAgdGhpcy5oYW5kc2hha2VJZCA9IHZhbHVlLmhhbmRzaGFrZUlkO1xuICAgICAgICB0aGlzLmhhbmRzaGFrZVRvcGljID0gdmFsdWUuaGFuZHNoYWtlVG9waWM7XG4gICAgfVxuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBldmVudEVtaXR0ZXIgPSB7XG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIuc3Vic2NyaWJlKGV2ZW50RW1pdHRlcik7XG4gICAgfVxuICAgIG9mZihldmVudCkge1xuICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIudW5zdWJzY3JpYmUoZXZlbnQpO1xuICAgIH1cbiAgICBhc3luYyBjcmVhdGVJbnN0YW50UmVxdWVzdChpbnN0YW50UmVxdWVzdCkge1xuICAgICAgICB0aGlzLl9rZXkgPSBhd2FpdCB0aGlzLl9nZW5lcmF0ZUtleSgpO1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5fZm9ybWF0UmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwid2NfaW5zdGFudFJlcXVlc3RcIixcbiAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGVlcklkOiB0aGlzLmNsaWVudElkLFxuICAgICAgICAgICAgICAgICAgICBwZWVyTWV0YTogdGhpcy5jbGllbnRNZXRhLFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB0aGlzLl9mb3JtYXRSZXF1ZXN0KGluc3RhbnRSZXF1ZXN0KSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGFuZHNoYWtlSWQgPSByZXF1ZXN0LmlkO1xuICAgICAgICB0aGlzLmhhbmRzaGFrZVRvcGljID0gdXVpZCgpO1xuICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIudHJpZ2dlcih7XG4gICAgICAgICAgICBldmVudDogXCJkaXNwbGF5X3VyaVwiLFxuICAgICAgICAgICAgcGFyYW1zOiBbdGhpcy51cmldLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbihcIm1vZGFsX2Nsb3NlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfUVJDT0RFX01PREFMX1VTRVJfQ0xPU0VEKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGVuZEluc3RhbnRSZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5raWxsU2Vzc2lvbigpO1xuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fc2VuZENhbGxSZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGVuZEluc3RhbnRSZXF1ZXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZW5kSW5zdGFudFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGNvbm5lY3Qob3B0cykge1xuICAgICAgICBpZiAoIXRoaXMuX3FyY29kZU1vZGFsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfUVJDT0RFX01PREFMX05PVF9QUk9WSURFRCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNoYWluSWQ6IHRoaXMuY2hhaW5JZCxcbiAgICAgICAgICAgICAgICBhY2NvdW50czogdGhpcy5hY2NvdW50cyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVTZXNzaW9uKG9wdHMpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbihcIm1vZGFsX2Nsb3NlZFwiLCAoKSA9PiByZWplY3QobmV3IEVycm9yKEVSUk9SX1FSQ09ERV9NT0RBTF9VU0VSX0NMT1NFRCkpKTtcbiAgICAgICAgICAgIHRoaXMub24oXCJjb25uZWN0XCIsIChlcnJvciwgcGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwYXlsb2FkLnBhcmFtc1swXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGNyZWF0ZVNlc3Npb24ob3B0cykge1xuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfU0VTU0lPTl9DT05ORUNURUQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9rZXkgPSBhd2FpdCB0aGlzLl9nZW5lcmF0ZUtleSgpO1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5fZm9ybWF0UmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwid2Nfc2Vzc2lvblJlcXVlc3RcIixcbiAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGVlcklkOiB0aGlzLmNsaWVudElkLFxuICAgICAgICAgICAgICAgICAgICBwZWVyTWV0YTogdGhpcy5jbGllbnRNZXRhLFxuICAgICAgICAgICAgICAgICAgICBjaGFpbklkOiBvcHRzICYmIG9wdHMuY2hhaW5JZCA/IG9wdHMuY2hhaW5JZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRzaGFrZUlkID0gcmVxdWVzdC5pZDtcbiAgICAgICAgdGhpcy5oYW5kc2hha2VUb3BpYyA9IHV1aWQoKTtcbiAgICAgICAgdGhpcy5fc2VuZFNlc3Npb25SZXF1ZXN0KHJlcXVlc3QsIFwiU2Vzc2lvbiB1cGRhdGUgcmVqZWN0ZWRcIiwge1xuICAgICAgICAgICAgdG9waWM6IHRoaXMuaGFuZHNoYWtlVG9waWMsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIudHJpZ2dlcih7XG4gICAgICAgICAgICBldmVudDogXCJkaXNwbGF5X3VyaVwiLFxuICAgICAgICAgICAgcGFyYW1zOiBbdGhpcy51cmldLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXBwcm92ZVNlc3Npb24oc2Vzc2lvblN0YXR1cykge1xuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfU0VTU0lPTl9DT05ORUNURUQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhaW5JZCA9IHNlc3Npb25TdGF0dXMuY2hhaW5JZDtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IHNlc3Npb25TdGF0dXMuYWNjb3VudHM7XG4gICAgICAgIHRoaXMubmV0d29ya0lkID0gc2Vzc2lvblN0YXR1cy5uZXR3b3JrSWQgfHwgMDtcbiAgICAgICAgdGhpcy5ycGNVcmwgPSBzZXNzaW9uU3RhdHVzLnJwY1VybCB8fCBcIlwiO1xuICAgICAgICBjb25zdCBzZXNzaW9uUGFyYW1zID0ge1xuICAgICAgICAgICAgYXBwcm92ZWQ6IHRydWUsXG4gICAgICAgICAgICBjaGFpbklkOiB0aGlzLmNoYWluSWQsXG4gICAgICAgICAgICBuZXR3b3JrSWQ6IHRoaXMubmV0d29ya0lkLFxuICAgICAgICAgICAgYWNjb3VudHM6IHRoaXMuYWNjb3VudHMsXG4gICAgICAgICAgICBycGNVcmw6IHRoaXMucnBjVXJsLFxuICAgICAgICAgICAgcGVlcklkOiB0aGlzLmNsaWVudElkLFxuICAgICAgICAgICAgcGVlck1ldGE6IHRoaXMuY2xpZW50TWV0YSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBpZDogdGhpcy5oYW5kc2hha2VJZCxcbiAgICAgICAgICAgIGpzb25ycGM6IFwiMi4wXCIsXG4gICAgICAgICAgICByZXN1bHQ6IHNlc3Npb25QYXJhbXMsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NlbmRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3NldFN0b3JhZ2VTZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuX2V2ZW50TWFuYWdlci50cmlnZ2VyKHtcbiAgICAgICAgICAgIGV2ZW50OiBcImNvbm5lY3RcIixcbiAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGVlcklkOiB0aGlzLnBlZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgcGVlck1ldGE6IHRoaXMucGVlck1ldGEsXG4gICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6IHRoaXMuY2hhaW5JZCxcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudHM6IHRoaXMuYWNjb3VudHMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWplY3RTZXNzaW9uKHNlc3Npb25FcnJvcikge1xuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfU0VTU0lPTl9DT05ORUNURUQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzZXNzaW9uRXJyb3IgJiYgc2Vzc2lvbkVycm9yLm1lc3NhZ2UgPyBzZXNzaW9uRXJyb3IubWVzc2FnZSA6IEVSUk9SX1NFU1NJT05fUkVKRUNURUQ7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5fZm9ybWF0UmVzcG9uc2Uoe1xuICAgICAgICAgICAgaWQ6IHRoaXMuaGFuZHNoYWtlSWQsXG4gICAgICAgICAgICBlcnJvcjogeyBtZXNzYWdlIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zZW5kUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLnRyaWdnZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IFwiZGlzY29ubmVjdFwiLFxuICAgICAgICAgICAgcGFyYW1zOiBbeyBtZXNzYWdlIH1dLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlU3RvcmFnZVNlc3Npb24oKTtcbiAgICB9XG4gICAgdXBkYXRlU2Vzc2lvbihzZXNzaW9uU3RhdHVzKSB7XG4gICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfU0VTU0lPTl9ESVNDT05ORUNURUQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhaW5JZCA9IHNlc3Npb25TdGF0dXMuY2hhaW5JZDtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IHNlc3Npb25TdGF0dXMuYWNjb3VudHM7XG4gICAgICAgIHRoaXMubmV0d29ya0lkID0gc2Vzc2lvblN0YXR1cy5uZXR3b3JrSWQgfHwgMDtcbiAgICAgICAgdGhpcy5ycGNVcmwgPSBzZXNzaW9uU3RhdHVzLnJwY1VybCB8fCBcIlwiO1xuICAgICAgICBjb25zdCBzZXNzaW9uUGFyYW1zID0ge1xuICAgICAgICAgICAgYXBwcm92ZWQ6IHRydWUsXG4gICAgICAgICAgICBjaGFpbklkOiB0aGlzLmNoYWluSWQsXG4gICAgICAgICAgICBuZXR3b3JrSWQ6IHRoaXMubmV0d29ya0lkLFxuICAgICAgICAgICAgYWNjb3VudHM6IHRoaXMuYWNjb3VudHMsXG4gICAgICAgICAgICBycGNVcmw6IHRoaXMucnBjVXJsLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5fZm9ybWF0UmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwid2Nfc2Vzc2lvblVwZGF0ZVwiLFxuICAgICAgICAgICAgcGFyYW1zOiBbc2Vzc2lvblBhcmFtc10sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zZW5kU2Vzc2lvblJlcXVlc3QocmVxdWVzdCwgXCJTZXNzaW9uIHVwZGF0ZSByZWplY3RlZFwiKTtcbiAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLnRyaWdnZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IFwic2Vzc2lvbl91cGRhdGVcIixcbiAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogdGhpcy5jaGFpbklkLFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50czogdGhpcy5hY2NvdW50cyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX21hbmFnZVN0b3JhZ2VTZXNzaW9uKCk7XG4gICAgfVxuICAgIGFzeW5jIGtpbGxTZXNzaW9uKHNlc3Npb25FcnJvcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gc2Vzc2lvbkVycm9yID8gc2Vzc2lvbkVycm9yLm1lc3NhZ2UgOiBcIlNlc3Npb24gRGlzY29ubmVjdGVkXCI7XG4gICAgICAgIGNvbnN0IHNlc3Npb25QYXJhbXMgPSB7XG4gICAgICAgICAgICBhcHByb3ZlZDogZmFsc2UsXG4gICAgICAgICAgICBjaGFpbklkOiBudWxsLFxuICAgICAgICAgICAgbmV0d29ya0lkOiBudWxsLFxuICAgICAgICAgICAgYWNjb3VudHM6IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLl9mb3JtYXRSZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJ3Y19zZXNzaW9uVXBkYXRlXCIsXG4gICAgICAgICAgICBwYXJhbXM6IFtzZXNzaW9uUGFyYW1zXSxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRSZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgICB0aGlzLl9oYW5kbGVTZXNzaW9uRGlzY29ubmVjdChtZXNzYWdlKTtcbiAgICB9XG4gICAgYXN5bmMgc2VuZFRyYW5zYWN0aW9uKHR4KSB7XG4gICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfU0VTU0lPTl9ESVNDT05ORUNURUQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR4ID0gdHg7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLl9mb3JtYXRSZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJldGhfc2VuZFRyYW5zYWN0aW9uXCIsXG4gICAgICAgICAgICBwYXJhbXM6IFtwYXJzZWRUeF0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9zZW5kQ2FsbFJlcXVlc3QocmVxdWVzdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGFzeW5jIHNpZ25UcmFuc2FjdGlvbih0eCkge1xuICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX1NFU1NJT05fRElTQ09OTkVDVEVEKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeCA9IHR4O1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5fZm9ybWF0UmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiZXRoX3NpZ25UcmFuc2FjdGlvblwiLFxuICAgICAgICAgICAgcGFyYW1zOiBbcGFyc2VkVHhdLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fc2VuZENhbGxSZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBhc3luYyBzaWduTWVzc2FnZShwYXJhbXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9TRVNTSU9OX0RJU0NPTk5FQ1RFRCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuX2Zvcm1hdFJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcImV0aF9zaWduXCIsXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9zZW5kQ2FsbFJlcXVlc3QocmVxdWVzdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGFzeW5jIHNpZ25QZXJzb25hbE1lc3NhZ2UocGFyYW1zKSB7XG4gICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfU0VTU0lPTl9ESVNDT05ORUNURUQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLl9mb3JtYXRSZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJwZXJzb25hbF9zaWduXCIsXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9zZW5kQ2FsbFJlcXVlc3QocmVxdWVzdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGFzeW5jIHNpZ25UeXBlZERhdGEocGFyYW1zKSB7XG4gICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfU0VTU0lPTl9ESVNDT05ORUNURUQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLl9mb3JtYXRSZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJldGhfc2lnblR5cGVkRGF0YVwiLFxuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fc2VuZENhbGxSZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBhc3luYyB1cGRhdGVDaGFpbihjaGFpblBhcmFtcykge1xuICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2Vzc2lvbiBjdXJyZW50bHkgZGlzY29ubmVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLl9mb3JtYXRSZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJ3YWxsZXRfdXBkYXRlQ2hhaW5cIixcbiAgICAgICAgICAgIHBhcmFtczogW2NoYWluUGFyYW1zXSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3NlbmRDYWxsUmVxdWVzdChyZXF1ZXN0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgdW5zYWZlU2VuZChyZXF1ZXN0LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KHJlcXVlc3QsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIudHJpZ2dlcih7XG4gICAgICAgICAgICBldmVudDogXCJjYWxsX3JlcXVlc3Rfc2VudFwiLFxuICAgICAgICAgICAgcGFyYW1zOiBbeyByZXF1ZXN0LCBvcHRpb25zIH1dLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZVRvUmVzcG9uc2UocmVxdWVzdC5pZCwgKGVycm9yLCBwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NSVNTSU5HX0pTT05fUlBDKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwYXlsb2FkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgc2VuZEN1c3RvbVJlcXVlc3QocmVxdWVzdCwgb3B0aW9ucykge1xuICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX1NFU1NJT05fRElTQ09OTkVDVEVEKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHJlcXVlc3QubWV0aG9kKSB7XG4gICAgICAgICAgICBjYXNlIFwiZXRoX2FjY291bnRzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudHM7XG4gICAgICAgICAgICBjYXNlIFwiZXRoX2NoYWluSWRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udmVydE51bWJlclRvSGV4KHRoaXMuY2hhaW5JZCk7XG4gICAgICAgICAgICBjYXNlIFwiZXRoX3NlbmRUcmFuc2FjdGlvblwiOlxuICAgICAgICAgICAgY2FzZSBcImV0aF9zaWduVHJhbnNhY3Rpb25cIjpcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGVyc29uYWxfc2lnblwiOlxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnBhcmFtcykge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVxdWVzdCA9IHRoaXMuX2Zvcm1hdFJlcXVlc3QocmVxdWVzdCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3NlbmRDYWxsUmVxdWVzdChmb3JtYXR0ZWRSZXF1ZXN0LCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgYXBwcm92ZVJlcXVlc3QocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKGlzSnNvblJwY1Jlc3BvbnNlU3VjY2VzcyhyZXNwb25zZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFJlc3BvbnNlID0gdGhpcy5fZm9ybWF0UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5fc2VuZFJlc3BvbnNlKGZvcm1hdHRlZFJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NSVNTSU5HX1JFU1VMVCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVqZWN0UmVxdWVzdChyZXNwb25zZSkge1xuICAgICAgICBpZiAoaXNKc29uUnBjUmVzcG9uc2VFcnJvcihyZXNwb25zZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFJlc3BvbnNlID0gdGhpcy5fZm9ybWF0UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5fc2VuZFJlc3BvbnNlKGZvcm1hdHRlZFJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NSVNTSU5HX0VSUk9SKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0cmFuc3BvcnRDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgfVxuICAgIGFzeW5jIF9zZW5kUmVxdWVzdChyZXF1ZXN0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGNhbGxSZXF1ZXN0ID0gdGhpcy5fZm9ybWF0UmVxdWVzdChyZXF1ZXN0KTtcbiAgICAgICAgY29uc3QgZW5jcnlwdGlvblBheWxvYWQgPSBhd2FpdCB0aGlzLl9lbmNyeXB0KGNhbGxSZXF1ZXN0KTtcbiAgICAgICAgY29uc3QgdG9waWMgPSB0eXBlb2YgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy50b3BpYykgIT09IFwidW5kZWZpbmVkXCIgPyBvcHRpb25zLnRvcGljIDogdGhpcy5wZWVySWQ7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeShlbmNyeXB0aW9uUGF5bG9hZCk7XG4gICAgICAgIGNvbnN0IHNpbGVudCA9IHR5cGVvZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZvcmNlUHVzaE5vdGlmaWNhdGlvbikgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgID8gIW9wdGlvbnMuZm9yY2VQdXNoTm90aWZpY2F0aW9uXG4gICAgICAgICAgICA6IGlzU2lsZW50UGF5bG9hZChjYWxsUmVxdWVzdCk7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydC5zZW5kKHBheWxvYWQsIHRvcGljLCBzaWxlbnQpO1xuICAgIH1cbiAgICBhc3luYyBfc2VuZFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGVuY3J5cHRpb25QYXlsb2FkID0gYXdhaXQgdGhpcy5fZW5jcnlwdChyZXNwb25zZSk7XG4gICAgICAgIGNvbnN0IHRvcGljID0gdGhpcy5wZWVySWQ7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeShlbmNyeXB0aW9uUGF5bG9hZCk7XG4gICAgICAgIGNvbnN0IHNpbGVudCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydC5zZW5kKHBheWxvYWQsIHRvcGljLCBzaWxlbnQpO1xuICAgIH1cbiAgICBhc3luYyBfc2VuZFNlc3Npb25SZXF1ZXN0KHJlcXVlc3QsIGVycm9yTXNnLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KHJlcXVlc3QsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVUb1Nlc3Npb25SZXNwb25zZShyZXF1ZXN0LmlkLCBlcnJvck1zZyk7XG4gICAgfVxuICAgIF9zZW5kQ2FsbFJlcXVlc3QocmVxdWVzdCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChyZXF1ZXN0LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLnRyaWdnZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IFwiY2FsbF9yZXF1ZXN0X3NlbnRcIixcbiAgICAgICAgICAgIHBhcmFtczogW3sgcmVxdWVzdCwgb3B0aW9ucyB9XSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmVUb0NhbGxSZXNwb25zZShyZXF1ZXN0LmlkKTtcbiAgICB9XG4gICAgX2Zvcm1hdFJlcXVlc3QocmVxdWVzdCkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3QubWV0aG9kID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTUlTU0lOR19NRVRIT0QpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFJlcXVlc3QgPSB7XG4gICAgICAgICAgICBpZDogdHlwZW9mIHJlcXVlc3QuaWQgPT09IFwidW5kZWZpbmVkXCIgPyBwYXlsb2FkSWQoKSA6IHJlcXVlc3QuaWQsXG4gICAgICAgICAgICBqc29ucnBjOiBcIjIuMFwiLFxuICAgICAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgICAgIHBhcmFtczogdHlwZW9mIHJlcXVlc3QucGFyYW1zID09PSBcInVuZGVmaW5lZFwiID8gW10gOiByZXF1ZXN0LnBhcmFtcyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFJlcXVlc3Q7XG4gICAgfVxuICAgIF9mb3JtYXRSZXNwb25zZShyZXNwb25zZSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlLmlkID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTUlTU0lOR19JRCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmFzZVJlc3BvbnNlID0geyBpZDogcmVzcG9uc2UuaWQsIGpzb25ycGM6IFwiMi4wXCIgfTtcbiAgICAgICAgaWYgKGlzSnNvblJwY1Jlc3BvbnNlRXJyb3IocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IGZvcm1hdFJwY0Vycm9yKHJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yUmVzcG9uc2UgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYmFzZVJlc3BvbnNlKSwgcmVzcG9uc2UpLCB7IGVycm9yIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yUmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNKc29uUnBjUmVzcG9uc2VTdWNjZXNzKHJlc3BvbnNlKSkge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc1Jlc3BvbnNlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBiYXNlUmVzcG9uc2UpLCByZXNwb25zZSk7XG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc1Jlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9JTlZBTElEX1JFU1BPTlNFKTtcbiAgICB9XG4gICAgX2hhbmRsZVNlc3Npb25EaXNjb25uZWN0KGVycm9yTXNnKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvck1zZyB8fCBcIlNlc3Npb24gRGlzY29ubmVjdGVkXCI7XG4gICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcXJjb2RlTW9kYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9xcmNvZGVNb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlTG9jYWwoTU9CSUxFX0xJTktfQ0hPSUNFX0tFWSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2hhbmRzaGFrZUlkKSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kc2hha2VJZCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2hhbmRzaGFrZVRvcGljKSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kc2hha2VUb3BpYyA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3BlZXJJZCkge1xuICAgICAgICAgICAgdGhpcy5fcGVlcklkID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIudHJpZ2dlcih7XG4gICAgICAgICAgICBldmVudDogXCJkaXNjb25uZWN0XCIsXG4gICAgICAgICAgICBwYXJhbXM6IFt7IG1lc3NhZ2UgfV0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZW1vdmVTdG9yYWdlU2Vzc2lvbigpO1xuICAgICAgICB0aGlzLnRyYW5zcG9ydENsb3NlKCk7XG4gICAgfVxuICAgIF9oYW5kbGVTZXNzaW9uUmVzcG9uc2UoZXJyb3JNc2csIHNlc3Npb25QYXJhbXMpIHtcbiAgICAgICAgaWYgKHNlc3Npb25QYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChzZXNzaW9uUGFyYW1zLmFwcHJvdmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlc3Npb25QYXJhbXMuY2hhaW5JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFpbklkID0gc2Vzc2lvblBhcmFtcy5jaGFpbklkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uUGFyYW1zLmFjY291bnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnRzID0gc2Vzc2lvblBhcmFtcy5hY2NvdW50cztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvblBhcmFtcy5wZWVySWQgJiYgIXRoaXMucGVlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZXJJZCA9IHNlc3Npb25QYXJhbXMucGVlcklkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uUGFyYW1zLnBlZXJNZXRhICYmICF0aGlzLnBlZXJNZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZXJNZXRhID0gc2Vzc2lvblBhcmFtcy5wZWVyTWV0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIudHJpZ2dlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJjb25uZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJJZDogdGhpcy5wZWVySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJNZXRhOiB0aGlzLnBlZXJNZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkOiB0aGlzLmNoYWluSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzOiB0aGlzLmFjY291bnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uUGFyYW1zLmNoYWluSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhaW5JZCA9IHNlc3Npb25QYXJhbXMuY2hhaW5JZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvblBhcmFtcy5hY2NvdW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50cyA9IHNlc3Npb25QYXJhbXMuYWNjb3VudHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLnRyaWdnZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IFwic2Vzc2lvbl91cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogdGhpcy5jaGFpbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50czogdGhpcy5hY2NvdW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZVN0b3JhZ2VTZXNzaW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVTZXNzaW9uRGlzY29ubmVjdChlcnJvck1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVTZXNzaW9uRGlzY29ubmVjdChlcnJvck1zZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgX2hhbmRsZUluY29taW5nTWVzc2FnZXMoc29ja2V0TWVzc2FnZSkge1xuICAgICAgICBjb25zdCBhY3RpdmVUb3BpY3MgPSBbdGhpcy5jbGllbnRJZCwgdGhpcy5oYW5kc2hha2VUb3BpY107XG4gICAgICAgIGlmICghYWN0aXZlVG9waWNzLmluY2x1ZGVzKHNvY2tldE1lc3NhZ2UudG9waWMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVuY3J5cHRpb25QYXlsb2FkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZW5jcnlwdGlvblBheWxvYWQgPSBKU09OLnBhcnNlKHNvY2tldE1lc3NhZ2UucGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHRoaXMuX2RlY3J5cHQoZW5jcnlwdGlvblBheWxvYWQpO1xuICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLnRyaWdnZXIocGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3N1YnNjcmliZVRvU2Vzc2lvblJlcXVlc3QoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydC5zdWJzY3JpYmUodGhpcy5oYW5kc2hha2VUb3BpYyk7XG4gICAgfVxuICAgIF9zdWJzY3JpYmVUb1Jlc3BvbnNlKGlkLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uKGByZXNwb25zZToke2lkfWAsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgX3N1YnNjcmliZVRvU2Vzc2lvblJlc3BvbnNlKGlkLCBlcnJvck1zZykge1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVUb1Jlc3BvbnNlKGlkLCAoZXJyb3IsIHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVNlc3Npb25SZXNwb25zZShlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNKc29uUnBjUmVzcG9uc2VTdWNjZXNzKHBheWxvYWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlU2Vzc2lvblJlc3BvbnNlKGVycm9yTXNnLCBwYXlsb2FkLnJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXlsb2FkLmVycm9yICYmIHBheWxvYWQuZXJyb3IubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVNlc3Npb25SZXNwb25zZShwYXlsb2FkLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlU2Vzc2lvblJlc3BvbnNlKGVycm9yTXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zdWJzY3JpYmVUb0NhbGxSZXNwb25zZShpZCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlVG9SZXNwb25zZShpZCwgKGVycm9yLCBwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzSnNvblJwY1Jlc3BvbnNlU3VjY2VzcyhwYXlsb2FkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBheWxvYWQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGF5bG9hZC5lcnJvciAmJiBwYXlsb2FkLmVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHBheWxvYWQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihFUlJPUl9JTlZBTElEX1JFU1BPTlNFKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc3Vic2NyaWJlVG9JbnRlcm5hbEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5vbihcImRpc3BsYXlfdXJpXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9xcmNvZGVNb2RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3FyY29kZU1vZGFsLm9wZW4odGhpcy51cmksICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLnRyaWdnZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IFwibW9kYWxfY2xvc2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLl9xcmNvZGVNb2RhbE9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3FyY29kZU1vZGFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcXJjb2RlTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oXCJjYWxsX3JlcXVlc3Rfc2VudFwiLCAoZXJyb3IsIHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVxdWVzdCB9ID0gcGF5bG9hZC5wYXJhbXNbMF07XG4gICAgICAgICAgICBpZiAoaXNNb2JpbGUoKSAmJiB0aGlzLl9zaWduaW5nTWV0aG9kcy5pbmNsdWRlcyhyZXF1ZXN0Lm1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2JpbGVMaW5rVXJsID0gZ2V0TG9jYWwoTU9CSUxFX0xJTktfQ0hPSUNFX0tFWSk7XG4gICAgICAgICAgICAgICAgaWYgKG1vYmlsZUxpbmtVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBtb2JpbGVMaW5rVXJsLmhyZWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbihcIndjX3Nlc3Npb25SZXF1ZXN0XCIsIChlcnJvciwgcGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLnRyaWdnZXIoe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBcIlNFU1NJT05fUkVRVUVTVF9FUlJPUlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oYW5kc2hha2VJZCA9IHBheWxvYWQuaWQ7XG4gICAgICAgICAgICB0aGlzLnBlZXJJZCA9IHBheWxvYWQucGFyYW1zWzBdLnBlZXJJZDtcbiAgICAgICAgICAgIHRoaXMucGVlck1ldGEgPSBwYXlsb2FkLnBhcmFtc1swXS5wZWVyTWV0YTtcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFsUGF5bG9hZCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcGF5bG9hZCksIHsgbWV0aG9kOiBcInNlc3Npb25fcmVxdWVzdFwiIH0pO1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLnRyaWdnZXIoaW50ZXJuYWxQYXlsb2FkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oXCJ3Y19zZXNzaW9uVXBkYXRlXCIsIChlcnJvciwgcGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlU2Vzc2lvblJlc3BvbnNlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faGFuZGxlU2Vzc2lvblJlc3BvbnNlKFwiU2Vzc2lvbiBkaXNjb25uZWN0ZWRcIiwgcGF5bG9hZC5wYXJhbXNbMF0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2luaXRUcmFuc3BvcnQoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydC5vbihcIm1lc3NhZ2VcIiwgKHNvY2tldE1lc3NhZ2UpID0+IHRoaXMuX2hhbmRsZUluY29taW5nTWVzc2FnZXMoc29ja2V0TWVzc2FnZSkpO1xuICAgICAgICB0aGlzLl90cmFuc3BvcnQub24oXCJvcGVuXCIsICgpID0+IHRoaXMuX2V2ZW50TWFuYWdlci50cmlnZ2VyKHsgZXZlbnQ6IFwidHJhbnNwb3J0X29wZW5cIiwgcGFyYW1zOiBbXSB9KSk7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydC5vbihcImNsb3NlXCIsICgpID0+IHRoaXMuX2V2ZW50TWFuYWdlci50cmlnZ2VyKHsgZXZlbnQ6IFwidHJhbnNwb3J0X2Nsb3NlXCIsIHBhcmFtczogW10gfSkpO1xuICAgICAgICB0aGlzLl90cmFuc3BvcnQub24oXCJlcnJvclwiLCAoKSA9PiB0aGlzLl9ldmVudE1hbmFnZXIudHJpZ2dlcih7XG4gICAgICAgICAgICBldmVudDogXCJ0cmFuc3BvcnRfZXJyb3JcIixcbiAgICAgICAgICAgIHBhcmFtczogW1wiV2Vic29ja2V0IGNvbm5lY3Rpb24gZmFpbGVkXCJdLFxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydC5vcGVuKCk7XG4gICAgfVxuICAgIF9mb3JtYXRVcmkoKSB7XG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gdGhpcy5wcm90b2NvbDtcbiAgICAgICAgY29uc3QgaGFuZHNoYWtlVG9waWMgPSB0aGlzLmhhbmRzaGFrZVRvcGljO1xuICAgICAgICBjb25zdCB2ZXJzaW9uID0gdGhpcy52ZXJzaW9uO1xuICAgICAgICBjb25zdCBicmlkZ2UgPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy5icmlkZ2UpO1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmtleTtcbiAgICAgICAgY29uc3QgdXJpID0gYCR7cHJvdG9jb2x9OiR7aGFuZHNoYWtlVG9waWN9QCR7dmVyc2lvbn0/YnJpZGdlPSR7YnJpZGdlfSZrZXk9JHtrZXl9YDtcbiAgICAgICAgcmV0dXJuIHVyaTtcbiAgICB9XG4gICAgX3BhcnNlVXJpKHVyaSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBwYXJzZVdhbGxldENvbm5lY3RVcmkodXJpKTtcbiAgICAgICAgaWYgKHJlc3VsdC5wcm90b2NvbCA9PT0gdGhpcy5wcm90b2NvbCkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFuZHNoYWtlVG9waWMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgb3IgbWlzc2luZyBoYW5kc2hha2VUb3BpYyBwYXJhbWV0ZXIgdmFsdWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoYW5kc2hha2VUb3BpYyA9IHJlc3VsdC5oYW5kc2hha2VUb3BpYztcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmJyaWRnZSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBvciBtaXNzaW5nIGJyaWRnZSB1cmwgcGFyYW1ldGVyIHZhbHVlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYnJpZGdlID0gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdC5icmlkZ2UpO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQua2V5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIG9yIG1pc3Npbmcga2V5IHBhcmFtZXRlciB2YWx1ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHJlc3VsdC5rZXk7XG4gICAgICAgICAgICByZXR1cm4geyBoYW5kc2hha2VUb3BpYywgYnJpZGdlLCBrZXkgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9JTlZBTElEX1VSSSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgX2dlbmVyYXRlS2V5KCkge1xuICAgICAgICBpZiAodGhpcy5fY3J5cHRvTGliKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9jcnlwdG9MaWIuZ2VuZXJhdGVLZXkoKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFzeW5jIF9lbmNyeXB0KGRhdGEpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5fa2V5O1xuICAgICAgICBpZiAodGhpcy5fY3J5cHRvTGliICYmIGtleSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fY3J5cHRvTGliLmVuY3J5cHQoZGF0YSwga2V5KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFzeW5jIF9kZWNyeXB0KHBheWxvYWQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5fa2V5O1xuICAgICAgICBpZiAodGhpcy5fY3J5cHRvTGliICYmIGtleSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fY3J5cHRvTGliLmRlY3J5cHQocGF5bG9hZCwga2V5KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIF9nZXRTdG9yYWdlU2Vzc2lvbigpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fc2Vzc2lvblN0b3JhZ2UuZ2V0U2Vzc2lvbigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIF9zZXRTdG9yYWdlU2Vzc2lvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nlc3Npb25TdG9yYWdlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXNzaW9uU3RvcmFnZS5zZXRTZXNzaW9uKHRoaXMuc2Vzc2lvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3JlbW92ZVN0b3JhZ2VTZXNzaW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nlc3Npb25TdG9yYWdlLnJlbW92ZVNlc3Npb24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfbWFuYWdlU3RvcmFnZVNlc3Npb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFN0b3JhZ2VTZXNzaW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVTdG9yYWdlU2Vzc2lvbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9yZWdpc3RlclB1c2hTZXJ2ZXIocHVzaFNlcnZlck9wdHMpIHtcbiAgICAgICAgaWYgKCFwdXNoU2VydmVyT3B0cy51cmwgfHwgdHlwZW9mIHB1c2hTZXJ2ZXJPcHRzLnVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIG9yIG1pc3NpbmcgcHVzaFNlcnZlck9wdHMudXJsIHBhcmFtZXRlciB2YWx1ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXB1c2hTZXJ2ZXJPcHRzLnR5cGUgfHwgdHlwZW9mIHB1c2hTZXJ2ZXJPcHRzLnR5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBvciBtaXNzaW5nIHB1c2hTZXJ2ZXJPcHRzLnR5cGUgcGFyYW1ldGVyIHZhbHVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHVzaFNlcnZlck9wdHMudG9rZW4gfHwgdHlwZW9mIHB1c2hTZXJ2ZXJPcHRzLnRva2VuICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgb3IgbWlzc2luZyBwdXNoU2VydmVyT3B0cy50b2tlbiBwYXJhbWV0ZXIgdmFsdWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHVzaFN1YnNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgIGJyaWRnZTogdGhpcy5icmlkZ2UsXG4gICAgICAgICAgICB0b3BpYzogdGhpcy5jbGllbnRJZCxcbiAgICAgICAgICAgIHR5cGU6IHB1c2hTZXJ2ZXJPcHRzLnR5cGUsXG4gICAgICAgICAgICB0b2tlbjogcHVzaFNlcnZlck9wdHMudG9rZW4sXG4gICAgICAgICAgICBwZWVyTmFtZTogXCJcIixcbiAgICAgICAgICAgIGxhbmd1YWdlOiBwdXNoU2VydmVyT3B0cy5sYW5ndWFnZSB8fCBcIlwiLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uKFwiY29ubmVjdFwiLCBhc3luYyAoZXJyb3IsIHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHB1c2hTZXJ2ZXJPcHRzLnBlZXJNZXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVlck5hbWUgPSBwYXlsb2FkLnBhcmFtc1swXS5wZWVyTWV0YS5uYW1lO1xuICAgICAgICAgICAgICAgIHB1c2hTdWJzY3JpcHRpb24ucGVlck5hbWUgPSBwZWVyTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwdXNoU2VydmVyT3B0cy51cmx9L25ld2AsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwdXNoU3Vic2NyaXB0aW9uKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGlmICghanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiRmFpbGVkIHRvIHJlZ2lzdGVyIGluIFB1c2ggU2VydmVyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiRmFpbGVkIHRvIHJlZ2lzdGVyIGluIFB1c2ggU2VydmVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb25uZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmpzLm1hcCIsImltcG9ydCAqIGFzIGNyeXB0byBmcm9tIFwiQHdhbGxldGNvbm5lY3QvY3J5cHRvXCI7XG5pbXBvcnQgKiBhcyBlbmNvZGluZyBmcm9tIFwiQHdhbGxldGNvbm5lY3QvZW5jb2RpbmdcIjtcbmltcG9ydCB7IGNvbnZlcnRBcnJheUJ1ZmZlclRvQnVmZmVyLCBjb252ZXJ0QnVmZmVyVG9BcnJheUJ1ZmZlciwgfSBmcm9tIFwiQHdhbGxldGNvbm5lY3QvbGVnYWN5LXV0aWxzXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVLZXkobGVuZ3RoKSB7XG4gICAgY29uc3QgX2xlbmd0aCA9IChsZW5ndGggfHwgMjU2KSAvIDg7XG4gICAgY29uc3QgYnl0ZXMgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoX2xlbmd0aCk7XG4gICAgY29uc3QgcmVzdWx0ID0gY29udmVydEJ1ZmZlclRvQXJyYXlCdWZmZXIoZW5jb2RpbmcuYXJyYXlUb0J1ZmZlcihieXRlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5SG1hYyhwYXlsb2FkLCBrZXkpIHtcbiAgICBjb25zdCBjaXBoZXJUZXh0ID0gZW5jb2RpbmcuaGV4VG9BcnJheShwYXlsb2FkLmRhdGEpO1xuICAgIGNvbnN0IGl2ID0gZW5jb2RpbmcuaGV4VG9BcnJheShwYXlsb2FkLml2KTtcbiAgICBjb25zdCBobWFjID0gZW5jb2RpbmcuaGV4VG9BcnJheShwYXlsb2FkLmhtYWMpO1xuICAgIGNvbnN0IGhtYWNIZXggPSBlbmNvZGluZy5hcnJheVRvSGV4KGhtYWMsIGZhbHNlKTtcbiAgICBjb25zdCB1bnNpZ25lZCA9IGVuY29kaW5nLmNvbmNhdEFycmF5cyhjaXBoZXJUZXh0LCBpdik7XG4gICAgY29uc3QgY2htYWMgPSBhd2FpdCBjcnlwdG8uaG1hY1NoYTI1NlNpZ24oa2V5LCB1bnNpZ25lZCk7XG4gICAgY29uc3QgY2htYWNIZXggPSBlbmNvZGluZy5hcnJheVRvSGV4KGNobWFjLCBmYWxzZSk7XG4gICAgaWYgKGVuY29kaW5nLnJlbW92ZUhleFByZWZpeChobWFjSGV4KSA9PT0gZW5jb2RpbmcucmVtb3ZlSGV4UHJlZml4KGNobWFjSGV4KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuY3J5cHQoZGF0YSwga2V5LCBwcm92aWRlZEl2KSB7XG4gICAgY29uc3QgX2tleSA9IGVuY29kaW5nLmJ1ZmZlclRvQXJyYXkoY29udmVydEFycmF5QnVmZmVyVG9CdWZmZXIoa2V5KSk7XG4gICAgY29uc3QgaXZBcnJheUJ1ZmZlciA9IHByb3ZpZGVkSXYgfHwgKGF3YWl0IGdlbmVyYXRlS2V5KDEyOCkpO1xuICAgIGNvbnN0IGl2ID0gZW5jb2RpbmcuYnVmZmVyVG9BcnJheShjb252ZXJ0QXJyYXlCdWZmZXJUb0J1ZmZlcihpdkFycmF5QnVmZmVyKSk7XG4gICAgY29uc3QgaXZIZXggPSBlbmNvZGluZy5hcnJheVRvSGV4KGl2LCBmYWxzZSk7XG4gICAgY29uc3QgY29udGVudFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlbmNvZGluZy51dGY4VG9BcnJheShjb250ZW50U3RyaW5nKTtcbiAgICBjb25zdCBjaXBoZXJUZXh0ID0gYXdhaXQgY3J5cHRvLmFlc0NiY0VuY3J5cHQoaXYsIF9rZXksIGNvbnRlbnQpO1xuICAgIGNvbnN0IGNpcGhlclRleHRIZXggPSBlbmNvZGluZy5hcnJheVRvSGV4KGNpcGhlclRleHQsIGZhbHNlKTtcbiAgICBjb25zdCB1bnNpZ25lZCA9IGVuY29kaW5nLmNvbmNhdEFycmF5cyhjaXBoZXJUZXh0LCBpdik7XG4gICAgY29uc3QgaG1hYyA9IGF3YWl0IGNyeXB0by5obWFjU2hhMjU2U2lnbihfa2V5LCB1bnNpZ25lZCk7XG4gICAgY29uc3QgaG1hY0hleCA9IGVuY29kaW5nLmFycmF5VG9IZXgoaG1hYywgZmFsc2UpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IGNpcGhlclRleHRIZXgsXG4gICAgICAgIGhtYWM6IGhtYWNIZXgsXG4gICAgICAgIGl2OiBpdkhleCxcbiAgICB9O1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlY3J5cHQocGF5bG9hZCwga2V5KSB7XG4gICAgY29uc3QgX2tleSA9IGVuY29kaW5nLmJ1ZmZlclRvQXJyYXkoY29udmVydEFycmF5QnVmZmVyVG9CdWZmZXIoa2V5KSk7XG4gICAgaWYgKCFfa2V5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3Npbmcga2V5OiByZXF1aXJlZCBmb3IgZGVjcnlwdGlvblwiKTtcbiAgICB9XG4gICAgY29uc3QgdmVyaWZpZWQgPSBhd2FpdCB2ZXJpZnlIbWFjKHBheWxvYWQsIF9rZXkpO1xuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNpcGhlclRleHQgPSBlbmNvZGluZy5oZXhUb0FycmF5KHBheWxvYWQuZGF0YSk7XG4gICAgY29uc3QgaXYgPSBlbmNvZGluZy5oZXhUb0FycmF5KHBheWxvYWQuaXYpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IGNyeXB0by5hZXNDYmNEZWNyeXB0KGl2LCBfa2V5LCBjaXBoZXJUZXh0KTtcbiAgICBjb25zdCB1dGY4ID0gZW5jb2RpbmcuYXJyYXlUb1V0ZjgoYnVmZmVyKTtcbiAgICBsZXQgZGF0YTtcbiAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh1dGY4KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyeXB0by5qcy5tYXAiLCJpbXBvcnQgeyBpc0pzb25ScGNSZXF1ZXN0LCBpc0pzb25ScGNSZXNwb25zZVN1Y2Nlc3MsIGlzSnNvblJwY1Jlc3BvbnNlRXJyb3IsIGlzSW50ZXJuYWxFdmVudCwgaXNSZXNlcnZlZEV2ZW50LCB9IGZyb20gXCJAd2FsbGV0Y29ubmVjdC9sZWdhY3ktdXRpbHNcIjtcbmNsYXNzIEV2ZW50TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50RW1pdHRlcnMgPSBbXTtcbiAgICB9XG4gICAgc3Vic2NyaWJlKGV2ZW50RW1pdHRlcikge1xuICAgICAgICB0aGlzLl9ldmVudEVtaXR0ZXJzLnB1c2goZXZlbnRFbWl0dGVyKTtcbiAgICB9XG4gICAgdW5zdWJzY3JpYmUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRFbWl0dGVycyA9IHRoaXMuX2V2ZW50RW1pdHRlcnMuZmlsdGVyKHggPT4geC5ldmVudCAhPT0gZXZlbnQpO1xuICAgIH1cbiAgICB0cmlnZ2VyKHBheWxvYWQpIHtcbiAgICAgICAgbGV0IGV2ZW50RW1pdHRlcnMgPSBbXTtcbiAgICAgICAgbGV0IGV2ZW50O1xuICAgICAgICBpZiAoaXNKc29uUnBjUmVxdWVzdChwYXlsb2FkKSkge1xuICAgICAgICAgICAgZXZlbnQgPSBwYXlsb2FkLm1ldGhvZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0pzb25ScGNSZXNwb25zZVN1Y2Nlc3MocGF5bG9hZCkgfHwgaXNKc29uUnBjUmVzcG9uc2VFcnJvcihwYXlsb2FkKSkge1xuICAgICAgICAgICAgZXZlbnQgPSBgcmVzcG9uc2U6JHtwYXlsb2FkLmlkfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJbnRlcm5hbEV2ZW50KHBheWxvYWQpKSB7XG4gICAgICAgICAgICBldmVudCA9IHBheWxvYWQuZXZlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudEVtaXR0ZXJzID0gdGhpcy5fZXZlbnRFbWl0dGVycy5maWx0ZXIoKGV2ZW50RW1pdHRlcikgPT4gZXZlbnRFbWl0dGVyLmV2ZW50ID09PSBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCghZXZlbnRFbWl0dGVycyB8fCAhZXZlbnRFbWl0dGVycy5sZW5ndGgpICYmXG4gICAgICAgICAgICAhaXNSZXNlcnZlZEV2ZW50KGV2ZW50KSAmJlxuICAgICAgICAgICAgIWlzSW50ZXJuYWxFdmVudChldmVudCkpIHtcbiAgICAgICAgICAgIGV2ZW50RW1pdHRlcnMgPSB0aGlzLl9ldmVudEVtaXR0ZXJzLmZpbHRlcigoZXZlbnRFbWl0dGVyKSA9PiBldmVudEVtaXR0ZXIuZXZlbnQgPT09IFwiY2FsbF9yZXF1ZXN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50RW1pdHRlcnMuZm9yRWFjaCgoZXZlbnRFbWl0dGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNKc29uUnBjUmVzcG9uc2VFcnJvcihwYXlsb2FkKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHBheWxvYWQuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlci5jYWxsYmFjayhudWxsLCBwYXlsb2FkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRXZlbnRNYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnRzLmpzLm1hcCIsImltcG9ydCBDb25uZWN0b3IgZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0ICogYXMgY3J5cHRvTGliIGZyb20gXCIuL2NyeXB0b1wiO1xuY2xhc3MgV2FsbGV0Q29ubmVjdCBleHRlbmRzIENvbm5lY3RvciB7XG4gICAgY29uc3RydWN0b3IoY29ubmVjdG9yT3B0cywgcHVzaFNlcnZlck9wdHMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgY3J5cHRvTGliLFxuICAgICAgICAgICAgY29ubmVjdG9yT3B0cyxcbiAgICAgICAgICAgIHB1c2hTZXJ2ZXJPcHRzLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBXYWxsZXRDb25uZWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiY2xhc3MgTmV0d29ya01vbml0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9ldmVudEVtaXR0ZXJzID0gW107XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwgKCkgPT4gdGhpcy50cmlnZ2VyKFwib25saW5lXCIpKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCAoKSA9PiB0aGlzLnRyaWdnZXIoXCJvZmZsaW5lXCIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZXZlbnRFbWl0dGVycy5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0cmlnZ2VyKGV2ZW50KSB7XG4gICAgICAgIGxldCBldmVudEVtaXR0ZXJzID0gW107XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnRFbWl0dGVycyA9IHRoaXMuX2V2ZW50RW1pdHRlcnMuZmlsdGVyKChldmVudEVtaXR0ZXIpID0+IGV2ZW50RW1pdHRlci5ldmVudCA9PT0gZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50RW1pdHRlcnMuZm9yRWFjaCgoZXZlbnRFbWl0dGVyKSA9PiB7XG4gICAgICAgICAgICBldmVudEVtaXR0ZXIuY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTmV0d29ya01vbml0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZXR3b3JrLmpzLm1hcCIsImltcG9ydCB7IGlzQnJvd3NlciwgZ2V0TG9jYXRpb24sIGRldGVjdEVudiwgZ2V0UXVlcnlTdHJpbmcsIGFwcGVuZFRvUXVlcnlTdHJpbmcsIH0gZnJvbSBcIkB3YWxsZXRjb25uZWN0L2xlZ2FjeS11dGlsc1wiO1xuaW1wb3J0IE5ldHdvcmtNb25pdG9yIGZyb20gXCIuL25ldHdvcmtcIjtcbmNvbnN0IFdTID0gdHlwZW9mIGdsb2JhbC5XZWJTb2NrZXQgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuV2ViU29ja2V0IDogcmVxdWlyZShcIndzXCIpO1xuY2xhc3MgU29ja2V0VHJhbnNwb3J0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuX3Byb3RvY29sID0gb3B0cy5wcm90b2NvbDtcbiAgICAgICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbjtcbiAgICAgICAgdGhpcy5fdXJsID0gXCJcIjtcbiAgICAgICAgdGhpcy5fbmV0TW9uaXRvciA9IG51bGw7XG4gICAgICAgIHRoaXMuX3NvY2tldCA9IG51bGw7XG4gICAgICAgIHRoaXMuX25leHRTb2NrZXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gb3B0cy5zdWJzY3JpcHRpb25zIHx8IFtdO1xuICAgICAgICB0aGlzLl9uZXRNb25pdG9yID0gb3B0cy5uZXRNb25pdG9yIHx8IG5ldyBOZXR3b3JrTW9uaXRvcigpO1xuICAgICAgICBpZiAoIW9wdHMudXJsIHx8IHR5cGVvZiBvcHRzLnVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBvciBpbnZhbGlkIFdlYlNvY2tldCB1cmxcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXJsID0gb3B0cy51cmw7XG4gICAgICAgIHRoaXMuX25ldE1vbml0b3Iub24oXCJvbmxpbmVcIiwgKCkgPT4gdGhpcy5fc29ja2V0Q3JlYXRlKCkpO1xuICAgIH1cbiAgICBzZXQgcmVhZHlTdGF0ZSh2YWx1ZSkge1xuICAgIH1cbiAgICBnZXQgcmVhZHlTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvY2tldCA/IHRoaXMuX3NvY2tldC5yZWFkeVN0YXRlIDogLTE7XG4gICAgfVxuICAgIHNldCBjb25uZWN0aW5nKHZhbHVlKSB7XG4gICAgfVxuICAgIGdldCBjb25uZWN0aW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkeVN0YXRlID09PSAwO1xuICAgIH1cbiAgICBzZXQgY29ubmVjdGVkKHZhbHVlKSB7XG4gICAgfVxuICAgIGdldCBjb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWR5U3RhdGUgPT09IDE7XG4gICAgfVxuICAgIHNldCBjbG9zaW5nKHZhbHVlKSB7XG4gICAgfVxuICAgIGdldCBjbG9zaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkeVN0YXRlID09PSAyO1xuICAgIH1cbiAgICBzZXQgY2xvc2VkKHZhbHVlKSB7XG4gICAgfVxuICAgIGdldCBjbG9zZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWR5U3RhdGUgPT09IDM7XG4gICAgfVxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuX3NvY2tldENyZWF0ZSgpO1xuICAgIH1cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5fc29ja2V0Q2xvc2UoKTtcbiAgICB9XG4gICAgc2VuZChtZXNzYWdlLCB0b3BpYywgc2lsZW50KSB7XG4gICAgICAgIGlmICghdG9waWMgfHwgdHlwZW9mIHRvcGljICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIG9yIGludmFsaWQgdG9waWMgZmllbGRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc29ja2V0U2VuZCh7XG4gICAgICAgICAgICB0b3BpYzogdG9waWMsXG4gICAgICAgICAgICB0eXBlOiBcInB1YlwiLFxuICAgICAgICAgICAgcGF5bG9hZDogbWVzc2FnZSxcbiAgICAgICAgICAgIHNpbGVudDogISFzaWxlbnQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdWJzY3JpYmUodG9waWMpIHtcbiAgICAgICAgdGhpcy5fc29ja2V0U2VuZCh7XG4gICAgICAgICAgICB0b3BpYzogdG9waWMsXG4gICAgICAgICAgICB0eXBlOiBcInN1YlwiLFxuICAgICAgICAgICAgcGF5bG9hZDogXCJcIixcbiAgICAgICAgICAgIHNpbGVudDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9ldmVudHMucHVzaCh7IGV2ZW50LCBjYWxsYmFjayB9KTtcbiAgICB9XG4gICAgX3NvY2tldENyZWF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX25leHRTb2NrZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cmwgPSBnZXRXZWJTb2NrZXRVcmwodGhpcy5fdXJsLCB0aGlzLl9wcm90b2NvbCwgdGhpcy5fdmVyc2lvbik7XG4gICAgICAgIHRoaXMuX25leHRTb2NrZXQgPSBuZXcgV1ModXJsKTtcbiAgICAgICAgaWYgKCF0aGlzLl9uZXh0U29ja2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHNvY2tldFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9uZXh0U29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4gdGhpcy5fc29ja2V0UmVjZWl2ZShldmVudCk7XG4gICAgICAgIHRoaXMuX25leHRTb2NrZXQub25vcGVuID0gKCkgPT4gdGhpcy5fc29ja2V0T3BlbigpO1xuICAgICAgICB0aGlzLl9uZXh0U29ja2V0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHRoaXMuX3NvY2tldEVycm9yKGV2ZW50KTtcbiAgICAgICAgdGhpcy5fbmV4dFNvY2tldC5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbmV4dFNvY2tldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fc29ja2V0Q3JlYXRlKCk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX3NvY2tldE9wZW4oKSB7XG4gICAgICAgIHRoaXMuX3NvY2tldENsb3NlKCk7XG4gICAgICAgIHRoaXMuX3NvY2tldCA9IHRoaXMuX25leHRTb2NrZXQ7XG4gICAgICAgIHRoaXMuX25leHRTb2NrZXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9xdWV1ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICAgICAgdGhpcy5fcHVzaFF1ZXVlKCk7XG4gICAgfVxuICAgIF9zb2NrZXRDbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvY2tldCkge1xuICAgICAgICAgICAgdGhpcy5fc29ja2V0Lm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5fc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3NvY2tldFNlbmQoc29ja2V0TWVzc2FnZSkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoc29ja2V0TWVzc2FnZSk7XG4gICAgICAgIGlmICh0aGlzLl9zb2NrZXQgJiYgdGhpcy5fc29ja2V0LnJlYWR5U3RhdGUgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvY2tldC5zZW5kKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0VG9RdWV1ZShzb2NrZXRNZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMuX3NvY2tldENyZWF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIF9zb2NrZXRSZWNlaXZlKGV2ZW50KSB7XG4gICAgICAgIGxldCBzb2NrZXRNZXNzYWdlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc29ja2V0TWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc29ja2V0U2VuZCh7XG4gICAgICAgICAgICB0b3BpYzogc29ja2V0TWVzc2FnZS50b3BpYyxcbiAgICAgICAgICAgIHR5cGU6IFwiYWNrXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiBcIlwiLFxuICAgICAgICAgICAgc2lsZW50OiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuX3NvY2tldCAmJiB0aGlzLl9zb2NrZXQucmVhZHlTdGF0ZSA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5fZXZlbnRzLmZpbHRlcihldmVudCA9PiBldmVudC5ldmVudCA9PT0gXCJtZXNzYWdlXCIpO1xuICAgICAgICAgICAgaWYgKGV2ZW50cyAmJiBldmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gZXZlbnQuY2FsbGJhY2soc29ja2V0TWVzc2FnZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9zb2NrZXRFcnJvcihlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cy5maWx0ZXIoZXZlbnQgPT4gZXZlbnQuZXZlbnQgPT09IFwiZXJyb3JcIik7XG4gICAgICAgIGlmIChldmVudHMgJiYgZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gZXZlbnQuY2FsbGJhY2soZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9xdWV1ZVN1YnNjcmlwdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICBzdWJzY3JpcHRpb25zLmZvckVhY2goKHRvcGljKSA9PiB0aGlzLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgIHRvcGljOiB0b3BpYyxcbiAgICAgICAgICAgIHR5cGU6IFwic3ViXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiBcIlwiLFxuICAgICAgICAgICAgc2lsZW50OiB0cnVlLFxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSB0aGlzLm9wdHMuc3Vic2NyaXB0aW9ucyB8fCBbXTtcbiAgICB9XG4gICAgX3NldFRvUXVldWUoc29ja2V0TWVzc2FnZSkge1xuICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKHNvY2tldE1lc3NhZ2UpO1xuICAgIH1cbiAgICBfcHVzaFF1ZXVlKCkge1xuICAgICAgICBjb25zdCBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgICAgICBxdWV1ZS5mb3JFYWNoKChzb2NrZXRNZXNzYWdlKSA9PiB0aGlzLl9zb2NrZXRTZW5kKHNvY2tldE1lc3NhZ2UpKTtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRXZWJTb2NrZXRVcmwoX3VybCwgcHJvdG9jb2wsIHZlcnNpb24pIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHVybCA9IF91cmwuc3RhcnRzV2l0aChcImh0dHBzXCIpXG4gICAgICAgID8gX3VybC5yZXBsYWNlKFwiaHR0cHNcIiwgXCJ3c3NcIilcbiAgICAgICAgOiBfdXJsLnN0YXJ0c1dpdGgoXCJodHRwXCIpXG4gICAgICAgICAgICA/IF91cmwucmVwbGFjZShcImh0dHBcIiwgXCJ3c1wiKVxuICAgICAgICAgICAgOiBfdXJsO1xuICAgIGNvbnN0IHNwbGl0VXJsID0gdXJsLnNwbGl0KFwiP1wiKTtcbiAgICBjb25zdCBwYXJhbXMgPSBpc0Jyb3dzZXIoKVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHByb3RvY29sLFxuICAgICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICAgIGVudjogXCJicm93c2VyXCIsXG4gICAgICAgICAgICBob3N0OiAoKF9hID0gZ2V0TG9jYXRpb24oKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvc3QpIHx8IFwiXCIsXG4gICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBwcm90b2NvbCxcbiAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICBlbnY6ICgoX2IgPSBkZXRlY3RFbnYoKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm5hbWUpIHx8IFwiXCIsXG4gICAgICAgIH07XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBhcHBlbmRUb1F1ZXJ5U3RyaW5nKGdldFF1ZXJ5U3RyaW5nKHNwbGl0VXJsWzFdIHx8IFwiXCIpLCBwYXJhbXMpO1xuICAgIHJldHVybiBzcGxpdFVybFswXSArIFwiP1wiICsgcXVlcnlTdHJpbmc7XG59XG5leHBvcnQgZGVmYXVsdCBTb2NrZXRUcmFuc3BvcnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zb2NrZXQuanMubWFwIiwiaW1wb3J0IHsgaXNXYWxsZXRDb25uZWN0U2Vzc2lvbiwgZ2V0TG9jYWwsIHNldExvY2FsLCByZW1vdmVMb2NhbCwgfSBmcm9tIFwiQHdhbGxldGNvbm5lY3QvbGVnYWN5LXV0aWxzXCI7XG5jbGFzcyBTZXNzaW9uU3RvcmFnZSB7XG4gICAgY29uc3RydWN0b3Ioc3RvcmFnZUlkID0gXCJ3YWxsZXRjb25uZWN0XCIpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlSWQgPSBzdG9yYWdlSWQ7XG4gICAgfVxuICAgIGdldFNlc3Npb24oKSB7XG4gICAgICAgIGxldCBzZXNzaW9uID0gbnVsbDtcbiAgICAgICAgY29uc3QganNvbiA9IGdldExvY2FsKHRoaXMuc3RvcmFnZUlkKTtcbiAgICAgICAgaWYgKGpzb24gJiYgaXNXYWxsZXRDb25uZWN0U2Vzc2lvbihqc29uKSkge1xuICAgICAgICAgICAgc2Vzc2lvbiA9IGpzb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfVxuICAgIHNldFNlc3Npb24oc2Vzc2lvbikge1xuICAgICAgICBzZXRMb2NhbCh0aGlzLnN0b3JhZ2VJZCwgc2Vzc2lvbik7XG4gICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH1cbiAgICByZW1vdmVTZXNzaW9uKCkge1xuICAgICAgICByZW1vdmVMb2NhbCh0aGlzLnN0b3JhZ2VJZCk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2Vzc2lvblN0b3JhZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdG9yYWdlLmpzLm1hcCIsImNvbnN0IGRvbWFpbiA9IFwid2FsbGV0Y29ubmVjdC5vcmdcIjtcbmNvbnN0IGFscGhhbnVtZXJpY2FsID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcbmNvbnN0IGJyaWRnZXMgPSBhbHBoYW51bWVyaWNhbC5zcGxpdChcIlwiKS5tYXAoY2hhciA9PiBgaHR0cHM6Ly8ke2NoYXJ9LmJyaWRnZS53YWxsZXRjb25uZWN0Lm9yZ2ApO1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RIb3N0bmFtZSh1cmwpIHtcbiAgICBsZXQgaG9zdG5hbWUgPSB1cmwuaW5kZXhPZihcIi8vXCIpID4gLTEgPyB1cmwuc3BsaXQoXCIvXCIpWzJdIDogdXJsLnNwbGl0KFwiL1wiKVswXTtcbiAgICBob3N0bmFtZSA9IGhvc3RuYW1lLnNwbGl0KFwiOlwiKVswXTtcbiAgICBob3N0bmFtZSA9IGhvc3RuYW1lLnNwbGl0KFwiP1wiKVswXTtcbiAgICByZXR1cm4gaG9zdG5hbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFJvb3REb21haW4odXJsKSB7XG4gICAgcmV0dXJuIGV4dHJhY3RIb3N0bmFtZSh1cmwpXG4gICAgICAgIC5zcGxpdChcIi5cIilcbiAgICAgICAgLnNsaWNlKC0yKVxuICAgICAgICAuam9pbihcIi5cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tQnJpZGdlSW5kZXgoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJyaWRnZXMubGVuZ3RoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RSYW5kb21CcmlkZ2VVcmwoKSB7XG4gICAgcmV0dXJuIGJyaWRnZXNbcmFuZG9tQnJpZGdlSW5kZXgoKV07XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkU2VsZWN0UmFuZG9tbHkodXJsKSB7XG4gICAgcmV0dXJuIGV4dHJhY3RSb290RG9tYWluKHVybCkgPT09IGRvbWFpbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcmlkZ2VVcmwodXJsKSB7XG4gICAgaWYgKHNob3VsZFNlbGVjdFJhbmRvbWx5KHVybCkpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdFJhbmRvbUJyaWRnZVVybCgpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXJsLmpzLm1hcCIsImZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZXgpIHsgcmV0dXJuIChleCAmJiAodHlwZW9mIGV4ID09PSAnb2JqZWN0JykgJiYgJ2RlZmF1bHQnIGluIGV4KSA/IGV4WydkZWZhdWx0J10gOiBleDsgfVxuXG52YXIgbGVnYWN5VXRpbHMgPSByZXF1aXJlKCdAd2FsbGV0Y29ubmVjdC9sZWdhY3ktdXRpbHMnKTtcbnZhciBRUkNvZGUgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgncXJjb2RlJykpO1xudmFyIGNvcHkgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnY29weS10by1jbGlwYm9hcmQnKSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdwcmVhY3QvY29tcGF0Jyk7XG5cbmZ1bmN0aW9uIG9wZW4odXJpKSB7XG4gIFFSQ29kZS50b1N0cmluZyh1cmksIHtcbiAgICB0eXBlOiBcInRlcm1pbmFsXCJcbiAgfSkudGhlbihjb25zb2xlLmxvZyk7XG59XG5cbnZhciBXQUxMRVRDT05ORUNUX1NUWUxFX1NIRUVUID0gXCI6cm9vdCB7XFxuICAtLWFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5hbmltYXRlZCB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbik7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG4uZmFkZUluIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxufVxcblxcbi5mYWRlT3V0IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xcbn1cXG5cXG4jd2FsbGV0Y29ubmVjdC13cmFwcGVyIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGVmdDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk5O1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9faGVhZGVyTG9nbyB7XFxuICBoZWlnaHQ6IDIxcHg7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19oZWFkZXIgcCB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW46IDA7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Nsb3NlX193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyNnB4O1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fY2xvc2VfX2ljb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA3cHg7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19jbG9zZV9fbGluZTEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNDgsIDUyLCA1OSk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19jbG9zZV9fbGluZTIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNDgsIDUyLCA1OSk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LXFyY29kZV9fYmFzZSB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDM3LCA0MSwgNDYsIDAuOTUpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LXFyY29kZV9fdGV4dCB7XFxuICBjb2xvcjogcmdiYSg2MCwgNjYsIDgyLCAwLjYpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTg3NWVtO1xcbiAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC53YWxsZXRjb25uZWN0LXFyY29kZV9fdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAud2FsbGV0Y29ubmVjdC1xcmNvZGVfX3RleHQge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcblxcbi53YWxsZXRjb25uZWN0LXFyY29kZV9faW1hZ2Uge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGN1cnNvcjogbm9uZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1xcmNvZGVfX25vdGlmaWNhdGlvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbi1ib3R0b206IC02MHB4O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtcXJjb2RlX19ub3RpZmljYXRpb24ubm90aWZpY2F0aW9uX19zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC53YWxsZXRjb25uZWN0LW1vZGFsX19oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgfVxcbiAgLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2Uge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgI2NvbnRlbnQge1xcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNDE1cHgpIHtcXG4gICNjb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiA0MTRweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICAjY29udGVudCB7XFxuICAgIG1heC13aWR0aDogMzc1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXG4gICNjb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2Uge1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCA1MHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBmb250LWZhbWlseTogdWktcm91bmRlZCwgXFxcIlNGIFBybyBSb3VuZGVkXFxcIiwgXFxcIlNGIFBybyBUZXh0XFxcIiwgbWVkaXVtLWNvbnRlbnQtc2Fucy1zZXJpZi1mb250LFxcbiAgICAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHVpLXNhbnMtc2VyaWYsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCxcXG4gICAgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tdG9wOiA0MXB4O1xcbiAgcGFkZGluZzogMjRweCAyNHB4IDIycHg7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNHMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdG9wOiA1MCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZSB7XFxuICAgIHBhZGRpbmc6IDI0cHggMTJweDtcXG4gIH1cXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2UgLmhpZGRlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUwJSk7XFxuICB0cmFuc2l0aW9uOiAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19oZWFkZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBsZWZ0OiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNDJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZSAud2MtbG9nbyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMjZweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZSAud2MtbG9nbyBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOTlmZjtcXG4gIGhlaWdodDogMjFweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgbWFzay1pbWFnZTogdXJsKFxcXCJpbWFnZXMvd2MtbG9nby5zdmdcXFwiKSBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgd2lkdGg6IDMycHg7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlIC53Yy1sb2dvIHAge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZSBoMiB7XFxuICBjb2xvcjogcmdiYSg2MCwgNjYsIDgyLCAwLjYpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTg3NWVtO1xcbiAgbWFyZ2luOiAwIDAgMTlweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlX19yb3cge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwcHggMHB4IDhweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB0cmFuc2l0aW9uOiAwLjE1cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNjAsIDY2LCA4MiwgMC4wNik7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlX19yb3c6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNjAsIDY2LCA4MiwgMC4wNik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTc1KTtcXG4gIHRyYW5zaXRpb246IDAuMXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93X19oMyB7XFxuICBjb2xvcjogIzI1MjkyZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93X19yaWdodCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93X19yaWdodF9fYXBwLWljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgbWFyZ2luOiAwIDExcHggMnB4IDA7XFxuICB3aWR0aDogMzRweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCByZ2JhKDM3LCA0MSwgNDYsIDAuMjUpO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93X19yaWdodF9fY2FyZXQge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICB3aWR0aDogOHB4O1xcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlX19yb3c6aG92ZXIgLmNhcmV0LFxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlX19yb3c6YWN0aXZlIC5jYXJldCB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19tb2JpbGVfX3RvZ2dsZSB7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxuICBiYWNrZ3JvdW5kOiAjZDRkNWQ5O1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fc2luZ2xlX3dhbGxldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fc2luZ2xlX3dhbGxldCBhIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoNjQsIDE1MywgMjU1KTtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fbW9iaWxlX190b2dnbGVfc2VsZWN0b3Ige1xcbiAgd2lkdGg6IGNhbGMoNTAlIC0gOHB4KTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cHgpO1xcbiAgdG9wOiA0cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX21vYmlsZV9fdG9nZ2xlLnJpZ2h0X19zZWxlY3RlZCAud2FsbGV0Y29ubmVjdC1tb2RhbF9fbW9iaWxlX190b2dnbGVfc2VsZWN0b3Ige1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDEwMCUgKyAxMnB4KSwgMCwgMCk7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LW1vZGFsX19tb2JpbGVfX3RvZ2dsZSBhIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHdpZHRoOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtbW9kYWxfX2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAud2FsbGV0Y29ubmVjdC1tb2RhbF9fZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogNXZ3O1xcbiAgfVxcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1tb2RhbF9fZm9vdGVyIGEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICM4OThkOTc7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLndhbGxldGNvbm5lY3QtbW9kYWxfX2Zvb3RlciBhIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25zX193cmFwcGVyIHtcXG4gIG1heC1oZWlnaHQ6IDQ0dmg7XFxufVxcblxcbi53YWxsZXRjb25uZWN0LWNvbm5lY3RfX2J1dHRvbnNfX3dyYXBwZXJfX2FuZHJvaWQge1xcbiAgbWFyZ2luOiA1MCUgMDtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uc19fd3JhcHBlcl9fd3JhcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAud2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25zX193cmFwcGVyX193cmFwIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gIH1cXG59XFxuXFxuLndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NCwgMTUzLCAyNTUpO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25fX2ljb25fYW5jaG9yIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiA4cHg7XFxuICB3aWR0aDogNDJweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAud2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25fX2ljb25fYW5jaG9yIHtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICB9XFxufVxcblxcbi53YWxsZXRjb25uZWN0LWNvbm5lY3RfX2J1dHRvbl9faWNvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDQycHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XFxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IDAgcmdiYSgzNywgNDEsIDQ2LCAwLjI1KTtcXG59XFxuXFxuLndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uX190ZXh0IHtcXG4gIGNvbG9yOiAjNDI0OTUyO1xcbiAgZm9udC1zaXplOiAyLjd2dztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi10b3A6IDEuOHZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uX190ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgfVxcbn1cXG5cXG4ud2FsbGV0Y29ubmVjdC1zZWFyY2hfX2lucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNkNGQ1ZDk7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cIjtcblxuLy8gQSB0eXBlIG9mIHByb21pc2UtbGlrZSB0aGF0IHJlc29sdmVzIHN5bmNocm9ub3VzbHkgYW5kIHN1cHBvcnRzIG9ubHkgb25lIG9ic2VydmVyXG52YXIgX2l0ZXJhdG9yU3ltYm9sID0gLyojX19QVVJFX18qL3R5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wuaXRlcmF0b3IgfHwgKFN5bWJvbC5pdGVyYXRvciA9IFN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSkgOiBcIkBAaXRlcmF0b3JcIjtcbnZhciBfYXN5bmNJdGVyYXRvclN5bWJvbCA9IC8qI19fUFVSRV9fKi90eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgKFN5bWJvbC5hc3luY0l0ZXJhdG9yID0gU3ltYm9sKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3JcIikpIDogXCJAQGFzeW5jSXRlcmF0b3JcIjtcblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBzZW5kIGVycm9ycyB0byByZWNvdmVyeSBjb250aW51YXRpb25cbmZ1bmN0aW9uIF9jYXRjaChib2R5LCByZWNvdmVyKSB7XG4gIHRyeSB7XG4gICAgdmFyIHJlc3VsdCA9IGJvZHkoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiByZWNvdmVyKGUpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcbiAgICByZXR1cm4gcmVzdWx0LnRoZW4odm9pZCAwLCByZWNvdmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG52YXIgV0FMTEVUQ09OTkVDVF9MT0dPX1NWR19VUkwgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0M/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04Jz8lM0UgJTNDc3ZnIHdpZHRoPSczMDBweCcgaGVpZ2h0PScxODVweCcgdmlld0JveD0nMCAwIDMwMCAxODUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayclM0UgJTNDIS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLSUzRSAlM0N0aXRsZSUzRVdhbGxldENvbm5lY3QlM0MvdGl0bGUlM0UgJTNDZGVzYyUzRUNyZWF0ZWQgd2l0aCBTa2V0Y2guJTNDL2Rlc2MlM0UgJTNDZGVmcyUzRSUzQy9kZWZzJTNFICUzQ2cgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UgJTNDZyBpZD0nd2FsbGV0Y29ubmVjdC1sb2dvLWFsdCcgZmlsbD0nJTIzM0I5OUZDJyBmaWxsLXJ1bGU9J25vbnplcm8nJTNFICUzQ3BhdGggZD0nTTYxLjQzODU0MjksMzYuMjU2MjYxMiBDMTEwLjM0OTc2NywtMTEuNjMxOTA1MSAxODkuNjUwNTMsLTExLjYzMTkwNTEgMjM4LjU2MTc1MiwzNi4yNTYyNjEyIEwyNDQuNDQ4Mjk3LDQyLjAxOTY3ODYgQzI0Ni44OTM4NTgsNDQuNDE0MDg2NyAyNDYuODkzODU4LDQ4LjI5NjE4OTggMjQ0LjQ0ODI5Nyw1MC42OTA1OTkgTDIyNC4zMTE2MDIsNzAuNDA2MTAyIEMyMjMuMDg4ODIxLDcxLjYwMzMwNzEgMjIxLjEwNjMwMiw3MS42MDMzMDcxIDIxOS44ODM1MjEsNzAuNDA2MTAyIEwyMTEuNzgyOTM3LDYyLjQ3NDk1NDEgQzE3Ny42NjEyNDUsMjkuMDY2OTcyNCAxMjIuMzM5MDUxLDI5LjA2Njk3MjQgODguMjE3MzU4Miw2Mi40NzQ5NTQxIEw3OS41NDIzMDIsNzAuOTY4NTU5MiBDNzguMzE5NTIwNCw3Mi4xNjU3NjMzIDc2LjMzNzAwMSw3Mi4xNjU3NjMzIDc1LjExNDIyMTQsNzAuOTY4NTU5MiBMNTQuOTc3NTI2NSw1MS4yNTMwNTYxIEM1Mi41MzE5NjUzLDQ4Ljg1ODY0NjkgNTIuNTMxOTY1Myw0NC45NzY1NDM5IDU0Ljk3NzUyNjUsNDIuNTgyMTM1NyBMNjEuNDM4NTQyOSwzNi4yNTYyNjEyIFogTTI4MC4yMDYzMzksNzcuMDMwMDA2MSBMMjk4LjEyODAzNiw5NC41NzY5MDMxIEMzMDAuNTczNTg1LDk2Ljk3MTMgMzAwLjU3MzU5OSwxMDAuODUzMzggMjk4LjEyODA2NywxMDMuMjQ3NzkzIEwyMTcuMzE3ODk2LDE4Mi4zNjg5MjcgQzIxNC44NzIzNTIsMTg0Ljc2MzM1MyAyMTAuOTA3MzE0LDE4NC43NjMzOCAyMDguNDYxNzM2LDE4Mi4zNjg5ODkgQzIwOC40NjE3MjYsMTgyLjM2ODk3OSAyMDguNDYxNzE0LDE4Mi4zNjg5NjcgMjA4LjQ2MTcwNCwxODIuMzY4OTU3IEwxNTEuMTA3NTYxLDEyNi4yMTQzODUgQzE1MC40OTYxNzEsMTI1LjYxNTc4MyAxNDkuNTA0OTExLDEyNS42MTU3ODMgMTQ4Ljg5MzUyMSwxMjYuMjE0Mzg1IEMxNDguODkzNTE3LDEyNi4yMTQzODkgMTQ4Ljg5MzUxNCwxMjYuMjE0MzkzIDE0OC44OTM1MSwxMjYuMjE0Mzk2IEw5MS41NDA1ODg4LDE4Mi4zNjg5MjcgQzg5LjA5NTA1MiwxODQuNzYzMzU5IDg1LjEzMDAxMzMsMTg0Ljc2MzM5OSA4Mi42ODQ0Mjc2LDE4Mi4zNjkwMTQgQzgyLjY4NDQxMzMsMTgyLjM2OSA4Mi42ODQzOTgsMTgyLjM2ODk4NiA4Mi42ODQzODI3LDE4Mi4zNjg5NyBMMS44NzE5NjMyNywxMDMuMjQ2Nzg1IEMtMC41NzM1OTY5MzksMTAwLjg1MjM3NyAtMC41NzM1OTY5MzksOTYuOTcwMjczNSAxLjg3MTk2MzI3LDk0LjU3NTg2NTMgTDE5Ljc5MzY5MjksNzcuMDI4OTk4IEMyMi4yMzkyNTMxLDc0LjYzNDU4OTggMjYuMjA0MjkxOCw3NC42MzQ1ODk4IDI4LjY0OTg1MzEsNzcuMDI4OTk4IEw4Ni4wMDQ4MzA2LDEzMy4xODQzNTUgQzg2LjYxNjIyMTQsMTMzLjc4Mjk1NyA4Ny42MDc0Nzk2LDEzMy43ODI5NTcgODguMjE4ODcwNCwxMzMuMTg0MzU1IEM4OC4yMTg4Nzk2LDEzMy4xODQzNDYgODguMjE4ODg3OCwxMzMuMTg0MzM4IDg4LjIxODg5NjksMTMzLjE4NDMzMSBMMTQ1LjU3MSw3Ny4wMjg5OTggQzE0OC4wMTY1MDUsNzQuNjM0NTM0NyAxNTEuOTgxNTQ0LDc0LjYzNDQ0NDkgMTU0LjQyNzE2MSw3Ny4wMjg3OTggQzE1NC40MjcxOTUsNzcuMDI4ODMxNiAxNTQuNDI3MjI5LDc3LjAyODg2NTMgMTU0LjQyNzI2Miw3Ny4wMjg4OTkgTDIxMS43ODIxNjQsMTMzLjE4NDMzMSBDMjEyLjM5MzU1NCwxMzMuNzgyOTMyIDIxMy4zODQ4MTQsMTMzLjc4MjkzMiAyMTMuOTk2MjA0LDEzMy4xODQzMzEgTDI3MS4zNTAxNzksNzcuMDMwMDA2MSBDMjczLjc5NTc0LDc0LjYzNTU5NjkgMjc3Ljc2MDc3OCw3NC42MzU1OTY5IDI4MC4yMDYzMzksNzcuMDMwMDA2MSBaJyBpZD0nV2FsbGV0Q29ubmVjdCclM0UlM0MvcGF0aCUzRSAlM0MvZyUzRSAlM0MvZyUzRSAlM0Mvc3ZnJTNFXCI7XG5cbnZhciBXQUxMRVRDT05ORUNUX0hFQURFUl9URVhUID0gXCJXYWxsZXRDb25uZWN0XCI7XG52YXIgQU5JTUFUSU9OX0RVUkFUSU9OID0gMzAwO1xudmFyIERFRkFVTFRfQlVUVE9OX0NPTE9SID0gXCJyZ2IoNjQsIDE1MywgMjU1KVwiO1xudmFyIFdBTExFVENPTk5FQ1RfV1JBUFBFUl9JRCA9IFwid2FsbGV0Y29ubmVjdC13cmFwcGVyXCI7XG52YXIgV0FMTEVUQ09OTkVDVF9TVFlMRV9JRCA9IFwid2FsbGV0Y29ubmVjdC1zdHlsZS1zaGVldFwiO1xudmFyIFdBTExFVENPTk5FQ1RfTU9EQUxfSUQgPSBcIndhbGxldGNvbm5lY3QtcXJjb2RlLW1vZGFsXCI7XG52YXIgV0FMTEVUQ09OTkVDVF9DTE9TRV9CVVRUT05fSUQgPSBcIndhbGxldGNvbm5lY3QtcXJjb2RlLWNsb3NlXCI7XG52YXIgV0FMTEVUQ09OTkVDVF9DVEFfVEVYVF9JRCA9IFwid2FsbGV0Y29ubmVjdC1xcmNvZGUtdGV4dFwiO1xudmFyIFdBTExFVENPTk5FQ1RfQ09OTkVDVF9CVVRUT05fSUQgPSBcIndhbGxldGNvbm5lY3QtY29ubmVjdC1idXR0b25cIjtcblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9faGVhZGVyXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgc3JjOiBXQUxMRVRDT05ORUNUX0xPR09fU1ZHX1VSTCxcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9faGVhZGVyTG9nb1wiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBXQUxMRVRDT05ORUNUX0hFQURFUl9URVhUKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Nsb3NlX193cmFwcGVyXCIsXG4gICAgb25DbGljazogcHJvcHMub25DbG9zZVxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpZDogV0FMTEVUQ09OTkVDVF9DTE9TRV9CVVRUT05fSUQsXG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Nsb3NlX19pY29uXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Nsb3NlX19saW5lMVwiXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fY2xvc2VfX2xpbmUyXCJcbiAgfSkpKSk7XG59XG5cbmZ1bmN0aW9uIENvbm5lY3RCdXR0b24ocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25cIixcbiAgICBocmVmOiBwcm9wcy5ocmVmLFxuICAgIGlkOiAoV0FMTEVUQ09OTkVDVF9DT05ORUNUX0JVVFRPTl9JRCArIFwiLVwiICsgKHByb3BzLm5hbWUpKSxcbiAgICBvbkNsaWNrOiBwcm9wcy5vbkNsaWNrLFxuICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsXG4gICAgc3R5bGU6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMuY29sb3JcbiAgICB9LFxuICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICB9LCBwcm9wcy5uYW1lKTtcbn1cblxudmFyIENBUkVUX1NWR19VUkwgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzgnIGhlaWdodD0nMTgnIHZpZXdCb3g9JzAgMCA4IDE4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFICUzQ3BhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00wLjU4NjMwMSAwLjIxMzg5OEMwLjE1MDM1NCAwLjU1Mjk2OCAwLjA3MTgxOTcgMS4xODEyNCAwLjQxMDg5IDEuNjE3MTlMNS4yODkyIDcuODg5MzFDNS41NzAwNyA4LjI1MDQyIDUuNTcwMDcgOC43NTYwOCA1LjI4OTIgOS4xMTcxOUwwLjQxMDg4OSAxNS4zODkzQzAuMDcxODE5IDE1LjgyNTMgMC4xNTAzNTMgMTYuNDUzNSAwLjU4NjMwMSAxNi43OTI2QzEuMDIyMjUgMTcuMTMxNyAxLjY1MDUyIDE3LjA1MzEgMS45ODk1OSAxNi42MTcyTDYuODY3OTEgMTAuMzQ1MUM3LjcxMDUgOS4yNjE3NCA3LjcxMDUgNy43NDQ3NiA2Ljg2NzkxIDYuNjYxNDNMMS45ODk1OSAwLjM4OTMxQzEuNjUwNTIgLTAuMDQ2NjM3NCAxLjAyMjI1IC0wLjEyNTE3MiAwLjU4NjMwMSAwLjIxMzg5OFonIGZpbGw9JyUyMzNDNDI1MicvJTNFICUzQy9zdmclM0VcIjtcblxuZnVuY3Rpb24gV2FsbGV0QnV0dG9uKHByb3BzKSB7XG4gIHZhciBjb2xvciA9IHByb3BzLmNvbG9yO1xuICB2YXIgaHJlZiA9IHByb3BzLmhyZWY7XG4gIHZhciBuYW1lID0gcHJvcHMubmFtZTtcbiAgdmFyIGxvZ28gPSBwcm9wcy5sb2dvO1xuICB2YXIgb25DbGljayA9IHByb3BzLm9uQ2xpY2s7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2VfX3Jvd1wiLFxuICAgIGhyZWY6IGhyZWYsXG4gICAgb25DbGljazogb25DbGljayxcbiAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLFxuICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlX19yb3dfX2gzXCJcbiAgfSwgbmFtZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlX19yb3dfX3JpZ2h0XCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Jhc2VfX3Jvd19fcmlnaHRfX2FwcC1pY29uXCIsXG4gICAgc3R5bGU6IHtcbiAgICAgIGJhY2tncm91bmQ6IChcInVybCgnXCIgKyBsb2dvICsgXCInKSBcIiArIGNvbG9yKSxcbiAgICAgIGJhY2tncm91bmRTaXplOiBcIjEwMCVcIlxuICAgIH1cbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgIHNyYzogQ0FSRVRfU1ZHX1VSTCxcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fYmFzZV9fcm93X19yaWdodF9fY2FyZXRcIlxuICB9KSkpO1xufVxuXG5mdW5jdGlvbiBXYWxsZXRJY29uKHByb3BzKSB7XG4gIHZhciBjb2xvciA9IHByb3BzLmNvbG9yO1xuICB2YXIgaHJlZiA9IHByb3BzLmhyZWY7XG4gIHZhciBuYW1lID0gcHJvcHMubmFtZTtcbiAgdmFyIGxvZ28gPSBwcm9wcy5sb2dvO1xuICB2YXIgb25DbGljayA9IHByb3BzLm9uQ2xpY2s7XG4gIHZhciBmb250U2l6ZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ID8gKChuYW1lLmxlbmd0aCA+IDggPyAyLjUgOiAyLjcpICsgXCJ2d1wiKSA6IFwiaW5oZXJpdFwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LWNvbm5lY3RfX2J1dHRvbl9faWNvbl9hbmNob3JcIixcbiAgICBocmVmOiBocmVmLFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtY29ubmVjdF9fYnV0dG9uX19pY29uXCIsXG4gICAgc3R5bGU6IHtcbiAgICAgIGJhY2tncm91bmQ6IChcInVybCgnXCIgKyBsb2dvICsgXCInKSBcIiArIGNvbG9yKSxcbiAgICAgIGJhY2tncm91bmRTaXplOiBcIjEwMCVcIlxuICAgIH1cbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBmb250U2l6ZTogZm9udFNpemVcbiAgICB9LFxuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LWNvbm5lY3RfX2J1dHRvbl9fdGV4dFwiXG4gIH0sIG5hbWUpKTtcbn1cblxudmFyIEdSSURfTUlOX0NPVU5UID0gNTtcbnZhciBMSU5LU19QRVJfUEFHRSA9IDEyO1xuZnVuY3Rpb24gTGlua0Rpc3BsYXkocHJvcHMpIHtcbiAgdmFyIGFuZHJvaWQgPSBsZWdhY3lVdGlscy5pc0FuZHJvaWQoKTtcbiAgdmFyIHJlZiA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICB2YXIgaW5wdXQgPSByZWZbMF07XG4gIHZhciBzZXRJbnB1dCA9IHJlZlsxXTtcbiAgdmFyIHJlZiQxID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIHZhciBmaWx0ZXIgPSByZWYkMVswXTtcbiAgdmFyIHNldEZpbHRlciA9IHJlZiQxWzFdO1xuICB2YXIgcmVmJDIgPSBSZWFjdC51c2VTdGF0ZSgxKTtcbiAgdmFyIHBhZ2UgPSByZWYkMlswXTtcbiAgdmFyIHNldFBhZ2UgPSByZWYkMlsxXTtcbiAgdmFyIGxpbmtzID0gZmlsdGVyID8gcHJvcHMubGlua3MuZmlsdGVyKGZ1bmN0aW9uIChsaW5rKSB7IHJldHVybiBsaW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXIudG9Mb3dlckNhc2UoKSk7IH0pIDogcHJvcHMubGlua3M7XG4gIHZhciBlcnJvck1lc3NhZ2UgPSBwcm9wcy5lcnJvck1lc3NhZ2U7XG4gIHZhciBncmlkID0gZmlsdGVyIHx8IGxpbmtzLmxlbmd0aCA+IEdSSURfTUlOX0NPVU5UO1xuICB2YXIgcGFnZXMgPSBNYXRoLmNlaWwobGlua3MubGVuZ3RoIC8gTElOS1NfUEVSX1BBR0UpO1xuICB2YXIgcmFuZ2UgPSBbKHBhZ2UgLSAxKSAqIExJTktTX1BFUl9QQUdFICsgMSwgcGFnZSAqIExJTktTX1BFUl9QQUdFXTtcbiAgdmFyIHBhZ2VMaW5rcyA9IGxpbmtzLmxlbmd0aCA/IGxpbmtzLmZpbHRlcihmdW5jdGlvbiAoXywgaW5kZXgpIHsgcmV0dXJuIGluZGV4ICsgMSA+PSByYW5nZVswXSAmJiBpbmRleCArIDEgPD0gcmFuZ2VbMV07IH0pIDogW107XG4gIHZhciBoYXNQYWdpbmcgPSAhISghYW5kcm9pZCAmJiBwYWdlcyA+IDEpO1xuICB2YXIgZmlsdGVyVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXQoZSkge1xuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjbGVhclRpbWVvdXQoZmlsdGVyVGltZW91dCk7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBmaWx0ZXJUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHNldFBhZ2UoMSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SW5wdXQoXCJcIik7XG4gICAgICBzZXRGaWx0ZXIoXCJcIik7XG4gICAgICBzZXRQYWdlKDEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7XG4gICAgaWQ6IFdBTExFVENPTk5FQ1RfQ1RBX1RFWFRfSUQsXG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtcXJjb2RlX190ZXh0XCJcbiAgfSwgYW5kcm9pZCA/IHByb3BzLnRleHQuY29ubmVjdF9tb2JpbGVfd2FsbGV0IDogcHJvcHMudGV4dC5jaG9vc2VfcHJlZmVycmVkX3dhbGxldCksICFhbmRyb2lkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3Qtc2VhcmNoX19pbnB1dFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiLFxuICAgIHZhbHVlOiBpbnB1dCxcbiAgICBvbkNoYW5nZTogaGFuZGxlSW5wdXRcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogKFwid2FsbGV0Y29ubmVjdC1jb25uZWN0X19idXR0b25zX193cmFwcGVyXCIgKyAoYW5kcm9pZCA/IFwiX19hbmRyb2lkXCIgOiBncmlkICYmIGxpbmtzLmxlbmd0aCA/IFwiX193cmFwXCIgOiBcIlwiKSlcbiAgfSwgIWFuZHJvaWQgPyBwYWdlTGlua3MubGVuZ3RoID8gcGFnZUxpbmtzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICB2YXIgY29sb3IgPSBlbnRyeS5jb2xvcjtcbiAgICB2YXIgbmFtZSA9IGVudHJ5Lm5hbWU7XG4gICAgdmFyIHNob3J0TmFtZSA9IGVudHJ5LnNob3J0TmFtZTtcbiAgICB2YXIgbG9nbyA9IGVudHJ5LmxvZ287XG4gICAgdmFyIGhyZWYgPSBsZWdhY3lVdGlscy5mb3JtYXRJT1NNb2JpbGUocHJvcHMudXJpLCBlbnRyeSk7XG4gICAgdmFyIGhhbmRsZUNsaWNrSU9TID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgbGVnYWN5VXRpbHMuc2F2ZU1vYmlsZUxpbmtJbmZvKHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgaHJlZjogaHJlZlxuICAgICAgfSk7XG4gICAgfSwgW3BhZ2VMaW5rc10pO1xuICAgIHJldHVybiAhZ3JpZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCB7XG4gICAgICBjb2xvcjogY29sb3IsXG4gICAgICBocmVmOiBocmVmLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGxvZ286IGxvZ28sXG4gICAgICBvbkNsaWNrOiBoYW5kbGVDbGlja0lPU1xuICAgIH0pIDogUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRJY29uLCB7XG4gICAgICBjb2xvcjogY29sb3IsXG4gICAgICBocmVmOiBocmVmLFxuICAgICAgbmFtZTogc2hvcnROYW1lIHx8IG5hbWUsXG4gICAgICBsb2dvOiBsb2dvLFxuICAgICAgb25DbGljazogaGFuZGxlQ2xpY2tJT1NcbiAgICB9KTtcbiAgfSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcnJvck1lc3NhZ2UubGVuZ3RoID8gcHJvcHMuZXJyb3JNZXNzYWdlIDogISFwcm9wcy5saW5rcy5sZW5ndGggJiYgIWxpbmtzLmxlbmd0aCA/IHByb3BzLnRleHQubm9fd2FsbGV0c19mb3VuZCA6IHByb3BzLnRleHQubG9hZGluZykpIDogUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0QnV0dG9uLCB7XG4gICAgbmFtZTogcHJvcHMudGV4dC5jb25uZWN0LFxuICAgIGNvbG9yOiBERUZBVUxUX0JVVFRPTl9DT0xPUixcbiAgICBocmVmOiBwcm9wcy51cmksXG4gICAgb25DbGljazogUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgbGVnYWN5VXRpbHMuc2F2ZU1vYmlsZUxpbmtJbmZvKHtcbiAgICAgICAgbmFtZTogXCJVbmtub3duXCIsXG4gICAgICAgIGhyZWY6IHByb3BzLnVyaVxuICAgICAgfSk7XG4gICAgfSwgW10pXG4gIH0pKSwgaGFzUGFnaW5nICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LW1vZGFsX19mb290ZXJcIlxuICB9LCBBcnJheShwYWdlcykuZmlsbCgwKS5tYXAoZnVuY3Rpb24gKF8sIGluZGV4KSB7XG4gICAgdmFyIHBhZ2VOdW1iZXIgPSBpbmRleCArIDE7XG4gICAgdmFyIHNlbGVjdGVkID0gcGFnZSA9PT0gcGFnZU51bWJlcjtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgbWFyZ2luOiBcImF1dG8gMTBweFwiLFxuICAgICAgICBmb250V2VpZ2h0OiBzZWxlY3RlZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIlxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFBhZ2UocGFnZU51bWJlcik7IH1cbiAgICB9LCBwYWdlTnVtYmVyKTtcbiAgfSkpKTtcbn1cblxuZnVuY3Rpb24gTm90aWZpY2F0aW9uKHByb3BzKSB7XG4gIHZhciBzaG93ID0gISFwcm9wcy5tZXNzYWdlLnRyaW0oKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogKFwid2FsbGV0Y29ubmVjdC1xcmNvZGVfX25vdGlmaWNhdGlvblwiICsgKHNob3cgPyBcIiBub3RpZmljYXRpb25fX3Nob3dcIiA6IFwiXCIpKVxuICB9LCBwcm9wcy5tZXNzYWdlKTtcbn1cblxudmFyIGZvcm1hdFFSQ29kZUltYWdlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFFSQ29kZS50b1N0cmluZyhkYXRhLCB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICB0eXBlOiBcInN2Z1wiXG4gICAgfSkpLnRoZW4oZnVuY3Rpb24gKGRhdGFTdHJpbmcpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVN0cmluZyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXN1bHQgPSBkYXRhU3RyaW5nLnJlcGxhY2UoXCI8c3ZnXCIsIFwiPHN2ZyBjbGFzcz1cXFwid2FsbGV0Y29ubmVjdC1xcmNvZGVfX2ltYWdlXFxcIlwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gIH1cbn07XG5mdW5jdGlvbiBRUkNvZGVEaXNwbGF5KHByb3BzKSB7XG4gIHZhciByZWYgPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgdmFyIG5vdGlmaWNhdGlvbiA9IHJlZlswXTtcbiAgdmFyIHNldE5vdGlmaWNhdGlvbiA9IHJlZlsxXTtcbiAgdmFyIHJlZiQxID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIHZhciBzdmcgPSByZWYkMVswXTtcbiAgdmFyIHNldFN2ZyA9IHJlZiQxWzFdO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZvcm1hdFFSQ29kZUltYWdlKHByb3BzLnVyaSkpLnRoZW4oZnVuY3Rpb24gKF9mb3JtYXRRUkNvZGVJbWFnZSkge1xuICAgICAgICBzZXRTdmcoX2Zvcm1hdFFSQ29kZUltYWdlKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbiAgfSwgW10pO1xuICB2YXIgY29weVRvQ2xpcGJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdWNjZXNzID0gY29weShwcm9wcy51cmkpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBzZXROb3RpZmljYXRpb24ocHJvcHMudGV4dC5jb3BpZWRfdG9fY2xpcGJvYXJkKTtcbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldE5vdGlmaWNhdGlvbihcIlwiKTsgfSwgMTIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE5vdGlmaWNhdGlvbihcIkVycm9yXCIpO1xuICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Tm90aWZpY2F0aW9uKFwiXCIpOyB9LCAxMjAwKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtcbiAgICBpZDogV0FMTEVUQ09OTkVDVF9DVEFfVEVYVF9JRCxcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1xcmNvZGVfX3RleHRcIlxuICB9LCBwcm9wcy50ZXh0LnNjYW5fcXJjb2RlX3dpdGhfd2FsbGV0KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogc3ZnXG4gICAgfVxuICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtbW9kYWxfX2Zvb3RlclwiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBvbkNsaWNrOiBjb3B5VG9DbGlwYm9hcmRcbiAgfSwgcHJvcHMudGV4dC5jb3B5X3RvX2NsaXBib2FyZCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5vdGlmaWNhdGlvbiwge1xuICAgIG1lc3NhZ2U6IG5vdGlmaWNhdGlvblxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIE1vZGFsKHByb3BzKSB7XG4gIHZhciBhbmRyb2lkID0gbGVnYWN5VXRpbHMuaXNBbmRyb2lkKCk7XG4gIHZhciBtb2JpbGUgPSBsZWdhY3lVdGlscy5pc01vYmlsZSgpO1xuICB2YXIgd2hpdGVsaXN0ID0gbW9iaWxlID8gcHJvcHMucXJjb2RlTW9kYWxPcHRpb25zICYmIHByb3BzLnFyY29kZU1vZGFsT3B0aW9ucy5tb2JpbGVMaW5rcyA/IHByb3BzLnFyY29kZU1vZGFsT3B0aW9ucy5tb2JpbGVMaW5rcyA6IHVuZGVmaW5lZCA6IHByb3BzLnFyY29kZU1vZGFsT3B0aW9ucyAmJiBwcm9wcy5xcmNvZGVNb2RhbE9wdGlvbnMuZGVza3RvcExpbmtzID8gcHJvcHMucXJjb2RlTW9kYWxPcHRpb25zLmRlc2t0b3BMaW5rcyA6IHVuZGVmaW5lZDtcbiAgdmFyIHJlZiA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgdmFyIGxvYWRpbmcgPSByZWZbMF07XG4gIHZhciBzZXRMb2FkaW5nID0gcmVmWzFdO1xuICB2YXIgcmVmJDEgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIHZhciBmZXRjaGVkID0gcmVmJDFbMF07XG4gIHZhciBzZXRGZXRjaGVkID0gcmVmJDFbMV07XG4gIHZhciByZWYkMiA9IFJlYWN0LnVzZVN0YXRlKCFtb2JpbGUpO1xuICB2YXIgZGlzcGxheVFSQ29kZSA9IHJlZiQyWzBdO1xuICB2YXIgc2V0RGlzcGxheVFSQ29kZSA9IHJlZiQyWzFdO1xuICB2YXIgZGlzcGxheVByb3BzID0ge1xuICAgIG1vYmlsZTogbW9iaWxlLFxuICAgIHRleHQ6IHByb3BzLnRleHQsXG4gICAgdXJpOiBwcm9wcy51cmksXG4gICAgcXJjb2RlTW9kYWxPcHRpb25zOiBwcm9wcy5xcmNvZGVNb2RhbE9wdGlvbnNcbiAgfTtcbiAgdmFyIHJlZiQzID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIHZhciBzaW5nbGVMaW5rSHJlZiA9IHJlZiQzWzBdO1xuICB2YXIgc2V0U2luZ2xlTGlua0hyZWYgPSByZWYkM1sxXTtcbiAgdmFyIHJlZiQ0ID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICB2YXIgaGFzU2luZ2xlTGluayA9IHJlZiQ0WzBdO1xuICB2YXIgc2V0SGFzU2luZ2xlTGluayA9IHJlZiQ0WzFdO1xuICB2YXIgcmVmJDUgPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIHZhciBsaW5rcyA9IHJlZiQ1WzBdO1xuICB2YXIgc2V0TGlua3MgPSByZWYkNVsxXTtcbiAgdmFyIHJlZiQ2ID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIHZhciBlcnJvck1lc3NhZ2UgPSByZWYkNlswXTtcbiAgdmFyIHNldEVycm9yTWVzc2FnZSA9IHJlZiQ2WzFdO1xuICB2YXIgZ2V0TGlua3NJZk5lZWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZmV0Y2hlZCB8fCBsb2FkaW5nIHx8IHdoaXRlbGlzdCAmJiAhd2hpdGVsaXN0Lmxlbmd0aCB8fCBsaW5rcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5pdExpbmtzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChhbmRyb2lkKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfVxuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgdmFyIF90ZW1wID0gX2NhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBwcm9wcy5xcmNvZGVNb2RhbE9wdGlvbnMgJiYgcHJvcHMucXJjb2RlTW9kYWxPcHRpb25zLnJlZ2lzdHJ5VXJsID8gcHJvcHMucXJjb2RlTW9kYWxPcHRpb25zLnJlZ2lzdHJ5VXJsIDogbGVnYWN5VXRpbHMuZ2V0V2FsbGV0UmVnaXN0cnlVcmwoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmV0Y2godXJsKSkudGhlbihmdW5jdGlvbiAocmVnaXN0cnlSZXNwb25zZSkge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlZ2lzdHJ5UmVzcG9uc2UuanNvbigpKS50aGVuKGZ1bmN0aW9uIChfcmVnaXN0cnlSZXNwb25zZSRqc28pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVnaXN0cnkgPSBfcmVnaXN0cnlSZXNwb25zZSRqc28ubGlzdGluZ3M7XG4gICAgICAgICAgICAgICAgdmFyIHBsYXRmb3JtID0gbW9iaWxlID8gXCJtb2JpbGVcIiA6IFwiZGVza3RvcFwiO1xuICAgICAgICAgICAgICAgIHZhciBfbGlua3MgPSBsZWdhY3lVdGlscy5nZXRNb2JpbGVMaW5rUmVnaXN0cnkobGVnYWN5VXRpbHMuZm9ybWF0TW9iaWxlUmVnaXN0cnkocmVnaXN0cnksIHBsYXRmb3JtKSwgd2hpdGVsaXN0KTtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRGZXRjaGVkKHRydWUpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSghX2xpbmtzLmxlbmd0aCA/IHByb3BzLnRleHQubm9fc3VwcG9ydGVkX3dhbGxldHMgOiBcIlwiKTtcbiAgICAgICAgICAgICAgICBzZXRMaW5rcyhfbGlua3MpO1xuICAgICAgICAgICAgICAgIHZhciBoYXNTaW5nbGVMaW5rID0gX2xpbmtzLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzU2luZ2xlTGluaykge1xuICAgICAgICAgICAgICAgICAgc2V0U2luZ2xlTGlua0hyZWYobGVnYWN5VXRpbHMuZm9ybWF0SU9TTW9iaWxlKHByb3BzLnVyaSwgX2xpbmtzWzBdKSk7XG4gICAgICAgICAgICAgICAgICBzZXREaXNwbGF5UVJDb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRIYXNTaW5nbGVMaW5rKGhhc1NpbmdsZUxpbmspO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEZldGNoZWQodHJ1ZSk7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UocHJvcHMudGV4dC5zb21ldGhpbmdfd2VudF93cm9uZyk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoX3RlbXAgJiYgX3RlbXAudGhlbiA/IF90ZW1wLnRoZW4oZnVuY3Rpb24gKCkge30pIDogdm9pZCAwKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGluaXRMaW5rcygpO1xuICAgIH0pO1xuICB9O1xuICBnZXRMaW5rc0lmTmVlZGVkKCk7XG4gIHZhciByaWdodFNlbGVjdGVkID0gbW9iaWxlID8gZGlzcGxheVFSQ29kZSA6ICFkaXNwbGF5UVJDb2RlO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgaWQ6IFdBTExFVENPTk5FQ1RfTU9EQUxfSUQsXG4gICAgY2xhc3NOYW1lOiBcIndhbGxldGNvbm5lY3QtcXJjb2RlX19iYXNlIGFuaW1hdGVkIGZhZGVJblwiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LW1vZGFsX19iYXNlXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIHtcbiAgICBvbkNsb3NlOiBwcm9wcy5vbkNsb3NlXG4gIH0pLCBoYXNTaW5nbGVMaW5rICYmIGRpc3BsYXlRUkNvZGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid2FsbGV0Y29ubmVjdC1tb2RhbF9fc2luZ2xlX3dhbGxldFwiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBsZWdhY3lVdGlscy5zYXZlTW9iaWxlTGlua0luZm8oe1xuICAgICAgbmFtZTogbGlua3NbMF0ubmFtZSxcbiAgICAgIGhyZWY6IHNpbmdsZUxpbmtIcmVmXG4gICAgfSk7IH0sXG4gICAgaHJlZjogc2luZ2xlTGlua0hyZWYsXG4gICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgfSwgcHJvcHMudGV4dC5jb25uZWN0X3dpdGggKyBcIiBcIiArIChoYXNTaW5nbGVMaW5rID8gbGlua3NbMF0ubmFtZSA6IFwiXCIpICsgXCIg4oC6XCIpKSA6IGFuZHJvaWQgfHwgbG9hZGluZyB8fCAhbG9hZGluZyAmJiBsaW5rcy5sZW5ndGggPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IChcIndhbGxldGNvbm5lY3QtbW9kYWxfX21vYmlsZV9fdG9nZ2xlXCIgKyAocmlnaHRTZWxlY3RlZCA/IFwiIHJpZ2h0X19zZWxlY3RlZFwiIDogXCJcIikpXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3YWxsZXRjb25uZWN0LW1vZGFsX19tb2JpbGVfX3RvZ2dsZV9zZWxlY3RvclwiXG4gIH0pLCBtb2JpbGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHNldERpc3BsYXlRUkNvZGUoZmFsc2UpLCBnZXRMaW5rc0lmTmVlZGVkKCkpOyB9XG4gIH0sIHByb3BzLnRleHQubW9iaWxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldERpc3BsYXlRUkNvZGUodHJ1ZSk7IH1cbiAgfSwgcHJvcHMudGV4dC5xcmNvZGUpKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXREaXNwbGF5UVJDb2RlKHRydWUpOyB9XG4gIH0sIHByb3BzLnRleHQucXJjb2RlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChzZXREaXNwbGF5UVJDb2RlKGZhbHNlKSwgZ2V0TGlua3NJZk5lZWRlZCgpKTsgfVxuICB9LCBwcm9wcy50ZXh0LmRlc2t0b3ApKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGRpc3BsYXlRUkNvZGUgfHwgIWFuZHJvaWQgJiYgIWxvYWRpbmcgJiYgIWxpbmtzLmxlbmd0aCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUVJDb2RlRGlzcGxheSwgT2JqZWN0LmFzc2lnbih7fSwgZGlzcGxheVByb3BzKSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmtEaXNwbGF5LCBPYmplY3QuYXNzaWduKHt9LCBkaXNwbGF5UHJvcHMsIHtcbiAgICBsaW5rczogbGlua3MsXG4gICAgZXJyb3JNZXNzYWdlOiBlcnJvck1lc3NhZ2VcbiAgfSkpKSkpO1xufVxuXG52YXIgZGUgPSB7XG4gIGNob29zZV9wcmVmZXJyZWRfd2FsbGV0OiBcIlfDpGhsZSBiZXZvcnp1Z3RlIFdhbGxldFwiLFxuICBjb25uZWN0X21vYmlsZV93YWxsZXQ6IFwiVmVyYmluZGUgbWl0IE1vYmlsZSBXYWxsZXRcIixcbiAgc2Nhbl9xcmNvZGVfd2l0aF93YWxsZXQ6IFwiU2Nhbm5lIGRlbiBRUi1jb2RlIG1pdCBlaW5lciBXYWxsZXRDb25uZWN0IGtvbXBhdGlibGVuIFdhbGxldFwiLFxuICBjb25uZWN0OiBcIlZlcmJpbmRlblwiLFxuICBxcmNvZGU6IFwiUVItQ29kZVwiLFxuICBtb2JpbGU6IFwiTW9iaWxlXCIsXG4gIGRlc2t0b3A6IFwiRGVza3RvcFwiLFxuICBjb3B5X3RvX2NsaXBib2FyZDogXCJJbiBkaWUgWndpc2NoZW5hYmxhZ2Uga29waWVyZW5cIixcbiAgY29waWVkX3RvX2NsaXBib2FyZDogXCJJbiBkaWUgWndpc2NoZW5hYmxhZ2Uga29waWVydCFcIixcbiAgY29ubmVjdF93aXRoOiBcIlZlcmJpbmRlbiBtaXQgSGlsZmUgdm9uXCIsXG4gIGxvYWRpbmc6IFwiTGFkZW4uLi5cIixcbiAgc29tZXRoaW5nX3dlbnRfd3Jvbmc6IFwiRXR3YXMgaXN0IHNjaGllZiBnZWxhdWZlblwiLFxuICBub19zdXBwb3J0ZWRfd2FsbGV0czogXCJFcyBnaWJ0IG5vY2gga2VpbmUgdW50ZXJzdMO8dHp0ZW4gV2FsbGV0XCIsXG4gIG5vX3dhbGxldHNfZm91bmQ6IFwia2VpbmUgV2FsbGV0IGdlZnVuZGVuXCJcbn07XG5cbnZhciBlbiA9IHtcbiAgY2hvb3NlX3ByZWZlcnJlZF93YWxsZXQ6IFwiQ2hvb3NlIHlvdXIgcHJlZmVycmVkIHdhbGxldFwiLFxuICBjb25uZWN0X21vYmlsZV93YWxsZXQ6IFwiQ29ubmVjdCB0byBNb2JpbGUgV2FsbGV0XCIsXG4gIHNjYW5fcXJjb2RlX3dpdGhfd2FsbGV0OiBcIlNjYW4gUVIgY29kZSB3aXRoIGEgV2FsbGV0Q29ubmVjdC1jb21wYXRpYmxlIHdhbGxldFwiLFxuICBjb25uZWN0OiBcIkNvbm5lY3RcIixcbiAgcXJjb2RlOiBcIlFSIENvZGVcIixcbiAgbW9iaWxlOiBcIk1vYmlsZVwiLFxuICBkZXNrdG9wOiBcIkRlc2t0b3BcIixcbiAgY29weV90b19jbGlwYm9hcmQ6IFwiQ29weSB0byBjbGlwYm9hcmRcIixcbiAgY29waWVkX3RvX2NsaXBib2FyZDogXCJDb3BpZWQgdG8gY2xpcGJvYXJkIVwiLFxuICBjb25uZWN0X3dpdGg6IFwiQ29ubmVjdCB3aXRoXCIsXG4gIGxvYWRpbmc6IFwiTG9hZGluZy4uLlwiLFxuICBzb21ldGhpbmdfd2VudF93cm9uZzogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiLFxuICBub19zdXBwb3J0ZWRfd2FsbGV0czogXCJUaGVyZSBhcmUgbm8gc3VwcG9ydGVkIHdhbGxldHMgeWV0XCIsXG4gIG5vX3dhbGxldHNfZm91bmQ6IFwiTm8gd2FsbGV0cyBmb3VuZFwiXG59O1xuXG52YXIgZXMgPSB7XG4gIGNob29zZV9wcmVmZXJyZWRfd2FsbGV0OiBcIkVsaWdlIHR1IGJpbGxldGVyYSBwcmVmZXJpZGFcIixcbiAgY29ubmVjdF9tb2JpbGVfd2FsbGV0OiBcIkNvbmVjdGFyIGEgYmlsbGV0ZXJhIG3Ds3ZpbFwiLFxuICBzY2FuX3FyY29kZV93aXRoX3dhbGxldDogXCJFc2NhbmVhIGVsIGPDs2RpZ28gUVIgY29uIHVuYSBiaWxsZXRlcmEgY29tcGF0aWJsZSBjb24gV2FsbGV0Q29ubmVjdFwiLFxuICBjb25uZWN0OiBcIkNvbmVjdGFyXCIsXG4gIHFyY29kZTogXCJDw7NkaWdvIFFSXCIsXG4gIG1vYmlsZTogXCJNw7N2aWxcIixcbiAgZGVza3RvcDogXCJEZXNrdG9wXCIsXG4gIGNvcHlfdG9fY2xpcGJvYXJkOiBcIkNvcGlhclwiLFxuICBjb3BpZWRfdG9fY2xpcGJvYXJkOiBcIkNvcGlhZG8hXCIsXG4gIGNvbm5lY3Rfd2l0aDogXCJDb25lY3RhciBtZWRpYW50ZVwiLFxuICBsb2FkaW5nOiBcIkNhcmdhbmRvLi4uXCIsXG4gIHNvbWV0aGluZ193ZW50X3dyb25nOiBcIkFsZ28gc2FsacOzIG1hbFwiLFxuICBub19zdXBwb3J0ZWRfd2FsbGV0czogXCJUb2RhdsOtYSBubyBoYXkgYmlsbGV0ZXJhcyBjb21wYXRpYmxlc1wiLFxuICBub193YWxsZXRzX2ZvdW5kOiBcIk5vIHNlIGVuY29udHJhcm9uIGJpbGxldGVyYXNcIlxufTtcblxudmFyIGZyID0ge1xuICBjaG9vc2VfcHJlZmVycmVkX3dhbGxldDogXCJDaG9pc2lzc2V6IHZvdHJlIHBvcnRlZmV1aWxsZSBwcsOpZsOpcsOpXCIsXG4gIGNvbm5lY3RfbW9iaWxlX3dhbGxldDogXCJTZSBjb25uZWN0ZXIgYXUgcG9ydGVmZXVpbGxlIG1vYmlsZVwiLFxuICBzY2FuX3FyY29kZV93aXRoX3dhbGxldDogXCJTY2FubmV6IGxlIFFSIGNvZGUgYXZlYyB1biBwb3J0ZWZldWlsbGUgY29tcGF0aWJsZSBXYWxsZXRDb25uZWN0XCIsXG4gIGNvbm5lY3Q6IFwiU2UgY29ubmVjdGVyXCIsXG4gIHFyY29kZTogXCJRUiBDb2RlXCIsXG4gIG1vYmlsZTogXCJNb2JpbGVcIixcbiAgZGVza3RvcDogXCJEZXNrdG9wXCIsXG4gIGNvcHlfdG9fY2xpcGJvYXJkOiBcIkNvcGllclwiLFxuICBjb3BpZWRfdG9fY2xpcGJvYXJkOiBcIkNvcGnDqSFcIixcbiAgY29ubmVjdF93aXRoOiBcIkNvbm5lY3Rlei12b3VzIMOgIGwnYWlkZSBkZVwiLFxuICBsb2FkaW5nOiBcIkNoYXJnZW1lbnQuLi5cIixcbiAgc29tZXRoaW5nX3dlbnRfd3Jvbmc6IFwiUXVlbHF1ZSBjaG9zZSBhIG1hbCB0b3VybsOpXCIsXG4gIG5vX3N1cHBvcnRlZF93YWxsZXRzOiBcIklsIG4neSBhIHBhcyBlbmNvcmUgZGUgcG9ydGVmZXVpbGxlcyBwcmlzIGVuIGNoYXJnZVwiLFxuICBub193YWxsZXRzX2ZvdW5kOiBcIkF1Y3VuIHBvcnRlZmV1aWxsZSB0cm91dsOpXCJcbn07XG5cbnZhciBrbyA9IHtcbiAgY2hvb3NlX3ByZWZlcnJlZF93YWxsZXQ6IFwi7JuQ7ZWY64qUIOyngOqwkeydhCDshKDtg53tlZjshLjsmpRcIixcbiAgY29ubmVjdF9tb2JpbGVfd2FsbGV0OiBcIuuqqOuwlOydvCDsp4DqsJHqs7wg7Jew6rKwXCIsXG4gIHNjYW5fcXJjb2RlX3dpdGhfd2FsbGV0OiBcIldhbGxldENvbm5lY3Qg7KeA7JuQIOyngOqwkeyXkOyEnCBRUuy9lOuTnOulvCDsiqTsupTtlZjshLjsmpRcIixcbiAgY29ubmVjdDogXCLsl7DqsrBcIixcbiAgcXJjb2RlOiBcIlFSIOy9lOuTnFwiLFxuICBtb2JpbGU6IFwi66qo67CU7J28XCIsXG4gIGRlc2t0b3A6IFwi642w7Iqk7YGs7YORXCIsXG4gIGNvcHlfdG9fY2xpcGJvYXJkOiBcIu2BtOumveuztOuTnOyXkCDrs7XsgqxcIixcbiAgY29waWVkX3RvX2NsaXBib2FyZDogXCLtgbTrpr3rs7Trk5zsl5Ag67O17IKs65CY7JeI7Iq164uI64ukIVwiLFxuICBjb25uZWN0X3dpdGg6IFwi7JmAIOyXsOqysO2VmOuLpFwiLFxuICBsb2FkaW5nOiBcIuuhnOuTnCDspJEuLi5cIixcbiAgc29tZXRoaW5nX3dlbnRfd3Jvbmc6IFwi66y47KCc6rCAIOuwnOyDne2WiOyKteuLiOuLpC5cIixcbiAgbm9fc3VwcG9ydGVkX3dhbGxldHM6IFwi7JWE7KeBIOyngOybkOuQmOuKlCDsp4DqsJHsnbQg7JeG7Iq164uI64ukXCIsXG4gIG5vX3dhbGxldHNfZm91bmQ6IFwi7KeA6rCR7J2EIOywvuydhCDsiJgg7JeG7Iq164uI64ukXCJcbn07XG5cbnZhciBwdCA9IHtcbiAgY2hvb3NlX3ByZWZlcnJlZF93YWxsZXQ6IFwiRXNjb2xoYSBzdWEgY2FydGVpcmEgcHJlZmVyaWRhXCIsXG4gIGNvbm5lY3RfbW9iaWxlX3dhbGxldDogXCJDb25lY3Rhci1zZSDDoCBjYXJ0ZWlyYSBtw7N2ZWxcIixcbiAgc2Nhbl9xcmNvZGVfd2l0aF93YWxsZXQ6IFwiTGVyIG8gY8OzZGlnbyBRUiBjb20gdW1hIGNhcnRlaXJhIGNvbXBhdMOtdmVsIGNvbSBXYWxsZXRDb25uZWN0XCIsXG4gIGNvbm5lY3Q6IFwiQ29uZWN0YXJcIixcbiAgcXJjb2RlOiBcIkPDs2RpZ28gUVJcIixcbiAgbW9iaWxlOiBcIk3Ds3ZlbFwiLFxuICBkZXNrdG9wOiBcIkRlc2t0b3BcIixcbiAgY29weV90b19jbGlwYm9hcmQ6IFwiQ29waWFyXCIsXG4gIGNvcGllZF90b19jbGlwYm9hcmQ6IFwiQ29waWFkbyFcIixcbiAgY29ubmVjdF93aXRoOiBcIkxpZ2FyIHBvciBtZWlvIGRlXCIsXG4gIGxvYWRpbmc6IFwiQ2FycmVnYW1lbnRvLi4uXCIsXG4gIHNvbWV0aGluZ193ZW50X3dyb25nOiBcIkFsZ28gY29ycmV1IG1hbFwiLFxuICBub19zdXBwb3J0ZWRfd2FsbGV0czogXCJBaW5kYSBuw6NvIGjDoSBjYXJ0ZWlyYXMgc3Vwb3J0YWRhc1wiLFxuICBub193YWxsZXRzX2ZvdW5kOiBcIk5lbmh1bWEgY2FydGVpcmEgZW5jb250cmFkYVwiXG59O1xuXG52YXIgemggPSB7XG4gIGNob29zZV9wcmVmZXJyZWRfd2FsbGV0OiBcIumAieaLqeS9oOeahOmSseWMhVwiLFxuICBjb25uZWN0X21vYmlsZV93YWxsZXQ6IFwi6L+e5o6l6Iez56e75Yqo56uv6ZKx5YyFXCIsXG4gIHNjYW5fcXJjb2RlX3dpdGhfd2FsbGV0OiBcIuS9v+eUqOWFvOWuuSBXYWxsZXRDb25uZWN0IOeahOmSseWMheaJq+aPj+S6jOe7tOeggVwiLFxuICBjb25uZWN0OiBcIui/nuaOpVwiLFxuICBxcmNvZGU6IFwi5LqM57u056CBXCIsXG4gIG1vYmlsZTogXCLnp7vliqhcIixcbiAgZGVza3RvcDogXCLmoYzpnaJcIixcbiAgY29weV90b19jbGlwYm9hcmQ6IFwi5aSN5Yi25Yiw5Ymq6LS05p2/XCIsXG4gIGNvcGllZF90b19jbGlwYm9hcmQ6IFwi5aSN5Yi25Yiw5Ymq6LS05p2/5oiQ5Yqf77yBXCIsXG4gIGNvbm5lY3Rfd2l0aDogXCLpgJrov4fku6XkuIvmlrnlvI/ov57mjqVcIixcbiAgbG9hZGluZzogXCLmraPlnKjliqDovb0uLi5cIixcbiAgc29tZXRoaW5nX3dlbnRfd3Jvbmc6IFwi5Ye65LqG6Zeu6aKYXCIsXG4gIG5vX3N1cHBvcnRlZF93YWxsZXRzOiBcIuebruWJjei/mOayoeacieaUr+aMgeeahOmSseWMhVwiLFxuICBub193YWxsZXRzX2ZvdW5kOiBcIuayoeacieaJvuWIsOmSseWMhVwiXG59O1xuXG52YXIgZmEgPSB7XG4gIGNob29zZV9wcmVmZXJyZWRfd2FsbGV0OiBcItqp24zZgSDZvtmI2YQg2YXZiNix2K8g2YbYuNixINiu2YjYryDYsdinINin2YbYqtiu2KfYqCDaqdmG24zYr1wiLFxuICBjb25uZWN0X21vYmlsZV93YWxsZXQ6IFwi2KjZhyDaqduM2YEg2b7ZiNmEINmF2YjYqNin24zZhCDZiNi12YQg2LTZiNuM2K9cIixcbiAgc2Nhbl9xcmNvZGVfd2l0aF93YWxsZXQ6IFwi2qnYryBRUiDYsdinINio2Kcg24zaqSDaqduM2YEg2b7ZiNmEINiz2KfYstqv2KfYsSDYqNinIFdhbGxldENvbm5lY3Qg2KfYs9qp2YYg2qnZhtuM2K9cIixcbiAgY29ubmVjdDogXCLYp9iq2LXYp9mEXCIsXG4gIHFyY29kZTogXCLaqdivIFFSXCIsXG4gIG1vYmlsZTogXCLYs9uM2KfYsVwiLFxuICBkZXNrdG9wOiBcItiv2LPaqdiq2KfZvlwiLFxuICBjb3B5X3RvX2NsaXBib2FyZDogXCLaqdm+24wg2KjZhyDaqdmE24zZviDYqNmI2LHYr1wiLFxuICBjb3BpZWRfdG9fY2xpcGJvYXJkOiBcItiv2LEg2qnZhNuM2b4g2KjZiNix2K8g2qnZvtuMINi02K8hXCIsXG4gIGNvbm5lY3Rfd2l0aDogXCLYp9ix2KrYqNin2Lcg2KjYp1wiLFxuICBsb2FkaW5nOiBcIi4uLtio2KfYsdqv2LDYp9ix24xcIixcbiAgc29tZXRoaW5nX3dlbnRfd3Jvbmc6IFwi2YXYtNqp2YTbjCDZvtuM2LQg2KLZhdivXCIsXG4gIG5vX3N1cHBvcnRlZF93YWxsZXRzOiBcItmH2YbZiNiyINmH24zahiDaqduM2YEg2b7ZiNmEINm+2LTYqtuM2KjYp9mG24wg2LTYr9mHINin24wg2YjYrNmI2K8g2YbYr9in2LHYr1wiLFxuICBub193YWxsZXRzX2ZvdW5kOiBcItmH24zahiDaqduM2YEg2b7ZiNmE24wg2b7bjNiv2Kcg2YbYtNivXCJcbn07XG5cbnZhciBsYW5ndWFnZXMgPSB7XG4gIGRlOiBkZSxcbiAgZW46IGVuLFxuICBlczogZXMsXG4gIGZyOiBmcixcbiAga286IGtvLFxuICBwdDogcHQsXG4gIHpoOiB6aCxcbiAgZmE6IGZhXG59O1xuXG5mdW5jdGlvbiBpbmplY3RTdHlsZVNoZWV0KCkge1xuICB2YXIgZG9jID0gbGVnYWN5VXRpbHMuZ2V0RG9jdW1lbnRPclRocm93KCk7XG4gIHZhciBwcmV2ID0gZG9jLmdldEVsZW1lbnRCeUlkKFdBTExFVENPTk5FQ1RfU1RZTEVfSUQpO1xuICBpZiAocHJldikge1xuICAgIGRvYy5oZWFkLnJlbW92ZUNoaWxkKHByZXYpO1xuICB9XG4gIHZhciBzdHlsZSA9IGRvYy5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFdBTExFVENPTk5FQ1RfU1RZTEVfSUQpO1xuICBzdHlsZS5pbm5lclRleHQgPSBXQUxMRVRDT05ORUNUX1NUWUxFX1NIRUVUO1xuICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5mdW5jdGlvbiByZW5kZXJXcmFwcGVyKCkge1xuICB2YXIgZG9jID0gbGVnYWN5VXRpbHMuZ2V0RG9jdW1lbnRPclRocm93KCk7XG4gIHZhciB3cmFwcGVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgV0FMTEVUQ09OTkVDVF9XUkFQUEVSX0lEKTtcbiAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuZnVuY3Rpb24gdHJpZ2dlckNsb3NlQW5pbWF0aW9uKCkge1xuICB2YXIgZG9jID0gbGVnYWN5VXRpbHMuZ2V0RG9jdW1lbnRPclRocm93KCk7XG4gIHZhciBtb2RhbCA9IGRvYy5nZXRFbGVtZW50QnlJZChXQUxMRVRDT05ORUNUX01PREFMX0lEKTtcbiAgaWYgKG1vZGFsKSB7XG4gICAgbW9kYWwuY2xhc3NOYW1lID0gbW9kYWwuY2xhc3NOYW1lLnJlcGxhY2UoXCJmYWRlSW5cIiwgXCJmYWRlT3V0XCIpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHdyYXBwZXIgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoV0FMTEVUQ09OTkVDVF9XUkFQUEVSX0lEKTtcbiAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgIGRvYy5ib2R5LnJlbW92ZUNoaWxkKHdyYXBwZXIpO1xuICAgICAgfVxuICAgIH0sIEFOSU1BVElPTl9EVVJBVElPTik7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFdyYXBwZWRDYWxsYmFjayhjYikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHRyaWdnZXJDbG9zZUFuaW1hdGlvbigpO1xuICAgIGlmIChjYikge1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBnZXRUZXh0KCkge1xuICB2YXIgbGFuZyA9IGxlZ2FjeVV0aWxzLmdldE5hdmlnYXRvck9yVGhyb3coKS5sYW5ndWFnZS5zcGxpdChcIi1cIilbMF0gfHwgXCJlblwiO1xuICByZXR1cm4gbGFuZ3VhZ2VzW2xhbmddIHx8IGxhbmd1YWdlc1tcImVuXCJdO1xufVxuZnVuY3Rpb24gb3BlbiQxKHVyaSwgY2IsIHFyY29kZU1vZGFsT3B0aW9ucykge1xuICBpbmplY3RTdHlsZVNoZWV0KCk7XG4gIHZhciB3cmFwcGVyID0gcmVuZGVyV3JhcHBlcigpO1xuICBSZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwge1xuICAgIHRleHQ6IGdldFRleHQoKSxcbiAgICB1cmk6IHVyaSxcbiAgICBvbkNsb3NlOiBnZXRXcmFwcGVkQ2FsbGJhY2soY2IpLFxuICAgIHFyY29kZU1vZGFsT3B0aW9uczogcXJjb2RlTW9kYWxPcHRpb25zXG4gIH0pLCB3cmFwcGVyKTtcbn1cbmZ1bmN0aW9uIGNsb3NlJDEoKSB7XG4gIHRyaWdnZXJDbG9zZUFuaW1hdGlvbigpO1xufVxuXG52YXIgaXNOb2RlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMubm9kZSAhPT0gXCJ1bmRlZmluZWRcIjsgfTtcbmZ1bmN0aW9uIG9wZW4kMih1cmksIGNiLCBxcmNvZGVNb2RhbE9wdGlvbnMpIHtcbiAgY29uc29sZS5sb2codXJpKTtcbiAgaWYgKGlzTm9kZSgpKSB7XG4gICAgb3Blbih1cmkpO1xuICB9IGVsc2Uge1xuICAgIG9wZW4kMSh1cmksIGNiLCBxcmNvZGVNb2RhbE9wdGlvbnMpO1xuICB9XG59XG5mdW5jdGlvbiBjbG9zZSQyKCkge1xuICBpZiAoaXNOb2RlKCkpIDsgZWxzZSB7XG4gICAgY2xvc2UkMSgpO1xuICB9XG59XG52YXIgaW5kZXggPSB7XG4gIG9wZW46IG9wZW4kMixcbiAgY2xvc2U6IGNsb3NlJDJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZXg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsImV4cG9ydCBjb25zdCBFUlJPUl9TRVNTSU9OX0NPTk5FQ1RFRCA9IFwiU2Vzc2lvbiBjdXJyZW50bHkgY29ubmVjdGVkXCI7XG5leHBvcnQgY29uc3QgRVJST1JfU0VTU0lPTl9ESVNDT05ORUNURUQgPSBcIlNlc3Npb24gY3VycmVudGx5IGRpc2Nvbm5lY3RlZFwiO1xuZXhwb3J0IGNvbnN0IEVSUk9SX1NFU1NJT05fUkVKRUNURUQgPSBcIlNlc3Npb24gUmVqZWN0ZWRcIjtcbmV4cG9ydCBjb25zdCBFUlJPUl9NSVNTSU5HX0pTT05fUlBDID0gXCJNaXNzaW5nIEpTT04gUlBDIHJlc3BvbnNlXCI7XG5leHBvcnQgY29uc3QgRVJST1JfTUlTU0lOR19SRVNVTFQgPSBgSlNPTi1SUEMgc3VjY2VzcyByZXNwb25zZSBtdXN0IGluY2x1ZGUgXCJyZXN1bHRcIiBmaWVsZGA7XG5leHBvcnQgY29uc3QgRVJST1JfTUlTU0lOR19FUlJPUiA9IGBKU09OLVJQQyBlcnJvciByZXNwb25zZSBtdXN0IGluY2x1ZGUgXCJlcnJvclwiIGZpZWxkYDtcbmV4cG9ydCBjb25zdCBFUlJPUl9NSVNTSU5HX01FVEhPRCA9IGBKU09OIFJQQyByZXF1ZXN0IG11c3QgaGF2ZSB2YWxpZCBcIm1ldGhvZFwiIHZhbHVlYDtcbmV4cG9ydCBjb25zdCBFUlJPUl9NSVNTSU5HX0lEID0gYEpTT04gUlBDIHJlcXVlc3QgbXVzdCBoYXZlIHZhbGlkIFwiaWRcIiB2YWx1ZWA7XG5leHBvcnQgY29uc3QgRVJST1JfTUlTU0lOR19SRVFVSVJFRCA9IFwiTWlzc2luZyBvbmUgb2YgdGhlIHJlcXVpcmVkIHBhcmFtZXRlcnM6IGJyaWRnZSAvIHVyaSAvIHNlc3Npb25cIjtcbmV4cG9ydCBjb25zdCBFUlJPUl9JTlZBTElEX1JFU1BPTlNFID0gXCJKU09OIFJQQyByZXNwb25zZSBmb3JtYXQgaXMgaW52YWxpZFwiO1xuZXhwb3J0IGNvbnN0IEVSUk9SX0lOVkFMSURfVVJJID0gXCJVUkkgZm9ybWF0IGlzIGludmFsaWRcIjtcbmV4cG9ydCBjb25zdCBFUlJPUl9RUkNPREVfTU9EQUxfTk9UX1BST1ZJREVEID0gXCJRUkNvZGUgTW9kYWwgbm90IHByb3ZpZGVkXCI7XG5leHBvcnQgY29uc3QgRVJST1JfUVJDT0RFX01PREFMX1VTRVJfQ0xPU0VEID0gXCJVc2VyIGNsb3NlIFFSQ29kZSBNb2RhbFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JzLmpzLm1hcCIsImV4cG9ydCBjb25zdCBSRVNFUlZFRF9FVkVOVFMgPSBbXG4gICAgXCJzZXNzaW9uX3JlcXVlc3RcIixcbiAgICBcInNlc3Npb25fdXBkYXRlXCIsXG4gICAgXCJleGNoYW5nZV9rZXlcIixcbiAgICBcImNvbm5lY3RcIixcbiAgICBcImRpc2Nvbm5lY3RcIixcbiAgICBcImRpc3BsYXlfdXJpXCIsXG4gICAgXCJtb2RhbF9jbG9zZWRcIixcbiAgICBcInRyYW5zcG9ydF9vcGVuXCIsXG4gICAgXCJ0cmFuc3BvcnRfY2xvc2VcIixcbiAgICBcInRyYW5zcG9ydF9lcnJvclwiLFxuXTtcbmV4cG9ydCBjb25zdCByZXNlcnZlZEV2ZW50cyA9IFJFU0VSVkVEX0VWRU5UUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50cy5qcy5tYXAiLCJleHBvcnQgKiBmcm9tIFwiLi9lcnJvcnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2V2ZW50c1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vanNvbnJwY1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbW9iaWxlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9uZXR3b3Jrc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IGNvbnN0IFdBTExFVF9NRVRIT0RTID0gW1xuICAgIFwid2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW5cIixcbiAgICBcIndhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluXCIsXG4gICAgXCJ3YWxsZXRfZ2V0UGVybWlzc2lvbnNcIixcbiAgICBcIndhbGxldF9yZXF1ZXN0UGVybWlzc2lvbnNcIixcbiAgICBcIndhbGxldF9yZWdpc3Rlck9uYm9hcmRpbmdcIixcbiAgICBcIndhbGxldF93YXRjaEFzc2V0XCIsXG4gICAgXCJ3YWxsZXRfc2NhblFSQ29kZVwiLFxuXTtcbmV4cG9ydCBjb25zdCBTSUdOSU5HX01FVEhPRFMgPSBbXG4gICAgXCJldGhfc2VuZFRyYW5zYWN0aW9uXCIsXG4gICAgXCJldGhfc2lnblRyYW5zYWN0aW9uXCIsXG4gICAgXCJldGhfc2lnblwiLFxuICAgIFwiZXRoX3NpZ25UeXBlZERhdGFcIixcbiAgICBcImV0aF9zaWduVHlwZWREYXRhX3YxXCIsXG4gICAgXCJldGhfc2lnblR5cGVkRGF0YV92MlwiLFxuICAgIFwiZXRoX3NpZ25UeXBlZERhdGFfdjNcIixcbiAgICBcImV0aF9zaWduVHlwZWREYXRhX3Y0XCIsXG4gICAgXCJwZXJzb25hbF9zaWduXCIsXG4gICAgLi4uV0FMTEVUX01FVEhPRFMsXG5dO1xuZXhwb3J0IGNvbnN0IFNUQVRFX01FVEhPRFMgPSBbXCJldGhfYWNjb3VudHNcIiwgXCJldGhfY2hhaW5JZFwiLCBcIm5ldF92ZXJzaW9uXCJdO1xuZXhwb3J0IGNvbnN0IHNpZ25pbmdNZXRob2RzID0gU0lHTklOR19NRVRIT0RTO1xuZXhwb3J0IGNvbnN0IHN0YXRlTWV0aG9kcyA9IFNUQVRFX01FVEhPRFM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc29ucnBjLmpzLm1hcCIsImV4cG9ydCBjb25zdCBNT0JJTEVfTElOS19DSE9JQ0VfS0VZID0gXCJXQUxMRVRDT05ORUNUX0RFRVBMSU5LX0NIT0lDRVwiO1xuZXhwb3J0IGNvbnN0IG1vYmlsZUxpbmtDaG9pY2VLZXkgPSBNT0JJTEVfTElOS19DSE9JQ0VfS0VZO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9iaWxlLmpzLm1hcCIsImV4cG9ydCBjb25zdCBJTkZVUkFfTkVUV09SS1MgPSB7XG4gICAgMTogXCJtYWlubmV0XCIsXG4gICAgMzogXCJyb3BzdGVuXCIsXG4gICAgNDogXCJyaW5rZWJ5XCIsXG4gICAgNTogXCJnb2VybGlcIixcbiAgICA0MjogXCJrb3ZhblwiLFxufTtcbmV4cG9ydCBjb25zdCBpbmZ1cmFOZXR3b3JrcyA9IElORlVSQV9ORVRXT1JLUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5ldHdvcmtzLmpzLm1hcCIsIi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyeXB0by5qcy5tYXAiLCIvLyMgc291cmNlTWFwcGluZ1VSTD1ldGhlcmV1bS5qcy5tYXAiLCJleHBvcnQgY2xhc3MgSUV2ZW50cyB7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHMuanMubWFwIiwiZXhwb3J0ICogZnJvbSBcIi4vY3J5cHRvXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2V0aGVyZXVtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9ldmVudHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2pzb25ycGNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL25ldHdvcmtcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Byb3RvY29sXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9xcmNvZGVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zb2NrZXRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3N0b3JhZ2VcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzb25ycGMuanMubWFwIiwiLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV0d29yay5qcy5tYXAiLCIvLyMgc291cmNlTWFwcGluZ1VSTD1wcm90b2NvbC5qcy5tYXAiLCIvLyMgc291cmNlTWFwcGluZ1VSTD1xcmNvZGUuanMubWFwIiwiLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVnaXN0cnkuanMubWFwIiwiLy8jIHNvdXJjZU1hcHBpbmdVUkw9c29ja2V0LmpzLm1hcCIsIi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0b3JhZ2UuanMubWFwIiwiaW1wb3J0ICogYXMgZW5jb2RpbmcgZnJvbSBcIkB3YWxsZXRjb25uZWN0L2VuY29kaW5nXCI7XG5leHBvcnQgZnVuY3Rpb24gY29udmVydEFycmF5QnVmZmVyVG9CdWZmZXIoYXJyQnVmKSB7XG4gICAgcmV0dXJuIGVuY29kaW5nLmFycmF5VG9CdWZmZXIobmV3IFVpbnQ4QXJyYXkoYXJyQnVmKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY29udmVydEFycmF5QnVmZmVyVG9VdGY4KGFyckJ1Zikge1xuICAgIHJldHVybiBlbmNvZGluZy5hcnJheVRvVXRmOChuZXcgVWludDhBcnJheShhcnJCdWYpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0QXJyYXlCdWZmZXJUb0hleChhcnJCdWYsIG5vUHJlZml4KSB7XG4gICAgcmV0dXJuIGVuY29kaW5nLmFycmF5VG9IZXgobmV3IFVpbnQ4QXJyYXkoYXJyQnVmKSwgIW5vUHJlZml4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0QXJyYXlCdWZmZXJUb051bWJlcihhcnJCdWYpIHtcbiAgICByZXR1cm4gZW5jb2RpbmcuYXJyYXlUb051bWJlcihuZXcgVWludDhBcnJheShhcnJCdWYpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRBcnJheUJ1ZmZlcnMoLi4uYXJncykge1xuICAgIHJldHVybiBlbmNvZGluZy5oZXhUb0FycmF5KGFyZ3MubWFwKGIgPT4gZW5jb2RpbmcuYXJyYXlUb0hleChuZXcgVWludDhBcnJheShiKSkpLmpvaW4oXCJcIikpLmJ1ZmZlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0QnVmZmVyVG9BcnJheUJ1ZmZlcihidWYpIHtcbiAgICByZXR1cm4gZW5jb2RpbmcuYnVmZmVyVG9BcnJheShidWYpLmJ1ZmZlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0QnVmZmVyVG9VdGY4KGJ1Zikge1xuICAgIHJldHVybiBlbmNvZGluZy5idWZmZXJUb1V0ZjgoYnVmKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0QnVmZmVyVG9IZXgoYnVmLCBub1ByZWZpeCkge1xuICAgIHJldHVybiBlbmNvZGluZy5idWZmZXJUb0hleChidWYsICFub1ByZWZpeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY29udmVydEJ1ZmZlclRvTnVtYmVyKGJ1Zikge1xuICAgIHJldHVybiBlbmNvZGluZy5idWZmZXJUb051bWJlcihidWYpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdEJ1ZmZlcnMoLi4uYXJncykge1xuICAgIHJldHVybiBlbmNvZGluZy5jb25jYXRCdWZmZXJzKC4uLmFyZ3MpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRVdGY4VG9BcnJheUJ1ZmZlcih1dGY4KSB7XG4gICAgcmV0dXJuIGVuY29kaW5nLnV0ZjhUb0FycmF5KHV0ZjgpLmJ1ZmZlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VXRmOFRvQnVmZmVyKHV0ZjgpIHtcbiAgICByZXR1cm4gZW5jb2RpbmcudXRmOFRvQnVmZmVyKHV0ZjgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRVdGY4VG9IZXgodXRmOCwgbm9QcmVmaXgpIHtcbiAgICByZXR1cm4gZW5jb2RpbmcudXRmOFRvSGV4KHV0ZjgsICFub1ByZWZpeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY29udmVydFV0ZjhUb051bWJlcih1dGY4KSB7XG4gICAgcmV0dXJuIGVuY29kaW5nLnV0ZjhUb051bWJlcih1dGY4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0SGV4VG9CdWZmZXIoaGV4KSB7XG4gICAgcmV0dXJuIGVuY29kaW5nLmhleFRvQnVmZmVyKGhleCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY29udmVydEhleFRvQXJyYXlCdWZmZXIoaGV4KSB7XG4gICAgcmV0dXJuIGVuY29kaW5nLmhleFRvQXJyYXkoaGV4KS5idWZmZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gY29udmVydEhleFRvVXRmOChoZXgpIHtcbiAgICByZXR1cm4gZW5jb2RpbmcuaGV4VG9VdGY4KGhleCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY29udmVydEhleFRvTnVtYmVyKGhleCkge1xuICAgIHJldHVybiBlbmNvZGluZy5oZXhUb051bWJlcihoZXgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnROdW1iZXJUb0J1ZmZlcihudW0pIHtcbiAgICByZXR1cm4gZW5jb2RpbmcubnVtYmVyVG9CdWZmZXIobnVtKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TnVtYmVyVG9BcnJheUJ1ZmZlcihudW0pIHtcbiAgICByZXR1cm4gZW5jb2RpbmcubnVtYmVyVG9BcnJheShudW0pLmJ1ZmZlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TnVtYmVyVG9VdGY4KG51bSkge1xuICAgIHJldHVybiBlbmNvZGluZy5udW1iZXJUb1V0ZjgobnVtKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TnVtYmVyVG9IZXgobnVtLCBub1ByZWZpeCkge1xuICAgIHJldHVybiBlbmNvZGluZy5udW1iZXJUb0hleChOdW1iZXIobnVtKSwgIW5vUHJlZml4KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuY29kaW5nLmpzLm1hcCIsImltcG9ydCB7IGRldGVjdCwgfSBmcm9tIFwiZGV0ZWN0LWJyb3dzZXJcIjtcbmltcG9ydCB7IGdldE5hdmlnYXRvciB9IGZyb20gXCIuL3dpbmRvd1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdEVudih1c2VyQWdlbnQpIHtcbiAgICByZXR1cm4gZGV0ZWN0KHVzZXJBZ2VudCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0T1MoKSB7XG4gICAgY29uc3QgZW52ID0gZGV0ZWN0RW52KCk7XG4gICAgcmV0dXJuIGVudiAmJiBlbnYub3MgPyBlbnYub3MgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBbmRyb2lkKCkge1xuICAgIGNvbnN0IG9zID0gZGV0ZWN0T1MoKTtcbiAgICByZXR1cm4gb3MgPyBvcy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiYW5kcm9pZFwiKSA6IGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzSU9TKCkge1xuICAgIGNvbnN0IG9zID0gZGV0ZWN0T1MoKTtcbiAgICByZXR1cm4gb3NcbiAgICAgICAgPyBvcy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiaW9zXCIpIHx8XG4gICAgICAgICAgICAob3MudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcIm1hY1wiKSAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxKVxuICAgICAgICA6IGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xuICAgIGNvbnN0IG9zID0gZGV0ZWN0T1MoKTtcbiAgICByZXR1cm4gb3MgPyBpc0FuZHJvaWQoKSB8fCBpc0lPUygpIDogZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlKCkge1xuICAgIGNvbnN0IGVudiA9IGRldGVjdEVudigpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGVudiAmJiBlbnYubmFtZSA/IGVudi5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibm9kZVwiIDogZmFsc2U7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0Jyb3dzZXIoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gIWlzTm9kZSgpICYmICEhZ2V0TmF2aWdhdG9yKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVudi5qcy5tYXAiLCJleHBvcnQgKiBmcm9tIFwiLi9lbmNvZGluZ1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZW52XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9qc29uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9sb2NhbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbWV0YVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbWlzY1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbW9iaWxlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wYXlsb2FkXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2Vzc2lvblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdXJsXCI7XG5leHBvcnQgKiBmcm9tIFwiLi92YWxpZGF0b3JzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi93aW5kb3dcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCAqIGFzIHNhZmVKc29uIGZyb20gXCJAd2FsbGV0Y29ubmVjdC9zYWZlLWpzb25cIjtcbmV4cG9ydCBjb25zdCBzYWZlSnNvblBhcnNlID0gc2FmZUpzb24uc2FmZUpzb25QYXJzZTtcbmV4cG9ydCBjb25zdCBzYWZlSnNvblN0cmluZ2lmeSA9IHNhZmVKc29uLnNhZmVKc29uU3RyaW5naWZ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anNvbi5qcy5tYXAiLCJpbXBvcnQgeyBzYWZlSnNvblBhcnNlLCBzYWZlSnNvblN0cmluZ2lmeSB9IGZyb20gXCIuL2pzb25cIjtcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3dpbmRvd1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsKGtleSwgZGF0YSkge1xuICAgIGNvbnN0IHJhdyA9IHNhZmVKc29uU3RyaW5naWZ5KGRhdGEpO1xuICAgIGNvbnN0IGxvY2FsID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgaWYgKGxvY2FsKSB7XG4gICAgICAgIGxvY2FsLnNldEl0ZW0oa2V5LCByYXcpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbChrZXkpIHtcbiAgICBsZXQgZGF0YSA9IG51bGw7XG4gICAgbGV0IHJhdyA9IG51bGw7XG4gICAgY29uc3QgbG9jYWwgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICBpZiAobG9jYWwpIHtcbiAgICAgICAgcmF3ID0gbG9jYWwuZ2V0SXRlbShrZXkpO1xuICAgIH1cbiAgICBkYXRhID0gcmF3ID8gc2FmZUpzb25QYXJzZShyYXcpIDogcmF3O1xuICAgIHJldHVybiBkYXRhO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxvY2FsKGtleSkge1xuICAgIGNvbnN0IGxvY2FsID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgaWYgKGxvY2FsKSB7XG4gICAgICAgIGxvY2FsLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2NhbC5qcy5tYXAiLCJpbXBvcnQgKiBhcyB3aW5kb3dNZXRhZGF0YSBmcm9tIFwiQHdhbGxldGNvbm5lY3Qvd2luZG93LW1ldGFkYXRhXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50TWV0YSgpIHtcbiAgICByZXR1cm4gd2luZG93TWV0YWRhdGEuZ2V0V2luZG93TWV0YWRhdGEoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1ldGEuanMubWFwIiwiaW1wb3J0ICogYXMgZW5jb2RpbmcgZnJvbSBcIkB3YWxsZXRjb25uZWN0L2VuY29kaW5nXCI7XG5pbXBvcnQgKiBhcyBqc29uUnBjVXRpbHMgZnJvbSBcIkB3YWxsZXRjb25uZWN0L2pzb25ycGMtdXRpbHNcIjtcbmltcG9ydCB7IElORlVSQV9ORVRXT1JLUyB9IGZyb20gXCJAd2FsbGV0Y29ubmVjdC9sZWdhY3ktdHlwZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUhleChoZXgpIHtcbiAgICByZXR1cm4gZW5jb2Rpbmcuc2FuaXRpemVIZXgoaGV4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRIZXhQcmVmaXgoaGV4KSB7XG4gICAgcmV0dXJuIGVuY29kaW5nLmFkZEhleFByZWZpeChoZXgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUhleFByZWZpeChoZXgpIHtcbiAgICByZXR1cm4gZW5jb2RpbmcucmVtb3ZlSGV4UHJlZml4KGhleCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSGV4TGVhZGluZ1plcm9zKGhleCkge1xuICAgIHJldHVybiBlbmNvZGluZy5yZW1vdmVIZXhMZWFkaW5nWmVyb3MoZW5jb2RpbmcuYWRkSGV4UHJlZml4KGhleCkpO1xufVxuZXhwb3J0IGNvbnN0IHBheWxvYWRJZCA9IGpzb25ScGNVdGlscy5wYXlsb2FkSWQ7XG5leHBvcnQgZnVuY3Rpb24gdXVpZCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSAoKGEsIGIpID0+IHtcbiAgICAgICAgZm9yIChiID0gYSA9IFwiXCI7IGErKyA8IDM2OyBiICs9IChhICogNTEpICYgNTIgPyAoYSBeIDE1ID8gOCBeIChNYXRoLnJhbmRvbSgpICogKGEgXiAyMCA/IDE2IDogNCkpIDogNCkudG9TdHJpbmcoMTYpIDogXCItXCIpIHtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYjtcbiAgICB9KSgpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gbG9nRGVwcmVjYXRpb25XYXJuaW5nKCkge1xuICAgIGNvbnNvbGUud2FybihcIkRFUFJFQ0FUSU9OIFdBUk5JTkc6IFRoaXMgV2FsbGV0Q29ubmVjdCBjbGllbnQgbGlicmFyeSB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgQHdhbGxldGNvbm5lY3QvY2xpZW50LiBQbGVhc2UgY2hlY2sgZG9jcy53YWxsZXRjb25uZWN0Lm9yZyB0byBsZWFybiBtb3JlIGFib3V0IHRoaXMgbWlncmF0aW9uIVwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmZ1cmFScGNVcmwoY2hhaW5JZCwgaW5mdXJhSWQpIHtcbiAgICBsZXQgcnBjVXJsO1xuICAgIGNvbnN0IG5ldHdvcmsgPSBJTkZVUkFfTkVUV09SS1NbY2hhaW5JZF07XG4gICAgaWYgKG5ldHdvcmspIHtcbiAgICAgICAgcnBjVXJsID0gYGh0dHBzOi8vJHtuZXR3b3JrfS5pbmZ1cmEuaW8vdjMvJHtpbmZ1cmFJZH1gO1xuICAgIH1cbiAgICByZXR1cm4gcnBjVXJsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJwY1VybChjaGFpbklkLCBycGMpIHtcbiAgICBsZXQgcnBjVXJsO1xuICAgIGNvbnN0IGluZnVyYVVybCA9IGdldEluZnVyYVJwY1VybChjaGFpbklkLCBycGMuaW5mdXJhSWQpO1xuICAgIGlmIChycGMuY3VzdG9tICYmIHJwYy5jdXN0b21bY2hhaW5JZF0pIHtcbiAgICAgICAgcnBjVXJsID0gcnBjLmN1c3RvbVtjaGFpbklkXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5mdXJhVXJsKSB7XG4gICAgICAgIHJwY1VybCA9IGluZnVyYVVybDtcbiAgICB9XG4gICAgcmV0dXJuIHJwY1VybDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pc2MuanMubWFwIiwiaW1wb3J0IHsgTU9CSUxFX0xJTktfQ0hPSUNFX0tFWSwgfSBmcm9tIFwiQHdhbGxldGNvbm5lY3QvbGVnYWN5LXR5cGVzXCI7XG5pbXBvcnQgeyBzZXRMb2NhbCB9IGZyb20gXCIuL2xvY2FsXCI7XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0SU9TTW9iaWxlKHVyaSwgZW50cnkpIHtcbiAgICBjb25zdCBlbmNvZGVkVXJpID0gZW5jb2RlVVJJQ29tcG9uZW50KHVyaSk7XG4gICAgcmV0dXJuIGVudHJ5LnVuaXZlcnNhbExpbmtcbiAgICAgICAgPyBgJHtlbnRyeS51bml2ZXJzYWxMaW5rfS93Yz91cmk9JHtlbmNvZGVkVXJpfWBcbiAgICAgICAgOiBlbnRyeS5kZWVwTGlua1xuICAgICAgICAgICAgPyBgJHtlbnRyeS5kZWVwTGlua30ke2VudHJ5LmRlZXBMaW5rLmVuZHNXaXRoKFwiOlwiKSA/IFwiLy9cIiA6IFwiL1wifXdjP3VyaT0ke2VuY29kZWRVcml9YFxuICAgICAgICAgICAgOiBcIlwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVNb2JpbGVMaW5rSW5mbyhkYXRhKSB7XG4gICAgY29uc3QgZm9jdXNVcmkgPSBkYXRhLmhyZWYuc3BsaXQoXCI/XCIpWzBdO1xuICAgIHNldExvY2FsKE1PQklMRV9MSU5LX0NIT0lDRV9LRVksIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgaHJlZjogZm9jdXNVcmkgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vYmlsZVJlZ2lzdHJ5RW50cnkocmVnaXN0cnksIG5hbWUpIHtcbiAgICByZXR1cm4gcmVnaXN0cnkuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5hbWUudG9Mb3dlckNhc2UoKSkpWzBdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vYmlsZUxpbmtSZWdpc3RyeShyZWdpc3RyeSwgd2hpdGVsaXN0KSB7XG4gICAgbGV0IGxpbmtzID0gcmVnaXN0cnk7XG4gICAgaWYgKHdoaXRlbGlzdCkge1xuICAgICAgICBsaW5rcyA9IHdoaXRlbGlzdC5tYXAoKG5hbWUpID0+IGdldE1vYmlsZVJlZ2lzdHJ5RW50cnkocmVnaXN0cnksIG5hbWUpKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgfVxuICAgIHJldHVybiBsaW5rcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vYmlsZS5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gcHJvbWlzaWZ5KG9yaWdpbmFsRm4sIHRoaXNBcmcpIHtcbiAgICBjb25zdCBwcm9taXNpZmllZEZ1bmN0aW9uID0gYXN5bmMgKC4uLmNhbGxBcmdzKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyID09PSBudWxsIHx8IHR5cGVvZiBlcnIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb3JpZ2luYWxGbi5hcHBseSh0aGlzQXJnLCBbLi4uY2FsbEFyZ3MsIGNhbGxiYWNrXSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHByb21pc2lmaWVkRnVuY3Rpb247XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UnBjRXJyb3IoZXJyb3IpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IubWVzc2FnZSB8fCBcIkZhaWxlZCBvciBSZWplY3RlZCBSZXF1ZXN0XCI7XG4gICAgbGV0IGNvZGUgPSAtMzIwMDA7XG4gICAgaWYgKGVycm9yICYmICFlcnJvci5jb2RlKSB7XG4gICAgICAgIHN3aXRjaCAobWVzc2FnZSkge1xuICAgICAgICAgICAgY2FzZSBcIlBhcnNlIGVycm9yXCI6XG4gICAgICAgICAgICAgICAgY29kZSA9IC0zMjcwMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJJbnZhbGlkIHJlcXVlc3RcIjpcbiAgICAgICAgICAgICAgICBjb2RlID0gLTMyNjAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk1ldGhvZCBub3QgZm91bmRcIjpcbiAgICAgICAgICAgICAgICBjb2RlID0gLTMyNjAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkludmFsaWQgcGFyYW1zXCI6XG4gICAgICAgICAgICAgICAgY29kZSA9IC0zMjYwMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJJbnRlcm5hbCBlcnJvclwiOlxuICAgICAgICAgICAgICAgIGNvZGUgPSAtMzI2MDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvZGUgPSAtMzIwMDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICBjb2RlLFxuICAgICAgICBtZXNzYWdlLFxuICAgIH07XG4gICAgaWYgKGVycm9yLmRhdGEpIHtcbiAgICAgICAgcmVzdWx0LmRhdGEgPSBlcnJvci5kYXRhO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF5bG9hZC5qcy5tYXAiLCJjb25zdCBBUElfVVJMID0gXCJodHRwczovL3JlZ2lzdHJ5LndhbGxldGNvbm5lY3QuY29tXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0V2FsbGV0UmVnaXN0cnlVcmwoKSB7XG4gICAgcmV0dXJuIEFQSV9VUkwgKyBcIi9hcGkvdjIvd2FsbGV0c1wiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERhcHBSZWdpc3RyeVVybCgpIHtcbiAgICByZXR1cm4gQVBJX1VSTCArIFwiL2FwaS92Mi9kYXBwc1wiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vYmlsZVJlZ2lzdHJ5RW50cnkoZW50cnksIHBsYXRmb3JtID0gXCJtb2JpbGVcIikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBlbnRyeS5uYW1lIHx8IFwiXCIsXG4gICAgICAgIHNob3J0TmFtZTogZW50cnkubWV0YWRhdGEuc2hvcnROYW1lIHx8IFwiXCIsXG4gICAgICAgIGNvbG9yOiBlbnRyeS5tZXRhZGF0YS5jb2xvcnMucHJpbWFyeSB8fCBcIlwiLFxuICAgICAgICBsb2dvOiAoX2EgPSBlbnRyeS5pbWFnZV91cmwuc20pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFwiXCIsXG4gICAgICAgIHVuaXZlcnNhbExpbms6IGVudHJ5W3BsYXRmb3JtXS51bml2ZXJzYWwgfHwgXCJcIixcbiAgICAgICAgZGVlcExpbms6IGVudHJ5W3BsYXRmb3JtXS5uYXRpdmUgfHwgXCJcIixcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vYmlsZVJlZ2lzdHJ5KHJlZ2lzdHJ5LCBwbGF0Zm9ybSA9IFwibW9iaWxlXCIpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyZWdpc3RyeSlcbiAgICAgICAgLmZpbHRlcihlbnRyeSA9PiAhIWVudHJ5W3BsYXRmb3JtXS51bml2ZXJzYWwgfHwgISFlbnRyeVtwbGF0Zm9ybV0ubmF0aXZlKVxuICAgICAgICAubWFwKGVudHJ5ID0+IGZvcm1hdE1vYmlsZVJlZ2lzdHJ5RW50cnkoZW50cnksIHBsYXRmb3JtKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWdpc3RyeS5qcy5tYXAiLCJpbXBvcnQgeyBwYXJzZVF1ZXJ5U3RyaW5nIH0gZnJvbSBcIi4vdXJsXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNXYWxsZXRDb25uZWN0U2Vzc2lvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdC5icmlkZ2UgIT09IFwidW5kZWZpbmVkXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VXYWxsZXRDb25uZWN0VXJpKHN0cikge1xuICAgIGNvbnN0IHBhdGhTdGFydCA9IHN0ci5pbmRleE9mKFwiOlwiKTtcbiAgICBjb25zdCBwYXRoRW5kID0gc3RyLmluZGV4T2YoXCI/XCIpICE9PSAtMSA/IHN0ci5pbmRleE9mKFwiP1wiKSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwcm90b2NvbCA9IHN0ci5zdWJzdHJpbmcoMCwgcGF0aFN0YXJ0KTtcbiAgICBjb25zdCBwYXRoID0gc3RyLnN1YnN0cmluZyhwYXRoU3RhcnQgKyAxLCBwYXRoRW5kKTtcbiAgICBmdW5jdGlvbiBwYXJzZVJlcXVpcmVkUGFyYW1zKHBhdGgpIHtcbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gXCJAXCI7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHBhdGguc3BsaXQoc2VwYXJhdG9yKTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQYXJhbXMgPSB7XG4gICAgICAgICAgICBoYW5kc2hha2VUb3BpYzogdmFsdWVzWzBdLFxuICAgICAgICAgICAgdmVyc2lvbjogcGFyc2VJbnQodmFsdWVzWzFdLCAxMCksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXF1aXJlZFBhcmFtcztcbiAgICB9XG4gICAgY29uc3QgcmVxdWlyZWRQYXJhbXMgPSBwYXJzZVJlcXVpcmVkUGFyYW1zKHBhdGgpO1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gdHlwZW9mIHBhdGhFbmQgIT09IFwidW5kZWZpbmVkXCIgPyBzdHIuc3Vic3RyKHBhdGhFbmQpIDogXCJcIjtcbiAgICBmdW5jdGlvbiBwYXJzZVF1ZXJ5UGFyYW1zKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlUXVlcnlTdHJpbmcocXVlcnlTdHJpbmcpO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAga2V5OiByZXN1bHQua2V5IHx8IFwiXCIsXG4gICAgICAgICAgICBicmlkZ2U6IHJlc3VsdC5icmlkZ2UgfHwgXCJcIixcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gICAgfVxuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gcGFyc2VRdWVyeVBhcmFtcyhxdWVyeVN0cmluZyk7XG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgcHJvdG9jb2wgfSwgcmVxdWlyZWRQYXJhbXMpLCBxdWVyeVBhcmFtcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlc3Npb24uanMubWFwIiwiaW1wb3J0ICogYXMgcXVlcnlTdHJpbmdVdGlscyBmcm9tIFwicXVlcnktc3RyaW5nXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnlTdHJpbmcodXJsKSB7XG4gICAgY29uc3QgcGF0aEVuZCA9IHVybC5pbmRleE9mKFwiP1wiKSAhPT0gLTEgPyB1cmwuaW5kZXhPZihcIj9cIikgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB0eXBlb2YgcGF0aEVuZCAhPT0gXCJ1bmRlZmluZWRcIiA/IHVybC5zdWJzdHIocGF0aEVuZCkgOiBcIlwiO1xuICAgIHJldHVybiBxdWVyeVN0cmluZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb1F1ZXJ5U3RyaW5nKHF1ZXJ5U3RyaW5nLCBuZXdRdWVyeVBhcmFtcykge1xuICAgIGxldCBxdWVyeVBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcocXVlcnlTdHJpbmcpO1xuICAgIHF1ZXJ5UGFyYW1zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBxdWVyeVBhcmFtcyksIG5ld1F1ZXJ5UGFyYW1zKTtcbiAgICBxdWVyeVN0cmluZyA9IGZvcm1hdFF1ZXJ5U3RyaW5nKHF1ZXJ5UGFyYW1zKTtcbiAgICByZXR1cm4gcXVlcnlTdHJpbmc7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZyhxdWVyeVN0cmluZykge1xuICAgIHJldHVybiBxdWVyeVN0cmluZ1V0aWxzLnBhcnNlKHF1ZXJ5U3RyaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRRdWVyeVN0cmluZyhxdWVyeVBhcmFtcykge1xuICAgIHJldHVybiBxdWVyeVN0cmluZ1V0aWxzLnN0cmluZ2lmeShxdWVyeVBhcmFtcyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cmwuanMubWFwIiwiaW1wb3J0ICogYXMgZW5jb2RpbmcgZnJvbSBcIkB3YWxsZXRjb25uZWN0L2VuY29kaW5nXCI7XG5pbXBvcnQgeyBTSUdOSU5HX01FVEhPRFMsIFJFU0VSVkVEX0VWRU5UUywgfSBmcm9tIFwiQHdhbGxldGNvbm5lY3QvbGVnYWN5LXR5cGVzXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eVN0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gXCJcIiB8fCAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlLnRyaW0oKSA9PT0gXCJcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eUFycmF5KGFycmF5KSB7XG4gICAgcmV0dXJuICEoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgICByZXR1cm4gZW5jb2RpbmcuaXNCdWZmZXIodmFsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsKSB7XG4gICAgcmV0dXJuIGVuY29kaW5nLmlzVHlwZWRBcnJheSh2YWwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gICAgcmV0dXJuIGVuY29kaW5nLmlzQXJyYXlCdWZmZXIodmFsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKHZhbCkge1xuICAgIHJldHVybiBlbmNvZGluZy5nZXRUeXBlKHZhbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5jb2RpbmcodmFsKSB7XG4gICAgcmV0dXJuIGVuY29kaW5nLmdldEVuY29kaW5nKHZhbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNIZXhTdHJpbmcodmFsdWUsIGxlbmd0aCkge1xuICAgIHJldHVybiBlbmNvZGluZy5pc0hleFN0cmluZyh2YWx1ZSwgbGVuZ3RoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0pzb25ScGNTdWJzY3JpcHRpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QucGFyYW1zID09PSBcIm9iamVjdFwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzSnNvblJwY1JlcXVlc3Qob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QubWV0aG9kICE9PSBcInVuZGVmaW5lZFwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzSnNvblJwY1Jlc3BvbnNlU3VjY2VzcyhvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdC5yZXN1bHQgIT09IFwidW5kZWZpbmVkXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNKc29uUnBjUmVzcG9uc2VFcnJvcihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdC5lcnJvciAhPT0gXCJ1bmRlZmluZWRcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVybmFsRXZlbnQob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QuZXZlbnQgIT09IFwidW5kZWZpbmVkXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNSZXNlcnZlZEV2ZW50KGV2ZW50KSB7XG4gICAgcmV0dXJuIFJFU0VSVkVEX0VWRU5UUy5pbmNsdWRlcyhldmVudCkgfHwgZXZlbnQuc3RhcnRzV2l0aChcIndjX1wiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1NpbGVudFBheWxvYWQocmVxdWVzdCkge1xuICAgIGlmIChyZXF1ZXN0Lm1ldGhvZC5zdGFydHNXaXRoKFwid2NfXCIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoU0lHTklOR19NRVRIT0RTLmluY2x1ZGVzKHJlcXVlc3QubWV0aG9kKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmFsaWRhdG9ycy5qcy5tYXAiLCJpbXBvcnQgKiBhcyB3aW5kb3dHZXR0ZXJzIGZyb20gXCJAd2FsbGV0Y29ubmVjdC93aW5kb3ctZ2V0dGVyc1wiO1xuZXhwb3J0IGNvbnN0IGdldEZyb21XaW5kb3cgPSB3aW5kb3dHZXR0ZXJzLmdldEZyb21XaW5kb3c7XG5leHBvcnQgY29uc3QgZ2V0RnJvbVdpbmRvd09yVGhyb3cgPSB3aW5kb3dHZXR0ZXJzLmdldEZyb21XaW5kb3dPclRocm93O1xuZXhwb3J0IGNvbnN0IGdldERvY3VtZW50T3JUaHJvdyA9IHdpbmRvd0dldHRlcnMuZ2V0RG9jdW1lbnRPclRocm93O1xuZXhwb3J0IGNvbnN0IGdldERvY3VtZW50ID0gd2luZG93R2V0dGVycy5nZXREb2N1bWVudDtcbmV4cG9ydCBjb25zdCBnZXROYXZpZ2F0b3JPclRocm93ID0gd2luZG93R2V0dGVycy5nZXROYXZpZ2F0b3JPclRocm93O1xuZXhwb3J0IGNvbnN0IGdldE5hdmlnYXRvciA9IHdpbmRvd0dldHRlcnMuZ2V0TmF2aWdhdG9yO1xuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uT3JUaHJvdyA9IHdpbmRvd0dldHRlcnMuZ2V0TG9jYXRpb25PclRocm93O1xuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uID0gd2luZG93R2V0dGVycy5nZXRMb2NhdGlvbjtcbmV4cG9ydCBjb25zdCBnZXRDcnlwdG9PclRocm93ID0gd2luZG93R2V0dGVycy5nZXRDcnlwdG9PclRocm93O1xuZXhwb3J0IGNvbnN0IGdldENyeXB0byA9IHdpbmRvd0dldHRlcnMuZ2V0Q3J5cHRvO1xuZXhwb3J0IGNvbnN0IGdldExvY2FsU3RvcmFnZU9yVGhyb3cgPSB3aW5kb3dHZXR0ZXJzLmdldExvY2FsU3RvcmFnZU9yVGhyb3c7XG5leHBvcnQgY29uc3QgZ2V0TG9jYWxTdG9yYWdlID0gd2luZG93R2V0dGVycy5nZXRMb2NhbFN0b3JhZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aW5kb3cuanMubWFwIiwiaW1wb3J0e0NvbXBvbmVudCBhcyBuLGNyZWF0ZUVsZW1lbnQgYXMgdCxvcHRpb25zIGFzIGUsdG9DaGlsZEFycmF5IGFzIHIsRnJhZ21lbnQgYXMgdSxyZW5kZXIgYXMgbyxoeWRyYXRlIGFzIGksY3JlYXRlQ29udGV4dCBhcyBsLGNyZWF0ZVJlZiBhcyBjLGNsb25lRWxlbWVudCBhcyBmfWZyb21cInByZWFjdFwiO2V4cG9ydHtDb21wb25lbnQsRnJhZ21lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVFbGVtZW50LGNyZWF0ZVJlZn1mcm9tXCJwcmVhY3RcIjtpbXBvcnR7dXNlU3RhdGUgYXMgYSx1c2VJZCBhcyBzLHVzZVJlZHVjZXIgYXMgaCx1c2VFZmZlY3QgYXMgdix1c2VMYXlvdXRFZmZlY3QgYXMgZCx1c2VSZWYgYXMgcCx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG0sdXNlTWVtbyBhcyB5LHVzZUNhbGxiYWNrIGFzIF8sdXNlQ29udGV4dCBhcyBiLHVzZURlYnVnVmFsdWUgYXMgU31mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7ZnVuY3Rpb24gZyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobix0KXtyZXR1cm4gbj09PXQmJigwIT09bnx8MS9uPT0xL3QpfHxuIT1uJiZ0IT10fWZ1bmN0aW9uIHcobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIHgobixlKXtmdW5jdGlvbiByKG4pe3ZhciB0PXRoaXMucHJvcHMucmVmLHI9dD09bi5yZWY7cmV0dXJuIXImJnQmJih0LmNhbGw/dChudWxsKTp0LmN1cnJlbnQ9bnVsbCksZT8hZSh0aGlzLnByb3BzLG4pfHwhcjpDKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gdShlKXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9cix0KG4sZSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsdS5fX2Y9ITAsdX0ody5wcm90b3R5cGU9bmV3IG4pLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLHcucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBDKHRoaXMucHJvcHMsbil8fEModGhpcy5zdGF0ZSx0KX07dmFyIFI9ZS5fX2I7ZS5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLFImJlIobil9O3ZhciBOPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiBrKG4pe2Z1bmN0aW9uIHQodCl7dmFyIGU9Zyh7fSx0KTtyZXR1cm4gZGVsZXRlIGUucmVmLG4oZSx0LnJlZnx8bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9Tix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgQT1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6cihyKG4pLm1hcCh0KSl9LE89e21hcDpBLGZvckVhY2g6QSxjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj9yKG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PXIobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6cn0sVD1lLl9fZTtlLl9fZT1mdW5jdGlvbihuLHQsZSxyKXtpZihuLnRoZW4pZm9yKHZhciB1LG89dDtvPW8uX187KWlmKCh1PW8uX19jKSYmdS5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHUuX19jKG4sdCk7VChuLHQsZSxyKX07dmFyIEk9ZS51bm1vdW50O2Z1bmN0aW9uIEwobix0LGUpe3JldHVybiBuJiYobi5fX2MmJm4uX19jLl9fSCYmKG4uX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksbi5fX2MuX19IPW51bGwpLG51bGwhPShuPWcoe30sbikpLl9fYyYmKG4uX19jLl9fUD09PWUmJihuLl9fYy5fX1A9dCksbi5fX2M9bnVsbCksbi5fX2s9bi5fX2smJm4uX19rLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gTChuLHQsZSl9KSksbn1mdW5jdGlvbiBVKG4sdCxlKXtyZXR1cm4gbiYmKG4uX192PW51bGwsbi5fX2s9bi5fX2smJm4uX19rLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gVShuLHQsZSl9KSxuLl9fYyYmbi5fX2MuX19QPT09dCYmKG4uX19lJiZlLmluc2VydEJlZm9yZShuLl9fZSxuLl9fZCksbi5fX2MuX19lPSEwLG4uX19jLl9fUD1lKSksbn1mdW5jdGlvbiBEKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIEYobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19hJiZ0Ll9fYShuKX1mdW5jdGlvbiBNKG4pe3ZhciBlLHIsdTtmdW5jdGlvbiBvKG8pe2lmKGV8fChlPW4oKSkudGhlbihmdW5jdGlvbihuKXtyPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7dT1ufSksdSl0aHJvdyB1O2lmKCFyKXRocm93IGU7cmV0dXJuIHQocixvKX1yZXR1cm4gby5kaXNwbGF5TmFtZT1cIkxhenlcIixvLl9fZj0hMCxvfWZ1bmN0aW9uIFYoKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1lLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxJJiZJKG4pfSwoRC5wcm90b3R5cGU9bmV3IG4pLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PUYoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Epe3ZhciBuPXIuc3RhdGUuX19hO3IuX192Ll9fa1swXT1VKG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fYTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGM9ITA9PT10Ll9faDtyLl9fdSsrfHxjfHxyLnNldFN0YXRlKHtfX2E6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxELnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obixlKXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG89dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09TCh0aGlzLl9fYixyLG8uX19PPW8uX19QKX10aGlzLl9fYj1udWxsfXZhciBpPWUuX19hJiZ0KHUsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gaSYmKGkuX19oPW51bGwpLFt0KHUsbnVsbCxlLl9fYT9udWxsOm4uY2hpbGRyZW4pLGldfTt2YXIgVz1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBQKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gaihuKXt2YXIgZT10aGlzLHI9bi5pO2UuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtvKG51bGwsZS5sKSxlLmw9bnVsbCxlLmk9bnVsbH0sZS5pJiZlLmkhPT1yJiZlLmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KGUubHx8KGUuaT1yLGUubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOnIsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSxlLmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLHQpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLGUuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksZS5pLnJlbW92ZUNoaWxkKG4pfX0pLG8odChQLHtjb250ZXh0OmUuY29udGV4dH0sbi5fX3YpLGUubCkpOmUubCYmZS5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIHoobixlKXt2YXIgcj10KGose19fdjpuLGk6ZX0pO3JldHVybiByLmNvbnRhaW5lckluZm89ZSxyfShWLnByb3RvdHlwZT1uZXcgbikuX19hPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1GKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxXKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sVi5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PXIobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LFYucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1WLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtXKG4sZSx0KX0pfTt2YXIgQj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsSD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fGltYWdlKCFTKXxsZXR0ZXJ8bGlnaHRpbmd8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHBvaW50ZXJ8c2hhcGV8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dHJhbnNmb3JtfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sWj0vXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucHxDb21wbykvLFk9L1tBLVowLTldL2csJD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQscT1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC86L2ZpbHxjaGV8cmEvKS50ZXN0KG4pfTtmdW5jdGlvbiBHKG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLG8obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIEoobix0LGUpe3JldHVybiBpKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1uLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLnByb3RvdHlwZSx0LHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrdF19LHNldDpmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyx0LHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bn0pfX0pfSk7dmFyIEs9ZS5ldmVudDtmdW5jdGlvbiBRKCl7fWZ1bmN0aW9uIFgoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gbm4oKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWUuZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIEsmJihuPUsobikpLG4ucGVyc2lzdD1RLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9WCxuLmlzRGVmYXVsdFByZXZlbnRlZD1ubixuLm5hdGl2ZUV2ZW50PW59O3ZhciB0bixlbj17ZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxybj1lLnZub2RlO2Uudm5vZGU9ZnVuY3Rpb24obil7XCJzdHJpbmdcIj09dHlwZW9mIG4udHlwZSYmZnVuY3Rpb24obil7dmFyIHQ9bi5wcm9wcyxlPW4udHlwZSx1PXt9O2Zvcih2YXIgbyBpbiB0KXt2YXIgaT10W29dO2lmKCEoXCJ2YWx1ZVwiPT09byYmXCJkZWZhdWx0VmFsdWVcImluIHQmJm51bGw9PWl8fCQmJlwiY2hpbGRyZW5cIj09PW8mJlwibm9zY3JpcHRcIj09PWV8fFwiY2xhc3NcIj09PW98fFwiY2xhc3NOYW1lXCI9PT1vKSl7dmFyIGw9by50b0xvd2VyQ2FzZSgpO1wiZGVmYXVsdFZhbHVlXCI9PT1vJiZcInZhbHVlXCJpbiB0JiZudWxsPT10LnZhbHVlP289XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PW8mJiEwPT09aT9pPVwiXCI6XCJvbmRvdWJsZWNsaWNrXCI9PT1sP289XCJvbmRibGNsaWNrXCI6XCJvbmNoYW5nZVwiIT09bHx8XCJpbnB1dFwiIT09ZSYmXCJ0ZXh0YXJlYVwiIT09ZXx8cSh0LnR5cGUpP1wib25mb2N1c1wiPT09bD9vPVwib25mb2N1c2luXCI6XCJvbmJsdXJcIj09PWw/bz1cIm9uZm9jdXNvdXRcIjpaLnRlc3Qobyk/bz1sOi0xPT09ZS5pbmRleE9mKFwiLVwiKSYmSC50ZXN0KG8pP289by5yZXBsYWNlKFksXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09aSYmKGk9dm9pZCAwKTpsPW89XCJvbmlucHV0XCIsXCJvbmlucHV0XCI9PT1sJiZ1W289bF0mJihvPVwib25pbnB1dENhcHR1cmVcIiksdVtvXT1pfX1cInNlbGVjdFwiPT1lJiZ1Lm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHUudmFsdWUpJiYodS52YWx1ZT1yKHQuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9dS52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PWUmJm51bGwhPXUuZGVmYXVsdFZhbHVlJiYodS52YWx1ZT1yKHQuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD11Lm11bHRpcGxlPy0xIT11LmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnUuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLHQuY2xhc3MmJiF0LmNsYXNzTmFtZT8odS5jbGFzcz10LmNsYXNzLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh1LFwiY2xhc3NOYW1lXCIsZW4pKToodC5jbGFzc05hbWUmJiF0LmNsYXNzfHx0LmNsYXNzJiZ0LmNsYXNzTmFtZSkmJih1LmNsYXNzPXUuY2xhc3NOYW1lPXQuY2xhc3NOYW1lKSxuLnByb3BzPXV9KG4pLG4uJCR0eXBlb2Y9QixybiYmcm4obil9O3ZhciB1bj1lLl9fcjtlLl9fcj1mdW5jdGlvbihuKXt1biYmdW4obiksdG49bi5fX2N9O3ZhciBvbj1lLmRpZmZlZDtlLmRpZmZlZD1mdW5jdGlvbihuKXtvbiYmb24obik7dmFyIHQ9bi5wcm9wcyxlPW4uX19lO251bGwhPWUmJlwidGV4dGFyZWFcIj09PW4udHlwZSYmXCJ2YWx1ZVwiaW4gdCYmdC52YWx1ZSE9PWUudmFsdWUmJihlLnZhbHVlPW51bGw9PXQudmFsdWU/XCJcIjp0LnZhbHVlKSx0bj1udWxsfTt2YXIgbG49e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiB0bi5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSxjbj1cIjE3LjAuMlwiO2Z1bmN0aW9uIGZuKG4pe3JldHVybiB0LmJpbmQobnVsbCxuKX1mdW5jdGlvbiBhbihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1CfWZ1bmN0aW9uIHNuKG4pe3JldHVybiBhbihuKT9mLmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIGhuKG4pe3JldHVybiEhbi5fX2smJihvKG51bGwsbiksITApfWZ1bmN0aW9uIHZuKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIGRuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LHBuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LG1uPXU7ZnVuY3Rpb24geW4obil7bigpfWZ1bmN0aW9uIF9uKG4pe3JldHVybiBufWZ1bmN0aW9uIGJuKCl7cmV0dXJuWyExLHluXX12YXIgU249ZDtmdW5jdGlvbiBnbihuLHQpe3ZhciBlPXQoKSxyPWEoe2g6e19fOmUsdjp0fX0pLHU9clswXS5oLG89clsxXTtyZXR1cm4gZChmdW5jdGlvbigpe3UuX189ZSx1LnY9dCxFKHUuX18sdCgpKXx8byh7aDp1fSl9LFtuLGUsdF0pLHYoZnVuY3Rpb24oKXtyZXR1cm4gRSh1Ll9fLHUudigpKXx8byh7aDp1fSksbihmdW5jdGlvbigpe0UodS5fXyx1LnYoKSl8fG8oe2g6dX0pfSl9LFtuXSksZX12YXIgQ249e3VzZVN0YXRlOmEsdXNlSWQ6cyx1c2VSZWR1Y2VyOmgsdXNlRWZmZWN0OnYsdXNlTGF5b3V0RWZmZWN0OmQsdXNlSW5zZXJ0aW9uRWZmZWN0OlNuLHVzZVRyYW5zaXRpb246Ym4sdXNlRGVmZXJyZWRWYWx1ZTpfbix1c2VTeW5jRXh0ZXJuYWxTdG9yZTpnbixzdGFydFRyYW5zaXRpb246eW4sdXNlUmVmOnAsdXNlSW1wZXJhdGl2ZUhhbmRsZTptLHVzZU1lbW86eSx1c2VDYWxsYmFjazpfLHVzZUNvbnRleHQ6Yix1c2VEZWJ1Z1ZhbHVlOlMsdmVyc2lvbjpcIjE3LjAuMlwiLENoaWxkcmVuOk8scmVuZGVyOkcsaHlkcmF0ZTpKLHVubW91bnRDb21wb25lbnRBdE5vZGU6aG4sY3JlYXRlUG9ydGFsOnosY3JlYXRlRWxlbWVudDp0LGNyZWF0ZUNvbnRleHQ6bCxjcmVhdGVGYWN0b3J5OmZuLGNsb25lRWxlbWVudDpzbixjcmVhdGVSZWY6YyxGcmFnbWVudDp1LGlzVmFsaWRFbGVtZW50OmFuLGZpbmRET01Ob2RlOnZuLENvbXBvbmVudDpuLFB1cmVDb21wb25lbnQ6dyxtZW1vOngsZm9yd2FyZFJlZjprLGZsdXNoU3luYzpwbix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpkbixTdHJpY3RNb2RlOm1uLFN1c3BlbnNlOkQsU3VzcGVuc2VMaXN0OlYsbGF6eTpNLF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOmxufTtleHBvcnR7TyBhcyBDaGlsZHJlbix3IGFzIFB1cmVDb21wb25lbnQsbW4gYXMgU3RyaWN0TW9kZSxEIGFzIFN1c3BlbnNlLFYgYXMgU3VzcGVuc2VMaXN0LGxuIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELHNuIGFzIGNsb25lRWxlbWVudCxmbiBhcyBjcmVhdGVGYWN0b3J5LHogYXMgY3JlYXRlUG9ydGFsLENuIGFzIGRlZmF1bHQsdm4gYXMgZmluZERPTU5vZGUscG4gYXMgZmx1c2hTeW5jLGsgYXMgZm9yd2FyZFJlZixKIGFzIGh5ZHJhdGUsYW4gYXMgaXNWYWxpZEVsZW1lbnQsTSBhcyBsYXp5LHggYXMgbWVtbyxHIGFzIHJlbmRlcix5biBhcyBzdGFydFRyYW5zaXRpb24saG4gYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxkbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxfbiBhcyB1c2VEZWZlcnJlZFZhbHVlLFNuIGFzIHVzZUluc2VydGlvbkVmZmVjdCxnbiBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSxibiBhcyB1c2VUcmFuc2l0aW9uLGNuIGFzIHZlcnNpb259O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHN0cmljdFVyaUVuY29kZSA9IHJlcXVpcmUoJ3N0cmljdC11cmktZW5jb2RlJyk7XG5jb25zdCBkZWNvZGVDb21wb25lbnQgPSByZXF1aXJlKCdkZWNvZGUtdXJpLWNvbXBvbmVudCcpO1xuY29uc3Qgc3BsaXRPbkZpcnN0ID0gcmVxdWlyZSgnc3BsaXQtb24tZmlyc3QnKTtcbmNvbnN0IGZpbHRlck9iamVjdCA9IHJlcXVpcmUoJ2ZpbHRlci1vYmonKTtcblxuY29uc3QgaXNOdWxsT3JVbmRlZmluZWQgPSB2YWx1ZSA9PiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBlbmNvZGVyRm9yQXJyYXlGb3JtYXQob3B0aW9ucykge1xuXHRzd2l0Y2ggKG9wdGlvbnMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGluZGV4ID0gcmVzdWx0Lmxlbmd0aDtcblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBOdWxsICYmIHZhbHVlID09PSBudWxsKSB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiB2YWx1ZSA9PT0gJycpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnWycsIGluZGV4LCAnXSddLmpvaW4oJycpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0Li4ucmVzdWx0LFxuXHRcdFx0XHRcdFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1snLCBlbmNvZGUoaW5kZXgsIG9wdGlvbnMpLCAnXT0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKVxuXHRcdFx0XHRdO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBOdWxsICYmIHZhbHVlID09PSBudWxsKSB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiB2YWx1ZSA9PT0gJycpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnW10nXS5qb2luKCcnKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnW109JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyldO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2NvbW1hJzpcblx0XHRjYXNlICdzZXBhcmF0b3InOlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gW1tlbmNvZGUoa2V5LCBvcHRpb25zKSwgJz0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gW1tyZXN1bHQsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4ob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcildO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgdmFsdWUgPT09IG51bGwpIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIHZhbHVlID09PSAnJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBlbmNvZGUoa2V5LCBvcHRpb25zKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0aW9ucykge1xuXHRsZXQgcmVzdWx0O1xuXG5cdHN3aXRjaCAob3B0aW9ucy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0cmVzdWx0ID0gL1xcWyhcXGQqKVxcXSQvLmV4ZWMoa2V5KTtcblxuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxkKlxcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB7fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV1bcmVzdWx0WzFdXSA9IHZhbHVlO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRyZXN1bHQgPSAvKFxcW1xcXSkkLy5leGVjKGtleSk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW3ZhbHVlXTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdjb21tYSc6XG5cdFx0Y2FzZSAnc2VwYXJhdG9yJzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0Y29uc3QgaXNBcnJheSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5jbHVkZXMob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcik7XG5cdFx0XHRcdGNvbnN0IGlzRW5jb2RlZEFycmF5ID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIWlzQXJyYXkgJiYgZGVjb2RlKHZhbHVlLCBvcHRpb25zKS5pbmNsdWRlcyhvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKSk7XG5cdFx0XHRcdHZhbHVlID0gaXNFbmNvZGVkQXJyYXkgPyBkZWNvZGUodmFsdWUsIG9wdGlvbnMpIDogdmFsdWU7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbHVlID0gaXNBcnJheSB8fCBpc0VuY29kZWRBcnJheSA/IHZhbHVlLnNwbGl0KG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpLm1hcChpdGVtID0+IGRlY29kZShpdGVtLCBvcHRpb25zKSkgOiB2YWx1ZSA9PT0gbnVsbCA/IHZhbHVlIDogZGVjb2RlKHZhbHVlLCBvcHRpb25zKTtcblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IG5ld1ZhbHVlO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXJyYXlGb3JtYXRTZXBhcmF0b3IodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgdmFsdWUubGVuZ3RoICE9PSAxKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignYXJyYXlGb3JtYXRTZXBhcmF0b3IgbXVzdCBiZSBzaW5nbGUgY2hhcmFjdGVyIHN0cmluZycpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5lbmNvZGUpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5zdHJpY3QgPyBzdHJpY3RVcmlFbmNvZGUodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlKHZhbHVlLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLmRlY29kZSkge1xuXHRcdHJldHVybiBkZWNvZGVDb21wb25lbnQodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBrZXlzU29ydGVyKGlucHV0KSB7XG5cdGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dC5zb3J0KCk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBrZXlzU29ydGVyKE9iamVjdC5rZXlzKGlucHV0KSlcblx0XHRcdC5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYSkgLSBOdW1iZXIoYikpXG5cdFx0XHQubWFwKGtleSA9PiBpbnB1dFtrZXldKTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFzaChpbnB1dCkge1xuXHRjb25zdCBoYXNoU3RhcnQgPSBpbnB1dC5pbmRleE9mKCcjJyk7XG5cdGlmIChoYXNoU3RhcnQgIT09IC0xKSB7XG5cdFx0aW5wdXQgPSBpbnB1dC5zbGljZSgwLCBoYXNoU3RhcnQpO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBnZXRIYXNoKHVybCkge1xuXHRsZXQgaGFzaCA9ICcnO1xuXHRjb25zdCBoYXNoU3RhcnQgPSB1cmwuaW5kZXhPZignIycpO1xuXHRpZiAoaGFzaFN0YXJ0ICE9PSAtMSkge1xuXHRcdGhhc2ggPSB1cmwuc2xpY2UoaGFzaFN0YXJ0KTtcblx0fVxuXG5cdHJldHVybiBoYXNoO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0KGlucHV0KSB7XG5cdGlucHV0ID0gcmVtb3ZlSGFzaChpbnB1dCk7XG5cdGNvbnN0IHF1ZXJ5U3RhcnQgPSBpbnB1dC5pbmRleE9mKCc/Jyk7XG5cdGlmIChxdWVyeVN0YXJ0ID09PSAtMSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiBpbnB1dC5zbGljZShxdWVyeVN0YXJ0ICsgMSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWUodmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMucGFyc2VOdW1iZXJzICYmICFOdW1iZXIuaXNOYU4oTnVtYmVyKHZhbHVlKSkgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpICE9PSAnJykpIHtcblx0XHR2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5wYXJzZUJvb2xlYW5zICYmIHZhbHVlICE9PSBudWxsICYmICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScgfHwgdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJykpIHtcblx0XHR2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcGFyc2UocXVlcnksIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGRlY29kZTogdHJ1ZSxcblx0XHRzb3J0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZScsXG5cdFx0YXJyYXlGb3JtYXRTZXBhcmF0b3I6ICcsJyxcblx0XHRwYXJzZU51bWJlcnM6IGZhbHNlLFxuXHRcdHBhcnNlQm9vbGVhbnM6IGZhbHNlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdHZhbGlkYXRlQXJyYXlGb3JtYXRTZXBhcmF0b3Iob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcik7XG5cblx0Y29uc3QgZm9ybWF0dGVyID0gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0aW9ucyk7XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIG5vIHByb3RvdHlwZVxuXHRjb25zdCByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdGlmICh0eXBlb2YgcXVlcnkgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHF1ZXJ5ID0gcXVlcnkudHJpbSgpLnJlcGxhY2UoL15bPyMmXS8sICcnKTtcblxuXHRpZiAoIXF1ZXJ5KSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdGZvciAoY29uc3QgcGFyYW0gb2YgcXVlcnkuc3BsaXQoJyYnKSkge1xuXHRcdGlmIChwYXJhbSA9PT0gJycpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBba2V5LCB2YWx1ZV0gPSBzcGxpdE9uRmlyc3Qob3B0aW9ucy5kZWNvZGUgPyBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKSA6IHBhcmFtLCAnPScpO1xuXG5cdFx0Ly8gTWlzc2luZyBgPWAgc2hvdWxkIGJlIGBudWxsYDpcblx0XHQvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG5cdFx0dmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IFsnY29tbWEnLCAnc2VwYXJhdG9yJ10uaW5jbHVkZXMob3B0aW9ucy5hcnJheUZvcm1hdCkgPyB2YWx1ZSA6IGRlY29kZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0Zm9ybWF0dGVyKGRlY29kZShrZXksIG9wdGlvbnMpLCB2YWx1ZSwgcmV0KTtcblx0fVxuXG5cdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJldCkpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHJldFtrZXldO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XG5cdFx0XHRcdHZhbHVlW2tdID0gcGFyc2VWYWx1ZSh2YWx1ZVtrXSwgb3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldFtrZXldID0gcGFyc2VWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc29ydCA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0cmV0dXJuIChvcHRpb25zLnNvcnQgPT09IHRydWUgPyBPYmplY3Qua2V5cyhyZXQpLnNvcnQoKSA6IE9iamVjdC5rZXlzKHJldCkuc29ydChvcHRpb25zLnNvcnQpKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSByZXRba2V5XTtcblx0XHRpZiAoQm9vbGVhbih2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdC8vIFNvcnQgb2JqZWN0IGtleXMsIG5vdCB2YWx1ZXNcblx0XHRcdHJlc3VsdFtrZXldID0ga2V5c1NvcnRlcih2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdFtrZXldID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG5cbmV4cG9ydHMuZXh0cmFjdCA9IGV4dHJhY3Q7XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gKG9iamVjdCwgb3B0aW9ucykgPT4ge1xuXHRpZiAoIW9iamVjdCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZScsXG5cdFx0YXJyYXlGb3JtYXRTZXBhcmF0b3I6ICcsJ1xuXHR9LCBvcHRpb25zKTtcblxuXHR2YWxpZGF0ZUFycmF5Rm9ybWF0U2VwYXJhdG9yKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpO1xuXG5cdGNvbnN0IHNob3VsZEZpbHRlciA9IGtleSA9PiAoXG5cdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgaXNOdWxsT3JVbmRlZmluZWQob2JqZWN0W2tleV0pKSB8fFxuXHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiBvYmplY3Rba2V5XSA9PT0gJycpXG5cdCk7XG5cblx0Y29uc3QgZm9ybWF0dGVyID0gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpO1xuXG5cdGNvbnN0IG9iamVjdENvcHkgPSB7fTtcblxuXHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG5cdFx0aWYgKCFzaG91bGRGaWx0ZXIoa2V5KSkge1xuXHRcdFx0b2JqZWN0Q29weVtrZXldID0gb2JqZWN0W2tleV07XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdENvcHkpO1xuXG5cdGlmIChvcHRpb25zLnNvcnQgIT09IGZhbHNlKSB7XG5cdFx0a2V5cy5zb3J0KG9wdGlvbnMuc29ydCk7XG5cdH1cblxuXHRyZXR1cm4ga2V5cy5tYXAoa2V5ID0+IHtcblx0XHRjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHQucmVkdWNlKGZvcm1hdHRlcihrZXkpLCBbXSlcblx0XHRcdFx0LmpvaW4oJyYnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0aW9ucykgKyAnPScgKyBlbmNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHR9KS5maWx0ZXIoeCA9PiB4Lmxlbmd0aCA+IDApLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydHMucGFyc2VVcmwgPSAodXJsLCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRkZWNvZGU6IHRydWVcblx0fSwgb3B0aW9ucyk7XG5cblx0Y29uc3QgW3VybF8sIGhhc2hdID0gc3BsaXRPbkZpcnN0KHVybCwgJyMnKTtcblxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbihcblx0XHR7XG5cdFx0XHR1cmw6IHVybF8uc3BsaXQoJz8nKVswXSB8fCAnJyxcblx0XHRcdHF1ZXJ5OiBwYXJzZShleHRyYWN0KHVybCksIG9wdGlvbnMpXG5cdFx0fSxcblx0XHRvcHRpb25zICYmIG9wdGlvbnMucGFyc2VGcmFnbWVudElkZW50aWZpZXIgJiYgaGFzaCA/IHtmcmFnbWVudElkZW50aWZpZXI6IGRlY29kZShoYXNoLCBvcHRpb25zKX0gOiB7fVxuXHQpO1xufTtcblxuZXhwb3J0cy5zdHJpbmdpZnlVcmwgPSAob2JqZWN0LCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdGNvbnN0IHVybCA9IHJlbW92ZUhhc2gob2JqZWN0LnVybCkuc3BsaXQoJz8nKVswXSB8fCAnJztcblx0Y29uc3QgcXVlcnlGcm9tVXJsID0gZXhwb3J0cy5leHRyYWN0KG9iamVjdC51cmwpO1xuXHRjb25zdCBwYXJzZWRRdWVyeUZyb21VcmwgPSBleHBvcnRzLnBhcnNlKHF1ZXJ5RnJvbVVybCwge3NvcnQ6IGZhbHNlfSk7XG5cblx0Y29uc3QgcXVlcnkgPSBPYmplY3QuYXNzaWduKHBhcnNlZFF1ZXJ5RnJvbVVybCwgb2JqZWN0LnF1ZXJ5KTtcblx0bGV0IHF1ZXJ5U3RyaW5nID0gZXhwb3J0cy5zdHJpbmdpZnkocXVlcnksIG9wdGlvbnMpO1xuXHRpZiAocXVlcnlTdHJpbmcpIHtcblx0XHRxdWVyeVN0cmluZyA9IGA/JHtxdWVyeVN0cmluZ31gO1xuXHR9XG5cblx0bGV0IGhhc2ggPSBnZXRIYXNoKG9iamVjdC51cmwpO1xuXHRpZiAob2JqZWN0LmZyYWdtZW50SWRlbnRpZmllcikge1xuXHRcdGhhc2ggPSBgIyR7ZW5jb2RlKG9iamVjdC5mcmFnbWVudElkZW50aWZpZXIsIG9wdGlvbnMpfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7dXJsfSR7cXVlcnlTdHJpbmd9JHtoYXNofWA7XG59O1xuXG5leHBvcnRzLnBpY2sgPSAoaW5wdXQsIGZpbHRlciwgb3B0aW9ucykgPT4ge1xuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0cGFyc2VGcmFnbWVudElkZW50aWZpZXI6IHRydWVcblx0fSwgb3B0aW9ucyk7XG5cblx0Y29uc3Qge3VybCwgcXVlcnksIGZyYWdtZW50SWRlbnRpZmllcn0gPSBleHBvcnRzLnBhcnNlVXJsKGlucHV0LCBvcHRpb25zKTtcblx0cmV0dXJuIGV4cG9ydHMuc3RyaW5naWZ5VXJsKHtcblx0XHR1cmwsXG5cdFx0cXVlcnk6IGZpbHRlck9iamVjdChxdWVyeSwgZmlsdGVyKSxcblx0XHRmcmFnbWVudElkZW50aWZpZXJcblx0fSwgb3B0aW9ucyk7XG59O1xuXG5leHBvcnRzLmV4Y2x1ZGUgPSAoaW5wdXQsIGZpbHRlciwgb3B0aW9ucykgPT4ge1xuXHRjb25zdCBleGNsdXNpb25GaWx0ZXIgPSBBcnJheS5pc0FycmF5KGZpbHRlcikgPyBrZXkgPT4gIWZpbHRlci5pbmNsdWRlcyhrZXkpIDogKGtleSwgdmFsdWUpID0+ICFmaWx0ZXIoa2V5LCB2YWx1ZSk7XG5cblx0cmV0dXJuIGV4cG9ydHMucGljayhpbnB1dCwgZXhjbHVzaW9uRmlsdGVyLCBvcHRpb25zKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIHByZWRpY2F0ZSkge1xuXHR2YXIgcmV0ID0ge307XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblx0dmFyIGlzQXJyID0gQXJyYXkuaXNBcnJheShwcmVkaWNhdGUpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBrZXkgPSBrZXlzW2ldO1xuXHRcdHZhciB2YWwgPSBvYmpba2V5XTtcblxuXHRcdGlmIChpc0FyciA/IHByZWRpY2F0ZS5pbmRleE9mKGtleSkgIT09IC0xIDogcHJlZGljYXRlKGtleSwgdmFsLCBvYmopKSB7XG5cdFx0XHRyZXRba2V5XSA9IHZhbDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnd3MgZG9lcyBub3Qgd29yayBpbiB0aGUgYnJvd3Nlci4gQnJvd3NlciBjbGllbnRzIG11c3QgdXNlIHRoZSBuYXRpdmUgJyArXG4gICAgICAnV2ViU29ja2V0IG9iamVjdCdcbiAgKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=