"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_token-drop-dc105915_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/token-drop-dc105915.browser.esm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/token-drop-dc105915.browser.esm.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenDrop: () => (/* binding */ TokenDrop)
/* harmony export */ });
/* harmony import */ var _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./QueryParams-7d9473b5.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-7d9473b5.browser.esm.js");
/* harmony import */ var _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contract-metadata-88f06ef9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/contract-metadata-88f06ef9.browser.esm.js");
/* harmony import */ var _erc_20_standard_03737e96_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./erc-20-standard-03737e96.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/erc-20-standard-03737e96.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/constants/lib.esm/addresses.js");
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
 * Create a Drop contract for a standard crypto token or cryptocurrency.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "token-drop");
 * ```
 *
 */
class TokenDrop extends _erc_20_standard_03737e96_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.S {
  /**
   * Configure claim conditions
   * @remarks Define who can claim Tokens, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 3117.42, // limit how many tokens are released in this presale
   *     price: 0.001, // presale price per token
   *     snapshot: ['0x...', '0x...'], // limit claiming to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.008, // public sale price per token
   *   }
   * ]);
   * await contract.claimConditions.set(claimConditions);
   * ```
   */

  /**
   * @internal
   */

  constructor(network, address, storage) {
    var _this;
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dz(network, address, abi, options);
    super(contractWrapper, storage, chainId);
    _this = this;
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "abi", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "metadata", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "app", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "roles", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "encoder", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "estimator", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "sales", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "platformFees", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "events", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "claimConditions", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "interceptor", void 0);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Claim a certain amount of tokens
     * @remarks See {@link TokenDrop.claimTo}
     * @param amount - the amount of tokens to mint
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "claim", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async function (amount) {
      let checkERC20Allowance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return _this.claimTo.prepare(await _this.contractWrapper.getSignerAddress(), amount, checkERC20Allowance);
    }));
    /**
     * Claim a certain amount of tokens to a specific Wallet
     *
     * @remarks Let the specified wallet claim Tokens.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 42.69; // how many tokens you want to claim
     *
     * const tx = await contract.claimTo(address, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param amount - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     *
     * @returns - The transaction receipt
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "claimTo", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async function (destinationAddress, amount) {
      let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return _this.erc20.claimTo.prepare(destinationAddress, amount, {
        checkERC20Allowance
      });
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
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "burnTokens", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async amount => {
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
    this.metadata = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ag(this.contractWrapper, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dR, this.storage);
    this.app = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.a$(this.contractWrapper, this.metadata, this.storage);
    this.roles = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ah(this.contractWrapper, TokenDrop.contractRoles);
    this.encoder = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.af(this.contractWrapper);
    this.estimator = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aP(this.contractWrapper);
    this.events = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aQ(this.contractWrapper);
    this.sales = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aj(this.contractWrapper);
    this.platformFees = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aS(this.contractWrapper);
    this.interceptor = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aR(this.contractWrapper);
    this.claimConditions = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.al(this.contractWrapper, this.metadata, this.storage);
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
    return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.cH)(account)));
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
    const anyoneCanTransfer = await this.contractWrapper.readContract.hasRole((0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.bE)("transfer"), ethers__WEBPACK_IMPORTED_MODULE_10__.AddressZero);
    return !anyoneCanTransfer;
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
(0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(TokenDrop, "contractRoles", ["admin", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LXRva2VuLWRyb3AtZGMxMDU5MTUtYnJvd3Nlci1lc20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDc1k7QUFDcFk7QUFDNUM7QUFDcEI7QUFDRjtBQUNpQjtBQUNvQztBQUNUO0FBQ1E7QUFDRztBQUNHO0FBQ2I7QUFDTTtBQUNFO0FBQ0o7QUFDUztBQUNKO0FBQ0M7QUFDRjtBQUNBO0FBQ1A7QUFDVTtBQUNKO0FBQ0o7QUFDTTtBQUNLO0FBQ0c7QUFDUDtBQUNBO0FBQ0M7QUFDUjtBQUNNO0FBQ0s7QUFDRztBQUNmO0FBQ1U7QUFDRjtBQUNLO0FBQ1A7QUFDUDtBQUNVO0FBQ0Y7QUFDQztBQUNUO0FBQ087QUFDRjtBQUNVO0FBQ1Y7QUFDQTtBQUNKO0FBQ0Q7QUFDUTtBQUNQO0FBQ3BDO0FBQzZDO0FBQzlDO0FBQ3NDO0FBQzlCO0FBQ1Y7QUFDZ0Q7QUFDeEM7QUFDcUM7QUFDcEQ7QUFDUTtBQUNHO0FBQ2tDO0FBQ1E7QUFDQztBQUNRO0FBQ2xEO0FBQ1o7QUFDK0Q7QUFDQztBQUN4QztBQUN1QjtBQUNDOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQSxrQ0FBa0MsV0FBVztBQUM3Qyw2Q0FBNkMsa0JBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1RUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLDBFQUFlO0FBQ2pIO0FBQ0E7QUFDQSxJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUFlLGdCQUFnQiw4RUFBd0I7QUFDM0Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsR0FBRztBQUM3QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBZSxrQkFBa0IsOEVBQXdCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBZSxxQkFBcUIsOEVBQXdCO0FBQ2hFLGFBQWEsMEVBQVc7QUFDeEI7QUFDQTtBQUNBLHFCQUFxQiw4RUFBYztBQUNuQyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBZSxxQkFBcUIsOEVBQXdCO0FBQ2hFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBZSxtQkFBbUIsOEVBQXdCO0FBQzlEO0FBQ0EsS0FBSztBQUNMLGVBQWUseUVBQVM7QUFDeEIsd0JBQXdCLDBFQUFnQix1QkFBdUIsMEVBQXVCO0FBQ3RGLG1CQUFtQiwwRUFBYztBQUNqQyxxQkFBcUIsMEVBQWE7QUFDbEMsdUJBQXVCLDBFQUFlO0FBQ3RDLHlCQUF5QiwwRUFBZ0I7QUFDekMsc0JBQXNCLDBFQUFjO0FBQ3BDLHFCQUFxQiwwRUFBbUI7QUFDeEMsNEJBQTRCLDBFQUFtQjtBQUMvQywyQkFBMkIsMEVBQW1CO0FBQzlDLCtCQUErQiwwRUFBbUI7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0Riw4RUFBYztBQUMxRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSw4RUFBYztBQUNqRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSw4RUFBVyxjQUFjLGdEQUFxQjtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBFQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQWU7O0FBRU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3Nkay9kaXN0L3Rva2VuLWRyb3AtZGMxMDU5MTUuYnJvd3Nlci5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXyBhcyBfZGVmaW5lUHJvcGVydHkgfSBmcm9tICcuL1F1ZXJ5UGFyYW1zLTdkOTQ3M2I1LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGR6IGFzIENvbnRyYWN0V3JhcHBlciwgZHMgYXMgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uLCBlIGFzIEFiaVNjaGVtYSwgYWcgYXMgQ29udHJhY3RNZXRhZGF0YSwgZFIgYXMgRHJvcEVyYzIwQ29udHJhY3RTY2hlbWEsIGEkIGFzIENvbnRyYWN0QXBwVVJJLCBhaCBhcyBDb250cmFjdFJvbGVzLCBhZiBhcyBDb250cmFjdEVuY29kZXIsIGFQIGFzIEdhc0Nvc3RFc3RpbWF0b3IsIGFRIGFzIENvbnRyYWN0RXZlbnRzLCBhaiBhcyBDb250cmFjdFByaW1hcnlTYWxlLCBhUyBhcyBDb250cmFjdFBsYXRmb3JtRmVlLCBhUiBhcyBDb250cmFjdEludGVyY2VwdG9yLCBhbCBhcyBEcm9wQ2xhaW1Db25kaXRpb25zLCBjSCBhcyByZXNvbHZlQWRkcmVzcywgYkUgYXMgZ2V0Um9sZUhhc2gsIGFWIGFzIFRyYW5zYWN0aW9uIH0gZnJvbSAnLi9jb250cmFjdC1tZXRhZGF0YS04OGYwNmVmOS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBTIGFzIFN0YW5kYXJkRXJjMjAgfSBmcm9tICcuL2VyYy0yMC1zdGFuZGFyZC0wMzczN2U5Ni5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0ICdibi5qcyc7XG5pbXBvcnQgJ3pvZCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY2hhaW5zJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzIwX1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2VfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjBQZXJtaXQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNdWx0aWNhbGwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkM3MjFfVjMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxU3VwcGx5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUxhenlNaW50Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0xhenlNaW50V2l0aFRpZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcDExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzExNTVfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1X1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRVJDMjc3MUNvbnRleHQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQXBwVVJJLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNvbnRyYWN0TWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGlyZWN0TGlzdGluZ3MuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRW5nbGlzaEF1Y3Rpb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU9mZmVycy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQYWNrVlJGRGlyZWN0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQbGF0Zm9ybUZlZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQcmltYXJ5U2FsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3lhbHR5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvT3duYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBY2NvdW50RmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBY2NvdW50Lmpzb24nO1xuaW1wb3J0ICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Db250cmFjdFB1Ymxpc2hlci5qc29uJztcbmltcG9ydCAnZXZlbnRlbWl0dGVyMyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Gb3J3YXJkZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvc3RvcmFnZSc7XG5pbXBvcnQgJ2Nyb3NzLWZldGNoJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lUaGlyZHdlYkNvbnRyYWN0Lmpzb24nO1xuaW1wb3J0ICdldGhlcnMvbGliL3V0aWxzLmpzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyME1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICd1dWlkJztcbmltcG9ydCAnbWVya2xldHJlZWpzJztcbmltcG9ydCAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxNjUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWxEZXByZWNhdGVkLmpzb24nO1xuaW1wb3J0ICdldGhlcnMvbGliL3V0aWxzJztcbmltcG9ydCAnYnM1OCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeUxvZ2ljLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvZ2VuZXJhdGVkLWFiaXMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdSZWdpc3RyeS5qc29uJztcblxuLyoqXG4gKiBDcmVhdGUgYSBEcm9wIGNvbnRyYWN0IGZvciBhIHN0YW5kYXJkIGNyeXB0byB0b2tlbiBvciBjcnlwdG9jdXJyZW5jeS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCI7XG4gKlxuICogY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKFwie3tjaGFpbk5hbWV9fVwiKTtcbiAqIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgc2RrLmdldENvbnRyYWN0KFwie3tjb250cmFjdF9hZGRyZXNzfX1cIiwgXCJ0b2tlbi1kcm9wXCIpO1xuICogYGBgXG4gKlxuICovXG5jbGFzcyBUb2tlbkRyb3AgZXh0ZW5kcyBTdGFuZGFyZEVyYzIwIHtcbiAgLyoqXG4gICAqIENvbmZpZ3VyZSBjbGFpbSBjb25kaXRpb25zXG4gICAqIEByZW1hcmtzIERlZmluZSB3aG8gY2FuIGNsYWltIFRva2Vucywgd2hlbiBhbmQgaG93IG1hbnkuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgcHJlc2FsZVN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAqIGNvbnN0IHB1YmxpY1NhbGVTdGFydFRpbWUgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgNjAgKiA2MCAqIDI0ICogMTAwMCk7XG4gICAqIGNvbnN0IGNsYWltQ29uZGl0aW9ucyA9IFtcbiAgICogICB7XG4gICAqICAgICBzdGFydFRpbWU6IHByZXNhbGVTdGFydFRpbWUsIC8vIHN0YXJ0IHRoZSBwcmVzYWxlIG5vd1xuICAgKiAgICAgbWF4UXVhbnRpdHk6IDMxMTcuNDIsIC8vIGxpbWl0IGhvdyBtYW55IHRva2VucyBhcmUgcmVsZWFzZWQgaW4gdGhpcyBwcmVzYWxlXG4gICAqICAgICBwcmljZTogMC4wMDEsIC8vIHByZXNhbGUgcHJpY2UgcGVyIHRva2VuXG4gICAqICAgICBzbmFwc2hvdDogWycweC4uLicsICcweC4uLiddLCAvLyBsaW1pdCBjbGFpbWluZyB0byBvbmx5IGNlcnRhaW4gYWRkcmVzc2VzXG4gICAqICAgfSxcbiAgICogICB7XG4gICAqICAgICBzdGFydFRpbWU6IHB1YmxpY1NhbGVTdGFydFRpbWUsIC8vIDI0aCBhZnRlciBwcmVzYWxlLCBzdGFydCBwdWJsaWMgc2FsZVxuICAgKiAgICAgcHJpY2U6IDAuMDA4LCAvLyBwdWJsaWMgc2FsZSBwcmljZSBwZXIgdG9rZW5cbiAgICogICB9XG4gICAqIF0pO1xuICAgKiBhd2FpdCBjb250cmFjdC5jbGFpbUNvbmRpdGlvbnMuc2V0KGNsYWltQ29uZGl0aW9ucyk7XG4gICAqIGBgYFxuICAgKi9cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKG5ldHdvcmssIGFkZHJlc3MsIHN0b3JhZ2UpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGxldCBhYmkgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY2hhaW5JZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ID8gYXJndW1lbnRzWzVdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjb250cmFjdFdyYXBwZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IG5ldyBDb250cmFjdFdyYXBwZXIobmV0d29yaywgYWRkcmVzcywgYWJpLCBvcHRpb25zKTtcbiAgICBzdXBlcihjb250cmFjdFdyYXBwZXIsIHN0b3JhZ2UsIGNoYWluSWQpO1xuICAgIF90aGlzID0gdGhpcztcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhYmlcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXRhZGF0YVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFwcFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJvbGVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW5jb2RlclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVzdGltYXRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNhbGVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGxhdGZvcm1GZWVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY2xhaW1Db25kaXRpb25zXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaW50ZXJjZXB0b3JcIiwgdm9pZCAwKTtcbiAgICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogV1JJVEUgRlVOQ1RJT05TXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqXG4gICAgICogQ2xhaW0gYSBjZXJ0YWluIGFtb3VudCBvZiB0b2tlbnNcbiAgICAgKiBAcmVtYXJrcyBTZWUge0BsaW5rIFRva2VuRHJvcC5jbGFpbVRvfVxuICAgICAqIEBwYXJhbSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIHRva2VucyB0byBtaW50XG4gICAgICogQHBhcmFtIGNoZWNrRVJDMjBBbGxvd2FuY2UgLSBPcHRpb25hbCwgY2hlY2sgaWYgdGhlIHdhbGxldCBoYXMgZW5vdWdoIEVSQzIwIGFsbG93YW5jZSB0byBjbGFpbSB0aGUgdG9rZW5zLCBhbmQgaWYgbm90LCBhcHByb3ZlIHRoZSB0cmFuc2ZlclxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNsYWltXCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICBsZXQgY2hlY2tFUkMyMEFsbG93YW5jZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgIHJldHVybiBfdGhpcy5jbGFpbVRvLnByZXBhcmUoYXdhaXQgX3RoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKSwgYW1vdW50LCBjaGVja0VSQzIwQWxsb3dhbmNlKTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogQ2xhaW0gYSBjZXJ0YWluIGFtb3VudCBvZiB0b2tlbnMgdG8gYSBzcGVjaWZpYyBXYWxsZXRcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIExldCB0aGUgc3BlY2lmaWVkIHdhbGxldCBjbGFpbSBUb2tlbnMuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiBjb25zdCBhZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjsgLy8gYWRkcmVzcyBvZiB0aGUgd2FsbGV0IHlvdSB3YW50IHRvIGNsYWltIHRoZSBORlRzXG4gICAgICogY29uc3QgcXVhbnRpdHkgPSA0Mi42OTsgLy8gaG93IG1hbnkgdG9rZW5zIHlvdSB3YW50IHRvIGNsYWltXG4gICAgICpcbiAgICAgKiBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LmNsYWltVG8oYWRkcmVzcywgcXVhbnRpdHkpO1xuICAgICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIGRlc3RpbmF0aW9uQWRkcmVzcyAtIEFkZHJlc3MgeW91IHdhbnQgdG8gc2VuZCB0aGUgdG9rZW4gdG9cbiAgICAgKiBAcGFyYW0gYW1vdW50IC0gUXVhbnRpdHkgb2YgdGhlIHRva2VucyB5b3Ugd2FudCB0byBjbGFpbVxuICAgICAqIEBwYXJhbSBjaGVja0VSQzIwQWxsb3dhbmNlIC0gT3B0aW9uYWwsIGNoZWNrIGlmIHRoZSB3YWxsZXQgaGFzIGVub3VnaCBFUkMyMCBhbGxvd2FuY2UgdG8gY2xhaW0gdGhlIHRva2VucywgYW5kIGlmIG5vdCwgYXBwcm92ZSB0aGUgdHJhbnNmZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIC0gVGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjbGFpbVRvXCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyBmdW5jdGlvbiAoZGVzdGluYXRpb25BZGRyZXNzLCBhbW91bnQpIHtcbiAgICAgIGxldCBjaGVja0VSQzIwQWxsb3dhbmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICAgICAgcmV0dXJuIF90aGlzLmVyYzIwLmNsYWltVG8ucHJlcGFyZShkZXN0aW5hdGlvbkFkZHJlc3MsIGFtb3VudCwge1xuICAgICAgICBjaGVja0VSQzIwQWxsb3dhbmNlXG4gICAgICB9KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogTGV0cyB5b3UgZGVsZWdhdGUgeW91ciB2b3RpbmcgcG93ZXIgdG8gdGhlIGRlbGVnYXRlZUFkZHJlc3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZWxlZ2F0ZWVBZGRyZXNzIC0gZGVsZWdhdGVlIHdhbGxldCBhZGRyZXNzXG4gICAgICogQGFscGhhXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZGVsZWdhdGVUb1wiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgZGVsZWdhdGVlQWRkcmVzcyA9PiB7XG4gICAgICByZXR1cm4gVHJhbnNhY3Rpb24uZnJvbUNvbnRyYWN0V3JhcHBlcih7XG4gICAgICAgIGNvbnRyYWN0V3JhcHBlcjogdGhpcy5jb250cmFjdFdyYXBwZXIsXG4gICAgICAgIG1ldGhvZDogXCJkZWxlZ2F0ZVwiLFxuICAgICAgICBhcmdzOiBbYXdhaXQgcmVzb2x2ZUFkZHJlc3MoZGVsZWdhdGVlQWRkcmVzcyldXG4gICAgICB9KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogQnVybiBUb2tlbnNcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIEJ1cm4gdG9rZW5zIGhlbGQgYnkgdGhlIGNvbm5lY3RlZCB3YWxsZXRcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIFRoZSBhbW91bnQgb2YgdGhpcyB0b2tlbiB5b3Ugd2FudCB0byBidXJuXG4gICAgICogY29uc3QgYW1vdW50ID0gMS4yO1xuICAgICAqXG4gICAgICogYXdhaXQgY29udHJhY3QuYnVyblRva2VucyhhbW91bnQpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ1cm5Ub2tlbnNcIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIGFtb3VudCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmMyMC5idXJuLnByZXBhcmUoYW1vdW50KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogQnVybiBUb2tlbnNcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIEJ1cm4gdG9rZW5zIGhlbGQgYnkgdGhlIHNwZWNpZmllZCB3YWxsZXRcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIEFkZHJlc3Mgb2YgdGhlIHdhbGxldCBzZW5kaW5nIHRoZSB0b2tlbnNcbiAgICAgKiBjb25zdCBob2xkZXJBZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjtcbiAgICAgKlxuICAgICAqIC8vIFRoZSBhbW91bnQgb2YgdGhpcyB0b2tlbiB5b3Ugd2FudCB0byBidXJuXG4gICAgICogY29uc3QgYW1vdW50ID0gMS4yO1xuICAgICAqXG4gICAgICogYXdhaXQgY29udHJhY3QuYnVybkZyb20oaG9sZGVyQWRkcmVzcywgYW1vdW50KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJidXJuRnJvbVwiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgKGhvbGRlciwgYW1vdW50KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmMyMC5idXJuRnJvbS5wcmVwYXJlKGhvbGRlciwgYW1vdW50KTtcbiAgICB9KSk7XG4gICAgdGhpcy5hYmkgPSBBYmlTY2hlbWEucGFyc2UoYWJpIHx8IFtdKTtcbiAgICB0aGlzLm1ldGFkYXRhID0gbmV3IENvbnRyYWN0TWV0YWRhdGEodGhpcy5jb250cmFjdFdyYXBwZXIsIERyb3BFcmMyMENvbnRyYWN0U2NoZW1hLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMuYXBwID0gbmV3IENvbnRyYWN0QXBwVVJJKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLm1ldGFkYXRhLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMucm9sZXMgPSBuZXcgQ29udHJhY3RSb2xlcyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgVG9rZW5Ecm9wLmNvbnRyYWN0Um9sZXMpO1xuICAgIHRoaXMuZW5jb2RlciA9IG5ldyBDb250cmFjdEVuY29kZXIodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZXN0aW1hdG9yID0gbmV3IEdhc0Nvc3RFc3RpbWF0b3IodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IENvbnRyYWN0RXZlbnRzKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLnNhbGVzID0gbmV3IENvbnRyYWN0UHJpbWFyeVNhbGUodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMucGxhdGZvcm1GZWVzID0gbmV3IENvbnRyYWN0UGxhdGZvcm1GZWUodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuaW50ZXJjZXB0b3IgPSBuZXcgQ29udHJhY3RJbnRlcmNlcHRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5jbGFpbUNvbmRpdGlvbnMgPSBuZXcgRHJvcENsYWltQ29uZGl0aW9ucyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5tZXRhZGF0YSwgdGhpcy5zdG9yYWdlKTtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUkVBRCBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCB5b3VyIHdhbGxldCB2b3RpbmcgcG93ZXIgZm9yIHRoZSBjdXJyZW50IGNoZWNrcG9pbnRzXG4gICAqXG4gICAqIEByZXR1cm5zIHRoZSBhbW91bnQgb2Ygdm90aW5nIHBvd2VyIGluIHRva2Vuc1xuICAgKi9cbiAgYXN5bmMgZ2V0Vm90ZUJhbGFuY2UoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0Vm90ZUJhbGFuY2VPZihhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRTaWduZXJBZGRyZXNzKCkpO1xuICB9XG4gIGFzeW5jIGdldFZvdGVCYWxhbmNlT2YoYWNjb3VudCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmVyYzIwLmdldFZhbHVlKGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5nZXRWb3Rlcyhhd2FpdCByZXNvbHZlQWRkcmVzcyhhY2NvdW50KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB5b3VyIHZvdGluZyBkZWxlZ2F0ZWUgYWRkcmVzc1xuICAgKlxuICAgKiBAcmV0dXJucyB0aGUgYWRkcmVzcyBvZiB5b3VyIHZvdGUgZGVsZWdhdGVlXG4gICAqL1xuICBhc3luYyBnZXREZWxlZ2F0aW9uKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldERlbGVnYXRpb25PZihhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRTaWduZXJBZGRyZXNzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHNwZWNpZmljIGFkZHJlc3Mgdm90aW5nIGRlbGVnYXRlZSBhZGRyZXNzXG4gICAqXG4gICAqIEByZXR1cm5zIHRoZSBhZGRyZXNzIG9mIHlvdXIgdm90ZSBkZWxlZ2F0ZWVcbiAgICovXG4gIGFzeW5jIGdldERlbGVnYXRpb25PZihhY2NvdW50KSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5kZWxlZ2F0ZXMoYXdhaXQgcmVzb2x2ZUFkZHJlc3MoYWNjb3VudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHVzZXJzIGNhbiB0cmFuc2ZlciB0b2tlbnMgZnJvbSB0aGlzIGNvbnRyYWN0XG4gICAqL1xuICBhc3luYyBpc1RyYW5zZmVyUmVzdHJpY3RlZCgpIHtcbiAgICBjb25zdCBhbnlvbmVDYW5UcmFuc2ZlciA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5oYXNSb2xlKGdldFJvbGVIYXNoKFwidHJhbnNmZXJcIiksIGNvbnN0YW50cy5BZGRyZXNzWmVybyk7XG4gICAgcmV0dXJuICFhbnlvbmVDYW5UcmFuc2ZlcjtcbiAgfVxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBwcmVwYXJlKG1ldGhvZCwgYXJncywgb3ZlcnJpZGVzKSB7XG4gICAgcmV0dXJuIFRyYW5zYWN0aW9uLmZyb21Db250cmFjdFdyYXBwZXIoe1xuICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgIG1ldGhvZCxcbiAgICAgIGFyZ3MsXG4gICAgICBvdmVycmlkZXNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGNhbGwoZnVuY3Rpb25OYW1lLCBhcmdzLCBvdmVycmlkZXMpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIuY2FsbChmdW5jdGlvbk5hbWUsIGFyZ3MsIG92ZXJyaWRlcyk7XG4gIH1cbn1cbl9kZWZpbmVQcm9wZXJ0eShUb2tlbkRyb3AsIFwiY29udHJhY3RSb2xlc1wiLCBbXCJhZG1pblwiLCBcInRyYW5zZmVyXCJdKTtcblxuZXhwb3J0IHsgVG9rZW5Ecm9wIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=