"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_wallets_evm_connectors_coinbase-wallet_dist_thirdweb-dev-wa-aecea3"],{

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

/***/ "./node_modules/@thirdweb-dev/wallets/evm/connectors/coinbase-wallet/dist/thirdweb-dev-wallets-evm-connectors-coinbase-wallet.browser.esm.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/wallets/evm/connectors/coinbase-wallet/dist/thirdweb-dev-wallets-evm-connectors-coinbase-wallet.browser.esm.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoinbaseWalletConnector: () => (/* binding */ CoinbaseWalletConnector)
/* harmony export */ });
/* harmony import */ var _dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/classPrivateMethodGet-ea199cc3.browser.esm.js");
/* harmony import */ var _dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/classPrivateFieldSet-a5db7c83.browser.esm.js");
/* harmony import */ var _dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../dist/defineProperty-c8ecdc07.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/defineProperty-c8ecdc07.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/providers/lib.esm/web3-provider.js");
/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers/lib/utils.js */ "./node_modules/ethers/lib/utils.js");
/* harmony import */ var ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dist_walletIds_1ea97411_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../dist/walletIds-1ea97411.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/walletIds-1ea97411.browser.esm.js");
/* harmony import */ var _dist_WagmiConnector_60b19604_browser_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../dist/WagmiConnector-60b19604.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/WagmiConnector-60b19604.browser.esm.js");
/* harmony import */ var _dist_normalizeChainId_e4cc0175_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../dist/normalizeChainId-e4cc0175.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/normalizeChainId-e4cc0175.browser.esm.js");
/* harmony import */ var _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../dist/errors-105ad187.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/errors-105ad187.browser.esm.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");












var _client = /*#__PURE__*/new WeakMap();
var _provider = /*#__PURE__*/new WeakMap();
var _isUserRejectedRequestError = /*#__PURE__*/new WeakSet();
class CoinbaseWalletConnector extends _dist_WagmiConnector_60b19604_browser_esm_js__WEBPACK_IMPORTED_MODULE_1__.W {
  constructor(_ref) {
    let {
      chains,
      options
    } = _ref;
    super({
      chains,
      options: {
        reloadOnDisconnect: false,
        ...options
      }
    });
    (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, _isUserRejectedRequestError);
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "id", _dist_walletIds_1ea97411_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__.w.coinbase);
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "name", "Coinbase Wallet");
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "ready", true);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__._)(this, _client, {
      writable: true,
      value: void 0
    });
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__._)(this, _provider, {
      writable: true,
      value: void 0
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onAccountsChanged", accounts => {
      if (accounts.length === 0) {
        this.emit("disconnect");
      } else {
        this.emit("change", {
          account: (0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__.getAddress)(accounts[0])
        });
      }
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onChainChanged", chainId => {
      const id = (0,_dist_normalizeChainId_e4cc0175_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.n)(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onDisconnect", () => {
      this.emit("disconnect");
    });
  }
  async connect() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      const provider = await this.getProvider();
      this.setupListeners();
      this.emit("message", {
        type: "connecting"
      });
      const accounts = await provider.enable();
      const account = (0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__.getAddress)(accounts[0]);
      // Switch to chain if provided
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (chainId && id !== chainId) {
        try {
          const chain = await this.switchChain(chainId);
          id = chain.chainId;
          unsupported = this.isChainUnsupported(id);
        } catch (e) {
          console.error(`Connected but failed to switch to desired chain ${chainId}`, e);
        }
      }
      return {
        account,
        chain: {
          id,
          unsupported
        },
        provider: new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(provider)
      };
    } catch (error) {
      if (/(user closed modal|accounts received is empty)/i.test(error.message)) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.U(error);
      }
      throw error;
    }
  }
  async disconnect() {
    if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider)) {
      return;
    }
    const provider = await this.getProvider();
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);
    provider.disconnect();
    provider.close();
  }
  async getAccount() {
    const provider = await this.getProvider();
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    if (accounts.length === 0) {
      throw new Error("No accounts found");
    }
    // return checksum address
    return (0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__.getAddress)(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = (0,_dist_normalizeChainId_e4cc0175_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.n)(provider.chainId);
    return chainId;
  }
  async getProvider() {
    if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider)) {
      let CoinbaseWalletSDK = (await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_debug_src_browser_js"), __webpack_require__.e("vendors-node_modules_preact_hooks_dist_hooks_module_js"), __webpack_require__.e("vendors-node_modules_coinbase_wallet-sdk_dist_index_js"), __webpack_require__.e("_4f7e")]).then(__webpack_require__.bind(__webpack_require__, /*! @coinbase/wallet-sdk */ "./node_modules/@coinbase/wallet-sdk/dist/index.js"))).default;
      // Workaround for Vite dev import errors
      // https://github.com/vitejs/vite/issues/7112
      if (typeof CoinbaseWalletSDK !== "function" &&
      // @ts-expect-error This import error is not visible to TypeScript
      typeof CoinbaseWalletSDK.default === "function") {
        CoinbaseWalletSDK = CoinbaseWalletSDK.default;
      }
      (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.a)(this, _client, new CoinbaseWalletSDK(this.options));
      const walletExtensionChainId = (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _client).walletExtension?.getChainId();
      const chain = this.chains.find(chain_ => this.options.chainId ? chain_.chainId === this.options.chainId : chain_.chainId === walletExtensionChainId) || this.chains[0];
      const chainId = this.options.chainId || chain?.chainId;
      const jsonRpcUrl = this.options.jsonRpcUrl || chain?.rpc[0];
      (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.a)(this, _provider, (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _client).makeWeb3Provider(jsonRpcUrl, chainId));
    }
    return (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider);
  }
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider(), this.getAccount()]);
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
    const id = (0,ethers_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__.hexValue)(chainId);
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: id
        }]
      });
      return this.chains.find(x => x.chainId === chainId) ?? {
        chainId: chainId,
        name: `Chain ${id}`,
        slug: `${id}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpc: [""],
        testnet: false,
        chain: "ethereum",
        shortName: "eth"
      };
    } catch (error) {
      const chain = this.chains.find(x => x.chainId === chainId);
      if (!chain) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.C({
          chainId,
          connectorId: this.id
        });
      }

      // Indicates chain is not added to provider
      if (error.code === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: id,
              chainName: chain.name,
              nativeCurrency: chain.nativeCurrency,
              rpcUrls: chain.rpc,
              blockExplorerUrls: this.getBlockExplorerUrls(chain)
            }]
          });
          return chain;
        } catch (addError) {
          if ((0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, addError)) {
            throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.U(addError);
          }
          throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.A();
        }
      }
      if ((0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, error)) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.U(error);
      }
      throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.S(error);
    }
  }
  async setupListeners() {
    const provider = await this.getProvider();
    provider.on("accountsChanged", this.onAccountsChanged);
    provider.on("chainChanged", this.onChainChanged);
    provider.on("disconnect", this.onDisconnect);
  }
  async getQrUrl() {
    await this.getProvider();
    if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _client)) {
      throw new Error("Coinbase Wallet SDK not initialized");
    }
    return (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _client).getQrUrl();
  }
}
function _isUserRejectedRequestError2(error) {
  return /(user rejected)/i.test(error.message);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXdhbGxldHMtZXZtLWNvbm5lY3RvcnMtY29pbmJhc2Utd2FsbGV0LWRpc3QtdGhpcmR3ZWItZGV2LXdhLWFlY2VhMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdGO0FBQzNCO0FBQ1o7O0FBRXpDLDZCQUE2QixxREFBWTtBQUN6Qzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSwrREFBYTtBQUM1QjtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQixJQUFJLDBFQUFlO0FBQ25CLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDaUQ7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBFQUFlO0FBQ25CLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRUFBZTtBQUNuQixJQUFJLDBFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLG9CQUFvQixRQUFRLGtDQUFrQyxZQUFZO0FBQzFFLElBQUksMEVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLDBFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksMEVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSwwRUFBZTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRXFNOzs7Ozs7Ozs7Ozs7Ozs7QUMvR3JNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y4RztBQUN5QjtBQUN6RTtBQUM1RDtBQUN3QjtBQUN5QjtBQUNVO0FBQ0k7QUFDdUU7QUFDM0k7QUFDUDs7QUFFdkI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJFQUFjO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLHNGQUEyQjtBQUMvQixJQUFJLCtFQUFlLGFBQWEsc0VBQVM7QUFDekMsSUFBSSwrRUFBZTtBQUNuQixJQUFJLCtFQUFlO0FBQ25CLElBQUkscUZBQTBCO0FBQzlCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxxRkFBMEI7QUFDOUI7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLCtFQUFlO0FBQ25CO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxtQkFBbUIsK0RBQVU7QUFDN0IsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLElBQUksK0VBQWU7QUFDbkIsaUJBQWlCLGlGQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksK0VBQWU7QUFDbkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHNCQUFzQiwrREFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFVBQVUsT0FBTywwREFBMEQsUUFBUTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxzQkFBc0IsZ0RBQXNCO0FBQzVDO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esa0JBQWtCLG1FQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxRkFBcUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLCtEQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpRkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxRkFBcUI7QUFDOUIscUNBQXFDLHVhQUE4QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scUZBQXFCO0FBQzNCLHFDQUFxQyxxRkFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxRkFBcUIsa0JBQWtCLHFGQUFxQjtBQUNsRTtBQUNBLFdBQVcscUZBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsZUFBZSxnREFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2REFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsdUJBQXVCLEdBQUc7QUFDMUIsaUJBQWlCLEdBQUc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esa0JBQWtCLG1FQUF1QjtBQUN6QztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0EsVUFBVTtBQUNWLGNBQWMsc0ZBQXNCO0FBQ3BDLHNCQUFzQixtRUFBd0I7QUFDOUM7QUFDQSxvQkFBb0IsbUVBQWE7QUFDakM7QUFDQTtBQUNBLFVBQVUsc0ZBQXNCO0FBQ2hDLGtCQUFrQixtRUFBd0I7QUFDMUM7QUFDQSxnQkFBZ0IsbUVBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxRkFBcUI7QUFDOUI7QUFDQTtBQUNBLFdBQVcscUZBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHRoaXJkd2ViLWRldi93YWxsZXRzL2Rpc3QvV2FnbWlDb25uZWN0b3ItNjBiMTk2MDQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHRoaXJkd2ViLWRldi93YWxsZXRzL2Rpc3QvZXJyb3JzLTEwNWFkMTg3LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvd2FsbGV0cy9kaXN0L25vcm1hbGl6ZUNoYWluSWQtZTRjYzAxNzUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHRoaXJkd2ViLWRldi93YWxsZXRzL2V2bS9jb25uZWN0b3JzL2NvaW5iYXNlLXdhbGxldC9kaXN0L3RoaXJkd2ViLWRldi13YWxsZXRzLWV2bS1jb25uZWN0b3JzLWNvaW5iYXNlLXdhbGxldC5icm93c2VyLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSB9IGZyb20gJy4vZGVmaW5lUHJvcGVydHktYzhlY2RjMDcuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgZGVmYXVsdENoYWlucyB9IGZyb20gJ0B0aGlyZHdlYi1kZXYvY2hhaW5zJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRlbWl0dGVyMyc7XG5cbmNsYXNzIFdhZ21pQ29ubmVjdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqIFVuaXF1ZSBjb25uZWN0b3IgaWQgKi9cblxuICAvKiogQ29ubmVjdG9yIG5hbWUgKi9cblxuICAvKiogQ2hhaW5zIGNvbm5lY3RvciBzdXBwb3J0cyAqL1xuXG4gIC8qKiBPcHRpb25zIHRvIHVzZSB3aXRoIGNvbm5lY3RvciAqL1xuXG4gIC8qKiBXaGV0aGVyIGNvbm5lY3RvciBpcyB1c2FibGUgKi9cblxuICBjb25zdHJ1Y3RvcihfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIGNoYWlucyA9IGRlZmF1bHRDaGFpbnMsXG4gICAgICBvcHRpb25zXG4gICAgfSA9IF9yZWY7XG4gICAgc3VwZXIoKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpZFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5hbWVcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjaGFpbnNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvcHRpb25zXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicmVhZHlcIiwgdm9pZCAwKTtcbiAgICB0aGlzLmNoYWlucyA9IGNoYWlucztcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIGdldEJsb2NrRXhwbG9yZXJVcmxzKGNoYWluKSB7XG4gICAgY29uc3QgZXhwbG9yZXJzID0gY2hhaW4uZXhwbG9yZXJzPy5tYXAoeCA9PiB4LnVybCkgPz8gW107XG4gICAgcmV0dXJuIGV4cGxvcmVycy5sZW5ndGggPiAwID8gZXhwbG9yZXJzIDogdW5kZWZpbmVkO1xuICB9XG4gIGlzQ2hhaW5VbnN1cHBvcnRlZChjaGFpbklkKSB7XG4gICAgcmV0dXJuICF0aGlzLmNoYWlucy5zb21lKHggPT4geC5jaGFpbklkID09PSBjaGFpbklkKTtcbiAgfVxuICB1cGRhdGVDaGFpbnMoY2hhaW5zKSB7XG4gICAgdGhpcy5jaGFpbnMgPSBjaGFpbnM7XG4gIH1cbn1cblxuZXhwb3J0IHsgV2FnbWlDb25uZWN0b3IgYXMgVyB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfZGVmaW5lUHJvcGVydHkgfSBmcm9tICcuL2RlZmluZVByb3BlcnR5LWM4ZWNkYzA3LmJyb3dzZXIuZXNtLmpzJztcblxuLyoqXG4gKiBFcnJvciBzdWJjbGFzcyBpbXBsZW1lbnRpbmcgSlNPTiBSUEMgMi4wIGVycm9ycyBhbmQgRXRoZXJldW0gUlBDIGVycm9ycyBwZXIgRUlQLTE0NzQuXG4gKiBAc2VlIGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTQ3NFxuICovXG5jbGFzcyBScGNFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoIC8qKiBIdW1hbi1yZWFkYWJsZSBzdHJpbmcgKi9cbiAgbWVzc2FnZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhdXNlLFxuICAgICAgY29kZSxcbiAgICAgIGRhdGFcbiAgICB9ID0gb3B0aW9ucztcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoY29kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJjb2RlXCIgbXVzdCBiZSBhbiBpbnRlZ2VyLicpO1xuICAgIH1cbiAgICBpZiAoIW1lc3NhZ2UgfHwgdHlwZW9mIG1lc3NhZ2UgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJtZXNzYWdlXCIgbXVzdCBiZSBhIG5vbmVtcHR5IHN0cmluZy4nKTtcbiAgICB9XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY2F1c2VcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb2RlXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZGF0YVwiLCB2b2lkIDApO1xuICAgIHRoaXMuY2F1c2UgPSBjYXVzZTtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cbn1cblxuLyoqXG4gKiBFcnJvciBzdWJjbGFzcyBpbXBsZW1lbnRpbmcgRXRoZXJldW0gUHJvdmlkZXIgZXJyb3JzIHBlciBFSVAtMTE5My5cbiAqIEBzZWUgaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTkzXG4gKi9cbmNsYXNzIFByb3ZpZGVyUnBjRXJyb3IgZXh0ZW5kcyBScGNFcnJvciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gRXRoZXJldW0gUHJvdmlkZXIgSlNPTi1SUEMgZXJyb3IuXG4gICAqIGBjb2RlYCBtdXN0IGJlIGFuIGludGVnZXIgaW4gdGhlIDEwMDAgPD0gNDk5OSByYW5nZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCAvKiogSHVtYW4tcmVhZGFibGUgc3RyaW5nICovXG4gIG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYXVzZSxcbiAgICAgIGNvZGUsXG4gICAgICBkYXRhXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgaWYgKCEoTnVtYmVyLmlzSW50ZWdlcihjb2RlKSAmJiBjb2RlID49IDEwMDAgJiYgY29kZSA8PSA0OTk5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImNvZGVcIiBtdXN0IGJlIGFuIGludGVnZXIgc3VjaCB0aGF0OiAxMDAwIDw9IGNvZGUgPD0gNDk5OScpO1xuICAgIH1cbiAgICBzdXBlcihtZXNzYWdlLCB7XG4gICAgICBjYXVzZSxcbiAgICAgIGNvZGUsXG4gICAgICBkYXRhXG4gICAgfSk7XG4gIH1cbn1cbmNsYXNzIEFkZENoYWluRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCBcIkFkZENoYWluRXJyb3JcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWVzc2FnZVwiLCBcIkVycm9yIGFkZGluZyBjaGFpblwiKTtcbiAgfVxufVxuY2xhc3MgQ2hhaW5Ob3RDb25maWd1cmVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgY2hhaW5JZCxcbiAgICAgIGNvbm5lY3RvcklkXG4gICAgfSA9IF9yZWY7XG4gICAgc3VwZXIoYENoYWluIFwiJHtjaGFpbklkfVwiIG5vdCBjb25maWd1cmVkIGZvciBjb25uZWN0b3IgXCIke2Nvbm5lY3RvcklkfVwiLmApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5hbWVcIiwgXCJDaGFpbk5vdENvbmZpZ3VyZWRcIik7XG4gIH1cbn1cbmNsYXNzIENvbm5lY3Rvck5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCBcIkNvbm5lY3Rvck5vdEZvdW5kRXJyb3JcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWVzc2FnZVwiLCBcIkNvbm5lY3RvciBub3QgZm91bmRcIik7XG4gIH1cbn1cbmNsYXNzIFJlc291cmNlVW5hdmFpbGFibGVFcnJvciBleHRlbmRzIFJwY0Vycm9yIHtcbiAgY29uc3RydWN0b3IoY2F1c2UpIHtcbiAgICBzdXBlcihcIlJlc291cmNlIHVuYXZhaWxhYmxlXCIsIHtcbiAgICAgIGNhdXNlLFxuICAgICAgY29kZTogLTMyMDAyXG4gICAgfSk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCBcIlJlc291cmNlVW5hdmFpbGFibGVcIik7XG4gIH1cbn1cbmNsYXNzIFN3aXRjaENoYWluRXJyb3IgZXh0ZW5kcyBQcm92aWRlclJwY0Vycm9yIHtcbiAgY29uc3RydWN0b3IoY2F1c2UpIHtcbiAgICBzdXBlcihcIkVycm9yIHN3aXRjaGluZyBjaGFpblwiLCB7XG4gICAgICBjYXVzZSxcbiAgICAgIGNvZGU6IDQ5MDJcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIFwiU3dpdGNoQ2hhaW5FcnJvclwiKTtcbiAgfVxufVxuY2xhc3MgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGV4dGVuZHMgUHJvdmlkZXJScGNFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNhdXNlKSB7XG4gICAgc3VwZXIoXCJVc2VyIHJlamVjdGVkIHJlcXVlc3RcIiwge1xuICAgICAgY2F1c2UsXG4gICAgICBjb2RlOiA0MDAxXG4gICAgfSk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCBcIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvclwiKTtcbiAgfVxufVxuXG4vLyBFdGhlcnMgZG9lcyBub3QgaGF2ZSBhbiBlcnJvciB0eXBlIHNvIHdlIGNhbiB1c2UgdGhpcyBmb3IgY2FzdGluZ1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2V0aGVycy1pby9ldGhlcnMuanMvYmxvYi9tYWluL3BhY2thZ2VzL2xvZ2dlci9zcmMudHMvaW5kZXgudHMjTDI2OFxuXG5leHBvcnQgeyBBZGRDaGFpbkVycm9yIGFzIEEsIENoYWluTm90Q29uZmlndXJlZEVycm9yIGFzIEMsIFByb3ZpZGVyUnBjRXJyb3IgYXMgUCwgUmVzb3VyY2VVbmF2YWlsYWJsZUVycm9yIGFzIFIsIFN3aXRjaENoYWluRXJyb3IgYXMgUywgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFUsIENvbm5lY3Rvck5vdEZvdW5kRXJyb3IgYXMgYSB9O1xuIiwiZnVuY3Rpb24gbm9ybWFsaXplQ2hhaW5JZChjaGFpbklkKSB7XG4gIGlmICh0eXBlb2YgY2hhaW5JZCA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQoY2hhaW5JZCwgY2hhaW5JZC50cmltKCkuc3Vic3RyaW5nKDAsIDIpID09PSBcIjB4XCIgPyAxNiA6IDEwKTtcbiAgfVxuICBpZiAodHlwZW9mIGNoYWluSWQgPT09IFwiYmlnaW50XCIpIHtcbiAgICByZXR1cm4gTnVtYmVyKGNoYWluSWQpO1xuICB9XG4gIHJldHVybiBjaGFpbklkO1xufVxuXG5leHBvcnQgeyBub3JtYWxpemVDaGFpbklkIGFzIG4gfTtcbiIsImltcG9ydCB7IF8gYXMgX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjLCBhIGFzIF9jbGFzc1ByaXZhdGVNZXRob2RHZXQgfSBmcm9tICcuLi8uLi8uLi8uLi9kaXN0L2NsYXNzUHJpdmF0ZU1ldGhvZEdldC1lYTE5OWNjMy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBfIGFzIF9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjLCBiIGFzIF9jbGFzc1ByaXZhdGVGaWVsZEdldCwgYSBhcyBfY2xhc3NQcml2YXRlRmllbGRTZXQgfSBmcm9tICcuLi8uLi8uLi8uLi9kaXN0L2NsYXNzUHJpdmF0ZUZpZWxkU2V0LWE1ZGI3YzgzLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlzdC9kZWZpbmVQcm9wZXJ0eS1jOGVjZGMwNy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBwcm92aWRlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgZ2V0QWRkcmVzcywgaGV4VmFsdWUgfSBmcm9tICdldGhlcnMvbGliL3V0aWxzLmpzJztcbmltcG9ydCB7IHcgYXMgd2FsbGV0SWRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlzdC93YWxsZXRJZHMtMWVhOTc0MTEuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgVyBhcyBXYWdtaUNvbm5lY3RvciB9IGZyb20gJy4uLy4uLy4uLy4uL2Rpc3QvV2FnbWlDb25uZWN0b3ItNjBiMTk2MDQuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgbiBhcyBub3JtYWxpemVDaGFpbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlzdC9ub3JtYWxpemVDaGFpbklkLWU0Y2MwMTc1LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IFUgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yLCBDIGFzIENoYWluTm90Q29uZmlndXJlZEVycm9yLCBBIGFzIEFkZENoYWluRXJyb3IsIFMgYXMgU3dpdGNoQ2hhaW5FcnJvciB9IGZyb20gJy4uLy4uLy4uLy4uL2Rpc3QvZXJyb3JzLTEwNWFkMTg3LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0ICdldmVudGVtaXR0ZXIzJztcblxudmFyIF9jbGllbnQgPSAvKiNfX1BVUkVfXyovbmV3IFdlYWtNYXAoKTtcbnZhciBfcHJvdmlkZXIgPSAvKiNfX1BVUkVfXyovbmV3IFdlYWtNYXAoKTtcbnZhciBfaXNVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgPSAvKiNfX1BVUkVfXyovbmV3IFdlYWtTZXQoKTtcbmNsYXNzIENvaW5iYXNlV2FsbGV0Q29ubmVjdG9yIGV4dGVuZHMgV2FnbWlDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIGNoYWlucyxcbiAgICAgIG9wdGlvbnNcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcih7XG4gICAgICBjaGFpbnMsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHJlbG9hZE9uRGlzY29ubmVjdDogZmFsc2UsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWModGhpcywgX2lzVXNlclJlamVjdGVkUmVxdWVzdEVycm9yKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpZFwiLCB3YWxsZXRJZHMuY29pbmJhc2UpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5hbWVcIiwgXCJDb2luYmFzZSBXYWxsZXRcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicmVhZHlcIiwgdHJ1ZSk7XG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWModGhpcywgX2NsaWVudCwge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogdm9pZCAwXG4gICAgfSk7XG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWModGhpcywgX3Byb3ZpZGVyLCB7XG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbkFjY291bnRzQ2hhbmdlZFwiLCBhY2NvdW50cyA9PiB7XG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuZW1pdChcImRpc2Nvbm5lY3RcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtaXQoXCJjaGFuZ2VcIiwge1xuICAgICAgICAgIGFjY291bnQ6IGdldEFkZHJlc3MoYWNjb3VudHNbMF0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uQ2hhaW5DaGFuZ2VkXCIsIGNoYWluSWQgPT4ge1xuICAgICAgY29uc3QgaWQgPSBub3JtYWxpemVDaGFpbklkKGNoYWluSWQpO1xuICAgICAgY29uc3QgdW5zdXBwb3J0ZWQgPSB0aGlzLmlzQ2hhaW5VbnN1cHBvcnRlZChpZCk7XG4gICAgICB0aGlzLmVtaXQoXCJjaGFuZ2VcIiwge1xuICAgICAgICBjaGFpbjoge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHVuc3VwcG9ydGVkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uRGlzY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoXCJkaXNjb25uZWN0XCIpO1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgbGV0IHtcbiAgICAgIGNoYWluSWRcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB0aGlzLmdldFByb3ZpZGVyKCk7XG4gICAgICB0aGlzLnNldHVwTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmVtaXQoXCJtZXNzYWdlXCIsIHtcbiAgICAgICAgdHlwZTogXCJjb25uZWN0aW5nXCJcbiAgICAgIH0pO1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBwcm92aWRlci5lbmFibGUoKTtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBnZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgIC8vIFN3aXRjaCB0byBjaGFpbiBpZiBwcm92aWRlZFxuICAgICAgbGV0IGlkID0gYXdhaXQgdGhpcy5nZXRDaGFpbklkKCk7XG4gICAgICBsZXQgdW5zdXBwb3J0ZWQgPSB0aGlzLmlzQ2hhaW5VbnN1cHBvcnRlZChpZCk7XG4gICAgICBpZiAoY2hhaW5JZCAmJiBpZCAhPT0gY2hhaW5JZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGNoYWluID0gYXdhaXQgdGhpcy5zd2l0Y2hDaGFpbihjaGFpbklkKTtcbiAgICAgICAgICBpZCA9IGNoYWluLmNoYWluSWQ7XG4gICAgICAgICAgdW5zdXBwb3J0ZWQgPSB0aGlzLmlzQ2hhaW5VbnN1cHBvcnRlZChpZCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBDb25uZWN0ZWQgYnV0IGZhaWxlZCB0byBzd2l0Y2ggdG8gZGVzaXJlZCBjaGFpbiAke2NoYWluSWR9YCwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjY291bnQsXG4gICAgICAgIGNoYWluOiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdW5zdXBwb3J0ZWRcbiAgICAgICAgfSxcbiAgICAgICAgcHJvdmlkZXI6IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKC8odXNlciBjbG9zZWQgbW9kYWx8YWNjb3VudHMgcmVjZWl2ZWQgaXMgZW1wdHkpL2kudGVzdChlcnJvci5tZXNzYWdlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuICBhc3luYyBkaXNjb25uZWN0KCkge1xuICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB0aGlzLmdldFByb3ZpZGVyKCk7XG4gICAgcHJvdmlkZXIucmVtb3ZlTGlzdGVuZXIoXCJhY2NvdW50c0NoYW5nZWRcIiwgdGhpcy5vbkFjY291bnRzQ2hhbmdlZCk7XG4gICAgcHJvdmlkZXIucmVtb3ZlTGlzdGVuZXIoXCJjaGFpbkNoYW5nZWRcIiwgdGhpcy5vbkNoYWluQ2hhbmdlZCk7XG4gICAgcHJvdmlkZXIucmVtb3ZlTGlzdGVuZXIoXCJkaXNjb25uZWN0XCIsIHRoaXMub25EaXNjb25uZWN0KTtcbiAgICBwcm92aWRlci5kaXNjb25uZWN0KCk7XG4gICAgcHJvdmlkZXIuY2xvc2UoKTtcbiAgfVxuICBhc3luYyBnZXRBY2NvdW50KCkge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdGhpcy5nZXRQcm92aWRlcigpO1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgcHJvdmlkZXIucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCJcbiAgICB9KTtcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhY2NvdW50cyBmb3VuZFwiKTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIGNoZWNrc3VtIGFkZHJlc3NcbiAgICByZXR1cm4gZ2V0QWRkcmVzcyhhY2NvdW50c1swXSk7XG4gIH1cbiAgYXN5bmMgZ2V0Q2hhaW5JZCgpIHtcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHRoaXMuZ2V0UHJvdmlkZXIoKTtcbiAgICBjb25zdCBjaGFpbklkID0gbm9ybWFsaXplQ2hhaW5JZChwcm92aWRlci5jaGFpbklkKTtcbiAgICByZXR1cm4gY2hhaW5JZDtcbiAgfVxuICBhc3luYyBnZXRQcm92aWRlcigpIHtcbiAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpKSB7XG4gICAgICBsZXQgQ29pbmJhc2VXYWxsZXRTREsgPSAoYXdhaXQgaW1wb3J0KCdAY29pbmJhc2Uvd2FsbGV0LXNkaycpKS5kZWZhdWx0O1xuICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgVml0ZSBkZXYgaW1wb3J0IGVycm9yc1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVqcy92aXRlL2lzc3Vlcy83MTEyXG4gICAgICBpZiAodHlwZW9mIENvaW5iYXNlV2FsbGV0U0RLICE9PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVGhpcyBpbXBvcnQgZXJyb3IgaXMgbm90IHZpc2libGUgdG8gVHlwZVNjcmlwdFxuICAgICAgdHlwZW9mIENvaW5iYXNlV2FsbGV0U0RLLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBDb2luYmFzZVdhbGxldFNESyA9IENvaW5iYXNlV2FsbGV0U0RLLmRlZmF1bHQ7XG4gICAgICB9XG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2NsaWVudCwgbmV3IENvaW5iYXNlV2FsbGV0U0RLKHRoaXMub3B0aW9ucykpO1xuICAgICAgY29uc3Qgd2FsbGV0RXh0ZW5zaW9uQ2hhaW5JZCA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY2xpZW50KS53YWxsZXRFeHRlbnNpb24/LmdldENoYWluSWQoKTtcbiAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5jaGFpbnMuZmluZChjaGFpbl8gPT4gdGhpcy5vcHRpb25zLmNoYWluSWQgPyBjaGFpbl8uY2hhaW5JZCA9PT0gdGhpcy5vcHRpb25zLmNoYWluSWQgOiBjaGFpbl8uY2hhaW5JZCA9PT0gd2FsbGV0RXh0ZW5zaW9uQ2hhaW5JZCkgfHwgdGhpcy5jaGFpbnNbMF07XG4gICAgICBjb25zdCBjaGFpbklkID0gdGhpcy5vcHRpb25zLmNoYWluSWQgfHwgY2hhaW4/LmNoYWluSWQ7XG4gICAgICBjb25zdCBqc29uUnBjVXJsID0gdGhpcy5vcHRpb25zLmpzb25ScGNVcmwgfHwgY2hhaW4/LnJwY1swXTtcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfcHJvdmlkZXIsIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfY2xpZW50KS5tYWtlV2ViM1Byb3ZpZGVyKGpzb25ScGNVcmwsIGNoYWluSWQpKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpO1xuICB9XG4gIGFzeW5jIGdldFNpZ25lcigpIHtcbiAgICBsZXQge1xuICAgICAgY2hhaW5JZFxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGNvbnN0IFtwcm92aWRlciwgYWNjb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5nZXRQcm92aWRlcigpLCB0aGlzLmdldEFjY291bnQoKV0pO1xuICAgIHJldHVybiBuZXcgcHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlciwgY2hhaW5JZCkuZ2V0U2lnbmVyKGFjY291bnQpO1xuICB9XG4gIGFzeW5jIGlzQXV0aG9yaXplZCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudCgpO1xuICAgICAgcmV0dXJuICEhYWNjb3VudDtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgc3dpdGNoQ2hhaW4oY2hhaW5JZCkge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdGhpcy5nZXRQcm92aWRlcigpO1xuICAgIGNvbnN0IGlkID0gaGV4VmFsdWUoY2hhaW5JZCk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHByb3ZpZGVyLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwid2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW5cIixcbiAgICAgICAgcGFyYW1zOiBbe1xuICAgICAgICAgIGNoYWluSWQ6IGlkXG4gICAgICAgIH1dXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmNoYWlucy5maW5kKHggPT4geC5jaGFpbklkID09PSBjaGFpbklkKSA/PyB7XG4gICAgICAgIGNoYWluSWQ6IGNoYWluSWQsXG4gICAgICAgIG5hbWU6IGBDaGFpbiAke2lkfWAsXG4gICAgICAgIHNsdWc6IGAke2lkfWAsXG4gICAgICAgIG5hdGl2ZUN1cnJlbmN5OiB7XG4gICAgICAgICAgbmFtZTogXCJFdGhlclwiLFxuICAgICAgICAgIGRlY2ltYWxzOiAxOCxcbiAgICAgICAgICBzeW1ib2w6IFwiRVRIXCJcbiAgICAgICAgfSxcbiAgICAgICAgcnBjOiBbXCJcIl0sXG4gICAgICAgIHRlc3RuZXQ6IGZhbHNlLFxuICAgICAgICBjaGFpbjogXCJldGhlcmV1bVwiLFxuICAgICAgICBzaG9ydE5hbWU6IFwiZXRoXCJcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5jaGFpbnMuZmluZCh4ID0+IHguY2hhaW5JZCA9PT0gY2hhaW5JZCk7XG4gICAgICBpZiAoIWNoYWluKSB7XG4gICAgICAgIHRocm93IG5ldyBDaGFpbk5vdENvbmZpZ3VyZWRFcnJvcih7XG4gICAgICAgICAgY2hhaW5JZCxcbiAgICAgICAgICBjb25uZWN0b3JJZDogdGhpcy5pZFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gSW5kaWNhdGVzIGNoYWluIGlzIG5vdCBhZGRlZCB0byBwcm92aWRlclxuICAgICAgaWYgKGVycm9yLmNvZGUgPT09IDQ5MDIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBwcm92aWRlci5yZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJ3YWxsZXRfYWRkRXRoZXJldW1DaGFpblwiLFxuICAgICAgICAgICAgcGFyYW1zOiBbe1xuICAgICAgICAgICAgICBjaGFpbklkOiBpZCxcbiAgICAgICAgICAgICAgY2hhaW5OYW1lOiBjaGFpbi5uYW1lLFxuICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeTogY2hhaW4ubmF0aXZlQ3VycmVuY3ksXG4gICAgICAgICAgICAgIHJwY1VybHM6IGNoYWluLnJwYyxcbiAgICAgICAgICAgICAgYmxvY2tFeHBsb3JlclVybHM6IHRoaXMuZ2V0QmxvY2tFeHBsb3JlclVybHMoY2hhaW4pXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjaGFpbjtcbiAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcbiAgICAgICAgICBpZiAoX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCh0aGlzLCBfaXNVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IsIF9pc1VzZXJSZWplY3RlZFJlcXVlc3RFcnJvcjIpLmNhbGwodGhpcywgYWRkRXJyb3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yKGFkZEVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEFkZENoYWluRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKF9jbGFzc1ByaXZhdGVNZXRob2RHZXQodGhpcywgX2lzVXNlclJlamVjdGVkUmVxdWVzdEVycm9yLCBfaXNVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IyKS5jYWxsKHRoaXMsIGVycm9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBTd2l0Y2hDaGFpbkVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgc2V0dXBMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB0aGlzLmdldFByb3ZpZGVyKCk7XG4gICAgcHJvdmlkZXIub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgdGhpcy5vbkFjY291bnRzQ2hhbmdlZCk7XG4gICAgcHJvdmlkZXIub24oXCJjaGFpbkNoYW5nZWRcIiwgdGhpcy5vbkNoYWluQ2hhbmdlZCk7XG4gICAgcHJvdmlkZXIub24oXCJkaXNjb25uZWN0XCIsIHRoaXMub25EaXNjb25uZWN0KTtcbiAgfVxuICBhc3luYyBnZXRRclVybCgpIHtcbiAgICBhd2FpdCB0aGlzLmdldFByb3ZpZGVyKCk7XG4gICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2NsaWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvaW5iYXNlIFdhbGxldCBTREsgbm90IGluaXRpYWxpemVkXCIpO1xuICAgIH1cbiAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9jbGllbnQpLmdldFFyVXJsKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9pc1VzZXJSZWplY3RlZFJlcXVlc3RFcnJvcjIoZXJyb3IpIHtcbiAgcmV0dXJuIC8odXNlciByZWplY3RlZCkvaS50ZXN0KGVycm9yLm1lc3NhZ2UpO1xufVxuXG5leHBvcnQgeyBDb2luYmFzZVdhbGxldENvbm5lY3RvciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9