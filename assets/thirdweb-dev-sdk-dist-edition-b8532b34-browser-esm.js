"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_edition-b8532b34_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/edition-b8532b34.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/edition-b8532b34.browser.esm.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edition: () => (/* binding */ Edition)
/* harmony export */ });
/* harmony import */ var _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./QueryParams-7d9473b5.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-7d9473b5.browser.esm.js");
/* harmony import */ var _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contract-metadata-88f06ef9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/contract-metadata-88f06ef9.browser.esm.js");
/* harmony import */ var _erc_1155_standard_607e2724_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./erc-1155-standard-607e2724.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/erc-1155-standard-607e2724.browser.esm.js");
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
 * Create a collection of NFTs that lets you mint multiple copies of each NFT.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "edition");
 * ```
 *
 * @public
 */
class Edition extends _erc_1155_standard_607e2724_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.S {
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
   * const signedPayload = contract.signature.generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
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
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "sales", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "platformFees", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "encoder", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "estimator", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "events", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "royalties", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "signature", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "interceptor", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "owner", void 0);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Mint NFT for the connected wallet
     *
     * @remarks See {@link Edition.mintTo}
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "mint", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async metadataWithSupply => {
      return this.erc1155.mint.prepare(metadataWithSupply);
    }));
    /**
     * Mint an NFT with a limited supply
     *
     * @remarks Mint an NFT with a limited supply to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const toAddress = "{{wallet_address}}"
     *
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }
     *
     * const metadataWithSupply = {
     *   metadata,
     *   supply: 1000, // The number of this NFT you want to mint
     * }
     *
     * const tx = await contract.mintTo(toAddress, metadataWithSupply);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "mintTo", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (to, metadataWithSupply) => {
      return this.erc1155.mintTo.prepare(to, metadataWithSupply);
    }));
    /**
     * Increase the supply of an existing NFT and mint it to the connected wallet
     *
     * @param tokenId - the token id of the NFT to increase supply of
     * @param additionalSupply - the additional amount to mint
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "mintAdditionalSupply", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (tokenId, additionalSupply) => {
      return this.erc1155.mintAdditionalSupply.prepare(tokenId, additionalSupply);
    }));
    /**
     * Increase the supply of an existing NFT and mint it to a given wallet address
     *
     * @param to - the address to mint to
     * @param tokenId - the token id of the NFT to increase supply of
     * @param additionalSupply - the additional amount to mint
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "mintAdditionalSupplyTo", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (to, tokenId, additionalSupply) => {
      return this.erc1155.mintAdditionalSupplyTo.prepare(to, tokenId, additionalSupply);
    }));
    /**
     * Mint Many NFTs for the connected wallet
     *
     * @remarks See {@link Edition.mintBatchTo}
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "mintBatch", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async metadatas => {
      return this.erc1155.mintBatch.prepare(metadatas);
    }));
    /**
     * Mint Many NFTs with limited supplies
     *
     * @remarks Mint many different NFTs with limited supplies to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const toAddress = "{{wallet_address}}"
     *
     * // Custom metadata and supplies of your NFTs
     * const metadataWithSupply = [{
     *   supply: 50, // The number of this NFT you want to mint
     *   metadata: {
     *     name: "Cool NFT #1",
     *     description: "This is a cool NFT",
     *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     *   },
     * }, {
     *   supply: 100,
     *   metadata: {
     *     name: "Cool NFT #2",
     *     description: "This is a cool NFT",
     *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     *   },
     * }];
     *
     * const tx = await contract.mintBatchTo(toAddress, metadataWithSupply);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "mintBatchTo", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (to, metadataWithSupply) => {
      return this.erc1155.mintBatchTo.prepare(to, metadataWithSupply);
    }));
    /**
     * Burn a specified amount of a NFT
     *
     * @param tokenId - the token Id to burn
     * @param amount - amount to burn
     *
     * @example
     * ```javascript
     * const result = await contract.burnTokens(tokenId, amount);
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "burn", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (tokenId, amount) => {
      return this.erc1155.burn.prepare(tokenId, amount);
    }));
    this.abi = _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.e.parse(abi || []);
    this.metadata = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ag(this.contractWrapper, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dE, this.storage);
    this.app = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.a$(this.contractWrapper, this.metadata, this.storage);
    this.roles = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ah(this.contractWrapper, Edition.contractRoles);
    this.royalties = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ai(this.contractWrapper, this.metadata);
    this.sales = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aj(this.contractWrapper);
    this.encoder = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.af(this.contractWrapper);
    this.estimator = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aP(this.contractWrapper);
    this.events = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aQ(this.contractWrapper);
    this.platformFees = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aS(this.contractWrapper);
    this.interceptor = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aR(this.contractWrapper);
    this.signature = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aL(this.contractWrapper, this.storage, this.roles);
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
   * Get all NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.getAll();
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async getAll(queryParams) {
    return this.erc1155.getAll(queryParams);
  }

  /**
   * Get all NFTs owned by a specific wallet
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.getOwned(address);
   * ```
   *
   * @returns The NFT metadata for all NFTs in the contract.
   */
  async getOwned(walletAddress) {
    return this.erc1155.getOwned(walletAddress);
  }

  /**
   * Get the number of NFTs minted
   * @returns the total number of NFTs minted in this contract
   * @public
   */
  async getTotalCount() {
    return this.erc1155.totalCount();
  }

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
   * @param metadataWithSupply - The metadata of the NFT you want to mint
   *
   * @deprecated `contract.mint.prepare(...args)`
   */
  async getMintTransaction(receiver, metadataWithSupply) {
    return this.erc1155.getMintTransaction(receiver, metadataWithSupply);
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
(0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(Edition, "contractRoles", ["admin", "minter", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LWVkaXRpb24tYjg1MzJiMzQtYnJvd3Nlci1lc20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDb2E7QUFDOVo7QUFDaEQ7QUFDcEI7QUFDRjtBQUNpQjtBQUNvQztBQUNUO0FBQ1E7QUFDRztBQUNHO0FBQ2I7QUFDTTtBQUNFO0FBQ0o7QUFDUztBQUNKO0FBQ0M7QUFDRjtBQUNBO0FBQ1A7QUFDVTtBQUNKO0FBQ0o7QUFDTTtBQUNLO0FBQ0c7QUFDUDtBQUNBO0FBQ0M7QUFDUjtBQUNNO0FBQ0s7QUFDRztBQUNmO0FBQ1U7QUFDRjtBQUNLO0FBQ1A7QUFDUDtBQUNVO0FBQ0Y7QUFDQztBQUNUO0FBQ087QUFDRjtBQUNVO0FBQ1Y7QUFDQTtBQUNKO0FBQ0Q7QUFDUTtBQUNQO0FBQ3BDO0FBQzZDO0FBQzlDO0FBQ3NDO0FBQzlCO0FBQ1Y7QUFDZ0Q7QUFDeEM7QUFDcUM7QUFDcEQ7QUFDUTtBQUNHO0FBQ2tDO0FBQ1E7QUFDQztBQUNRO0FBQ2xEO0FBQ1o7QUFDK0Q7QUFDQztBQUN4QztBQUN1QjtBQUNDOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQSxrQ0FBa0MsV0FBVztBQUM3Qyw2Q0FBNkMsa0JBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlFQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLDBFQUFlO0FBQ2pIO0FBQ0EsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxJQUFJLHVFQUFlLGVBQWUsOEVBQXdCO0FBQzFEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsOEJBQThCO0FBQzlCLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsSUFBSSx1RUFBZSxpQkFBaUIsOEVBQXdCO0FBQzVEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQWUsK0JBQStCLDhFQUF3QjtBQUMxRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQWUsaUNBQWlDLDhFQUF3QjtBQUM1RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxJQUFJLHVFQUFlLG9CQUFvQiw4RUFBd0I7QUFDL0Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxJQUFJLHVFQUFlLHNCQUFzQiw4RUFBd0I7QUFDakU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQWUsZUFBZSw4RUFBd0I7QUFDMUQ7QUFDQSxLQUFLO0FBQ0wsZUFBZSx5RUFBUztBQUN4Qix3QkFBd0IsMEVBQWdCLHVCQUF1QiwwRUFBMEI7QUFDekYsbUJBQW1CLDBFQUFjO0FBQ2pDLHFCQUFxQiwwRUFBYTtBQUNsQyx5QkFBeUIsMEVBQWU7QUFDeEMscUJBQXFCLDBFQUFtQjtBQUN4Qyx1QkFBdUIsMEVBQWU7QUFDdEMseUJBQXlCLDBFQUFnQjtBQUN6QyxzQkFBc0IsMEVBQWM7QUFDcEMsNEJBQTRCLDBFQUFtQjtBQUMvQywyQkFBMkIsMEVBQW1CO0FBQzlDLHlCQUF5QiwwRUFBd0I7QUFDakQscUJBQXFCLDBFQUFhO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsOEVBQVcsY0FBYyxnREFBcUI7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMEVBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBZTs7QUFFSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvc2RrL2Rpc3QvZWRpdGlvbi1iODUzMmIzNC5icm93c2VyLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSB9IGZyb20gJy4vUXVlcnlQYXJhbXMtN2Q5NDczYjUuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgZHogYXMgQ29udHJhY3RXcmFwcGVyLCBkcyBhcyBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24sIGUgYXMgQWJpU2NoZW1hLCBhZyBhcyBDb250cmFjdE1ldGFkYXRhLCBkRSBhcyBUb2tlbkVyYzExNTVDb250cmFjdFNjaGVtYSwgYSQgYXMgQ29udHJhY3RBcHBVUkksIGFoIGFzIENvbnRyYWN0Um9sZXMsIGFpIGFzIENvbnRyYWN0Um95YWx0eSwgYWogYXMgQ29udHJhY3RQcmltYXJ5U2FsZSwgYWYgYXMgQ29udHJhY3RFbmNvZGVyLCBhUCBhcyBHYXNDb3N0RXN0aW1hdG9yLCBhUSBhcyBDb250cmFjdEV2ZW50cywgYVMgYXMgQ29udHJhY3RQbGF0Zm9ybUZlZSwgYVIgYXMgQ29udHJhY3RJbnRlcmNlcHRvciwgYUwgYXMgRXJjMTE1NVNpZ25hdHVyZU1pbnRhYmxlLCBhVSBhcyBDb250cmFjdE93bmVyLCBiRSBhcyBnZXRSb2xlSGFzaCwgYVYgYXMgVHJhbnNhY3Rpb24gfSBmcm9tICcuL2NvbnRyYWN0LW1ldGFkYXRhLTg4ZjA2ZWY5LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IFMgYXMgU3RhbmRhcmRFcmMxMTU1IH0gZnJvbSAnLi9lcmMtMTE1NS1zdGFuZGFyZC02MDdlMjcyNC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0ICdibi5qcyc7XG5pbXBvcnQgJ3pvZCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY2hhaW5zJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzIwX1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2VfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjBQZXJtaXQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNdWx0aWNhbGwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkM3MjFfVjMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxU3VwcGx5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUxhenlNaW50Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0xhenlNaW50V2l0aFRpZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcDExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzExNTVfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1X1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRVJDMjc3MUNvbnRleHQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQXBwVVJJLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNvbnRyYWN0TWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGlyZWN0TGlzdGluZ3MuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRW5nbGlzaEF1Y3Rpb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU9mZmVycy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQYWNrVlJGRGlyZWN0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQbGF0Zm9ybUZlZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQcmltYXJ5U2FsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3lhbHR5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvT3duYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBY2NvdW50RmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBY2NvdW50Lmpzb24nO1xuaW1wb3J0ICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Db250cmFjdFB1Ymxpc2hlci5qc29uJztcbmltcG9ydCAnZXZlbnRlbWl0dGVyMyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Gb3J3YXJkZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvc3RvcmFnZSc7XG5pbXBvcnQgJ2Nyb3NzLWZldGNoJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lUaGlyZHdlYkNvbnRyYWN0Lmpzb24nO1xuaW1wb3J0ICdldGhlcnMvbGliL3V0aWxzLmpzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyME1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICd1dWlkJztcbmltcG9ydCAnbWVya2xldHJlZWpzJztcbmltcG9ydCAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxNjUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWxEZXByZWNhdGVkLmpzb24nO1xuaW1wb3J0ICdldGhlcnMvbGliL3V0aWxzJztcbmltcG9ydCAnYnM1OCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeUxvZ2ljLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvZ2VuZXJhdGVkLWFiaXMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdSZWdpc3RyeS5qc29uJztcblxuLyoqXG4gKiBDcmVhdGUgYSBjb2xsZWN0aW9uIG9mIE5GVHMgdGhhdCBsZXRzIHlvdSBtaW50IG11bHRpcGxlIGNvcGllcyBvZiBlYWNoIE5GVC5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCI7XG4gKlxuICogY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKFwie3tjaGFpbk5hbWV9fVwiKTtcbiAqIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgc2RrLmdldENvbnRyYWN0KFwie3tjb250cmFjdF9hZGRyZXNzfX1cIiwgXCJlZGl0aW9uXCIpO1xuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBFZGl0aW9uIGV4dGVuZHMgU3RhbmRhcmRFcmMxMTU1IHtcbiAgLyoqXG4gICAqIENvbmZpZ3VyZSByb3lhbHRpZXNcbiAgICogQHJlbWFya3MgU2V0IHlvdXIgb3duIHJveWFsdGllcyBmb3IgdGhlIGVudGlyZSBjb250cmFjdCBvciBwZXIgdG9rZW5cbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyByb3lhbHRpZXMgb24gdGhlIHdob2xlIGNvbnRyYWN0XG4gICAqIGNvbnRyYWN0LnJveWFsdGllcy5zZXREZWZhdWx0Um95YWx0eUluZm8oe1xuICAgKiAgIHNlbGxlcl9mZWVfYmFzaXNfcG9pbnRzOiAxMDAsIC8vIDElXG4gICAqICAgZmVlX3JlY2lwaWVudDogXCIweC4uLlwiXG4gICAqIH0pO1xuICAgKiAvLyBvdmVycmlkZSByb3lhbHR5IGZvciBhIHBhcnRpY3VsYXIgdG9rZW5cbiAgICogY29udHJhY3Qucm95YWx0aWVzLnNldFRva2VuUm95YWx0eUluZm8odG9rZW5JZCwge1xuICAgKiAgIHNlbGxlcl9mZWVfYmFzaXNfcG9pbnRzOiA1MDAsIC8vIDUlXG4gICAqICAgZmVlX3JlY2lwaWVudDogXCIweC4uLlwiXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIFNpZ25hdHVyZSBNaW50aW5nXG4gICAqIEByZW1hcmtzIEdlbmVyYXRlIGR5bmFtaWMgTkZUcyB3aXRoIHlvdXIgb3duIHNpZ25hdHVyZSwgYW5kIGxldCBvdGhlcnMgbWludCB0aGVtIHVzaW5nIHRoYXQgc2lnbmF0dXJlLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIHNlZSBob3cgdG8gY3JhZnQgYSBwYXlsb2FkIHRvIHNpZ24gaW4gdGhlIGBjb250cmFjdC5zaWduYXR1cmUuZ2VuZXJhdGUoKWAgZG9jdW1lbnRhdGlvblxuICAgKiBjb25zdCBzaWduZWRQYXlsb2FkID0gY29udHJhY3Quc2lnbmF0dXJlLmdlbmVyYXRlKHBheWxvYWQpO1xuICAgKlxuICAgKiAvLyBub3cgYW55b25lIGNhbiBtaW50IHRoZSBORlRcbiAgICogY29uc3QgdHggPSBjb250cmFjdC5zaWduYXR1cmUubWludChzaWduZWRQYXlsb2FkKTtcbiAgICogY29uc3QgcmVjZWlwdCA9IHR4LnJlY2VpcHQ7IC8vIHRoZSBtaW50IHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICogY29uc3QgbWludGVkSWQgPSB0eC5pZDsgLy8gdGhlIGlkIG9mIHRoZSBORlQgbWludGVkXG4gICAqIGBgYFxuICAgKi9cblxuICBjb25zdHJ1Y3RvcihuZXR3b3JrLCBhZGRyZXNzLCBzdG9yYWdlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGxldCBhYmkgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY2hhaW5JZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ID8gYXJndW1lbnRzWzVdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjb250cmFjdFdyYXBwZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IG5ldyBDb250cmFjdFdyYXBwZXIobmV0d29yaywgYWRkcmVzcywgYWJpLCBvcHRpb25zKTtcbiAgICBzdXBlcihjb250cmFjdFdyYXBwZXIsIHN0b3JhZ2UsIGNoYWluSWQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFiaVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1ldGFkYXRhXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXBwXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm9sZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzYWxlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBsYXRmb3JtRmVlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuY29kZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlc3RpbWF0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJldmVudHNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb3lhbHRpZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzaWduYXR1cmVcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpbnRlcmNlcHRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm93bmVyXCIsIHZvaWQgMCk7XG4gICAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIFdSSVRFIEZVTkNUSU9OU1xuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIC8qKlxuICAgICAqIE1pbnQgTkZUIGZvciB0aGUgY29ubmVjdGVkIHdhbGxldFxuICAgICAqXG4gICAgICogQHJlbWFya3MgU2VlIHtAbGluayBFZGl0aW9uLm1pbnRUb31cbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtaW50XCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyBtZXRhZGF0YVdpdGhTdXBwbHkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZXJjMTE1NS5taW50LnByZXBhcmUobWV0YWRhdGFXaXRoU3VwcGx5KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogTWludCBhbiBORlQgd2l0aCBhIGxpbWl0ZWQgc3VwcGx5XG4gICAgICpcbiAgICAgKiBAcmVtYXJrcyBNaW50IGFuIE5GVCB3aXRoIGEgbGltaXRlZCBzdXBwbHkgdG8gYSBzcGVjaWZpZWQgd2FsbGV0LlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogLy8gQWRkcmVzcyBvZiB0aGUgd2FsbGV0IHlvdSB3YW50IHRvIG1pbnQgdGhlIE5GVCB0b1xuICAgICAqIGNvbnN0IHRvQWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCJcbiAgICAgKlxuICAgICAqIC8vIEN1c3RvbSBtZXRhZGF0YSBvZiB0aGUgTkZULCBub3RlIHRoYXQgeW91IGNhbiBmdWxseSBjdXN0b21pemUgdGhpcyBtZXRhZGF0YSB3aXRoIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogY29uc3QgbWV0YWRhdGEgPSB7XG4gICAgICogICBuYW1lOiBcIkNvb2wgTkZUXCIsXG4gICAgICogICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29vbCBORlRcIixcbiAgICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL2ltYWdlLnBuZ1wiKSwgLy8gVGhpcyBjYW4gYmUgYW4gaW1hZ2UgdXJsIG9yIGZpbGVcbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiBjb25zdCBtZXRhZGF0YVdpdGhTdXBwbHkgPSB7XG4gICAgICogICBtZXRhZGF0YSxcbiAgICAgKiAgIHN1cHBseTogMTAwMCwgLy8gVGhlIG51bWJlciBvZiB0aGlzIE5GVCB5b3Ugd2FudCB0byBtaW50XG4gICAgICogfVxuICAgICAqXG4gICAgICogY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5taW50VG8odG9BZGRyZXNzLCBtZXRhZGF0YVdpdGhTdXBwbHkpO1xuICAgICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgICAqIGNvbnN0IHRva2VuSWQgPSB0eC5pZDsgLy8gdGhlIGlkIG9mIHRoZSBORlQgbWludGVkXG4gICAgICogY29uc3QgbmZ0ID0gYXdhaXQgdHguZGF0YSgpOyAvLyAob3B0aW9uYWwpIGZldGNoIGRldGFpbHMgb2YgbWludGVkIE5GVFxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1pbnRUb1wiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgKHRvLCBtZXRhZGF0YVdpdGhTdXBwbHkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVyYzExNTUubWludFRvLnByZXBhcmUodG8sIG1ldGFkYXRhV2l0aFN1cHBseSk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIEluY3JlYXNlIHRoZSBzdXBwbHkgb2YgYW4gZXhpc3RpbmcgTkZUIGFuZCBtaW50IGl0IHRvIHRoZSBjb25uZWN0ZWQgd2FsbGV0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5JZCAtIHRoZSB0b2tlbiBpZCBvZiB0aGUgTkZUIHRvIGluY3JlYXNlIHN1cHBseSBvZlxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsU3VwcGx5IC0gdGhlIGFkZGl0aW9uYWwgYW1vdW50IHRvIG1pbnRcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtaW50QWRkaXRpb25hbFN1cHBseVwiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgKHRva2VuSWQsIGFkZGl0aW9uYWxTdXBwbHkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVyYzExNTUubWludEFkZGl0aW9uYWxTdXBwbHkucHJlcGFyZSh0b2tlbklkLCBhZGRpdGlvbmFsU3VwcGx5KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogSW5jcmVhc2UgdGhlIHN1cHBseSBvZiBhbiBleGlzdGluZyBORlQgYW5kIG1pbnQgaXQgdG8gYSBnaXZlbiB3YWxsZXQgYWRkcmVzc1xuICAgICAqXG4gICAgICogQHBhcmFtIHRvIC0gdGhlIGFkZHJlc3MgdG8gbWludCB0b1xuICAgICAqIEBwYXJhbSB0b2tlbklkIC0gdGhlIHRva2VuIGlkIG9mIHRoZSBORlQgdG8gaW5jcmVhc2Ugc3VwcGx5IG9mXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxTdXBwbHkgLSB0aGUgYWRkaXRpb25hbCBhbW91bnQgdG8gbWludFxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1pbnRBZGRpdGlvbmFsU3VwcGx5VG9cIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jICh0bywgdG9rZW5JZCwgYWRkaXRpb25hbFN1cHBseSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZXJjMTE1NS5taW50QWRkaXRpb25hbFN1cHBseVRvLnByZXBhcmUodG8sIHRva2VuSWQsIGFkZGl0aW9uYWxTdXBwbHkpO1xuICAgIH0pKTtcbiAgICAvKipcbiAgICAgKiBNaW50IE1hbnkgTkZUcyBmb3IgdGhlIGNvbm5lY3RlZCB3YWxsZXRcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIFNlZSB7QGxpbmsgRWRpdGlvbi5taW50QmF0Y2hUb31cbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtaW50QmF0Y2hcIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIG1ldGFkYXRhcyA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmMxMTU1Lm1pbnRCYXRjaC5wcmVwYXJlKG1ldGFkYXRhcyk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIE1pbnQgTWFueSBORlRzIHdpdGggbGltaXRlZCBzdXBwbGllc1xuICAgICAqXG4gICAgICogQHJlbWFya3MgTWludCBtYW55IGRpZmZlcmVudCBORlRzIHdpdGggbGltaXRlZCBzdXBwbGllcyB0byBhIHNwZWNpZmllZCB3YWxsZXQuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBBZGRyZXNzIG9mIHRoZSB3YWxsZXQgeW91IHdhbnQgdG8gbWludCB0aGUgTkZUIHRvXG4gICAgICogY29uc3QgdG9BZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIlxuICAgICAqXG4gICAgICogLy8gQ3VzdG9tIG1ldGFkYXRhIGFuZCBzdXBwbGllcyBvZiB5b3VyIE5GVHNcbiAgICAgKiBjb25zdCBtZXRhZGF0YVdpdGhTdXBwbHkgPSBbe1xuICAgICAqICAgc3VwcGx5OiA1MCwgLy8gVGhlIG51bWJlciBvZiB0aGlzIE5GVCB5b3Ugd2FudCB0byBtaW50XG4gICAgICogICBtZXRhZGF0YToge1xuICAgICAqICAgICBuYW1lOiBcIkNvb2wgTkZUICMxXCIsXG4gICAgICogICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb29sIE5GVFwiLFxuICAgICAqICAgICBpbWFnZTogZnMucmVhZEZpbGVTeW5jKFwicGF0aC90by9pbWFnZS5wbmdcIiksIC8vIFRoaXMgY2FuIGJlIGFuIGltYWdlIHVybCBvciBmaWxlXG4gICAgICogICB9LFxuICAgICAqIH0sIHtcbiAgICAgKiAgIHN1cHBseTogMTAwLFxuICAgICAqICAgbWV0YWRhdGE6IHtcbiAgICAgKiAgICAgbmFtZTogXCJDb29sIE5GVCAjMlwiLFxuICAgICAqICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29vbCBORlRcIixcbiAgICAgKiAgICAgaW1hZ2U6IGZzLnJlYWRGaWxlU3luYyhcInBhdGgvdG8vaW1hZ2UucG5nXCIpLCAvLyBUaGlzIGNhbiBiZSBhbiBpbWFnZSB1cmwgb3IgZmlsZVxuICAgICAqICAgfSxcbiAgICAgKiB9XTtcbiAgICAgKlxuICAgICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QubWludEJhdGNoVG8odG9BZGRyZXNzLCBtZXRhZGF0YVdpdGhTdXBwbHkpO1xuICAgICAqIGNvbnN0IHJlY2VpcHQgPSB0eFswXS5yZWNlaXB0OyAvLyBzYW1lIHRyYW5zYWN0aW9uIHJlY2VpcHQgZm9yIGFsbCBtaW50ZWQgTkZUc1xuICAgICAqIGNvbnN0IGZpcnN0VG9rZW5JZCA9IHR4WzBdLmlkOyAvLyB0b2tlbiBpZCBvZiB0aGUgZmlyc3QgbWludGVkIE5GVFxuICAgICAqIGNvbnN0IGZpcnN0TkZUID0gYXdhaXQgdHhbMF0uZGF0YSgpOyAvLyAob3B0aW9uYWwpIGZldGNoIGRldGFpbHMgb2YgdGhlIGZpcnN0IG1pbnRlZCBORlRcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtaW50QmF0Y2hUb1wiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgKHRvLCBtZXRhZGF0YVdpdGhTdXBwbHkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVyYzExNTUubWludEJhdGNoVG8ucHJlcGFyZSh0bywgbWV0YWRhdGFXaXRoU3VwcGx5KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogQnVybiBhIHNwZWNpZmllZCBhbW91bnQgb2YgYSBORlRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbklkIC0gdGhlIHRva2VuIElkIHRvIGJ1cm5cbiAgICAgKiBAcGFyYW0gYW1vdW50IC0gYW1vdW50IHRvIGJ1cm5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmJ1cm5Ub2tlbnModG9rZW5JZCwgYW1vdW50KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJidXJuXCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyAodG9rZW5JZCwgYW1vdW50KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmMxMTU1LmJ1cm4ucHJlcGFyZSh0b2tlbklkLCBhbW91bnQpO1xuICAgIH0pKTtcbiAgICB0aGlzLmFiaSA9IEFiaVNjaGVtYS5wYXJzZShhYmkgfHwgW10pO1xuICAgIHRoaXMubWV0YWRhdGEgPSBuZXcgQ29udHJhY3RNZXRhZGF0YSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgVG9rZW5FcmMxMTU1Q29udHJhY3RTY2hlbWEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5hcHAgPSBuZXcgQ29udHJhY3RBcHBVUkkodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMubWV0YWRhdGEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5yb2xlcyA9IG5ldyBDb250cmFjdFJvbGVzKHRoaXMuY29udHJhY3RXcmFwcGVyLCBFZGl0aW9uLmNvbnRyYWN0Um9sZXMpO1xuICAgIHRoaXMucm95YWx0aWVzID0gbmV3IENvbnRyYWN0Um95YWx0eSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5tZXRhZGF0YSk7XG4gICAgdGhpcy5zYWxlcyA9IG5ldyBDb250cmFjdFByaW1hcnlTYWxlKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmVuY29kZXIgPSBuZXcgQ29udHJhY3RFbmNvZGVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmVzdGltYXRvciA9IG5ldyBHYXNDb3N0RXN0aW1hdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBDb250cmFjdEV2ZW50cyh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5wbGF0Zm9ybUZlZXMgPSBuZXcgQ29udHJhY3RQbGF0Zm9ybUZlZSh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5pbnRlcmNlcHRvciA9IG5ldyBDb250cmFjdEludGVyY2VwdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IG5ldyBFcmMxMTU1U2lnbmF0dXJlTWludGFibGUodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMuc3RvcmFnZSwgdGhpcy5yb2xlcyk7XG4gICAgdGhpcy5vd25lciA9IG5ldyBDb250cmFjdE93bmVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uTmV0d29ya1VwZGF0ZWQobmV0d29yaykge1xuICAgIHRoaXMuY29udHJhY3RXcmFwcGVyLnVwZGF0ZVNpZ25lck9yUHJvdmlkZXIobmV0d29yayk7XG4gIH1cbiAgZ2V0QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3M7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFJFQUQgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBHZXQgYWxsIE5GVHNcbiAgICpcbiAgICogQHJlbWFya3MgR2V0IGFsbCB0aGUgZGF0YSBhc3NvY2lhdGVkIHdpdGggZXZlcnkgTkZUIGluIHRoaXMgY29udHJhY3QuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHJldHVybnMgdGhlIGZpcnN0IDEwMCBORlRzLCB1c2UgcXVlcnlQYXJhbXMgdG8gZmV0Y2ggbW9yZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBuZnRzID0gYXdhaXQgY29udHJhY3QuZ2V0QWxsKCk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0gcXVlcnlQYXJhbXMgLSBvcHRpb25hbCBmaWx0ZXJpbmcgdG8gb25seSBmZXRjaCBhIHN1YnNldCBvZiByZXN1bHRzLlxuICAgKiBAcmV0dXJucyBUaGUgTkZUIG1ldGFkYXRhIGZvciBhbGwgTkZUcyBxdWVyaWVkLlxuICAgKi9cbiAgYXN5bmMgZ2V0QWxsKHF1ZXJ5UGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjMTE1NS5nZXRBbGwocXVlcnlQYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgTkZUcyBvd25lZCBieSBhIHNwZWNpZmljIHdhbGxldFxuICAgKlxuICAgKiBAcmVtYXJrcyBHZXQgYWxsIHRoZSBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgTkZUcyBvd25lZCBieSBhIHNwZWNpZmljIHdhbGxldC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBBZGRyZXNzIG9mIHRoZSB3YWxsZXQgdG8gZ2V0IHRoZSBORlRzIG9mXG4gICAqIGNvbnN0IGFkZHJlc3MgPSBcInt7d2FsbGV0X2FkZHJlc3N9fVwiO1xuICAgKiBjb25zdCBuZnRzID0gYXdhaXQgY29udHJhY3QuZ2V0T3duZWQoYWRkcmVzcyk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcmV0dXJucyBUaGUgTkZUIG1ldGFkYXRhIGZvciBhbGwgTkZUcyBpbiB0aGUgY29udHJhY3QuXG4gICAqL1xuICBhc3luYyBnZXRPd25lZCh3YWxsZXRBZGRyZXNzKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjMTE1NS5nZXRPd25lZCh3YWxsZXRBZGRyZXNzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlciBvZiBORlRzIG1pbnRlZFxuICAgKiBAcmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIE5GVHMgbWludGVkIGluIHRoaXMgY29udHJhY3RcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYXN5bmMgZ2V0VG90YWxDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMxMTU1LnRvdGFsQ291bnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciB1c2VycyBjYW4gdHJhbnNmZXIgTkZUcyBmcm9tIHRoaXMgY29udHJhY3RcbiAgICovXG4gIGFzeW5jIGlzVHJhbnNmZXJSZXN0cmljdGVkKCkge1xuICAgIGNvbnN0IGFueW9uZUNhblRyYW5zZmVyID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0Lmhhc1JvbGUoZ2V0Um9sZUhhc2goXCJ0cmFuc2ZlclwiKSwgY29uc3RhbnRzLkFkZHJlc3NaZXJvKTtcbiAgICByZXR1cm4gIWFueW9uZUNhblRyYW5zZmVyO1xuICB9XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBtaW50IHRyYW5zYWN0aW9uIHdpdGhvdXQgZXhlY3V0aW5nIGl0LlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgZXN0aW1hdGluZyB0aGUgZ2FzIGNvc3Qgb2YgYSBtaW50IHRyYW5zYWN0aW9uLCBvdmVycmlkaW5nIHRyYW5zYWN0aW9uIG9wdGlvbnMgYW5kIGhhdmluZyBmaW5lIGdyYWluZWQgY29udHJvbCBvdmVyIHRoZSB0cmFuc2FjdGlvbiBleGVjdXRpb24uXG4gICAqIEBwYXJhbSByZWNlaXZlciAtIEFkZHJlc3MgeW91IHdhbnQgdG8gc2VuZCB0aGUgdG9rZW4gdG9cbiAgICogQHBhcmFtIG1ldGFkYXRhV2l0aFN1cHBseSAtIFRoZSBtZXRhZGF0YSBvZiB0aGUgTkZUIHlvdSB3YW50IHRvIG1pbnRcbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgYGNvbnRyYWN0Lm1pbnQucHJlcGFyZSguLi5hcmdzKWBcbiAgICovXG4gIGFzeW5jIGdldE1pbnRUcmFuc2FjdGlvbihyZWNlaXZlciwgbWV0YWRhdGFXaXRoU3VwcGx5KSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjMTE1NS5nZXRNaW50VHJhbnNhY3Rpb24ocmVjZWl2ZXIsIG1ldGFkYXRhV2l0aFN1cHBseSk7XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgcHJlcGFyZShtZXRob2QsIGFyZ3MsIG92ZXJyaWRlcykge1xuICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgIGNvbnRyYWN0V3JhcHBlcjogdGhpcy5jb250cmFjdFdyYXBwZXIsXG4gICAgICBtZXRob2QsXG4gICAgICBhcmdzLFxuICAgICAgb3ZlcnJpZGVzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBjYWxsKGZ1bmN0aW9uTmFtZSwgYXJncywgb3ZlcnJpZGVzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLmNhbGwoZnVuY3Rpb25OYW1lLCBhcmdzLCBvdmVycmlkZXMpO1xuICB9XG59XG5fZGVmaW5lUHJvcGVydHkoRWRpdGlvbiwgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCIsIFwibWludGVyXCIsIFwidHJhbnNmZXJcIl0pO1xuXG5leHBvcnQgeyBFZGl0aW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=