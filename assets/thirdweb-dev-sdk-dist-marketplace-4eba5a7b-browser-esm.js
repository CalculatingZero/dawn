"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_marketplace-4eba5a7b_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/marketplace-4eba5a7b.browser.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/marketplace-4eba5a7b.browser.esm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Marketplace: () => (/* binding */ Marketplace)
/* harmony export */ });
/* harmony import */ var _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./QueryParams-7d9473b5.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-7d9473b5.browser.esm.js");
/* harmony import */ var _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contract-metadata-88f06ef9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/contract-metadata-88f06ef9.browser.esm.js");
/* harmony import */ var _marketplace_auction_caf61074_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./marketplace-auction-caf61074.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/marketplace-auction-caf61074.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/constants/lib.esm/addresses.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.mjs");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! merkletreejs */ "./node_modules/merkletreejs/dist/index.js");
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(merkletreejs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");














































































/**
 * Create your own whitelabel marketplace that enables users to buy and sell any digital assets.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "marketplace");
 * ```
 *
 * @public
 */
class Marketplace {
  /**
   * @internal
   */

  /**
   * Direct listings
   * @remarks Create and manage direct listings in your marketplace.
   * @example
   * ```javascript
   * // Data of the listing you want to create
   * const listing = {
   *   // address of the NFT contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *  // when should the listing open up for offers
   *   startTimestamp: new Date(),
   *   // how long the listing will be open for
   *   listingDurationInSeconds: 86400,
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // how much the asset will be sold for
   *   buyoutPricePerToken: "1.5",
   * }
   *
   * const tx = await contract.direct.createListing(listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const listingId = tx.id; // the id of the newly created listing
   *
   * // And on the buyers side:
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   * await contract.direct.buyoutListing(listingId, quantityDesired);
   * ```
   */

  /**
   * Auctions
   * @remarks Create and manage auctions in your marketplace.
   * @example
   * ```javascript
   * // Data of the auction you want to create
   * const auction = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *  // when should the listing open up for offers
   *   startTimestamp: new Date(),
   *   // how long the listing will be open for
   *   listingDurationInSeconds: 86400,
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // how much people would have to bid to instantly buy the asset
   *   buyoutPricePerToken: "10",
   *   // the minimum bid that will be accepted for the token
   *   reservePricePerToken: "1.5",
   * }
   *
   * const tx = await contract.auction.createListing(auction);
   * const receipt = tx.receipt; // the transaction receipt
   * const listingId = tx.id; // the id of the newly created listing
   *
   * // And on the buyers side:
   * // The price you are willing to bid for a single token of the listing
   * const pricePerToken = 2.6;
   * await contract.auction.makeBid(listingId, pricePerToken);
   * ```
   */

  get chainId() {
    return this._chainId;
  }
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let _chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dz(network, address, abi, options);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "abi", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "contractWrapper", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "storage", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "encoder", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "events", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "estimator", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "platformFees", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "metadata", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "app", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "roles", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "interceptor", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "direct", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "auction", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "_chainId", void 0);
    /**
     * @internal
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "getAll", this.getAllListings);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Purchase NFTs
     * @remarks Buy a Direct or Auction listing on your marketplace.
     * @example
     * ```javascript
     * // The listing ID of the asset you want to buy
     * const listingId = 0;
     * // Quantity of the asset you want to buy
     * const quantityDesired = 1;
     *
     * await contract.buyoutListing(listingId, quantityDesired);
     * ```
     * @param listingId - the listing ID of the listing you want to buy
     * @param quantityDesired - the quantity that you want to buy (for ERC1155 tokens)
     * @param receiver - optional receiver of the bought listing if different from the connected wallet (for direct listings only)
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "buyoutListing", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async (listingId, quantityDesired, receiver) => {
      const listing = await this.contractWrapper.readContract.listings(listingId);
      if (listing.listingId.toString() !== listingId.toString()) {
        throw new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.bt(this.getAddress(), listingId.toString());
      }
      switch (listing.listingType) {
        case _marketplace_auction_caf61074_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.L.Direct:
          {
            (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(quantityDesired !== undefined, "quantityDesired is required when buying out a direct listing");
            return await this.direct.buyoutListing.prepare(listingId, quantityDesired, receiver);
          }
        case _marketplace_auction_caf61074_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.L.Auction:
          {
            return await this.auction.buyoutListing.prepare(listingId);
          }
        default:
          throw Error(`Unknown listing type: ${listing.listingType}`);
      }
    }));
    /**
     * Make an offer for a Direct or Auction Listing
     *
     * @remarks Make an offer on a direct or auction listing
     *
     * @example
     * ```javascript
     * // The listing ID of the asset you want to offer on
     * const listingId = 0;
     * // The price you are willing to offer per token
     * const pricePerToken = 0.5;
     * // The quantity of tokens you want to receive for this offer
     * const quantity = 1;
     *
     * await contract.makeOffer(
     *   listingId,
     *   pricePerToken,
     *   quantity,
     * );
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "makeOffer", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async (listingId, pricePerToken, quantity) => {
      const listing = await this.contractWrapper.readContract.listings(listingId);
      if (listing.listingId.toString() !== listingId.toString()) {
        throw new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.bt(this.getAddress(), listingId.toString());
      }
      const chainId = await this.contractWrapper.getChainID();
      switch (listing.listingType) {
        case _marketplace_auction_caf61074_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.L.Direct:
          {
            (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(quantity, "quantity is required when making an offer on a direct listing");
            return await this.direct.makeOffer.prepare(listingId, quantity, (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b5)(listing.currency) ? _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cY[chainId].wrapped.address : listing.currency, pricePerToken);
          }
        case _marketplace_auction_caf61074_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.L.Auction:
          {
            return await this.auction.makeBid.prepare(listingId, pricePerToken);
          }
        default:
          throw Error(`Unknown listing type: ${listing.listingType}`);
      }
    }));
    /**
     * Set the Auction bid buffer
     * @remarks A percentage (e.g. 5%) in basis points (5% = 500, 100% = 10000). A new bid is considered to be a winning bid only if its bid amount is at least the bid buffer (e.g. 5%) greater than the previous winning bid. This prevents buyers from making very slightly higher bids to win the auctioned items.
     * @example
     * ```javascript
     * // the bid buffer in basis points
     * const bufferBps = 5_00; // 5%
     * await contract.setBidBufferBps(bufferBps);
     * ```
     * @param bufferBps - the bps value
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "setBidBufferBps", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async bufferBps => {
      await this.roles.verify(["admin"], await this.contractWrapper.getSignerAddress());
      const timeBuffer = await this.getTimeBufferInSeconds();
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "setAuctionBuffers",
        args: [timeBuffer, ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(bufferBps)]
      });
    }));
    /**
     * Set the Auction Time buffer:
     * @remarks Measured in seconds (e.g. 15 minutes or 900 seconds). If a winning bid is made within the buffer of the auction closing (e.g. 15 minutes within the auction closing), the auction's closing time is increased by the buffer to prevent buyers from making last minute winning bids, and to give time to other buyers to make a higher bid if they wish to.
     * @example
     * ```javascript
     * // the time buffer in seconds
     * const bufferInSeconds = 60;
     * await contract.setTimeBufferInSeconds(bufferInSeconds);
     * ```
     * @param bufferInSeconds - the seconds value
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "setTimeBufferInSeconds", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async bufferInSeconds => {
      await this.roles.verify(["admin"], await this.contractWrapper.getSignerAddress());
      const bidBuffer = await this.getBidBufferBps();
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "setAuctionBuffers",
        args: [ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(bufferInSeconds), bidBuffer]
      });
    }));
    /**
     * Restrict listing NFTs only from the specified NFT contract address.
     * It is possible to allow listing from multiple contract addresses.
     * @param contractAddress - the NFT contract address
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "allowListingFromSpecificAssetOnly", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async contractAddress => {
      const encoded = [];
      const members = await this.roles.get("asset");
      if (members.includes(ethers__WEBPACK_IMPORTED_MODULE_11__.AddressZero)) {
        encoded.push(this.encoder.encode("revokeRole", [(0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.bE)("asset"), ethers__WEBPACK_IMPORTED_MODULE_11__.AddressZero]));
      }
      encoded.push(this.encoder.encode("grantRole", [(0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.bE)("asset"), contractAddress]));
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "multicall",
        args: [encoded]
      });
    }));
    /**
     * Allow listings from any NFT contract
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "allowListingFromAnyAsset", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async () => {
      const encoded = [];
      const members = await this.roles.get("asset");
      for (const addr in members) {
        encoded.push(this.encoder.encode("revokeRole", [(0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.bE)("asset"), addr]));
      }
      encoded.push(this.encoder.encode("grantRole", [(0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.bE)("asset"), ethers__WEBPACK_IMPORTED_MODULE_11__.AddressZero]));
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "multicall",
        args: [encoded]
      });
    }));
    this._chainId = _chainId;
    this.abi = _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.e.parse(abi || []);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ag(this.contractWrapper, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dF, this.storage);
    this.app = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a$(this.contractWrapper, this.metadata, this.storage);
    this.roles = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ah(this.contractWrapper, Marketplace.contractRoles);
    this.encoder = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.af(this.contractWrapper);
    this.estimator = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aP(this.contractWrapper);
    this.direct = new _marketplace_auction_caf61074_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.M(this.contractWrapper, this.storage);
    this.auction = new _marketplace_auction_caf61074_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.a(this.contractWrapper, this.storage);
    this.events = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aQ(this.contractWrapper);
    this.platformFees = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aS(this.contractWrapper);
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
   * Convenience function to get either a direct or auction listing
   *
   * @param listingId - the listing id
   * @returns either a direct or auction listing
   *
   * @remarks Get a listing by its listing id
   * @example
   * ```javascript
   * const listingId = 0;
   * const listing = await contract.getListing(listingId);
   * ```
   */
  async getListing(listingId) {
    const listing = await this.contractWrapper.readContract.listings(listingId);
    if (listing.assetContract === ethers__WEBPACK_IMPORTED_MODULE_11__.AddressZero) {
      throw new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.bt(this.getAddress(), listingId.toString());
    }
    switch (listing.listingType) {
      case _marketplace_auction_caf61074_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.L.Auction:
        {
          return await this.auction.mapListing(listing);
        }
      case _marketplace_auction_caf61074_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.L.Direct:
        {
          return await this.direct.mapListing(listing);
        }
      default:
        {
          throw new Error(`Unknown listing type: ${listing.listingType}`);
        }
    }
  }

  /**
   * Get all active listings
   *
   * @remarks Fetch all the active listings from this marketplace contract. An active listing means it can be bought or bid on.
   * @example
   * ```javascript
   * const listings = await contract.getActiveListings();
   * const priceOfFirstActiveListing = listings[0].price;
   * ```
   * @param filter - optional filter parameters
   */
  async getActiveListings(filter) {
    const rawListings = await this.getAllListingsNoFilter(true);
    const filtered = this.applyFilter(rawListings, filter);
    const now = ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(Math.floor(Date.now() / 1000));
    return filtered.filter(l => {
      return l.type === _marketplace_auction_caf61074_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.L.Auction && ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(l.endTimeInEpochSeconds).gt(now) && ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(l.startTimeInEpochSeconds).lte(now) || l.type === _marketplace_auction_caf61074_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.L.Direct && l.quantity > 0;
    });
  }

  /**
   * Get all the listings
   *
   * @remarks Fetch all the listings from this marketplace contract, including sold ones.
   * @example
   * ```javascript
   * const listings = await contract.getAllListings();
   * const priceOfFirstListing = listings[0].price;
   * ```
   *
   * @param filter - optional filter parameters
   */
  async getAllListings(filter) {
    const rawListings = await this.getAllListingsNoFilter(false);
    return this.applyFilter(rawListings, filter);
  }
  /**
   * Get the total number of Listings
   * @returns the total number listings on the marketplace
   * @public
   */
  async getTotalCount() {
    return await this.contractWrapper.readContract.totalListings();
  }

  /**
   * Get whether listing is restricted only to addresses with the Lister role
   */
  async isRestrictedToListerRoleOnly() {
    const anyoneCanList = await this.contractWrapper.readContract.hasRole((0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.bE)("lister"), ethers__WEBPACK_IMPORTED_MODULE_11__.AddressZero);
    return !anyoneCanList;
  }

  /**
   * Get the buffer in basis points between offers
   */
  async getBidBufferBps() {
    return this.contractWrapper.readContract.bidBufferBps();
  }

  /**
   * get the buffer time in seconds between offers
   */
  async getTimeBufferInSeconds() {
    return this.contractWrapper.readContract.timeBuffer();
  }

  /**
   * Get all the offers for a listing
   *
   * @remarks Fetch all the offers for a specified direct or auction listing.
   * @example
   * ```javascript
   * const offers = await marketplaceContract.getOffers(listingId);
   * const firstOffer = offers[0];
   * ```
   *
   * @param listingId - the id of the listing to fetch offers for
   */
  async getOffers(listingId) {
    // get all new offer events from this contract
    const listingEvents = await this.events.getEvents("NewOffer", {
      order: "desc",
      filters: {
        listingId
      }
    });
    // derive the offers from the events
    return await Promise.all(listingEvents.map(async e => {
      return await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dt)(this.contractWrapper.getProvider(), ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(listingId), {
        quantityWanted: e.data.quantityWanted,
        pricePerToken: e.data.quantityWanted.gt(0) ? e.data.totalOfferAmount.div(e.data.quantityWanted) : e.data.totalOfferAmount,
        currency: e.data.currency,
        offeror: e.data.offeror
      });
    }));
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  async getAllListingsNoFilter(filterInvalidListings) {
    const listings = await Promise.all(Array.from(Array((await this.contractWrapper.readContract.totalListings()).toNumber()).keys()).map(async i => {
      let listing;
      try {
        listing = await this.getListing(i);
      } catch (err) {
        if (err instanceof _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.bt) {
          return undefined;
        } else {
          console.warn(`Failed to get listing ${i}' - skipping. Try 'marketplace.getListing(${i})' to get the underlying error.`);
          return undefined;
        }
      }
      if (listing.type === _marketplace_auction_caf61074_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.L.Auction) {
        return listing;
      }
      if (filterInvalidListings) {
        const {
          valid
        } = await this.direct.isStillValidListing(listing);
        if (!valid) {
          return undefined;
        }
      }
      return listing;
    }));
    return listings.filter(l => l !== undefined);
  }
  applyFilter(listings, filter) {
    let rawListings = [...listings];
    const start = ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(filter?.start || 0).toNumber();
    const count = ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(filter?.count || _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.c).toNumber();
    if (filter) {
      if (filter.seller) {
        rawListings = rawListings.filter(seller => seller.sellerAddress.toString().toLowerCase() === filter?.seller?.toString().toLowerCase());
      }
      if (filter.tokenContract) {
        rawListings = rawListings.filter(tokenContract => tokenContract.assetContractAddress.toString().toLowerCase() === filter?.tokenContract?.toString().toLowerCase());
      }
      if (filter.tokenId !== undefined) {
        rawListings = rawListings.filter(tokenContract => tokenContract.tokenId.toString() === filter?.tokenId?.toString());
      }
      rawListings = rawListings.filter((_, index) => index >= start);
      rawListings = rawListings.slice(0, count);
    }
    return rawListings;
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
(0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(Marketplace, "contractRoles", ["admin", "lister", "asset"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LW1hcmtldHBsYWNlLTRlYmE1YTdiLWJyb3dzZXItZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkc7QUFDb1g7QUFDN1Y7QUFDcEY7QUFDUDtBQUN4QjtBQUNGO0FBQ2lCO0FBQ29DO0FBQ1Q7QUFDUTtBQUNHO0FBQ0c7QUFDYjtBQUNNO0FBQ0U7QUFDSjtBQUNTO0FBQ0o7QUFDQztBQUNGO0FBQ0E7QUFDUDtBQUNVO0FBQ0o7QUFDSjtBQUNNO0FBQ0s7QUFDRztBQUNQO0FBQ0E7QUFDQztBQUNSO0FBQ007QUFDSztBQUNHO0FBQ2Y7QUFDVTtBQUNGO0FBQ0s7QUFDUDtBQUNQO0FBQ1U7QUFDRjtBQUNDO0FBQ1Q7QUFDTztBQUNGO0FBQ1U7QUFDVjtBQUNBO0FBQ0o7QUFDRDtBQUNRO0FBQ1A7QUFDUztBQUM5QztBQUNzQztBQUM5QjtBQUNWO0FBQ2dEO0FBQ3hDO0FBQ3FDO0FBQ3BEO0FBQ1E7QUFDRztBQUNrQztBQUNRO0FBQ0M7QUFDUTtBQUNsRDtBQUNaO0FBQytEO0FBQ0M7QUFDeEM7QUFDdUI7QUFDQzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0MsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csMEVBQWU7QUFDakgsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUFlLHdCQUF3Qiw4RUFBd0I7QUFDbkU7QUFDQTtBQUNBLGtCQUFrQiwwRUFBb0I7QUFDdEM7QUFDQTtBQUNBLGFBQWEsMkVBQVc7QUFDeEI7QUFDQSxZQUFZLDBEQUFTO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDJFQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLG9CQUFvQjtBQUNuRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUFlLG9CQUFvQiw4RUFBd0I7QUFDL0Q7QUFDQTtBQUNBLGtCQUFrQiwwRUFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyRUFBVztBQUN4QjtBQUNBLFlBQVksMERBQVM7QUFDckIsNEVBQTRFLDhFQUFhLHFCQUFxQiwwRUFBYTtBQUMzSDtBQUNBLGFBQWEsMkVBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msb0JBQW9CO0FBQ25FO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQWUsMEJBQTBCLDhFQUF3QjtBQUNyRTtBQUNBO0FBQ0EsYUFBYSwwRUFBVztBQUN4QjtBQUNBO0FBQ0EsMkJBQTJCLDhDQUFTO0FBQ3BDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQWUsaUNBQWlDLDhFQUF3QjtBQUM1RTtBQUNBO0FBQ0EsYUFBYSwwRUFBVztBQUN4QjtBQUNBO0FBQ0EsZUFBZSw4Q0FBUztBQUN4QixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUFlLDRDQUE0Qyw4RUFBd0I7QUFDdkY7QUFDQTtBQUNBLDJCQUEyQixnREFBcUI7QUFDaEQsd0RBQXdELDhFQUFXLFdBQVcsZ0RBQXFCO0FBQ25HO0FBQ0EscURBQXFELDhFQUFXO0FBQ2hFLGFBQWEsMEVBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUFlLG1DQUFtQyw4RUFBd0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDhFQUFXO0FBQ25FO0FBQ0EscURBQXFELDhFQUFXLFdBQVcsZ0RBQXFCO0FBQ2hHLGFBQWEsMEVBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLGVBQWUseUVBQVM7QUFDeEI7QUFDQTtBQUNBLHdCQUF3QiwwRUFBZ0IsdUJBQXVCLDBFQUF5QjtBQUN4RixtQkFBbUIsMEVBQWM7QUFDakMscUJBQXFCLDBFQUFhO0FBQ2xDLHVCQUF1QiwwRUFBZTtBQUN0Qyx5QkFBeUIsMEVBQWdCO0FBQ3pDLHNCQUFzQiwyRUFBaUI7QUFDdkMsdUJBQXVCLDJFQUFrQjtBQUN6QyxzQkFBc0IsMEVBQWM7QUFDcEMsNEJBQTRCLDBFQUFtQjtBQUMvQywyQkFBMkIsMEVBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0RBQXFCO0FBQ3ZELGdCQUFnQiwwRUFBb0I7QUFDcEM7QUFDQTtBQUNBLFdBQVcsMkVBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsV0FBVywyRUFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG9CQUFvQjtBQUN2RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBUztBQUN6QjtBQUNBLHdCQUF3QiwyRUFBVyxZQUFZLDhDQUFTLDBDQUEwQyw4Q0FBUyx3REFBd0QsMkVBQVc7QUFDOUssS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSw4RUFBVyxZQUFZLGdEQUFxQjtBQUN0SDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG1CQUFtQiw4RUFBUSxxQ0FBcUMsOENBQVM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsMkJBQTJCLDBFQUFvQjtBQUMvQztBQUNBLFVBQVU7QUFDVixVQUFVLE9BQU8sK0JBQStCLEVBQUUsNENBQTRDLEVBQUU7QUFDaEc7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJFQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBUztBQUMzQixrQkFBa0IsOENBQVMsdUJBQXVCLG1FQUF1QjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBFQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQWU7O0FBRVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3Nkay9kaXN0L21hcmtldHBsYWNlLTRlYmE1YTdiLmJyb3dzZXIuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5LCBjIGFzIERFRkFVTFRfUVVFUllfQUxMX0NPVU5UIH0gZnJvbSAnLi9RdWVyeVBhcmFtcy03ZDk0NzNiNS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBkeiBhcyBDb250cmFjdFdyYXBwZXIsIGRzIGFzIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbiwgZSBhcyBBYmlTY2hlbWEsIGFnIGFzIENvbnRyYWN0TWV0YWRhdGEsIGRGIGFzIE1hcmtldHBsYWNlQ29udHJhY3RTY2hlbWEsIGEkIGFzIENvbnRyYWN0QXBwVVJJLCBhaCBhcyBDb250cmFjdFJvbGVzLCBhZiBhcyBDb250cmFjdEVuY29kZXIsIGFQIGFzIEdhc0Nvc3RFc3RpbWF0b3IsIGFRIGFzIENvbnRyYWN0RXZlbnRzLCBhUyBhcyBDb250cmFjdFBsYXRmb3JtRmVlLCBhUiBhcyBDb250cmFjdEludGVyY2VwdG9yLCBidCBhcyBMaXN0aW5nTm90Rm91bmRFcnJvciwgYkUgYXMgZ2V0Um9sZUhhc2gsIGR0IGFzIG1hcE9mZmVyLCBhViBhcyBUcmFuc2FjdGlvbiwgYjUgYXMgaXNOYXRpdmVUb2tlbiwgY1kgYXMgTkFUSVZFX1RPS0VOUyB9IGZyb20gJy4vY29udHJhY3QtbWV0YWRhdGEtODhmMDZlZjkuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgTSBhcyBNYXJrZXRwbGFjZURpcmVjdCwgYSBhcyBNYXJrZXRwbGFjZUF1Y3Rpb24sIEwgYXMgTGlzdGluZ1R5cGUgfSBmcm9tICcuL21hcmtldHBsYWNlLWF1Y3Rpb24tY2FmNjEwNzQuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgY29uc3RhbnRzLCBCaWdOdW1iZXIgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgJ2JuLmpzJztcbmltcG9ydCAnem9kJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMjBfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyMFBlcm1pdC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU11bHRpY2FsbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzcyMV9WMy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFTdXBwbHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTGF6eU1pbnQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvTGF6eU1pbnRXaXRoVGllci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMTE1NV9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTVfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1RW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9FUkMyNzcxQ29udGV4dC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBcHBVUkkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ29udHJhY3RNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEaXJlY3RMaXN0aW5ncy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFbmdsaXNoQXVjdGlvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JT2ZmZXJzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBhY2tWUkZEaXJlY3QuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnNFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBsYXRmb3JtRmVlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVByaW1hcnlTYWxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVJveWFsdHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Pd25hYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFjY291bnRGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFjY291bnQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Db250cmFjdFB1Ymxpc2hlci5qc29uJztcbmltcG9ydCAnZXZlbnRlbWl0dGVyMyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Gb3J3YXJkZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvc3RvcmFnZSc7XG5pbXBvcnQgJ2Nyb3NzLWZldGNoJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lUaGlyZHdlYkNvbnRyYWN0Lmpzb24nO1xuaW1wb3J0ICdldGhlcnMvbGliL3V0aWxzLmpzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyME1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICd1dWlkJztcbmltcG9ydCAnbWVya2xldHJlZWpzJztcbmltcG9ydCAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxNjUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWxEZXByZWNhdGVkLmpzb24nO1xuaW1wb3J0ICdldGhlcnMvbGliL3V0aWxzJztcbmltcG9ydCAnYnM1OCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeUxvZ2ljLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvZ2VuZXJhdGVkLWFiaXMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdSZWdpc3RyeS5qc29uJztcblxuLyoqXG4gKiBDcmVhdGUgeW91ciBvd24gd2hpdGVsYWJlbCBtYXJrZXRwbGFjZSB0aGF0IGVuYWJsZXMgdXNlcnMgdG8gYnV5IGFuZCBzZWxsIGFueSBkaWdpdGFsIGFzc2V0cy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCI7XG4gKlxuICogY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKFwie3tjaGFpbk5hbWV9fVwiKTtcbiAqIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgc2RrLmdldENvbnRyYWN0KFwie3tjb250cmFjdF9hZGRyZXNzfX1cIiwgXCJtYXJrZXRwbGFjZVwiKTtcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgTWFya2V0cGxhY2Uge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIC8qKlxuICAgKiBEaXJlY3QgbGlzdGluZ3NcbiAgICogQHJlbWFya3MgQ3JlYXRlIGFuZCBtYW5hZ2UgZGlyZWN0IGxpc3RpbmdzIGluIHlvdXIgbWFya2V0cGxhY2UuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gRGF0YSBvZiB0aGUgbGlzdGluZyB5b3Ugd2FudCB0byBjcmVhdGVcbiAgICogY29uc3QgbGlzdGluZyA9IHtcbiAgICogICAvLyBhZGRyZXNzIG9mIHRoZSBORlQgY29udHJhY3QgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGxpc3QgaXMgb25cbiAgICogICBhc3NldENvbnRyYWN0QWRkcmVzczogXCIweC4uLlwiLFxuICAgKiAgIC8vIHRva2VuIElEIG9mIHRoZSBhc3NldCB5b3Ugd2FudCB0byBsaXN0XG4gICAqICAgdG9rZW5JZDogXCIwXCIsXG4gICAqICAvLyB3aGVuIHNob3VsZCB0aGUgbGlzdGluZyBvcGVuIHVwIGZvciBvZmZlcnNcbiAgICogICBzdGFydFRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICogICAvLyBob3cgbG9uZyB0aGUgbGlzdGluZyB3aWxsIGJlIG9wZW4gZm9yXG4gICAqICAgbGlzdGluZ0R1cmF0aW9uSW5TZWNvbmRzOiA4NjQwMCxcbiAgICogICAvLyBob3cgbWFueSBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gbGlzdFxuICAgKiAgIHF1YW50aXR5OiAxLFxuICAgKiAgIC8vIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IGNvbnRyYWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIHBheSBmb3IgdGhlIGxpc3RpbmdcbiAgICogICBjdXJyZW5jeUNvbnRyYWN0QWRkcmVzczogTkFUSVZFX1RPS0VOX0FERFJFU1MsXG4gICAqICAgLy8gaG93IG11Y2ggdGhlIGFzc2V0IHdpbGwgYmUgc29sZCBmb3JcbiAgICogICBidXlvdXRQcmljZVBlclRva2VuOiBcIjEuNVwiLFxuICAgKiB9XG4gICAqXG4gICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QuZGlyZWN0LmNyZWF0ZUxpc3RpbmcobGlzdGluZyk7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgKiBjb25zdCBsaXN0aW5nSWQgPSB0eC5pZDsgLy8gdGhlIGlkIG9mIHRoZSBuZXdseSBjcmVhdGVkIGxpc3RpbmdcbiAgICpcbiAgICogLy8gQW5kIG9uIHRoZSBidXllcnMgc2lkZTpcbiAgICogLy8gUXVhbnRpdHkgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGJ1eVxuICAgKiBjb25zdCBxdWFudGl0eURlc2lyZWQgPSAxO1xuICAgKiBhd2FpdCBjb250cmFjdC5kaXJlY3QuYnV5b3V0TGlzdGluZyhsaXN0aW5nSWQsIHF1YW50aXR5RGVzaXJlZCk7XG4gICAqIGBgYFxuICAgKi9cblxuICAvKipcbiAgICogQXVjdGlvbnNcbiAgICogQHJlbWFya3MgQ3JlYXRlIGFuZCBtYW5hZ2UgYXVjdGlvbnMgaW4geW91ciBtYXJrZXRwbGFjZS5cbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBEYXRhIG9mIHRoZSBhdWN0aW9uIHlvdSB3YW50IHRvIGNyZWF0ZVxuICAgKiBjb25zdCBhdWN0aW9uID0ge1xuICAgKiAgIC8vIGFkZHJlc3Mgb2YgdGhlIGNvbnRyYWN0IHRoZSBhc3NldCB5b3Ugd2FudCB0byBsaXN0IGlzIG9uXG4gICAqICAgYXNzZXRDb250cmFjdEFkZHJlc3M6IFwiMHguLi5cIixcbiAgICogICAvLyB0b2tlbiBJRCBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gbGlzdFxuICAgKiAgIHRva2VuSWQ6IFwiMFwiLFxuICAgKiAgLy8gd2hlbiBzaG91bGQgdGhlIGxpc3Rpbmcgb3BlbiB1cCBmb3Igb2ZmZXJzXG4gICAqICAgc3RhcnRUaW1lc3RhbXA6IG5ldyBEYXRlKCksXG4gICAqICAgLy8gaG93IGxvbmcgdGhlIGxpc3Rpbmcgd2lsbCBiZSBvcGVuIGZvclxuICAgKiAgIGxpc3RpbmdEdXJhdGlvbkluU2Vjb25kczogODY0MDAsXG4gICAqICAgLy8gaG93IG1hbnkgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGxpc3RcbiAgICogICBxdWFudGl0eTogMSxcbiAgICogICAvLyBhZGRyZXNzIG9mIHRoZSBjdXJyZW5jeSBjb250cmFjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBwYXkgZm9yIHRoZSBsaXN0aW5nXG4gICAqICAgY3VycmVuY3lDb250cmFjdEFkZHJlc3M6IE5BVElWRV9UT0tFTl9BRERSRVNTLFxuICAgKiAgIC8vIGhvdyBtdWNoIHBlb3BsZSB3b3VsZCBoYXZlIHRvIGJpZCB0byBpbnN0YW50bHkgYnV5IHRoZSBhc3NldFxuICAgKiAgIGJ1eW91dFByaWNlUGVyVG9rZW46IFwiMTBcIixcbiAgICogICAvLyB0aGUgbWluaW11bSBiaWQgdGhhdCB3aWxsIGJlIGFjY2VwdGVkIGZvciB0aGUgdG9rZW5cbiAgICogICByZXNlcnZlUHJpY2VQZXJUb2tlbjogXCIxLjVcIixcbiAgICogfVxuICAgKlxuICAgKiBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LmF1Y3Rpb24uY3JlYXRlTGlzdGluZyhhdWN0aW9uKTtcbiAgICogY29uc3QgcmVjZWlwdCA9IHR4LnJlY2VpcHQ7IC8vIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAqIGNvbnN0IGxpc3RpbmdJZCA9IHR4LmlkOyAvLyB0aGUgaWQgb2YgdGhlIG5ld2x5IGNyZWF0ZWQgbGlzdGluZ1xuICAgKlxuICAgKiAvLyBBbmQgb24gdGhlIGJ1eWVycyBzaWRlOlxuICAgKiAvLyBUaGUgcHJpY2UgeW91IGFyZSB3aWxsaW5nIHRvIGJpZCBmb3IgYSBzaW5nbGUgdG9rZW4gb2YgdGhlIGxpc3RpbmdcbiAgICogY29uc3QgcHJpY2VQZXJUb2tlbiA9IDIuNjtcbiAgICogYXdhaXQgY29udHJhY3QuYXVjdGlvbi5tYWtlQmlkKGxpc3RpbmdJZCwgcHJpY2VQZXJUb2tlbik7XG4gICAqIGBgYFxuICAgKi9cblxuICBnZXQgY2hhaW5JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhaW5JZDtcbiAgfVxuICBjb25zdHJ1Y3RvcihuZXR3b3JrLCBhZGRyZXNzLCBzdG9yYWdlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGxldCBhYmkgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgX2NoYWluSWQgPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY29udHJhY3RXcmFwcGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiBuZXcgQ29udHJhY3RXcmFwcGVyKG5ldHdvcmssIGFkZHJlc3MsIGFiaSwgb3B0aW9ucyk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWJpXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29udHJhY3RXcmFwcGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3RvcmFnZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuY29kZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJldmVudHNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlc3RpbWF0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwbGF0Zm9ybUZlZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXRhZGF0YVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFwcFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJvbGVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaW50ZXJjZXB0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkaXJlY3RcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhdWN0aW9uXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2NoYWluSWRcIiwgdm9pZCAwKTtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRBbGxcIiwgdGhpcy5nZXRBbGxMaXN0aW5ncyk7XG4gICAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIFdSSVRFIEZVTkNUSU9OU1xuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIC8qKlxuICAgICAqIFB1cmNoYXNlIE5GVHNcbiAgICAgKiBAcmVtYXJrcyBCdXkgYSBEaXJlY3Qgb3IgQXVjdGlvbiBsaXN0aW5nIG9uIHlvdXIgbWFya2V0cGxhY2UuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogLy8gVGhlIGxpc3RpbmcgSUQgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGJ1eVxuICAgICAqIGNvbnN0IGxpc3RpbmdJZCA9IDA7XG4gICAgICogLy8gUXVhbnRpdHkgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGJ1eVxuICAgICAqIGNvbnN0IHF1YW50aXR5RGVzaXJlZCA9IDE7XG4gICAgICpcbiAgICAgKiBhd2FpdCBjb250cmFjdC5idXlvdXRMaXN0aW5nKGxpc3RpbmdJZCwgcXVhbnRpdHlEZXNpcmVkKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gbGlzdGluZ0lkIC0gdGhlIGxpc3RpbmcgSUQgb2YgdGhlIGxpc3RpbmcgeW91IHdhbnQgdG8gYnV5XG4gICAgICogQHBhcmFtIHF1YW50aXR5RGVzaXJlZCAtIHRoZSBxdWFudGl0eSB0aGF0IHlvdSB3YW50IHRvIGJ1eSAoZm9yIEVSQzExNTUgdG9rZW5zKVxuICAgICAqIEBwYXJhbSByZWNlaXZlciAtIG9wdGlvbmFsIHJlY2VpdmVyIG9mIHRoZSBib3VnaHQgbGlzdGluZyBpZiBkaWZmZXJlbnQgZnJvbSB0aGUgY29ubmVjdGVkIHdhbGxldCAoZm9yIGRpcmVjdCBsaXN0aW5ncyBvbmx5KVxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ1eW91dExpc3RpbmdcIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIChsaXN0aW5nSWQsIHF1YW50aXR5RGVzaXJlZCwgcmVjZWl2ZXIpID0+IHtcbiAgICAgIGNvbnN0IGxpc3RpbmcgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QubGlzdGluZ3MobGlzdGluZ0lkKTtcbiAgICAgIGlmIChsaXN0aW5nLmxpc3RpbmdJZC50b1N0cmluZygpICE9PSBsaXN0aW5nSWQudG9TdHJpbmcoKSkge1xuICAgICAgICB0aHJvdyBuZXcgTGlzdGluZ05vdEZvdW5kRXJyb3IodGhpcy5nZXRBZGRyZXNzKCksIGxpc3RpbmdJZC50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAobGlzdGluZy5saXN0aW5nVHlwZSkge1xuICAgICAgICBjYXNlIExpc3RpbmdUeXBlLkRpcmVjdDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbnZhcmlhbnQocXVhbnRpdHlEZXNpcmVkICE9PSB1bmRlZmluZWQsIFwicXVhbnRpdHlEZXNpcmVkIGlzIHJlcXVpcmVkIHdoZW4gYnV5aW5nIG91dCBhIGRpcmVjdCBsaXN0aW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGlyZWN0LmJ1eW91dExpc3RpbmcucHJlcGFyZShsaXN0aW5nSWQsIHF1YW50aXR5RGVzaXJlZCwgcmVjZWl2ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBMaXN0aW5nVHlwZS5BdWN0aW9uOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF1Y3Rpb24uYnV5b3V0TGlzdGluZy5wcmVwYXJlKGxpc3RpbmdJZCk7XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IEVycm9yKGBVbmtub3duIGxpc3RpbmcgdHlwZTogJHtsaXN0aW5nLmxpc3RpbmdUeXBlfWApO1xuICAgICAgfVxuICAgIH0pKTtcbiAgICAvKipcbiAgICAgKiBNYWtlIGFuIG9mZmVyIGZvciBhIERpcmVjdCBvciBBdWN0aW9uIExpc3RpbmdcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIE1ha2UgYW4gb2ZmZXIgb24gYSBkaXJlY3Qgb3IgYXVjdGlvbiBsaXN0aW5nXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBUaGUgbGlzdGluZyBJRCBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gb2ZmZXIgb25cbiAgICAgKiBjb25zdCBsaXN0aW5nSWQgPSAwO1xuICAgICAqIC8vIFRoZSBwcmljZSB5b3UgYXJlIHdpbGxpbmcgdG8gb2ZmZXIgcGVyIHRva2VuXG4gICAgICogY29uc3QgcHJpY2VQZXJUb2tlbiA9IDAuNTtcbiAgICAgKiAvLyBUaGUgcXVhbnRpdHkgb2YgdG9rZW5zIHlvdSB3YW50IHRvIHJlY2VpdmUgZm9yIHRoaXMgb2ZmZXJcbiAgICAgKiBjb25zdCBxdWFudGl0eSA9IDE7XG4gICAgICpcbiAgICAgKiBhd2FpdCBjb250cmFjdC5tYWtlT2ZmZXIoXG4gICAgICogICBsaXN0aW5nSWQsXG4gICAgICogICBwcmljZVBlclRva2VuLFxuICAgICAqICAgcXVhbnRpdHksXG4gICAgICogKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtYWtlT2ZmZXJcIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIChsaXN0aW5nSWQsIHByaWNlUGVyVG9rZW4sIHF1YW50aXR5KSA9PiB7XG4gICAgICBjb25zdCBsaXN0aW5nID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0Lmxpc3RpbmdzKGxpc3RpbmdJZCk7XG4gICAgICBpZiAobGlzdGluZy5saXN0aW5nSWQudG9TdHJpbmcoKSAhPT0gbGlzdGluZ0lkLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IExpc3RpbmdOb3RGb3VuZEVycm9yKHRoaXMuZ2V0QWRkcmVzcygpLCBsaXN0aW5nSWQudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBjaGFpbklkID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0Q2hhaW5JRCgpO1xuICAgICAgc3dpdGNoIChsaXN0aW5nLmxpc3RpbmdUeXBlKSB7XG4gICAgICAgIGNhc2UgTGlzdGluZ1R5cGUuRGlyZWN0OlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGludmFyaWFudChxdWFudGl0eSwgXCJxdWFudGl0eSBpcyByZXF1aXJlZCB3aGVuIG1ha2luZyBhbiBvZmZlciBvbiBhIGRpcmVjdCBsaXN0aW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGlyZWN0Lm1ha2VPZmZlci5wcmVwYXJlKGxpc3RpbmdJZCwgcXVhbnRpdHksIGlzTmF0aXZlVG9rZW4obGlzdGluZy5jdXJyZW5jeSkgPyBOQVRJVkVfVE9LRU5TW2NoYWluSWRdLndyYXBwZWQuYWRkcmVzcyA6IGxpc3RpbmcuY3VycmVuY3ksIHByaWNlUGVyVG9rZW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBMaXN0aW5nVHlwZS5BdWN0aW9uOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF1Y3Rpb24ubWFrZUJpZC5wcmVwYXJlKGxpc3RpbmdJZCwgcHJpY2VQZXJUb2tlbik7XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IEVycm9yKGBVbmtub3duIGxpc3RpbmcgdHlwZTogJHtsaXN0aW5nLmxpc3RpbmdUeXBlfWApO1xuICAgICAgfVxuICAgIH0pKTtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIEF1Y3Rpb24gYmlkIGJ1ZmZlclxuICAgICAqIEByZW1hcmtzIEEgcGVyY2VudGFnZSAoZS5nLiA1JSkgaW4gYmFzaXMgcG9pbnRzICg1JSA9IDUwMCwgMTAwJSA9IDEwMDAwKS4gQSBuZXcgYmlkIGlzIGNvbnNpZGVyZWQgdG8gYmUgYSB3aW5uaW5nIGJpZCBvbmx5IGlmIGl0cyBiaWQgYW1vdW50IGlzIGF0IGxlYXN0IHRoZSBiaWQgYnVmZmVyIChlLmcuIDUlKSBncmVhdGVyIHRoYW4gdGhlIHByZXZpb3VzIHdpbm5pbmcgYmlkLiBUaGlzIHByZXZlbnRzIGJ1eWVycyBmcm9tIG1ha2luZyB2ZXJ5IHNsaWdodGx5IGhpZ2hlciBiaWRzIHRvIHdpbiB0aGUgYXVjdGlvbmVkIGl0ZW1zLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIHRoZSBiaWQgYnVmZmVyIGluIGJhc2lzIHBvaW50c1xuICAgICAqIGNvbnN0IGJ1ZmZlckJwcyA9IDVfMDA7IC8vIDUlXG4gICAgICogYXdhaXQgY29udHJhY3Quc2V0QmlkQnVmZmVyQnBzKGJ1ZmZlckJwcyk7XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIGJ1ZmZlckJwcyAtIHRoZSBicHMgdmFsdWVcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZXRCaWRCdWZmZXJCcHNcIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIGJ1ZmZlckJwcyA9PiB7XG4gICAgICBhd2FpdCB0aGlzLnJvbGVzLnZlcmlmeShbXCJhZG1pblwiXSwgYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0U2lnbmVyQWRkcmVzcygpKTtcbiAgICAgIGNvbnN0IHRpbWVCdWZmZXIgPSBhd2FpdCB0aGlzLmdldFRpbWVCdWZmZXJJblNlY29uZHMoKTtcbiAgICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgICAgbWV0aG9kOiBcInNldEF1Y3Rpb25CdWZmZXJzXCIsXG4gICAgICAgIGFyZ3M6IFt0aW1lQnVmZmVyLCBCaWdOdW1iZXIuZnJvbShidWZmZXJCcHMpXVxuICAgICAgfSk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgQXVjdGlvbiBUaW1lIGJ1ZmZlcjpcbiAgICAgKiBAcmVtYXJrcyBNZWFzdXJlZCBpbiBzZWNvbmRzIChlLmcuIDE1IG1pbnV0ZXMgb3IgOTAwIHNlY29uZHMpLiBJZiBhIHdpbm5pbmcgYmlkIGlzIG1hZGUgd2l0aGluIHRoZSBidWZmZXIgb2YgdGhlIGF1Y3Rpb24gY2xvc2luZyAoZS5nLiAxNSBtaW51dGVzIHdpdGhpbiB0aGUgYXVjdGlvbiBjbG9zaW5nKSwgdGhlIGF1Y3Rpb24ncyBjbG9zaW5nIHRpbWUgaXMgaW5jcmVhc2VkIGJ5IHRoZSBidWZmZXIgdG8gcHJldmVudCBidXllcnMgZnJvbSBtYWtpbmcgbGFzdCBtaW51dGUgd2lubmluZyBiaWRzLCBhbmQgdG8gZ2l2ZSB0aW1lIHRvIG90aGVyIGJ1eWVycyB0byBtYWtlIGEgaGlnaGVyIGJpZCBpZiB0aGV5IHdpc2ggdG8uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogLy8gdGhlIHRpbWUgYnVmZmVyIGluIHNlY29uZHNcbiAgICAgKiBjb25zdCBidWZmZXJJblNlY29uZHMgPSA2MDtcbiAgICAgKiBhd2FpdCBjb250cmFjdC5zZXRUaW1lQnVmZmVySW5TZWNvbmRzKGJ1ZmZlckluU2Vjb25kcyk7XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIGJ1ZmZlckluU2Vjb25kcyAtIHRoZSBzZWNvbmRzIHZhbHVlXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2V0VGltZUJ1ZmZlckluU2Vjb25kc1wiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgYnVmZmVySW5TZWNvbmRzID0+IHtcbiAgICAgIGF3YWl0IHRoaXMucm9sZXMudmVyaWZ5KFtcImFkbWluXCJdLCBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRTaWduZXJBZGRyZXNzKCkpO1xuICAgICAgY29uc3QgYmlkQnVmZmVyID0gYXdhaXQgdGhpcy5nZXRCaWRCdWZmZXJCcHMoKTtcbiAgICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgICAgbWV0aG9kOiBcInNldEF1Y3Rpb25CdWZmZXJzXCIsXG4gICAgICAgIGFyZ3M6IFtCaWdOdW1iZXIuZnJvbShidWZmZXJJblNlY29uZHMpLCBiaWRCdWZmZXJdXG4gICAgICB9KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogUmVzdHJpY3QgbGlzdGluZyBORlRzIG9ubHkgZnJvbSB0aGUgc3BlY2lmaWVkIE5GVCBjb250cmFjdCBhZGRyZXNzLlxuICAgICAqIEl0IGlzIHBvc3NpYmxlIHRvIGFsbG93IGxpc3RpbmcgZnJvbSBtdWx0aXBsZSBjb250cmFjdCBhZGRyZXNzZXMuXG4gICAgICogQHBhcmFtIGNvbnRyYWN0QWRkcmVzcyAtIHRoZSBORlQgY29udHJhY3QgYWRkcmVzc1xuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFsbG93TGlzdGluZ0Zyb21TcGVjaWZpY0Fzc2V0T25seVwiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgY29udHJhY3RBZGRyZXNzID0+IHtcbiAgICAgIGNvbnN0IGVuY29kZWQgPSBbXTtcbiAgICAgIGNvbnN0IG1lbWJlcnMgPSBhd2FpdCB0aGlzLnJvbGVzLmdldChcImFzc2V0XCIpO1xuICAgICAgaWYgKG1lbWJlcnMuaW5jbHVkZXMoY29uc3RhbnRzLkFkZHJlc3NaZXJvKSkge1xuICAgICAgICBlbmNvZGVkLnB1c2godGhpcy5lbmNvZGVyLmVuY29kZShcInJldm9rZVJvbGVcIiwgW2dldFJvbGVIYXNoKFwiYXNzZXRcIiksIGNvbnN0YW50cy5BZGRyZXNzWmVyb10pKTtcbiAgICAgIH1cbiAgICAgIGVuY29kZWQucHVzaCh0aGlzLmVuY29kZXIuZW5jb2RlKFwiZ3JhbnRSb2xlXCIsIFtnZXRSb2xlSGFzaChcImFzc2V0XCIpLCBjb250cmFjdEFkZHJlc3NdKSk7XG4gICAgICByZXR1cm4gVHJhbnNhY3Rpb24uZnJvbUNvbnRyYWN0V3JhcHBlcih7XG4gICAgICAgIGNvbnRyYWN0V3JhcHBlcjogdGhpcy5jb250cmFjdFdyYXBwZXIsXG4gICAgICAgIG1ldGhvZDogXCJtdWx0aWNhbGxcIixcbiAgICAgICAgYXJnczogW2VuY29kZWRdXG4gICAgICB9KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogQWxsb3cgbGlzdGluZ3MgZnJvbSBhbnkgTkZUIGNvbnRyYWN0XG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWxsb3dMaXN0aW5nRnJvbUFueUFzc2V0XCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBlbmNvZGVkID0gW107XG4gICAgICBjb25zdCBtZW1iZXJzID0gYXdhaXQgdGhpcy5yb2xlcy5nZXQoXCJhc3NldFwiKTtcbiAgICAgIGZvciAoY29uc3QgYWRkciBpbiBtZW1iZXJzKSB7XG4gICAgICAgIGVuY29kZWQucHVzaCh0aGlzLmVuY29kZXIuZW5jb2RlKFwicmV2b2tlUm9sZVwiLCBbZ2V0Um9sZUhhc2goXCJhc3NldFwiKSwgYWRkcl0pKTtcbiAgICAgIH1cbiAgICAgIGVuY29kZWQucHVzaCh0aGlzLmVuY29kZXIuZW5jb2RlKFwiZ3JhbnRSb2xlXCIsIFtnZXRSb2xlSGFzaChcImFzc2V0XCIpLCBjb25zdGFudHMuQWRkcmVzc1plcm9dKSk7XG4gICAgICByZXR1cm4gVHJhbnNhY3Rpb24uZnJvbUNvbnRyYWN0V3JhcHBlcih7XG4gICAgICAgIGNvbnRyYWN0V3JhcHBlcjogdGhpcy5jb250cmFjdFdyYXBwZXIsXG4gICAgICAgIG1ldGhvZDogXCJtdWx0aWNhbGxcIixcbiAgICAgICAgYXJnczogW2VuY29kZWRdXG4gICAgICB9KTtcbiAgICB9KSk7XG4gICAgdGhpcy5fY2hhaW5JZCA9IF9jaGFpbklkO1xuICAgIHRoaXMuYWJpID0gQWJpU2NoZW1hLnBhcnNlKGFiaSB8fCBbXSk7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIgPSBjb250cmFjdFdyYXBwZXI7XG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcbiAgICB0aGlzLm1ldGFkYXRhID0gbmV3IENvbnRyYWN0TWV0YWRhdGEodGhpcy5jb250cmFjdFdyYXBwZXIsIE1hcmtldHBsYWNlQ29udHJhY3RTY2hlbWEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5hcHAgPSBuZXcgQ29udHJhY3RBcHBVUkkodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMubWV0YWRhdGEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5yb2xlcyA9IG5ldyBDb250cmFjdFJvbGVzKHRoaXMuY29udHJhY3RXcmFwcGVyLCBNYXJrZXRwbGFjZS5jb250cmFjdFJvbGVzKTtcbiAgICB0aGlzLmVuY29kZXIgPSBuZXcgQ29udHJhY3RFbmNvZGVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmVzdGltYXRvciA9IG5ldyBHYXNDb3N0RXN0aW1hdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmRpcmVjdCA9IG5ldyBNYXJrZXRwbGFjZURpcmVjdCh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLmF1Y3Rpb24gPSBuZXcgTWFya2V0cGxhY2VBdWN0aW9uKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IENvbnRyYWN0RXZlbnRzKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLnBsYXRmb3JtRmVlcyA9IG5ldyBDb250cmFjdFBsYXRmb3JtRmVlKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmludGVyY2VwdG9yID0gbmV3IENvbnRyYWN0SW50ZXJjZXB0b3IodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICB9XG4gIG9uTmV0d29ya1VwZGF0ZWQobmV0d29yaykge1xuICAgIHRoaXMuY29udHJhY3RXcmFwcGVyLnVwZGF0ZVNpZ25lck9yUHJvdmlkZXIobmV0d29yayk7XG4gIH1cbiAgZ2V0QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3M7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFJFQUQgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBnZXQgZWl0aGVyIGEgZGlyZWN0IG9yIGF1Y3Rpb24gbGlzdGluZ1xuICAgKlxuICAgKiBAcGFyYW0gbGlzdGluZ0lkIC0gdGhlIGxpc3RpbmcgaWRcbiAgICogQHJldHVybnMgZWl0aGVyIGEgZGlyZWN0IG9yIGF1Y3Rpb24gbGlzdGluZ1xuICAgKlxuICAgKiBAcmVtYXJrcyBHZXQgYSBsaXN0aW5nIGJ5IGl0cyBsaXN0aW5nIGlkXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgbGlzdGluZ0lkID0gMDtcbiAgICogY29uc3QgbGlzdGluZyA9IGF3YWl0IGNvbnRyYWN0LmdldExpc3RpbmcobGlzdGluZ0lkKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBnZXRMaXN0aW5nKGxpc3RpbmdJZCkge1xuICAgIGNvbnN0IGxpc3RpbmcgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QubGlzdGluZ3MobGlzdGluZ0lkKTtcbiAgICBpZiAobGlzdGluZy5hc3NldENvbnRyYWN0ID09PSBjb25zdGFudHMuQWRkcmVzc1plcm8pIHtcbiAgICAgIHRocm93IG5ldyBMaXN0aW5nTm90Rm91bmRFcnJvcih0aGlzLmdldEFkZHJlc3MoKSwgbGlzdGluZ0lkLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGxpc3RpbmcubGlzdGluZ1R5cGUpIHtcbiAgICAgIGNhc2UgTGlzdGluZ1R5cGUuQXVjdGlvbjpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF1Y3Rpb24ubWFwTGlzdGluZyhsaXN0aW5nKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSBMaXN0aW5nVHlwZS5EaXJlY3Q6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kaXJlY3QubWFwTGlzdGluZyhsaXN0aW5nKTtcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBsaXN0aW5nIHR5cGU6ICR7bGlzdGluZy5saXN0aW5nVHlwZX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGFjdGl2ZSBsaXN0aW5nc1xuICAgKlxuICAgKiBAcmVtYXJrcyBGZXRjaCBhbGwgdGhlIGFjdGl2ZSBsaXN0aW5ncyBmcm9tIHRoaXMgbWFya2V0cGxhY2UgY29udHJhY3QuIEFuIGFjdGl2ZSBsaXN0aW5nIG1lYW5zIGl0IGNhbiBiZSBib3VnaHQgb3IgYmlkIG9uLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGxpc3RpbmdzID0gYXdhaXQgY29udHJhY3QuZ2V0QWN0aXZlTGlzdGluZ3MoKTtcbiAgICogY29uc3QgcHJpY2VPZkZpcnN0QWN0aXZlTGlzdGluZyA9IGxpc3RpbmdzWzBdLnByaWNlO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIGZpbHRlciAtIG9wdGlvbmFsIGZpbHRlciBwYXJhbWV0ZXJzXG4gICAqL1xuICBhc3luYyBnZXRBY3RpdmVMaXN0aW5ncyhmaWx0ZXIpIHtcbiAgICBjb25zdCByYXdMaXN0aW5ncyA9IGF3YWl0IHRoaXMuZ2V0QWxsTGlzdGluZ3NOb0ZpbHRlcih0cnVlKTtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMuYXBwbHlGaWx0ZXIocmF3TGlzdGluZ3MsIGZpbHRlcik7XG4gICAgY29uc3Qgbm93ID0gQmlnTnVtYmVyLmZyb20oTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkpO1xuICAgIHJldHVybiBmaWx0ZXJlZC5maWx0ZXIobCA9PiB7XG4gICAgICByZXR1cm4gbC50eXBlID09PSBMaXN0aW5nVHlwZS5BdWN0aW9uICYmIEJpZ051bWJlci5mcm9tKGwuZW5kVGltZUluRXBvY2hTZWNvbmRzKS5ndChub3cpICYmIEJpZ051bWJlci5mcm9tKGwuc3RhcnRUaW1lSW5FcG9jaFNlY29uZHMpLmx0ZShub3cpIHx8IGwudHlwZSA9PT0gTGlzdGluZ1R5cGUuRGlyZWN0ICYmIGwucXVhbnRpdHkgPiAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIGxpc3RpbmdzXG4gICAqXG4gICAqIEByZW1hcmtzIEZldGNoIGFsbCB0aGUgbGlzdGluZ3MgZnJvbSB0aGlzIG1hcmtldHBsYWNlIGNvbnRyYWN0LCBpbmNsdWRpbmcgc29sZCBvbmVzLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGxpc3RpbmdzID0gYXdhaXQgY29udHJhY3QuZ2V0QWxsTGlzdGluZ3MoKTtcbiAgICogY29uc3QgcHJpY2VPZkZpcnN0TGlzdGluZyA9IGxpc3RpbmdzWzBdLnByaWNlO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGZpbHRlciAtIG9wdGlvbmFsIGZpbHRlciBwYXJhbWV0ZXJzXG4gICAqL1xuICBhc3luYyBnZXRBbGxMaXN0aW5ncyhmaWx0ZXIpIHtcbiAgICBjb25zdCByYXdMaXN0aW5ncyA9IGF3YWl0IHRoaXMuZ2V0QWxsTGlzdGluZ3NOb0ZpbHRlcihmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlGaWx0ZXIocmF3TGlzdGluZ3MsIGZpbHRlcik7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgdG90YWwgbnVtYmVyIG9mIExpc3RpbmdzXG4gICAqIEByZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgbGlzdGluZ3Mgb24gdGhlIG1hcmtldHBsYWNlXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFzeW5jIGdldFRvdGFsQ291bnQoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC50b3RhbExpc3RpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgbGlzdGluZyBpcyByZXN0cmljdGVkIG9ubHkgdG8gYWRkcmVzc2VzIHdpdGggdGhlIExpc3RlciByb2xlXG4gICAqL1xuICBhc3luYyBpc1Jlc3RyaWN0ZWRUb0xpc3RlclJvbGVPbmx5KCkge1xuICAgIGNvbnN0IGFueW9uZUNhbkxpc3QgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuaGFzUm9sZShnZXRSb2xlSGFzaChcImxpc3RlclwiKSwgY29uc3RhbnRzLkFkZHJlc3NaZXJvKTtcbiAgICByZXR1cm4gIWFueW9uZUNhbkxpc3Q7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBidWZmZXIgaW4gYmFzaXMgcG9pbnRzIGJldHdlZW4gb2ZmZXJzXG4gICAqL1xuICBhc3luYyBnZXRCaWRCdWZmZXJCcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5iaWRCdWZmZXJCcHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgdGhlIGJ1ZmZlciB0aW1lIGluIHNlY29uZHMgYmV0d2VlbiBvZmZlcnNcbiAgICovXG4gIGFzeW5jIGdldFRpbWVCdWZmZXJJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC50aW1lQnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUgb2ZmZXJzIGZvciBhIGxpc3RpbmdcbiAgICpcbiAgICogQHJlbWFya3MgRmV0Y2ggYWxsIHRoZSBvZmZlcnMgZm9yIGEgc3BlY2lmaWVkIGRpcmVjdCBvciBhdWN0aW9uIGxpc3RpbmcuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3Qgb2ZmZXJzID0gYXdhaXQgbWFya2V0cGxhY2VDb250cmFjdC5nZXRPZmZlcnMobGlzdGluZ0lkKTtcbiAgICogY29uc3QgZmlyc3RPZmZlciA9IG9mZmVyc1swXTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBsaXN0aW5nSWQgLSB0aGUgaWQgb2YgdGhlIGxpc3RpbmcgdG8gZmV0Y2ggb2ZmZXJzIGZvclxuICAgKi9cbiAgYXN5bmMgZ2V0T2ZmZXJzKGxpc3RpbmdJZCkge1xuICAgIC8vIGdldCBhbGwgbmV3IG9mZmVyIGV2ZW50cyBmcm9tIHRoaXMgY29udHJhY3RcbiAgICBjb25zdCBsaXN0aW5nRXZlbnRzID0gYXdhaXQgdGhpcy5ldmVudHMuZ2V0RXZlbnRzKFwiTmV3T2ZmZXJcIiwge1xuICAgICAgb3JkZXI6IFwiZGVzY1wiLFxuICAgICAgZmlsdGVyczoge1xuICAgICAgICBsaXN0aW5nSWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBkZXJpdmUgdGhlIG9mZmVycyBmcm9tIHRoZSBldmVudHNcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwobGlzdGluZ0V2ZW50cy5tYXAoYXN5bmMgZSA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgbWFwT2ZmZXIodGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKSwgQmlnTnVtYmVyLmZyb20obGlzdGluZ0lkKSwge1xuICAgICAgICBxdWFudGl0eVdhbnRlZDogZS5kYXRhLnF1YW50aXR5V2FudGVkLFxuICAgICAgICBwcmljZVBlclRva2VuOiBlLmRhdGEucXVhbnRpdHlXYW50ZWQuZ3QoMCkgPyBlLmRhdGEudG90YWxPZmZlckFtb3VudC5kaXYoZS5kYXRhLnF1YW50aXR5V2FudGVkKSA6IGUuZGF0YS50b3RhbE9mZmVyQW1vdW50LFxuICAgICAgICBjdXJyZW5jeTogZS5kYXRhLmN1cnJlbmN5LFxuICAgICAgICBvZmZlcm9yOiBlLmRhdGEub2ZmZXJvclxuICAgICAgfSk7XG4gICAgfSkpO1xuICB9XG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUFJJVkFURSBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgYXN5bmMgZ2V0QWxsTGlzdGluZ3NOb0ZpbHRlcihmaWx0ZXJJbnZhbGlkTGlzdGluZ3MpIHtcbiAgICBjb25zdCBsaXN0aW5ncyA9IGF3YWl0IFByb21pc2UuYWxsKEFycmF5LmZyb20oQXJyYXkoKGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC50b3RhbExpc3RpbmdzKCkpLnRvTnVtYmVyKCkpLmtleXMoKSkubWFwKGFzeW5jIGkgPT4ge1xuICAgICAgbGV0IGxpc3Rpbmc7XG4gICAgICB0cnkge1xuICAgICAgICBsaXN0aW5nID0gYXdhaXQgdGhpcy5nZXRMaXN0aW5nKGkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBMaXN0aW5nTm90Rm91bmRFcnJvcikge1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBGYWlsZWQgdG8gZ2V0IGxpc3RpbmcgJHtpfScgLSBza2lwcGluZy4gVHJ5ICdtYXJrZXRwbGFjZS5nZXRMaXN0aW5nKCR7aX0pJyB0byBnZXQgdGhlIHVuZGVybHlpbmcgZXJyb3IuYCk7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGxpc3RpbmcudHlwZSA9PT0gTGlzdGluZ1R5cGUuQXVjdGlvbikge1xuICAgICAgICByZXR1cm4gbGlzdGluZztcbiAgICAgIH1cbiAgICAgIGlmIChmaWx0ZXJJbnZhbGlkTGlzdGluZ3MpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHZhbGlkXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLmRpcmVjdC5pc1N0aWxsVmFsaWRMaXN0aW5nKGxpc3RpbmcpO1xuICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3Rpbmc7XG4gICAgfSkpO1xuICAgIHJldHVybiBsaXN0aW5ncy5maWx0ZXIobCA9PiBsICE9PSB1bmRlZmluZWQpO1xuICB9XG4gIGFwcGx5RmlsdGVyKGxpc3RpbmdzLCBmaWx0ZXIpIHtcbiAgICBsZXQgcmF3TGlzdGluZ3MgPSBbLi4ubGlzdGluZ3NdO1xuICAgIGNvbnN0IHN0YXJ0ID0gQmlnTnVtYmVyLmZyb20oZmlsdGVyPy5zdGFydCB8fCAwKS50b051bWJlcigpO1xuICAgIGNvbnN0IGNvdW50ID0gQmlnTnVtYmVyLmZyb20oZmlsdGVyPy5jb3VudCB8fCBERUZBVUxUX1FVRVJZX0FMTF9DT1VOVCkudG9OdW1iZXIoKTtcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBpZiAoZmlsdGVyLnNlbGxlcikge1xuICAgICAgICByYXdMaXN0aW5ncyA9IHJhd0xpc3RpbmdzLmZpbHRlcihzZWxsZXIgPT4gc2VsbGVyLnNlbGxlckFkZHJlc3MudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09PSBmaWx0ZXI/LnNlbGxlcj8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmIChmaWx0ZXIudG9rZW5Db250cmFjdCkge1xuICAgICAgICByYXdMaXN0aW5ncyA9IHJhd0xpc3RpbmdzLmZpbHRlcih0b2tlbkNvbnRyYWN0ID0+IHRva2VuQ29udHJhY3QuYXNzZXRDb250cmFjdEFkZHJlc3MudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09PSBmaWx0ZXI/LnRva2VuQ29udHJhY3Q/LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyLnRva2VuSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByYXdMaXN0aW5ncyA9IHJhd0xpc3RpbmdzLmZpbHRlcih0b2tlbkNvbnRyYWN0ID0+IHRva2VuQ29udHJhY3QudG9rZW5JZC50b1N0cmluZygpID09PSBmaWx0ZXI/LnRva2VuSWQ/LnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgICAgcmF3TGlzdGluZ3MgPSByYXdMaXN0aW5ncy5maWx0ZXIoKF8sIGluZGV4KSA9PiBpbmRleCA+PSBzdGFydCk7XG4gICAgICByYXdMaXN0aW5ncyA9IHJhd0xpc3RpbmdzLnNsaWNlKDAsIGNvdW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHJhd0xpc3RpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgcHJlcGFyZShtZXRob2QsIGFyZ3MsIG92ZXJyaWRlcykge1xuICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgIGNvbnRyYWN0V3JhcHBlcjogdGhpcy5jb250cmFjdFdyYXBwZXIsXG4gICAgICBtZXRob2QsXG4gICAgICBhcmdzLFxuICAgICAgb3ZlcnJpZGVzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBjYWxsKGZ1bmN0aW9uTmFtZSwgYXJncywgb3ZlcnJpZGVzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLmNhbGwoZnVuY3Rpb25OYW1lLCBhcmdzLCBvdmVycmlkZXMpO1xuICB9XG59XG5fZGVmaW5lUHJvcGVydHkoTWFya2V0cGxhY2UsIFwiY29udHJhY3RSb2xlc1wiLCBbXCJhZG1pblwiLCBcImxpc3RlclwiLCBcImFzc2V0XCJdKTtcblxuZXhwb3J0IHsgTWFya2V0cGxhY2UgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==