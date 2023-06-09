"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_edition-drop-9d7634c8_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/edition-drop-9d7634c8.browser.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/edition-drop-9d7634c8.browser.esm.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditionDrop: () => (/* binding */ EditionDrop)
/* harmony export */ });
/* harmony import */ var _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./QueryParams-7d9473b5.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-7d9473b5.browser.esm.js");
/* harmony import */ var _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contract-metadata-88f06ef9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/contract-metadata-88f06ef9.browser.esm.js");
/* harmony import */ var _drop_erc1155_history_72d2f40d_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./drop-erc1155-history-72d2f40d.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/drop-erc1155-history-72d2f40d.browser.esm.js");
/* harmony import */ var _erc_1155_standard_607e2724_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./erc-1155-standard-607e2724.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/erc-1155-standard-607e2724.browser.esm.js");
/* harmony import */ var _thirdweb_checkout_7100edf9_browser_esm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./thirdweb-checkout-7100edf9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/thirdweb-checkout-7100edf9.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/constants/lib.esm/addresses.js");
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
 * Setup a collection of NFTs with a customizable number of each NFT that are minted as users claim them.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "edition-drop");
 * ```
 *
 * @public
 */
class EditionDrop extends _erc_1155_standard_607e2724_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.S {
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
   * Configure claim conditions for each NFT
   * @remarks Define who can claim each NFT in the edition, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   *
   * const tokenId = 0; // the id of the NFT to set claim conditions on
   * await contract.claimConditions.set(tokenId, claimConditions);
   * ```
   */

  /**
   * Checkout
   * @remarks Create a FIAT currency checkout for your NFT drop.
   */

  constructor(network, _address, storage) {
    var _this;
    let _options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dz(network, _address, abi, _options);
    super(contractWrapper, storage, chainId);
    _this = this;
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "abi", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "sales", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "platformFees", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "encoder", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "estimator", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "events", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "metadata", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "app", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "roles", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "royalties", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "claimConditions", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "checkout", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "history", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "interceptor", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "owner", void 0);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create a batch of NFTs to be claimed in the future
     *
     * @remarks Create batch allows you to create a batch of many NFTs in one transaction.
     *
     * @example
     * ```javascript
     * // Custom metadata of the NFTs to create
     * const metadatas = [{
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"),
     * }];
     *
     * const results = await contract.createBatch(metadatas); // uploads and creates the NFTs on chain
     * const firstTokenId = results[0].id; // token id of the first created NFT
     * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
     * ```
     *
     * @param metadatas - The metadata to include in the batch.
     * @param options - optional upload progress callback
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "createBatch", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (metadatas, options) => {
      return this.erc1155.lazyMint.prepare(metadatas, options);
    }));
    /**
     * Claim NFTs to a specific Wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const tokenId = 0; // the id of the NFT you want to claim
     * const quantity = 1; // how many NFTs you want to claim
     *
     * const tx = await contract.claimTo(address, tokenId, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param tokenId - Id of the token you want to claim
     * @param quantity - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     * @param proofs - Array of proofs
     *
     * @returns - Receipt for the transaction
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "claimTo", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async function (destinationAddress, tokenId, quantity) {
      let checkERC20Allowance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return _this.erc1155.claimTo.prepare(destinationAddress, tokenId, quantity, {
        checkERC20Allowance
      });
    }));
    /**
     * Claim a token to the connected wallet
     *
     * @remarks See {@link EditionDrop.claimTo}
     *
     * @param tokenId - Id of the token you want to claim
     * @param quantity - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     * @param proofs - Array of proofs
     *
     * @returns - Receipt for the transaction
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "claim", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async function (tokenId, quantity) {
      let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      const address = await _this.contractWrapper.getSignerAddress();
      return _this.claimTo.prepare(address, tokenId, quantity, checkERC20Allowance);
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
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "burnTokens", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (tokenId, amount) => {
      return this.erc1155.burn.prepare(tokenId, amount);
    }));
    this.abi = _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.e.parse(abi);
    this.metadata = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ag(this.contractWrapper, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dD, this.storage);
    this.app = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.a$(this.contractWrapper, this.metadata, this.storage);
    this.roles = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ah(this.contractWrapper, EditionDrop.contractRoles);
    this.royalties = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ai(this.contractWrapper, this.metadata);
    this.sales = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aj(this.contractWrapper);
    this.claimConditions = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.am(this.contractWrapper, this.metadata, this.storage);
    this.events = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aQ(this.contractWrapper);
    this.history = new _drop_erc1155_history_72d2f40d_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__.D(this.events);
    this.encoder = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.af(this.contractWrapper);
    this.estimator = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aP(this.contractWrapper);
    this.platformFees = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aS(this.contractWrapper);
    this.interceptor = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aR(this.contractWrapper);
    this.checkout = new _thirdweb_checkout_7100edf9_browser_esm_js__WEBPACK_IMPORTED_MODULE_11__.a(this.contractWrapper);
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

  // TODO getAllClaimerAddresses() - should be done via an indexer

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
    const anyoneCanTransfer = await this.contractWrapper.readContract.hasRole((0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.bE)("transfer"), ethers__WEBPACK_IMPORTED_MODULE_12__.AddressZero);
    return !anyoneCanTransfer;
  }
  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param claimData - Optional claim verification data (e.g. price, allowlist proof, etc...)
   *
   * @deprecated Use `contract.erc1155.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, tokenId, quantity) {
    let checkERC20Allowance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return this.erc1155.getClaimTransaction(destinationAddress, tokenId, quantity, {
      checkERC20Allowance
    });
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
(0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(EditionDrop, "contractRoles", ["admin", "minter", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LWVkaXRpb24tZHJvcC05ZDc2MzRjOC1icm93c2VyLWVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZFO0FBQ3FhO0FBQ3paO0FBQ047QUFDRjtBQUM5QztBQUNwQjtBQUNGO0FBQ2lCO0FBQ29DO0FBQ1Q7QUFDUTtBQUNHO0FBQ0c7QUFDYjtBQUNNO0FBQ0U7QUFDSjtBQUNTO0FBQ0o7QUFDQztBQUNGO0FBQ0E7QUFDUDtBQUNVO0FBQ0o7QUFDSjtBQUNNO0FBQ0s7QUFDRztBQUNQO0FBQ0E7QUFDQztBQUNSO0FBQ007QUFDSztBQUNHO0FBQ2Y7QUFDVTtBQUNGO0FBQ0s7QUFDUDtBQUNQO0FBQ1U7QUFDRjtBQUNDO0FBQ1Q7QUFDTztBQUNGO0FBQ1U7QUFDVjtBQUNBO0FBQ0o7QUFDRDtBQUNRO0FBQ1A7QUFDcEM7QUFDNkM7QUFDOUM7QUFDc0M7QUFDOUI7QUFDVjtBQUNnRDtBQUN4QztBQUNxQztBQUNwRDtBQUNRO0FBQ0c7QUFDa0M7QUFDUTtBQUNDO0FBQ1E7QUFDbEQ7QUFDWjtBQUMrRDtBQUNDO0FBQ3hDO0FBQ3VCO0FBQ0M7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDLDZDQUE2QyxrQkFBa0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUVBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7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Q3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQWU7O0FBRVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3Nkay9kaXN0L2VkaXRpb24tZHJvcC05ZDc2MzRjOC5icm93c2VyLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSB9IGZyb20gJy4vUXVlcnlQYXJhbXMtN2Q5NDczYjUuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgZHogYXMgQ29udHJhY3RXcmFwcGVyLCBkcyBhcyBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24sIGUgYXMgQWJpU2NoZW1hLCBhZyBhcyBDb250cmFjdE1ldGFkYXRhLCBkRCBhcyBEcm9wRXJjMTE1NUNvbnRyYWN0U2NoZW1hLCBhJCBhcyBDb250cmFjdEFwcFVSSSwgYWggYXMgQ29udHJhY3RSb2xlcywgYWkgYXMgQ29udHJhY3RSb3lhbHR5LCBhaiBhcyBDb250cmFjdFByaW1hcnlTYWxlLCBhbSBhcyBEcm9wRXJjMTE1NUNsYWltQ29uZGl0aW9ucywgYVEgYXMgQ29udHJhY3RFdmVudHMsIGFmIGFzIENvbnRyYWN0RW5jb2RlciwgYVAgYXMgR2FzQ29zdEVzdGltYXRvciwgYVMgYXMgQ29udHJhY3RQbGF0Zm9ybUZlZSwgYVIgYXMgQ29udHJhY3RJbnRlcmNlcHRvciwgYVUgYXMgQ29udHJhY3RPd25lciwgYkUgYXMgZ2V0Um9sZUhhc2gsIGFWIGFzIFRyYW5zYWN0aW9uIH0gZnJvbSAnLi9jb250cmFjdC1tZXRhZGF0YS04OGYwNmVmOS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBEIGFzIERyb3BFcmMxMTU1SGlzdG9yeSB9IGZyb20gJy4vZHJvcC1lcmMxMTU1LWhpc3RvcnktNzJkMmY0MGQuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgUyBhcyBTdGFuZGFyZEVyYzExNTUgfSBmcm9tICcuL2VyYy0xMTU1LXN0YW5kYXJkLTYwN2UyNzI0LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGEgYXMgUGFwZXJDaGVja291dCB9IGZyb20gJy4vdGhpcmR3ZWItY2hlY2tvdXQtNzEwMGVkZjkuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCAnYm4uanMnO1xuaW1wb3J0ICd6b2QnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NoYWlucyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMyMF9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwUGVybWl0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTXVsdGljYWxsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDNzIxX1YzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMVN1cHBseS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lMYXp5TWludC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjFfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9MYXp5TWludFdpdGhUaWVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMxMTU1X1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0VSQzI3NzFDb250ZXh0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFwcFVSSS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDb250cmFjdE1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURpcmVjdExpc3RpbmdzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVuZ2xpc2hBdWN0aW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lPZmZlcnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGFja1ZSRkRpcmVjdC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9uc0VudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGxhdGZvcm1GZWUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUHJpbWFyeVNhbGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUm95YWx0eS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL093bmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQWNjb3VudEZhY3RvcnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQWNjb3VudC5qc29uJztcbmltcG9ydCAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvQ29udHJhY3RQdWJsaXNoZXIuanNvbic7XG5pbXBvcnQgJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRm9yd2FyZGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L3N0b3JhZ2UnO1xuaW1wb3J0ICdjcm9zcy1mZXRjaCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JVGhpcmR3ZWJDb250cmFjdC5qc29uJztcbmltcG9ydCAnZXRoZXJzL2xpYi91dGlscy5qcyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjBNZXRhZGF0YS5qc29uJztcbmltcG9ydCAndXVpZCc7XG5pbXBvcnQgJ21lcmtsZXRyZWVqcyc7XG5pbXBvcnQgJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTY1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsRGVwcmVjYXRlZC5qc29uJztcbmltcG9ydCAnZXRoZXJzL2xpYi91dGlscyc7XG5pbXBvcnQgJ2JzNTgnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlMb2dpYy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5Um91dGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2dlbmVyYXRlZC1hYmlzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXRmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXUmVnaXN0cnkuanNvbic7XG5cbi8qKlxuICogU2V0dXAgYSBjb2xsZWN0aW9uIG9mIE5GVHMgd2l0aCBhIGN1c3RvbWl6YWJsZSBudW1iZXIgb2YgZWFjaCBORlQgdGhhdCBhcmUgbWludGVkIGFzIHVzZXJzIGNsYWltIHRoZW0uXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyBUaGlyZHdlYlNESyB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3Nka1wiO1xuICpcbiAqIGNvbnN0IHNkayA9IG5ldyBUaGlyZHdlYlNESyhcInt7Y2hhaW5OYW1lfX1cIik7XG4gKiBjb25zdCBjb250cmFjdCA9IGF3YWl0IHNkay5nZXRDb250cmFjdChcInt7Y29udHJhY3RfYWRkcmVzc319XCIsIFwiZWRpdGlvbi1kcm9wXCIpO1xuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBFZGl0aW9uRHJvcCBleHRlbmRzIFN0YW5kYXJkRXJjMTE1NSB7XG4gIC8qKlxuICAgKiBDb25maWd1cmUgcm95YWx0aWVzXG4gICAqIEByZW1hcmtzIFNldCB5b3VyIG93biByb3lhbHRpZXMgZm9yIHRoZSBlbnRpcmUgY29udHJhY3Qgb3IgcGVyIHRva2VuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gcm95YWx0aWVzIG9uIHRoZSB3aG9sZSBjb250cmFjdFxuICAgKiBjb250cmFjdC5yb3lhbHRpZXMuc2V0RGVmYXVsdFJveWFsdHlJbmZvKHtcbiAgICogICBzZWxsZXJfZmVlX2Jhc2lzX3BvaW50czogMTAwLCAvLyAxJVxuICAgKiAgIGZlZV9yZWNpcGllbnQ6IFwiMHguLi5cIlxuICAgKiB9KTtcbiAgICogLy8gb3ZlcnJpZGUgcm95YWx0eSBmb3IgYSBwYXJ0aWN1bGFyIHRva2VuXG4gICAqIGNvbnRyYWN0LnJveWFsdGllcy5zZXRUb2tlblJveWFsdHlJbmZvKHRva2VuSWQsIHtcbiAgICogICBzZWxsZXJfZmVlX2Jhc2lzX3BvaW50czogNTAwLCAvLyA1JVxuICAgKiAgIGZlZV9yZWNpcGllbnQ6IFwiMHguLi5cIlxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25maWd1cmUgY2xhaW0gY29uZGl0aW9ucyBmb3IgZWFjaCBORlRcbiAgICogQHJlbWFya3MgRGVmaW5lIHdobyBjYW4gY2xhaW0gZWFjaCBORlQgaW4gdGhlIGVkaXRpb24sIHdoZW4gYW5kIGhvdyBtYW55LlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IHByZXNhbGVTdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgKiBjb25zdCBwdWJsaWNTYWxlU3RhcnRUaW1lID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDYwICogNjAgKiAyNCAqIDEwMDApO1xuICAgKiBjb25zdCBjbGFpbUNvbmRpdGlvbnMgPSBbXG4gICAqICAge1xuICAgKiAgICAgc3RhcnRUaW1lOiBwcmVzYWxlU3RhcnRUaW1lLCAvLyBzdGFydCB0aGUgcHJlc2FsZSBub3dcbiAgICogICAgIG1heENsYWltYWJsZVN1cHBseTogMiwgLy8gbGltaXQgaG93IG1hbnkgbWludHMgZm9yIHRoaXMgcHJlc2FsZVxuICAgKiAgICAgcHJpY2U6IDAuMDEsIC8vIHByZXNhbGUgcHJpY2VcbiAgICogICAgIHNuYXBzaG90OiBbJzB4Li4uJywgJzB4Li4uJ10sIC8vIGxpbWl0IG1pbnRpbmcgdG8gb25seSBjZXJ0YWluIGFkZHJlc3Nlc1xuICAgKiAgIH0sXG4gICAqICAge1xuICAgKiAgICAgc3RhcnRUaW1lOiBwdWJsaWNTYWxlU3RhcnRUaW1lLCAvLyAyNGggYWZ0ZXIgcHJlc2FsZSwgc3RhcnQgcHVibGljIHNhbGVcbiAgICogICAgIHByaWNlOiAwLjA4LCAvLyBwdWJsaWMgc2FsZSBwcmljZVxuICAgKiAgIH1cbiAgICogXSk7XG4gICAqXG4gICAqIGNvbnN0IHRva2VuSWQgPSAwOyAvLyB0aGUgaWQgb2YgdGhlIE5GVCB0byBzZXQgY2xhaW0gY29uZGl0aW9ucyBvblxuICAgKiBhd2FpdCBjb250cmFjdC5jbGFpbUNvbmRpdGlvbnMuc2V0KHRva2VuSWQsIGNsYWltQ29uZGl0aW9ucyk7XG4gICAqIGBgYFxuICAgKi9cblxuICAvKipcbiAgICogQ2hlY2tvdXRcbiAgICogQHJlbWFya3MgQ3JlYXRlIGEgRklBVCBjdXJyZW5jeSBjaGVja291dCBmb3IgeW91ciBORlQgZHJvcC5cbiAgICovXG5cbiAgY29uc3RydWN0b3IobmV0d29yaywgX2FkZHJlc3MsIHN0b3JhZ2UpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgbGV0IF9vcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBsZXQgYWJpID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgPyBhcmd1bWVudHNbNF0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNoYWluSWQgPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY29udHJhY3RXcmFwcGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiBuZXcgQ29udHJhY3RXcmFwcGVyKG5ldHdvcmssIF9hZGRyZXNzLCBhYmksIF9vcHRpb25zKTtcbiAgICBzdXBlcihjb250cmFjdFdyYXBwZXIsIHN0b3JhZ2UsIGNoYWluSWQpO1xuICAgIF90aGlzID0gdGhpcztcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhYmlcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzYWxlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBsYXRmb3JtRmVlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuY29kZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlc3RpbWF0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJldmVudHNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXRhZGF0YVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFwcFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJvbGVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm95YWx0aWVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY2xhaW1Db25kaXRpb25zXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY2hlY2tvdXRcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoaXN0b3J5XCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaW50ZXJjZXB0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvd25lclwiLCB2b2lkIDApO1xuICAgIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBXUklURSBGVU5DVElPTlNcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBiYXRjaCBvZiBORlRzIHRvIGJlIGNsYWltZWQgaW4gdGhlIGZ1dHVyZVxuICAgICAqXG4gICAgICogQHJlbWFya3MgQ3JlYXRlIGJhdGNoIGFsbG93cyB5b3UgdG8gY3JlYXRlIGEgYmF0Y2ggb2YgbWFueSBORlRzIGluIG9uZSB0cmFuc2FjdGlvbi5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIEN1c3RvbSBtZXRhZGF0YSBvZiB0aGUgTkZUcyB0byBjcmVhdGVcbiAgICAgKiBjb25zdCBtZXRhZGF0YXMgPSBbe1xuICAgICAqICAgbmFtZTogXCJDb29sIE5GVFwiLFxuICAgICAqICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvb2wgTkZUXCIsXG4gICAgICogICBpbWFnZTogZnMucmVhZEZpbGVTeW5jKFwicGF0aC90by9pbWFnZS5wbmdcIiksIC8vIFRoaXMgY2FuIGJlIGFuIGltYWdlIHVybCBvciBmaWxlXG4gICAgICogfSwge1xuICAgICAqICAgbmFtZTogXCJDb29sIE5GVFwiLFxuICAgICAqICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvb2wgTkZUXCIsXG4gICAgICogICBpbWFnZTogZnMucmVhZEZpbGVTeW5jKFwicGF0aC90by9pbWFnZS5wbmdcIiksXG4gICAgICogfV07XG4gICAgICpcbiAgICAgKiBjb25zdCByZXN1bHRzID0gYXdhaXQgY29udHJhY3QuY3JlYXRlQmF0Y2gobWV0YWRhdGFzKTsgLy8gdXBsb2FkcyBhbmQgY3JlYXRlcyB0aGUgTkZUcyBvbiBjaGFpblxuICAgICAqIGNvbnN0IGZpcnN0VG9rZW5JZCA9IHJlc3VsdHNbMF0uaWQ7IC8vIHRva2VuIGlkIG9mIHRoZSBmaXJzdCBjcmVhdGVkIE5GVFxuICAgICAqIGNvbnN0IGZpcnN0TkZUID0gYXdhaXQgcmVzdWx0c1swXS5kYXRhKCk7IC8vIChvcHRpb25hbCkgZmV0Y2ggZGV0YWlscyBvZiB0aGUgZmlyc3QgY3JlYXRlZCBORlRcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZXRhZGF0YXMgLSBUaGUgbWV0YWRhdGEgdG8gaW5jbHVkZSBpbiB0aGUgYmF0Y2guXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBvcHRpb25hbCB1cGxvYWQgcHJvZ3Jlc3MgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjcmVhdGVCYXRjaFwiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgKG1ldGFkYXRhcywgb3B0aW9ucykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZXJjMTE1NS5sYXp5TWludC5wcmVwYXJlKG1ldGFkYXRhcywgb3B0aW9ucyk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIENsYWltIE5GVHMgdG8gYSBzcGVjaWZpYyBXYWxsZXRcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIExldCB0aGUgc3BlY2lmaWVkIHdhbGxldCBjbGFpbSBORlRzLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogY29uc3QgYWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCI7IC8vIGFkZHJlc3Mgb2YgdGhlIHdhbGxldCB5b3Ugd2FudCB0byBjbGFpbSB0aGUgTkZUc1xuICAgICAqIGNvbnN0IHRva2VuSWQgPSAwOyAvLyB0aGUgaWQgb2YgdGhlIE5GVCB5b3Ugd2FudCB0byBjbGFpbVxuICAgICAqIGNvbnN0IHF1YW50aXR5ID0gMTsgLy8gaG93IG1hbnkgTkZUcyB5b3Ugd2FudCB0byBjbGFpbVxuICAgICAqXG4gICAgICogY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5jbGFpbVRvKGFkZHJlc3MsIHRva2VuSWQsIHF1YW50aXR5KTtcbiAgICAgKiBjb25zdCByZWNlaXB0ID0gdHgucmVjZWlwdDsgLy8gdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZXN0aW5hdGlvbkFkZHJlc3MgLSBBZGRyZXNzIHlvdSB3YW50IHRvIHNlbmQgdGhlIHRva2VuIHRvXG4gICAgICogQHBhcmFtIHRva2VuSWQgLSBJZCBvZiB0aGUgdG9rZW4geW91IHdhbnQgdG8gY2xhaW1cbiAgICAgKiBAcGFyYW0gcXVhbnRpdHkgLSBRdWFudGl0eSBvZiB0aGUgdG9rZW5zIHlvdSB3YW50IHRvIGNsYWltXG4gICAgICogQHBhcmFtIGNoZWNrRVJDMjBBbGxvd2FuY2UgLSBPcHRpb25hbCwgY2hlY2sgaWYgdGhlIHdhbGxldCBoYXMgZW5vdWdoIEVSQzIwIGFsbG93YW5jZSB0byBjbGFpbSB0aGUgdG9rZW5zLCBhbmQgaWYgbm90LCBhcHByb3ZlIHRoZSB0cmFuc2ZlclxuICAgICAqIEBwYXJhbSBwcm9vZnMgLSBBcnJheSBvZiBwcm9vZnNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIC0gUmVjZWlwdCBmb3IgdGhlIHRyYW5zYWN0aW9uXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY2xhaW1Ub1wiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgZnVuY3Rpb24gKGRlc3RpbmF0aW9uQWRkcmVzcywgdG9rZW5JZCwgcXVhbnRpdHkpIHtcbiAgICAgIGxldCBjaGVja0VSQzIwQWxsb3dhbmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB0cnVlO1xuICAgICAgcmV0dXJuIF90aGlzLmVyYzExNTUuY2xhaW1Uby5wcmVwYXJlKGRlc3RpbmF0aW9uQWRkcmVzcywgdG9rZW5JZCwgcXVhbnRpdHksIHtcbiAgICAgICAgY2hlY2tFUkMyMEFsbG93YW5jZVxuICAgICAgfSk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIENsYWltIGEgdG9rZW4gdG8gdGhlIGNvbm5lY3RlZCB3YWxsZXRcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIFNlZSB7QGxpbmsgRWRpdGlvbkRyb3AuY2xhaW1Ub31cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbklkIC0gSWQgb2YgdGhlIHRva2VuIHlvdSB3YW50IHRvIGNsYWltXG4gICAgICogQHBhcmFtIHF1YW50aXR5IC0gUXVhbnRpdHkgb2YgdGhlIHRva2VucyB5b3Ugd2FudCB0byBjbGFpbVxuICAgICAqIEBwYXJhbSBjaGVja0VSQzIwQWxsb3dhbmNlIC0gT3B0aW9uYWwsIGNoZWNrIGlmIHRoZSB3YWxsZXQgaGFzIGVub3VnaCBFUkMyMCBhbGxvd2FuY2UgdG8gY2xhaW0gdGhlIHRva2VucywgYW5kIGlmIG5vdCwgYXBwcm92ZSB0aGUgdHJhbnNmZXJcbiAgICAgKiBAcGFyYW0gcHJvb2ZzIC0gQXJyYXkgb2YgcHJvb2ZzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyAtIFJlY2VpcHQgZm9yIHRoZSB0cmFuc2FjdGlvblxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNsYWltXCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyBmdW5jdGlvbiAodG9rZW5JZCwgcXVhbnRpdHkpIHtcbiAgICAgIGxldCBjaGVja0VSQzIwQWxsb3dhbmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IF90aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRTaWduZXJBZGRyZXNzKCk7XG4gICAgICByZXR1cm4gX3RoaXMuY2xhaW1Uby5wcmVwYXJlKGFkZHJlc3MsIHRva2VuSWQsIHF1YW50aXR5LCBjaGVja0VSQzIwQWxsb3dhbmNlKTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogQnVybiBhIHNwZWNpZmllZCBhbW91bnQgb2YgYSBORlRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbklkIC0gdGhlIHRva2VuIElkIHRvIGJ1cm5cbiAgICAgKiBAcGFyYW0gYW1vdW50IC0gYW1vdW50IHRvIGJ1cm5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmJ1cm5Ub2tlbnModG9rZW5JZCwgYW1vdW50KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJidXJuVG9rZW5zXCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyAodG9rZW5JZCwgYW1vdW50KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmMxMTU1LmJ1cm4ucHJlcGFyZSh0b2tlbklkLCBhbW91bnQpO1xuICAgIH0pKTtcbiAgICB0aGlzLmFiaSA9IEFiaVNjaGVtYS5wYXJzZShhYmkpO1xuICAgIHRoaXMubWV0YWRhdGEgPSBuZXcgQ29udHJhY3RNZXRhZGF0YSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgRHJvcEVyYzExNTVDb250cmFjdFNjaGVtYSwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLmFwcCA9IG5ldyBDb250cmFjdEFwcFVSSSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5tZXRhZGF0YSwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLnJvbGVzID0gbmV3IENvbnRyYWN0Um9sZXModGhpcy5jb250cmFjdFdyYXBwZXIsIEVkaXRpb25Ecm9wLmNvbnRyYWN0Um9sZXMpO1xuICAgIHRoaXMucm95YWx0aWVzID0gbmV3IENvbnRyYWN0Um95YWx0eSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5tZXRhZGF0YSk7XG4gICAgdGhpcy5zYWxlcyA9IG5ldyBDb250cmFjdFByaW1hcnlTYWxlKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmNsYWltQ29uZGl0aW9ucyA9IG5ldyBEcm9wRXJjMTE1NUNsYWltQ29uZGl0aW9ucyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5tZXRhZGF0YSwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBDb250cmFjdEV2ZW50cyh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5oaXN0b3J5ID0gbmV3IERyb3BFcmMxMTU1SGlzdG9yeSh0aGlzLmV2ZW50cyk7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lc3RpbWF0b3IgPSBuZXcgR2FzQ29zdEVzdGltYXRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5wbGF0Zm9ybUZlZXMgPSBuZXcgQ29udHJhY3RQbGF0Zm9ybUZlZSh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5pbnRlcmNlcHRvciA9IG5ldyBDb250cmFjdEludGVyY2VwdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmNoZWNrb3V0ID0gbmV3IFBhcGVyQ2hlY2tvdXQodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMub3duZXIgPSBuZXcgQ29udHJhY3RPd25lcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbk5ldHdvcmtVcGRhdGVkKG5ldHdvcmspIHtcbiAgICB0aGlzLmNvbnRyYWN0V3JhcHBlci51cGRhdGVTaWduZXJPclByb3ZpZGVyKG5ldHdvcmspO1xuICB9XG4gIGdldEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5hZGRyZXNzO1xuICB9XG5cbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBSRUFEIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvLyBUT0RPIGdldEFsbENsYWltZXJBZGRyZXNzZXMoKSAtIHNob3VsZCBiZSBkb25lIHZpYSBhbiBpbmRleGVyXG5cbiAgLyoqXG4gICAqIEdldCBhbGwgTkZUc1xuICAgKlxuICAgKiBAcmVtYXJrcyBHZXQgYWxsIHRoZSBkYXRhIGFzc29jaWF0ZWQgd2l0aCBldmVyeSBORlQgaW4gdGhpcyBjb250cmFjdC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgcmV0dXJucyB0aGUgZmlyc3QgMTAwIE5GVHMsIHVzZSBxdWVyeVBhcmFtcyB0byBmZXRjaCBtb3JlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IG5mdHMgPSBhd2FpdCBjb250cmFjdC5nZXRBbGwoKTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSBxdWVyeVBhcmFtcyAtIG9wdGlvbmFsIGZpbHRlcmluZyB0byBvbmx5IGZldGNoIGEgc3Vic2V0IG9mIHJlc3VsdHMuXG4gICAqIEByZXR1cm5zIFRoZSBORlQgbWV0YWRhdGEgZm9yIGFsbCBORlRzIHF1ZXJpZWQuXG4gICAqL1xuICBhc3luYyBnZXRBbGwocXVlcnlQYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMxMTU1LmdldEFsbChxdWVyeVBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBORlRzIG93bmVkIGJ5IGEgc3BlY2lmaWMgd2FsbGV0XG4gICAqXG4gICAqIEByZW1hcmtzIEdldCBhbGwgdGhlIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSBORlRzIG93bmVkIGJ5IGEgc3BlY2lmaWMgd2FsbGV0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIEFkZHJlc3Mgb2YgdGhlIHdhbGxldCB0byBnZXQgdGhlIE5GVHMgb2ZcbiAgICogY29uc3QgYWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCI7XG4gICAqIGNvbnN0IG5mdHMgPSBhd2FpdCBjb250cmFjdC5nZXRPd25lZChhZGRyZXNzKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEByZXR1cm5zIFRoZSBORlQgbWV0YWRhdGEgZm9yIGFsbCBORlRzIGluIHRoZSBjb250cmFjdC5cbiAgICovXG4gIGFzeW5jIGdldE93bmVkKHdhbGxldEFkZHJlc3MpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMxMTU1LmdldE93bmVkKHdhbGxldEFkZHJlc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyIG9mIE5GVHMgbWludGVkXG4gICAqIEByZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgTkZUcyBtaW50ZWQgaW4gdGhpcyBjb250cmFjdFxuICAgKiBAcHVibGljXG4gICAqL1xuICBhc3luYyBnZXRUb3RhbENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmVyYzExNTUudG90YWxDb3VudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHVzZXJzIGNhbiB0cmFuc2ZlciBORlRzIGZyb20gdGhpcyBjb250cmFjdFxuICAgKi9cbiAgYXN5bmMgaXNUcmFuc2ZlclJlc3RyaWN0ZWQoKSB7XG4gICAgY29uc3QgYW55b25lQ2FuVHJhbnNmZXIgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuaGFzUm9sZShnZXRSb2xlSGFzaChcInRyYW5zZmVyXCIpLCBjb25zdGFudHMuQWRkcmVzc1plcm8pO1xuICAgIHJldHVybiAhYW55b25lQ2FuVHJhbnNmZXI7XG4gIH1cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIGNsYWltIHRyYW5zYWN0aW9uIHdpdGhvdXQgZXhlY3V0aW5nIGl0LlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgZXN0aW1hdGluZyB0aGUgZ2FzIGNvc3Qgb2YgYSBjbGFpbSB0cmFuc2FjdGlvbiwgb3ZlcnJpZGluZyB0cmFuc2FjdGlvbiBvcHRpb25zIGFuZCBoYXZpbmcgZmluZSBncmFpbmVkIGNvbnRyb2wgb3ZlciB0aGUgdHJhbnNhY3Rpb24gZXhlY3V0aW9uLlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25BZGRyZXNzIC0gQWRkcmVzcyB5b3Ugd2FudCB0byBzZW5kIHRoZSB0b2tlbiB0b1xuICAgKiBAcGFyYW0gdG9rZW5JZCAtIElkIG9mIHRoZSB0b2tlbiB5b3Ugd2FudCB0byBjbGFpbVxuICAgKiBAcGFyYW0gcXVhbnRpdHkgLSBRdWFudGl0eSBvZiB0aGUgdG9rZW5zIHlvdSB3YW50IHRvIGNsYWltXG4gICAqIEBwYXJhbSBjaGVja0VSQzIwQWxsb3dhbmNlIC0gT3B0aW9uYWwsIGNoZWNrIGlmIHRoZSB3YWxsZXQgaGFzIGVub3VnaCBFUkMyMCBhbGxvd2FuY2UgdG8gY2xhaW0gdGhlIHRva2VucywgYW5kIGlmIG5vdCwgYXBwcm92ZSB0aGUgdHJhbnNmZXJcbiAgICogQHBhcmFtIGNsYWltRGF0YSAtIE9wdGlvbmFsIGNsYWltIHZlcmlmaWNhdGlvbiBkYXRhIChlLmcuIHByaWNlLCBhbGxvd2xpc3QgcHJvb2YsIGV0Yy4uLilcbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBjb250cmFjdC5lcmMxMTU1LmNsYWltLnByZXBhcmUoLi4uYXJncylgIGluc3RlYWRcbiAgICovXG4gIGFzeW5jIGdldENsYWltVHJhbnNhY3Rpb24oZGVzdGluYXRpb25BZGRyZXNzLCB0b2tlbklkLCBxdWFudGl0eSkge1xuICAgIGxldCBjaGVja0VSQzIwQWxsb3dhbmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB0cnVlO1xuICAgIHJldHVybiB0aGlzLmVyYzExNTUuZ2V0Q2xhaW1UcmFuc2FjdGlvbihkZXN0aW5hdGlvbkFkZHJlc3MsIHRva2VuSWQsIHF1YW50aXR5LCB7XG4gICAgICBjaGVja0VSQzIwQWxsb3dhbmNlXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgcHJlcGFyZShtZXRob2QsIGFyZ3MsIG92ZXJyaWRlcykge1xuICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgIGNvbnRyYWN0V3JhcHBlcjogdGhpcy5jb250cmFjdFdyYXBwZXIsXG4gICAgICBtZXRob2QsXG4gICAgICBhcmdzLFxuICAgICAgb3ZlcnJpZGVzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBjYWxsKGZ1bmN0aW9uTmFtZSwgYXJncywgb3ZlcnJpZGVzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLmNhbGwoZnVuY3Rpb25OYW1lLCBhcmdzLCBvdmVycmlkZXMpO1xuICB9XG59XG5fZGVmaW5lUHJvcGVydHkoRWRpdGlvbkRyb3AsIFwiY29udHJhY3RSb2xlc1wiLCBbXCJhZG1pblwiLCBcIm1pbnRlclwiLCBcInRyYW5zZmVyXCJdKTtcblxuZXhwb3J0IHsgRWRpdGlvbkRyb3AgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==