"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_split-5845ed11_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/split-5845ed11.browser.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/split-5845ed11.browser.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Split: () => (/* binding */ Split)
/* harmony export */ });
/* harmony import */ var _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./QueryParams-7d9473b5.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-7d9473b5.browser.esm.js");
/* harmony import */ var _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contract-metadata-88f06ef9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/contract-metadata-88f06ef9.browser.esm.js");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC20_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC20.json");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/contracts/lib.esm/index.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.mjs");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! merkletreejs */ "./node_modules/merkletreejs/dist/index.js");
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(merkletreejs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_6__);













































































/**
 * Create custom royalty splits to distribute funds.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "split");
 * ```
 *
 * @public
 */
class Split {
  /**
   * @internal
   */

  get chainId() {
    return this._chainId;
  }
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dz(network, address, abi, options);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "contractWrapper", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "storage", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "abi", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "metadata", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "app", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "encoder", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "estimator", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "events", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "roles", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "interceptor", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "_chainId", void 0);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Withdraw Funds
     * @remarks Triggers a transfer to account of the amount of native currency they are owed.
     *
     * @example
     * ```javascript
     * // the wallet address that wants to withdraw their funds
     * const walletAddress = "{{wallet_address}}"
     * await contract.withdraw(walletAddress);
     * ```
     *
     * @param walletAddress - The address to distributes the amount to
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "withdraw", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async walletAddress => {
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "release(address)",
        args: [await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(walletAddress)]
      });
    }));
    /**
     * Triggers a transfer to account of the amount of a given currency they are owed.
     *
     * @param walletAddress - The address to distributes the amount to
     * @param tokenAddress - The address of the currency contract to distribute funds
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "withdrawToken", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async (walletAddress, tokenAddress) => {
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "release(address,address)",
        args: [await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(tokenAddress), await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(walletAddress)]
      });
    }));
    /**
     * Distribute Funds
     *
     * @remarks Distribute funds held by the contract in the native currency to all recipients.
     *
     * @example
     * ```javascript
     * await contract.distribute();
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "distribute", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async () => {
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "distribute()",
        args: []
      });
    }));
    /**
     * Distribute Funds
     *
     * @remarks Distribute funds held by the contract in the native currency to all recipients.
     *
     * @example
     * ```javascript
     * // The address of the currency to distribute funds
     * const tokenAddress = "0x..."
     * await contract.distributeToken(tokenAddress);
     * ```
     *
     * @param tokenAddress - The address of the currency contract to distribute funds
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "distributeToken", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async tokenAddress => {
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "distribute(address)",
        args: [await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(tokenAddress)]
      });
    }));
    this._chainId = chainId;
    this.abi = _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.e.parse(abi || []);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ag(this.contractWrapper, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dQ, this.storage);
    this.app = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a$(this.contractWrapper, this.metadata, this.storage);
    this.roles = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ah(this.contractWrapper, Split.contractRoles);
    this.encoder = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.af(this.contractWrapper);
    this.estimator = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aP(this.contractWrapper);
    this.events = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aQ(this.contractWrapper);
    this.interceptor = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aR(this.contractWrapper);
  }
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get Recipients of this splits contract
   *
   * @remarks Get the data about the shares of every split recipient on the contract
   *
   * @example
   * ```javascript
   * const recipients = await contract.getAllRecipients();
   * console.log(recipients);
   * ```
   */
  async getAllRecipients() {
    const recipients = [];
    let index = ethers__WEBPACK_IMPORTED_MODULE_9__.BigNumber.from(0);
    const totalRecipients = await this.contractWrapper.readContract.payeeCount();
    while (index.lt(totalRecipients)) {
      try {
        const recipientAddress = await this.contractWrapper.readContract.payee(index);
        recipients.push(await this.getRecipientSplitPercentage(recipientAddress));
        index = index.add(1);
      } catch (err) {
        // The only way we know how to detect that we've found all recipients
        // is if we get an error when trying to get the next recipient.
        if ("method" in err && err["method"].toLowerCase().includes("payee(uint256)")) {
          break;
        } else {
          throw err;
        }
      }
    }
    return recipients;
  }

  /**
   * Returns all the recipients and their balances in the native currency.
   *
   * @returns A map of recipient addresses to their balances in the native currency.
   */
  async balanceOfAllRecipients() {
    const recipients = await this.getAllRecipients();
    const balances = {};
    for (const recipient of recipients) {
      balances[recipient.address] = await this.balanceOf(recipient.address);
    }
    return balances;
  }

  /**
   * Returns all the recipients and their balances in a non-native currency.
   *
   * @param tokenAddress - The address of the currency to check the balances in.
   * @returns A map of recipient addresses to their balances in the specified currency.
   */
  async balanceOfTokenAllRecipients(tokenAddress) {
    const resolvedToken = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(tokenAddress);
    const recipients = await this.getAllRecipients();
    const balances = {};
    for (const recipient of recipients) {
      balances[recipient.address] = await this.balanceOfToken(recipient.address, resolvedToken);
    }
    return balances;
  }

  /**
   * Get Funds owed to a particular wallet
   *
   * @remarks Get the amount of funds in the native currency held by the contract that is owed to a specific recipient.
   *
   * @example
   * ```javascript
   * // The address to check the funds of
   * const address = "{{wallet_address}}";
   * const funds = await contract.balanceOf(address);
   * console.log(funds);
   * ```
   */
  async balanceOf(address) {
    const resolvedAddress = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(address);
    const walletBalance = await this.contractWrapper.readContract.provider.getBalance(this.getAddress());
    const totalReleased = await this.contractWrapper.readContract["totalReleased()"]();
    const totalReceived = walletBalance.add(totalReleased);
    return this._pendingPayment(resolvedAddress, totalReceived, await this.contractWrapper.readContract["released(address)"](resolvedAddress));
  }

  /**
   * Get non-native Token Funds owed to a particular wallet
   *
   * @remarks Get the amount of funds in the non-native tokens held by the contract that is owed to a specific recipient.
   *
   * @example
   * ```javascript
   * // The address to check the funds of
   * const address = "{{wallet_address}}";
   * // The address of the currency to check the contracts funds of
   * const tokenAddress = "0x..."
   * const funds = await contract.balanceOfToken(address, tokenAddress);
   * console.log(funds);
   * ```
   */
  async balanceOfToken(walletAddress, tokenAddress) {
    const resolvedToken = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(tokenAddress);
    const resolvedWallet = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(walletAddress);
    const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_10__.Contract(resolvedToken, _thirdweb_dev_contracts_js_dist_abis_IERC20_json__WEBPACK_IMPORTED_MODULE_11__, this.contractWrapper.getProvider());
    const walletBalance = await erc20.balanceOf(this.getAddress());
    const totalReleased = await this.contractWrapper.readContract["totalReleased(address)"](resolvedToken);
    const totalReceived = walletBalance.add(totalReleased);
    const value = await this._pendingPayment(resolvedWallet, totalReceived, await this.contractWrapper.readContract["released(address,address)"](resolvedToken, resolvedWallet));
    return await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b9)(this.contractWrapper.getProvider(), resolvedToken, value);
  }

  /**
   * Get the % of funds owed to a given address
   * @param address - the address to check percentage of
   */
  async getRecipientSplitPercentage(address) {
    const resolvedAddress = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(address);
    const [totalShares, walletsShares] = await Promise.all([this.contractWrapper.readContract.totalShares(), this.contractWrapper.readContract.shares(address)]);
    // We convert to basis points to avoid floating point loss of precision
    return {
      address: resolvedAddress,
      splitPercentage: walletsShares.mul(ethers__WEBPACK_IMPORTED_MODULE_9__.BigNumber.from(1e7)).div(totalShares).toNumber() / 1e5
    };
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  async _pendingPayment(address, totalReceived, alreadyReleased) {
    const addressReceived = totalReceived.mul(await this.contractWrapper.readContract.shares(await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(address)));
    const totalRoyaltyAvailable = addressReceived.div(await this.contractWrapper.readContract.totalShares());
    return totalRoyaltyAvailable.sub(alreadyReleased);
  }

  /**
   * @internal
   */
  async prepare(method, args, overrides) {
    return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method,
      args,
      overrides
    });
  }

  /**
   * @internal
   */
  async call(functionName, args, overrides) {
    return this.contractWrapper.call(functionName, args, overrides);
  }
}
(0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(Split, "contractRoles", ["admin"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LXNwbGl0LTU4NDVlZDExLWJyb3dzZXItZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2RTtBQUN5VDtBQUM5VDtBQUMzQjtBQUM5QjtBQUNGO0FBQ2lCO0FBQ29DO0FBQ1Q7QUFDUTtBQUNHO0FBQ0c7QUFDUDtBQUNFO0FBQ0o7QUFDUztBQUNKO0FBQ0M7QUFDRjtBQUNBO0FBQ1A7QUFDVTtBQUNKO0FBQ0o7QUFDTTtBQUNLO0FBQ0c7QUFDUDtBQUNBO0FBQ0M7QUFDUjtBQUNNO0FBQ0s7QUFDRztBQUNmO0FBQ1U7QUFDRjtBQUNLO0FBQ1A7QUFDUDtBQUNVO0FBQ0Y7QUFDQztBQUNUO0FBQ087QUFDRjtBQUNVO0FBQ1Y7QUFDQTtBQUNKO0FBQ0Q7QUFDUTtBQUNQO0FBQ3BDO0FBQzZDO0FBQzlDO0FBQ3NDO0FBQzlCO0FBQ1Y7QUFDZ0Q7QUFDeEM7QUFDcUM7QUFDcEQ7QUFDUTtBQUNHO0FBQ2tDO0FBQ1E7QUFDQztBQUNRO0FBQ2xEO0FBQ1o7QUFDK0Q7QUFDQztBQUN4QztBQUN1QjtBQUNDOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQSxrQ0FBa0MsV0FBVztBQUM3Qyw2Q0FBNkMsa0JBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csMEVBQWU7QUFDakgsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CO0FBQ0E7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dUVBQWU7O0FBRUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3Nkay9kaXN0L3NwbGl0LTU4NDVlZDExLmJyb3dzZXIuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi9RdWVyeVBhcmFtcy03ZDk0NzNiNS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBkeiBhcyBDb250cmFjdFdyYXBwZXIsIGRzIGFzIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbiwgZSBhcyBBYmlTY2hlbWEsIGFnIGFzIENvbnRyYWN0TWV0YWRhdGEsIGRRIGFzIFNwbGl0c0NvbnRyYWN0U2NoZW1hLCBhJCBhcyBDb250cmFjdEFwcFVSSSwgYWggYXMgQ29udHJhY3RSb2xlcywgYWYgYXMgQ29udHJhY3RFbmNvZGVyLCBhUCBhcyBHYXNDb3N0RXN0aW1hdG9yLCBhUSBhcyBDb250cmFjdEV2ZW50cywgYVIgYXMgQ29udHJhY3RJbnRlcmNlcHRvciwgY0ggYXMgcmVzb2x2ZUFkZHJlc3MsIGI5IGFzIGZldGNoQ3VycmVuY3lWYWx1ZSwgYVYgYXMgVHJhbnNhY3Rpb24gfSBmcm9tICcuL2NvbnRyYWN0LW1ldGFkYXRhLTg4ZjA2ZWY5LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCBFUkMyMEFiaSBmcm9tICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwLmpzb24nO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBDb250cmFjdCB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgJ2JuLmpzJztcbmltcG9ydCAnem9kJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMjBfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyMFBlcm1pdC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU11bHRpY2FsbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzcyMV9WMy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFTdXBwbHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTGF6eU1pbnQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvTGF6eU1pbnRXaXRoVGllci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMTE1NV9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTVfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1RW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9FUkMyNzcxQ29udGV4dC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBcHBVUkkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ29udHJhY3RNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEaXJlY3RMaXN0aW5ncy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFbmdsaXNoQXVjdGlvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JT2ZmZXJzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBhY2tWUkZEaXJlY3QuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnNFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBsYXRmb3JtRmVlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVByaW1hcnlTYWxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVJveWFsdHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Pd25hYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFjY291bnRGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFjY291bnQuanNvbic7XG5pbXBvcnQgJ3RpbnktaW52YXJpYW50JztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0NvbnRyYWN0UHVibGlzaGVyLmpzb24nO1xuaW1wb3J0ICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0ZvcndhcmRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9zdG9yYWdlJztcbmltcG9ydCAnY3Jvc3MtZmV0Y2gnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVRoaXJkd2ViQ29udHJhY3QuanNvbic7XG5pbXBvcnQgJ2V0aGVycy9saWIvdXRpbHMuanMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ3V1aWQnO1xuaW1wb3J0ICdtZXJrbGV0cmVlanMnO1xuaW1wb3J0ICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzE2NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1TWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbERlcHJlY2F0ZWQuanNvbic7XG5pbXBvcnQgJ2V0aGVycy9saWIvdXRpbHMnO1xuaW1wb3J0ICdiczU4JztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5TG9naWMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeVJvdXRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9nZW5lcmF0ZWQtYWJpcyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV0ZhY3RvcnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV1JlZ2lzdHJ5Lmpzb24nO1xuXG4vKipcbiAqIENyZWF0ZSBjdXN0b20gcm95YWx0eSBzcGxpdHMgdG8gZGlzdHJpYnV0ZSBmdW5kcy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCI7XG4gKlxuICogY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKFwie3tjaGFpbk5hbWV9fVwiKTtcbiAqIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgc2RrLmdldENvbnRyYWN0KFwie3tjb250cmFjdF9hZGRyZXNzfX1cIiwgXCJzcGxpdFwiKTtcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgU3BsaXQge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIGdldCBjaGFpbklkKCkge1xuICAgIHJldHVybiB0aGlzLl9jaGFpbklkO1xuICB9XG4gIGNvbnN0cnVjdG9yKG5ldHdvcmssIGFkZHJlc3MsIHN0b3JhZ2UpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgbGV0IGFiaSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ID8gYXJndW1lbnRzWzRdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjaGFpbklkID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNvbnRyYWN0V3JhcHBlciA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogbmV3IENvbnRyYWN0V3JhcHBlcihuZXR3b3JrLCBhZGRyZXNzLCBhYmksIG9wdGlvbnMpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvbnRyYWN0V3JhcHBlclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN0b3JhZ2VcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhYmlcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXRhZGF0YVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFwcFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuY29kZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlc3RpbWF0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJldmVudHNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb2xlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImludGVyY2VwdG9yXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2NoYWluSWRcIiwgdm9pZCAwKTtcbiAgICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogV1JJVEUgRlVOQ1RJT05TXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqXG4gICAgICogV2l0aGRyYXcgRnVuZHNcbiAgICAgKiBAcmVtYXJrcyBUcmlnZ2VycyBhIHRyYW5zZmVyIHRvIGFjY291bnQgb2YgdGhlIGFtb3VudCBvZiBuYXRpdmUgY3VycmVuY3kgdGhleSBhcmUgb3dlZC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIHRoZSB3YWxsZXQgYWRkcmVzcyB0aGF0IHdhbnRzIHRvIHdpdGhkcmF3IHRoZWlyIGZ1bmRzXG4gICAgICogY29uc3Qgd2FsbGV0QWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCJcbiAgICAgKiBhd2FpdCBjb250cmFjdC53aXRoZHJhdyh3YWxsZXRBZGRyZXNzKTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB3YWxsZXRBZGRyZXNzIC0gVGhlIGFkZHJlc3MgdG8gZGlzdHJpYnV0ZXMgdGhlIGFtb3VudCB0b1xuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndpdGhkcmF3XCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyB3YWxsZXRBZGRyZXNzID0+IHtcbiAgICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgICAgbWV0aG9kOiBcInJlbGVhc2UoYWRkcmVzcylcIixcbiAgICAgICAgYXJnczogW2F3YWl0IHJlc29sdmVBZGRyZXNzKHdhbGxldEFkZHJlc3MpXVxuICAgICAgfSk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIGEgdHJhbnNmZXIgdG8gYWNjb3VudCBvZiB0aGUgYW1vdW50IG9mIGEgZ2l2ZW4gY3VycmVuY3kgdGhleSBhcmUgb3dlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB3YWxsZXRBZGRyZXNzIC0gVGhlIGFkZHJlc3MgdG8gZGlzdHJpYnV0ZXMgdGhlIGFtb3VudCB0b1xuICAgICAqIEBwYXJhbSB0b2tlbkFkZHJlc3MgLSBUaGUgYWRkcmVzcyBvZiB0aGUgY3VycmVuY3kgY29udHJhY3QgdG8gZGlzdHJpYnV0ZSBmdW5kc1xuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndpdGhkcmF3VG9rZW5cIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jICh3YWxsZXRBZGRyZXNzLCB0b2tlbkFkZHJlc3MpID0+IHtcbiAgICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgICAgbWV0aG9kOiBcInJlbGVhc2UoYWRkcmVzcyxhZGRyZXNzKVwiLFxuICAgICAgICBhcmdzOiBbYXdhaXQgcmVzb2x2ZUFkZHJlc3ModG9rZW5BZGRyZXNzKSwgYXdhaXQgcmVzb2x2ZUFkZHJlc3Mod2FsbGV0QWRkcmVzcyldXG4gICAgICB9KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogRGlzdHJpYnV0ZSBGdW5kc1xuICAgICAqXG4gICAgICogQHJlbWFya3MgRGlzdHJpYnV0ZSBmdW5kcyBoZWxkIGJ5IHRoZSBjb250cmFjdCBpbiB0aGUgbmF0aXZlIGN1cnJlbmN5IHRvIGFsbCByZWNpcGllbnRzLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogYXdhaXQgY29udHJhY3QuZGlzdHJpYnV0ZSgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRpc3RyaWJ1dGVcIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgICAgbWV0aG9kOiBcImRpc3RyaWJ1dGUoKVwiLFxuICAgICAgICBhcmdzOiBbXVxuICAgICAgfSk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIERpc3RyaWJ1dGUgRnVuZHNcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIERpc3RyaWJ1dGUgZnVuZHMgaGVsZCBieSB0aGUgY29udHJhY3QgaW4gdGhlIG5hdGl2ZSBjdXJyZW5jeSB0byBhbGwgcmVjaXBpZW50cy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIFRoZSBhZGRyZXNzIG9mIHRoZSBjdXJyZW5jeSB0byBkaXN0cmlidXRlIGZ1bmRzXG4gICAgICogY29uc3QgdG9rZW5BZGRyZXNzID0gXCIweC4uLlwiXG4gICAgICogYXdhaXQgY29udHJhY3QuZGlzdHJpYnV0ZVRva2VuKHRva2VuQWRkcmVzcyk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5BZGRyZXNzIC0gVGhlIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IGNvbnRyYWN0IHRvIGRpc3RyaWJ1dGUgZnVuZHNcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkaXN0cmlidXRlVG9rZW5cIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIHRva2VuQWRkcmVzcyA9PiB7XG4gICAgICByZXR1cm4gVHJhbnNhY3Rpb24uZnJvbUNvbnRyYWN0V3JhcHBlcih7XG4gICAgICAgIGNvbnRyYWN0V3JhcHBlcjogdGhpcy5jb250cmFjdFdyYXBwZXIsXG4gICAgICAgIG1ldGhvZDogXCJkaXN0cmlidXRlKGFkZHJlc3MpXCIsXG4gICAgICAgIGFyZ3M6IFthd2FpdCByZXNvbHZlQWRkcmVzcyh0b2tlbkFkZHJlc3MpXVxuICAgICAgfSk7XG4gICAgfSkpO1xuICAgIHRoaXMuX2NoYWluSWQgPSBjaGFpbklkO1xuICAgIHRoaXMuYWJpID0gQWJpU2NoZW1hLnBhcnNlKGFiaSB8fCBbXSk7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIgPSBjb250cmFjdFdyYXBwZXI7XG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcbiAgICB0aGlzLm1ldGFkYXRhID0gbmV3IENvbnRyYWN0TWV0YWRhdGEodGhpcy5jb250cmFjdFdyYXBwZXIsIFNwbGl0c0NvbnRyYWN0U2NoZW1hLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMuYXBwID0gbmV3IENvbnRyYWN0QXBwVVJJKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLm1ldGFkYXRhLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMucm9sZXMgPSBuZXcgQ29udHJhY3RSb2xlcyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgU3BsaXQuY29udHJhY3RSb2xlcyk7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lc3RpbWF0b3IgPSBuZXcgR2FzQ29zdEVzdGltYXRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgQ29udHJhY3RFdmVudHModGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuaW50ZXJjZXB0b3IgPSBuZXcgQ29udHJhY3RJbnRlcmNlcHRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gIH1cbiAgb25OZXR3b3JrVXBkYXRlZChuZXR3b3JrKSB7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIudXBkYXRlU2lnbmVyT3JQcm92aWRlcihuZXR3b3JrKTtcbiAgfVxuICBnZXRBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuYWRkcmVzcztcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUkVBRCBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCBSZWNpcGllbnRzIG9mIHRoaXMgc3BsaXRzIGNvbnRyYWN0XG4gICAqXG4gICAqIEByZW1hcmtzIEdldCB0aGUgZGF0YSBhYm91dCB0aGUgc2hhcmVzIG9mIGV2ZXJ5IHNwbGl0IHJlY2lwaWVudCBvbiB0aGUgY29udHJhY3RcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCByZWNpcGllbnRzID0gYXdhaXQgY29udHJhY3QuZ2V0QWxsUmVjaXBpZW50cygpO1xuICAgKiBjb25zb2xlLmxvZyhyZWNpcGllbnRzKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBnZXRBbGxSZWNpcGllbnRzKCkge1xuICAgIGNvbnN0IHJlY2lwaWVudHMgPSBbXTtcbiAgICBsZXQgaW5kZXggPSBCaWdOdW1iZXIuZnJvbSgwKTtcbiAgICBjb25zdCB0b3RhbFJlY2lwaWVudHMgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QucGF5ZWVDb3VudCgpO1xuICAgIHdoaWxlIChpbmRleC5sdCh0b3RhbFJlY2lwaWVudHMpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZWNpcGllbnRBZGRyZXNzID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnBheWVlKGluZGV4KTtcbiAgICAgICAgcmVjaXBpZW50cy5wdXNoKGF3YWl0IHRoaXMuZ2V0UmVjaXBpZW50U3BsaXRQZXJjZW50YWdlKHJlY2lwaWVudEFkZHJlc3MpKTtcbiAgICAgICAgaW5kZXggPSBpbmRleC5hZGQoMSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHdlIGtub3cgaG93IHRvIGRldGVjdCB0aGF0IHdlJ3ZlIGZvdW5kIGFsbCByZWNpcGllbnRzXG4gICAgICAgIC8vIGlzIGlmIHdlIGdldCBhbiBlcnJvciB3aGVuIHRyeWluZyB0byBnZXQgdGhlIG5leHQgcmVjaXBpZW50LlxuICAgICAgICBpZiAoXCJtZXRob2RcIiBpbiBlcnIgJiYgZXJyW1wibWV0aG9kXCJdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJwYXllZSh1aW50MjU2KVwiKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVjaXBpZW50cztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCB0aGUgcmVjaXBpZW50cyBhbmQgdGhlaXIgYmFsYW5jZXMgaW4gdGhlIG5hdGl2ZSBjdXJyZW5jeS5cbiAgICpcbiAgICogQHJldHVybnMgQSBtYXAgb2YgcmVjaXBpZW50IGFkZHJlc3NlcyB0byB0aGVpciBiYWxhbmNlcyBpbiB0aGUgbmF0aXZlIGN1cnJlbmN5LlxuICAgKi9cbiAgYXN5bmMgYmFsYW5jZU9mQWxsUmVjaXBpZW50cygpIHtcbiAgICBjb25zdCByZWNpcGllbnRzID0gYXdhaXQgdGhpcy5nZXRBbGxSZWNpcGllbnRzKCk7XG4gICAgY29uc3QgYmFsYW5jZXMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHJlY2lwaWVudCBvZiByZWNpcGllbnRzKSB7XG4gICAgICBiYWxhbmNlc1tyZWNpcGllbnQuYWRkcmVzc10gPSBhd2FpdCB0aGlzLmJhbGFuY2VPZihyZWNpcGllbnQuYWRkcmVzcyk7XG4gICAgfVxuICAgIHJldHVybiBiYWxhbmNlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCB0aGUgcmVjaXBpZW50cyBhbmQgdGhlaXIgYmFsYW5jZXMgaW4gYSBub24tbmF0aXZlIGN1cnJlbmN5LlxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW5BZGRyZXNzIC0gVGhlIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IHRvIGNoZWNrIHRoZSBiYWxhbmNlcyBpbi5cbiAgICogQHJldHVybnMgQSBtYXAgb2YgcmVjaXBpZW50IGFkZHJlc3NlcyB0byB0aGVpciBiYWxhbmNlcyBpbiB0aGUgc3BlY2lmaWVkIGN1cnJlbmN5LlxuICAgKi9cbiAgYXN5bmMgYmFsYW5jZU9mVG9rZW5BbGxSZWNpcGllbnRzKHRva2VuQWRkcmVzcykge1xuICAgIGNvbnN0IHJlc29sdmVkVG9rZW4gPSBhd2FpdCByZXNvbHZlQWRkcmVzcyh0b2tlbkFkZHJlc3MpO1xuICAgIGNvbnN0IHJlY2lwaWVudHMgPSBhd2FpdCB0aGlzLmdldEFsbFJlY2lwaWVudHMoKTtcbiAgICBjb25zdCBiYWxhbmNlcyA9IHt9O1xuICAgIGZvciAoY29uc3QgcmVjaXBpZW50IG9mIHJlY2lwaWVudHMpIHtcbiAgICAgIGJhbGFuY2VzW3JlY2lwaWVudC5hZGRyZXNzXSA9IGF3YWl0IHRoaXMuYmFsYW5jZU9mVG9rZW4ocmVjaXBpZW50LmFkZHJlc3MsIHJlc29sdmVkVG9rZW4pO1xuICAgIH1cbiAgICByZXR1cm4gYmFsYW5jZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IEZ1bmRzIG93ZWQgdG8gYSBwYXJ0aWN1bGFyIHdhbGxldFxuICAgKlxuICAgKiBAcmVtYXJrcyBHZXQgdGhlIGFtb3VudCBvZiBmdW5kcyBpbiB0aGUgbmF0aXZlIGN1cnJlbmN5IGhlbGQgYnkgdGhlIGNvbnRyYWN0IHRoYXQgaXMgb3dlZCB0byBhIHNwZWNpZmljIHJlY2lwaWVudC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgYWRkcmVzcyB0byBjaGVjayB0aGUgZnVuZHMgb2ZcbiAgICogY29uc3QgYWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCI7XG4gICAqIGNvbnN0IGZ1bmRzID0gYXdhaXQgY29udHJhY3QuYmFsYW5jZU9mKGFkZHJlc3MpO1xuICAgKiBjb25zb2xlLmxvZyhmdW5kcyk7XG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgYmFsYW5jZU9mKGFkZHJlc3MpIHtcbiAgICBjb25zdCByZXNvbHZlZEFkZHJlc3MgPSBhd2FpdCByZXNvbHZlQWRkcmVzcyhhZGRyZXNzKTtcbiAgICBjb25zdCB3YWxsZXRCYWxhbmNlID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnByb3ZpZGVyLmdldEJhbGFuY2UodGhpcy5nZXRBZGRyZXNzKCkpO1xuICAgIGNvbnN0IHRvdGFsUmVsZWFzZWQgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3RbXCJ0b3RhbFJlbGVhc2VkKClcIl0oKTtcbiAgICBjb25zdCB0b3RhbFJlY2VpdmVkID0gd2FsbGV0QmFsYW5jZS5hZGQodG90YWxSZWxlYXNlZCk7XG4gICAgcmV0dXJuIHRoaXMuX3BlbmRpbmdQYXltZW50KHJlc29sdmVkQWRkcmVzcywgdG90YWxSZWNlaXZlZCwgYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0W1wicmVsZWFzZWQoYWRkcmVzcylcIl0ocmVzb2x2ZWRBZGRyZXNzKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5vbi1uYXRpdmUgVG9rZW4gRnVuZHMgb3dlZCB0byBhIHBhcnRpY3VsYXIgd2FsbGV0XG4gICAqXG4gICAqIEByZW1hcmtzIEdldCB0aGUgYW1vdW50IG9mIGZ1bmRzIGluIHRoZSBub24tbmF0aXZlIHRva2VucyBoZWxkIGJ5IHRoZSBjb250cmFjdCB0aGF0IGlzIG93ZWQgdG8gYSBzcGVjaWZpYyByZWNpcGllbnQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gVGhlIGFkZHJlc3MgdG8gY2hlY2sgdGhlIGZ1bmRzIG9mXG4gICAqIGNvbnN0IGFkZHJlc3MgPSBcInt7d2FsbGV0X2FkZHJlc3N9fVwiO1xuICAgKiAvLyBUaGUgYWRkcmVzcyBvZiB0aGUgY3VycmVuY3kgdG8gY2hlY2sgdGhlIGNvbnRyYWN0cyBmdW5kcyBvZlxuICAgKiBjb25zdCB0b2tlbkFkZHJlc3MgPSBcIjB4Li4uXCJcbiAgICogY29uc3QgZnVuZHMgPSBhd2FpdCBjb250cmFjdC5iYWxhbmNlT2ZUb2tlbihhZGRyZXNzLCB0b2tlbkFkZHJlc3MpO1xuICAgKiBjb25zb2xlLmxvZyhmdW5kcyk7XG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgYmFsYW5jZU9mVG9rZW4od2FsbGV0QWRkcmVzcywgdG9rZW5BZGRyZXNzKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRUb2tlbiA9IGF3YWl0IHJlc29sdmVBZGRyZXNzKHRva2VuQWRkcmVzcyk7XG4gICAgY29uc3QgcmVzb2x2ZWRXYWxsZXQgPSBhd2FpdCByZXNvbHZlQWRkcmVzcyh3YWxsZXRBZGRyZXNzKTtcbiAgICBjb25zdCBlcmMyMCA9IG5ldyBDb250cmFjdChyZXNvbHZlZFRva2VuLCBFUkMyMEFiaSwgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKSk7XG4gICAgY29uc3Qgd2FsbGV0QmFsYW5jZSA9IGF3YWl0IGVyYzIwLmJhbGFuY2VPZih0aGlzLmdldEFkZHJlc3MoKSk7XG4gICAgY29uc3QgdG90YWxSZWxlYXNlZCA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdFtcInRvdGFsUmVsZWFzZWQoYWRkcmVzcylcIl0ocmVzb2x2ZWRUb2tlbik7XG4gICAgY29uc3QgdG90YWxSZWNlaXZlZCA9IHdhbGxldEJhbGFuY2UuYWRkKHRvdGFsUmVsZWFzZWQpO1xuICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgdGhpcy5fcGVuZGluZ1BheW1lbnQocmVzb2x2ZWRXYWxsZXQsIHRvdGFsUmVjZWl2ZWQsIGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdFtcInJlbGVhc2VkKGFkZHJlc3MsYWRkcmVzcylcIl0ocmVzb2x2ZWRUb2tlbiwgcmVzb2x2ZWRXYWxsZXQpKTtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2hDdXJyZW5jeVZhbHVlKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIHJlc29sdmVkVG9rZW4sIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlICUgb2YgZnVuZHMgb3dlZCB0byBhIGdpdmVuIGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3MgLSB0aGUgYWRkcmVzcyB0byBjaGVjayBwZXJjZW50YWdlIG9mXG4gICAqL1xuICBhc3luYyBnZXRSZWNpcGllbnRTcGxpdFBlcmNlbnRhZ2UoYWRkcmVzcykge1xuICAgIGNvbnN0IHJlc29sdmVkQWRkcmVzcyA9IGF3YWl0IHJlc29sdmVBZGRyZXNzKGFkZHJlc3MpO1xuICAgIGNvbnN0IFt0b3RhbFNoYXJlcywgd2FsbGV0c1NoYXJlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnRvdGFsU2hhcmVzKCksIHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5zaGFyZXMoYWRkcmVzcyldKTtcbiAgICAvLyBXZSBjb252ZXJ0IHRvIGJhc2lzIHBvaW50cyB0byBhdm9pZCBmbG9hdGluZyBwb2ludCBsb3NzIG9mIHByZWNpc2lvblxuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzOiByZXNvbHZlZEFkZHJlc3MsXG4gICAgICBzcGxpdFBlcmNlbnRhZ2U6IHdhbGxldHNTaGFyZXMubXVsKEJpZ051bWJlci5mcm9tKDFlNykpLmRpdih0b3RhbFNoYXJlcykudG9OdW1iZXIoKSAvIDFlNVxuICAgIH07XG4gIH1cbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBQUklWQVRFIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICBhc3luYyBfcGVuZGluZ1BheW1lbnQoYWRkcmVzcywgdG90YWxSZWNlaXZlZCwgYWxyZWFkeVJlbGVhc2VkKSB7XG4gICAgY29uc3QgYWRkcmVzc1JlY2VpdmVkID0gdG90YWxSZWNlaXZlZC5tdWwoYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnNoYXJlcyhhd2FpdCByZXNvbHZlQWRkcmVzcyhhZGRyZXNzKSkpO1xuICAgIGNvbnN0IHRvdGFsUm95YWx0eUF2YWlsYWJsZSA9IGFkZHJlc3NSZWNlaXZlZC5kaXYoYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnRvdGFsU2hhcmVzKCkpO1xuICAgIHJldHVybiB0b3RhbFJveWFsdHlBdmFpbGFibGUuc3ViKGFscmVhZHlSZWxlYXNlZCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBwcmVwYXJlKG1ldGhvZCwgYXJncywgb3ZlcnJpZGVzKSB7XG4gICAgcmV0dXJuIFRyYW5zYWN0aW9uLmZyb21Db250cmFjdFdyYXBwZXIoe1xuICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgIG1ldGhvZCxcbiAgICAgIGFyZ3MsXG4gICAgICBvdmVycmlkZXNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGNhbGwoZnVuY3Rpb25OYW1lLCBhcmdzLCBvdmVycmlkZXMpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIuY2FsbChmdW5jdGlvbk5hbWUsIGFyZ3MsIG92ZXJyaWRlcyk7XG4gIH1cbn1cbl9kZWZpbmVQcm9wZXJ0eShTcGxpdCwgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCJdKTtcblxuZXhwb3J0IHsgU3BsaXQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==