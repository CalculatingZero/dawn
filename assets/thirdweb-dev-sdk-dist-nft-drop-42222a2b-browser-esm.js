"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_nft-drop-42222a2b_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/nft-drop-42222a2b.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/nft-drop-42222a2b.browser.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NFTDrop: () => (/* binding */ NFTDrop)
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
 * Setup a collection of one-of-one NFTs that are minted as users claim them.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "nft-drop");
 * ```
 *
 * @public
 */
class NFTDrop extends _erc_721_standard_b90faf4d_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.S {
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
   * await contract.claimConditions.set(claimConditions);
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
   * Checkout
   * @remarks Create a FIAT currency checkout for your NFT drop.
   */

  constructor(network, address, storage) {
    var _this;
    let _options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dz(network, address, abi, _options);
    super(contractWrapper, storage, chainId);
    _this = this;
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "abi", void 0);
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
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "checkout", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "owner", void 0);
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
     * const receipt = tx[0].receipt; // the transaction receipt
     * const claimedTokenId = tx[0].id; // the id of the NFT claimed
     * const claimedNFT = await tx[0].data(); // (optional) get the claimed NFT metadata
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param quantity - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     *
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "claimTo", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async function (destinationAddress, quantity) {
      let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return _this.erc721.claimTo.prepare(destinationAddress, quantity, {
        checkERC20Allowance
      });
    }));
    /**
     * Claim NFTs to the connected wallet.
     *
     * @remarks See {@link NFTDrop.claimTo}
     *
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "claim", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async function (quantity) {
      let checkERC20Allowance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return _this.claimTo.prepare(await _this.contractWrapper.getSignerAddress(), quantity, checkERC20Allowance);
    }));
    /**
     * Burn a single NFT
     *
     * @param tokenId - the token Id to burn
     *
     * @example
     * ```javascript
     * const result = await contract.burnToken(tokenId);
     * ```
     *
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "burn", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async tokenId => {
      return this.erc721.burn.prepare(tokenId);
    }));
    /**
     * Transfer an NFT
     *
     * @remarks Transfer an NFT from the connected wallet to another wallet.
     *
     * @example
     * ```javascript
     * const walletAddress = "{{wallet_address}}";
     * const tokenId = 0;
     * await contract.transfer(walletAddress, tokenId);
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "transfer", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (to, tokenId) => {
      return this.erc721.transfer.prepare(to, tokenId);
    }));
    /**
     * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
     * @param operator - the operator's address
     * @param approved - whether to approve or remove
     *
     * @internal
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "setApprovalForAll", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (operator, approved) => {
      return this.erc721.setApprovalForAll.prepare(operator, approved);
    }));
    /**
     * Approve an operator for the NFT owner. Operators can call transferFrom or safeTransferFrom for the specified token.
     * @param operator - the operator's address
     * @param tokenId - the tokenId to give approval for
     *
     * @internal
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "setApprovalForToken", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (operator, tokenId) => {
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "approve",
        args: [operator, tokenId]
      });
    }));
    this.abi = _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.e.parse(abi || []);
    this.metadata = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ag(this.contractWrapper, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dM, this.storage);
    this.app = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.a$(this.contractWrapper, this.metadata, this.storage);
    this.roles = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ah(this.contractWrapper, NFTDrop.contractRoles);
    this.royalties = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ai(this.contractWrapper, this.metadata);
    this.sales = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aj(this.contractWrapper);
    this.claimConditions = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.al(this.contractWrapper, this.metadata, this.storage);
    this.encoder = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.af(this.contractWrapper);
    this.estimator = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aP(this.contractWrapper);
    this.events = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aQ(this.contractWrapper);
    this.platformFees = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aS(this.contractWrapper);
    this.revealer = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ak(this.contractWrapper, this.storage, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dN.name, () => this.erc721.nextTokenIdToMint());
    this.interceptor = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aR(this.contractWrapper);
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
    const maxId = Math.min((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(), start + count);
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
    const firstTokenId = ethers__WEBPACK_IMPORTED_MODULE_11__.BigNumber.from(Math.max((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(), start));
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
   * @returns the unclaimed supply
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
  async getClaimTransaction(destinationAddress, quantity) {
    let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return this.erc721.getClaimTransaction(destinationAddress, quantity, {
      checkERC20Allowance
    });
  }
  /******************************
   * STANDARD ERC721 FUNCTIONS
   ******************************/

  /**
   * Get a single NFT
   *
   * @example
   * ```javascript
   * const tokenId = 0;
   * const nft = await contract.get(tokenId);
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   */
  async get(tokenId) {
    return this.erc721.get(tokenId);
  }

  /**
   * Get the current owner of a given NFT within this Contract
   *
   * @param tokenId - the tokenId of the NFT
   * @returns the address of the owner
   */
  async ownerOf(tokenId) {
    return this.erc721.ownerOf(tokenId);
  }

  /**
   * Get NFT Balance
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.balanceOf(walletAddress);
   * console.log(balance);
   * ```
   */
  async balanceOf(address) {
    return this.erc721.balanceOf(address);
  }

  /**
   * Get NFT Balance for the currently connected wallet
   */
  async balance() {
    return this.erc721.balance();
  }

  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */
  async isApproved(address, operator) {
    return this.erc721.isApproved(address, operator);
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

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/
  /**
   * @internal
   */
  async call(functionName, args, overrides) {
    return this.contractWrapper.call(functionName, args, overrides);
  }
}
(0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(NFTDrop, "contractRoles", ["admin", "minter", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LW5mdC1kcm9wLTQyMjIyYTJiLWJyb3dzZXItZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkc7QUFDa2I7QUFDNWM7QUFDQTtBQUNuQztBQUMvQjtBQUNGO0FBQ2lCO0FBQ29DO0FBQ1Q7QUFDUTtBQUNHO0FBQ0c7QUFDYjtBQUNNO0FBQ0U7QUFDSjtBQUNTO0FBQ0o7QUFDQztBQUNGO0FBQ0E7QUFDUDtBQUNVO0FBQ0o7QUFDSjtBQUNNO0FBQ0s7QUFDRztBQUNQO0FBQ0E7QUFDQztBQUNSO0FBQ007QUFDSztBQUNHO0FBQ2Y7QUFDVTtBQUNGO0FBQ0s7QUFDUDtBQUNQO0FBQ1U7QUFDRjtBQUNDO0FBQ1Q7QUFDTztBQUNGO0FBQ1U7QUFDVjtBQUNBO0FBQ0o7QUFDRDtBQUNRO0FBQ1A7QUFDcEM7QUFDNkM7QUFDOUM7QUFDc0M7QUFDOUI7QUFDVjtBQUNnRDtBQUN4QztBQUNxQztBQUNwRDtBQUNRO0FBQ0c7QUFDa0M7QUFDUTtBQUNDO0FBQ1E7QUFDbEQ7QUFDWjtBQUMrRDtBQUNDO0FBQ3hDO0FBQ3VCO0FBQ0M7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDLDZDQUE2QyxrQkFBa0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0VBQWM7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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OEJBQThCLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywwRUFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUFlOztBQUVJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHRoaXJkd2ViLWRldi9zZGsvZGlzdC9uZnQtZHJvcC00MjIyMmEyYi5icm93c2VyLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSwgYyBhcyBERUZBVUxUX1FVRVJZX0FMTF9DT1VOVCB9IGZyb20gJy4vUXVlcnlQYXJhbXMtN2Q5NDczYjUuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgZHogYXMgQ29udHJhY3RXcmFwcGVyLCBkcyBhcyBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24sIGUgYXMgQWJpU2NoZW1hLCBhZyBhcyBDb250cmFjdE1ldGFkYXRhLCBkTSBhcyBEcm9wRXJjNzIxQ29udHJhY3RTY2hlbWEsIGEkIGFzIENvbnRyYWN0QXBwVVJJLCBhaCBhcyBDb250cmFjdFJvbGVzLCBhaSBhcyBDb250cmFjdFJveWFsdHksIGFqIGFzIENvbnRyYWN0UHJpbWFyeVNhbGUsIGFsIGFzIERyb3BDbGFpbUNvbmRpdGlvbnMsIGFmIGFzIENvbnRyYWN0RW5jb2RlciwgYVAgYXMgR2FzQ29zdEVzdGltYXRvciwgYVEgYXMgQ29udHJhY3RFdmVudHMsIGFTIGFzIENvbnRyYWN0UGxhdGZvcm1GZWUsIGFrIGFzIERlbGF5ZWRSZXZlYWwsIGROIGFzIEZFQVRVUkVfTkZUX1JFVkVBTEFCTEUsIGFSIGFzIENvbnRyYWN0SW50ZXJjZXB0b3IsIGFVIGFzIENvbnRyYWN0T3duZXIsIGJFIGFzIGdldFJvbGVIYXNoLCBhViBhcyBUcmFuc2FjdGlvbiB9IGZyb20gJy4vY29udHJhY3QtbWV0YWRhdGEtODhmMDZlZjkuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgUyBhcyBTdGFuZGFyZEVyYzcyMSB9IGZyb20gJy4vZXJjLTcyMS1zdGFuZGFyZC1iOTBmYWY0ZC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBhIGFzIFBhcGVyQ2hlY2tvdXQgfSBmcm9tICcuL3RoaXJkd2ViLWNoZWNrb3V0LTcxMDBlZGY5LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IEJpZ051bWJlciwgY29uc3RhbnRzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCAnYm4uanMnO1xuaW1wb3J0ICd6b2QnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NoYWlucyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMyMF9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwUGVybWl0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTXVsdGljYWxsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDNzIxX1YzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMVN1cHBseS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lMYXp5TWludC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjFfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9MYXp5TWludFdpdGhUaWVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMxMTU1X1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0VSQzI3NzFDb250ZXh0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFwcFVSSS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDb250cmFjdE1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURpcmVjdExpc3RpbmdzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVuZ2xpc2hBdWN0aW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lPZmZlcnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGFja1ZSRkRpcmVjdC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9uc0VudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGxhdGZvcm1GZWUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUHJpbWFyeVNhbGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUm95YWx0eS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL093bmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQWNjb3VudEZhY3RvcnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQWNjb3VudC5qc29uJztcbmltcG9ydCAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvQ29udHJhY3RQdWJsaXNoZXIuanNvbic7XG5pbXBvcnQgJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRm9yd2FyZGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L3N0b3JhZ2UnO1xuaW1wb3J0ICdjcm9zcy1mZXRjaCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JVGhpcmR3ZWJDb250cmFjdC5qc29uJztcbmltcG9ydCAnZXRoZXJzL2xpYi91dGlscy5qcyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjBNZXRhZGF0YS5qc29uJztcbmltcG9ydCAndXVpZCc7XG5pbXBvcnQgJ21lcmtsZXRyZWVqcyc7XG5pbXBvcnQgJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTY1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsRGVwcmVjYXRlZC5qc29uJztcbmltcG9ydCAnZXRoZXJzL2xpYi91dGlscyc7XG5pbXBvcnQgJ2JzNTgnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlMb2dpYy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5Um91dGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2dlbmVyYXRlZC1hYmlzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXRmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXUmVnaXN0cnkuanNvbic7XG5cbi8qKlxuICogU2V0dXAgYSBjb2xsZWN0aW9uIG9mIG9uZS1vZi1vbmUgTkZUcyB0aGF0IGFyZSBtaW50ZWQgYXMgdXNlcnMgY2xhaW0gdGhlbS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCI7XG4gKlxuICogY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKFwie3tjaGFpbk5hbWV9fVwiKTtcbiAqIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgc2RrLmdldENvbnRyYWN0KFwie3tjb250cmFjdF9hZGRyZXNzfX1cIiwgXCJuZnQtZHJvcFwiKTtcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgTkZURHJvcCBleHRlbmRzIFN0YW5kYXJkRXJjNzIxIHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICAvKipcbiAgICogQ29uZmlndXJlIHJveWFsdGllc1xuICAgKiBAcmVtYXJrcyBTZXQgeW91ciBvd24gcm95YWx0aWVzIGZvciB0aGUgZW50aXJlIGNvbnRyYWN0IG9yIHBlciB0b2tlblxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIHJveWFsdGllcyBvbiB0aGUgd2hvbGUgY29udHJhY3RcbiAgICogY29udHJhY3Qucm95YWx0aWVzLnNldERlZmF1bHRSb3lhbHR5SW5mbyh7XG4gICAqICAgc2VsbGVyX2ZlZV9iYXNpc19wb2ludHM6IDEwMCwgLy8gMSVcbiAgICogICBmZWVfcmVjaXBpZW50OiBcIjB4Li4uXCJcbiAgICogfSk7XG4gICAqIC8vIG92ZXJyaWRlIHJveWFsdHkgZm9yIGEgcGFydGljdWxhciB0b2tlblxuICAgKiBjb250cmFjdC5yb3lhbHRpZXMuc2V0VG9rZW5Sb3lhbHR5SW5mbyh0b2tlbklkLCB7XG4gICAqICAgc2VsbGVyX2ZlZV9iYXNpc19wb2ludHM6IDUwMCwgLy8gNSVcbiAgICogICBmZWVfcmVjaXBpZW50OiBcIjB4Li4uXCJcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cblxuICAvKipcbiAgICogQ29uZmlndXJlIGNsYWltIGNvbmRpdGlvbnNcbiAgICogQHJlbWFya3MgRGVmaW5lIHdobyBjYW4gY2xhaW0gTkZUcyBpbiB0aGUgY29sbGVjdGlvbiwgd2hlbiBhbmQgaG93IG1hbnkuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgcHJlc2FsZVN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAqIGNvbnN0IHB1YmxpY1NhbGVTdGFydFRpbWUgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgNjAgKiA2MCAqIDI0ICogMTAwMCk7XG4gICAqIGNvbnN0IGNsYWltQ29uZGl0aW9ucyA9IFtcbiAgICogICB7XG4gICAqICAgICBzdGFydFRpbWU6IHByZXNhbGVTdGFydFRpbWUsIC8vIHN0YXJ0IHRoZSBwcmVzYWxlIG5vd1xuICAgKiAgICAgbWF4Q2xhaW1hYmxlU3VwcGx5OiAyLCAvLyBsaW1pdCBob3cgbWFueSBtaW50cyBmb3IgdGhpcyBwcmVzYWxlXG4gICAqICAgICBwcmljZTogMC4wMSwgLy8gcHJlc2FsZSBwcmljZVxuICAgKiAgICAgc25hcHNob3Q6IFsnMHguLi4nLCAnMHguLi4nXSwgLy8gbGltaXQgbWludGluZyB0byBvbmx5IGNlcnRhaW4gYWRkcmVzc2VzXG4gICAqICAgfSxcbiAgICogICB7XG4gICAqICAgICBzdGFydFRpbWU6IHB1YmxpY1NhbGVTdGFydFRpbWUsIC8vIDI0aCBhZnRlciBwcmVzYWxlLCBzdGFydCBwdWJsaWMgc2FsZVxuICAgKiAgICAgcHJpY2U6IDAuMDgsIC8vIHB1YmxpYyBzYWxlIHByaWNlXG4gICAqICAgfVxuICAgKiBdKTtcbiAgICogYXdhaXQgY29udHJhY3QuY2xhaW1Db25kaXRpb25zLnNldChjbGFpbUNvbmRpdGlvbnMpO1xuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIERlbGF5ZWQgcmV2ZWFsXG4gICAqIEByZW1hcmtzIENyZWF0ZSBhIGJhdGNoIG9mIGVuY3J5cHRlZCBORlRzIHRoYXQgY2FuIGJlIHJldmVhbGVkIGF0IGEgbGF0ZXIgdGltZS5cbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyB0aGUgcmVhbCBORlRzLCB0aGVzZSB3aWxsIGJlIGVuY3J5cHRlZCB1bnRpbCB5b3UgcmV2ZWFsIHRoZW1cbiAgICogY29uc3QgcmVhbE5GVHMgPSBbe1xuICAgKiAgIG5hbWU6IFwiQ29tbW9uIE5GVCAjMVwiLFxuICAgKiAgIGRlc2NyaXB0aW9uOiBcIkNvbW1vbiBORlQsIG9uZSBvZiBtYW55LlwiLFxuICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL2ltYWdlLnBuZ1wiKSxcbiAgICogfSwge1xuICAgKiAgIG5hbWU6IFwiU3VwZXIgUmFyZSBORlQgIzJcIixcbiAgICogICBkZXNjcmlwdGlvbjogXCJZb3UgZ290IGEgU3VwZXIgUmFyZSBORlQhXCIsXG4gICAqICAgaW1hZ2U6IGZzLnJlYWRGaWxlU3luYyhcInBhdGgvdG8vaW1hZ2UucG5nXCIpLFxuICAgKiB9XTtcbiAgICogLy8gQSBwbGFjZWhvbGRlciBORlQgdGhhdCBwZW9wbGUgd2lsbCBnZXQgaW1tZWRpYXRlbHkgaW4gdGhlaXIgd2FsbGV0LCBhbmQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gdGhlIHJlYWwgTkZUIGF0IHJldmVhbCB0aW1lXG4gICAqIGNvbnN0IHBsYWNlaG9sZGVyTkZUID0ge1xuICAgKiAgIG5hbWU6IFwiSGlkZGVuIE5GVFwiLFxuICAgKiAgIGRlc2NyaXB0aW9uOiBcIldpbGwgYmUgcmV2ZWFsZWQgbmV4dCB3ZWVrIVwiXG4gICAqIH07XG4gICAqIC8vIENyZWF0ZSBhbmQgZW5jcnlwdCB0aGUgTkZUc1xuICAgKiBhd2FpdCBjb250cmFjdC5yZXZlYWxlci5jcmVhdGVEZWxheWVkUmV2ZWFsQmF0Y2goXG4gICAqICAgcGxhY2Vob2xkZXJORlQsXG4gICAqICAgcmVhbE5GVHMsXG4gICAqICAgXCJteSBzZWNyZXQgcGFzc3dvcmRcIixcbiAgICogKTtcbiAgICogLy8gV2hlbmV2ZXIgeW91J3JlIHJlYWR5LCByZXZlYWwgeW91ciBORlRzIGF0IGFueSB0aW1lXG4gICAqIGNvbnN0IGJhdGNoSWQgPSAwOyAvLyB0aGUgYmF0Y2ggdG8gcmV2ZWFsXG4gICAqIGF3YWl0IGNvbnRyYWN0LnJldmVhbGVyLnJldmVhbChiYXRjaElkLCBcIm15IHNlY3JldCBwYXNzd29yZFwiKTtcbiAgICogYGBgXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDaGVja291dFxuICAgKiBAcmVtYXJrcyBDcmVhdGUgYSBGSUFUIGN1cnJlbmN5IGNoZWNrb3V0IGZvciB5b3VyIE5GVCBkcm9wLlxuICAgKi9cblxuICBjb25zdHJ1Y3RvcihuZXR3b3JrLCBhZGRyZXNzLCBzdG9yYWdlKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIGxldCBfb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgbGV0IGFiaSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ID8gYXJndW1lbnRzWzRdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjaGFpbklkID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNvbnRyYWN0V3JhcHBlciA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogbmV3IENvbnRyYWN0V3JhcHBlcihuZXR3b3JrLCBhZGRyZXNzLCBhYmksIF9vcHRpb25zKTtcbiAgICBzdXBlcihjb250cmFjdFdyYXBwZXIsIHN0b3JhZ2UsIGNoYWluSWQpO1xuICAgIF90aGlzID0gdGhpcztcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhYmlcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmNvZGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXN0aW1hdG9yXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWV0YWRhdGFcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhcHBcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzYWxlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBsYXRmb3JtRmVlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImV2ZW50c1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJvbGVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaW50ZXJjZXB0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb3lhbHRpZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjbGFpbUNvbmRpdGlvbnNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZXZlYWxlclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNoZWNrb3V0XCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib3duZXJcIiwgdm9pZCAwKTtcbiAgICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogV1JJVEUgRlVOQ1RJT05TXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgYmF0Y2ggb2YgdW5pcXVlIE5GVHMgdG8gYmUgY2xhaW1lZCBpbiB0aGUgZnV0dXJlXG4gICAgICpcbiAgICAgKiBAcmVtYXJrcyBDcmVhdGUgYmF0Y2ggYWxsb3dzIHlvdSB0byBjcmVhdGUgYSBiYXRjaCBvZiBtYW55IHVuaXF1ZSBORlRzIGluIG9uZSB0cmFuc2FjdGlvbi5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIEN1c3RvbSBtZXRhZGF0YSBvZiB0aGUgTkZUcyB0byBjcmVhdGVcbiAgICAgKiBjb25zdCBtZXRhZGF0YXMgPSBbe1xuICAgICAqICAgbmFtZTogXCJDb29sIE5GVFwiLFxuICAgICAqICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvb2wgTkZUXCIsXG4gICAgICogICBpbWFnZTogZnMucmVhZEZpbGVTeW5jKFwicGF0aC90by9pbWFnZS5wbmdcIiksIC8vIFRoaXMgY2FuIGJlIGFuIGltYWdlIHVybCBvciBmaWxlXG4gICAgICogfSwge1xuICAgICAqICAgbmFtZTogXCJDb29sIE5GVFwiLFxuICAgICAqICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvb2wgTkZUXCIsXG4gICAgICogICBpbWFnZTogZnMucmVhZEZpbGVTeW5jKFwicGF0aC90by9pbWFnZS5wbmdcIiksXG4gICAgICogfV07XG4gICAgICpcbiAgICAgKiBjb25zdCByZXN1bHRzID0gYXdhaXQgY29udHJhY3QuY3JlYXRlQmF0Y2gobWV0YWRhdGFzKTsgLy8gdXBsb2FkcyBhbmQgY3JlYXRlcyB0aGUgTkZUcyBvbiBjaGFpblxuICAgICAqIGNvbnN0IGZpcnN0VG9rZW5JZCA9IHJlc3VsdHNbMF0uaWQ7IC8vIHRva2VuIGlkIG9mIHRoZSBmaXJzdCBjcmVhdGVkIE5GVFxuICAgICAqIGNvbnN0IGZpcnN0TkZUID0gYXdhaXQgcmVzdWx0c1swXS5kYXRhKCk7IC8vIChvcHRpb25hbCkgZmV0Y2ggZGV0YWlscyBvZiB0aGUgZmlyc3QgY3JlYXRlZCBORlRcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZXRhZGF0YXMgLSBUaGUgbWV0YWRhdGEgdG8gaW5jbHVkZSBpbiB0aGUgYmF0Y2guXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBvcHRpb25hbCB1cGxvYWQgcHJvZ3Jlc3MgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjcmVhdGVCYXRjaFwiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgKG1ldGFkYXRhcywgb3B0aW9ucykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZXJjNzIxLmxhenlNaW50LnByZXBhcmUobWV0YWRhdGFzLCBvcHRpb25zKTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogQ2xhaW0gdW5pcXVlIE5GVHMgdG8gYSBzcGVjaWZpYyBXYWxsZXRcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIExldCB0aGUgc3BlY2lmaWVkIHdhbGxldCBjbGFpbSBORlRzLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogY29uc3QgYWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCI7IC8vIGFkZHJlc3Mgb2YgdGhlIHdhbGxldCB5b3Ugd2FudCB0byBjbGFpbSB0aGUgTkZUc1xuICAgICAqIGNvbnN0IHF1YW50aXR5ID0gMTsgLy8gaG93IG1hbnkgdW5pcXVlIE5GVHMgeW91IHdhbnQgdG8gY2xhaW1cbiAgICAgKlxuICAgICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QuY2xhaW1UbyhhZGRyZXNzLCBxdWFudGl0eSk7XG4gICAgICogY29uc3QgcmVjZWlwdCA9IHR4WzBdLnJlY2VpcHQ7IC8vIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAgICogY29uc3QgY2xhaW1lZFRva2VuSWQgPSB0eFswXS5pZDsgLy8gdGhlIGlkIG9mIHRoZSBORlQgY2xhaW1lZFxuICAgICAqIGNvbnN0IGNsYWltZWRORlQgPSBhd2FpdCB0eFswXS5kYXRhKCk7IC8vIChvcHRpb25hbCkgZ2V0IHRoZSBjbGFpbWVkIE5GVCBtZXRhZGF0YVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIGRlc3RpbmF0aW9uQWRkcmVzcyAtIEFkZHJlc3MgeW91IHdhbnQgdG8gc2VuZCB0aGUgdG9rZW4gdG9cbiAgICAgKiBAcGFyYW0gcXVhbnRpdHkgLSBRdWFudGl0eSBvZiB0aGUgdG9rZW5zIHlvdSB3YW50IHRvIGNsYWltXG4gICAgICogQHBhcmFtIGNoZWNrRVJDMjBBbGxvd2FuY2UgLSBPcHRpb25hbCwgY2hlY2sgaWYgdGhlIHdhbGxldCBoYXMgZW5vdWdoIEVSQzIwIGFsbG93YW5jZSB0byBjbGFpbSB0aGUgdG9rZW5zLCBhbmQgaWYgbm90LCBhcHByb3ZlIHRoZSB0cmFuc2ZlclxuICAgICAqXG4gICAgICogQHJldHVybnMgLSBhbiBhcnJheSBvZiByZXN1bHRzIGNvbnRhaW5pbmcgdGhlIGlkIG9mIHRoZSB0b2tlbiBjbGFpbWVkLCB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdCBhbmQgYSBwcm9taXNlIHRvIG9wdGlvbmFsbHkgZmV0Y2ggdGhlIG5mdCBtZXRhZGF0YVxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNsYWltVG9cIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIGZ1bmN0aW9uIChkZXN0aW5hdGlvbkFkZHJlc3MsIHF1YW50aXR5KSB7XG4gICAgICBsZXQgY2hlY2tFUkMyMEFsbG93YW5jZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcbiAgICAgIHJldHVybiBfdGhpcy5lcmM3MjEuY2xhaW1Uby5wcmVwYXJlKGRlc3RpbmF0aW9uQWRkcmVzcywgcXVhbnRpdHksIHtcbiAgICAgICAgY2hlY2tFUkMyMEFsbG93YW5jZVxuICAgICAgfSk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIENsYWltIE5GVHMgdG8gdGhlIGNvbm5lY3RlZCB3YWxsZXQuXG4gICAgICpcbiAgICAgKiBAcmVtYXJrcyBTZWUge0BsaW5rIE5GVERyb3AuY2xhaW1Ub31cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIC0gYW4gYXJyYXkgb2YgcmVzdWx0cyBjb250YWluaW5nIHRoZSBpZCBvZiB0aGUgdG9rZW4gY2xhaW1lZCwgdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHQgYW5kIGEgcHJvbWlzZSB0byBvcHRpb25hbGx5IGZldGNoIHRoZSBuZnQgbWV0YWRhdGFcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjbGFpbVwiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgZnVuY3Rpb24gKHF1YW50aXR5KSB7XG4gICAgICBsZXQgY2hlY2tFUkMyMEFsbG93YW5jZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgIHJldHVybiBfdGhpcy5jbGFpbVRvLnByZXBhcmUoYXdhaXQgX3RoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKSwgcXVhbnRpdHksIGNoZWNrRVJDMjBBbGxvd2FuY2UpO1xuICAgIH0pKTtcbiAgICAvKipcbiAgICAgKiBCdXJuIGEgc2luZ2xlIE5GVFxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VuSWQgLSB0aGUgdG9rZW4gSWQgdG8gYnVyblxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuYnVyblRva2VuKHRva2VuSWQpO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYnVyblwiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgdG9rZW5JZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lcmM3MjEuYnVybi5wcmVwYXJlKHRva2VuSWQpO1xuICAgIH0pKTtcbiAgICAvKipcbiAgICAgKiBUcmFuc2ZlciBhbiBORlRcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIFRyYW5zZmVyIGFuIE5GVCBmcm9tIHRoZSBjb25uZWN0ZWQgd2FsbGV0IHRvIGFub3RoZXIgd2FsbGV0LlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogY29uc3Qgd2FsbGV0QWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCI7XG4gICAgICogY29uc3QgdG9rZW5JZCA9IDA7XG4gICAgICogYXdhaXQgY29udHJhY3QudHJhbnNmZXIod2FsbGV0QWRkcmVzcywgdG9rZW5JZCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidHJhbnNmZXJcIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jICh0bywgdG9rZW5JZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZXJjNzIxLnRyYW5zZmVyLnByZXBhcmUodG8sIHRva2VuSWQpO1xuICAgIH0pKTtcbiAgICAvKipcbiAgICAgKiBBcHByb3ZlIG9yIHJlbW92ZSBvcGVyYXRvciBhcyBhbiBvcGVyYXRvciBmb3IgdGhlIGNhbGxlci4gT3BlcmF0b3JzIGNhbiBjYWxsIHRyYW5zZmVyRnJvbSBvciBzYWZlVHJhbnNmZXJGcm9tIGZvciBhbnkgdG9rZW4gb3duZWQgYnkgdGhlIGNhbGxlci5cbiAgICAgKiBAcGFyYW0gb3BlcmF0b3IgLSB0aGUgb3BlcmF0b3IncyBhZGRyZXNzXG4gICAgICogQHBhcmFtIGFwcHJvdmVkIC0gd2hldGhlciB0byBhcHByb3ZlIG9yIHJlbW92ZVxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2V0QXBwcm92YWxGb3JBbGxcIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIChvcGVyYXRvciwgYXBwcm92ZWQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVyYzcyMS5zZXRBcHByb3ZhbEZvckFsbC5wcmVwYXJlKG9wZXJhdG9yLCBhcHByb3ZlZCk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIEFwcHJvdmUgYW4gb3BlcmF0b3IgZm9yIHRoZSBORlQgb3duZXIuIE9wZXJhdG9ycyBjYW4gY2FsbCB0cmFuc2ZlckZyb20gb3Igc2FmZVRyYW5zZmVyRnJvbSBmb3IgdGhlIHNwZWNpZmllZCB0b2tlbi5cbiAgICAgKiBAcGFyYW0gb3BlcmF0b3IgLSB0aGUgb3BlcmF0b3IncyBhZGRyZXNzXG4gICAgICogQHBhcmFtIHRva2VuSWQgLSB0aGUgdG9rZW5JZCB0byBnaXZlIGFwcHJvdmFsIGZvclxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2V0QXBwcm92YWxGb3JUb2tlblwiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgKG9wZXJhdG9yLCB0b2tlbklkKSA9PiB7XG4gICAgICByZXR1cm4gVHJhbnNhY3Rpb24uZnJvbUNvbnRyYWN0V3JhcHBlcih7XG4gICAgICAgIGNvbnRyYWN0V3JhcHBlcjogdGhpcy5jb250cmFjdFdyYXBwZXIsXG4gICAgICAgIG1ldGhvZDogXCJhcHByb3ZlXCIsXG4gICAgICAgIGFyZ3M6IFtvcGVyYXRvciwgdG9rZW5JZF1cbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgICB0aGlzLmFiaSA9IEFiaVNjaGVtYS5wYXJzZShhYmkgfHwgW10pO1xuICAgIHRoaXMubWV0YWRhdGEgPSBuZXcgQ29udHJhY3RNZXRhZGF0YSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgRHJvcEVyYzcyMUNvbnRyYWN0U2NoZW1hLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMuYXBwID0gbmV3IENvbnRyYWN0QXBwVVJJKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLm1ldGFkYXRhLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMucm9sZXMgPSBuZXcgQ29udHJhY3RSb2xlcyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgTkZURHJvcC5jb250cmFjdFJvbGVzKTtcbiAgICB0aGlzLnJveWFsdGllcyA9IG5ldyBDb250cmFjdFJveWFsdHkodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMubWV0YWRhdGEpO1xuICAgIHRoaXMuc2FsZXMgPSBuZXcgQ29udHJhY3RQcmltYXJ5U2FsZSh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5jbGFpbUNvbmRpdGlvbnMgPSBuZXcgRHJvcENsYWltQ29uZGl0aW9ucyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5tZXRhZGF0YSwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLmVuY29kZXIgPSBuZXcgQ29udHJhY3RFbmNvZGVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmVzdGltYXRvciA9IG5ldyBHYXNDb3N0RXN0aW1hdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBDb250cmFjdEV2ZW50cyh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5wbGF0Zm9ybUZlZXMgPSBuZXcgQ29udHJhY3RQbGF0Zm9ybUZlZSh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5yZXZlYWxlciA9IG5ldyBEZWxheWVkUmV2ZWFsKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UsIEZFQVRVUkVfTkZUX1JFVkVBTEFCTEUubmFtZSwgKCkgPT4gdGhpcy5lcmM3MjEubmV4dFRva2VuSWRUb01pbnQoKSk7XG4gICAgdGhpcy5pbnRlcmNlcHRvciA9IG5ldyBDb250cmFjdEludGVyY2VwdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLm93bmVyID0gbmV3IENvbnRyYWN0T3duZXIodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuY2hlY2tvdXQgPSBuZXcgUGFwZXJDaGVja291dCh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbk5ldHdvcmtVcGRhdGVkKG5ldHdvcmspIHtcbiAgICB0aGlzLmNvbnRyYWN0V3JhcHBlci51cGRhdGVTaWduZXJPclByb3ZpZGVyKG5ldHdvcmspO1xuICB9XG4gIGdldEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5hZGRyZXNzO1xuICB9XG5cbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBSRUFEIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogR2V0IHRoZSB0b3RhbCBjb3VudCBORlRzIGluIHRoaXMgZHJvcCBjb250cmFjdCwgYm90aCBjbGFpbWVkIGFuZCB1bmNsYWltZWRcbiAgICovXG4gIGFzeW5jIHRvdGFsU3VwcGx5KCkge1xuICAgIGNvbnN0IGNsYWltZWQgPSBhd2FpdCB0aGlzLnRvdGFsQ2xhaW1lZFN1cHBseSgpO1xuICAgIGNvbnN0IHVuY2xhaW1lZCA9IGF3YWl0IHRoaXMudG90YWxVbmNsYWltZWRTdXBwbHkoKTtcbiAgICByZXR1cm4gY2xhaW1lZC5hZGQodW5jbGFpbWVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQWxsIENsYWltZWQgTkZUc1xuICAgKlxuICAgKiBAcmVtYXJrcyBGZXRjaCBhbGwgdGhlIE5GVHMgKGFuZCB0aGVpciBvd25lcnMpIHRoYXQgaGF2ZSBiZWVuIGNsYWltZWQgaW4gdGhpcyBEcm9wLlxuICAgKlxuICAgKiAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgY2xhaW1lZE5GVHMgPSBhd2FpdCBjb250cmFjdC5nZXRBbGxDbGFpbWVkKCk7XG4gICAqIGNvbnN0IGZpcnN0T3duZXIgPSBjbGFpbWVkTkZUc1swXS5vd25lcjtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVBhcmFtcyAtIG9wdGlvbmFsIGZpbHRlcmluZyB0byBvbmx5IGZldGNoIGEgc3Vic2V0IG9mIHJlc3VsdHMuXG4gICAqIEByZXR1cm5zIFRoZSBORlQgbWV0YWRhdGEgYW5kIHRoZWlyIG93bmVyc2ZvciBhbGwgTkZUcyBxdWVyaWVkLlxuICAgKi9cbiAgYXN5bmMgZ2V0QWxsQ2xhaW1lZChxdWVyeVBhcmFtcykge1xuICAgIGNvbnN0IHN0YXJ0ID0gQmlnTnVtYmVyLmZyb20ocXVlcnlQYXJhbXM/LnN0YXJ0IHx8IDApLnRvTnVtYmVyKCk7XG4gICAgY29uc3QgY291bnQgPSBCaWdOdW1iZXIuZnJvbShxdWVyeVBhcmFtcz8uY291bnQgfHwgREVGQVVMVF9RVUVSWV9BTExfQ09VTlQpLnRvTnVtYmVyKCk7XG4gICAgY29uc3QgbWF4SWQgPSBNYXRoLm1pbigoYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0Lm5leHRUb2tlbklkVG9DbGFpbSgpKS50b051bWJlcigpLCBzdGFydCArIGNvdW50KTtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShBcnJheShtYXhJZCkua2V5cygpKS5tYXAoaSA9PiB0aGlzLmdldChpLnRvU3RyaW5nKCkpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IEFsbCBVbmNsYWltZWQgTkZUc1xuICAgKlxuICAgKiBAcmVtYXJrcyBGZXRjaCBhbGwgdGhlIE5GVHMgdGhhdCBoYXZlIGJlZW4gbm90IGJlZW4gY2xhaW1lZCB5ZXQgaW4gdGhpcyBEcm9wLlxuICAgKlxuICAgKiAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgdW5jbGFpbWVkTkZUcyA9IGF3YWl0IGNvbnRyYWN0LmdldEFsbFVuY2xhaW1lZCgpO1xuICAgKiBjb25zdCBmaXJzdFVuY2xhaW1lZE5GVCA9IHVuY2xhaW1lZE5GVHNbMF0ubmFtZTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVBhcmFtcyAtIG9wdGlvbmFsIGZpbHRlcmluZyB0byBvbmx5IGZldGNoIGEgc3Vic2V0IG9mIHJlc3VsdHMuXG4gICAqIEByZXR1cm5zIFRoZSBORlQgbWV0YWRhdGEgZm9yIGFsbCBORlRzIHF1ZXJpZWQuXG4gICAqL1xuICBhc3luYyBnZXRBbGxVbmNsYWltZWQocXVlcnlQYXJhbXMpIHtcbiAgICBjb25zdCBzdGFydCA9IEJpZ051bWJlci5mcm9tKHF1ZXJ5UGFyYW1zPy5zdGFydCB8fCAwKS50b051bWJlcigpO1xuICAgIGNvbnN0IGNvdW50ID0gQmlnTnVtYmVyLmZyb20ocXVlcnlQYXJhbXM/LmNvdW50IHx8IERFRkFVTFRfUVVFUllfQUxMX0NPVU5UKS50b051bWJlcigpO1xuICAgIGNvbnN0IGZpcnN0VG9rZW5JZCA9IEJpZ051bWJlci5mcm9tKE1hdGgubWF4KChhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QubmV4dFRva2VuSWRUb0NsYWltKCkpLnRvTnVtYmVyKCksIHN0YXJ0KSk7XG4gICAgY29uc3QgbWF4SWQgPSBCaWdOdW1iZXIuZnJvbShNYXRoLm1pbigoYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0Lm5leHRUb2tlbklkVG9NaW50KCkpLnRvTnVtYmVyKCksIGZpcnN0VG9rZW5JZC50b051bWJlcigpICsgY291bnQpKTtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShBcnJheShtYXhJZC5zdWIoZmlyc3RUb2tlbklkKS50b051bWJlcigpKS5rZXlzKCkpLm1hcChpID0+IHRoaXMuZXJjNzIxLmdldFRva2VuTWV0YWRhdGEoZmlyc3RUb2tlbklkLmFkZChpKS50b1N0cmluZygpKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2xhaW1lZCBzdXBwbHlcbiAgICpcbiAgICogQHJlbWFya3MgR2V0IHRoZSBudW1iZXIgb2YgY2xhaW1lZCBORlRzIGluIHRoaXMgRHJvcC5cbiAgICpcbiAgICogKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGNsYWltZWRORlRDb3VudCA9IGF3YWl0IGNvbnRyYWN0LnRvdGFsQ2xhaW1lZFN1cHBseSgpO1xuICAgKiBjb25zb2xlLmxvZyhgTkZUcyBjbGFpbWVkIHNvIGZhcjogJHtjbGFpbWVkTkZUQ291bnR9YCk7XG4gICAqIGBgYFxuICAgKiBAcmV0dXJucyB0aGUgdW5jbGFpbWVkIHN1cHBseVxuICAgKi9cbiAgYXN5bmMgdG90YWxDbGFpbWVkU3VwcGx5KCkge1xuICAgIHJldHVybiB0aGlzLmVyYzcyMS50b3RhbENsYWltZWRTdXBwbHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHVuY2xhaW1lZCBzdXBwbHlcbiAgICpcbiAgICogQHJlbWFya3MgR2V0IHRoZSBudW1iZXIgb2YgdW5jbGFpbWVkIE5GVHMgaW4gdGhpcyBEcm9wLlxuICAgKlxuICAgKiAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgdW5jbGFpbWVkTkZUQ291bnQgPSBhd2FpdCBjb250cmFjdC50b3RhbFVuY2xhaW1lZFN1cHBseSgpO1xuICAgKiBjb25zb2xlLmxvZyhgTkZUcyBsZWZ0IHRvIGNsYWltOiAke3VuY2xhaW1lZE5GVENvdW50fWApO1xuICAgKiBgYGBcbiAgICogQHJldHVybnMgdGhlIHVuY2xhaW1lZCBzdXBwbHlcbiAgICovXG4gIGFzeW5jIHRvdGFsVW5jbGFpbWVkU3VwcGx5KCkge1xuICAgIHJldHVybiB0aGlzLmVyYzcyMS50b3RhbFVuY2xhaW1lZFN1cHBseSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHVzZXJzIGNhbiB0cmFuc2ZlciBORlRzIGZyb20gdGhpcyBjb250cmFjdFxuICAgKi9cbiAgYXN5bmMgaXNUcmFuc2ZlclJlc3RyaWN0ZWQoKSB7XG4gICAgY29uc3QgYW55b25lQ2FuVHJhbnNmZXIgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuaGFzUm9sZShnZXRSb2xlSGFzaChcInRyYW5zZmVyXCIpLCBjb25zdGFudHMuQWRkcmVzc1plcm8pO1xuICAgIHJldHVybiAhYW55b25lQ2FuVHJhbnNmZXI7XG4gIH1cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIGNsYWltIHRyYW5zYWN0aW9uIHdpdGhvdXQgZXhlY3V0aW5nIGl0LlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgZXN0aW1hdGluZyB0aGUgZ2FzIGNvc3Qgb2YgYSBjbGFpbSB0cmFuc2FjdGlvbiwgb3ZlcnJpZGluZyB0cmFuc2FjdGlvbiBvcHRpb25zIGFuZCBoYXZpbmcgZmluZSBncmFpbmVkIGNvbnRyb2wgb3ZlciB0aGUgdHJhbnNhY3Rpb24gZXhlY3V0aW9uLlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25BZGRyZXNzXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKiBAcGFyYW0gY2hlY2tFUkMyMEFsbG93YW5jZVxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGNvbnRyYWN0LmVyYzcyMS5jbGFpbS5wcmVwYXJlKC4uLmFyZ3MpYCBpbnN0ZWFkXG4gICAqL1xuICBhc3luYyBnZXRDbGFpbVRyYW5zYWN0aW9uKGRlc3RpbmF0aW9uQWRkcmVzcywgcXVhbnRpdHkpIHtcbiAgICBsZXQgY2hlY2tFUkMyMEFsbG93YW5jZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5lcmM3MjEuZ2V0Q2xhaW1UcmFuc2FjdGlvbihkZXN0aW5hdGlvbkFkZHJlc3MsIHF1YW50aXR5LCB7XG4gICAgICBjaGVja0VSQzIwQWxsb3dhbmNlXG4gICAgfSk7XG4gIH1cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBTVEFOREFSRCBFUkM3MjEgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZSBORlRcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCB0b2tlbklkID0gMDtcbiAgICogY29uc3QgbmZ0ID0gYXdhaXQgY29udHJhY3QuZ2V0KHRva2VuSWQpO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIHRva2VuSWQgLSB0aGUgdG9rZW5JZCBvZiB0aGUgTkZUIHRvIHJldHJpZXZlXG4gICAqIEByZXR1cm5zIFRoZSBORlQgbWV0YWRhdGFcbiAgICovXG4gIGFzeW5jIGdldCh0b2tlbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLmdldCh0b2tlbklkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgb3duZXIgb2YgYSBnaXZlbiBORlQgd2l0aGluIHRoaXMgQ29udHJhY3RcbiAgICpcbiAgICogQHBhcmFtIHRva2VuSWQgLSB0aGUgdG9rZW5JZCBvZiB0aGUgTkZUXG4gICAqIEByZXR1cm5zIHRoZSBhZGRyZXNzIG9mIHRoZSBvd25lclxuICAgKi9cbiAgYXN5bmMgb3duZXJPZih0b2tlbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLm93bmVyT2YodG9rZW5JZCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IE5GVCBCYWxhbmNlXG4gICAqXG4gICAqIEByZW1hcmtzIEdldCBhIHdhbGxldHMgTkZUIGJhbGFuY2UgKG51bWJlciBvZiBORlRzIGluIHRoaXMgY29udHJhY3Qgb3duZWQgYnkgdGhlIHdhbGxldCkuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3Qgd2FsbGV0QWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCI7XG4gICAqIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb250cmFjdC5iYWxhbmNlT2Yod2FsbGV0QWRkcmVzcyk7XG4gICAqIGNvbnNvbGUubG9nKGJhbGFuY2UpO1xuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIGJhbGFuY2VPZihhZGRyZXNzKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLmJhbGFuY2VPZihhZGRyZXNzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgTkZUIEJhbGFuY2UgZm9yIHRoZSBjdXJyZW50bHkgY29ubmVjdGVkIHdhbGxldFxuICAgKi9cbiAgYXN5bmMgYmFsYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lcmM3MjEuYmFsYW5jZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHRoaXMgd2FsbGV0IGhhcyBhcHByb3ZlZCB0cmFuc2ZlcnMgZnJvbSB0aGUgZ2l2ZW4gb3BlcmF0b3JcbiAgICogQHBhcmFtIGFkZHJlc3MgLSB0aGUgd2FsbGV0IGFkZHJlc3NcbiAgICogQHBhcmFtIG9wZXJhdG9yIC0gdGhlIG9wZXJhdG9yIGFkZHJlc3NcbiAgICovXG4gIGFzeW5jIGlzQXBwcm92ZWQoYWRkcmVzcywgb3BlcmF0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5lcmM3MjEuaXNBcHByb3ZlZChhZGRyZXNzLCBvcGVyYXRvcik7XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgcHJlcGFyZShtZXRob2QsIGFyZ3MsIG92ZXJyaWRlcykge1xuICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgIGNvbnRyYWN0V3JhcHBlcjogdGhpcy5jb250cmFjdFdyYXBwZXIsXG4gICAgICBtZXRob2QsXG4gICAgICBhcmdzLFxuICAgICAgb3ZlcnJpZGVzXG4gICAgfSk7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFBSSVZBVEUgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBjYWxsKGZ1bmN0aW9uTmFtZSwgYXJncywgb3ZlcnJpZGVzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLmNhbGwoZnVuY3Rpb25OYW1lLCBhcmdzLCBvdmVycmlkZXMpO1xuICB9XG59XG5fZGVmaW5lUHJvcGVydHkoTkZURHJvcCwgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCIsIFwibWludGVyXCIsIFwidHJhbnNmZXJcIl0pO1xuXG5leHBvcnQgeyBORlREcm9wIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=