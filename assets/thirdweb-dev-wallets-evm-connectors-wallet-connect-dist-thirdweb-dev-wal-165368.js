"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_wallets_evm_connectors_wallet-connect_dist_thirdweb-dev-wal-165368"],{

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

/***/ "./node_modules/@thirdweb-dev/wallets/evm/connectors/wallet-connect/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect.browser.esm.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/wallets/evm/connectors/wallet-connect/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect.browser.esm.js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletConnectConnector: () => (/* binding */ WalletConnectConnector)
/* harmony export */ });
/* harmony import */ var _dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/classPrivateMethodGet-ea199cc3.browser.esm.js");
/* harmony import */ var _dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/classPrivateFieldSet-a5db7c83.browser.esm.js");
/* harmony import */ var _dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../dist/defineProperty-c8ecdc07.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/defineProperty-c8ecdc07.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/address/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/providers/lib.esm/web3-provider.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _dist_walletIds_1ea97411_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../dist/walletIds-1ea97411.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/walletIds-1ea97411.browser.esm.js");
/* harmony import */ var _dist_WagmiConnector_60b19604_browser_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../dist/WagmiConnector-60b19604.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/WagmiConnector-60b19604.browser.esm.js");
/* harmony import */ var _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../dist/errors-105ad187.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/errors-105ad187.browser.esm.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.mjs");










const NAMESPACE = "eip155";
const REQUESTED_CHAINS_KEY = "wagmi.requestedChains";
const ADD_ETH_CHAIN_METHOD = "wallet_addEthereumChain";
const LAST_USED_CHAIN_ID = "last-used-chain-id";
var _provider = /*#__PURE__*/new WeakMap();
var _initProviderPromise = /*#__PURE__*/new WeakMap();
var _storage = /*#__PURE__*/new WeakMap();
var _createProvider = /*#__PURE__*/new WeakSet();
var _initProvider = /*#__PURE__*/new WeakSet();
var _isChainsStale = /*#__PURE__*/new WeakSet();
var _removeListeners = /*#__PURE__*/new WeakSet();
var _setRequestedChainsIds = /*#__PURE__*/new WeakSet();
var _getRequestedChainsIds = /*#__PURE__*/new WeakSet();
var _getNamespaceChainsIds = /*#__PURE__*/new WeakSet();
var _getNamespaceMethods = /*#__PURE__*/new WeakSet();
class WalletConnectConnector extends _dist_WagmiConnector_60b19604_browser_esm_js__WEBPACK_IMPORTED_MODULE_1__.W {
  constructor(config) {
    super({
      ...config,
      options: {
        isNewChainsStale: true,
        ...config.options
      }
    });
    (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, _getNamespaceMethods);
    (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, _getNamespaceChainsIds);
    (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, _getRequestedChainsIds);
    (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, _setRequestedChainsIds);
    (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, _removeListeners);
    /**
     * Checks if the target chains match the chains that were
     * initially requested by the connector for the WalletConnect session.
     * If there is a mismatch, this means that the chains on the connector
     * are considered stale, and need to be revalidated at a later point (via
     * connection).
     *
     * There may be a scenario where a dapp adds a chain to the
     * connector later on, however, this chain will not have been approved or rejected
     * by the wallet. In this case, the chain is considered stale.
     *
     * There are exceptions however:
     * -  If the wallet supports dynamic chain addition via `eth_addEthereumChain`,
     *    then the chain is not considered stale.
     * -  If the `isNewChainsStale` flag is falsy on the connector, then the chain is
     *    not considered stale.
     *
     * For the above cases, chain validation occurs dynamically when the user
     * attempts to switch chain.
     *
     * Also check that dapp supports at least 1 chain from previously approved session.
     */
    (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, _isChainsStale);
    (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, _initProvider);
    (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, _createProvider);
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "id", _dist_walletIds_1ea97411_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__.w.walletConnect);
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "name", "WalletConnect");
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "ready", true);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__._)(this, _provider, {
      writable: true,
      value: void 0
    });
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__._)(this, _initProviderPromise, {
      writable: true,
      value: void 0
    });
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__._)(this, _storage, {
      writable: true,
      value: void 0
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
      const id = Number(chainId);
      const unsupported = this.isChainUnsupported(id);
      (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _storage).setItem(LAST_USED_CHAIN_ID, String(chainId));
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onDisconnect", () => {
      (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _setRequestedChainsIds, _setRequestedChainsIds2).call(this, []);
      (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _storage).removeItem(LAST_USED_CHAIN_ID);
      this.emit("disconnect");
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onDisplayUri", uri => {
      this.emit("message", {
        type: "display_uri",
        data: uri
      });
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onConnect", () => {
      this.emit("connect", {
        provider: (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider)
      });
    });
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.a)(this, _storage, config.options.storage);
    (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _createProvider, _createProvider2).call(this);
  }
  async connect() {
    let {
      chainId: chainIdP,
      pairingTopic
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      let targetChainId = chainIdP;
      if (!targetChainId) {
        const lastUsedChainIdStr = await (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _storage).getItem(LAST_USED_CHAIN_ID);
        const lastUsedChainId = lastUsedChainIdStr ? parseInt(lastUsedChainIdStr) : undefined;
        if (lastUsedChainId && !this.isChainUnsupported(lastUsedChainId)) {
          targetChainId = lastUsedChainId;
        } else {
          targetChainId = this.chains[0]?.chainId;
        }
      }
      if (!targetChainId) {
        throw new Error("No chains found on connector.");
      }
      const provider = await this.getProvider();
      this.setupListeners();
      const isChainsStale = await (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _isChainsStale, _isChainsStale2).call(this);

      // If there is an active session with stale chains, disconnect the current session.
      if (provider.session && isChainsStale) {
        await provider.disconnect();
      }

      // If there no active session, or the chains are stale, connect.
      if (!provider.session || isChainsStale) {
        const optionalChains = this.chains.filter(chain => chain.chainId !== targetChainId).map(optionalChain => optionalChain.chainId);
        this.emit("message", {
          type: "connecting"
        });
        await provider.connect({
          pairingTopic,
          chains: [targetChainId],
          optionalChains: optionalChains.length > 0 ? optionalChains : [targetChainId]
        });
        (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _setRequestedChainsIds, _setRequestedChainsIds2).call(this, this.chains.map(_ref => {
          let {
            chainId
          } = _ref;
          return chainId;
        }));
      }

      // If session exists and chains are authorized, enable provider for required chain
      const accounts = await provider.enable();
      if (accounts.length === 0) {
        throw new Error("No accounts found on provider.");
      }
      const account = ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(accounts[0]);
      const id = await this.getChainId();
      const unsupported = this.isChainUnsupported(id);
      return {
        account,
        chain: {
          id,
          unsupported
        },
        provider: new ethers__WEBPACK_IMPORTED_MODULE_7__.Web3Provider(provider)
      };
    } catch (error) {
      if (/user rejected/i.test(error?.message)) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.U(error);
      }
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    try {
      await provider.disconnect();
    } catch (error) {
      if (!/No matching key/i.test(error.message)) {
        throw error;
      }
    } finally {
      (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _removeListeners, _removeListeners2).call(this);
      (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _setRequestedChainsIds, _setRequestedChainsIds2).call(this, []);
    }
  }
  async getAccount() {
    const {
      accounts
    } = await this.getProvider();
    if (accounts.length === 0) {
      throw new Error("No accounts found on provider.");
    }
    return ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(accounts[0]);
  }
  async getChainId() {
    const {
      chainId
    } = await this.getProvider();
    return chainId;
  }
  async getProvider() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider)) {
      await (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _createProvider, _createProvider2).call(this);
    }
    if (chainId) {
      await this.switchChain(chainId);
    }
    if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider)) {
      throw new Error("No provider found.");
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
    return new ethers__WEBPACK_IMPORTED_MODULE_7__.Web3Provider(provider, chainId).getSigner(account);
  }
  async isAuthorized() {
    try {
      const [account, provider] = await Promise.all([this.getAccount(), this.getProvider()]);
      const isChainsStale = await (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _isChainsStale, _isChainsStale2).call(this);

      // If an account does not exist on the session, then the connector is unauthorized.
      if (!account) {
        return false;
      }

      // If the chains are stale on the session, then the connector is unauthorized.
      if (isChainsStale && provider.session) {
        try {
          await provider.disconnect();
        } catch {} // eslint-disable-line no-empty
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    const chain = this.chains.find(chain_ => chain_.chainId === chainId);
    if (!chain) {
      throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.S(new Error("chain not found on connector."));
    }
    try {
      const provider = await this.getProvider();
      const namespaceChains = (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _getNamespaceChainsIds, _getNamespaceChainsIds2).call(this);
      const namespaceMethods = (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _getNamespaceMethods, _getNamespaceMethods2).call(this);
      const isChainApproved = namespaceChains.includes(chainId);
      if (!isChainApproved && namespaceMethods.includes(ADD_ETH_CHAIN_METHOD)) {
        await provider.request({
          method: ADD_ETH_CHAIN_METHOD,
          params: [{
            chainId: ethers__WEBPACK_IMPORTED_MODULE_9__.hexValue(chain.chainId),
            blockExplorerUrls: [chain.explorers?.length ? chain.explorers[0] : undefined],
            chainName: chain.name,
            nativeCurrency: chain.nativeCurrency,
            rpcUrls: [...chain.rpc]
          }]
        });
        const requestedChains = await (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _getRequestedChainsIds, _getRequestedChainsIds2).call(this);
        requestedChains.push(chainId);
        (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _setRequestedChainsIds, _setRequestedChainsIds2).call(this, requestedChains);
      }
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: ethers__WEBPACK_IMPORTED_MODULE_9__.hexValue(chainId)
        }]
      });
      return chain;
    } catch (error) {
      const message = typeof error === "string" ? error : error?.message;
      if (/user rejected request/i.test(message)) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.U(error);
      }
      throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.S(error);
    }
  }
  async setupListeners() {
    if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider)) {
      return;
    }
    (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _removeListeners, _removeListeners2).call(this);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).on("accountsChanged", this.onAccountsChanged);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).on("chainChanged", this.onChainChanged);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).on("disconnect", this.onDisconnect);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).on("session_delete", this.onDisconnect);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).on("display_uri", this.onDisplayUri);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).on("connect", this.onConnect);
  }
}
async function _createProvider2() {
  if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _initProviderPromise) && "object" !== "undefined") {
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.a)(this, _initProviderPromise, (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _initProvider, _initProvider2).call(this));
  }
  return (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _initProviderPromise);
}
async function _initProvider2() {
  const {
    default: EthereumProvider,
    OPTIONAL_EVENTS,
    OPTIONAL_METHODS
  } = await __webpack_require__.e(/*! import() */ "vendors-node_modules_walletconnect_ethereum-provider_dist_index_es_js").then(__webpack_require__.bind(__webpack_require__, /*! @walletconnect/ethereum-provider */ "./node_modules/@walletconnect/ethereum-provider/dist/index.es.js"));
  const [defaultChain, ...optionalChains] = this.chains.map(_ref2 => {
    let {
      chainId
    } = _ref2;
    return chainId;
  });
  if (defaultChain) {
    // EthereumProvider populates & deduplicates required methods and events internally
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.a)(this, _provider, await EthereumProvider.init({
      showQrModal: this.options.qrcode !== false,
      projectId: this.options.projectId,
      optionalMethods: OPTIONAL_METHODS,
      optionalEvents: OPTIONAL_EVENTS,
      chains: [defaultChain],
      optionalChains: optionalChains,
      metadata: {
        name: this.options.dappMetadata.name,
        description: this.options.dappMetadata.description || "",
        url: this.options.dappMetadata.url,
        icons: [this.options.dappMetadata.logoUrl || ""]
      },
      rpcMap: Object.fromEntries(this.chains.map(chain => [chain.chainId, chain.rpc[0]])),
      qrModalOptions: {
        ...this.options.qrModalOptions,
        explorerAllowList: [],
        explorerDenyList: []
      }
    }));
  }
}
async function _isChainsStale2() {
  const namespaceMethods = (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _getNamespaceMethods, _getNamespaceMethods2).call(this);
  if (namespaceMethods.includes(ADD_ETH_CHAIN_METHOD)) {
    return false;
  }
  if (!this.options.isNewChainsStale) {
    return false;
  }
  const requestedChains = await (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _getRequestedChainsIds, _getRequestedChainsIds2).call(this);
  const connectorChains = this.chains.map(_ref3 => {
    let {
      chainId
    } = _ref3;
    return chainId;
  });
  const namespaceChains = (0,_dist_classPrivateMethodGet_ea199cc3_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, _getNamespaceChainsIds, _getNamespaceChainsIds2).call(this);
  if (namespaceChains.length && !namespaceChains.some(id => connectorChains.includes(id))) {
    return false;
  }
  return !connectorChains.every(id => requestedChains.includes(id));
}
function _removeListeners2() {
  if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider)) {
    return;
  }
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).removeListener("accountsChanged", this.onAccountsChanged);
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).removeListener("chainChanged", this.onChainChanged);
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).removeListener("disconnect", this.onDisconnect);
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).removeListener("session_delete", this.onDisconnect);
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).removeListener("display_uri", this.onDisplayUri);
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).removeListener("connect", this.onConnect);
}
function _setRequestedChainsIds2(chains) {
  (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _storage).setItem(REQUESTED_CHAINS_KEY, JSON.stringify(chains));
}
async function _getRequestedChainsIds2() {
  const data = await (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _storage).getItem(REQUESTED_CHAINS_KEY);
  return data ? JSON.parse(data) : [];
}
function _getNamespaceChainsIds2() {
  if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider)) {
    return [];
  }
  const chainIds = (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).session?.namespaces[NAMESPACE]?.chains?.map(chain => parseInt(chain.split(":")[1] || ""));
  return chainIds ?? [];
}
function _getNamespaceMethods2() {
  if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider)) {
    return [];
  }
  const methods = (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _provider).session?.namespaces[NAMESPACE]?.methods;
  return methods ?? [];
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXdhbGxldHMtZXZtLWNvbm5lY3RvcnMtd2FsbGV0LWNvbm5lY3QtZGlzdC10aGlyZHdlYi1kZXYtd2FsLTE2NTM2OC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdGO0FBQzNCO0FBQ1o7O0FBRXpDLDZCQUE2QixxREFBWTtBQUN6Qzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSwrREFBYTtBQUM1QjtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQixJQUFJLDBFQUFlO0FBQ25CLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDaUQ7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBFQUFlO0FBQ25CLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRUFBZTtBQUNuQixJQUFJLDBFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLG9CQUFvQixRQUFRLGtDQUFrQyxZQUFZO0FBQzFFLElBQUksMEVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLDBFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksMEVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSwwRUFBZTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRXFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0d0RDtBQUN5QjtBQUN6RTtBQUNyRDtBQUMwQztBQUNVO0FBQ3lCO0FBQ3pGO0FBQ1A7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywyRUFBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLHNGQUEyQjtBQUMvQixJQUFJLHNGQUEyQjtBQUMvQixJQUFJLHNGQUEyQjtBQUMvQixJQUFJLHNGQUEyQjtBQUMvQixJQUFJLHNGQUEyQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0ZBQTJCO0FBQy9CLElBQUksc0ZBQTJCO0FBQy9CLElBQUksc0ZBQTJCO0FBQy9CLElBQUksK0VBQWUsYUFBYSxzRUFBUztBQUN6QyxJQUFJLCtFQUFlO0FBQ25CLElBQUksK0VBQWU7QUFDbkIsSUFBSSxxRkFBMEI7QUFDOUI7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLHFGQUEwQjtBQUM5QjtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUkscUZBQTBCO0FBQzlCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSwrRUFBZTtBQUNuQjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsbUJBQW1CLDhDQUFnQjtBQUNuQyxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsSUFBSSwrRUFBZTtBQUNuQjtBQUNBO0FBQ0EsTUFBTSxxRkFBcUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSwrRUFBZTtBQUNuQixNQUFNLHNGQUFzQjtBQUM1QixNQUFNLHFGQUFxQjtBQUMzQjtBQUNBLEtBQUs7QUFDTCxJQUFJLCtFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSwrRUFBZTtBQUNuQjtBQUNBLGtCQUFrQixxRkFBcUI7QUFDdkMsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLHFGQUFxQjtBQUN6QixJQUFJLHNGQUFzQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxxRkFBcUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0ZBQXNCOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVEsc0ZBQXNCO0FBQzlCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsc0JBQXNCLGdEQUFzQjtBQUM1QztBQUNBLE1BQU07QUFDTjtBQUNBLGtCQUFrQixtRUFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sTUFBTSxzRkFBc0I7QUFDNUIsTUFBTSxzRkFBc0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhDQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLFNBQVMscUZBQXFCO0FBQzlCLFlBQVksc0ZBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxRkFBcUI7QUFDOUI7QUFDQTtBQUNBLFdBQVcscUZBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZUFBZSxnREFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0ZBQXNCOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsU0FBUztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1FQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0ZBQXNCO0FBQ3BELCtCQUErQixzRkFBc0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0Q0FBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Qsc0NBQXNDLHNGQUFzQjtBQUM1RDtBQUNBLFFBQVEsc0ZBQXNCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUFjO0FBQ2pDLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLGtCQUFrQixtRUFBd0I7QUFDMUM7QUFDQSxnQkFBZ0IsbUVBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUZBQXFCO0FBQzlCO0FBQ0E7QUFDQSxJQUFJLHNGQUFzQjtBQUMxQixJQUFJLHFGQUFxQjtBQUN6QixJQUFJLHFGQUFxQjtBQUN6QixJQUFJLHFGQUFxQjtBQUN6QixJQUFJLHFGQUFxQjtBQUN6QixJQUFJLHFGQUFxQjtBQUN6QixJQUFJLHFGQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFGQUFxQjtBQUM1QixJQUFJLHFGQUFxQiw2QkFBNkIsc0ZBQXNCO0FBQzVFO0FBQ0EsU0FBUyxxRkFBcUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxRQUFRLDhRQUEwQztBQUN0RDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUkscUZBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzRkFBc0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNGQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxHQUFHO0FBQ0gsMEJBQTBCLHNGQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFGQUFxQjtBQUM1QjtBQUNBO0FBQ0EsRUFBRSxxRkFBcUI7QUFDdkIsRUFBRSxxRkFBcUI7QUFDdkIsRUFBRSxxRkFBcUI7QUFDdkIsRUFBRSxxRkFBcUI7QUFDdkIsRUFBRSxxRkFBcUI7QUFDdkIsRUFBRSxxRkFBcUI7QUFDdkI7QUFDQTtBQUNBLEVBQUUscUZBQXFCO0FBQ3ZCO0FBQ0E7QUFDQSxxQkFBcUIscUZBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUZBQXFCO0FBQzVCO0FBQ0E7QUFDQSxtQkFBbUIscUZBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUZBQXFCO0FBQzVCO0FBQ0E7QUFDQSxrQkFBa0IscUZBQXFCO0FBQ3ZDO0FBQ0E7O0FBRWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHRoaXJkd2ViLWRldi93YWxsZXRzL2Rpc3QvV2FnbWlDb25uZWN0b3ItNjBiMTk2MDQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHRoaXJkd2ViLWRldi93YWxsZXRzL2Rpc3QvZXJyb3JzLTEwNWFkMTg3LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvd2FsbGV0cy9ldm0vY29ubmVjdG9ycy93YWxsZXQtY29ubmVjdC9kaXN0L3RoaXJkd2ViLWRldi13YWxsZXRzLWV2bS1jb25uZWN0b3JzLXdhbGxldC1jb25uZWN0LmJyb3dzZXIuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi9kZWZpbmVQcm9wZXJ0eS1jOGVjZGMwNy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0Q2hhaW5zIH0gZnJvbSAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcblxuY2xhc3MgV2FnbWlDb25uZWN0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKiogVW5pcXVlIGNvbm5lY3RvciBpZCAqL1xuXG4gIC8qKiBDb25uZWN0b3IgbmFtZSAqL1xuXG4gIC8qKiBDaGFpbnMgY29ubmVjdG9yIHN1cHBvcnRzICovXG5cbiAgLyoqIE9wdGlvbnMgdG8gdXNlIHdpdGggY29ubmVjdG9yICovXG5cbiAgLyoqIFdoZXRoZXIgY29ubmVjdG9yIGlzIHVzYWJsZSAqL1xuXG4gIGNvbnN0cnVjdG9yKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgY2hhaW5zID0gZGVmYXVsdENoYWlucyxcbiAgICAgIG9wdGlvbnNcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcigpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlkXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNoYWluc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9wdGlvbnNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZWFkeVwiLCB2b2lkIDApO1xuICAgIHRoaXMuY2hhaW5zID0gY2hhaW5zO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgZ2V0QmxvY2tFeHBsb3JlclVybHMoY2hhaW4pIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSBjaGFpbi5leHBsb3JlcnM/Lm1hcCh4ID0+IHgudXJsKSA/PyBbXTtcbiAgICByZXR1cm4gZXhwbG9yZXJzLmxlbmd0aCA+IDAgPyBleHBsb3JlcnMgOiB1bmRlZmluZWQ7XG4gIH1cbiAgaXNDaGFpblVuc3VwcG9ydGVkKGNoYWluSWQpIHtcbiAgICByZXR1cm4gIXRoaXMuY2hhaW5zLnNvbWUoeCA9PiB4LmNoYWluSWQgPT09IGNoYWluSWQpO1xuICB9XG4gIHVwZGF0ZUNoYWlucyhjaGFpbnMpIHtcbiAgICB0aGlzLmNoYWlucyA9IGNoYWlucztcbiAgfVxufVxuXG5leHBvcnQgeyBXYWdtaUNvbm5lY3RvciBhcyBXIH07XG4iLCJpbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSB9IGZyb20gJy4vZGVmaW5lUHJvcGVydHktYzhlY2RjMDcuYnJvd3Nlci5lc20uanMnO1xuXG4vKipcbiAqIEVycm9yIHN1YmNsYXNzIGltcGxlbWVudGluZyBKU09OIFJQQyAyLjAgZXJyb3JzIGFuZCBFdGhlcmV1bSBSUEMgZXJyb3JzIHBlciBFSVAtMTQ3NC5cbiAqIEBzZWUgaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xNDc0XG4gKi9cbmNsYXNzIFJwY0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvciggLyoqIEh1bWFuLXJlYWRhYmxlIHN0cmluZyAqL1xuICBtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2F1c2UsXG4gICAgICBjb2RlLFxuICAgICAgZGF0YVxuICAgIH0gPSBvcHRpb25zO1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjb2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImNvZGVcIiBtdXN0IGJlIGFuIGludGVnZXIuJyk7XG4gICAgfVxuICAgIGlmICghbWVzc2FnZSB8fCB0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIm1lc3NhZ2VcIiBtdXN0IGJlIGEgbm9uZW1wdHkgc3RyaW5nLicpO1xuICAgIH1cbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjYXVzZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvZGVcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkYXRhXCIsIHZvaWQgMCk7XG4gICAgdGhpcy5jYXVzZSA9IGNhdXNlO1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEVycm9yIHN1YmNsYXNzIGltcGxlbWVudGluZyBFdGhlcmV1bSBQcm92aWRlciBlcnJvcnMgcGVyIEVJUC0xMTkzLlxuICogQHNlZSBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTNcbiAqL1xuY2xhc3MgUHJvdmlkZXJScGNFcnJvciBleHRlbmRzIFJwY0Vycm9yIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBFdGhlcmV1bSBQcm92aWRlciBKU09OLVJQQyBlcnJvci5cbiAgICogYGNvZGVgIG11c3QgYmUgYW4gaW50ZWdlciBpbiB0aGUgMTAwMCA8PSA0OTk5IHJhbmdlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoIC8qKiBIdW1hbi1yZWFkYWJsZSBzdHJpbmcgKi9cbiAgbWVzc2FnZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhdXNlLFxuICAgICAgY29kZSxcbiAgICAgIGRhdGFcbiAgICB9ID0gb3B0aW9ucztcbiAgICBpZiAoIShOdW1iZXIuaXNJbnRlZ2VyKGNvZGUpICYmIGNvZGUgPj0gMTAwMCAmJiBjb2RlIDw9IDQ5OTkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiY29kZVwiIG11c3QgYmUgYW4gaW50ZWdlciBzdWNoIHRoYXQ6IDEwMDAgPD0gY29kZSA8PSA0OTk5Jyk7XG4gICAgfVxuICAgIHN1cGVyKG1lc3NhZ2UsIHtcbiAgICAgIGNhdXNlLFxuICAgICAgY29kZSxcbiAgICAgIGRhdGFcbiAgICB9KTtcbiAgfVxufVxuY2xhc3MgQWRkQ2hhaW5FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIFwiQWRkQ2hhaW5FcnJvclwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXNzYWdlXCIsIFwiRXJyb3IgYWRkaW5nIGNoYWluXCIpO1xuICB9XG59XG5jbGFzcyBDaGFpbk5vdENvbmZpZ3VyZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBjaGFpbklkLFxuICAgICAgY29ubmVjdG9ySWRcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcihgQ2hhaW4gXCIke2NoYWluSWR9XCIgbm90IGNvbmZpZ3VyZWQgZm9yIGNvbm5lY3RvciBcIiR7Y29ubmVjdG9ySWR9XCIuYCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCBcIkNoYWluTm90Q29uZmlndXJlZFwiKTtcbiAgfVxufVxuY2xhc3MgQ29ubmVjdG9yTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIFwiQ29ubmVjdG9yTm90Rm91bmRFcnJvclwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXNzYWdlXCIsIFwiQ29ubmVjdG9yIG5vdCBmb3VuZFwiKTtcbiAgfVxufVxuY2xhc3MgUmVzb3VyY2VVbmF2YWlsYWJsZUVycm9yIGV4dGVuZHMgUnBjRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihjYXVzZSkge1xuICAgIHN1cGVyKFwiUmVzb3VyY2UgdW5hdmFpbGFibGVcIiwge1xuICAgICAgY2F1c2UsXG4gICAgICBjb2RlOiAtMzIwMDJcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIFwiUmVzb3VyY2VVbmF2YWlsYWJsZVwiKTtcbiAgfVxufVxuY2xhc3MgU3dpdGNoQ2hhaW5FcnJvciBleHRlbmRzIFByb3ZpZGVyUnBjRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihjYXVzZSkge1xuICAgIHN1cGVyKFwiRXJyb3Igc3dpdGNoaW5nIGNoYWluXCIsIHtcbiAgICAgIGNhdXNlLFxuICAgICAgY29kZTogNDkwMlxuICAgIH0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5hbWVcIiwgXCJTd2l0Y2hDaGFpbkVycm9yXCIpO1xuICB9XG59XG5jbGFzcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgZXh0ZW5kcyBQcm92aWRlclJwY0Vycm9yIHtcbiAgY29uc3RydWN0b3IoY2F1c2UpIHtcbiAgICBzdXBlcihcIlVzZXIgcmVqZWN0ZWQgcmVxdWVzdFwiLCB7XG4gICAgICBjYXVzZSxcbiAgICAgIGNvZGU6IDQwMDFcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIFwiVXNlclJlamVjdGVkUmVxdWVzdEVycm9yXCIpO1xuICB9XG59XG5cbi8vIEV0aGVycyBkb2VzIG5vdCBoYXZlIGFuIGVycm9yIHR5cGUgc28gd2UgY2FuIHVzZSB0aGlzIGZvciBjYXN0aW5nXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZXRoZXJzLWlvL2V0aGVycy5qcy9ibG9iL21haW4vcGFja2FnZXMvbG9nZ2VyL3NyYy50cy9pbmRleC50cyNMMjY4XG5cbmV4cG9ydCB7IEFkZENoYWluRXJyb3IgYXMgQSwgQ2hhaW5Ob3RDb25maWd1cmVkRXJyb3IgYXMgQywgUHJvdmlkZXJScGNFcnJvciBhcyBQLCBSZXNvdXJjZVVuYXZhaWxhYmxlRXJyb3IgYXMgUiwgU3dpdGNoQ2hhaW5FcnJvciBhcyBTLCBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVSwgQ29ubmVjdG9yTm90Rm91bmRFcnJvciBhcyBhIH07XG4iLCJpbXBvcnQgeyBfIGFzIF9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYywgYSBhcyBfY2xhc3NQcml2YXRlTWV0aG9kR2V0IH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlzdC9jbGFzc1ByaXZhdGVNZXRob2RHZXQtZWExOTljYzMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgXyBhcyBfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYywgYiBhcyBfY2xhc3NQcml2YXRlRmllbGRHZXQsIGEgYXMgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlzdC9jbGFzc1ByaXZhdGVGaWVsZFNldC1hNWRiN2M4My5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSB9IGZyb20gJy4uLy4uLy4uLy4uL2Rpc3QvZGVmaW5lUHJvcGVydHktYzhlY2RjMDcuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgdXRpbHMsIHByb3ZpZGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyB3IGFzIHdhbGxldElkcyB9IGZyb20gJy4uLy4uLy4uLy4uL2Rpc3Qvd2FsbGV0SWRzLTFlYTk3NDExLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IFcgYXMgV2FnbWlDb25uZWN0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi9kaXN0L1dhZ21pQ29ubmVjdG9yLTYwYjE5NjA0LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IFUgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yLCBTIGFzIFN3aXRjaENoYWluRXJyb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9kaXN0L2Vycm9ycy0xMDVhZDE4Ny5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY2hhaW5zJztcbmltcG9ydCAnZXZlbnRlbWl0dGVyMyc7XG5cbmNvbnN0IE5BTUVTUEFDRSA9IFwiZWlwMTU1XCI7XG5jb25zdCBSRVFVRVNURURfQ0hBSU5TX0tFWSA9IFwid2FnbWkucmVxdWVzdGVkQ2hhaW5zXCI7XG5jb25zdCBBRERfRVRIX0NIQUlOX01FVEhPRCA9IFwid2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW5cIjtcbmNvbnN0IExBU1RfVVNFRF9DSEFJTl9JRCA9IFwibGFzdC11c2VkLWNoYWluLWlkXCI7XG52YXIgX3Byb3ZpZGVyID0gLyojX19QVVJFX18qL25ldyBXZWFrTWFwKCk7XG52YXIgX2luaXRQcm92aWRlclByb21pc2UgPSAvKiNfX1BVUkVfXyovbmV3IFdlYWtNYXAoKTtcbnZhciBfc3RvcmFnZSA9IC8qI19fUFVSRV9fKi9uZXcgV2Vha01hcCgpO1xudmFyIF9jcmVhdGVQcm92aWRlciA9IC8qI19fUFVSRV9fKi9uZXcgV2Vha1NldCgpO1xudmFyIF9pbml0UHJvdmlkZXIgPSAvKiNfX1BVUkVfXyovbmV3IFdlYWtTZXQoKTtcbnZhciBfaXNDaGFpbnNTdGFsZSA9IC8qI19fUFVSRV9fKi9uZXcgV2Vha1NldCgpO1xudmFyIF9yZW1vdmVMaXN0ZW5lcnMgPSAvKiNfX1BVUkVfXyovbmV3IFdlYWtTZXQoKTtcbnZhciBfc2V0UmVxdWVzdGVkQ2hhaW5zSWRzID0gLyojX19QVVJFX18qL25ldyBXZWFrU2V0KCk7XG52YXIgX2dldFJlcXVlc3RlZENoYWluc0lkcyA9IC8qI19fUFVSRV9fKi9uZXcgV2Vha1NldCgpO1xudmFyIF9nZXROYW1lc3BhY2VDaGFpbnNJZHMgPSAvKiNfX1BVUkVfXyovbmV3IFdlYWtTZXQoKTtcbnZhciBfZ2V0TmFtZXNwYWNlTWV0aG9kcyA9IC8qI19fUFVSRV9fKi9uZXcgV2Vha1NldCgpO1xuY2xhc3MgV2FsbGV0Q29ubmVjdENvbm5lY3RvciBleHRlbmRzIFdhZ21pQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBpc05ld0NoYWluc1N0YWxlOiB0cnVlLFxuICAgICAgICAuLi5jb25maWcub3B0aW9uc1xuICAgICAgfVxuICAgIH0pO1xuICAgIF9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyh0aGlzLCBfZ2V0TmFtZXNwYWNlTWV0aG9kcyk7XG4gICAgX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjKHRoaXMsIF9nZXROYW1lc3BhY2VDaGFpbnNJZHMpO1xuICAgIF9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyh0aGlzLCBfZ2V0UmVxdWVzdGVkQ2hhaW5zSWRzKTtcbiAgICBfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWModGhpcywgX3NldFJlcXVlc3RlZENoYWluc0lkcyk7XG4gICAgX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjKHRoaXMsIF9yZW1vdmVMaXN0ZW5lcnMpO1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgdGFyZ2V0IGNoYWlucyBtYXRjaCB0aGUgY2hhaW5zIHRoYXQgd2VyZVxuICAgICAqIGluaXRpYWxseSByZXF1ZXN0ZWQgYnkgdGhlIGNvbm5lY3RvciBmb3IgdGhlIFdhbGxldENvbm5lY3Qgc2Vzc2lvbi5cbiAgICAgKiBJZiB0aGVyZSBpcyBhIG1pc21hdGNoLCB0aGlzIG1lYW5zIHRoYXQgdGhlIGNoYWlucyBvbiB0aGUgY29ubmVjdG9yXG4gICAgICogYXJlIGNvbnNpZGVyZWQgc3RhbGUsIGFuZCBuZWVkIHRvIGJlIHJldmFsaWRhdGVkIGF0IGEgbGF0ZXIgcG9pbnQgKHZpYVxuICAgICAqIGNvbm5lY3Rpb24pLlxuICAgICAqXG4gICAgICogVGhlcmUgbWF5IGJlIGEgc2NlbmFyaW8gd2hlcmUgYSBkYXBwIGFkZHMgYSBjaGFpbiB0byB0aGVcbiAgICAgKiBjb25uZWN0b3IgbGF0ZXIgb24sIGhvd2V2ZXIsIHRoaXMgY2hhaW4gd2lsbCBub3QgaGF2ZSBiZWVuIGFwcHJvdmVkIG9yIHJlamVjdGVkXG4gICAgICogYnkgdGhlIHdhbGxldC4gSW4gdGhpcyBjYXNlLCB0aGUgY2hhaW4gaXMgY29uc2lkZXJlZCBzdGFsZS5cbiAgICAgKlxuICAgICAqIFRoZXJlIGFyZSBleGNlcHRpb25zIGhvd2V2ZXI6XG4gICAgICogLSAgSWYgdGhlIHdhbGxldCBzdXBwb3J0cyBkeW5hbWljIGNoYWluIGFkZGl0aW9uIHZpYSBgZXRoX2FkZEV0aGVyZXVtQ2hhaW5gLFxuICAgICAqICAgIHRoZW4gdGhlIGNoYWluIGlzIG5vdCBjb25zaWRlcmVkIHN0YWxlLlxuICAgICAqIC0gIElmIHRoZSBgaXNOZXdDaGFpbnNTdGFsZWAgZmxhZyBpcyBmYWxzeSBvbiB0aGUgY29ubmVjdG9yLCB0aGVuIHRoZSBjaGFpbiBpc1xuICAgICAqICAgIG5vdCBjb25zaWRlcmVkIHN0YWxlLlxuICAgICAqXG4gICAgICogRm9yIHRoZSBhYm92ZSBjYXNlcywgY2hhaW4gdmFsaWRhdGlvbiBvY2N1cnMgZHluYW1pY2FsbHkgd2hlbiB0aGUgdXNlclxuICAgICAqIGF0dGVtcHRzIHRvIHN3aXRjaCBjaGFpbi5cbiAgICAgKlxuICAgICAqIEFsc28gY2hlY2sgdGhhdCBkYXBwIHN1cHBvcnRzIGF0IGxlYXN0IDEgY2hhaW4gZnJvbSBwcmV2aW91c2x5IGFwcHJvdmVkIHNlc3Npb24uXG4gICAgICovXG4gICAgX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjKHRoaXMsIF9pc0NoYWluc1N0YWxlKTtcbiAgICBfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWModGhpcywgX2luaXRQcm92aWRlcik7XG4gICAgX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjKHRoaXMsIF9jcmVhdGVQcm92aWRlcik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaWRcIiwgd2FsbGV0SWRzLndhbGxldENvbm5lY3QpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5hbWVcIiwgXCJXYWxsZXRDb25uZWN0XCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJlYWR5XCIsIHRydWUpO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjKHRoaXMsIF9wcm92aWRlciwge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogdm9pZCAwXG4gICAgfSk7XG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWModGhpcywgX2luaXRQcm92aWRlclByb21pc2UsIHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IHZvaWQgMFxuICAgIH0pO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjKHRoaXMsIF9zdG9yYWdlLCB7XG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbkFjY291bnRzQ2hhbmdlZFwiLCBhY2NvdW50cyA9PiB7XG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuZW1pdChcImRpc2Nvbm5lY3RcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtaXQoXCJjaGFuZ2VcIiwge1xuICAgICAgICAgIGFjY291bnQ6IHV0aWxzLmdldEFkZHJlc3MoYWNjb3VudHNbMF0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uQ2hhaW5DaGFuZ2VkXCIsIGNoYWluSWQgPT4ge1xuICAgICAgY29uc3QgaWQgPSBOdW1iZXIoY2hhaW5JZCk7XG4gICAgICBjb25zdCB1bnN1cHBvcnRlZCA9IHRoaXMuaXNDaGFpblVuc3VwcG9ydGVkKGlkKTtcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc3RvcmFnZSkuc2V0SXRlbShMQVNUX1VTRURfQ0hBSU5fSUQsIFN0cmluZyhjaGFpbklkKSk7XG4gICAgICB0aGlzLmVtaXQoXCJjaGFuZ2VcIiwge1xuICAgICAgICBjaGFpbjoge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHVuc3VwcG9ydGVkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uRGlzY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICBfY2xhc3NQcml2YXRlTWV0aG9kR2V0KHRoaXMsIF9zZXRSZXF1ZXN0ZWRDaGFpbnNJZHMsIF9zZXRSZXF1ZXN0ZWRDaGFpbnNJZHMyKS5jYWxsKHRoaXMsIFtdKTtcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc3RvcmFnZSkucmVtb3ZlSXRlbShMQVNUX1VTRURfQ0hBSU5fSUQpO1xuICAgICAgdGhpcy5lbWl0KFwiZGlzY29ubmVjdFwiKTtcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbkRpc3BsYXlVcmlcIiwgdXJpID0+IHtcbiAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwge1xuICAgICAgICB0eXBlOiBcImRpc3BsYXlfdXJpXCIsXG4gICAgICAgIGRhdGE6IHVyaVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib25Db25uZWN0XCIsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdChcImNvbm5lY3RcIiwge1xuICAgICAgICBwcm92aWRlcjogX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcilcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc3RvcmFnZSwgY29uZmlnLm9wdGlvbnMuc3RvcmFnZSk7XG4gICAgX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCh0aGlzLCBfY3JlYXRlUHJvdmlkZXIsIF9jcmVhdGVQcm92aWRlcjIpLmNhbGwodGhpcyk7XG4gIH1cbiAgYXN5bmMgY29ubmVjdCgpIHtcbiAgICBsZXQge1xuICAgICAgY2hhaW5JZDogY2hhaW5JZFAsXG4gICAgICBwYWlyaW5nVG9waWNcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB0cnkge1xuICAgICAgbGV0IHRhcmdldENoYWluSWQgPSBjaGFpbklkUDtcbiAgICAgIGlmICghdGFyZ2V0Q2hhaW5JZCkge1xuICAgICAgICBjb25zdCBsYXN0VXNlZENoYWluSWRTdHIgPSBhd2FpdCBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3N0b3JhZ2UpLmdldEl0ZW0oTEFTVF9VU0VEX0NIQUlOX0lEKTtcbiAgICAgICAgY29uc3QgbGFzdFVzZWRDaGFpbklkID0gbGFzdFVzZWRDaGFpbklkU3RyID8gcGFyc2VJbnQobGFzdFVzZWRDaGFpbklkU3RyKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGxhc3RVc2VkQ2hhaW5JZCAmJiAhdGhpcy5pc0NoYWluVW5zdXBwb3J0ZWQobGFzdFVzZWRDaGFpbklkKSkge1xuICAgICAgICAgIHRhcmdldENoYWluSWQgPSBsYXN0VXNlZENoYWluSWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0Q2hhaW5JZCA9IHRoaXMuY2hhaW5zWzBdPy5jaGFpbklkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXRhcmdldENoYWluSWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2hhaW5zIGZvdW5kIG9uIGNvbm5lY3Rvci5cIik7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHRoaXMuZ2V0UHJvdmlkZXIoKTtcbiAgICAgIHRoaXMuc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgIGNvbnN0IGlzQ2hhaW5zU3RhbGUgPSBhd2FpdCBfY2xhc3NQcml2YXRlTWV0aG9kR2V0KHRoaXMsIF9pc0NoYWluc1N0YWxlLCBfaXNDaGFpbnNTdGFsZTIpLmNhbGwodGhpcyk7XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIGFuIGFjdGl2ZSBzZXNzaW9uIHdpdGggc3RhbGUgY2hhaW5zLCBkaXNjb25uZWN0IHRoZSBjdXJyZW50IHNlc3Npb24uXG4gICAgICBpZiAocHJvdmlkZXIuc2Vzc2lvbiAmJiBpc0NoYWluc1N0YWxlKSB7XG4gICAgICAgIGF3YWl0IHByb3ZpZGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlcmUgbm8gYWN0aXZlIHNlc3Npb24sIG9yIHRoZSBjaGFpbnMgYXJlIHN0YWxlLCBjb25uZWN0LlxuICAgICAgaWYgKCFwcm92aWRlci5zZXNzaW9uIHx8IGlzQ2hhaW5zU3RhbGUpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxDaGFpbnMgPSB0aGlzLmNoYWlucy5maWx0ZXIoY2hhaW4gPT4gY2hhaW4uY2hhaW5JZCAhPT0gdGFyZ2V0Q2hhaW5JZCkubWFwKG9wdGlvbmFsQ2hhaW4gPT4gb3B0aW9uYWxDaGFpbi5jaGFpbklkKTtcbiAgICAgICAgdGhpcy5lbWl0KFwibWVzc2FnZVwiLCB7XG4gICAgICAgICAgdHlwZTogXCJjb25uZWN0aW5nXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHByb3ZpZGVyLmNvbm5lY3Qoe1xuICAgICAgICAgIHBhaXJpbmdUb3BpYyxcbiAgICAgICAgICBjaGFpbnM6IFt0YXJnZXRDaGFpbklkXSxcbiAgICAgICAgICBvcHRpb25hbENoYWluczogb3B0aW9uYWxDaGFpbnMubGVuZ3RoID4gMCA/IG9wdGlvbmFsQ2hhaW5zIDogW3RhcmdldENoYWluSWRdXG4gICAgICAgIH0pO1xuICAgICAgICBfY2xhc3NQcml2YXRlTWV0aG9kR2V0KHRoaXMsIF9zZXRSZXF1ZXN0ZWRDaGFpbnNJZHMsIF9zZXRSZXF1ZXN0ZWRDaGFpbnNJZHMyKS5jYWxsKHRoaXMsIHRoaXMuY2hhaW5zLm1hcChfcmVmID0+IHtcbiAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgY2hhaW5JZFxuICAgICAgICAgIH0gPSBfcmVmO1xuICAgICAgICAgIHJldHVybiBjaGFpbklkO1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHNlc3Npb24gZXhpc3RzIGFuZCBjaGFpbnMgYXJlIGF1dGhvcml6ZWQsIGVuYWJsZSBwcm92aWRlciBmb3IgcmVxdWlyZWQgY2hhaW5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgcHJvdmlkZXIuZW5hYmxlKCk7XG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFjY291bnRzIGZvdW5kIG9uIHByb3ZpZGVyLlwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjY291bnQgPSB1dGlscy5nZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5nZXRDaGFpbklkKCk7XG4gICAgICBjb25zdCB1bnN1cHBvcnRlZCA9IHRoaXMuaXNDaGFpblVuc3VwcG9ydGVkKGlkKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjY291bnQsXG4gICAgICAgIGNoYWluOiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdW5zdXBwb3J0ZWRcbiAgICAgICAgfSxcbiAgICAgICAgcHJvdmlkZXI6IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKC91c2VyIHJlamVjdGVkL2kudGVzdChlcnJvcj8ubWVzc2FnZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZGlzY29ubmVjdCgpIHtcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHRoaXMuZ2V0UHJvdmlkZXIoKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcHJvdmlkZXIuZGlzY29ubmVjdCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoIS9ObyBtYXRjaGluZyBrZXkvaS50ZXN0KGVycm9yLm1lc3NhZ2UpKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBfY2xhc3NQcml2YXRlTWV0aG9kR2V0KHRoaXMsIF9yZW1vdmVMaXN0ZW5lcnMsIF9yZW1vdmVMaXN0ZW5lcnMyKS5jYWxsKHRoaXMpO1xuICAgICAgX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCh0aGlzLCBfc2V0UmVxdWVzdGVkQ2hhaW5zSWRzLCBfc2V0UmVxdWVzdGVkQ2hhaW5zSWRzMikuY2FsbCh0aGlzLCBbXSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGdldEFjY291bnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWNjb3VudHNcbiAgICB9ID0gYXdhaXQgdGhpcy5nZXRQcm92aWRlcigpO1xuICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFjY291bnRzIGZvdW5kIG9uIHByb3ZpZGVyLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHV0aWxzLmdldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICB9XG4gIGFzeW5jIGdldENoYWluSWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hhaW5JZFxuICAgIH0gPSBhd2FpdCB0aGlzLmdldFByb3ZpZGVyKCk7XG4gICAgcmV0dXJuIGNoYWluSWQ7XG4gIH1cbiAgYXN5bmMgZ2V0UHJvdmlkZXIoKSB7XG4gICAgbGV0IHtcbiAgICAgIGNoYWluSWRcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpKSB7XG4gICAgICBhd2FpdCBfY2xhc3NQcml2YXRlTWV0aG9kR2V0KHRoaXMsIF9jcmVhdGVQcm92aWRlciwgX2NyZWF0ZVByb3ZpZGVyMikuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYWluSWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuc3dpdGNoQ2hhaW4oY2hhaW5JZCk7XG4gICAgfVxuICAgIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHByb3ZpZGVyIGZvdW5kLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpO1xuICB9XG4gIGFzeW5jIGdldFNpZ25lcigpIHtcbiAgICBsZXQge1xuICAgICAgY2hhaW5JZFxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGNvbnN0IFtwcm92aWRlciwgYWNjb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5nZXRQcm92aWRlcih7XG4gICAgICBjaGFpbklkXG4gICAgfSksIHRoaXMuZ2V0QWNjb3VudCgpXSk7XG4gICAgcmV0dXJuIG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyLCBjaGFpbklkKS5nZXRTaWduZXIoYWNjb3VudCk7XG4gIH1cbiAgYXN5bmMgaXNBdXRob3JpemVkKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBbYWNjb3VudCwgcHJvdmlkZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuZ2V0QWNjb3VudCgpLCB0aGlzLmdldFByb3ZpZGVyKCldKTtcbiAgICAgIGNvbnN0IGlzQ2hhaW5zU3RhbGUgPSBhd2FpdCBfY2xhc3NQcml2YXRlTWV0aG9kR2V0KHRoaXMsIF9pc0NoYWluc1N0YWxlLCBfaXNDaGFpbnNTdGFsZTIpLmNhbGwodGhpcyk7XG5cbiAgICAgIC8vIElmIGFuIGFjY291bnQgZG9lcyBub3QgZXhpc3Qgb24gdGhlIHNlc3Npb24sIHRoZW4gdGhlIGNvbm5lY3RvciBpcyB1bmF1dGhvcml6ZWQuXG4gICAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgY2hhaW5zIGFyZSBzdGFsZSBvbiB0aGUgc2Vzc2lvbiwgdGhlbiB0aGUgY29ubmVjdG9yIGlzIHVuYXV0aG9yaXplZC5cbiAgICAgIGlmIChpc0NoYWluc1N0YWxlICYmIHByb3ZpZGVyLnNlc3Npb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBwcm92aWRlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0gY2F0Y2gge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgc3dpdGNoQ2hhaW4oY2hhaW5JZCkge1xuICAgIGNvbnN0IGNoYWluID0gdGhpcy5jaGFpbnMuZmluZChjaGFpbl8gPT4gY2hhaW5fLmNoYWluSWQgPT09IGNoYWluSWQpO1xuICAgIGlmICghY2hhaW4pIHtcbiAgICAgIHRocm93IG5ldyBTd2l0Y2hDaGFpbkVycm9yKG5ldyBFcnJvcihcImNoYWluIG5vdCBmb3VuZCBvbiBjb25uZWN0b3IuXCIpKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdGhpcy5nZXRQcm92aWRlcigpO1xuICAgICAgY29uc3QgbmFtZXNwYWNlQ2hhaW5zID0gX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCh0aGlzLCBfZ2V0TmFtZXNwYWNlQ2hhaW5zSWRzLCBfZ2V0TmFtZXNwYWNlQ2hhaW5zSWRzMikuY2FsbCh0aGlzKTtcbiAgICAgIGNvbnN0IG5hbWVzcGFjZU1ldGhvZHMgPSBfY2xhc3NQcml2YXRlTWV0aG9kR2V0KHRoaXMsIF9nZXROYW1lc3BhY2VNZXRob2RzLCBfZ2V0TmFtZXNwYWNlTWV0aG9kczIpLmNhbGwodGhpcyk7XG4gICAgICBjb25zdCBpc0NoYWluQXBwcm92ZWQgPSBuYW1lc3BhY2VDaGFpbnMuaW5jbHVkZXMoY2hhaW5JZCk7XG4gICAgICBpZiAoIWlzQ2hhaW5BcHByb3ZlZCAmJiBuYW1lc3BhY2VNZXRob2RzLmluY2x1ZGVzKEFERF9FVEhfQ0hBSU5fTUVUSE9EKSkge1xuICAgICAgICBhd2FpdCBwcm92aWRlci5yZXF1ZXN0KHtcbiAgICAgICAgICBtZXRob2Q6IEFERF9FVEhfQ0hBSU5fTUVUSE9ELFxuICAgICAgICAgIHBhcmFtczogW3tcbiAgICAgICAgICAgIGNoYWluSWQ6IHV0aWxzLmhleFZhbHVlKGNoYWluLmNoYWluSWQpLFxuICAgICAgICAgICAgYmxvY2tFeHBsb3JlclVybHM6IFtjaGFpbi5leHBsb3JlcnM/Lmxlbmd0aCA/IGNoYWluLmV4cGxvcmVyc1swXSA6IHVuZGVmaW5lZF0sXG4gICAgICAgICAgICBjaGFpbk5hbWU6IGNoYWluLm5hbWUsXG4gICAgICAgICAgICBuYXRpdmVDdXJyZW5jeTogY2hhaW4ubmF0aXZlQ3VycmVuY3ksXG4gICAgICAgICAgICBycGNVcmxzOiBbLi4uY2hhaW4ucnBjXVxuICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXF1ZXN0ZWRDaGFpbnMgPSBhd2FpdCBfY2xhc3NQcml2YXRlTWV0aG9kR2V0KHRoaXMsIF9nZXRSZXF1ZXN0ZWRDaGFpbnNJZHMsIF9nZXRSZXF1ZXN0ZWRDaGFpbnNJZHMyKS5jYWxsKHRoaXMpO1xuICAgICAgICByZXF1ZXN0ZWRDaGFpbnMucHVzaChjaGFpbklkKTtcbiAgICAgICAgX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCh0aGlzLCBfc2V0UmVxdWVzdGVkQ2hhaW5zSWRzLCBfc2V0UmVxdWVzdGVkQ2hhaW5zSWRzMikuY2FsbCh0aGlzLCByZXF1ZXN0ZWRDaGFpbnMpO1xuICAgICAgfVxuICAgICAgYXdhaXQgcHJvdmlkZXIucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJ3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpblwiLFxuICAgICAgICBwYXJhbXM6IFt7XG4gICAgICAgICAgY2hhaW5JZDogdXRpbHMuaGV4VmFsdWUoY2hhaW5JZClcbiAgICAgICAgfV1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNoYWluO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gdHlwZW9mIGVycm9yID09PSBcInN0cmluZ1wiID8gZXJyb3IgOiBlcnJvcj8ubWVzc2FnZTtcbiAgICAgIGlmICgvdXNlciByZWplY3RlZCByZXF1ZXN0L2kudGVzdChtZXNzYWdlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBTd2l0Y2hDaGFpbkVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgc2V0dXBMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Byb3ZpZGVyKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfY2xhc3NQcml2YXRlTWV0aG9kR2V0KHRoaXMsIF9yZW1vdmVMaXN0ZW5lcnMsIF9yZW1vdmVMaXN0ZW5lcnMyKS5jYWxsKHRoaXMpO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpLm9uKFwiYWNjb3VudHNDaGFuZ2VkXCIsIHRoaXMub25BY2NvdW50c0NoYW5nZWQpO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIHRoaXMub25DaGFpbkNoYW5nZWQpO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpLm9uKFwiZGlzY29ubmVjdFwiLCB0aGlzLm9uRGlzY29ubmVjdCk7XG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikub24oXCJzZXNzaW9uX2RlbGV0ZVwiLCB0aGlzLm9uRGlzY29ubmVjdCk7XG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikub24oXCJkaXNwbGF5X3VyaVwiLCB0aGlzLm9uRGlzcGxheVVyaSk7XG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikub24oXCJjb25uZWN0XCIsIHRoaXMub25Db25uZWN0KTtcbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gX2NyZWF0ZVByb3ZpZGVyMigpIHtcbiAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luaXRQcm92aWRlclByb21pc2UpICYmIFwib2JqZWN0XCIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX2luaXRQcm92aWRlclByb21pc2UsIF9jbGFzc1ByaXZhdGVNZXRob2RHZXQodGhpcywgX2luaXRQcm92aWRlciwgX2luaXRQcm92aWRlcjIpLmNhbGwodGhpcykpO1xuICB9XG4gIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luaXRQcm92aWRlclByb21pc2UpO1xufVxuYXN5bmMgZnVuY3Rpb24gX2luaXRQcm92aWRlcjIoKSB7XG4gIGNvbnN0IHtcbiAgICBkZWZhdWx0OiBFdGhlcmV1bVByb3ZpZGVyLFxuICAgIE9QVElPTkFMX0VWRU5UUyxcbiAgICBPUFRJT05BTF9NRVRIT0RTXG4gIH0gPSBhd2FpdCBpbXBvcnQoJ0B3YWxsZXRjb25uZWN0L2V0aGVyZXVtLXByb3ZpZGVyJyk7XG4gIGNvbnN0IFtkZWZhdWx0Q2hhaW4sIC4uLm9wdGlvbmFsQ2hhaW5zXSA9IHRoaXMuY2hhaW5zLm1hcChfcmVmMiA9PiB7XG4gICAgbGV0IHtcbiAgICAgIGNoYWluSWRcbiAgICB9ID0gX3JlZjI7XG4gICAgcmV0dXJuIGNoYWluSWQ7XG4gIH0pO1xuICBpZiAoZGVmYXVsdENoYWluKSB7XG4gICAgLy8gRXRoZXJldW1Qcm92aWRlciBwb3B1bGF0ZXMgJiBkZWR1cGxpY2F0ZXMgcmVxdWlyZWQgbWV0aG9kcyBhbmQgZXZlbnRzIGludGVybmFsbHlcbiAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3Byb3ZpZGVyLCBhd2FpdCBFdGhlcmV1bVByb3ZpZGVyLmluaXQoe1xuICAgICAgc2hvd1FyTW9kYWw6IHRoaXMub3B0aW9ucy5xcmNvZGUgIT09IGZhbHNlLFxuICAgICAgcHJvamVjdElkOiB0aGlzLm9wdGlvbnMucHJvamVjdElkLFxuICAgICAgb3B0aW9uYWxNZXRob2RzOiBPUFRJT05BTF9NRVRIT0RTLFxuICAgICAgb3B0aW9uYWxFdmVudHM6IE9QVElPTkFMX0VWRU5UUyxcbiAgICAgIGNoYWluczogW2RlZmF1bHRDaGFpbl0sXG4gICAgICBvcHRpb25hbENoYWluczogb3B0aW9uYWxDaGFpbnMsXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBuYW1lOiB0aGlzLm9wdGlvbnMuZGFwcE1ldGFkYXRhLm5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLm9wdGlvbnMuZGFwcE1ldGFkYXRhLmRlc2NyaXB0aW9uIHx8IFwiXCIsXG4gICAgICAgIHVybDogdGhpcy5vcHRpb25zLmRhcHBNZXRhZGF0YS51cmwsXG4gICAgICAgIGljb25zOiBbdGhpcy5vcHRpb25zLmRhcHBNZXRhZGF0YS5sb2dvVXJsIHx8IFwiXCJdXG4gICAgICB9LFxuICAgICAgcnBjTWFwOiBPYmplY3QuZnJvbUVudHJpZXModGhpcy5jaGFpbnMubWFwKGNoYWluID0+IFtjaGFpbi5jaGFpbklkLCBjaGFpbi5ycGNbMF1dKSksXG4gICAgICBxck1vZGFsT3B0aW9uczoge1xuICAgICAgICAuLi50aGlzLm9wdGlvbnMucXJNb2RhbE9wdGlvbnMsXG4gICAgICAgIGV4cGxvcmVyQWxsb3dMaXN0OiBbXSxcbiAgICAgICAgZXhwbG9yZXJEZW55TGlzdDogW11cbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIF9pc0NoYWluc1N0YWxlMigpIHtcbiAgY29uc3QgbmFtZXNwYWNlTWV0aG9kcyA9IF9jbGFzc1ByaXZhdGVNZXRob2RHZXQodGhpcywgX2dldE5hbWVzcGFjZU1ldGhvZHMsIF9nZXROYW1lc3BhY2VNZXRob2RzMikuY2FsbCh0aGlzKTtcbiAgaWYgKG5hbWVzcGFjZU1ldGhvZHMuaW5jbHVkZXMoQUREX0VUSF9DSEFJTl9NRVRIT0QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICghdGhpcy5vcHRpb25zLmlzTmV3Q2hhaW5zU3RhbGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgcmVxdWVzdGVkQ2hhaW5zID0gYXdhaXQgX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCh0aGlzLCBfZ2V0UmVxdWVzdGVkQ2hhaW5zSWRzLCBfZ2V0UmVxdWVzdGVkQ2hhaW5zSWRzMikuY2FsbCh0aGlzKTtcbiAgY29uc3QgY29ubmVjdG9yQ2hhaW5zID0gdGhpcy5jaGFpbnMubWFwKF9yZWYzID0+IHtcbiAgICBsZXQge1xuICAgICAgY2hhaW5JZFxuICAgIH0gPSBfcmVmMztcbiAgICByZXR1cm4gY2hhaW5JZDtcbiAgfSk7XG4gIGNvbnN0IG5hbWVzcGFjZUNoYWlucyA9IF9jbGFzc1ByaXZhdGVNZXRob2RHZXQodGhpcywgX2dldE5hbWVzcGFjZUNoYWluc0lkcywgX2dldE5hbWVzcGFjZUNoYWluc0lkczIpLmNhbGwodGhpcyk7XG4gIGlmIChuYW1lc3BhY2VDaGFpbnMubGVuZ3RoICYmICFuYW1lc3BhY2VDaGFpbnMuc29tZShpZCA9PiBjb25uZWN0b3JDaGFpbnMuaW5jbHVkZXMoaWQpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gIWNvbm5lY3RvckNoYWlucy5ldmVyeShpZCA9PiByZXF1ZXN0ZWRDaGFpbnMuaW5jbHVkZXMoaWQpKTtcbn1cbmZ1bmN0aW9uIF9yZW1vdmVMaXN0ZW5lcnMyKCkge1xuICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpLnJlbW92ZUxpc3RlbmVyKFwiYWNjb3VudHNDaGFuZ2VkXCIsIHRoaXMub25BY2NvdW50c0NoYW5nZWQpO1xuICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Byb3ZpZGVyKS5yZW1vdmVMaXN0ZW5lcihcImNoYWluQ2hhbmdlZFwiLCB0aGlzLm9uQ2hhaW5DaGFuZ2VkKTtcbiAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikucmVtb3ZlTGlzdGVuZXIoXCJkaXNjb25uZWN0XCIsIHRoaXMub25EaXNjb25uZWN0KTtcbiAgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikucmVtb3ZlTGlzdGVuZXIoXCJzZXNzaW9uX2RlbGV0ZVwiLCB0aGlzLm9uRGlzY29ubmVjdCk7XG4gIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpLnJlbW92ZUxpc3RlbmVyKFwiZGlzcGxheV91cmlcIiwgdGhpcy5vbkRpc3BsYXlVcmkpO1xuICBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Byb3ZpZGVyKS5yZW1vdmVMaXN0ZW5lcihcImNvbm5lY3RcIiwgdGhpcy5vbkNvbm5lY3QpO1xufVxuZnVuY3Rpb24gX3NldFJlcXVlc3RlZENoYWluc0lkczIoY2hhaW5zKSB7XG4gIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc3RvcmFnZSkuc2V0SXRlbShSRVFVRVNURURfQ0hBSU5TX0tFWSwgSlNPTi5zdHJpbmdpZnkoY2hhaW5zKSk7XG59XG5hc3luYyBmdW5jdGlvbiBfZ2V0UmVxdWVzdGVkQ2hhaW5zSWRzMigpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc3RvcmFnZSkuZ2V0SXRlbShSRVFVRVNURURfQ0hBSU5TX0tFWSk7XG4gIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IFtdO1xufVxuZnVuY3Rpb24gX2dldE5hbWVzcGFjZUNoYWluc0lkczIoKSB7XG4gIGlmICghX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgY2hhaW5JZHMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Byb3ZpZGVyKS5zZXNzaW9uPy5uYW1lc3BhY2VzW05BTUVTUEFDRV0/LmNoYWlucz8ubWFwKGNoYWluID0+IHBhcnNlSW50KGNoYWluLnNwbGl0KFwiOlwiKVsxXSB8fCBcIlwiKSk7XG4gIHJldHVybiBjaGFpbklkcyA/PyBbXTtcbn1cbmZ1bmN0aW9uIF9nZXROYW1lc3BhY2VNZXRob2RzMigpIHtcbiAgaWYgKCFfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Byb3ZpZGVyKSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCBtZXRob2RzID0gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm92aWRlcikuc2Vzc2lvbj8ubmFtZXNwYWNlc1tOQU1FU1BBQ0VdPy5tZXRob2RzO1xuICByZXR1cm4gbWV0aG9kcyA/PyBbXTtcbn1cblxuZXhwb3J0IHsgV2FsbGV0Q29ubmVjdENvbm5lY3RvciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9