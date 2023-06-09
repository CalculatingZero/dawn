"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_nft-collection-d29b0868_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/nft-collection-d29b0868.browser.esm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/nft-collection-d29b0868.browser.esm.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NFTCollection: () => (/* binding */ NFTCollection)
/* harmony export */ });
/* harmony import */ var _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./QueryParams-7d9473b5.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-7d9473b5.browser.esm.js");
/* harmony import */ var _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contract-metadata-88f06ef9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/contract-metadata-88f06ef9.browser.esm.js");
/* harmony import */ var _erc_721_standard_b90faf4d_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./erc-721-standard-b90faf4d.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/erc-721-standard-b90faf4d.browser.esm.js");
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
 * Create a collection of one-of-one NFTs.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "nft-collection");
 * ```
 *
 * @public
 */
class NFTCollection extends _erc_721_standard_b90faf4d_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.S {
  /**
   * Configure royalties
   * @remarks Set your own royalties for the entire contract or per token
   * @example
   * ```javascript
   * // royalties on the whole contract
   * contract.royalties.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1%
   *   fee_recipient: "0x..."
   * });
   * // override royalty for a particular token
   * contract.royalties.setTokenRoyaltyInfo(tokenId, {
   *   seller_fee_basis_points: 500, // 5%
   *   fee_recipient: "0x..."
   * });
   * ```
   */

  /**
   * Signature Minting
   * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
   * const signedPayload = contract.signature().generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
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
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "events", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "sales", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "platformFees", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "royalties", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "owner", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "signature", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "interceptor", void 0);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Mint a unique NFT
     *
     * @remarks Mint a unique NFT to a specified wallet.
     *
     * @example
     * ```javascript*
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * };
     *
     * const tx = await contract.mint(metadata);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "mint", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async metadata => {
      return this.erc721.mint.prepare(metadata);
    }));
    /**
     * Mint a unique NFT
     *
     * @remarks Mint a unique NFT to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const walletAddress = "{{wallet_address}}";
     *
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * };
     *
     * const tx = await contract.mintTo(walletAddress, metadata);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "mintTo", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (walletAddress, metadata) => {
      return this.erc721.mintTo.prepare(walletAddress, metadata);
    }));
    /**
     * Mint Many unique NFTs
     *
     * @remarks Mint many unique NFTs at once to the connected wallet
     *
     * @example
     * ```javascript*
     * // Custom metadata of the NFTs you want to mint.
     * const metadatas = [{
     *   name: "Cool NFT #1",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT #2",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/other/image.png"),
     * }];
     *
     * const tx = await contract.mintBatch(metadatas);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "mintBatch", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async metadata => {
      return this.erc721.mintBatch.prepare(metadata);
    }));
    /**
     * Mint Many unique NFTs
     *
     * @remarks Mint many unique NFTs at once to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const walletAddress = "{{wallet_address}}";
     *
     * // Custom metadata of the NFTs you want to mint.
     * const metadatas = [{
     *   name: "Cool NFT #1",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT #2",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/other/image.png"),
     * }];
     *
     * const tx = await contract.mintBatchTo(walletAddress, metadatas);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "mintBatchTo", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (walletAddress, metadata) => {
      return this.erc721.mintBatchTo.prepare(walletAddress, metadata);
    }));
    /**
     * Burn a single NFT
     * @param tokenId - the token Id to burn
     *
     * @example
     * ```javascript
     * const result = await contract.burnToken(tokenId);
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "burn", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(tokenId => {
      return this.erc721.burn.prepare(tokenId);
    }));
    this.abi = _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.e.parse(abi || []);
    this.metadata = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ag(this.contractWrapper, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dL, this.storage);
    this.app = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.a$(this.contractWrapper, this.metadata, this.storage);
    this.roles = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ah(this.contractWrapper, NFTCollection.contractRoles);
    this.royalties = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ai(this.contractWrapper, this.metadata);
    this.sales = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aj(this.contractWrapper);
    this.encoder = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.af(this.contractWrapper);
    this.estimator = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aP(this.contractWrapper);
    this.events = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aQ(this.contractWrapper);
    this.platformFees = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aS(this.contractWrapper);
    this.interceptor = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aR(this.contractWrapper);
    this.signature = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aD(this.contractWrapper, this.storage);
    this.owner = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aU(this.contractWrapper);
  }

  /**
   * @internal
   */
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
   * Get whether users can transfer NFTs from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.readContract.hasRole((0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.bE)("transfer"), ethers__WEBPACK_IMPORTED_MODULE_10__.AddressZero);
    return !anyoneCanTransfer;
  }
  /**
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param metadata - The metadata of the NFT you want to mint
   *
   * @deprecated Use `contract.mint.prepare(...args)` instead
   */
  async getMintTransaction(receiver, metadata) {
    return this.erc721.getMintTransaction(receiver, metadata);
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
(0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(NFTCollection, "contractRoles", ["admin", "minter", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LW5mdC1jb2xsZWN0aW9uLWQyOWIwODY4LWJyb3dzZXItZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZFO0FBQzhhO0FBQzFhO0FBQzlDO0FBQ3BCO0FBQ0Y7QUFDaUI7QUFDb0M7QUFDVDtBQUNRO0FBQ0c7QUFDRztBQUNiO0FBQ007QUFDRTtBQUNKO0FBQ1M7QUFDSjtBQUNDO0FBQ0Y7QUFDQTtBQUNQO0FBQ1U7QUFDSjtBQUNKO0FBQ007QUFDSztBQUNHO0FBQ1A7QUFDQTtBQUNDO0FBQ1I7QUFDTTtBQUNLO0FBQ0c7QUFDZjtBQUNVO0FBQ0Y7QUFDSztBQUNQO0FBQ1A7QUFDVTtBQUNGO0FBQ0M7QUFDVDtBQUNPO0FBQ0Y7QUFDVTtBQUNWO0FBQ0E7QUFDSjtBQUNEO0FBQ1E7QUFDUDtBQUNwQztBQUM2QztBQUM5QztBQUNzQztBQUM5QjtBQUNWO0FBQ2dEO0FBQ3hDO0FBQ3FDO0FBQ3BEO0FBQ1E7QUFDRztBQUNrQztBQUNRO0FBQ0M7QUFDUTtBQUNsRDtBQUNaO0FBQytEO0FBQ0M7QUFDeEM7QUFDdUI7QUFDQzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0MsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3RUFBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csMEVBQWU7QUFDakg7QUFDQSxJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyw4QkFBOEI7QUFDOUIsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxJQUFJLHVFQUFlLGVBQWUsOEVBQXdCO0FBQzFEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyw4QkFBOEI7QUFDOUIsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxJQUFJLHVFQUFlLGlCQUFpQiw4RUFBd0I7QUFDNUQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0Qyw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLElBQUksdUVBQWUsb0JBQW9CLDhFQUF3QjtBQUMvRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsSUFBSSx1RUFBZSxzQkFBc0IsOEVBQXdCO0FBQ2pFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQWUsZUFBZSw4RUFBd0I7QUFDMUQ7QUFDQSxLQUFLO0FBQ0wsZUFBZSx5RUFBUztBQUN4Qix3QkFBd0IsMEVBQWdCLHVCQUF1QiwwRUFBeUI7QUFDeEYsbUJBQW1CLDBFQUFjO0FBQ2pDLHFCQUFxQiwwRUFBYTtBQUNsQyx5QkFBeUIsMEVBQWU7QUFDeEMscUJBQXFCLDBFQUFtQjtBQUN4Qyx1QkFBdUIsMEVBQWU7QUFDdEMseUJBQXlCLDBFQUFnQjtBQUN6QyxzQkFBc0IsMEVBQWM7QUFDcEMsNEJBQTRCLDBFQUFtQjtBQUMvQywyQkFBMkIsMEVBQW1CO0FBQzlDLHlCQUF5QiwwRUFBbUM7QUFDNUQscUJBQXFCLDBFQUFhO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsOEVBQVcsY0FBYyxnREFBcUI7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMEVBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBZTs7QUFFVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvc2RrL2Rpc3QvbmZ0LWNvbGxlY3Rpb24tZDI5YjA4NjguYnJvd3Nlci5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXyBhcyBfZGVmaW5lUHJvcGVydHkgfSBmcm9tICcuL1F1ZXJ5UGFyYW1zLTdkOTQ3M2I1LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGR6IGFzIENvbnRyYWN0V3JhcHBlciwgZHMgYXMgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uLCBlIGFzIEFiaVNjaGVtYSwgYWcgYXMgQ29udHJhY3RNZXRhZGF0YSwgZEwgYXMgVG9rZW5FcmM3MjFDb250cmFjdFNjaGVtYSwgYSQgYXMgQ29udHJhY3RBcHBVUkksIGFoIGFzIENvbnRyYWN0Um9sZXMsIGFpIGFzIENvbnRyYWN0Um95YWx0eSwgYWogYXMgQ29udHJhY3RQcmltYXJ5U2FsZSwgYWYgYXMgQ29udHJhY3RFbmNvZGVyLCBhUCBhcyBHYXNDb3N0RXN0aW1hdG9yLCBhUSBhcyBDb250cmFjdEV2ZW50cywgYVMgYXMgQ29udHJhY3RQbGF0Zm9ybUZlZSwgYVIgYXMgQ29udHJhY3RJbnRlcmNlcHRvciwgYUQgYXMgRXJjNzIxV2l0aFF1YW50aXR5U2lnbmF0dXJlTWludGFibGUsIGFVIGFzIENvbnRyYWN0T3duZXIsIGJFIGFzIGdldFJvbGVIYXNoLCBhViBhcyBUcmFuc2FjdGlvbiB9IGZyb20gJy4vY29udHJhY3QtbWV0YWRhdGEtODhmMDZlZjkuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgUyBhcyBTdGFuZGFyZEVyYzcyMSB9IGZyb20gJy4vZXJjLTcyMS1zdGFuZGFyZC1iOTBmYWY0ZC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0ICdibi5qcyc7XG5pbXBvcnQgJ3pvZCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY2hhaW5zJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzIwX1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2VfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjBQZXJtaXQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNdWx0aWNhbGwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkM3MjFfVjMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxU3VwcGx5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUxhenlNaW50Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0xhenlNaW50V2l0aFRpZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcDExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzExNTVfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1X1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRVJDMjc3MUNvbnRleHQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQXBwVVJJLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNvbnRyYWN0TWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGlyZWN0TGlzdGluZ3MuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRW5nbGlzaEF1Y3Rpb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU9mZmVycy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQYWNrVlJGRGlyZWN0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQbGF0Zm9ybUZlZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQcmltYXJ5U2FsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3lhbHR5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvT3duYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBY2NvdW50RmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBY2NvdW50Lmpzb24nO1xuaW1wb3J0ICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Db250cmFjdFB1Ymxpc2hlci5qc29uJztcbmltcG9ydCAnZXZlbnRlbWl0dGVyMyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Gb3J3YXJkZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvc3RvcmFnZSc7XG5pbXBvcnQgJ2Nyb3NzLWZldGNoJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lUaGlyZHdlYkNvbnRyYWN0Lmpzb24nO1xuaW1wb3J0ICdldGhlcnMvbGliL3V0aWxzLmpzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyME1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICd1dWlkJztcbmltcG9ydCAnbWVya2xldHJlZWpzJztcbmltcG9ydCAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxNjUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWxEZXByZWNhdGVkLmpzb24nO1xuaW1wb3J0ICdldGhlcnMvbGliL3V0aWxzJztcbmltcG9ydCAnYnM1OCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeUxvZ2ljLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvZ2VuZXJhdGVkLWFiaXMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdSZWdpc3RyeS5qc29uJztcblxuLyoqXG4gKiBDcmVhdGUgYSBjb2xsZWN0aW9uIG9mIG9uZS1vZi1vbmUgTkZUcy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCI7XG4gKlxuICogY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKFwie3tjaGFpbk5hbWV9fVwiKTtcbiAqIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgc2RrLmdldENvbnRyYWN0KFwie3tjb250cmFjdF9hZGRyZXNzfX1cIiwgXCJuZnQtY29sbGVjdGlvblwiKTtcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgTkZUQ29sbGVjdGlvbiBleHRlbmRzIFN0YW5kYXJkRXJjNzIxIHtcbiAgLyoqXG4gICAqIENvbmZpZ3VyZSByb3lhbHRpZXNcbiAgICogQHJlbWFya3MgU2V0IHlvdXIgb3duIHJveWFsdGllcyBmb3IgdGhlIGVudGlyZSBjb250cmFjdCBvciBwZXIgdG9rZW5cbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyByb3lhbHRpZXMgb24gdGhlIHdob2xlIGNvbnRyYWN0XG4gICAqIGNvbnRyYWN0LnJveWFsdGllcy5zZXREZWZhdWx0Um95YWx0eUluZm8oe1xuICAgKiAgIHNlbGxlcl9mZWVfYmFzaXNfcG9pbnRzOiAxMDAsIC8vIDElXG4gICAqICAgZmVlX3JlY2lwaWVudDogXCIweC4uLlwiXG4gICAqIH0pO1xuICAgKiAvLyBvdmVycmlkZSByb3lhbHR5IGZvciBhIHBhcnRpY3VsYXIgdG9rZW5cbiAgICogY29udHJhY3Qucm95YWx0aWVzLnNldFRva2VuUm95YWx0eUluZm8odG9rZW5JZCwge1xuICAgKiAgIHNlbGxlcl9mZWVfYmFzaXNfcG9pbnRzOiA1MDAsIC8vIDUlXG4gICAqICAgZmVlX3JlY2lwaWVudDogXCIweC4uLlwiXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIFNpZ25hdHVyZSBNaW50aW5nXG4gICAqIEByZW1hcmtzIEdlbmVyYXRlIGR5bmFtaWMgTkZUcyB3aXRoIHlvdXIgb3duIHNpZ25hdHVyZSwgYW5kIGxldCBvdGhlcnMgbWludCB0aGVtIHVzaW5nIHRoYXQgc2lnbmF0dXJlLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIHNlZSBob3cgdG8gY3JhZnQgYSBwYXlsb2FkIHRvIHNpZ24gaW4gdGhlIGBjb250cmFjdC5zaWduYXR1cmUuZ2VuZXJhdGUoKWAgZG9jdW1lbnRhdGlvblxuICAgKiBjb25zdCBzaWduZWRQYXlsb2FkID0gY29udHJhY3Quc2lnbmF0dXJlKCkuZ2VuZXJhdGUocGF5bG9hZCk7XG4gICAqXG4gICAqIC8vIG5vdyBhbnlvbmUgY2FuIG1pbnQgdGhlIE5GVFxuICAgKiBjb25zdCB0eCA9IGNvbnRyYWN0LnNpZ25hdHVyZS5taW50KHNpZ25lZFBheWxvYWQpO1xuICAgKiBjb25zdCByZWNlaXB0ID0gdHgucmVjZWlwdDsgLy8gdGhlIG1pbnQgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgKiBjb25zdCBtaW50ZWRJZCA9IHR4LmlkOyAvLyB0aGUgaWQgb2YgdGhlIE5GVCBtaW50ZWRcbiAgICogYGBgXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgY29uc3RydWN0b3IobmV0d29yaywgYWRkcmVzcywgc3RvcmFnZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBsZXQgYWJpID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgPyBhcmd1bWVudHNbNF0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNoYWluSWQgPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY29udHJhY3RXcmFwcGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiBuZXcgQ29udHJhY3RXcmFwcGVyKG5ldHdvcmssIGFkZHJlc3MsIGFiaSwgb3B0aW9ucyk7XG4gICAgc3VwZXIoY29udHJhY3RXcmFwcGVyLCBzdG9yYWdlLCBjaGFpbklkKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhYmlcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXRhZGF0YVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFwcFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJvbGVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW5jb2RlclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVzdGltYXRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImV2ZW50c1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNhbGVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGxhdGZvcm1GZWVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm95YWx0aWVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib3duZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzaWduYXR1cmVcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpbnRlcmNlcHRvclwiLCB2b2lkIDApO1xuICAgIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBXUklURSBGVU5DVElPTlNcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKipcbiAgICAgKiBNaW50IGEgdW5pcXVlIE5GVFxuICAgICAqXG4gICAgICogQHJlbWFya3MgTWludCBhIHVuaXF1ZSBORlQgdG8gYSBzcGVjaWZpZWQgd2FsbGV0LlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqYXZhc2NyaXB0KlxuICAgICAqIC8vIEN1c3RvbSBtZXRhZGF0YSBvZiB0aGUgTkZULCBub3RlIHRoYXQgeW91IGNhbiBmdWxseSBjdXN0b21pemUgdGhpcyBtZXRhZGF0YSB3aXRoIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogY29uc3QgbWV0YWRhdGEgPSB7XG4gICAgICogICBuYW1lOiBcIkNvb2wgTkZUXCIsXG4gICAgICogICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29vbCBORlRcIixcbiAgICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL2ltYWdlLnBuZ1wiKSwgLy8gVGhpcyBjYW4gYmUgYW4gaW1hZ2UgdXJsIG9yIGZpbGVcbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5taW50KG1ldGFkYXRhKTtcbiAgICAgKiBjb25zdCByZWNlaXB0ID0gdHgucmVjZWlwdDsgLy8gdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICAgKiBjb25zdCB0b2tlbklkID0gdHguaWQ7IC8vIHRoZSBpZCBvZiB0aGUgTkZUIG1pbnRlZFxuICAgICAqIGNvbnN0IG5mdCA9IGF3YWl0IHR4LmRhdGEoKTsgLy8gKG9wdGlvbmFsKSBmZXRjaCBkZXRhaWxzIG9mIG1pbnRlZCBORlRcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtaW50XCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyBtZXRhZGF0YSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmM3MjEubWludC5wcmVwYXJlKG1ldGFkYXRhKTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogTWludCBhIHVuaXF1ZSBORlRcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIE1pbnQgYSB1bmlxdWUgTkZUIHRvIGEgc3BlY2lmaWVkIHdhbGxldC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIEFkZHJlc3Mgb2YgdGhlIHdhbGxldCB5b3Ugd2FudCB0byBtaW50IHRoZSBORlQgdG9cbiAgICAgKiBjb25zdCB3YWxsZXRBZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjtcbiAgICAgKlxuICAgICAqIC8vIEN1c3RvbSBtZXRhZGF0YSBvZiB0aGUgTkZULCBub3RlIHRoYXQgeW91IGNhbiBmdWxseSBjdXN0b21pemUgdGhpcyBtZXRhZGF0YSB3aXRoIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogY29uc3QgbWV0YWRhdGEgPSB7XG4gICAgICogICBuYW1lOiBcIkNvb2wgTkZUXCIsXG4gICAgICogICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29vbCBORlRcIixcbiAgICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL2ltYWdlLnBuZ1wiKSwgLy8gVGhpcyBjYW4gYmUgYW4gaW1hZ2UgdXJsIG9yIGZpbGVcbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5taW50VG8od2FsbGV0QWRkcmVzcywgbWV0YWRhdGEpO1xuICAgICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgICAqIGNvbnN0IHRva2VuSWQgPSB0eC5pZDsgLy8gdGhlIGlkIG9mIHRoZSBORlQgbWludGVkXG4gICAgICogY29uc3QgbmZ0ID0gYXdhaXQgdHguZGF0YSgpOyAvLyAob3B0aW9uYWwpIGZldGNoIGRldGFpbHMgb2YgbWludGVkIE5GVFxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1pbnRUb1wiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgKHdhbGxldEFkZHJlc3MsIG1ldGFkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmM3MjEubWludFRvLnByZXBhcmUod2FsbGV0QWRkcmVzcywgbWV0YWRhdGEpO1xuICAgIH0pKTtcbiAgICAvKipcbiAgICAgKiBNaW50IE1hbnkgdW5pcXVlIE5GVHNcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIE1pbnQgbWFueSB1bmlxdWUgTkZUcyBhdCBvbmNlIHRvIHRoZSBjb25uZWN0ZWQgd2FsbGV0XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYGphdmFzY3JpcHQqXG4gICAgICogLy8gQ3VzdG9tIG1ldGFkYXRhIG9mIHRoZSBORlRzIHlvdSB3YW50IHRvIG1pbnQuXG4gICAgICogY29uc3QgbWV0YWRhdGFzID0gW3tcbiAgICAgKiAgIG5hbWU6IFwiQ29vbCBORlQgIzFcIixcbiAgICAgKiAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb29sIE5GVFwiLFxuICAgICAqICAgaW1hZ2U6IGZzLnJlYWRGaWxlU3luYyhcInBhdGgvdG8vaW1hZ2UucG5nXCIpLCAvLyBUaGlzIGNhbiBiZSBhbiBpbWFnZSB1cmwgb3IgZmlsZVxuICAgICAqIH0sIHtcbiAgICAgKiAgIG5hbWU6IFwiQ29vbCBORlQgIzJcIixcbiAgICAgKiAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb29sIE5GVFwiLFxuICAgICAqICAgaW1hZ2U6IGZzLnJlYWRGaWxlU3luYyhcInBhdGgvdG8vb3RoZXIvaW1hZ2UucG5nXCIpLFxuICAgICAqIH1dO1xuICAgICAqXG4gICAgICogY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5taW50QmF0Y2gobWV0YWRhdGFzKTtcbiAgICAgKiBjb25zdCByZWNlaXB0ID0gdHhbMF0ucmVjZWlwdDsgLy8gc2FtZSB0cmFuc2FjdGlvbiByZWNlaXB0IGZvciBhbGwgbWludGVkIE5GVHNcbiAgICAgKiBjb25zdCBmaXJzdFRva2VuSWQgPSB0eFswXS5pZDsgLy8gdG9rZW4gaWQgb2YgdGhlIGZpcnN0IG1pbnRlZCBORlRcbiAgICAgKiBjb25zdCBmaXJzdE5GVCA9IGF3YWl0IHR4WzBdLmRhdGEoKTsgLy8gKG9wdGlvbmFsKSBmZXRjaCBkZXRhaWxzIG9mIHRoZSBmaXJzdCBtaW50ZWQgTkZUXG4gICAgICogYGBgXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWludEJhdGNoXCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyBtZXRhZGF0YSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmM3MjEubWludEJhdGNoLnByZXBhcmUobWV0YWRhdGEpO1xuICAgIH0pKTtcbiAgICAvKipcbiAgICAgKiBNaW50IE1hbnkgdW5pcXVlIE5GVHNcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIE1pbnQgbWFueSB1bmlxdWUgTkZUcyBhdCBvbmNlIHRvIGEgc3BlY2lmaWVkIHdhbGxldC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIEFkZHJlc3Mgb2YgdGhlIHdhbGxldCB5b3Ugd2FudCB0byBtaW50IHRoZSBORlQgdG9cbiAgICAgKiBjb25zdCB3YWxsZXRBZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjtcbiAgICAgKlxuICAgICAqIC8vIEN1c3RvbSBtZXRhZGF0YSBvZiB0aGUgTkZUcyB5b3Ugd2FudCB0byBtaW50LlxuICAgICAqIGNvbnN0IG1ldGFkYXRhcyA9IFt7XG4gICAgICogICBuYW1lOiBcIkNvb2wgTkZUICMxXCIsXG4gICAgICogICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29vbCBORlRcIixcbiAgICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL2ltYWdlLnBuZ1wiKSwgLy8gVGhpcyBjYW4gYmUgYW4gaW1hZ2UgdXJsIG9yIGZpbGVcbiAgICAgKiB9LCB7XG4gICAgICogICBuYW1lOiBcIkNvb2wgTkZUICMyXCIsXG4gICAgICogICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29vbCBORlRcIixcbiAgICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL290aGVyL2ltYWdlLnBuZ1wiKSxcbiAgICAgKiB9XTtcbiAgICAgKlxuICAgICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QubWludEJhdGNoVG8od2FsbGV0QWRkcmVzcywgbWV0YWRhdGFzKTtcbiAgICAgKiBjb25zdCByZWNlaXB0ID0gdHhbMF0ucmVjZWlwdDsgLy8gc2FtZSB0cmFuc2FjdGlvbiByZWNlaXB0IGZvciBhbGwgbWludGVkIE5GVHNcbiAgICAgKiBjb25zdCBmaXJzdFRva2VuSWQgPSB0eFswXS5pZDsgLy8gdG9rZW4gaWQgb2YgdGhlIGZpcnN0IG1pbnRlZCBORlRcbiAgICAgKiBjb25zdCBmaXJzdE5GVCA9IGF3YWl0IHR4WzBdLmRhdGEoKTsgLy8gKG9wdGlvbmFsKSBmZXRjaCBkZXRhaWxzIG9mIHRoZSBmaXJzdCBtaW50ZWQgTkZUXG4gICAgICogYGBgXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWludEJhdGNoVG9cIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jICh3YWxsZXRBZGRyZXNzLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZXJjNzIxLm1pbnRCYXRjaFRvLnByZXBhcmUod2FsbGV0QWRkcmVzcywgbWV0YWRhdGEpO1xuICAgIH0pKTtcbiAgICAvKipcbiAgICAgKiBCdXJuIGEgc2luZ2xlIE5GVFxuICAgICAqIEBwYXJhbSB0b2tlbklkIC0gdGhlIHRva2VuIElkIHRvIGJ1cm5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmJ1cm5Ub2tlbih0b2tlbklkKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJidXJuXCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbih0b2tlbklkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVyYzcyMS5idXJuLnByZXBhcmUodG9rZW5JZCk7XG4gICAgfSkpO1xuICAgIHRoaXMuYWJpID0gQWJpU2NoZW1hLnBhcnNlKGFiaSB8fCBbXSk7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG5ldyBDb250cmFjdE1ldGFkYXRhKHRoaXMuY29udHJhY3RXcmFwcGVyLCBUb2tlbkVyYzcyMUNvbnRyYWN0U2NoZW1hLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMuYXBwID0gbmV3IENvbnRyYWN0QXBwVVJJKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLm1ldGFkYXRhLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMucm9sZXMgPSBuZXcgQ29udHJhY3RSb2xlcyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgTkZUQ29sbGVjdGlvbi5jb250cmFjdFJvbGVzKTtcbiAgICB0aGlzLnJveWFsdGllcyA9IG5ldyBDb250cmFjdFJveWFsdHkodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMubWV0YWRhdGEpO1xuICAgIHRoaXMuc2FsZXMgPSBuZXcgQ29udHJhY3RQcmltYXJ5U2FsZSh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lc3RpbWF0b3IgPSBuZXcgR2FzQ29zdEVzdGltYXRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgQ29udHJhY3RFdmVudHModGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMucGxhdGZvcm1GZWVzID0gbmV3IENvbnRyYWN0UGxhdGZvcm1GZWUodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuaW50ZXJjZXB0b3IgPSBuZXcgQ29udHJhY3RJbnRlcmNlcHRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5zaWduYXR1cmUgPSBuZXcgRXJjNzIxV2l0aFF1YW50aXR5U2lnbmF0dXJlTWludGFibGUodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5vd25lciA9IG5ldyBDb250cmFjdE93bmVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uTmV0d29ya1VwZGF0ZWQobmV0d29yaykge1xuICAgIHRoaXMuY29udHJhY3RXcmFwcGVyLnVwZGF0ZVNpZ25lck9yUHJvdmlkZXIobmV0d29yayk7XG4gIH1cbiAgZ2V0QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3M7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFJFQUQgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciB1c2VycyBjYW4gdHJhbnNmZXIgTkZUcyBmcm9tIHRoaXMgY29udHJhY3RcbiAgICovXG4gIGFzeW5jIGlzVHJhbnNmZXJSZXN0cmljdGVkKCkge1xuICAgIGNvbnN0IGFueW9uZUNhblRyYW5zZmVyID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0Lmhhc1JvbGUoZ2V0Um9sZUhhc2goXCJ0cmFuc2ZlclwiKSwgY29uc3RhbnRzLkFkZHJlc3NaZXJvKTtcbiAgICByZXR1cm4gIWFueW9uZUNhblRyYW5zZmVyO1xuICB9XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBtaW50IHRyYW5zYWN0aW9uIHdpdGhvdXQgZXhlY3V0aW5nIGl0LlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgZXN0aW1hdGluZyB0aGUgZ2FzIGNvc3Qgb2YgYSBtaW50IHRyYW5zYWN0aW9uLCBvdmVycmlkaW5nIHRyYW5zYWN0aW9uIG9wdGlvbnMgYW5kIGhhdmluZyBmaW5lIGdyYWluZWQgY29udHJvbCBvdmVyIHRoZSB0cmFuc2FjdGlvbiBleGVjdXRpb24uXG4gICAqIEBwYXJhbSByZWNlaXZlciAtIEFkZHJlc3MgeW91IHdhbnQgdG8gc2VuZCB0aGUgdG9rZW4gdG9cbiAgICogQHBhcmFtIG1ldGFkYXRhIC0gVGhlIG1ldGFkYXRhIG9mIHRoZSBORlQgeW91IHdhbnQgdG8gbWludFxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGNvbnRyYWN0Lm1pbnQucHJlcGFyZSguLi5hcmdzKWAgaW5zdGVhZFxuICAgKi9cbiAgYXN5bmMgZ2V0TWludFRyYW5zYWN0aW9uKHJlY2VpdmVyLCBtZXRhZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmVyYzcyMS5nZXRNaW50VHJhbnNhY3Rpb24ocmVjZWl2ZXIsIG1ldGFkYXRhKTtcbiAgfVxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBwcmVwYXJlKG1ldGhvZCwgYXJncywgb3ZlcnJpZGVzKSB7XG4gICAgcmV0dXJuIFRyYW5zYWN0aW9uLmZyb21Db250cmFjdFdyYXBwZXIoe1xuICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgIG1ldGhvZCxcbiAgICAgIGFyZ3MsXG4gICAgICBvdmVycmlkZXNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGNhbGwoZnVuY3Rpb25OYW1lLCBhcmdzLCBvdmVycmlkZXMpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIuY2FsbChmdW5jdGlvbk5hbWUsIGFyZ3MsIG92ZXJyaWRlcyk7XG4gIH1cbn1cbl9kZWZpbmVQcm9wZXJ0eShORlRDb2xsZWN0aW9uLCBcImNvbnRyYWN0Um9sZXNcIiwgW1wiYWRtaW5cIiwgXCJtaW50ZXJcIiwgXCJ0cmFuc2ZlclwiXSk7XG5cbmV4cG9ydCB7IE5GVENvbGxlY3Rpb24gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==