"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_wallets_evm_connectors_metamask_dist_thirdweb-dev-wallets-e-7217f2"],{

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

/***/ "./node_modules/@thirdweb-dev/wallets/evm/connectors/injected/dist/thirdweb-dev-wallets-evm-connectors-injected.browser.esm.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/wallets/evm/connectors/injected/dist/thirdweb-dev-wallets-evm-connectors-injected.browser.esm.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InjectedConnector: () => (/* binding */ InjectedConnector)
/* harmony export */ });
/* harmony import */ var _dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/classPrivateFieldSet-a5db7c83.browser.esm.js");
/* harmony import */ var _dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../dist/defineProperty-c8ecdc07.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/defineProperty-c8ecdc07.browser.esm.js");
/* harmony import */ var _dist_assertWindowEthereum_66ccef46_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../dist/assertWindowEthereum-66ccef46.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/assertWindowEthereum-66ccef46.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/address/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/providers/lib.esm/web3-provider.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _dist_WagmiConnector_60b19604_browser_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../dist/WagmiConnector-60b19604.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/WagmiConnector-60b19604.browser.esm.js");
/* harmony import */ var _dist_normalizeChainId_e4cc0175_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../dist/normalizeChainId-e4cc0175.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/normalizeChainId-e4cc0175.browser.esm.js");
/* harmony import */ var _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../dist/errors-105ad187.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/errors-105ad187.browser.esm.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");










function getInjectedName(ethereum) {
  if (!ethereum) {
    return "Injected";
  }
  const getName = provider => {
    if (provider.isAvalanche) {
      return "Core Wallet";
    }
    if (provider.isBitKeep) {
      return "BitKeep";
    }
    if (provider.isBraveWallet) {
      return "Brave Wallet";
    }
    if (provider.isCoinbaseWallet) {
      return "Coinbase Wallet";
    }
    if (provider.isExodus) {
      return "Exodus";
    }
    if (provider.isFrame) {
      return "Frame";
    }
    if (provider.isKuCoinWallet) {
      return "KuCoin Wallet";
    }
    if (provider.isMathWallet) {
      return "MathWallet";
    }
    if (provider.isOneInchIOSWallet || provider.isOneInchAndroidWallet) {
      return "1inch Wallet";
    }
    if (provider.isOpera) {
      return "Opera";
    }
    if (provider.isPortal) {
      return "Ripio Portal";
    }
    if (provider.isTally) {
      return "Tally";
    }
    if (provider.isTokenPocket) {
      return "TokenPocket";
    }
    if (provider.isTokenary) {
      return "Tokenary";
    }
    if (provider.isTrust || provider.isTrustWallet) {
      return "Trust Wallet";
    }
    if (provider.isMetaMask) {
      return "MetaMask";
    }
  };

  // Some injected providers detect multiple other providers and create a list at `ethers.providers`
  if (ethereum.providers?.length) {
    // Deduplicate names using Set
    // Coinbase Wallet puts multiple providers in `ethereum.providers`
    const nameSet = new Set();
    let unknownCount = 1;
    for (const provider of ethereum.providers) {
      let name = getName(provider);
      if (!name) {
        name = `Unknown Wallet #${unknownCount}`;
        unknownCount += 1;
      }
      nameSet.add(name);
    }
    const names = [...nameSet];
    if (names.length) {
      return names;
    }
    return names[0] ?? "Injected";
  }
  return getName(ethereum) ?? "Injected";
}

var _provider = /*#__PURE__*/new WeakMap();
class InjectedConnector extends _dist_WagmiConnector_60b19604_browser_esm_js__WEBPACK_IMPORTED_MODULE_1__.W {
  /**
   * Name of the injected connector
   */

  /**
   * Whether the connector is ready to be used
   *
   * `true` if the injected provider is found
   */

  constructor(arg) {
    const defaultOptions = {
      shimDisconnect: true,
      getProvider: () => {
        if ((0,_dist_assertWindowEthereum_66ccef46_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(globalThis.window)) {
          return globalThis.window.ethereum;
        }
      }
    };
    const options = {
      ...defaultOptions,
      ...arg.options
    };
    super({
      chains: arg.chains,
      options
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "id", void 0);
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "name", void 0);
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "ready", void 0);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__._)(this, _provider, {
      writable: true,
      value: void 0
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "connectorStorage", void 0);
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "shimDisconnectKey", "injected.shimDisconnect");
    /**
     * handles the `accountsChanged` event from the provider
     * * emits `change` event if connected to a different account
     * * emits `disconnect` event if no accounts available
     */
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onAccountsChanged", async accounts => {
      if (accounts.length === 0) {
        this.emit("disconnect");
      } else {
        this.emit("change", {
          account: ethers__WEBPACK_IMPORTED_MODULE_5__.getAddress(accounts[0])
        });
      }
    });
    /**
     * handles the `chainChanged` event from the provider
     * * emits `change` event if connected to a different chain
     */
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onChainChanged", chainId => {
      const id = (0,_dist_normalizeChainId_e4cc0175_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.n)(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    /**
     * handles the `disconnect` event from the provider
     * * emits `disconnect` event
     */
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "onDisconnect", async error => {
      // We need this as MetaMask can emit the "disconnect" event upon switching chains.
      // If MetaMask emits a `code: 1013` error, wait for reconnection before disconnecting
      // https://github.com/MetaMask/providers/pull/120
      if (error.code === 1013) {
        const provider = await this.getProvider();
        if (provider) {
          const isAuthorized = await this.getAccount();
          if (isAuthorized) {
            return;
          }
        }
      }
      this.emit("disconnect");

      // Remove `shimDisconnect` => it signals that wallet is disconnected
      if (this.options.shimDisconnect) {
        await this.connectorStorage.removeItem(this.shimDisconnectKey);
      }
    });
    const _provider2 = options.getProvider();

    // set the name of the connector
    if (typeof options.name === "string") {
      // if name is given, use that
      this.name = options.name;
    } else if (_provider2) {
      // if injected provider is detected, get name from it
      const detectedName = getInjectedName(_provider2);
      if (options.name) {
        this.name = options.name(detectedName);
      } else {
        if (typeof detectedName === "string") {
          this.name = detectedName;
        } else {
          this.name = detectedName[0];
        }
      }
    } else {
      // else default to "Injected"
      this.name = "Injected";
    }
    this.id = "injected";
    this.ready = !!_provider2;
    this.connectorStorage = arg.connectorStorage;
  }

  /**
   * * Connect to the injected provider
   * * switch to the given chain if `chainId` is specified as an argument
   */
  async connect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      const provider = await this.getProvider();
      if (!provider) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a();
      }
      this.setupListeners();

      // emit "connecting" event
      this.emit("message", {
        type: "connecting"
      });

      // request account addresses from injected provider
      const accountAddresses = await provider.request({
        method: "eth_requestAccounts"
      });

      // get the first account address
      const firstAccountAddress = ethers__WEBPACK_IMPORTED_MODULE_5__.getAddress(accountAddresses[0]);

      // Switch to given chain if a chainId is specified
      let connectedChainId = await this.getChainId();
      // Check if currently connected chain is unsupported
      // chainId is considered unsupported if chainId is not in the list of this.chains array
      let isUnsupported = this.isChainUnsupported(connectedChainId);

      // if chainId is specified and it is not the same as the currently connected chain
      if (options.chainId && connectedChainId !== options.chainId) {
        // switch to the given chain
        try {
          await this.switchChain(options.chainId);
          // recalculate connectedChainId and isUnsupported
          connectedChainId = options.chainId;
          isUnsupported = this.isChainUnsupported(options.chainId);
        } catch (e) {
          console.error(`Could not switch to chain id: ${options.chainId}`, e);
        }
      }

      // if shimDisconnect is enabled
      if (this.options.shimDisconnect) {
        // add the shim shimDisconnectKey => it signals that wallet is connected
        await this.connectorStorage.setItem(this.shimDisconnectKey, "true");
      }
      const connectionInfo = {
        account: firstAccountAddress,
        chain: {
          id: connectedChainId,
          unsupported: isUnsupported
        },
        provider
      };
      this.emit("connect", connectionInfo);
      return connectionInfo;
    } catch (error) {
      if (this.isUserRejectedRequestError(error)) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.U(error);
      }
      if (error.code === -32002) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.R(error);
      }
      throw error;
    }
  }

  /**
   * disconnect from the injected provider
   */
  async disconnect() {
    // perform cleanup
    const provider = await this.getProvider();
    if (!provider?.removeListener) {
      return;
    }
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);

    // if shimDisconnect is enabled
    if (this.options.shimDisconnect) {
      // Remove the shimDisconnectKey => it signals that wallet is disconnected
      await this.connectorStorage.removeItem(this.shimDisconnectKey);
    }
  }

  /**
   * @returns The first account address from the injected provider
   */
  async getAccount() {
    const provider = await this.getProvider();
    if (!provider) {
      throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a();
    }
    const accounts = await provider.request({
      method: "eth_accounts"
    });

    // return checksum address
    // https://docs.ethers.org/v5/api/utils/address/#utils-getAddress
    return ethers__WEBPACK_IMPORTED_MODULE_5__.getAddress(accounts[0]);
  }

  /**
   * @returns The `chainId` of the currently connected chain from injected provider normalized to a `number`
   */
  async getChainId() {
    const provider = await this.getProvider();
    if (!provider) {
      throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a();
    }
    return provider.request({
      method: "eth_chainId"
    }).then(_dist_normalizeChainId_e4cc0175_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.n);
  }

  /**
   * get the injected provider
   */
  async getProvider() {
    const provider = this.options.getProvider();
    if (provider) {
      (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__.a)(this, _provider, provider);
      // setting listeners
    }

    return (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__.b)(this, _provider);
  }

  /**
   * get a `signer` for given `chainId`
   */
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider(), this.getAccount()]);

    // ethers.providers.Web3Provider
    return new ethers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(provider, chainId).getSigner(account);
  }

  /**
   *
   * @returns `true` if the connector is connected and address is available, else `false`
   */
  async isAuthorized() {
    try {
      // `false` if connector is disconnected
      if (this.options.shimDisconnect &&
      // If shim does not exist in storage, wallet is disconnected
      !Boolean(await this.connectorStorage.getItem(this.shimDisconnectKey))) {
        return false;
      }
      const provider = await this.getProvider();
      if (!provider) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a();
      }
      // `false` if no account address available, else `true`
      const account = await this.getAccount();
      return !!account;
    } catch {
      // `false` if any error thrown
      return false;
    }
  }

  /**
   * switch to given chain
   */
  async switchChain(chainId) {
    const provider = await this.getProvider();
    if (!provider) {
      throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a();
    }
    const chainIdHex = ethers__WEBPACK_IMPORTED_MODULE_9__.hexValue(chainId);
    try {
      // request provider to switch to given chainIdHex
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: chainIdHex
        }]
      });
      const chain = this.chains.find(_chain => _chain.chainId === chainId);
      if (chain) {
        return chain;
      }
      return {
        chainId: chainId,
        name: `Chain ${chainIdHex}`,
        slug: `${chainIdHex}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpc: [""],
        chain: "",
        shortName: "",
        testnet: true
      };
    } catch (error) {
      // if could not switch to given chainIdHex

      // if tried to connect to a chain that is not configured
      const chain = this.chains.find(_chain => _chain.chainId === chainId);
      if (!chain) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.C({
          chainId,
          connectorId: this.id
        });
      }

      // if chain is not added to provider
      if (error.code === 4902 ||
      // Unwrapping for MetaMask Mobile
      // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
      error?.data?.originalError?.code === 4902) {
        try {
          // request provider to add chain
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: chainIdHex,
              chainName: chain.name,
              nativeCurrency: chain.nativeCurrency,
              rpcUrls: chain.rpc,
              blockExplorerUrls: this.getBlockExplorerUrls(chain)
            }]
          });
          return chain;
        } catch (addError) {
          // if user rejects request to add chain
          if (this.isUserRejectedRequestError(addError)) {
            throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.U(error);
          }

          // else other error
          throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.A();
        }
      }
      if (this.isUserRejectedRequestError(error)) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.U(error);
      }
      throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.S(error);
    }
  }
  async setupListeners() {
    const provider = await this.getProvider();
    if (provider.on) {
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
    }
  }
  isUserRejectedRequestError(error) {
    return error.code === 4001;
  }
}




/***/ }),

/***/ "./node_modules/@thirdweb-dev/wallets/evm/connectors/metamask/dist/thirdweb-dev-wallets-evm-connectors-metamask.browser.esm.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/wallets/evm/connectors/metamask/dist/thirdweb-dev-wallets-evm-connectors-metamask.browser.esm.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetaMaskConnector: () => (/* binding */ MetaMaskConnector)
/* harmony export */ });
/* harmony import */ var _dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/classPrivateFieldSet-a5db7c83.browser.esm.js");
/* harmony import */ var _dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../dist/defineProperty-c8ecdc07.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/defineProperty-c8ecdc07.browser.esm.js");
/* harmony import */ var _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../dist/errors-105ad187.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/errors-105ad187.browser.esm.js");
/* harmony import */ var _dist_assertWindowEthereum_66ccef46_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../dist/assertWindowEthereum-66ccef46.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/assertWindowEthereum-66ccef46.browser.esm.js");
/* harmony import */ var _dist_walletIds_1ea97411_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../dist/walletIds-1ea97411.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/walletIds-1ea97411.browser.esm.js");
/* harmony import */ var _injected_dist_thirdweb_dev_wallets_evm_connectors_injected_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../injected/dist/thirdweb-dev-wallets-evm-connectors-injected.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/evm/connectors/injected/dist/thirdweb-dev-wallets-evm-connectors-injected.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/address/lib.esm/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");












var _UNSTABLE_shimOnConnectSelectAccount = /*#__PURE__*/new WeakMap();
class MetaMaskConnector extends _injected_dist_thirdweb_dev_wallets_evm_connectors_injected_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.InjectedConnector {
  constructor(arg) {
    const defaultOptions = {
      name: "MetaMask",
      shimDisconnect: true,
      shimChainChangedDisconnect: true,
      getProvider() {
        function getReady(ethereum) {
          const isMetaMask = !!ethereum?.isMetaMask;
          if (!isMetaMask) {
            return;
          }
          // Brave tries to make itself look like MetaMask
          // Could also try RPC `web3_clientVersion` if following is unreliable
          if (ethereum.isBraveWallet && !ethereum._events && !ethereum._state) {
            return;
          }
          if (ethereum.isAvalanche) {
            return;
          }
          if (ethereum.isKuCoinWallet) {
            return;
          }
          if (ethereum.isPortal) {
            return;
          }
          if (ethereum.isTokenPocket) {
            return;
          }
          if (ethereum.isTokenary) {
            return;
          }
          return ethereum;
        }
        if ((0,_dist_assertWindowEthereum_66ccef46_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(globalThis.window)) {
          if (globalThis.window.ethereum?.providers) {
            return globalThis.window.ethereum.providers.find(getReady);
          }
          return getReady(globalThis.window.ethereum);
        }
      }
    };
    const options = {
      ...defaultOptions,
      ...arg.options
    };
    super({
      chains: arg.chains,
      options,
      connectorStorage: arg.connectorStorage
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, "id", _dist_walletIds_1ea97411_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__.w.metamask);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__._)(this, _UNSTABLE_shimOnConnectSelectAccount, {
      writable: true,
      value: void 0
    });
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.a)(this, _UNSTABLE_shimOnConnectSelectAccount, options.UNSTABLE_shimOnConnectSelectAccount);
  }

  /**
   * Connect to injected MetaMask provider
   */
  async connect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      const provider = await this.getProvider();
      if (!provider) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.a();
      }
      this.setupListeners();

      // emit "connecting" event
      this.emit("message", {
        type: "connecting"
      });

      // Attempt to show wallet select prompt with `wallet_requestPermissions` when
      // `shimDisconnect` is active and account is in disconnected state (flag in storage)
      let account = null;
      if ((0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.b)(this, _UNSTABLE_shimOnConnectSelectAccount) && this.options?.shimDisconnect && !Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))) {
        account = await this.getAccount().catch(() => null);
        const isConnected = !!account;
        if (isConnected) {
          // Attempt to show another prompt for selecting wallet if already connected
          try {
            await provider.request({
              method: "wallet_requestPermissions",
              params: [{
                eth_accounts: {}
              }]
            });
          } catch (error) {
            // Not all MetaMask injected providers support `wallet_requestPermissions` (e.g. MetaMask iOS).
            // Only bubble up error if user rejects request
            if (this.isUserRejectedRequestError(error)) {
              throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.U(error);
            }
          }
        }
      }

      // if account is not already set, request accounts and use the first account
      if (!account) {
        const accounts = await provider.request({
          method: "eth_requestAccounts"
        });
        account = ethers__WEBPACK_IMPORTED_MODULE_7__.getAddress(accounts[0]);
      }

      // get currently connected chainId
      let connectedChainId = await this.getChainId();
      // check if connected chain is unsupported
      let isUnsupported = this.isChainUnsupported(connectedChainId);

      // if chainId is given, but does not match the currently connected chainId, switch to the given chainId
      if (options.chainId && connectedChainId !== options.chainId) {
        try {
          await this.switchChain(options.chainId);
          // recalculate the chainId and isUnsupported
          connectedChainId = options.chainId;
          isUnsupported = this.isChainUnsupported(options.chainId);
        } catch (e) {
          console.error(`Could not switch to chain id : ${options.chainId}`, e);
        }
      }

      // if shimDisconnect is enabled
      if (this.options?.shimDisconnect) {
        // add shimDisconnectKey in storage - this signals that connector is "connected"
        await this.connectorStorage.setItem(this.shimDisconnectKey, "true");
      }
      const connectionInfo = {
        chain: {
          id: connectedChainId,
          unsupported: isUnsupported
        },
        provider: provider,
        account
      };
      this.emit("connect", connectionInfo);
      return connectionInfo;
    } catch (error) {
      if (this.isUserRejectedRequestError(error)) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.U(error);
      }
      if (error.code === -32002) {
        throw new _dist_errors_105ad187_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.R(error);
      }
      throw error;
    }
  }
  async switchAccount() {
    const provider = await this.getProvider();
    await provider.request({
      method: "wallet_requestPermissions",
      params: [{
        eth_accounts: {}
      }]
    });
  }
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXdhbGxldHMtZXZtLWNvbm5lY3RvcnMtbWV0YW1hc2stZGlzdC10aGlyZHdlYi1kZXYtd2FsbGV0cy1lLTcyMTdmMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdGO0FBQzNCO0FBQ1o7O0FBRXpDLDZCQUE2QixxREFBWTtBQUN6Qzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSwrREFBYTtBQUM1QjtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQixJQUFJLDBFQUFlO0FBQ25CLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDaUQ7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBFQUFlO0FBQ25CLElBQUksMEVBQWU7QUFDbkIsSUFBSSwwRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRUFBZTtBQUNuQixJQUFJLDBFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLG9CQUFvQixRQUFRLGtDQUFrQyxZQUFZO0FBQzFFLElBQUksMEVBQWU7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLCtFQUFlLGFBQWEsc0VBQVM7QUFDekMsSUFBSSxxRkFBMEI7QUFDOUI7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLHFGQUFxQjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1FQUFzQjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsVUFBVSxxRkFBcUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1FQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxrQkFBa0IsOENBQWdCO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFVBQVUsT0FBTyx5Q0FBeUMsZ0JBQWdCO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxrQkFBa0IsbUVBQXdCO0FBQzFDO0FBQ0E7QUFDQSxrQkFBa0IsbUVBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUU2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvd2FsbGV0cy9kaXN0L1dhZ21pQ29ubmVjdG9yLTYwYjE5NjA0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvd2FsbGV0cy9kaXN0L2Vycm9ycy0xMDVhZDE4Ny5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3dhbGxldHMvZGlzdC9ub3JtYWxpemVDaGFpbklkLWU0Y2MwMTc1LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvd2FsbGV0cy9ldm0vY29ubmVjdG9ycy9pbmplY3RlZC9kaXN0L3RoaXJkd2ViLWRldi13YWxsZXRzLWV2bS1jb25uZWN0b3JzLWluamVjdGVkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvd2FsbGV0cy9ldm0vY29ubmVjdG9ycy9tZXRhbWFzay9kaXN0L3RoaXJkd2ViLWRldi13YWxsZXRzLWV2bS1jb25uZWN0b3JzLW1ldGFtYXNrLmJyb3dzZXIuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi9kZWZpbmVQcm9wZXJ0eS1jOGVjZGMwNy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0Q2hhaW5zIH0gZnJvbSAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcblxuY2xhc3MgV2FnbWlDb25uZWN0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKiogVW5pcXVlIGNvbm5lY3RvciBpZCAqL1xuXG4gIC8qKiBDb25uZWN0b3IgbmFtZSAqL1xuXG4gIC8qKiBDaGFpbnMgY29ubmVjdG9yIHN1cHBvcnRzICovXG5cbiAgLyoqIE9wdGlvbnMgdG8gdXNlIHdpdGggY29ubmVjdG9yICovXG5cbiAgLyoqIFdoZXRoZXIgY29ubmVjdG9yIGlzIHVzYWJsZSAqL1xuXG4gIGNvbnN0cnVjdG9yKF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgY2hhaW5zID0gZGVmYXVsdENoYWlucyxcbiAgICAgIG9wdGlvbnNcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcigpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlkXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNoYWluc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9wdGlvbnNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZWFkeVwiLCB2b2lkIDApO1xuICAgIHRoaXMuY2hhaW5zID0gY2hhaW5zO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgZ2V0QmxvY2tFeHBsb3JlclVybHMoY2hhaW4pIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSBjaGFpbi5leHBsb3JlcnM/Lm1hcCh4ID0+IHgudXJsKSA/PyBbXTtcbiAgICByZXR1cm4gZXhwbG9yZXJzLmxlbmd0aCA+IDAgPyBleHBsb3JlcnMgOiB1bmRlZmluZWQ7XG4gIH1cbiAgaXNDaGFpblVuc3VwcG9ydGVkKGNoYWluSWQpIHtcbiAgICByZXR1cm4gIXRoaXMuY2hhaW5zLnNvbWUoeCA9PiB4LmNoYWluSWQgPT09IGNoYWluSWQpO1xuICB9XG4gIHVwZGF0ZUNoYWlucyhjaGFpbnMpIHtcbiAgICB0aGlzLmNoYWlucyA9IGNoYWlucztcbiAgfVxufVxuXG5leHBvcnQgeyBXYWdtaUNvbm5lY3RvciBhcyBXIH07XG4iLCJpbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSB9IGZyb20gJy4vZGVmaW5lUHJvcGVydHktYzhlY2RjMDcuYnJvd3Nlci5lc20uanMnO1xuXG4vKipcbiAqIEVycm9yIHN1YmNsYXNzIGltcGxlbWVudGluZyBKU09OIFJQQyAyLjAgZXJyb3JzIGFuZCBFdGhlcmV1bSBSUEMgZXJyb3JzIHBlciBFSVAtMTQ3NC5cbiAqIEBzZWUgaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xNDc0XG4gKi9cbmNsYXNzIFJwY0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvciggLyoqIEh1bWFuLXJlYWRhYmxlIHN0cmluZyAqL1xuICBtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2F1c2UsXG4gICAgICBjb2RlLFxuICAgICAgZGF0YVxuICAgIH0gPSBvcHRpb25zO1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjb2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImNvZGVcIiBtdXN0IGJlIGFuIGludGVnZXIuJyk7XG4gICAgfVxuICAgIGlmICghbWVzc2FnZSB8fCB0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIm1lc3NhZ2VcIiBtdXN0IGJlIGEgbm9uZW1wdHkgc3RyaW5nLicpO1xuICAgIH1cbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjYXVzZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvZGVcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkYXRhXCIsIHZvaWQgMCk7XG4gICAgdGhpcy5jYXVzZSA9IGNhdXNlO1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEVycm9yIHN1YmNsYXNzIGltcGxlbWVudGluZyBFdGhlcmV1bSBQcm92aWRlciBlcnJvcnMgcGVyIEVJUC0xMTkzLlxuICogQHNlZSBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTExOTNcbiAqL1xuY2xhc3MgUHJvdmlkZXJScGNFcnJvciBleHRlbmRzIFJwY0Vycm9yIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBFdGhlcmV1bSBQcm92aWRlciBKU09OLVJQQyBlcnJvci5cbiAgICogYGNvZGVgIG11c3QgYmUgYW4gaW50ZWdlciBpbiB0aGUgMTAwMCA8PSA0OTk5IHJhbmdlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoIC8qKiBIdW1hbi1yZWFkYWJsZSBzdHJpbmcgKi9cbiAgbWVzc2FnZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhdXNlLFxuICAgICAgY29kZSxcbiAgICAgIGRhdGFcbiAgICB9ID0gb3B0aW9ucztcbiAgICBpZiAoIShOdW1iZXIuaXNJbnRlZ2VyKGNvZGUpICYmIGNvZGUgPj0gMTAwMCAmJiBjb2RlIDw9IDQ5OTkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiY29kZVwiIG11c3QgYmUgYW4gaW50ZWdlciBzdWNoIHRoYXQ6IDEwMDAgPD0gY29kZSA8PSA0OTk5Jyk7XG4gICAgfVxuICAgIHN1cGVyKG1lc3NhZ2UsIHtcbiAgICAgIGNhdXNlLFxuICAgICAgY29kZSxcbiAgICAgIGRhdGFcbiAgICB9KTtcbiAgfVxufVxuY2xhc3MgQWRkQ2hhaW5FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIFwiQWRkQ2hhaW5FcnJvclwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXNzYWdlXCIsIFwiRXJyb3IgYWRkaW5nIGNoYWluXCIpO1xuICB9XG59XG5jbGFzcyBDaGFpbk5vdENvbmZpZ3VyZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBjaGFpbklkLFxuICAgICAgY29ubmVjdG9ySWRcbiAgICB9ID0gX3JlZjtcbiAgICBzdXBlcihgQ2hhaW4gXCIke2NoYWluSWR9XCIgbm90IGNvbmZpZ3VyZWQgZm9yIGNvbm5lY3RvciBcIiR7Y29ubmVjdG9ySWR9XCIuYCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCBcIkNoYWluTm90Q29uZmlndXJlZFwiKTtcbiAgfVxufVxuY2xhc3MgQ29ubmVjdG9yTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIFwiQ29ubmVjdG9yTm90Rm91bmRFcnJvclwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXNzYWdlXCIsIFwiQ29ubmVjdG9yIG5vdCBmb3VuZFwiKTtcbiAgfVxufVxuY2xhc3MgUmVzb3VyY2VVbmF2YWlsYWJsZUVycm9yIGV4dGVuZHMgUnBjRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihjYXVzZSkge1xuICAgIHN1cGVyKFwiUmVzb3VyY2UgdW5hdmFpbGFibGVcIiwge1xuICAgICAgY2F1c2UsXG4gICAgICBjb2RlOiAtMzIwMDJcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIFwiUmVzb3VyY2VVbmF2YWlsYWJsZVwiKTtcbiAgfVxufVxuY2xhc3MgU3dpdGNoQ2hhaW5FcnJvciBleHRlbmRzIFByb3ZpZGVyUnBjRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihjYXVzZSkge1xuICAgIHN1cGVyKFwiRXJyb3Igc3dpdGNoaW5nIGNoYWluXCIsIHtcbiAgICAgIGNhdXNlLFxuICAgICAgY29kZTogNDkwMlxuICAgIH0pO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5hbWVcIiwgXCJTd2l0Y2hDaGFpbkVycm9yXCIpO1xuICB9XG59XG5jbGFzcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgZXh0ZW5kcyBQcm92aWRlclJwY0Vycm9yIHtcbiAgY29uc3RydWN0b3IoY2F1c2UpIHtcbiAgICBzdXBlcihcIlVzZXIgcmVqZWN0ZWQgcmVxdWVzdFwiLCB7XG4gICAgICBjYXVzZSxcbiAgICAgIGNvZGU6IDQwMDFcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsIFwiVXNlclJlamVjdGVkUmVxdWVzdEVycm9yXCIpO1xuICB9XG59XG5cbi8vIEV0aGVycyBkb2VzIG5vdCBoYXZlIGFuIGVycm9yIHR5cGUgc28gd2UgY2FuIHVzZSB0aGlzIGZvciBjYXN0aW5nXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZXRoZXJzLWlvL2V0aGVycy5qcy9ibG9iL21haW4vcGFja2FnZXMvbG9nZ2VyL3NyYy50cy9pbmRleC50cyNMMjY4XG5cbmV4cG9ydCB7IEFkZENoYWluRXJyb3IgYXMgQSwgQ2hhaW5Ob3RDb25maWd1cmVkRXJyb3IgYXMgQywgUHJvdmlkZXJScGNFcnJvciBhcyBQLCBSZXNvdXJjZVVuYXZhaWxhYmxlRXJyb3IgYXMgUiwgU3dpdGNoQ2hhaW5FcnJvciBhcyBTLCBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVSwgQ29ubmVjdG9yTm90Rm91bmRFcnJvciBhcyBhIH07XG4iLCJmdW5jdGlvbiBub3JtYWxpemVDaGFpbklkKGNoYWluSWQpIHtcbiAgaWYgKHR5cGVvZiBjaGFpbklkID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUludChjaGFpbklkLCBjaGFpbklkLnRyaW0oKS5zdWJzdHJpbmcoMCwgMikgPT09IFwiMHhcIiA/IDE2IDogMTApO1xuICB9XG4gIGlmICh0eXBlb2YgY2hhaW5JZCA9PT0gXCJiaWdpbnRcIikge1xuICAgIHJldHVybiBOdW1iZXIoY2hhaW5JZCk7XG4gIH1cbiAgcmV0dXJuIGNoYWluSWQ7XG59XG5cbmV4cG9ydCB7IG5vcm1hbGl6ZUNoYWluSWQgYXMgbiB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYywgYSBhcyBfY2xhc3NQcml2YXRlRmllbGRTZXQsIGIgYXMgX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlzdC9jbGFzc1ByaXZhdGVGaWVsZFNldC1hNWRiN2M4My5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSB9IGZyb20gJy4uLy4uLy4uLy4uL2Rpc3QvZGVmaW5lUHJvcGVydHktYzhlY2RjMDcuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgYSBhcyBhc3NlcnRXaW5kb3dFdGhlcmV1bSB9IGZyb20gJy4uLy4uLy4uLy4uL2Rpc3QvYXNzZXJ0V2luZG93RXRoZXJldW0tNjZjY2VmNDYuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgdXRpbHMsIHByb3ZpZGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBXIGFzIFdhZ21pQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlzdC9XYWdtaUNvbm5lY3Rvci02MGIxOTYwNC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBuIGFzIG5vcm1hbGl6ZUNoYWluSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9kaXN0L25vcm1hbGl6ZUNoYWluSWQtZTRjYzAxNzUuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgYSBhcyBDb25uZWN0b3JOb3RGb3VuZEVycm9yLCBVIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciwgUiBhcyBSZXNvdXJjZVVuYXZhaWxhYmxlRXJyb3IsIEMgYXMgQ2hhaW5Ob3RDb25maWd1cmVkRXJyb3IsIEEgYXMgQWRkQ2hhaW5FcnJvciwgUyBhcyBTd2l0Y2hDaGFpbkVycm9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlzdC9lcnJvcnMtMTA1YWQxODcuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NoYWlucyc7XG5pbXBvcnQgJ2V2ZW50ZW1pdHRlcjMnO1xuXG5mdW5jdGlvbiBnZXRJbmplY3RlZE5hbWUoZXRoZXJldW0pIHtcbiAgaWYgKCFldGhlcmV1bSkge1xuICAgIHJldHVybiBcIkluamVjdGVkXCI7XG4gIH1cbiAgY29uc3QgZ2V0TmFtZSA9IHByb3ZpZGVyID0+IHtcbiAgICBpZiAocHJvdmlkZXIuaXNBdmFsYW5jaGUpIHtcbiAgICAgIHJldHVybiBcIkNvcmUgV2FsbGV0XCI7XG4gICAgfVxuICAgIGlmIChwcm92aWRlci5pc0JpdEtlZXApIHtcbiAgICAgIHJldHVybiBcIkJpdEtlZXBcIjtcbiAgICB9XG4gICAgaWYgKHByb3ZpZGVyLmlzQnJhdmVXYWxsZXQpIHtcbiAgICAgIHJldHVybiBcIkJyYXZlIFdhbGxldFwiO1xuICAgIH1cbiAgICBpZiAocHJvdmlkZXIuaXNDb2luYmFzZVdhbGxldCkge1xuICAgICAgcmV0dXJuIFwiQ29pbmJhc2UgV2FsbGV0XCI7XG4gICAgfVxuICAgIGlmIChwcm92aWRlci5pc0V4b2R1cykge1xuICAgICAgcmV0dXJuIFwiRXhvZHVzXCI7XG4gICAgfVxuICAgIGlmIChwcm92aWRlci5pc0ZyYW1lKSB7XG4gICAgICByZXR1cm4gXCJGcmFtZVwiO1xuICAgIH1cbiAgICBpZiAocHJvdmlkZXIuaXNLdUNvaW5XYWxsZXQpIHtcbiAgICAgIHJldHVybiBcIkt1Q29pbiBXYWxsZXRcIjtcbiAgICB9XG4gICAgaWYgKHByb3ZpZGVyLmlzTWF0aFdhbGxldCkge1xuICAgICAgcmV0dXJuIFwiTWF0aFdhbGxldFwiO1xuICAgIH1cbiAgICBpZiAocHJvdmlkZXIuaXNPbmVJbmNoSU9TV2FsbGV0IHx8IHByb3ZpZGVyLmlzT25lSW5jaEFuZHJvaWRXYWxsZXQpIHtcbiAgICAgIHJldHVybiBcIjFpbmNoIFdhbGxldFwiO1xuICAgIH1cbiAgICBpZiAocHJvdmlkZXIuaXNPcGVyYSkge1xuICAgICAgcmV0dXJuIFwiT3BlcmFcIjtcbiAgICB9XG4gICAgaWYgKHByb3ZpZGVyLmlzUG9ydGFsKSB7XG4gICAgICByZXR1cm4gXCJSaXBpbyBQb3J0YWxcIjtcbiAgICB9XG4gICAgaWYgKHByb3ZpZGVyLmlzVGFsbHkpIHtcbiAgICAgIHJldHVybiBcIlRhbGx5XCI7XG4gICAgfVxuICAgIGlmIChwcm92aWRlci5pc1Rva2VuUG9ja2V0KSB7XG4gICAgICByZXR1cm4gXCJUb2tlblBvY2tldFwiO1xuICAgIH1cbiAgICBpZiAocHJvdmlkZXIuaXNUb2tlbmFyeSkge1xuICAgICAgcmV0dXJuIFwiVG9rZW5hcnlcIjtcbiAgICB9XG4gICAgaWYgKHByb3ZpZGVyLmlzVHJ1c3QgfHwgcHJvdmlkZXIuaXNUcnVzdFdhbGxldCkge1xuICAgICAgcmV0dXJuIFwiVHJ1c3QgV2FsbGV0XCI7XG4gICAgfVxuICAgIGlmIChwcm92aWRlci5pc01ldGFNYXNrKSB7XG4gICAgICByZXR1cm4gXCJNZXRhTWFza1wiO1xuICAgIH1cbiAgfTtcblxuICAvLyBTb21lIGluamVjdGVkIHByb3ZpZGVycyBkZXRlY3QgbXVsdGlwbGUgb3RoZXIgcHJvdmlkZXJzIGFuZCBjcmVhdGUgYSBsaXN0IGF0IGBldGhlcnMucHJvdmlkZXJzYFxuICBpZiAoZXRoZXJldW0ucHJvdmlkZXJzPy5sZW5ndGgpIHtcbiAgICAvLyBEZWR1cGxpY2F0ZSBuYW1lcyB1c2luZyBTZXRcbiAgICAvLyBDb2luYmFzZSBXYWxsZXQgcHV0cyBtdWx0aXBsZSBwcm92aWRlcnMgaW4gYGV0aGVyZXVtLnByb3ZpZGVyc2BcbiAgICBjb25zdCBuYW1lU2V0ID0gbmV3IFNldCgpO1xuICAgIGxldCB1bmtub3duQ291bnQgPSAxO1xuICAgIGZvciAoY29uc3QgcHJvdmlkZXIgb2YgZXRoZXJldW0ucHJvdmlkZXJzKSB7XG4gICAgICBsZXQgbmFtZSA9IGdldE5hbWUocHJvdmlkZXIpO1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBgVW5rbm93biBXYWxsZXQgIyR7dW5rbm93bkNvdW50fWA7XG4gICAgICAgIHVua25vd25Db3VudCArPSAxO1xuICAgICAgfVxuICAgICAgbmFtZVNldC5hZGQobmFtZSk7XG4gICAgfVxuICAgIGNvbnN0IG5hbWVzID0gWy4uLm5hbWVTZXRdO1xuICAgIGlmIChuYW1lcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBuYW1lcztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzWzBdID8/IFwiSW5qZWN0ZWRcIjtcbiAgfVxuICByZXR1cm4gZ2V0TmFtZShldGhlcmV1bSkgPz8gXCJJbmplY3RlZFwiO1xufVxuXG52YXIgX3Byb3ZpZGVyID0gLyojX19QVVJFX18qL25ldyBXZWFrTWFwKCk7XG5jbGFzcyBJbmplY3RlZENvbm5lY3RvciBleHRlbmRzIFdhZ21pQ29ubmVjdG9yIHtcbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGluamVjdGVkIGNvbm5lY3RvclxuICAgKi9cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgY29ubmVjdG9yIGlzIHJlYWR5IHRvIGJlIHVzZWRcbiAgICpcbiAgICogYHRydWVgIGlmIHRoZSBpbmplY3RlZCBwcm92aWRlciBpcyBmb3VuZFxuICAgKi9cblxuICBjb25zdHJ1Y3RvcihhcmcpIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIHNoaW1EaXNjb25uZWN0OiB0cnVlLFxuICAgICAgZ2V0UHJvdmlkZXI6ICgpID0+IHtcbiAgICAgICAgaWYgKGFzc2VydFdpbmRvd0V0aGVyZXVtKGdsb2JhbFRoaXMud2luZG93KSkge1xuICAgICAgICAgIHJldHVybiBnbG9iYWxUaGlzLndpbmRvdy5ldGhlcmV1bTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgICAgLi4uYXJnLm9wdGlvbnNcbiAgICB9O1xuICAgIHN1cGVyKHtcbiAgICAgIGNoYWluczogYXJnLmNoYWlucyxcbiAgICAgIG9wdGlvbnNcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpZFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5hbWVcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZWFkeVwiLCB2b2lkIDApO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjKHRoaXMsIF9wcm92aWRlciwge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogdm9pZCAwXG4gICAgfSk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29ubmVjdG9yU3RvcmFnZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNoaW1EaXNjb25uZWN0S2V5XCIsIFwiaW5qZWN0ZWQuc2hpbURpc2Nvbm5lY3RcIik7XG4gICAgLyoqXG4gICAgICogaGFuZGxlcyB0aGUgYGFjY291bnRzQ2hhbmdlZGAgZXZlbnQgZnJvbSB0aGUgcHJvdmlkZXJcbiAgICAgKiAqIGVtaXRzIGBjaGFuZ2VgIGV2ZW50IGlmIGNvbm5lY3RlZCB0byBhIGRpZmZlcmVudCBhY2NvdW50XG4gICAgICogKiBlbWl0cyBgZGlzY29ubmVjdGAgZXZlbnQgaWYgbm8gYWNjb3VudHMgYXZhaWxhYmxlXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib25BY2NvdW50c0NoYW5nZWRcIiwgYXN5bmMgYWNjb3VudHMgPT4ge1xuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmVtaXQoXCJkaXNjb25uZWN0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbWl0KFwiY2hhbmdlXCIsIHtcbiAgICAgICAgICBhY2NvdW50OiB1dGlscy5nZXRBZGRyZXNzKGFjY291bnRzWzBdKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBoYW5kbGVzIHRoZSBgY2hhaW5DaGFuZ2VkYCBldmVudCBmcm9tIHRoZSBwcm92aWRlclxuICAgICAqICogZW1pdHMgYGNoYW5nZWAgZXZlbnQgaWYgY29ubmVjdGVkIHRvIGEgZGlmZmVyZW50IGNoYWluXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib25DaGFpbkNoYW5nZWRcIiwgY2hhaW5JZCA9PiB7XG4gICAgICBjb25zdCBpZCA9IG5vcm1hbGl6ZUNoYWluSWQoY2hhaW5JZCk7XG4gICAgICBjb25zdCB1bnN1cHBvcnRlZCA9IHRoaXMuaXNDaGFpblVuc3VwcG9ydGVkKGlkKTtcbiAgICAgIHRoaXMuZW1pdChcImNoYW5nZVwiLCB7XG4gICAgICAgIGNoYWluOiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdW5zdXBwb3J0ZWRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogaGFuZGxlcyB0aGUgYGRpc2Nvbm5lY3RgIGV2ZW50IGZyb20gdGhlIHByb3ZpZGVyXG4gICAgICogKiBlbWl0cyBgZGlzY29ubmVjdGAgZXZlbnRcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbkRpc2Nvbm5lY3RcIiwgYXN5bmMgZXJyb3IgPT4ge1xuICAgICAgLy8gV2UgbmVlZCB0aGlzIGFzIE1ldGFNYXNrIGNhbiBlbWl0IHRoZSBcImRpc2Nvbm5lY3RcIiBldmVudCB1cG9uIHN3aXRjaGluZyBjaGFpbnMuXG4gICAgICAvLyBJZiBNZXRhTWFzayBlbWl0cyBhIGBjb2RlOiAxMDEzYCBlcnJvciwgd2FpdCBmb3IgcmVjb25uZWN0aW9uIGJlZm9yZSBkaXNjb25uZWN0aW5nXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWV0YU1hc2svcHJvdmlkZXJzL3B1bGwvMTIwXG4gICAgICBpZiAoZXJyb3IuY29kZSA9PT0gMTAxMykge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHRoaXMuZ2V0UHJvdmlkZXIoKTtcbiAgICAgICAgaWYgKHByb3ZpZGVyKSB7XG4gICAgICAgICAgY29uc3QgaXNBdXRob3JpemVkID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KCk7XG4gICAgICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KFwiZGlzY29ubmVjdFwiKTtcblxuICAgICAgLy8gUmVtb3ZlIGBzaGltRGlzY29ubmVjdGAgPT4gaXQgc2lnbmFscyB0aGF0IHdhbGxldCBpcyBkaXNjb25uZWN0ZWRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hpbURpc2Nvbm5lY3QpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5jb25uZWN0b3JTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5zaGltRGlzY29ubmVjdEtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgX3Byb3ZpZGVyMiA9IG9wdGlvbnMuZ2V0UHJvdmlkZXIoKTtcblxuICAgIC8vIHNldCB0aGUgbmFtZSBvZiB0aGUgY29ubmVjdG9yXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm5hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGlmIG5hbWUgaXMgZ2l2ZW4sIHVzZSB0aGF0XG4gICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgfSBlbHNlIGlmIChfcHJvdmlkZXIyKSB7XG4gICAgICAvLyBpZiBpbmplY3RlZCBwcm92aWRlciBpcyBkZXRlY3RlZCwgZ2V0IG5hbWUgZnJvbSBpdFxuICAgICAgY29uc3QgZGV0ZWN0ZWROYW1lID0gZ2V0SW5qZWN0ZWROYW1lKF9wcm92aWRlcjIpO1xuICAgICAgaWYgKG9wdGlvbnMubmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUoZGV0ZWN0ZWROYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGV0ZWN0ZWROYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgdGhpcy5uYW1lID0gZGV0ZWN0ZWROYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubmFtZSA9IGRldGVjdGVkTmFtZVswXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbHNlIGRlZmF1bHQgdG8gXCJJbmplY3RlZFwiXG4gICAgICB0aGlzLm5hbWUgPSBcIkluamVjdGVkXCI7XG4gICAgfVxuICAgIHRoaXMuaWQgPSBcImluamVjdGVkXCI7XG4gICAgdGhpcy5yZWFkeSA9ICEhX3Byb3ZpZGVyMjtcbiAgICB0aGlzLmNvbm5lY3RvclN0b3JhZ2UgPSBhcmcuY29ubmVjdG9yU3RvcmFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAqIENvbm5lY3QgdG8gdGhlIGluamVjdGVkIHByb3ZpZGVyXG4gICAqICogc3dpdGNoIHRvIHRoZSBnaXZlbiBjaGFpbiBpZiBgY2hhaW5JZGAgaXMgc3BlY2lmaWVkIGFzIGFuIGFyZ3VtZW50XG4gICAqL1xuICBhc3luYyBjb25uZWN0KCkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB0aGlzLmdldFByb3ZpZGVyKCk7XG4gICAgICBpZiAoIXByb3ZpZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBDb25uZWN0b3JOb3RGb3VuZEVycm9yKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldHVwTGlzdGVuZXJzKCk7XG5cbiAgICAgIC8vIGVtaXQgXCJjb25uZWN0aW5nXCIgZXZlbnRcbiAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwge1xuICAgICAgICB0eXBlOiBcImNvbm5lY3RpbmdcIlxuICAgICAgfSk7XG5cbiAgICAgIC8vIHJlcXVlc3QgYWNjb3VudCBhZGRyZXNzZXMgZnJvbSBpbmplY3RlZCBwcm92aWRlclxuICAgICAgY29uc3QgYWNjb3VudEFkZHJlc3NlcyA9IGF3YWl0IHByb3ZpZGVyLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiXG4gICAgICB9KTtcblxuICAgICAgLy8gZ2V0IHRoZSBmaXJzdCBhY2NvdW50IGFkZHJlc3NcbiAgICAgIGNvbnN0IGZpcnN0QWNjb3VudEFkZHJlc3MgPSB1dGlscy5nZXRBZGRyZXNzKGFjY291bnRBZGRyZXNzZXNbMF0pO1xuXG4gICAgICAvLyBTd2l0Y2ggdG8gZ2l2ZW4gY2hhaW4gaWYgYSBjaGFpbklkIGlzIHNwZWNpZmllZFxuICAgICAgbGV0IGNvbm5lY3RlZENoYWluSWQgPSBhd2FpdCB0aGlzLmdldENoYWluSWQoKTtcbiAgICAgIC8vIENoZWNrIGlmIGN1cnJlbnRseSBjb25uZWN0ZWQgY2hhaW4gaXMgdW5zdXBwb3J0ZWRcbiAgICAgIC8vIGNoYWluSWQgaXMgY29uc2lkZXJlZCB1bnN1cHBvcnRlZCBpZiBjaGFpbklkIGlzIG5vdCBpbiB0aGUgbGlzdCBvZiB0aGlzLmNoYWlucyBhcnJheVxuICAgICAgbGV0IGlzVW5zdXBwb3J0ZWQgPSB0aGlzLmlzQ2hhaW5VbnN1cHBvcnRlZChjb25uZWN0ZWRDaGFpbklkKTtcblxuICAgICAgLy8gaWYgY2hhaW5JZCBpcyBzcGVjaWZpZWQgYW5kIGl0IGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgY3VycmVudGx5IGNvbm5lY3RlZCBjaGFpblxuICAgICAgaWYgKG9wdGlvbnMuY2hhaW5JZCAmJiBjb25uZWN0ZWRDaGFpbklkICE9PSBvcHRpb25zLmNoYWluSWQpIHtcbiAgICAgICAgLy8gc3dpdGNoIHRvIHRoZSBnaXZlbiBjaGFpblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuc3dpdGNoQ2hhaW4ob3B0aW9ucy5jaGFpbklkKTtcbiAgICAgICAgICAvLyByZWNhbGN1bGF0ZSBjb25uZWN0ZWRDaGFpbklkIGFuZCBpc1Vuc3VwcG9ydGVkXG4gICAgICAgICAgY29ubmVjdGVkQ2hhaW5JZCA9IG9wdGlvbnMuY2hhaW5JZDtcbiAgICAgICAgICBpc1Vuc3VwcG9ydGVkID0gdGhpcy5pc0NoYWluVW5zdXBwb3J0ZWQob3B0aW9ucy5jaGFpbklkKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENvdWxkIG5vdCBzd2l0Y2ggdG8gY2hhaW4gaWQ6ICR7b3B0aW9ucy5jaGFpbklkfWAsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHNoaW1EaXNjb25uZWN0IGlzIGVuYWJsZWRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hpbURpc2Nvbm5lY3QpIHtcbiAgICAgICAgLy8gYWRkIHRoZSBzaGltIHNoaW1EaXNjb25uZWN0S2V5ID0+IGl0IHNpZ25hbHMgdGhhdCB3YWxsZXQgaXMgY29ubmVjdGVkXG4gICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdG9yU3RvcmFnZS5zZXRJdGVtKHRoaXMuc2hpbURpc2Nvbm5lY3RLZXksIFwidHJ1ZVwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25JbmZvID0ge1xuICAgICAgICBhY2NvdW50OiBmaXJzdEFjY291bnRBZGRyZXNzLFxuICAgICAgICBjaGFpbjoge1xuICAgICAgICAgIGlkOiBjb25uZWN0ZWRDaGFpbklkLFxuICAgICAgICAgIHVuc3VwcG9ydGVkOiBpc1Vuc3VwcG9ydGVkXG4gICAgICAgIH0sXG4gICAgICAgIHByb3ZpZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5lbWl0KFwiY29ubmVjdFwiLCBjb25uZWN0aW9uSW5mbyk7XG4gICAgICByZXR1cm4gY29ubmVjdGlvbkluZm87XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmICh0aGlzLmlzVXNlclJlamVjdGVkUmVxdWVzdEVycm9yKGVycm9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmIChlcnJvci5jb2RlID09PSAtMzIwMDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJlc291cmNlVW5hdmFpbGFibGVFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZGlzY29ubmVjdCBmcm9tIHRoZSBpbmplY3RlZCBwcm92aWRlclxuICAgKi9cbiAgYXN5bmMgZGlzY29ubmVjdCgpIHtcbiAgICAvLyBwZXJmb3JtIGNsZWFudXBcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHRoaXMuZ2V0UHJvdmlkZXIoKTtcbiAgICBpZiAoIXByb3ZpZGVyPy5yZW1vdmVMaXN0ZW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcm92aWRlci5yZW1vdmVMaXN0ZW5lcihcImFjY291bnRzQ2hhbmdlZFwiLCB0aGlzLm9uQWNjb3VudHNDaGFuZ2VkKTtcbiAgICBwcm92aWRlci5yZW1vdmVMaXN0ZW5lcihcImNoYWluQ2hhbmdlZFwiLCB0aGlzLm9uQ2hhaW5DaGFuZ2VkKTtcbiAgICBwcm92aWRlci5yZW1vdmVMaXN0ZW5lcihcImRpc2Nvbm5lY3RcIiwgdGhpcy5vbkRpc2Nvbm5lY3QpO1xuXG4gICAgLy8gaWYgc2hpbURpc2Nvbm5lY3QgaXMgZW5hYmxlZFxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2hpbURpc2Nvbm5lY3QpIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgc2hpbURpc2Nvbm5lY3RLZXkgPT4gaXQgc2lnbmFscyB0aGF0IHdhbGxldCBpcyBkaXNjb25uZWN0ZWRcbiAgICAgIGF3YWl0IHRoaXMuY29ubmVjdG9yU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuc2hpbURpc2Nvbm5lY3RLZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBUaGUgZmlyc3QgYWNjb3VudCBhZGRyZXNzIGZyb20gdGhlIGluamVjdGVkIHByb3ZpZGVyXG4gICAqL1xuICBhc3luYyBnZXRBY2NvdW50KCkge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdGhpcy5nZXRQcm92aWRlcigpO1xuICAgIGlmICghcHJvdmlkZXIpIHtcbiAgICAgIHRocm93IG5ldyBDb25uZWN0b3JOb3RGb3VuZEVycm9yKCk7XG4gICAgfVxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgcHJvdmlkZXIucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCJcbiAgICB9KTtcblxuICAgIC8vIHJldHVybiBjaGVja3N1bSBhZGRyZXNzXG4gICAgLy8gaHR0cHM6Ly9kb2NzLmV0aGVycy5vcmcvdjUvYXBpL3V0aWxzL2FkZHJlc3MvI3V0aWxzLWdldEFkZHJlc3NcbiAgICByZXR1cm4gdXRpbHMuZ2V0QWRkcmVzcyhhY2NvdW50c1swXSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgVGhlIGBjaGFpbklkYCBvZiB0aGUgY3VycmVudGx5IGNvbm5lY3RlZCBjaGFpbiBmcm9tIGluamVjdGVkIHByb3ZpZGVyIG5vcm1hbGl6ZWQgdG8gYSBgbnVtYmVyYFxuICAgKi9cbiAgYXN5bmMgZ2V0Q2hhaW5JZCgpIHtcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHRoaXMuZ2V0UHJvdmlkZXIoKTtcbiAgICBpZiAoIXByb3ZpZGVyKSB7XG4gICAgICB0aHJvdyBuZXcgQ29ubmVjdG9yTm90Rm91bmRFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvdmlkZXIucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX2NoYWluSWRcIlxuICAgIH0pLnRoZW4obm9ybWFsaXplQ2hhaW5JZCk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IHRoZSBpbmplY3RlZCBwcm92aWRlclxuICAgKi9cbiAgYXN5bmMgZ2V0UHJvdmlkZXIoKSB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLm9wdGlvbnMuZ2V0UHJvdmlkZXIoKTtcbiAgICBpZiAocHJvdmlkZXIpIHtcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfcHJvdmlkZXIsIHByb3ZpZGVyKTtcbiAgICAgIC8vIHNldHRpbmcgbGlzdGVuZXJzXG4gICAgfVxuXG4gICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBhIGBzaWduZXJgIGZvciBnaXZlbiBgY2hhaW5JZGBcbiAgICovXG4gIGFzeW5jIGdldFNpZ25lcigpIHtcbiAgICBsZXQge1xuICAgICAgY2hhaW5JZFxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGNvbnN0IFtwcm92aWRlciwgYWNjb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5nZXRQcm92aWRlcigpLCB0aGlzLmdldEFjY291bnQoKV0pO1xuXG4gICAgLy8gZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXJcbiAgICByZXR1cm4gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIocHJvdmlkZXIsIGNoYWluSWQpLmdldFNpZ25lcihhY2NvdW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbm5lY3RvciBpcyBjb25uZWN0ZWQgYW5kIGFkZHJlc3MgaXMgYXZhaWxhYmxlLCBlbHNlIGBmYWxzZWBcbiAgICovXG4gIGFzeW5jIGlzQXV0aG9yaXplZCgpIHtcbiAgICB0cnkge1xuICAgICAgLy8gYGZhbHNlYCBpZiBjb25uZWN0b3IgaXMgZGlzY29ubmVjdGVkXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNoaW1EaXNjb25uZWN0ICYmXG4gICAgICAvLyBJZiBzaGltIGRvZXMgbm90IGV4aXN0IGluIHN0b3JhZ2UsIHdhbGxldCBpcyBkaXNjb25uZWN0ZWRcbiAgICAgICFCb29sZWFuKGF3YWl0IHRoaXMuY29ubmVjdG9yU3RvcmFnZS5nZXRJdGVtKHRoaXMuc2hpbURpc2Nvbm5lY3RLZXkpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHRoaXMuZ2V0UHJvdmlkZXIoKTtcbiAgICAgIGlmICghcHJvdmlkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IENvbm5lY3Rvck5vdEZvdW5kRXJyb3IoKTtcbiAgICAgIH1cbiAgICAgIC8vIGBmYWxzZWAgaWYgbm8gYWNjb3VudCBhZGRyZXNzIGF2YWlsYWJsZSwgZWxzZSBgdHJ1ZWBcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQoKTtcbiAgICAgIHJldHVybiAhIWFjY291bnQ7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBgZmFsc2VgIGlmIGFueSBlcnJvciB0aHJvd25cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogc3dpdGNoIHRvIGdpdmVuIGNoYWluXG4gICAqL1xuICBhc3luYyBzd2l0Y2hDaGFpbihjaGFpbklkKSB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB0aGlzLmdldFByb3ZpZGVyKCk7XG4gICAgaWYgKCFwcm92aWRlcikge1xuICAgICAgdGhyb3cgbmV3IENvbm5lY3Rvck5vdEZvdW5kRXJyb3IoKTtcbiAgICB9XG4gICAgY29uc3QgY2hhaW5JZEhleCA9IHV0aWxzLmhleFZhbHVlKGNoYWluSWQpO1xuICAgIHRyeSB7XG4gICAgICAvLyByZXF1ZXN0IHByb3ZpZGVyIHRvIHN3aXRjaCB0byBnaXZlbiBjaGFpbklkSGV4XG4gICAgICBhd2FpdCBwcm92aWRlci5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcIndhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluXCIsXG4gICAgICAgIHBhcmFtczogW3tcbiAgICAgICAgICBjaGFpbklkOiBjaGFpbklkSGV4XG4gICAgICAgIH1dXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5jaGFpbnMuZmluZChfY2hhaW4gPT4gX2NoYWluLmNoYWluSWQgPT09IGNoYWluSWQpO1xuICAgICAgaWYgKGNoYWluKSB7XG4gICAgICAgIHJldHVybiBjaGFpbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNoYWluSWQ6IGNoYWluSWQsXG4gICAgICAgIG5hbWU6IGBDaGFpbiAke2NoYWluSWRIZXh9YCxcbiAgICAgICAgc2x1ZzogYCR7Y2hhaW5JZEhleH1gLFxuICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICAgIG5hbWU6IFwiRXRoZXJcIixcbiAgICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICAgICAgc3ltYm9sOiBcIkVUSFwiXG4gICAgICAgIH0sXG4gICAgICAgIHJwYzogW1wiXCJdLFxuICAgICAgICBjaGFpbjogXCJcIixcbiAgICAgICAgc2hvcnROYW1lOiBcIlwiLFxuICAgICAgICB0ZXN0bmV0OiB0cnVlXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBpZiBjb3VsZCBub3Qgc3dpdGNoIHRvIGdpdmVuIGNoYWluSWRIZXhcblxuICAgICAgLy8gaWYgdHJpZWQgdG8gY29ubmVjdCB0byBhIGNoYWluIHRoYXQgaXMgbm90IGNvbmZpZ3VyZWRcbiAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5jaGFpbnMuZmluZChfY2hhaW4gPT4gX2NoYWluLmNoYWluSWQgPT09IGNoYWluSWQpO1xuICAgICAgaWYgKCFjaGFpbikge1xuICAgICAgICB0aHJvdyBuZXcgQ2hhaW5Ob3RDb25maWd1cmVkRXJyb3Ioe1xuICAgICAgICAgIGNoYWluSWQsXG4gICAgICAgICAgY29ubmVjdG9ySWQ6IHRoaXMuaWRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGNoYWluIGlzIG5vdCBhZGRlZCB0byBwcm92aWRlclxuICAgICAgaWYgKGVycm9yLmNvZGUgPT09IDQ5MDIgfHxcbiAgICAgIC8vIFVud3JhcHBpbmcgZm9yIE1ldGFNYXNrIE1vYmlsZVxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01ldGFNYXNrL21ldGFtYXNrLW1vYmlsZS9pc3N1ZXMvMjk0NCNpc3N1ZWNvbW1lbnQtOTc2OTg4NzE5XG4gICAgICBlcnJvcj8uZGF0YT8ub3JpZ2luYWxFcnJvcj8uY29kZSA9PT0gNDkwMikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIHJlcXVlc3QgcHJvdmlkZXIgdG8gYWRkIGNoYWluXG4gICAgICAgICAgYXdhaXQgcHJvdmlkZXIucmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwid2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW5cIixcbiAgICAgICAgICAgIHBhcmFtczogW3tcbiAgICAgICAgICAgICAgY2hhaW5JZDogY2hhaW5JZEhleCxcbiAgICAgICAgICAgICAgY2hhaW5OYW1lOiBjaGFpbi5uYW1lLFxuICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeTogY2hhaW4ubmF0aXZlQ3VycmVuY3ksXG4gICAgICAgICAgICAgIHJwY1VybHM6IGNoYWluLnJwYyxcbiAgICAgICAgICAgICAgYmxvY2tFeHBsb3JlclVybHM6IHRoaXMuZ2V0QmxvY2tFeHBsb3JlclVybHMoY2hhaW4pXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjaGFpbjtcbiAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcbiAgICAgICAgICAvLyBpZiB1c2VyIHJlamVjdHMgcmVxdWVzdCB0byBhZGQgY2hhaW5cbiAgICAgICAgICBpZiAodGhpcy5pc1VzZXJSZWplY3RlZFJlcXVlc3RFcnJvcihhZGRFcnJvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGVsc2Ugb3RoZXIgZXJyb3JcbiAgICAgICAgICB0aHJvdyBuZXcgQWRkQ2hhaW5FcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc1VzZXJSZWplY3RlZFJlcXVlc3RFcnJvcihlcnJvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgU3dpdGNoQ2hhaW5FcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG4gIGFzeW5jIHNldHVwTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdGhpcy5nZXRQcm92aWRlcigpO1xuICAgIGlmIChwcm92aWRlci5vbikge1xuICAgICAgcHJvdmlkZXIub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgdGhpcy5vbkFjY291bnRzQ2hhbmdlZCk7XG4gICAgICBwcm92aWRlci5vbihcImNoYWluQ2hhbmdlZFwiLCB0aGlzLm9uQ2hhaW5DaGFuZ2VkKTtcbiAgICAgIHByb3ZpZGVyLm9uKFwiZGlzY29ubmVjdFwiLCB0aGlzLm9uRGlzY29ubmVjdCk7XG4gICAgfVxuICB9XG4gIGlzVXNlclJlamVjdGVkUmVxdWVzdEVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yLmNvZGUgPT09IDQwMDE7XG4gIH1cbn1cblxuZXhwb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfTtcbiIsImltcG9ydCB7IF8gYXMgX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMsIGEgYXMgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LCBiIGFzIF9jbGFzc1ByaXZhdGVGaWVsZEdldCB9IGZyb20gJy4uLy4uLy4uLy4uL2Rpc3QvY2xhc3NQcml2YXRlRmllbGRTZXQtYTVkYjdjODMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgXyBhcyBfZGVmaW5lUHJvcGVydHkgfSBmcm9tICcuLi8uLi8uLi8uLi9kaXN0L2RlZmluZVByb3BlcnR5LWM4ZWNkYzA3LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGEgYXMgQ29ubmVjdG9yTm90Rm91bmRFcnJvciwgVSBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IsIFIgYXMgUmVzb3VyY2VVbmF2YWlsYWJsZUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlzdC9lcnJvcnMtMTA1YWQxODcuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgYSBhcyBhc3NlcnRXaW5kb3dFdGhlcmV1bSB9IGZyb20gJy4uLy4uLy4uLy4uL2Rpc3QvYXNzZXJ0V2luZG93RXRoZXJldW0tNjZjY2VmNDYuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgdyBhcyB3YWxsZXRJZHMgfSBmcm9tICcuLi8uLi8uLi8uLi9kaXN0L3dhbGxldElkcy0xZWE5NzQxMS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2luamVjdGVkL2Rpc3QvdGhpcmR3ZWItZGV2LXdhbGxldHMtZXZtLWNvbm5lY3RvcnMtaW5qZWN0ZWQuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgdXRpbHMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0ICcuLi8uLi8uLi8uLi9kaXN0L1dhZ21pQ29ubmVjdG9yLTYwYjE5NjA0LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0ICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCAnLi4vLi4vLi4vLi4vZGlzdC9ub3JtYWxpemVDaGFpbklkLWU0Y2MwMTc1LmJyb3dzZXIuZXNtLmpzJztcblxudmFyIF9VTlNUQUJMRV9zaGltT25Db25uZWN0U2VsZWN0QWNjb3VudCA9IC8qI19fUFVSRV9fKi9uZXcgV2Vha01hcCgpO1xuY2xhc3MgTWV0YU1hc2tDb25uZWN0b3IgZXh0ZW5kcyBJbmplY3RlZENvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKGFyZykge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgbmFtZTogXCJNZXRhTWFza1wiLFxuICAgICAgc2hpbURpc2Nvbm5lY3Q6IHRydWUsXG4gICAgICBzaGltQ2hhaW5DaGFuZ2VkRGlzY29ubmVjdDogdHJ1ZSxcbiAgICAgIGdldFByb3ZpZGVyKCkge1xuICAgICAgICBmdW5jdGlvbiBnZXRSZWFkeShldGhlcmV1bSkge1xuICAgICAgICAgIGNvbnN0IGlzTWV0YU1hc2sgPSAhIWV0aGVyZXVtPy5pc01ldGFNYXNrO1xuICAgICAgICAgIGlmICghaXNNZXRhTWFzaykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBCcmF2ZSB0cmllcyB0byBtYWtlIGl0c2VsZiBsb29rIGxpa2UgTWV0YU1hc2tcbiAgICAgICAgICAvLyBDb3VsZCBhbHNvIHRyeSBSUEMgYHdlYjNfY2xpZW50VmVyc2lvbmAgaWYgZm9sbG93aW5nIGlzIHVucmVsaWFibGVcbiAgICAgICAgICBpZiAoZXRoZXJldW0uaXNCcmF2ZVdhbGxldCAmJiAhZXRoZXJldW0uX2V2ZW50cyAmJiAhZXRoZXJldW0uX3N0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChldGhlcmV1bS5pc0F2YWxhbmNoZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXRoZXJldW0uaXNLdUNvaW5XYWxsZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGV0aGVyZXVtLmlzUG9ydGFsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChldGhlcmV1bS5pc1Rva2VuUG9ja2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChldGhlcmV1bS5pc1Rva2VuYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBldGhlcmV1bTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXNzZXJ0V2luZG93RXRoZXJldW0oZ2xvYmFsVGhpcy53aW5kb3cpKSB7XG4gICAgICAgICAgaWYgKGdsb2JhbFRoaXMud2luZG93LmV0aGVyZXVtPy5wcm92aWRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxUaGlzLndpbmRvdy5ldGhlcmV1bS5wcm92aWRlcnMuZmluZChnZXRSZWFkeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBnZXRSZWFkeShnbG9iYWxUaGlzLndpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIC4uLmFyZy5vcHRpb25zXG4gICAgfTtcbiAgICBzdXBlcih7XG4gICAgICBjaGFpbnM6IGFyZy5jaGFpbnMsXG4gICAgICBvcHRpb25zLFxuICAgICAgY29ubmVjdG9yU3RvcmFnZTogYXJnLmNvbm5lY3RvclN0b3JhZ2VcbiAgICB9KTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpZFwiLCB3YWxsZXRJZHMubWV0YW1hc2spO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjKHRoaXMsIF9VTlNUQUJMRV9zaGltT25Db25uZWN0U2VsZWN0QWNjb3VudCwge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogdm9pZCAwXG4gICAgfSk7XG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9VTlNUQUJMRV9zaGltT25Db25uZWN0U2VsZWN0QWNjb3VudCwgb3B0aW9ucy5VTlNUQUJMRV9zaGltT25Db25uZWN0U2VsZWN0QWNjb3VudCk7XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdCB0byBpbmplY3RlZCBNZXRhTWFzayBwcm92aWRlclxuICAgKi9cbiAgYXN5bmMgY29ubmVjdCgpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgdGhpcy5nZXRQcm92aWRlcigpO1xuICAgICAgaWYgKCFwcm92aWRlcikge1xuICAgICAgICB0aHJvdyBuZXcgQ29ubmVjdG9yTm90Rm91bmRFcnJvcigpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXR1cExpc3RlbmVycygpO1xuXG4gICAgICAvLyBlbWl0IFwiY29ubmVjdGluZ1wiIGV2ZW50XG4gICAgICB0aGlzLmVtaXQoXCJtZXNzYWdlXCIsIHtcbiAgICAgICAgdHlwZTogXCJjb25uZWN0aW5nXCJcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBdHRlbXB0IHRvIHNob3cgd2FsbGV0IHNlbGVjdCBwcm9tcHQgd2l0aCBgd2FsbGV0X3JlcXVlc3RQZXJtaXNzaW9uc2Agd2hlblxuICAgICAgLy8gYHNoaW1EaXNjb25uZWN0YCBpcyBhY3RpdmUgYW5kIGFjY291bnQgaXMgaW4gZGlzY29ubmVjdGVkIHN0YXRlIChmbGFnIGluIHN0b3JhZ2UpXG4gICAgICBsZXQgYWNjb3VudCA9IG51bGw7XG4gICAgICBpZiAoX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9VTlNUQUJMRV9zaGltT25Db25uZWN0U2VsZWN0QWNjb3VudCkgJiYgdGhpcy5vcHRpb25zPy5zaGltRGlzY29ubmVjdCAmJiAhQm9vbGVhbih0aGlzLmNvbm5lY3RvclN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnNoaW1EaXNjb25uZWN0S2V5KSkpIHtcbiAgICAgICAgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudCgpLmNhdGNoKCgpID0+IG51bGwpO1xuICAgICAgICBjb25zdCBpc0Nvbm5lY3RlZCA9ICEhYWNjb3VudDtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgLy8gQXR0ZW1wdCB0byBzaG93IGFub3RoZXIgcHJvbXB0IGZvciBzZWxlY3Rpbmcgd2FsbGV0IGlmIGFscmVhZHkgY29ubmVjdGVkXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHByb3ZpZGVyLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICBtZXRob2Q6IFwid2FsbGV0X3JlcXVlc3RQZXJtaXNzaW9uc1wiLFxuICAgICAgICAgICAgICBwYXJhbXM6IFt7XG4gICAgICAgICAgICAgICAgZXRoX2FjY291bnRzOiB7fVxuICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIE5vdCBhbGwgTWV0YU1hc2sgaW5qZWN0ZWQgcHJvdmlkZXJzIHN1cHBvcnQgYHdhbGxldF9yZXF1ZXN0UGVybWlzc2lvbnNgIChlLmcuIE1ldGFNYXNrIGlPUykuXG4gICAgICAgICAgICAvLyBPbmx5IGJ1YmJsZSB1cCBlcnJvciBpZiB1c2VyIHJlamVjdHMgcmVxdWVzdFxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IoZXJyb3IpKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBpZiBhY2NvdW50IGlzIG5vdCBhbHJlYWR5IHNldCwgcmVxdWVzdCBhY2NvdW50cyBhbmQgdXNlIHRoZSBmaXJzdCBhY2NvdW50XG4gICAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBwcm92aWRlci5yZXF1ZXN0KHtcbiAgICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiXG4gICAgICAgIH0pO1xuICAgICAgICBhY2NvdW50ID0gdXRpbHMuZ2V0QWRkcmVzcyhhY2NvdW50c1swXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGdldCBjdXJyZW50bHkgY29ubmVjdGVkIGNoYWluSWRcbiAgICAgIGxldCBjb25uZWN0ZWRDaGFpbklkID0gYXdhaXQgdGhpcy5nZXRDaGFpbklkKCk7XG4gICAgICAvLyBjaGVjayBpZiBjb25uZWN0ZWQgY2hhaW4gaXMgdW5zdXBwb3J0ZWRcbiAgICAgIGxldCBpc1Vuc3VwcG9ydGVkID0gdGhpcy5pc0NoYWluVW5zdXBwb3J0ZWQoY29ubmVjdGVkQ2hhaW5JZCk7XG5cbiAgICAgIC8vIGlmIGNoYWluSWQgaXMgZ2l2ZW4sIGJ1dCBkb2VzIG5vdCBtYXRjaCB0aGUgY3VycmVudGx5IGNvbm5lY3RlZCBjaGFpbklkLCBzd2l0Y2ggdG8gdGhlIGdpdmVuIGNoYWluSWRcbiAgICAgIGlmIChvcHRpb25zLmNoYWluSWQgJiYgY29ubmVjdGVkQ2hhaW5JZCAhPT0gb3B0aW9ucy5jaGFpbklkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5zd2l0Y2hDaGFpbihvcHRpb25zLmNoYWluSWQpO1xuICAgICAgICAgIC8vIHJlY2FsY3VsYXRlIHRoZSBjaGFpbklkIGFuZCBpc1Vuc3VwcG9ydGVkXG4gICAgICAgICAgY29ubmVjdGVkQ2hhaW5JZCA9IG9wdGlvbnMuY2hhaW5JZDtcbiAgICAgICAgICBpc1Vuc3VwcG9ydGVkID0gdGhpcy5pc0NoYWluVW5zdXBwb3J0ZWQob3B0aW9ucy5jaGFpbklkKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENvdWxkIG5vdCBzd2l0Y2ggdG8gY2hhaW4gaWQgOiAke29wdGlvbnMuY2hhaW5JZH1gLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBpZiBzaGltRGlzY29ubmVjdCBpcyBlbmFibGVkXG4gICAgICBpZiAodGhpcy5vcHRpb25zPy5zaGltRGlzY29ubmVjdCkge1xuICAgICAgICAvLyBhZGQgc2hpbURpc2Nvbm5lY3RLZXkgaW4gc3RvcmFnZSAtIHRoaXMgc2lnbmFscyB0aGF0IGNvbm5lY3RvciBpcyBcImNvbm5lY3RlZFwiXG4gICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdG9yU3RvcmFnZS5zZXRJdGVtKHRoaXMuc2hpbURpc2Nvbm5lY3RLZXksIFwidHJ1ZVwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25JbmZvID0ge1xuICAgICAgICBjaGFpbjoge1xuICAgICAgICAgIGlkOiBjb25uZWN0ZWRDaGFpbklkLFxuICAgICAgICAgIHVuc3VwcG9ydGVkOiBpc1Vuc3VwcG9ydGVkXG4gICAgICAgIH0sXG4gICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcbiAgICAgICAgYWNjb3VudFxuICAgICAgfTtcbiAgICAgIHRoaXMuZW1pdChcImNvbm5lY3RcIiwgY29ubmVjdGlvbkluZm8pO1xuICAgICAgcmV0dXJuIGNvbm5lY3Rpb25JbmZvO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAodGhpcy5pc1VzZXJSZWplY3RlZFJlcXVlc3RFcnJvcihlcnJvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3IuY29kZSA9PT0gLTMyMDAyKSB7XG4gICAgICAgIHRocm93IG5ldyBSZXNvdXJjZVVuYXZhaWxhYmxlRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG4gIGFzeW5jIHN3aXRjaEFjY291bnQoKSB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB0aGlzLmdldFByb3ZpZGVyKCk7XG4gICAgYXdhaXQgcHJvdmlkZXIucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwid2FsbGV0X3JlcXVlc3RQZXJtaXNzaW9uc1wiLFxuICAgICAgcGFyYW1zOiBbe1xuICAgICAgICBldGhfYWNjb3VudHM6IHt9XG4gICAgICB9XVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IE1ldGFNYXNrQ29ubmVjdG9yIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=