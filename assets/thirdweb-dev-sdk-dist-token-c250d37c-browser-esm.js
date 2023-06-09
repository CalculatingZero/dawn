"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_token-c250d37c_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/token-c250d37c.browser.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/token-c250d37c.browser.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Token: () => (/* binding */ Token)
/* harmony export */ });
/* harmony import */ var _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./QueryParams-7d9473b5.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-7d9473b5.browser.esm.js");
/* harmony import */ var _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contract-metadata-88f06ef9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/contract-metadata-88f06ef9.browser.esm.js");
/* harmony import */ var _erc_20_history_d64850b0_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./erc-20-history-d64850b0.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/erc-20-history-d64850b0.browser.esm.js");
/* harmony import */ var _erc_20_standard_03737e96_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./erc-20-standard-03737e96.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/erc-20-standard-03737e96.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/constants/lib.esm/addresses.js");
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
 * Create a standard crypto token or cryptocurrency.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "token");
 * ```
 *
 * @public
 */
class Token extends _erc_20_standard_03737e96_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.S {
  /**
   * Signature Minting
   * @remarks Generate tokens that can be minted only with your own signature, attaching your own set of mint conditions.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
   * const signedPayload = contract.signature.generate(payload);
   *
   * // now anyone can mint the tokens
   * const tx = contract.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * ```
   */

  /**
   * @internal
   */

  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dz(network, address, abi, options);
    super(contractWrapper, storage, chainId);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "abi", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "metadata", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "app", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "roles", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "encoder", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "estimator", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "history", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "events", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "platformFees", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "sales", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "signature", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "interceptor", void 0);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Mint Tokens for the connected wallet
     *
     * @remarks See {@link Token.mintTo}
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "mint", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async amount => {
      return this.erc20.mint.prepare(amount);
    }));
    /**
     * Mint Tokens
     *
     * @remarks Mint tokens to a specified address.
     *
     * @example
     * ```javascript
     * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
     * const amount = "1.5"; // The amount of this token you want to mint
     *
     * await contract.mintTo(toAddress, amount);
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "mintTo", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (to, amount) => {
      return this.erc20.mintTo.prepare(to, amount);
    }));
    /**
     * Mint Tokens To Many Wallets
     *
     * @remarks Mint tokens to many wallets in one transaction.
     *
     * @example
     * ```javascript
     * // Data of the tokens you want to mint
     * const data = [
     *   {
     *     toAddress: "{{wallet_address}}", // Address to mint tokens to
     *     amount: 0.2, // How many tokens to mint to specified address
     *   },
     *  {
     *    toAddress: "0x...",
     *    amount: 1.4,
     *  }
     * ]
     *
     * await contract.mintBatchTo(data);
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "mintBatchTo", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async args => {
      return this.erc20.mintBatchTo.prepare(args);
    }));
    /**
     * Lets you delegate your voting power to the delegateeAddress
     *
     * @param delegateeAddress - delegatee wallet address
     * @alpha
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "delegateTo", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async delegateeAddress => {
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "delegate",
        args: [await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.cH)(delegateeAddress)]
      });
    }));
    /**
     * Burn Tokens
     *
     * @remarks Burn tokens held by the connected wallet
     *
     * @example
     * ```javascript
     * // The amount of this token you want to burn
     * const amount = 1.2;
     *
     * await contract.burnTokens(amount);
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "burn", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(amount => {
      return this.erc20.burn.prepare(amount);
    }));
    /**
     * Burn Tokens
     *
     * @remarks Burn tokens held by the specified wallet
     *
     * @example
     * ```javascript
     * // Address of the wallet sending the tokens
     * const holderAddress = "{{wallet_address}}";
     *
     * // The amount of this token you want to burn
     * const amount = 1.2;
     *
     * await contract.burnFrom(holderAddress, amount);
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "burnFrom", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (holder, amount) => {
      return this.erc20.burnFrom.prepare(holder, amount);
    }));
    this.abi = _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.e.parse(abi || []);
    this.metadata = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ag(this.contractWrapper, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dS, this.storage);
    this.app = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.a$(this.contractWrapper, this.metadata, this.storage);
    this.roles = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ah(this.contractWrapper, Token.contractRoles);
    this.sales = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aj(this.contractWrapper);
    this.events = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aQ(this.contractWrapper);
    this.history = new _erc_20_history_d64850b0_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__.T(this.contractWrapper, this.events);
    this.encoder = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.af(this.contractWrapper);
    this.estimator = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aP(this.contractWrapper);
    this.platformFees = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aS(this.contractWrapper);
    this.interceptor = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aR(this.contractWrapper);
    this.signature = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ar(this.contractWrapper, this.roles);
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get your wallet voting power for the current checkpoints
   *
   * @returns the amount of voting power in tokens
   */
  async getVoteBalance() {
    return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress());
  }
  async getVoteBalanceOf(account) {
    return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(account));
  }

  /**
   * Get your voting delegatee address
   *
   * @returns the address of your vote delegatee
   */
  async getDelegation() {
    return await this.getDelegationOf(await this.contractWrapper.getSignerAddress());
  }

  /**
   * Get a specific address voting delegatee address
   *
   * @returns the address of your vote delegatee
   */
  async getDelegationOf(account) {
    return await this.contractWrapper.readContract.delegates(await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.cH)(account));
  }

  /**
   * Get whether users can transfer tokens from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.readContract.hasRole((0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.bE)("transfer"), ethers__WEBPACK_IMPORTED_MODULE_11__.AddressZero);
    return !anyoneCanTransfer;
  }
  /**
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param amount - The amount of tokens you want to mint
   *
   * @deprecated Use `contract.mint.prepare(...args)` instead
   */
  async getMintTransaction(to, amount) {
    return this.erc20.getMintTransaction(to, amount);
  }
  /**
   * @internal
   */
  async prepare(method, args, overrides) {
    return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aV.fromContractWrapper({
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
(0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(Token, "contractRoles", ["admin", "minter", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LXRva2VuLWMyNTBkMzdjLWJyb3dzZXItZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2RTtBQUMwWTtBQUNyWTtBQUNIO0FBQzVDO0FBQ3BCO0FBQ0Y7QUFDaUI7QUFDb0M7QUFDVDtBQUNRO0FBQ0c7QUFDRztBQUNiO0FBQ007QUFDRTtBQUNKO0FBQ1M7QUFDSjtBQUNDO0FBQ0Y7QUFDQTtBQUNQO0FBQ1U7QUFDSjtBQUNKO0FBQ007QUFDSztBQUNHO0FBQ1A7QUFDQTtBQUNDO0FBQ1I7QUFDTTtBQUNLO0FBQ0c7QUFDZjtBQUNVO0FBQ0Y7QUFDSztBQUNQO0FBQ1A7QUFDVTtBQUNGO0FBQ0M7QUFDVDtBQUNPO0FBQ0Y7QUFDVTtBQUNWO0FBQ0E7QUFDSjtBQUNEO0FBQ1E7QUFDUDtBQUNwQztBQUM2QztBQUM5QztBQUNzQztBQUM5QjtBQUNWO0FBQ2dEO0FBQ3hDO0FBQ3FDO0FBQ3BEO0FBQ1E7QUFDRztBQUNrQztBQUNRO0FBQ0M7QUFDUTtBQUNsRDtBQUNaO0FBQytEO0FBQ0M7QUFDeEM7QUFDdUI7QUFDQzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0MsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1RUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRywwRUFBZTtBQUNqSDtBQUNBLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLElBQUksdUVBQWUsZUFBZSw4RUFBd0I7QUFDMUQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCLEdBQUc7QUFDL0MsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBZSxpQkFBaUIsOEVBQXdCO0FBQzVEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUFlLHNCQUFzQiw4RUFBd0I7QUFDakU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBZSxxQkFBcUIsOEVBQXdCO0FBQ2hFLGFBQWEsMEVBQVc7QUFDeEI7QUFDQTtBQUNBLHFCQUFxQiw4RUFBYztBQUNuQyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBZSxlQUFlLDhFQUF3QjtBQUMxRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQWUsbUJBQW1CLDhFQUF3QjtBQUM5RDtBQUNBLEtBQUs7QUFDTCxlQUFlLHlFQUFTO0FBQ3hCLHdCQUF3QiwwRUFBZ0IsdUJBQXVCLDBFQUF3QjtBQUN2RixtQkFBbUIsMEVBQWM7QUFDakMscUJBQXFCLDBFQUFhO0FBQ2xDLHFCQUFxQiwwRUFBbUI7QUFDeEMsc0JBQXNCLDBFQUFjO0FBQ3BDLHVCQUF1Qix1RUFBaUI7QUFDeEMsdUJBQXVCLDBFQUFlO0FBQ3RDLHlCQUF5QiwwRUFBZ0I7QUFDekMsNEJBQTRCLDBFQUFtQjtBQUMvQywyQkFBMkIsMEVBQW1CO0FBQzlDLHlCQUF5QiwwRUFBc0I7QUFDL0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsOEVBQWM7QUFDakY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsOEVBQVcsY0FBYyxnREFBcUI7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMEVBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBZTs7QUFFRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvc2RrL2Rpc3QvdG9rZW4tYzI1MGQzN2MuYnJvd3Nlci5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXyBhcyBfZGVmaW5lUHJvcGVydHkgfSBmcm9tICcuL1F1ZXJ5UGFyYW1zLTdkOTQ3M2I1LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGR6IGFzIENvbnRyYWN0V3JhcHBlciwgZHMgYXMgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uLCBlIGFzIEFiaVNjaGVtYSwgYWcgYXMgQ29udHJhY3RNZXRhZGF0YSwgZFMgYXMgVG9rZW5FcmMyMENvbnRyYWN0U2NoZW1hLCBhJCBhcyBDb250cmFjdEFwcFVSSSwgYWggYXMgQ29udHJhY3RSb2xlcywgYWogYXMgQ29udHJhY3RQcmltYXJ5U2FsZSwgYVEgYXMgQ29udHJhY3RFdmVudHMsIGFmIGFzIENvbnRyYWN0RW5jb2RlciwgYVAgYXMgR2FzQ29zdEVzdGltYXRvciwgYVMgYXMgQ29udHJhY3RQbGF0Zm9ybUZlZSwgYVIgYXMgQ29udHJhY3RJbnRlcmNlcHRvciwgYXIgYXMgRXJjMjBTaWduYXR1cmVNaW50YWJsZSwgY0ggYXMgcmVzb2x2ZUFkZHJlc3MsIGJFIGFzIGdldFJvbGVIYXNoLCBhViBhcyBUcmFuc2FjdGlvbiB9IGZyb20gJy4vY29udHJhY3QtbWV0YWRhdGEtODhmMDZlZjkuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgVCBhcyBUb2tlbkVSQzIwSGlzdG9yeSB9IGZyb20gJy4vZXJjLTIwLWhpc3RvcnktZDY0ODUwYjAuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgUyBhcyBTdGFuZGFyZEVyYzIwIH0gZnJvbSAnLi9lcmMtMjAtc3RhbmRhcmQtMDM3MzdlOTYuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCAnYm4uanMnO1xuaW1wb3J0ICd6b2QnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NoYWlucyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMyMF9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwUGVybWl0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTXVsdGljYWxsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDNzIxX1YzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMVN1cHBseS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lMYXp5TWludC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjFfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9MYXp5TWludFdpdGhUaWVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMxMTU1X1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0VSQzI3NzFDb250ZXh0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFwcFVSSS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDb250cmFjdE1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURpcmVjdExpc3RpbmdzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVuZ2xpc2hBdWN0aW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lPZmZlcnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGFja1ZSRkRpcmVjdC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9uc0VudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGxhdGZvcm1GZWUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUHJpbWFyeVNhbGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUm95YWx0eS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL093bmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQWNjb3VudEZhY3RvcnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQWNjb3VudC5qc29uJztcbmltcG9ydCAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvQ29udHJhY3RQdWJsaXNoZXIuanNvbic7XG5pbXBvcnQgJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRm9yd2FyZGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L3N0b3JhZ2UnO1xuaW1wb3J0ICdjcm9zcy1mZXRjaCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JVGhpcmR3ZWJDb250cmFjdC5qc29uJztcbmltcG9ydCAnZXRoZXJzL2xpYi91dGlscy5qcyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjBNZXRhZGF0YS5qc29uJztcbmltcG9ydCAndXVpZCc7XG5pbXBvcnQgJ21lcmtsZXRyZWVqcyc7XG5pbXBvcnQgJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTY1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsRGVwcmVjYXRlZC5qc29uJztcbmltcG9ydCAnZXRoZXJzL2xpYi91dGlscyc7XG5pbXBvcnQgJ2JzNTgnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlMb2dpYy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5Um91dGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2dlbmVyYXRlZC1hYmlzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXRmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXUmVnaXN0cnkuanNvbic7XG5cbi8qKlxuICogQ3JlYXRlIGEgc3RhbmRhcmQgY3J5cHRvIHRva2VuIG9yIGNyeXB0b2N1cnJlbmN5LlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgVGhpcmR3ZWJTREsgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9zZGtcIjtcbiAqXG4gKiBjb25zdCBzZGsgPSBuZXcgVGhpcmR3ZWJTREsoXCJ7e2NoYWluTmFtZX19XCIpO1xuICogY29uc3QgY29udHJhY3QgPSBhd2FpdCBzZGsuZ2V0Q29udHJhY3QoXCJ7e2NvbnRyYWN0X2FkZHJlc3N9fVwiLCBcInRva2VuXCIpO1xuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBUb2tlbiBleHRlbmRzIFN0YW5kYXJkRXJjMjAge1xuICAvKipcbiAgICogU2lnbmF0dXJlIE1pbnRpbmdcbiAgICogQHJlbWFya3MgR2VuZXJhdGUgdG9rZW5zIHRoYXQgY2FuIGJlIG1pbnRlZCBvbmx5IHdpdGggeW91ciBvd24gc2lnbmF0dXJlLCBhdHRhY2hpbmcgeW91ciBvd24gc2V0IG9mIG1pbnQgY29uZGl0aW9ucy5cbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBzZWUgaG93IHRvIGNyYWZ0IGEgcGF5bG9hZCB0byBzaWduIGluIHRoZSBgY29udHJhY3Quc2lnbmF0dXJlLmdlbmVyYXRlKClgIGRvY3VtZW50YXRpb25cbiAgICogY29uc3Qgc2lnbmVkUGF5bG9hZCA9IGNvbnRyYWN0LnNpZ25hdHVyZS5nZW5lcmF0ZShwYXlsb2FkKTtcbiAgICpcbiAgICogLy8gbm93IGFueW9uZSBjYW4gbWludCB0aGUgdG9rZW5zXG4gICAqIGNvbnN0IHR4ID0gY29udHJhY3Quc2lnbmF0dXJlLm1pbnQoc2lnbmVkUGF5bG9hZCk7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgbWludCB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAqIGBgYFxuICAgKi9cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKG5ldHdvcmssIGFkZHJlc3MsIHN0b3JhZ2UpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgbGV0IGFiaSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ID8gYXJndW1lbnRzWzRdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjaGFpbklkID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNvbnRyYWN0V3JhcHBlciA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogbmV3IENvbnRyYWN0V3JhcHBlcihuZXR3b3JrLCBhZGRyZXNzLCBhYmksIG9wdGlvbnMpO1xuICAgIHN1cGVyKGNvbnRyYWN0V3JhcHBlciwgc3RvcmFnZSwgY2hhaW5JZCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWJpXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWV0YWRhdGFcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhcHBcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb2xlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuY29kZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlc3RpbWF0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoaXN0b3J5XCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGxhdGZvcm1GZWVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2FsZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzaWduYXR1cmVcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpbnRlcmNlcHRvclwiLCB2b2lkIDApO1xuICAgIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBXUklURSBGVU5DVElPTlNcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKipcbiAgICAgKiBNaW50IFRva2VucyBmb3IgdGhlIGNvbm5lY3RlZCB3YWxsZXRcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIFNlZSB7QGxpbmsgVG9rZW4ubWludFRvfVxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1pbnRcIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIGFtb3VudCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmMyMC5taW50LnByZXBhcmUoYW1vdW50KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogTWludCBUb2tlbnNcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIE1pbnQgdG9rZW5zIHRvIGEgc3BlY2lmaWVkIGFkZHJlc3MuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiBjb25zdCB0b0FkZHJlc3MgPSBcInt7d2FsbGV0X2FkZHJlc3N9fVwiOyAvLyBBZGRyZXNzIG9mIHRoZSB3YWxsZXQgeW91IHdhbnQgdG8gbWludCB0aGUgdG9rZW5zIHRvXG4gICAgICogY29uc3QgYW1vdW50ID0gXCIxLjVcIjsgLy8gVGhlIGFtb3VudCBvZiB0aGlzIHRva2VuIHlvdSB3YW50IHRvIG1pbnRcbiAgICAgKlxuICAgICAqIGF3YWl0IGNvbnRyYWN0Lm1pbnRUbyh0b0FkZHJlc3MsIGFtb3VudCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWludFRvXCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyAodG8sIGFtb3VudCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZXJjMjAubWludFRvLnByZXBhcmUodG8sIGFtb3VudCk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIE1pbnQgVG9rZW5zIFRvIE1hbnkgV2FsbGV0c1xuICAgICAqXG4gICAgICogQHJlbWFya3MgTWludCB0b2tlbnMgdG8gbWFueSB3YWxsZXRzIGluIG9uZSB0cmFuc2FjdGlvbi5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIERhdGEgb2YgdGhlIHRva2VucyB5b3Ugd2FudCB0byBtaW50XG4gICAgICogY29uc3QgZGF0YSA9IFtcbiAgICAgKiAgIHtcbiAgICAgKiAgICAgdG9BZGRyZXNzOiBcInt7d2FsbGV0X2FkZHJlc3N9fVwiLCAvLyBBZGRyZXNzIHRvIG1pbnQgdG9rZW5zIHRvXG4gICAgICogICAgIGFtb3VudDogMC4yLCAvLyBIb3cgbWFueSB0b2tlbnMgdG8gbWludCB0byBzcGVjaWZpZWQgYWRkcmVzc1xuICAgICAqICAgfSxcbiAgICAgKiAge1xuICAgICAqICAgIHRvQWRkcmVzczogXCIweC4uLlwiLFxuICAgICAqICAgIGFtb3VudDogMS40LFxuICAgICAqICB9XG4gICAgICogXVxuICAgICAqXG4gICAgICogYXdhaXQgY29udHJhY3QubWludEJhdGNoVG8oZGF0YSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWludEJhdGNoVG9cIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIGFyZ3MgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZXJjMjAubWludEJhdGNoVG8ucHJlcGFyZShhcmdzKTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogTGV0cyB5b3UgZGVsZWdhdGUgeW91ciB2b3RpbmcgcG93ZXIgdG8gdGhlIGRlbGVnYXRlZUFkZHJlc3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZWxlZ2F0ZWVBZGRyZXNzIC0gZGVsZWdhdGVlIHdhbGxldCBhZGRyZXNzXG4gICAgICogQGFscGhhXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZGVsZWdhdGVUb1wiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgZGVsZWdhdGVlQWRkcmVzcyA9PiB7XG4gICAgICByZXR1cm4gVHJhbnNhY3Rpb24uZnJvbUNvbnRyYWN0V3JhcHBlcih7XG4gICAgICAgIGNvbnRyYWN0V3JhcHBlcjogdGhpcy5jb250cmFjdFdyYXBwZXIsXG4gICAgICAgIG1ldGhvZDogXCJkZWxlZ2F0ZVwiLFxuICAgICAgICBhcmdzOiBbYXdhaXQgcmVzb2x2ZUFkZHJlc3MoZGVsZWdhdGVlQWRkcmVzcyldXG4gICAgICB9KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogQnVybiBUb2tlbnNcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIEJ1cm4gdG9rZW5zIGhlbGQgYnkgdGhlIGNvbm5lY3RlZCB3YWxsZXRcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIFRoZSBhbW91bnQgb2YgdGhpcyB0b2tlbiB5b3Ugd2FudCB0byBidXJuXG4gICAgICogY29uc3QgYW1vdW50ID0gMS4yO1xuICAgICAqXG4gICAgICogYXdhaXQgY29udHJhY3QuYnVyblRva2VucyhhbW91bnQpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ1cm5cIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFtb3VudCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmMyMC5idXJuLnByZXBhcmUoYW1vdW50KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogQnVybiBUb2tlbnNcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIEJ1cm4gdG9rZW5zIGhlbGQgYnkgdGhlIHNwZWNpZmllZCB3YWxsZXRcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIEFkZHJlc3Mgb2YgdGhlIHdhbGxldCBzZW5kaW5nIHRoZSB0b2tlbnNcbiAgICAgKiBjb25zdCBob2xkZXJBZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjtcbiAgICAgKlxuICAgICAqIC8vIFRoZSBhbW91bnQgb2YgdGhpcyB0b2tlbiB5b3Ugd2FudCB0byBidXJuXG4gICAgICogY29uc3QgYW1vdW50ID0gMS4yO1xuICAgICAqXG4gICAgICogYXdhaXQgY29udHJhY3QuYnVybkZyb20oaG9sZGVyQWRkcmVzcywgYW1vdW50KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJidXJuRnJvbVwiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgKGhvbGRlciwgYW1vdW50KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmMyMC5idXJuRnJvbS5wcmVwYXJlKGhvbGRlciwgYW1vdW50KTtcbiAgICB9KSk7XG4gICAgdGhpcy5hYmkgPSBBYmlTY2hlbWEucGFyc2UoYWJpIHx8IFtdKTtcbiAgICB0aGlzLm1ldGFkYXRhID0gbmV3IENvbnRyYWN0TWV0YWRhdGEodGhpcy5jb250cmFjdFdyYXBwZXIsIFRva2VuRXJjMjBDb250cmFjdFNjaGVtYSwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLmFwcCA9IG5ldyBDb250cmFjdEFwcFVSSSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5tZXRhZGF0YSwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLnJvbGVzID0gbmV3IENvbnRyYWN0Um9sZXModGhpcy5jb250cmFjdFdyYXBwZXIsIFRva2VuLmNvbnRyYWN0Um9sZXMpO1xuICAgIHRoaXMuc2FsZXMgPSBuZXcgQ29udHJhY3RQcmltYXJ5U2FsZSh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgQ29udHJhY3RFdmVudHModGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBUb2tlbkVSQzIwSGlzdG9yeSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5ldmVudHMpO1xuICAgIHRoaXMuZW5jb2RlciA9IG5ldyBDb250cmFjdEVuY29kZXIodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZXN0aW1hdG9yID0gbmV3IEdhc0Nvc3RFc3RpbWF0b3IodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMucGxhdGZvcm1GZWVzID0gbmV3IENvbnRyYWN0UGxhdGZvcm1GZWUodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuaW50ZXJjZXB0b3IgPSBuZXcgQ29udHJhY3RJbnRlcmNlcHRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5zaWduYXR1cmUgPSBuZXcgRXJjMjBTaWduYXR1cmVNaW50YWJsZSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5yb2xlcyk7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFJFQUQgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBHZXQgeW91ciB3YWxsZXQgdm90aW5nIHBvd2VyIGZvciB0aGUgY3VycmVudCBjaGVja3BvaW50c1xuICAgKlxuICAgKiBAcmV0dXJucyB0aGUgYW1vdW50IG9mIHZvdGluZyBwb3dlciBpbiB0b2tlbnNcbiAgICovXG4gIGFzeW5jIGdldFZvdGVCYWxhbmNlKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldFZvdGVCYWxhbmNlT2YoYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0U2lnbmVyQWRkcmVzcygpKTtcbiAgfVxuICBhc3luYyBnZXRWb3RlQmFsYW5jZU9mKGFjY291bnQpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5lcmMyMC5nZXRWYWx1ZShhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuZ2V0Vm90ZXMoYWNjb3VudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB5b3VyIHZvdGluZyBkZWxlZ2F0ZWUgYWRkcmVzc1xuICAgKlxuICAgKiBAcmV0dXJucyB0aGUgYWRkcmVzcyBvZiB5b3VyIHZvdGUgZGVsZWdhdGVlXG4gICAqL1xuICBhc3luYyBnZXREZWxlZ2F0aW9uKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldERlbGVnYXRpb25PZihhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRTaWduZXJBZGRyZXNzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHNwZWNpZmljIGFkZHJlc3Mgdm90aW5nIGRlbGVnYXRlZSBhZGRyZXNzXG4gICAqXG4gICAqIEByZXR1cm5zIHRoZSBhZGRyZXNzIG9mIHlvdXIgdm90ZSBkZWxlZ2F0ZWVcbiAgICovXG4gIGFzeW5jIGdldERlbGVnYXRpb25PZihhY2NvdW50KSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5kZWxlZ2F0ZXMoYXdhaXQgcmVzb2x2ZUFkZHJlc3MoYWNjb3VudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHVzZXJzIGNhbiB0cmFuc2ZlciB0b2tlbnMgZnJvbSB0aGlzIGNvbnRyYWN0XG4gICAqL1xuICBhc3luYyBpc1RyYW5zZmVyUmVzdHJpY3RlZCgpIHtcbiAgICBjb25zdCBhbnlvbmVDYW5UcmFuc2ZlciA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5oYXNSb2xlKGdldFJvbGVIYXNoKFwidHJhbnNmZXJcIiksIGNvbnN0YW50cy5BZGRyZXNzWmVybyk7XG4gICAgcmV0dXJuICFhbnlvbmVDYW5UcmFuc2ZlcjtcbiAgfVxuICAvKipcbiAgICogQ29uc3RydWN0IGEgbWludCB0cmFuc2FjdGlvbiB3aXRob3V0IGV4ZWN1dGluZyBpdC5cbiAgICogVGhpcyBpcyB1c2VmdWwgZm9yIGVzdGltYXRpbmcgdGhlIGdhcyBjb3N0IG9mIGEgbWludCB0cmFuc2FjdGlvbiwgb3ZlcnJpZGluZyB0cmFuc2FjdGlvbiBvcHRpb25zIGFuZCBoYXZpbmcgZmluZSBncmFpbmVkIGNvbnRyb2wgb3ZlciB0aGUgdHJhbnNhY3Rpb24gZXhlY3V0aW9uLlxuICAgKiBAcGFyYW0gcmVjZWl2ZXIgLSBBZGRyZXNzIHlvdSB3YW50IHRvIHNlbmQgdGhlIHRva2VuIHRvXG4gICAqIEBwYXJhbSBhbW91bnQgLSBUaGUgYW1vdW50IG9mIHRva2VucyB5b3Ugd2FudCB0byBtaW50XG4gICAqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgY29udHJhY3QubWludC5wcmVwYXJlKC4uLmFyZ3MpYCBpbnN0ZWFkXG4gICAqL1xuICBhc3luYyBnZXRNaW50VHJhbnNhY3Rpb24odG8sIGFtb3VudCkge1xuICAgIHJldHVybiB0aGlzLmVyYzIwLmdldE1pbnRUcmFuc2FjdGlvbih0bywgYW1vdW50KTtcbiAgfVxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBwcmVwYXJlKG1ldGhvZCwgYXJncywgb3ZlcnJpZGVzKSB7XG4gICAgcmV0dXJuIFRyYW5zYWN0aW9uLmZyb21Db250cmFjdFdyYXBwZXIoe1xuICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgIG1ldGhvZCxcbiAgICAgIGFyZ3MsXG4gICAgICBvdmVycmlkZXNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGNhbGwoZnVuY3Rpb25OYW1lLCBhcmdzLCBvdmVycmlkZXMpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIuY2FsbChmdW5jdGlvbk5hbWUsIGFyZ3MsIG92ZXJyaWRlcyk7XG4gIH1cbn1cbl9kZWZpbmVQcm9wZXJ0eShUb2tlbiwgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCIsIFwibWludGVyXCIsIFwidHJhbnNmZXJcIl0pO1xuXG5leHBvcnQgeyBUb2tlbiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9