"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_signature-drop-dfc8c43c_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/signature-drop-dfc8c43c.browser.esm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/signature-drop-dfc8c43c.browser.esm.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignatureDrop: () => (/* binding */ SignatureDrop)
/* harmony export */ });
/* harmony import */ var _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./QueryParams-7d9473b5.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-7d9473b5.browser.esm.js");
/* harmony import */ var _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contract-metadata-88f06ef9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/contract-metadata-88f06ef9.browser.esm.js");
/* harmony import */ var _erc_721_standard_b90faf4d_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./erc-721-standard-b90faf4d.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/erc-721-standard-b90faf4d.browser.esm.js");
/* harmony import */ var _thirdweb_checkout_7100edf9_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./thirdweb-checkout-7100edf9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/thirdweb-checkout-7100edf9.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
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
 * Setup a collection of NFTs where when it comes to minting, you can authorize
 * some external party to mint tokens on your contract, and specify what exactly
 * will be minted by that external party..
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "signature-drop");
 * ```
 *
 * @public
 */
class SignatureDrop extends _erc_721_standard_b90faf4d_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.S {
  /**
   * @internal
   */

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
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const claimCondition = {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   * };
   * await contract.claimConditions.set([claimCondition]);
   * ```
   */

  /**
   * Delayed reveal
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.revealer.reveal(batchId, "my secret password");
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

  /**
   * Checkout
   * @remarks Create a FIAT currency checkout for your NFT drop.
   */

  constructor(network, address, storage) {
    let _options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dz(network, address, abi, _options);
    super(contractWrapper, storage, chainId);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "abi", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "owner", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "encoder", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "estimator", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "metadata", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "app", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "sales", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "platformFees", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "events", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "roles", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "interceptor", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "royalties", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "claimConditions", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "revealer", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "signature", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "checkout", void 0);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create a batch of unique NFTs to be claimed in the future
     *
     * @remarks Create batch allows you to create a batch of many unique NFTs in one transaction.
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
      return this.erc721.lazyMint.prepare(metadatas, options);
    }));
    /**
     * Claim unique NFTs to a specific Wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 1; // how many unique NFTs you want to claim
     *
     * const tx = await contract.claimTo(address, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * const claimedTokenId = tx.id; // the id of the NFT claimed
     * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param quantity - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     *
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "claimTo", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (destinationAddress, quantity, options) => {
      return this.erc721.claimTo.prepare(destinationAddress, quantity, options);
    }));
    /**
     * Claim NFTs to the connected wallet.
     *
     * @remarks See {@link NFTDrop.claimTo}
     *
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "claim", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (quantity, options) => {
      return this.erc721.claim.prepare(quantity, options);
    }));
    /**
     * Burn a single NFT
     * @param tokenId - the token Id to burn
     * @example
     * ```javascript
     * const result = await contract.burnToken(tokenId);
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "burn", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async tokenId => {
      return this.erc721.burn.prepare(tokenId);
    }));
    this.abi = _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.e.parse(abi || []);
    this.metadata = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ag(this.contractWrapper, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dM, this.storage);
    this.app = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.a$(this.contractWrapper, this.metadata, this.storage);
    this.roles = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ah(this.contractWrapper, SignatureDrop.contractRoles);
    this.royalties = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ai(this.contractWrapper, this.metadata);
    this.sales = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aj(this.contractWrapper);
    this.encoder = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.af(this.contractWrapper);
    this.estimator = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aP(this.contractWrapper);
    this.events = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aQ(this.contractWrapper);
    this.platformFees = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aS(this.contractWrapper);
    this.interceptor = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aR(this.contractWrapper);
    this.claimConditions = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.al(this.contractWrapper, this.metadata, this.storage);
    this.signature = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aD(this.contractWrapper, this.storage);
    this.revealer = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ak(this.contractWrapper, this.storage, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dN.name, () => this.erc721.nextTokenIdToMint());
    this.signature = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aD(this.contractWrapper, this.storage);
    this.owner = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aU(this.contractWrapper);
    this.checkout = new _thirdweb_checkout_7100edf9_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__.a(this.contractWrapper);
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
   * Get the total count NFTs in this drop contract, both claimed and unclaimed
   */
  async totalSupply() {
    const claimed = await this.totalClaimedSupply();
    const unclaimed = await this.totalUnclaimedSupply();
    return claimed.add(unclaimed);
  }

  /**
   * Get All Claimed NFTs
   *
   * @remarks Fetch all the NFTs (and their owners) that have been claimed in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTs = await contract.getAllClaimed();
   * const firstOwner = claimedNFTs[0].owner;
   * ```
   *
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata and their ownersfor all NFTs queried.
   */
  async getAllClaimed(queryParams) {
    const start = ethers__WEBPACK_IMPORTED_MODULE_11__.BigNumber.from(queryParams?.start || 0).toNumber();
    const count = ethers__WEBPACK_IMPORTED_MODULE_11__.BigNumber.from(queryParams?.count || _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.c).toNumber();
    const maxId = Math.min((await this.totalClaimedSupply()).toNumber(), start + count);
    return await Promise.all(Array.from(Array(maxId).keys()).map(i => this.get(i.toString())));
  }

  /**
   * Get All Unclaimed NFTs
   *
   * @remarks Fetch all the NFTs that have been not been claimed yet in this Drop.
   *
   * * @example
   * ```javascript
   * const unclaimedNFTs = await contract.getAllUnclaimed();
   * const firstUnclaimedNFT = unclaimedNFTs[0].name;
   * ```
   *
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async getAllUnclaimed(queryParams) {
    const start = ethers__WEBPACK_IMPORTED_MODULE_11__.BigNumber.from(queryParams?.start || 0).toNumber();
    const count = ethers__WEBPACK_IMPORTED_MODULE_11__.BigNumber.from(queryParams?.count || _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.c).toNumber();
    const firstTokenId = ethers__WEBPACK_IMPORTED_MODULE_11__.BigNumber.from(Math.max((await this.totalClaimedSupply()).toNumber(), start));
    const maxId = ethers__WEBPACK_IMPORTED_MODULE_11__.BigNumber.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(), firstTokenId.toNumber() + count));
    return await Promise.all(Array.from(Array(maxId.sub(firstTokenId).toNumber()).keys()).map(i => this.erc721.getTokenMetadata(firstTokenId.add(i).toString())));
  }

  /**
   * Get the claimed supply
   *
   * @remarks Get the number of claimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTCount = await contract.totalClaimedSupply();
   * console.log(`NFTs claimed so far: ${claimedNFTCount}`);
   * ```
   * @returns the claimed supply
   */
  async totalClaimedSupply() {
    return this.erc721.totalClaimedSupply();
  }

  /**
   * Get the unclaimed supply
   *
   * @remarks Get the number of unclaimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const unclaimedNFTCount = await contract.totalUnclaimedSupply();
   * console.log(`NFTs left to claim: ${unclaimedNFTCount}`);
   * ```
   * @returns the unclaimed supply
   */
  async totalUnclaimedSupply() {
    return this.erc721.totalUnclaimedSupply();
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
   * @param destinationAddress
   * @param quantity
   * @param checkERC20Allowance
   *
   * @deprecated Use `contract.erc721.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, quantity, options) {
    return this.erc721.getClaimTransaction(destinationAddress, quantity, options);
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
(0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(SignatureDrop, "contractRoles", ["admin", "minter", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LXNpZ25hdHVyZS1kcm9wLWRmYzhjNDNjLWJyb3dzZXItZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkc7QUFDNmQ7QUFDdmY7QUFDQTtBQUNuQztBQUMvQjtBQUNGO0FBQ2lCO0FBQ29DO0FBQ1Q7QUFDUTtBQUNHO0FBQ0c7QUFDYjtBQUNNO0FBQ0U7QUFDSjtBQUNTO0FBQ0o7QUFDQztBQUNGO0FBQ0E7QUFDUDtBQUNVO0FBQ0o7QUFDSjtBQUNNO0FBQ0s7QUFDRztBQUNQO0FBQ0E7QUFDQztBQUNSO0FBQ007QUFDSztBQUNHO0FBQ2Y7QUFDVTtBQUNGO0FBQ0s7QUFDUDtBQUNQO0FBQ1U7QUFDRjtBQUNDO0FBQ1Q7QUFDTztBQUNGO0FBQ1U7QUFDVjtBQUNBO0FBQ0o7QUFDRDtBQUNRO0FBQ1A7QUFDcEM7QUFDNkM7QUFDOUM7QUFDc0M7QUFDOUI7QUFDVjtBQUNnRDtBQUN4QztBQUNxQztBQUNwRDtBQUNRO0FBQ0c7QUFDa0M7QUFDUTtBQUNDO0FBQ1E7QUFDbEQ7QUFDWjtBQUMrRDtBQUNDO0FBQ3hDO0FBQ3VCO0FBQ0M7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQSxrQ0FBa0MsV0FBVztBQUM3Qyw2Q0FBNkMsa0JBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdFQUFjO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBUztBQUMzQixrQkFBa0IsOENBQVMsNEJBQTRCLG1FQUF1QjtBQUM5RSx5QkFBeUIsOENBQVM7QUFDbEMsa0JBQWtCLDhDQUFTO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxnQkFBZ0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msa0JBQWtCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSw4RUFBVyxjQUFjLGdEQUFxQjtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBFQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQWU7O0FBRVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3Nkay9kaXN0L3NpZ25hdHVyZS1kcm9wLWRmYzhjNDNjLmJyb3dzZXIuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5LCBjIGFzIERFRkFVTFRfUVVFUllfQUxMX0NPVU5UIH0gZnJvbSAnLi9RdWVyeVBhcmFtcy03ZDk0NzNiNS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBkeiBhcyBDb250cmFjdFdyYXBwZXIsIGRzIGFzIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbiwgZSBhcyBBYmlTY2hlbWEsIGFnIGFzIENvbnRyYWN0TWV0YWRhdGEsIGRNIGFzIERyb3BFcmM3MjFDb250cmFjdFNjaGVtYSwgYSQgYXMgQ29udHJhY3RBcHBVUkksIGFoIGFzIENvbnRyYWN0Um9sZXMsIGFpIGFzIENvbnRyYWN0Um95YWx0eSwgYWogYXMgQ29udHJhY3RQcmltYXJ5U2FsZSwgYWYgYXMgQ29udHJhY3RFbmNvZGVyLCBhUCBhcyBHYXNDb3N0RXN0aW1hdG9yLCBhUSBhcyBDb250cmFjdEV2ZW50cywgYVMgYXMgQ29udHJhY3RQbGF0Zm9ybUZlZSwgYVIgYXMgQ29udHJhY3RJbnRlcmNlcHRvciwgYWwgYXMgRHJvcENsYWltQ29uZGl0aW9ucywgYUQgYXMgRXJjNzIxV2l0aFF1YW50aXR5U2lnbmF0dXJlTWludGFibGUsIGFrIGFzIERlbGF5ZWRSZXZlYWwsIGROIGFzIEZFQVRVUkVfTkZUX1JFVkVBTEFCTEUsIGFVIGFzIENvbnRyYWN0T3duZXIsIGJFIGFzIGdldFJvbGVIYXNoLCBhViBhcyBUcmFuc2FjdGlvbiB9IGZyb20gJy4vY29udHJhY3QtbWV0YWRhdGEtODhmMDZlZjkuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgUyBhcyBTdGFuZGFyZEVyYzcyMSB9IGZyb20gJy4vZXJjLTcyMS1zdGFuZGFyZC1iOTBmYWY0ZC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBhIGFzIFBhcGVyQ2hlY2tvdXQgfSBmcm9tICcuL3RoaXJkd2ViLWNoZWNrb3V0LTcxMDBlZGY5LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IEJpZ051bWJlciwgY29uc3RhbnRzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCAnYm4uanMnO1xuaW1wb3J0ICd6b2QnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NoYWlucyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMyMF9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwUGVybWl0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTXVsdGljYWxsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDNzIxX1YzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMVN1cHBseS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lMYXp5TWludC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjFfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9MYXp5TWludFdpdGhUaWVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMxMTU1X1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0VSQzI3NzFDb250ZXh0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFwcFVSSS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDb250cmFjdE1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURpcmVjdExpc3RpbmdzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVuZ2xpc2hBdWN0aW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lPZmZlcnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGFja1ZSRkRpcmVjdC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9uc0VudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGxhdGZvcm1GZWUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUHJpbWFyeVNhbGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUm95YWx0eS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL093bmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQWNjb3VudEZhY3RvcnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQWNjb3VudC5qc29uJztcbmltcG9ydCAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvQ29udHJhY3RQdWJsaXNoZXIuanNvbic7XG5pbXBvcnQgJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRm9yd2FyZGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L3N0b3JhZ2UnO1xuaW1wb3J0ICdjcm9zcy1mZXRjaCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JVGhpcmR3ZWJDb250cmFjdC5qc29uJztcbmltcG9ydCAnZXRoZXJzL2xpYi91dGlscy5qcyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjBNZXRhZGF0YS5qc29uJztcbmltcG9ydCAndXVpZCc7XG5pbXBvcnQgJ21lcmtsZXRyZWVqcyc7XG5pbXBvcnQgJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTY1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsRGVwcmVjYXRlZC5qc29uJztcbmltcG9ydCAnZXRoZXJzL2xpYi91dGlscyc7XG5pbXBvcnQgJ2JzNTgnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlMb2dpYy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5Um91dGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2dlbmVyYXRlZC1hYmlzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXRmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXUmVnaXN0cnkuanNvbic7XG5cbi8qKlxuICogU2V0dXAgYSBjb2xsZWN0aW9uIG9mIE5GVHMgd2hlcmUgd2hlbiBpdCBjb21lcyB0byBtaW50aW5nLCB5b3UgY2FuIGF1dGhvcml6ZVxuICogc29tZSBleHRlcm5hbCBwYXJ0eSB0byBtaW50IHRva2VucyBvbiB5b3VyIGNvbnRyYWN0LCBhbmQgc3BlY2lmeSB3aGF0IGV4YWN0bHlcbiAqIHdpbGwgYmUgbWludGVkIGJ5IHRoYXQgZXh0ZXJuYWwgcGFydHkuLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgVGhpcmR3ZWJTREsgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9zZGtcIjtcbiAqXG4gKiBjb25zdCBzZGsgPSBuZXcgVGhpcmR3ZWJTREsoXCJ7e2NoYWluTmFtZX19XCIpO1xuICogY29uc3QgY29udHJhY3QgPSBhd2FpdCBzZGsuZ2V0Q29udHJhY3QoXCJ7e2NvbnRyYWN0X2FkZHJlc3N9fVwiLCBcInNpZ25hdHVyZS1kcm9wXCIpO1xuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBTaWduYXR1cmVEcm9wIGV4dGVuZHMgU3RhbmRhcmRFcmM3MjEge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25maWd1cmUgcm95YWx0aWVzXG4gICAqIEByZW1hcmtzIFNldCB5b3VyIG93biByb3lhbHRpZXMgZm9yIHRoZSBlbnRpcmUgY29udHJhY3Qgb3IgcGVyIHRva2VuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gcm95YWx0aWVzIG9uIHRoZSB3aG9sZSBjb250cmFjdFxuICAgKiBjb250cmFjdC5yb3lhbHRpZXMuc2V0RGVmYXVsdFJveWFsdHlJbmZvKHtcbiAgICogICBzZWxsZXJfZmVlX2Jhc2lzX3BvaW50czogMTAwLCAvLyAxJVxuICAgKiAgIGZlZV9yZWNpcGllbnQ6IFwiMHguLi5cIlxuICAgKiB9KTtcbiAgICogLy8gb3ZlcnJpZGUgcm95YWx0eSBmb3IgYSBwYXJ0aWN1bGFyIHRva2VuXG4gICAqIGNvbnRyYWN0LnJveWFsdGllcy5zZXRUb2tlblJveWFsdHlJbmZvKHRva2VuSWQsIHtcbiAgICogICBzZWxsZXJfZmVlX2Jhc2lzX3BvaW50czogNTAwLCAvLyA1JVxuICAgKiAgIGZlZV9yZWNpcGllbnQ6IFwiMHguLi5cIlxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb25maWd1cmUgY2xhaW0gY29uZGl0aW9uc1xuICAgKiBAcmVtYXJrcyBEZWZpbmUgd2hvIGNhbiBjbGFpbSBORlRzIGluIHRoZSBjb2xsZWN0aW9uLCB3aGVuIGFuZCBob3cgbWFueS5cbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBwcmVzYWxlU3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICogY29uc3QgY2xhaW1Db25kaXRpb24gPSB7XG4gICAqICAgICBzdGFydFRpbWU6IHByZXNhbGVTdGFydFRpbWUsIC8vIHN0YXJ0IHRoZSBwcmVzYWxlIG5vd1xuICAgKiAgICAgbWF4Q2xhaW1hYmxlU3VwcGx5OiAyLCAvLyBsaW1pdCBob3cgbWFueSBtaW50cyBmb3IgdGhpcyBwcmVzYWxlXG4gICAqICAgICBwcmljZTogMC4wMSwgLy8gcHJlc2FsZSBwcmljZVxuICAgKiAgICAgc25hcHNob3Q6IFsnMHguLi4nLCAnMHguLi4nXSwgLy8gbGltaXQgbWludGluZyB0byBvbmx5IGNlcnRhaW4gYWRkcmVzc2VzXG4gICAqIH07XG4gICAqIGF3YWl0IGNvbnRyYWN0LmNsYWltQ29uZGl0aW9ucy5zZXQoW2NsYWltQ29uZGl0aW9uXSk7XG4gICAqIGBgYFxuICAgKi9cblxuICAvKipcbiAgICogRGVsYXllZCByZXZlYWxcbiAgICogQHJlbWFya3MgQ3JlYXRlIGEgYmF0Y2ggb2YgZW5jcnlwdGVkIE5GVHMgdGhhdCBjYW4gYmUgcmV2ZWFsZWQgYXQgYSBsYXRlciB0aW1lLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIHRoZSByZWFsIE5GVHMsIHRoZXNlIHdpbGwgYmUgZW5jcnlwdGVkIHVudGlsIHlvdSByZXZlYWwgdGhlbVxuICAgKiBjb25zdCByZWFsTkZUcyA9IFt7XG4gICAqICAgbmFtZTogXCJDb21tb24gTkZUICMxXCIsXG4gICAqICAgZGVzY3JpcHRpb246IFwiQ29tbW9uIE5GVCwgb25lIG9mIG1hbnkuXCIsXG4gICAqICAgaW1hZ2U6IGZzLnJlYWRGaWxlU3luYyhcInBhdGgvdG8vaW1hZ2UucG5nXCIpLFxuICAgKiB9LCB7XG4gICAqICAgbmFtZTogXCJTdXBlciBSYXJlIE5GVCAjMlwiLFxuICAgKiAgIGRlc2NyaXB0aW9uOiBcIllvdSBnb3QgYSBTdXBlciBSYXJlIE5GVCFcIixcbiAgICogICBpbWFnZTogZnMucmVhZEZpbGVTeW5jKFwicGF0aC90by9pbWFnZS5wbmdcIiksXG4gICAqIH1dO1xuICAgKiAvLyBBIHBsYWNlaG9sZGVyIE5GVCB0aGF0IHBlb3BsZSB3aWxsIGdldCBpbW1lZGlhdGVseSBpbiB0aGVpciB3YWxsZXQsIGFuZCB3aWxsIGJlIGNvbnZlcnRlZCB0byB0aGUgcmVhbCBORlQgYXQgcmV2ZWFsIHRpbWVcbiAgICogY29uc3QgcGxhY2Vob2xkZXJORlQgPSB7XG4gICAqICAgbmFtZTogXCJIaWRkZW4gTkZUXCIsXG4gICAqICAgZGVzY3JpcHRpb246IFwiV2lsbCBiZSByZXZlYWxlZCBuZXh0IHdlZWshXCJcbiAgICogfTtcbiAgICogLy8gQ3JlYXRlIGFuZCBlbmNyeXB0IHRoZSBORlRzXG4gICAqIGF3YWl0IGNvbnRyYWN0LnJldmVhbGVyLmNyZWF0ZURlbGF5ZWRSZXZlYWxCYXRjaChcbiAgICogICBwbGFjZWhvbGRlck5GVCxcbiAgICogICByZWFsTkZUcyxcbiAgICogICBcIm15IHNlY3JldCBwYXNzd29yZFwiLFxuICAgKiApO1xuICAgKiAvLyBXaGVuZXZlciB5b3UncmUgcmVhZHksIHJldmVhbCB5b3VyIE5GVHMgYXQgYW55IHRpbWVcbiAgICogY29uc3QgYmF0Y2hJZCA9IDA7IC8vIHRoZSBiYXRjaCB0byByZXZlYWxcbiAgICogYXdhaXQgY29udHJhY3QucmV2ZWFsZXIucmV2ZWFsKGJhdGNoSWQsIFwibXkgc2VjcmV0IHBhc3N3b3JkXCIpO1xuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIFNpZ25hdHVyZSBNaW50aW5nXG4gICAqIEByZW1hcmtzIEdlbmVyYXRlIGR5bmFtaWMgTkZUcyB3aXRoIHlvdXIgb3duIHNpZ25hdHVyZSwgYW5kIGxldCBvdGhlcnMgbWludCB0aGVtIHVzaW5nIHRoYXQgc2lnbmF0dXJlLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIHNlZSBob3cgdG8gY3JhZnQgYSBwYXlsb2FkIHRvIHNpZ24gaW4gdGhlIGBjb250cmFjdC5zaWduYXR1cmUuZ2VuZXJhdGUoKWAgZG9jdW1lbnRhdGlvblxuICAgKiBjb25zdCBzaWduZWRQYXlsb2FkID0gY29udHJhY3Quc2lnbmF0dXJlLmdlbmVyYXRlKHBheWxvYWQpO1xuICAgKlxuICAgKiAvLyBub3cgYW55b25lIGNhbiBtaW50IHRoZSBORlRcbiAgICogY29uc3QgdHggPSBjb250cmFjdC5zaWduYXR1cmUubWludChzaWduZWRQYXlsb2FkKTtcbiAgICogY29uc3QgcmVjZWlwdCA9IHR4LnJlY2VpcHQ7IC8vIHRoZSBtaW50IHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICogY29uc3QgbWludGVkSWQgPSB0eC5pZDsgLy8gdGhlIGlkIG9mIHRoZSBORlQgbWludGVkXG4gICAqIGBgYFxuICAgKi9cblxuICAvKipcbiAgICogQ2hlY2tvdXRcbiAgICogQHJlbWFya3MgQ3JlYXRlIGEgRklBVCBjdXJyZW5jeSBjaGVja291dCBmb3IgeW91ciBORlQgZHJvcC5cbiAgICovXG5cbiAgY29uc3RydWN0b3IobmV0d29yaywgYWRkcmVzcywgc3RvcmFnZSkge1xuICAgIGxldCBfb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgbGV0IGFiaSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ID8gYXJndW1lbnRzWzRdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjaGFpbklkID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNvbnRyYWN0V3JhcHBlciA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogbmV3IENvbnRyYWN0V3JhcHBlcihuZXR3b3JrLCBhZGRyZXNzLCBhYmksIF9vcHRpb25zKTtcbiAgICBzdXBlcihjb250cmFjdFdyYXBwZXIsIHN0b3JhZ2UsIGNoYWluSWQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFiaVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm93bmVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW5jb2RlclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVzdGltYXRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1ldGFkYXRhXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXBwXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2FsZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwbGF0Zm9ybUZlZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJldmVudHNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb2xlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImludGVyY2VwdG9yXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm95YWx0aWVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY2xhaW1Db25kaXRpb25zXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicmV2ZWFsZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzaWduYXR1cmVcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjaGVja291dFwiLCB2b2lkIDApO1xuICAgIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBXUklURSBGVU5DVElPTlNcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBiYXRjaCBvZiB1bmlxdWUgTkZUcyB0byBiZSBjbGFpbWVkIGluIHRoZSBmdXR1cmVcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIENyZWF0ZSBiYXRjaCBhbGxvd3MgeW91IHRvIGNyZWF0ZSBhIGJhdGNoIG9mIG1hbnkgdW5pcXVlIE5GVHMgaW4gb25lIHRyYW5zYWN0aW9uLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogLy8gQ3VzdG9tIG1ldGFkYXRhIG9mIHRoZSBORlRzIHRvIGNyZWF0ZVxuICAgICAqIGNvbnN0IG1ldGFkYXRhcyA9IFt7XG4gICAgICogICBuYW1lOiBcIkNvb2wgTkZUXCIsXG4gICAgICogICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29vbCBORlRcIixcbiAgICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL2ltYWdlLnBuZ1wiKSwgLy8gVGhpcyBjYW4gYmUgYW4gaW1hZ2UgdXJsIG9yIGZpbGVcbiAgICAgKiB9LCB7XG4gICAgICogICBuYW1lOiBcIkNvb2wgTkZUXCIsXG4gICAgICogICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29vbCBORlRcIixcbiAgICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL2ltYWdlLnBuZ1wiKSxcbiAgICAgKiB9XTtcbiAgICAgKlxuICAgICAqIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVCYXRjaChtZXRhZGF0YXMpOyAvLyB1cGxvYWRzIGFuZCBjcmVhdGVzIHRoZSBORlRzIG9uIGNoYWluXG4gICAgICogY29uc3QgZmlyc3RUb2tlbklkID0gcmVzdWx0c1swXS5pZDsgLy8gdG9rZW4gaWQgb2YgdGhlIGZpcnN0IGNyZWF0ZWQgTkZUXG4gICAgICogY29uc3QgZmlyc3RORlQgPSBhd2FpdCByZXN1bHRzWzBdLmRhdGEoKTsgLy8gKG9wdGlvbmFsKSBmZXRjaCBkZXRhaWxzIG9mIHRoZSBmaXJzdCBjcmVhdGVkIE5GVFxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIG1ldGFkYXRhcyAtIFRoZSBtZXRhZGF0YSB0byBpbmNsdWRlIGluIHRoZSBiYXRjaC5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIG9wdGlvbmFsIHVwbG9hZCBwcm9ncmVzcyBjYWxsYmFja1xuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNyZWF0ZUJhdGNoXCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyAobWV0YWRhdGFzLCBvcHRpb25zKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmM3MjEubGF6eU1pbnQucHJlcGFyZShtZXRhZGF0YXMsIG9wdGlvbnMpO1xuICAgIH0pKTtcbiAgICAvKipcbiAgICAgKiBDbGFpbSB1bmlxdWUgTkZUcyB0byBhIHNwZWNpZmljIFdhbGxldFxuICAgICAqXG4gICAgICogQHJlbWFya3MgTGV0IHRoZSBzcGVjaWZpZWQgd2FsbGV0IGNsYWltIE5GVHMuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiBjb25zdCBhZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjsgLy8gYWRkcmVzcyBvZiB0aGUgd2FsbGV0IHlvdSB3YW50IHRvIGNsYWltIHRoZSBORlRzXG4gICAgICogY29uc3QgcXVhbnRpdHkgPSAxOyAvLyBob3cgbWFueSB1bmlxdWUgTkZUcyB5b3Ugd2FudCB0byBjbGFpbVxuICAgICAqXG4gICAgICogY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5jbGFpbVRvKGFkZHJlc3MsIHF1YW50aXR5KTtcbiAgICAgKiBjb25zdCByZWNlaXB0ID0gdHgucmVjZWlwdDsgLy8gdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICAgKiBjb25zdCBjbGFpbWVkVG9rZW5JZCA9IHR4LmlkOyAvLyB0aGUgaWQgb2YgdGhlIE5GVCBjbGFpbWVkXG4gICAgICogY29uc3QgY2xhaW1lZE5GVCA9IGF3YWl0IHR4LmRhdGEoKTsgLy8gKG9wdGlvbmFsKSBnZXQgdGhlIGNsYWltZWQgTkZUIG1ldGFkYXRhXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVzdGluYXRpb25BZGRyZXNzIC0gQWRkcmVzcyB5b3Ugd2FudCB0byBzZW5kIHRoZSB0b2tlbiB0b1xuICAgICAqIEBwYXJhbSBxdWFudGl0eSAtIFF1YW50aXR5IG9mIHRoZSB0b2tlbnMgeW91IHdhbnQgdG8gY2xhaW1cbiAgICAgKiBAcGFyYW0gY2hlY2tFUkMyMEFsbG93YW5jZSAtIE9wdGlvbmFsLCBjaGVjayBpZiB0aGUgd2FsbGV0IGhhcyBlbm91Z2ggRVJDMjAgYWxsb3dhbmNlIHRvIGNsYWltIHRoZSB0b2tlbnMsIGFuZCBpZiBub3QsIGFwcHJvdmUgdGhlIHRyYW5zZmVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyAtIGFuIGFycmF5IG9mIHJlc3VsdHMgY29udGFpbmluZyB0aGUgaWQgb2YgdGhlIHRva2VuIGNsYWltZWQsIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0IGFuZCBhIHByb21pc2UgdG8gb3B0aW9uYWxseSBmZXRjaCB0aGUgbmZ0IG1ldGFkYXRhXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY2xhaW1Ub1wiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgKGRlc3RpbmF0aW9uQWRkcmVzcywgcXVhbnRpdHksIG9wdGlvbnMpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVyYzcyMS5jbGFpbVRvLnByZXBhcmUoZGVzdGluYXRpb25BZGRyZXNzLCBxdWFudGl0eSwgb3B0aW9ucyk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIENsYWltIE5GVHMgdG8gdGhlIGNvbm5lY3RlZCB3YWxsZXQuXG4gICAgICpcbiAgICAgKiBAcmVtYXJrcyBTZWUge0BsaW5rIE5GVERyb3AuY2xhaW1Ub31cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIC0gYW4gYXJyYXkgb2YgcmVzdWx0cyBjb250YWluaW5nIHRoZSBpZCBvZiB0aGUgdG9rZW4gY2xhaW1lZCwgdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHQgYW5kIGEgcHJvbWlzZSB0byBvcHRpb25hbGx5IGZldGNoIHRoZSBuZnQgbWV0YWRhdGFcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjbGFpbVwiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgKHF1YW50aXR5LCBvcHRpb25zKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmM3MjEuY2xhaW0ucHJlcGFyZShxdWFudGl0eSwgb3B0aW9ucyk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIEJ1cm4gYSBzaW5nbGUgTkZUXG4gICAgICogQHBhcmFtIHRva2VuSWQgLSB0aGUgdG9rZW4gSWQgdG8gYnVyblxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmJ1cm5Ub2tlbih0b2tlbklkKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJidXJuXCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyB0b2tlbklkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVyYzcyMS5idXJuLnByZXBhcmUodG9rZW5JZCk7XG4gICAgfSkpO1xuICAgIHRoaXMuYWJpID0gQWJpU2NoZW1hLnBhcnNlKGFiaSB8fCBbXSk7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG5ldyBDb250cmFjdE1ldGFkYXRhKHRoaXMuY29udHJhY3RXcmFwcGVyLCBEcm9wRXJjNzIxQ29udHJhY3RTY2hlbWEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5hcHAgPSBuZXcgQ29udHJhY3RBcHBVUkkodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMubWV0YWRhdGEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5yb2xlcyA9IG5ldyBDb250cmFjdFJvbGVzKHRoaXMuY29udHJhY3RXcmFwcGVyLCBTaWduYXR1cmVEcm9wLmNvbnRyYWN0Um9sZXMpO1xuICAgIHRoaXMucm95YWx0aWVzID0gbmV3IENvbnRyYWN0Um95YWx0eSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5tZXRhZGF0YSk7XG4gICAgdGhpcy5zYWxlcyA9IG5ldyBDb250cmFjdFByaW1hcnlTYWxlKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmVuY29kZXIgPSBuZXcgQ29udHJhY3RFbmNvZGVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmVzdGltYXRvciA9IG5ldyBHYXNDb3N0RXN0aW1hdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBDb250cmFjdEV2ZW50cyh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5wbGF0Zm9ybUZlZXMgPSBuZXcgQ29udHJhY3RQbGF0Zm9ybUZlZSh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5pbnRlcmNlcHRvciA9IG5ldyBDb250cmFjdEludGVyY2VwdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmNsYWltQ29uZGl0aW9ucyA9IG5ldyBEcm9wQ2xhaW1Db25kaXRpb25zKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLm1ldGFkYXRhLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gbmV3IEVyYzcyMVdpdGhRdWFudGl0eVNpZ25hdHVyZU1pbnRhYmxlKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMucmV2ZWFsZXIgPSBuZXcgRGVsYXllZFJldmVhbCh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5zdG9yYWdlLCBGRUFUVVJFX05GVF9SRVZFQUxBQkxFLm5hbWUsICgpID0+IHRoaXMuZXJjNzIxLm5leHRUb2tlbklkVG9NaW50KCkpO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gbmV3IEVyYzcyMVdpdGhRdWFudGl0eVNpZ25hdHVyZU1pbnRhYmxlKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMub3duZXIgPSBuZXcgQ29udHJhY3RPd25lcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5jaGVja291dCA9IG5ldyBQYXBlckNoZWNrb3V0KHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uTmV0d29ya1VwZGF0ZWQobmV0d29yaykge1xuICAgIHRoaXMuY29udHJhY3RXcmFwcGVyLnVwZGF0ZVNpZ25lck9yUHJvdmlkZXIobmV0d29yayk7XG4gIH1cbiAgZ2V0QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3M7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFJFQUQgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRvdGFsIGNvdW50IE5GVHMgaW4gdGhpcyBkcm9wIGNvbnRyYWN0LCBib3RoIGNsYWltZWQgYW5kIHVuY2xhaW1lZFxuICAgKi9cbiAgYXN5bmMgdG90YWxTdXBwbHkoKSB7XG4gICAgY29uc3QgY2xhaW1lZCA9IGF3YWl0IHRoaXMudG90YWxDbGFpbWVkU3VwcGx5KCk7XG4gICAgY29uc3QgdW5jbGFpbWVkID0gYXdhaXQgdGhpcy50b3RhbFVuY2xhaW1lZFN1cHBseSgpO1xuICAgIHJldHVybiBjbGFpbWVkLmFkZCh1bmNsYWltZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBBbGwgQ2xhaW1lZCBORlRzXG4gICAqXG4gICAqIEByZW1hcmtzIEZldGNoIGFsbCB0aGUgTkZUcyAoYW5kIHRoZWlyIG93bmVycykgdGhhdCBoYXZlIGJlZW4gY2xhaW1lZCBpbiB0aGlzIERyb3AuXG4gICAqXG4gICAqICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBjbGFpbWVkTkZUcyA9IGF3YWl0IGNvbnRyYWN0LmdldEFsbENsYWltZWQoKTtcbiAgICogY29uc3QgZmlyc3RPd25lciA9IGNsYWltZWRORlRzWzBdLm93bmVyO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zIC0gb3B0aW9uYWwgZmlsdGVyaW5nIHRvIG9ubHkgZmV0Y2ggYSBzdWJzZXQgb2YgcmVzdWx0cy5cbiAgICogQHJldHVybnMgVGhlIE5GVCBtZXRhZGF0YSBhbmQgdGhlaXIgb3duZXJzZm9yIGFsbCBORlRzIHF1ZXJpZWQuXG4gICAqL1xuICBhc3luYyBnZXRBbGxDbGFpbWVkKHF1ZXJ5UGFyYW1zKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBCaWdOdW1iZXIuZnJvbShxdWVyeVBhcmFtcz8uc3RhcnQgfHwgMCkudG9OdW1iZXIoKTtcbiAgICBjb25zdCBjb3VudCA9IEJpZ051bWJlci5mcm9tKHF1ZXJ5UGFyYW1zPy5jb3VudCB8fCBERUZBVUxUX1FVRVJZX0FMTF9DT1VOVCkudG9OdW1iZXIoKTtcbiAgICBjb25zdCBtYXhJZCA9IE1hdGgubWluKChhd2FpdCB0aGlzLnRvdGFsQ2xhaW1lZFN1cHBseSgpKS50b051bWJlcigpLCBzdGFydCArIGNvdW50KTtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShBcnJheShtYXhJZCkua2V5cygpKS5tYXAoaSA9PiB0aGlzLmdldChpLnRvU3RyaW5nKCkpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IEFsbCBVbmNsYWltZWQgTkZUc1xuICAgKlxuICAgKiBAcmVtYXJrcyBGZXRjaCBhbGwgdGhlIE5GVHMgdGhhdCBoYXZlIGJlZW4gbm90IGJlZW4gY2xhaW1lZCB5ZXQgaW4gdGhpcyBEcm9wLlxuICAgKlxuICAgKiAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgdW5jbGFpbWVkTkZUcyA9IGF3YWl0IGNvbnRyYWN0LmdldEFsbFVuY2xhaW1lZCgpO1xuICAgKiBjb25zdCBmaXJzdFVuY2xhaW1lZE5GVCA9IHVuY2xhaW1lZE5GVHNbMF0ubmFtZTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVBhcmFtcyAtIG9wdGlvbmFsIGZpbHRlcmluZyB0byBvbmx5IGZldGNoIGEgc3Vic2V0IG9mIHJlc3VsdHMuXG4gICAqIEByZXR1cm5zIFRoZSBORlQgbWV0YWRhdGEgZm9yIGFsbCBORlRzIHF1ZXJpZWQuXG4gICAqL1xuICBhc3luYyBnZXRBbGxVbmNsYWltZWQocXVlcnlQYXJhbXMpIHtcbiAgICBjb25zdCBzdGFydCA9IEJpZ051bWJlci5mcm9tKHF1ZXJ5UGFyYW1zPy5zdGFydCB8fCAwKS50b051bWJlcigpO1xuICAgIGNvbnN0IGNvdW50ID0gQmlnTnVtYmVyLmZyb20ocXVlcnlQYXJhbXM/LmNvdW50IHx8IERFRkFVTFRfUVVFUllfQUxMX0NPVU5UKS50b051bWJlcigpO1xuICAgIGNvbnN0IGZpcnN0VG9rZW5JZCA9IEJpZ051bWJlci5mcm9tKE1hdGgubWF4KChhd2FpdCB0aGlzLnRvdGFsQ2xhaW1lZFN1cHBseSgpKS50b051bWJlcigpLCBzdGFydCkpO1xuICAgIGNvbnN0IG1heElkID0gQmlnTnVtYmVyLmZyb20oTWF0aC5taW4oKGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5uZXh0VG9rZW5JZFRvTWludCgpKS50b051bWJlcigpLCBmaXJzdFRva2VuSWQudG9OdW1iZXIoKSArIGNvdW50KSk7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKEFycmF5LmZyb20oQXJyYXkobWF4SWQuc3ViKGZpcnN0VG9rZW5JZCkudG9OdW1iZXIoKSkua2V5cygpKS5tYXAoaSA9PiB0aGlzLmVyYzcyMS5nZXRUb2tlbk1ldGFkYXRhKGZpcnN0VG9rZW5JZC5hZGQoaSkudG9TdHJpbmcoKSkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNsYWltZWQgc3VwcGx5XG4gICAqXG4gICAqIEByZW1hcmtzIEdldCB0aGUgbnVtYmVyIG9mIGNsYWltZWQgTkZUcyBpbiB0aGlzIERyb3AuXG4gICAqXG4gICAqICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBjbGFpbWVkTkZUQ291bnQgPSBhd2FpdCBjb250cmFjdC50b3RhbENsYWltZWRTdXBwbHkoKTtcbiAgICogY29uc29sZS5sb2coYE5GVHMgY2xhaW1lZCBzbyBmYXI6ICR7Y2xhaW1lZE5GVENvdW50fWApO1xuICAgKiBgYGBcbiAgICogQHJldHVybnMgdGhlIGNsYWltZWQgc3VwcGx5XG4gICAqL1xuICBhc3luYyB0b3RhbENsYWltZWRTdXBwbHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLnRvdGFsQ2xhaW1lZFN1cHBseSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdW5jbGFpbWVkIHN1cHBseVxuICAgKlxuICAgKiBAcmVtYXJrcyBHZXQgdGhlIG51bWJlciBvZiB1bmNsYWltZWQgTkZUcyBpbiB0aGlzIERyb3AuXG4gICAqXG4gICAqICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCB1bmNsYWltZWRORlRDb3VudCA9IGF3YWl0IGNvbnRyYWN0LnRvdGFsVW5jbGFpbWVkU3VwcGx5KCk7XG4gICAqIGNvbnNvbGUubG9nKGBORlRzIGxlZnQgdG8gY2xhaW06ICR7dW5jbGFpbWVkTkZUQ291bnR9YCk7XG4gICAqIGBgYFxuICAgKiBAcmV0dXJucyB0aGUgdW5jbGFpbWVkIHN1cHBseVxuICAgKi9cbiAgYXN5bmMgdG90YWxVbmNsYWltZWRTdXBwbHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLnRvdGFsVW5jbGFpbWVkU3VwcGx5KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdXNlcnMgY2FuIHRyYW5zZmVyIE5GVHMgZnJvbSB0aGlzIGNvbnRyYWN0XG4gICAqL1xuICBhc3luYyBpc1RyYW5zZmVyUmVzdHJpY3RlZCgpIHtcbiAgICBjb25zdCBhbnlvbmVDYW5UcmFuc2ZlciA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5oYXNSb2xlKGdldFJvbGVIYXNoKFwidHJhbnNmZXJcIiksIGNvbnN0YW50cy5BZGRyZXNzWmVybyk7XG4gICAgcmV0dXJuICFhbnlvbmVDYW5UcmFuc2ZlcjtcbiAgfVxuICAvKipcbiAgICogQ29uc3RydWN0IGEgY2xhaW0gdHJhbnNhY3Rpb24gd2l0aG91dCBleGVjdXRpbmcgaXQuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGZvciBlc3RpbWF0aW5nIHRoZSBnYXMgY29zdCBvZiBhIGNsYWltIHRyYW5zYWN0aW9uLCBvdmVycmlkaW5nIHRyYW5zYWN0aW9uIG9wdGlvbnMgYW5kIGhhdmluZyBmaW5lIGdyYWluZWQgY29udHJvbCBvdmVyIHRoZSB0cmFuc2FjdGlvbiBleGVjdXRpb24uXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkFkZHJlc3NcbiAgICogQHBhcmFtIHF1YW50aXR5XG4gICAqIEBwYXJhbSBjaGVja0VSQzIwQWxsb3dhbmNlXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgY29udHJhY3QuZXJjNzIxLmNsYWltLnByZXBhcmUoLi4uYXJncylgIGluc3RlYWRcbiAgICovXG4gIGFzeW5jIGdldENsYWltVHJhbnNhY3Rpb24oZGVzdGluYXRpb25BZGRyZXNzLCBxdWFudGl0eSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmVyYzcyMS5nZXRDbGFpbVRyYW5zYWN0aW9uKGRlc3RpbmF0aW9uQWRkcmVzcywgcXVhbnRpdHksIG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIHByZXBhcmUobWV0aG9kLCBhcmdzLCBvdmVycmlkZXMpIHtcbiAgICByZXR1cm4gVHJhbnNhY3Rpb24uZnJvbUNvbnRyYWN0V3JhcHBlcih7XG4gICAgICBjb250cmFjdFdyYXBwZXI6IHRoaXMuY29udHJhY3RXcmFwcGVyLFxuICAgICAgbWV0aG9kLFxuICAgICAgYXJncyxcbiAgICAgIG92ZXJyaWRlc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgY2FsbChmdW5jdGlvbk5hbWUsIGFyZ3MsIG92ZXJyaWRlcykge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5jYWxsKGZ1bmN0aW9uTmFtZSwgYXJncywgb3ZlcnJpZGVzKTtcbiAgfVxufVxuX2RlZmluZVByb3BlcnR5KFNpZ25hdHVyZURyb3AsIFwiY29udHJhY3RSb2xlc1wiLCBbXCJhZG1pblwiLCBcIm1pbnRlclwiLCBcInRyYW5zZmVyXCJdKTtcblxuZXhwb3J0IHsgU2lnbmF0dXJlRHJvcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9