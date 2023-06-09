"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_wallets_evm_connectors_wallet-connect-v1_dist_thirdweb-dev--bd6ef4"],{

/***/ "./node_modules/@thirdweb-dev/wallets/dist/WagmiConnector-60b19604.browser.esm.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/wallets/dist/WagmiConnector-60b19604.browser.esm.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ WagmiConnector)
/* harmony export */ });
/* harmony import */ var _defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defineProperty-c8ecdc07.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/defineProperty-c8ecdc07.browser.esm.js");
/* harmony import */ var _thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/chains */ "./node_modules/@thirdweb-dev/chains/dist/thirdweb-dev-chains.browser.esm.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.mjs");




class WagmiConnector extends eventemitter3__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** Unique connector id */

  /** Connector name */

  /** Chains connector supports */

  /** Options to use with connector */

  /** Whether connector is usable */

  constructor(_ref) {
    let {
      chains = _thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_1__.defaultChains,
      options
    } = _ref;
    super();
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, "id", void 0);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, "name", void 0);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, "chains", void 0);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, "options", void 0);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, "ready", void 0);
    this.chains = chains;
    this.options = options;
  }
  getBlockExplorerUrls(chain) {
    const explorers = chain.explorers?.map(x => x.url) ?? [];
    return explorers.length > 0 ? explorers : undefined;
  }
  isChainUnsupported(chainId) {
    return !this.chains.some(x => x.chainId === chainId);
  }
  updateChains(chains) {
    this.chains = chains;
  }
}




/***/ }),

/***/ "./node_modules/@thirdweb-dev/wallets/dist/errors-105ad187.browser.esm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/wallets/dist/errors-105ad187.browser.esm.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AddChainError),
/* harmony export */   C: () => (/* binding */ ChainNotConfiguredError),
/* harmony export */   P: () => (/* binding */ ProviderRpcError),
/* harmony export */   R: () => (/* binding */ ResourceUnavailableError),
/* harmony export */   S: () => (/* binding */ SwitchChainError),
/* harmony export */   U: () => (/* binding */ UserRejectedRequestError),
/* harmony export */   a: () => (/* binding */ ConnectorNotFoundError)
/* harmony export */ });
/* harmony import */ var _defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty-c8ecdc07.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/defineProperty-c8ecdc07.browser.esm.js");


/**
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors per EIP-1474.
 * @see https://eips.ethereum.org/EIPS/eip-1474
 */
class RpcError extends Error {
  constructor( /** Human-readable string */
  message, options) {
    const {
      cause,
      code,
      data
    } = options;
    if (!Number.isInteger(code)) {
      throw new Error('"code" must be an integer.');
    }
    if (!message || typeof message !== "string") {
      throw new Error('"message" must be a nonempty string.');
    }
    super(message);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(this, "cause", void 0);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(this, "code", void 0);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(this, "data", void 0);
    this.cause = cause;
    this.code = code;
    this.data = data;
  }
}

/**
 * Error subclass implementing Ethereum Provider errors per EIP-1193.
 * @see https://eips.ethereum.org/EIPS/eip-1193
 */
class ProviderRpcError extends RpcError {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor( /** Human-readable string */
  message, options) {
    const {
      cause,
      code,
      data
    } = options;
    if (!(Number.isInteger(code) && code >= 1000 && code <= 4999)) {
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    }
    super(message, {
      cause,
      code,
      data
    });
  }
}
class AddChainError extends Error {
  constructor() {
    super(...arguments);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(this, "name", "AddChainError");
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(this, "message", "Error adding chain");
  }
}
class ChainNotConfiguredError extends Error {
  constructor(_ref) {
    let {
      chainId,
      connectorId
    } = _ref;
    super(`Chain "${chainId}" not configured for connector "${connectorId}".`);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(this, "name", "ChainNotConfigured");
  }
}
class ConnectorNotFoundError extends Error {
  constructor() {
    super(...arguments);
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(this, "name", "ConnectorNotFoundError");
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(this, "message", "Connector not found");
  }
}
class ResourceUnavailableError extends RpcError {
  constructor(cause) {
    super("Resource unavailable", {
      cause,
      code: -32002
    });
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(this, "name", "ResourceUnavailable");
  }
}
class SwitchChainError extends ProviderRpcError {
  constructor(cause) {
    super("Error switching chain", {
      cause,
      code: 4902
    });
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(this, "name", "SwitchChainError");
  }
}
class UserRejectedRequestError extends ProviderRpcError {
  constructor(cause) {
    super("User rejected request", {
      cause,
      code: 4001
    });
    (0,_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__._)(this, "name", "UserRejectedRequestError");
  }
}

// Ethers does not have an error type so we can use this for casting
// https://github.com/ethers-io/ethers.js/blob/main/packages/logger/src.ts/index.ts#L268




/***/ }),

/***/ "./node_modules/@thirdweb-dev/wallets/dist/normalizeChainId-e4cc0175.browser.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/wallets/dist/normalizeChainId-e4cc0175.browser.esm.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ normalizeChainId)
/* harmony export */ });
function normalizeChainId(chainId) {
  if (typeof chainId === "string") {
    return Number.parseInt(chainId, chainId.trim().substring(0, 2) === "0x" ? 16 : 10);
  }
  if (typeof chainId === "bigint") {
    return Number(chainId);
  }
  return chainId;
}




/***/ }),

/***/ "./node_modules/@thirdweb-dev/wallets/evm/connectors/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect-v1.browser.esm.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/wallets/evm/connectors/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect-v1.browser.esm.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletConnectV1Connector: () => (/* binding */ WalletConnectV1Connector)
/* harmony export */ });
/* harmony import */ var _dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/classPrivateMethodGet-ea199cc3.browser.esm.js");
/* harmony import */ var _dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/classPrivateFieldSet-a5db7c83.browser.esm.js");
/* harmony import */ var _dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../dist/defineProperty-c8ecdc07.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/defineProperty-c8ecdc07.browser.esm.js");
/* harmony import */ var _dist_walletIds_1ea97411_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../dist/walletIds-1ea97411.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/walletIds-1ea97411.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/address/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/providers/lib.esm/web3-provider.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _dist_WagmiConnector_60b19604_browser_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../dist/WagmiConnector-60b19604.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/WagmiConnector-60b19604.browser.esm.js");
/* harmony import */ var _dist_normalizeChainId_e4cc0175_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../dist/normalizeChainId-e4cc0175.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/normalizeChainId-e4cc0175.browser.esm.js");
/* harmony import */ var _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../dist/errors-105ad187.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/errors-105ad187.browser.esm.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");











/**
 * Wallets that support chain switching through WalletConnect
 * - imToken (token.im)
 * - MetaMask (metamask.io)
 * - Rainbow (rainbow.me)
 * - Trust Wallet (trustwallet.com)
 */
// const switchChainAllowedRegex = /(imtoken|metamask|rainbow|trust wallet)/i;

const LAST_USED_CHAIN_ID = "last-used-chain-id";
const LAST_SESSION = "last-session";
var _provider = /*#__PURE__*/new WeakMap();
var _storage = /*#__PURE__*/new WeakMap();
var _handleConnected = /*#__PURE__*/new WeakSet();
var _removeListeners = /*#__PURE__*/new WeakSet();
class WalletConnectV1Connector extends _dist_WagmiConnector_60b19604_browser_esm_js__WEBPACK_IMPORTED_MODULE_1__.W {
  constructor(config) {
    super(config);
    (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, _removeListeners);
    (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, _handleConnected);
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "id", _dist_walletIds_1ea97411_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__.w.walletConnectV1);
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "name", "WalletConnectV1");
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "ready", true);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__._)(this, _provider, {
      writable: true,
      value: void 0
    });
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__._)(this, _storage, {
      writable: true,
      value: void 0
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "walletName", void 0);
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onSwitchChain", () => {
      this.emit("message", {
        type: "switch_chain"
      });
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onDisplayUri", async (error, payload) => {
      if (error) {
        this.emit("message", {
          data: error,
          type: "display_uri_error"
        });
      }
      this.emit("message", {
        data: payload.params[0],
        type: "display_uri"
      });
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onRequestSent", (error, payload) => {
      if (error) {
        this.emit("message", {
          data: error,
          type: "request"
        });
      }
      this.emit("message", {
        data: payload.params[0],
        type: "request"
      });
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onMessage", message => {
      this.emit("message", message);
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onAccountsChanged", accounts => {
      if (accounts.length === 0) {
        this.emit("disconnect");
      } else {
        this.emit("change", {
          account: ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(accounts[0])
        });
      }
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onChainChanged", chainId => {
      const id = (0,_dist_normalizeChainId_e4cc0175_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.n)(chainId);
      const unsupported = this.isChainUnsupported(id);
      (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _storage).setItem(LAST_USED_CHAIN_ID, String(chainId));
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onDisconnect", async () => {
      this.walletName = undefined;
      (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _storage).removeItem(LAST_USED_CHAIN_ID);
      (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _storage).removeItem(LAST_SESSION);
      (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _removeListeners, _removeListeners2).call(this);
      this.emit("disconnect");
    });
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.a)(this, _storage, config.storage);
  }
  async connect() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      let targetChainId = chainId;
      if (!targetChainId) {
        const lastUsedChainIdStr = await (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _storage).getItem(LAST_USED_CHAIN_ID);
        const lastUsedChainId = lastUsedChainIdStr ? parseInt(lastUsedChainIdStr) : undefined;
        if (lastUsedChainId && !this.isChainUnsupported(lastUsedChainId)) {
          targetChainId = lastUsedChainId;
        }
      }
      const provider = await this.getProvider({
        chainId: targetChainId,
        create: true
      });
      this.setupListeners();

      // Defer message to the next tick to ensure wallet connect data (provided by `.enable()`) is available
      setTimeout(() => this.emit("message", {
        type: "connecting"
      }), 0);
      const accounts = await provider.enable();
      const account = ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(accounts[0]);
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);

      // Not all WalletConnect options support programmatic chain switching
      // Only enable for wallet options that do
      this.walletName = provider.connector?.peerMeta?.name ?? "";

      // switch to target chainId
      if (chainId) {
        try {
          await this.switchChain(chainId);
          id = chainId;
          unsupported = this.isChainUnsupported(id);
        } catch (e) {
          console.error(`could not switch to desired chain id: ${chainId} `, e);
        }
      }
      (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _handleConnected, _handleConnected2).call(this);
      this.emit("connect", {
        account,
        chain: {
          id,
          unsupported
        },
        provider
      });
      return {
        account,
        chain: {
          id,
          unsupported
        },
        provider: new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(provider)
      };
    } catch (error) {
      if (/user closed modal/i.test(error.message)) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.U(error);
      }
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    await provider.disconnect();
  }
  async getAccount() {
    const provider = await this.getProvider();
    const accounts = provider.accounts;
    // return checksum address
    return ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = (0,_dist_normalizeChainId_e4cc0175_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.n)(provider.chainId);
    return chainId;
  }
  async getProvider() {
    let {
      chainId,
      create
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // Force create new provider
    if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider) || chainId || create) {
      const rpc = !this.options?.infuraId ? this.chains.reduce((rpc_, chain) => ({
        ...rpc_,
        [chain.chainId]: chain.rpc[0]
      }), {}) : {};
      const WalletConnectProvider = (await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_qrcode_lib_browser_js"), __webpack_require__.e("vendors-node_modules_preact_hooks_dist_hooks_module_js"), __webpack_require__.e("vendors-node_modules_thirdweb-dev_wallets_dist_index-42b0f5f5_browser_esm_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../dist/index-42b0f5f5.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/index-42b0f5f5.browser.esm.js"))).default;
      const sessionStr = await (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _storage).getItem(LAST_SESSION);
      const session = sessionStr ? JSON.parse(sessionStr) : undefined;
      this.walletName = session?.peerMeta?.name || undefined;
      (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.a)(this, _provider, new WalletConnectProvider({
        ...this.options,
        chainId,
        rpc: {
          ...rpc,
          ...this.options?.rpc
        },
        session: session ? session : undefined
      }));
    }
    return (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider);
  }
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider({
      chainId
    }), this.getAccount()]);
    return new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(provider, chainId).getSigner(account);
  }
  async isAuthorized() {
    try {
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    const provider = await this.getProvider();
    const chainIdHex = ethers__WEBPACK_IMPORTED_MODULE_10__.hexValue(chainId);
    try {
      // Set up a race between `wallet_switchEthereumChain` & the `chainChanged` event
      // to ensure the chain has been switched. This is because there could be a case
      // where a wallet may not resolve the `wallet_switchEthereumChain` method, or
      // resolves slower than `chainChanged`.
      await Promise.race([provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: chainIdHex
        }]
      }), new Promise(res => this.on("change", _ref => {
        let {
          chain
        } = _ref;
        if (chain?.id === chainId) {
          res(chainId);
        }
      }))]);
      return this.chains.find(x => x.chainId === chainId) ?? {
        chainId: chainId,
        name: `Chain ${chainIdHex}`,
        network: `${chainIdHex}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpc: [""],
        shortName: "eth",
        chain: "ETH",
        slug: "ethereum",
        testnet: false
      };
    } catch (error) {
      const message = typeof error === "string" ? error : error?.message;
      if (/user rejected request/i.test(message)) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.U(error);
      }
      const chain = this.chains.find(x => x.chainId === chainId);

      // if chain is not supported
      if (!chain) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.S(`Chain ${chainId} is not added in the list of supported chains`);
      }

      // if chain is not configured in the wallet
      if (/Unrecognized chain ID/i.test(message)) {
        // configure it
        this.emit("message", {
          type: "add_chain"
        });
        const blockExplorerUrls = this.getBlockExplorerUrls(chain);
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: chainIdHex,
            chainName: chain.name,
            nativeCurrency: chain.nativeCurrency,
            rpcUrls: chain.rpc,
            blockExplorerUrls
          }]
        });
        return chain;
      } else {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.S(error);
      }
    }
  }
  async setupListeners() {
    if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider)) {
      return;
    }
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).on("accountsChanged", this.onAccountsChanged);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).on("chainChanged", this.onChainChanged);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).on("disconnect", this.onDisconnect);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).on("message", this.onMessage);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).on("switchChain", this.onSwitchChain);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).on("display_uri", this.onDisplayUri);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).on("call_request_sent", this.onRequestSent);
  }
}
async function _handleConnected2() {
  const session = (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider)?.connector.session;
  this.walletName = session?.peerMeta?.name || "";
  const sessionStr = JSON.stringify(session);
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _storage).setItem(LAST_SESSION, sessionStr);
}
function _removeListeners2() {
  if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider)) {
    return;
  }
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).removeListener("accountsChanged", this.onAccountsChanged);
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).removeListener("chainChanged", this.onChainChanged);
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).removeListener("disconnect", this.onDisconnect);
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).removeListener("message", this.onMessage);
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).removeListener("switchChain", this.onSwitchChain);
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).removeListener("display_uri", this.onDisplayUri);
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).removeListener("call_request_sent", this.onRequestSent);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXdhbGxldHMtZXZtLWNvbm5lY3RvcnMtd2FsbGV0LWNvbm5lY3QtdjEtZGlzdC10aGlyZHdlYi1kZXYtYmQ2ZWY0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Y7QUFDM0I7QUFDWjs7QUFFekMsNkJBQTZCLHFEQUFZO0FBQ3pDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSSwwRUFBZTtBQUNuQixJQUFJLDBFQUFlO0FBQ25CLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQixJQUFJLDBFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNpRDs7QUFFaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQixJQUFJLDBFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBFQUFlO0FBQ25CLElBQUksMEVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sb0JBQW9CLFFBQVEsa0NBQWtDLFlBQVk7QUFDMUUsSUFBSSwwRUFBZTtBQUNu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QSxJQUFJLHFGQUFxQjtBQUN6QixJQUFJLHFGQUFxQjtBQUN6QixJQUFJLHFGQUFxQjtBQUN6QixJQUFJLHFGQUFxQjtBQUN6QixJQUFJLHFGQUFxQjtBQUN6QixJQUFJLHFGQUFxQjtBQUN6QixJQUFJLHFGQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUZBQXFCO0FBQ3ZDO0FBQ0E7QUFDQSxFQUFFLHFGQUFxQjtBQUN2QjtBQUNBO0FBQ0EsT0FBTyxxRkFBcUI7QUFDNUI7QUFDQTtBQUNBLEVBQUUscUZBQXFCO0FBQ3ZCLEVBQUUscUZBQXFCO0FBQ3ZCLEVBQUUscUZBQXFCO0FBQ3ZCLEVBQUUscUZBQXFCO0FBQ3ZCLEVBQUUscUZBQXFCO0FBQ3ZCLEVBQUUscUZBQXFCO0FBQ3ZCLEVBQUUscUZBQXFCO0FBQ3ZCOztBQUVvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvd2FsbGV0cy9kaXN0L1dhZ21pQ29ubmVjdG9yLTYwYjE5NjA0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvd2FsbGV0cy9kaXN0L2Vycm9ycy0xMDVhZDE4Ny5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3dhbGxldHMvZGlzdC9ub3JtYWxpemVDaGFpbklkLWU0Y2MwMTc1LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvd2FsbGV0cy9ldm0vY29ubmVjdG9ycy93YWxsZXQtY29ubmVjdC12MS9kaXN0L3RoaXJkd2ViLWRldi13YWxsZXRzLWV2bS1jb25uZWN0b3JzLXdhbGxldC1jb25uZWN0LXYxLmJyb3dzZXIuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi9kZWZpbmVQcm9wZXJ0eS1jOGVjZGMwNy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0Q2hhaW5zIH0gZnJvbSAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcblxuY2xhc3MgV2FnbWlDb25uZWN0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKiogVW5pcXVlIGNvbm5lY3RvciBpZCAqL1xuXG4gIC8qKiBDb25uZWN0b3IgbmFtZSAqL1xuXG4gIC8qKiBDaGFpbnMgY29ubmVjdG9yIHN1cHBvcnRzICovXG5cbiAgLyoqIE9wdGlvbnMgdG8gdXNlIHdpdGggY29ubmVjdG9yICovXG5cbiAgLyoqIFdoZXRoZXIgY29ubmVjdG9yIGlzIHVzYWJsZSAqL1xuXG4gIGNvbnN0cnVjdG9yKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgY2hhaW5zID0gZGVmYXVsdENoYWlucyxcbiAgICAgIG9wdGlvbnNcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcigpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlkXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNoYWluc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9wdGlvbnNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZWFkeVwiLCB2b2lkIDApO1xuICAgIHRoaXMuY2hhaW5zID0gY2hhaW5zO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgZ2V0QmxvY2tFeHBsb3JlclVybHMoY2hhaW4pIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSBjaGFpbi5leHBsb3JlcnM/Lm1hcCh4ID0+IHgudXJsKSA/PyBbXTtcbiAgICByZXR1cm4gZXhwbG9yZXJzLmxlbmd0aCA+IDAgPyBleHBsb3JlcnMgOiB1bmRlZmluZWQ7XG4gIH1cbiAgaXNDaGFpblVuc3VwcG9ydGVkKGNoYWluSWQpIHtcbiAgICByZXR1cm4gIXRoaXMuY2hhaW5zLnNvbWUoeCA9PiB4LmNoYWluSWQgPT09IGNoYWluSWQpO1xuICB9XG4gIHVwZGF0ZUNoYWlucyhjaGFpbnMpIHtcbiAgICB0aGlzLmNoYWlucyA9IGNoYWlucztcbiAgfVxufVxuXG5leHBvcnQgeyBXYWdtaUNvbm5lY3RvciBhcyBXIH07XG4iLCJpbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSB9IGZyb20gJy4vZGVmaW5lUHJvcGVydHktYzhlY2RjMDcuYnJvd3Nlci5lc20uanMnO1xuXG4vKipcbiAqIEVycm9yIHN1YmNsYXNzIGltcGxlbWVudGluZyBKU09OIFJQQyAyLjAgZXJyb3JzIGFuZCBFdGhlcmV1bSBSUEMgZXJyb3JzIHBlciBFSVAtMTQ3NC5cbiAqIEBzZWUgaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xNDc0XG4gKi9cbmNsYXNzIFJwY0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvciggLyoqIEh1bWFuLXJlYWRhYmxlIHN0cmluZyAqL1xuICBtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2F1c2UsXG4gICAgICBjb2RlLFxuICAgICAgZGF0YVxuICAgIH0gPSBvcHRpb25zO1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjb2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImNvZGVcIiBtdXN0IGJlIGFuIGludGVnZXIuJyk7XG4gICAgfVxuICAgIGlmICghbWVzc2FnZSB8fCB0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIm1lc3NhZ2VcIiBtdXN0IGJlIGEgbm9uZW1wdHkgc3RyaW5nLicpO1xuICAgIH1cbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjYXVzZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvZGVcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkYXRhXCIsIHZvaWQgMCk7XG4gICAgdGhpcy5jYXVzZSA9IGNhdXNlO1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEVycm9yIHN1YmNsYXNzIGltcGxlbWVudGluZyBFdGhlcmV1bSBQcm92aWRlciBlcnJvcnMgcGVyIEVJUC0xMTkzLlxuICogQHNlZSBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTNcbiAqL1xuY2xhc3MgUHJvdmlkZXJScGNFcnJvciBleHRlbmRzIFJwY0Vycm9yIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBFdGhlcmV1bSBQcm92aWRlciBKU09OLVJQQyBlcnJvci5cbiAgICogYGNvZGVgIG11c3QgYmUgYW4gaW50ZWdlciBpbiB0aGUgMTAwMCA8PSA0OTk5IHJhbmdlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoIC8qKiBIdW1hbi1yZWFkYWJsZSBzdHJpbmcgKi9cbiAgbWVzc2FnZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhdXNlLFxuICAgICAgY29kZSxcbiAgICAgIGRhdGFcbiAgICB9ID0gb3B0aW9ucztcbiAgICBpZiAoIShOdW1iZXIuaXNJbnRlZ2VyKGNvZGUpICYmIGNvZGUgPj0gMTAwMCAmJiBjb2RlIDw9IDQ5OTkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiY29kZVwiIG11c3QgYmUgYW4gaW50ZWdlciBzdWNoIHRoYXQ6IDEwMDAgPD0gY29kZSA8PSA0OTk5Jyk7XG4gICAgfVxuICAgIHN1cGVyKG1lc3NhZ2UsIHtcbiAgICAgIGNhdXNlLFxuICAgICAgY29kZSxcbiAgICAgIGRhdGFcbiAgICB9KTtcbiAgfVxufVxuY2xhc3MgQWRkQ2hhaW5FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIFwiQWRkQ2hhaW5FcnJvclwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXNzYWdlXCIsIFwiRXJyb3IgYWRkaW5nIGNoYWluXCIpO1xuICB9XG59XG5jbGFzcyBDaGFpbk5vdENvbmZpZ3VyZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBjaGFpbklkLFxuICAgICAgY29ubmVjdG9ySWRcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcihgQ2hhaW4gXCIke2NoYWluSWR9XCIgbm90IGNvbmZpZ3VyZWQgZm9yIGNvbm5lY3RvciBcIiR7Y29ubmVjdG9ySWR9XCIuYCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCBcIkNoYWluTm90Q29uZmlndXJlZFwiKTtcbiAgfVxufVxuY2xhc3MgQ29ubmVjdG9yTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIFwiQ29ubmVjdG9yTm90Rm91bmRFcnJvclwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXNzYWdlXCIsIFwiQ29ubmVjdG9yIG5vdCBmb3VuZFwiKTtcbiAgfVxufVxuY2xhc3MgUmVzb3VyY2VVbmF2YWlsYWJsZUVycm9yIGV4dGVuZHMgUnBjRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihjYXVzZSkge1xuICAgIHN1cGVyKFwiUmVzb3VyY2UgdW5hdmFpbGFibGVcIiwge1xuICAgICAgY2F1c2UsXG4gICAgICBjb2RlOiAtMzIwMDJcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIFwiUmVzb3VyY2VVbmF2YWlsYWJsZVwiKTtcbiAgfVxufVxuY2xhc3MgU3dpdGNoQ2hhaW5FcnJvciBleHRlbmRzIFByb3ZpZGVyUnBjRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihjYXVzZSkge1xuICAgIHN1cGVyKFwiRXJyb3Igc3dpdGNoaW5nIGNoYWluXCIsIHtcbiAgICAgIGNhdXNlLFxuICAgICAgY29kZTogNDkwMlxuICAgIH0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5hbWVcIiwgXCJTd2l0Y2hDaGFpbkVycm9yXCIpO1xuICB9XG59XG5jbGFzcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgZXh0ZW5kcyBQcm92aWRlclJwY0Vycm9yIHtcbiAgY29uc3RydWN0b3IoY2F1c2UpIHtcbiAgICBzdXBlcihcIlVzZXIgcmVqZWN0ZWQgcmVxdWVzdFwiLCB7XG4gICAgICBjYXVzZSxcbiAgICAgIGNvZGU6IDQwMDFcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIFwiVXNlclJlamVjdGVkUmVxdWVzdEVycm9yXCIpO1xuICB9XG59XG5cbi8vIEV0aGVycyBkb2VzIG5vdCBoYXZlIGFuIGVycm9yIHR5cGUgc28gd2UgY2FuIHVzZSB0aGlzIGZvciBjYXN0aW5nXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZXRoZXJzLWlvL2V0aGVycy5qcy9ibG9iL21haW4vcGFja2FnZXMvbG9nZ2VyL3NyYy50cy9pbmRleC50cyNMMjY4XG5cbmV4cG9ydCB7IEFkZENoYWluRXJyb3IgYXMgQSwgQ2hhaW5Ob3RDb25maWd1cmVkRXJyb3IgYXMgQywgUHJvdmlkZXJScGNFcnJvciBhcyBQLCBSZXNvdXJjZVVuYXZhaWxhYmxlRXJyb3IgYXMgUiwgU3dpdGNoQ2hhaW5FcnJvciBhcyBTLCBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVSwgQ29ubmVjdG9yTm90Rm91bmRFcnJvciBhcyBhIH07XG4iLCJmdW5jdGlvbiBub3JtYWxpemVDaGFpbklkKGNoYWluSWQpIHtcbiAgaWYgKHR5cGVvZiBjaGFpbklkID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUludChjaGFpbklkLCBjaGFpbklkLnRyaW0oKS5zdWJzdHJpbmcoMCwgMikgPT09IFwiMHhcIiA/IDE2IDogMTApO1xuICB9XG4gIGlmICh0eXBlb2YgY2hhaW5JZCA9PT0gXCJiaWdpbnRcIikge1xuICAgIHJldHVybiBOdW1iZXIoY2hhaW5JZCk7XG4gIH1cbiAgcmV0dXJuIGNoYWluSWQ7XG59XG5cbmV4cG9ydCB7IG5vcm1hbGl6ZUNoYWluSWQgYXMgbiB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMsIGEgYXMgX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCB9IGZyb20gJy4uLy4uLy4uLy4uL2Rpc3QvY2xhc3NQcml2YXRlTWV0aG9kR2V0LWVhMTk5Y2MzLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IF8gYXMgX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMsIGIgYXMgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LCBhIGFzIF9jbGFzc1ByaXZhdGVGaWVsZFNldCB9IGZyb20gJy4uLy4uLy4uLy4uL2Rpc3QvY2xhc3NQcml2YXRlRmllbGRTZXQtYTVkYjdjODMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgXyBhcyBfZGVmaW5lUHJvcGVydHkgfSBmcm9tICcuLi8uLi8uLi8uLi9kaXN0L2RlZmluZVByb3BlcnR5LWM4ZWNkYzA3LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IHcgYXMgd2FsbGV0SWRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlzdC93YWxsZXRJZHMtMWVhOTc0MTEuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgdXRpbHMsIHByb3ZpZGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBXIGFzIFdhZ21pQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlzdC9XYWdtaUNvbm5lY3Rvci02MGIxOTYwNC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBuIGFzIG5vcm1hbGl6ZUNoYWluSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9kaXN0L25vcm1hbGl6ZUNoYWluSWQtZTRjYzAxNzUuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgVSBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IsIFMgYXMgU3dpdGNoQ2hhaW5FcnJvciB9IGZyb20gJy4uLy4uLy4uLy4uL2Rpc3QvZXJyb3JzLTEwNWFkMTg3LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0ICdldmVudGVtaXR0ZXIzJztcblxuLyoqXG4gKiBXYWxsZXRzIHRoYXQgc3VwcG9ydCBjaGFpbiBzd2l0Y2hpbmcgdGhyb3VnaCBXYWxsZXRDb25uZWN0XG4gKiAtIGltVG9rZW4gKHRva2VuLmltKVxuICogLSBNZXRhTWFzayAobWV0YW1hc2suaW8pXG4gKiAtIFJhaW5ib3cgKHJhaW5ib3cubWUpXG4gKiAtIFRydXN0IFdhbGxldCAodHJ1c3R3YWxsZXQuY29tKVxuICovXG4vLyBjb25zdCBzd2l0Y2hDaGFpbkFsbG93ZWRSZWdleCA9IC8oaW10b2tlbnxtZXRhbWFza3xyYWluYm93fHRydXN0IHdhbGxldCkvaTtcblxuY29uc3QgTEFTVF9VU0VEX0NIQUlOX0lEID0gXCJsYXN0LXVzZWQtY2hhaW4taWRcIjtcbmNvbnN0IExBU1RfU0VTU0lPTiA9IFwibGFzdC1zZXNzaW9uXCI7XG52YXIgX3Byb3ZpZGVyID0gLyojX19QVVJFX18qL25ldyBXZWFrTWFwKCk7XG52YXIgX3N0b3JhZ2UgPSAvKiNfX1BVUkVfXyovbmV3IFdlYWtNYXAoKTtcbnZhciBfaGFuZGxlQ29ubmVjdGVkID0gLyojX19QVVJFX18qL25ldyBXZWFrU2V0KCk7XG52YXIgX3JlbW92ZUxpc3RlbmVycyA9IC8qI19fUFVSRV9fKi9uZXcgV2Vha1NldCgpO1xuY2xhc3MgV2FsbGV0Q29ubmVjdFYxQ29ubmVjdG9yIGV4dGVuZHMgV2FnbWlDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICAgIF9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyh0aGlzLCBfcmVtb3ZlTGlzdGVuZXJzKTtcbiAgICBfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWModGhpcywgX2hhbmRsZUNvbm5lY3RlZCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaWRcIiwgd2FsbGV0SWRzLndhbGxldENvbm5lY3RWMSk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCBcIldhbGxldENvbm5lY3RWMVwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZWFkeVwiLCB0cnVlKTtcbiAgICBfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyh0aGlzLCBfcHJvdmlkZXIsIHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IHZvaWQgMFxuICAgIH0pO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjKHRoaXMsIF9zdG9yYWdlLCB7XG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3YWxsZXROYW1lXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib25Td2l0Y2hDaGFpblwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoXCJtZXNzYWdlXCIsIHtcbiAgICAgICAgdHlwZTogXCJzd2l0Y2hfY2hhaW5cIlxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib25EaXNwbGF5VXJpXCIsIGFzeW5jIChlcnJvciwgcGF5bG9hZCkgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwge1xuICAgICAgICAgIGRhdGE6IGVycm9yLFxuICAgICAgICAgIHR5cGU6IFwiZGlzcGxheV91cmlfZXJyb3JcIlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwge1xuICAgICAgICBkYXRhOiBwYXlsb2FkLnBhcmFtc1swXSxcbiAgICAgICAgdHlwZTogXCJkaXNwbGF5X3VyaVwiXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvblJlcXVlc3RTZW50XCIsIChlcnJvciwgcGF5bG9hZCkgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwge1xuICAgICAgICAgIGRhdGE6IGVycm9yLFxuICAgICAgICAgIHR5cGU6IFwicmVxdWVzdFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KFwibWVzc2FnZVwiLCB7XG4gICAgICAgIGRhdGE6IHBheWxvYWQucGFyYW1zWzBdLFxuICAgICAgICB0eXBlOiBcInJlcXVlc3RcIlxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib25NZXNzYWdlXCIsIG1lc3NhZ2UgPT4ge1xuICAgICAgdGhpcy5lbWl0KFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbkFjY291bnRzQ2hhbmdlZFwiLCBhY2NvdW50cyA9PiB7XG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuZW1pdChcImRpc2Nvbm5lY3RcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtaXQoXCJjaGFuZ2VcIiwge1xuICAgICAgICAgIGFjY291bnQ6IHV0aWxzLmdldEFkZHJlc3MoYWNjb3VudHNbMF0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uQ2hhaW5DaGFuZ2VkXCIsIGNoYWluSWQgPT4ge1xuICAgICAgY29uc3QgaWQgPSBub3JtYWxpemVDaGFpbklkKGNoYWluSWQpO1xuICAgICAgY29uc3QgdW5zdXBwb3J0ZWQgPSB0aGlzLmlzQ2hhaW5VbnN1cHBvcnRlZChpZCk7XG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3N0b3JhZ2UpLnNldEl0ZW0oTEFTVF9VU0VEX0NIQUlOX0lELCBTdHJpbmcoY2hhaW5JZCkpO1xuICAgICAgdGhpcy5lbWl0KFwiY2hhbmdlXCIsIHtcbiAgICAgICAgY2hhaW46IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB1bnN1cHBvcnRlZFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbkRpc2Nvbm5lY3RcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy53YWxsZXROYW1lID0gdW5kZWZpbmVkO1xuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zdG9yYWdlKS5yZW1vdmVJdGVtKExBU1RfVVNFRF9DSEFJTl9JRCk7XG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3N0b3JhZ2UpLnJlbW92ZUl0ZW0oTEFTVF9TRVNTSU9OKTtcbiAgICAgIF9jbGFzc1ByaXZhdGVNZXRob2RHZXQodGhpcywgX3JlbW92ZUxpc3RlbmVycywgX3JlbW92ZUxpc3RlbmVyczIpLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmVtaXQoXCJkaXNjb25uZWN0XCIpO1xuICAgIH0pO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc3RvcmFnZSwgY29uZmlnLnN0b3JhZ2UpO1xuICB9XG4gIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgbGV0IHtcbiAgICAgIGNoYWluSWRcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB0cnkge1xuICAgICAgbGV0IHRhcmdldENoYWluSWQgPSBjaGFpbklkO1xuICAgICAgaWYgKCF0YXJnZXRDaGFpbklkKSB7XG4gICAgICAgIGNvbnN0IGxhc3RVc2VkQ2hhaW5JZFN0ciA9IGF3YWl0IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc3RvcmFnZSkuZ2V0SXRlbShMQVNUX1VTRURfQ0hBSU5fSUQpO1xuICAgICAgICBjb25zdCBsYXN0VXNlZENoYWluSWQgPSBsYXN0VXNlZENoYWluSWRTdHIgPyBwYXJzZUludChsYXN0VXNlZENoYWluSWRTdHIpIDogdW5kZWZpbmVkO1xuICAgICAgICBpZiAobGFzdFVzZWRDaGFpbklkICYmICF0aGlzLmlzQ2hhaW5VbnN1cHBvcnRlZChsYXN0VXNlZENoYWluSWQpKSB7XG4gICAgICAgICAgdGFyZ2V0Q2hhaW5JZCA9IGxhc3RVc2VkQ2hhaW5JZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB0aGlzLmdldFByb3ZpZGVyKHtcbiAgICAgICAgY2hhaW5JZDogdGFyZ2V0Q2hhaW5JZCxcbiAgICAgICAgY3JlYXRlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0dXBMaXN0ZW5lcnMoKTtcblxuICAgICAgLy8gRGVmZXIgbWVzc2FnZSB0byB0aGUgbmV4dCB0aWNrIHRvIGVuc3VyZSB3YWxsZXQgY29ubmVjdCBkYXRhIChwcm92aWRlZCBieSBgLmVuYWJsZSgpYCkgaXMgYXZhaWxhYmxlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwge1xuICAgICAgICB0eXBlOiBcImNvbm5lY3RpbmdcIlxuICAgICAgfSksIDApO1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBwcm92aWRlci5lbmFibGUoKTtcbiAgICAgIGNvbnN0IGFjY291bnQgPSB1dGlscy5nZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgIGxldCBpZCA9IGF3YWl0IHRoaXMuZ2V0Q2hhaW5JZCgpO1xuICAgICAgbGV0IHVuc3VwcG9ydGVkID0gdGhpcy5pc0NoYWluVW5zdXBwb3J0ZWQoaWQpO1xuXG4gICAgICAvLyBOb3QgYWxsIFdhbGxldENvbm5lY3Qgb3B0aW9ucyBzdXBwb3J0IHByb2dyYW1tYXRpYyBjaGFpbiBzd2l0Y2hpbmdcbiAgICAgIC8vIE9ubHkgZW5hYmxlIGZvciB3YWxsZXQgb3B0aW9ucyB0aGF0IGRvXG4gICAgICB0aGlzLndhbGxldE5hbWUgPSBwcm92aWRlci5jb25uZWN0b3I/LnBlZXJNZXRhPy5uYW1lID8/IFwiXCI7XG5cbiAgICAgIC8vIHN3aXRjaCB0byB0YXJnZXQgY2hhaW5JZFxuICAgICAgaWYgKGNoYWluSWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnN3aXRjaENoYWluKGNoYWluSWQpO1xuICAgICAgICAgIGlkID0gY2hhaW5JZDtcbiAgICAgICAgICB1bnN1cHBvcnRlZCA9IHRoaXMuaXNDaGFpblVuc3VwcG9ydGVkKGlkKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGNvdWxkIG5vdCBzd2l0Y2ggdG8gZGVzaXJlZCBjaGFpbiBpZDogJHtjaGFpbklkfSBgLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCh0aGlzLCBfaGFuZGxlQ29ubmVjdGVkLCBfaGFuZGxlQ29ubmVjdGVkMikuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuZW1pdChcImNvbm5lY3RcIiwge1xuICAgICAgICBhY2NvdW50LFxuICAgICAgICBjaGFpbjoge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHVuc3VwcG9ydGVkXG4gICAgICAgIH0sXG4gICAgICAgIHByb3ZpZGVyXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjY291bnQsXG4gICAgICAgIGNoYWluOiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdW5zdXBwb3J0ZWRcbiAgICAgICAgfSxcbiAgICAgICAgcHJvdmlkZXI6IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKC91c2VyIGNsb3NlZCBtb2RhbC9pLnRlc3QoZXJyb3IubWVzc2FnZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZGlzY29ubmVjdCgpIHtcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHRoaXMuZ2V0UHJvdmlkZXIoKTtcbiAgICBhd2FpdCBwcm92aWRlci5kaXNjb25uZWN0KCk7XG4gIH1cbiAgYXN5bmMgZ2V0QWNjb3VudCgpIHtcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHRoaXMuZ2V0UHJvdmlkZXIoKTtcbiAgICBjb25zdCBhY2NvdW50cyA9IHByb3ZpZGVyLmFjY291bnRzO1xuICAgIC8vIHJldHVybiBjaGVja3N1bSBhZGRyZXNzXG4gICAgcmV0dXJuIHV0aWxzLmdldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICB9XG4gIGFzeW5jIGdldENoYWluSWQoKSB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB0aGlzLmdldFByb3ZpZGVyKCk7XG4gICAgY29uc3QgY2hhaW5JZCA9IG5vcm1hbGl6ZUNoYWluSWQocHJvdmlkZXIuY2hhaW5JZCk7XG4gICAgcmV0dXJuIGNoYWluSWQ7XG4gIH1cbiAgYXN5bmMgZ2V0UHJvdmlkZXIoKSB7XG4gICAgbGV0IHtcbiAgICAgIGNoYWluSWQsXG4gICAgICBjcmVhdGVcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBGb3JjZSBjcmVhdGUgbmV3IHByb3ZpZGVyXG4gICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Byb3ZpZGVyKSB8fCBjaGFpbklkIHx8IGNyZWF0ZSkge1xuICAgICAgY29uc3QgcnBjID0gIXRoaXMub3B0aW9ucz8uaW5mdXJhSWQgPyB0aGlzLmNoYWlucy5yZWR1Y2UoKHJwY18sIGNoYWluKSA9PiAoe1xuICAgICAgICAuLi5ycGNfLFxuICAgICAgICBbY2hhaW4uY2hhaW5JZF06IGNoYWluLnJwY1swXVxuICAgICAgfSksIHt9KSA6IHt9O1xuICAgICAgY29uc3QgV2FsbGV0Q29ubmVjdFByb3ZpZGVyID0gKGF3YWl0IGltcG9ydCgnLi4vLi4vLi4vLi4vZGlzdC9pbmRleC00MmIwZjVmNS5icm93c2VyLmVzbS5qcycpKS5kZWZhdWx0O1xuICAgICAgY29uc3Qgc2Vzc2lvblN0ciA9IGF3YWl0IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc3RvcmFnZSkuZ2V0SXRlbShMQVNUX1NFU1NJT04pO1xuICAgICAgY29uc3Qgc2Vzc2lvbiA9IHNlc3Npb25TdHIgPyBKU09OLnBhcnNlKHNlc3Npb25TdHIpIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy53YWxsZXROYW1lID0gc2Vzc2lvbj8ucGVlck1ldGE/Lm5hbWUgfHwgdW5kZWZpbmVkO1xuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9wcm92aWRlciwgbmV3IFdhbGxldENvbm5lY3RQcm92aWRlcih7XG4gICAgICAgIC4uLnRoaXMub3B0aW9ucyxcbiAgICAgICAgY2hhaW5JZCxcbiAgICAgICAgcnBjOiB7XG4gICAgICAgICAgLi4ucnBjLFxuICAgICAgICAgIC4uLnRoaXMub3B0aW9ucz8ucnBjXG4gICAgICAgIH0sXG4gICAgICAgIHNlc3Npb246IHNlc3Npb24gPyBzZXNzaW9uIDogdW5kZWZpbmVkXG4gICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Byb3ZpZGVyKTtcbiAgfVxuICBhc3luYyBnZXRTaWduZXIoKSB7XG4gICAgbGV0IHtcbiAgICAgIGNoYWluSWRcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBjb25zdCBbcHJvdmlkZXIsIGFjY291bnRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuZ2V0UHJvdmlkZXIoe1xuICAgICAgY2hhaW5JZFxuICAgIH0pLCB0aGlzLmdldEFjY291bnQoKV0pO1xuICAgIHJldHVybiBuZXcgcHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlciwgY2hhaW5JZCkuZ2V0U2lnbmVyKGFjY291bnQpO1xuICB9XG4gIGFzeW5jIGlzQXV0aG9yaXplZCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudCgpO1xuICAgICAgcmV0dXJuICEhYWNjb3VudDtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgc3dpdGNoQ2hhaW4oY2hhaW5JZCkge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdGhpcy5nZXRQcm92aWRlcigpO1xuICAgIGNvbnN0IGNoYWluSWRIZXggPSB1dGlscy5oZXhWYWx1ZShjaGFpbklkKTtcbiAgICB0cnkge1xuICAgICAgLy8gU2V0IHVwIGEgcmFjZSBiZXR3ZWVuIGB3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbmAgJiB0aGUgYGNoYWluQ2hhbmdlZGAgZXZlbnRcbiAgICAgIC8vIHRvIGVuc3VyZSB0aGUgY2hhaW4gaGFzIGJlZW4gc3dpdGNoZWQuIFRoaXMgaXMgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBhIGNhc2VcbiAgICAgIC8vIHdoZXJlIGEgd2FsbGV0IG1heSBub3QgcmVzb2x2ZSB0aGUgYHdhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluYCBtZXRob2QsIG9yXG4gICAgICAvLyByZXNvbHZlcyBzbG93ZXIgdGhhbiBgY2hhaW5DaGFuZ2VkYC5cbiAgICAgIGF3YWl0IFByb21pc2UucmFjZShbcHJvdmlkZXIucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJ3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpblwiLFxuICAgICAgICBwYXJhbXM6IFt7XG4gICAgICAgICAgY2hhaW5JZDogY2hhaW5JZEhleFxuICAgICAgICB9XVxuICAgICAgfSksIG5ldyBQcm9taXNlKHJlcyA9PiB0aGlzLm9uKFwiY2hhbmdlXCIsIF9yZWYgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgIGNoYWluXG4gICAgICAgIH0gPSBfcmVmO1xuICAgICAgICBpZiAoY2hhaW4/LmlkID09PSBjaGFpbklkKSB7XG4gICAgICAgICAgcmVzKGNoYWluSWQpO1xuICAgICAgICB9XG4gICAgICB9KSldKTtcbiAgICAgIHJldHVybiB0aGlzLmNoYWlucy5maW5kKHggPT4geC5jaGFpbklkID09PSBjaGFpbklkKSA/PyB7XG4gICAgICAgIGNoYWluSWQ6IGNoYWluSWQsXG4gICAgICAgIG5hbWU6IGBDaGFpbiAke2NoYWluSWRIZXh9YCxcbiAgICAgICAgbmV0d29yazogYCR7Y2hhaW5JZEhleH1gLFxuICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICAgIG5hbWU6IFwiRXRoZXJcIixcbiAgICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICAgICAgc3ltYm9sOiBcIkVUSFwiXG4gICAgICAgIH0sXG4gICAgICAgIHJwYzogW1wiXCJdLFxuICAgICAgICBzaG9ydE5hbWU6IFwiZXRoXCIsXG4gICAgICAgIGNoYWluOiBcIkVUSFwiLFxuICAgICAgICBzbHVnOiBcImV0aGVyZXVtXCIsXG4gICAgICAgIHRlc3RuZXQ6IGZhbHNlXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gdHlwZW9mIGVycm9yID09PSBcInN0cmluZ1wiID8gZXJyb3IgOiBlcnJvcj8ubWVzc2FnZTtcbiAgICAgIGlmICgvdXNlciByZWplY3RlZCByZXF1ZXN0L2kudGVzdChtZXNzYWdlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5jaGFpbnMuZmluZCh4ID0+IHguY2hhaW5JZCA9PT0gY2hhaW5JZCk7XG5cbiAgICAgIC8vIGlmIGNoYWluIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgIGlmICghY2hhaW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IFN3aXRjaENoYWluRXJyb3IoYENoYWluICR7Y2hhaW5JZH0gaXMgbm90IGFkZGVkIGluIHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBjaGFpbnNgKTtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgY2hhaW4gaXMgbm90IGNvbmZpZ3VyZWQgaW4gdGhlIHdhbGxldFxuICAgICAgaWYgKC9VbnJlY29nbml6ZWQgY2hhaW4gSUQvaS50ZXN0KG1lc3NhZ2UpKSB7XG4gICAgICAgIC8vIGNvbmZpZ3VyZSBpdFxuICAgICAgICB0aGlzLmVtaXQoXCJtZXNzYWdlXCIsIHtcbiAgICAgICAgICB0eXBlOiBcImFkZF9jaGFpblwiXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBibG9ja0V4cGxvcmVyVXJscyA9IHRoaXMuZ2V0QmxvY2tFeHBsb3JlclVybHMoY2hhaW4pO1xuICAgICAgICBhd2FpdCBwcm92aWRlci5yZXF1ZXN0KHtcbiAgICAgICAgICBtZXRob2Q6IFwid2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW5cIixcbiAgICAgICAgICBwYXJhbXM6IFt7XG4gICAgICAgICAgICBjaGFpbklkOiBjaGFpbklkSGV4LFxuICAgICAgICAgICAgY2hhaW5OYW1lOiBjaGFpbi5uYW1lLFxuICAgICAgICAgICAgbmF0aXZlQ3VycmVuY3k6IGNoYWluLm5hdGl2ZUN1cnJlbmN5LFxuICAgICAgICAgICAgcnBjVXJsczogY2hhaW4ucnBjLFxuICAgICAgICAgICAgYmxvY2tFeHBsb3JlclVybHNcbiAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNoYWluO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFN3aXRjaENoYWluRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBzZXR1cExpc3RlbmVycygpIHtcbiAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpLm9uKFwiYWNjb3VudHNDaGFuZ2VkXCIsIHRoaXMub25BY2NvdW50c0NoYW5nZWQpO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIHRoaXMub25DaGFpbkNoYW5nZWQpO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpLm9uKFwiZGlzY29ubmVjdFwiLCB0aGlzLm9uRGlzY29ubmVjdCk7XG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikub24oXCJtZXNzYWdlXCIsIHRoaXMub25NZXNzYWdlKTtcbiAgICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Byb3ZpZGVyKS5vbihcInN3aXRjaENoYWluXCIsIHRoaXMub25Td2l0Y2hDaGFpbik7XG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikub24oXCJkaXNwbGF5X3VyaVwiLCB0aGlzLm9uRGlzcGxheVVyaSk7XG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikub24oXCJjYWxsX3JlcXVlc3Rfc2VudFwiLCB0aGlzLm9uUmVxdWVzdFNlbnQpO1xuICB9XG59XG5hc3luYyBmdW5jdGlvbiBfaGFuZGxlQ29ubmVjdGVkMigpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpPy5jb25uZWN0b3Iuc2Vzc2lvbjtcbiAgdGhpcy53YWxsZXROYW1lID0gc2Vzc2lvbj8ucGVlck1ldGE/Lm5hbWUgfHwgXCJcIjtcbiAgY29uc3Qgc2Vzc2lvblN0ciA9IEpTT04uc3RyaW5naWZ5KHNlc3Npb24pO1xuICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3N0b3JhZ2UpLnNldEl0ZW0oTEFTVF9TRVNTSU9OLCBzZXNzaW9uU3RyKTtcbn1cbmZ1bmN0aW9uIF9yZW1vdmVMaXN0ZW5lcnMyKCkge1xuICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpLnJlbW92ZUxpc3RlbmVyKFwiYWNjb3VudHNDaGFuZ2VkXCIsIHRoaXMub25BY2NvdW50c0NoYW5nZWQpO1xuICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Byb3ZpZGVyKS5yZW1vdmVMaXN0ZW5lcihcImNoYWluQ2hhbmdlZFwiLCB0aGlzLm9uQ2hhaW5DaGFuZ2VkKTtcbiAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikucmVtb3ZlTGlzdGVuZXIoXCJkaXNjb25uZWN0XCIsIHRoaXMub25EaXNjb25uZWN0KTtcbiAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikucmVtb3ZlTGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMub25NZXNzYWdlKTtcbiAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikucmVtb3ZlTGlzdGVuZXIoXCJzd2l0Y2hDaGFpblwiLCB0aGlzLm9uU3dpdGNoQ2hhaW4pO1xuICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Byb3ZpZGVyKS5yZW1vdmVMaXN0ZW5lcihcImRpc3BsYXlfdXJpXCIsIHRoaXMub25EaXNwbGF5VXJpKTtcbiAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikucmVtb3ZlTGlzdGVuZXIoXCJjYWxsX3JlcXVlc3Rfc2VudFwiLCB0aGlzLm9uUmVxdWVzdFNlbnQpO1xufVxuXG5leHBvcnQgeyBXYWxsZXRDb25uZWN0VjFDb25uZWN0b3IgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==