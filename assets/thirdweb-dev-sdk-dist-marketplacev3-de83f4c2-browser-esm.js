"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_marketplacev3-de83f4c2_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/marketplacev3-de83f4c2.browser.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/marketplacev3-de83f4c2.browser.esm.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketplaceV3: () => (/* binding */ MarketplaceV3)
/* harmony export */ });
/* harmony import */ var _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./QueryParams-7d9473b5.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-7d9473b5.browser.esm.js");
/* harmony import */ var _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contract-metadata-88f06ef9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/contract-metadata-88f06ef9.browser.esm.js");
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
class MarketplaceV3 {
  /**
   * @internal
   */

  /**
   * Direct listings
   * @remarks Create and manage direct listings in your marketplace.
   * ```javascript
   * // Data of the listing you want to create
   * const listing = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // The price to pay per unit of NFTs listed.
   *   pricePerToken: 1.5,
   *   // when should the listing open up for offers
   *   startTimestamp: new Date(Date.now()),
   *   // how long the listing will be open for
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   *   // Whether the listing is reserved for a specific set of buyers.
   *   isReservedListing: false
   * }
   *
   * const tx = await contract.directListings.createListing(listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created listing
   *
   * // And on the buyers side:
   * // The ID of the listing you want to buy from
   * const listingId = 0;
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   *
   * await contract.directListings.buyFromListing(listingId, quantityDesired);
   * ```
   */
  get directListings() {
    return (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b_)(this.detectDirectListings(), _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dG);
  }
  /**
   * Auctions
   * @remarks Create and manage auctions in your marketplace.
   * @example
   * ```javascript
   * // Data of the auction you want to create
   * const auction = {
   *   // address of the contract of the asset you want to auction
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to auction
   *   tokenId: "0",
   *   // how many of the asset you want to auction
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the auctioned tokens
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // the minimum bid that will be accepted for the token
   *   minimumBidAmount: "1.5",
   *   // how much people would have to bid to instantly buy the asset
   *   buyoutBidAmount: "10",
   *   // If a bid is made less than these many seconds before expiration, the expiration time is increased by this.
   *   timeBufferInSeconds: "1000",
   *   // A bid must be at least this much bps greater than the current winning bid
   *   bidBufferBps: "100", // 100 bps stands for 1%
   *   // when should the auction open up for bidding
   *   startTimestamp: new Date(Date.now()),
   *   // end time of auction
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   * }
   *
   * const tx = await contract.englishAuctions.createAuction(auction);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created auction
   *
   * // And on the buyers side:
   * // The auction ID of the asset you want to bid on
   * const auctionId = 0;
   * // The total amount you are willing to bid for auctioned tokens
   * const bidAmount = 1;
   *
   * await contract.englishAuctions.makeBid(auctionId, bidAmount);
   * ```
   */
  get englishAuctions() {
    return (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b_)(this.detectEnglishAuctions(), _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dH);
  }

  /**
   * Offers
   * @remarks Make and manage offers.
   * @example
   * ```javascript
   * // Data of the offer you want to make
   * const offer = {
   *   // address of the contract the asset you want to make an offer for
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to buy
   *   tokenId: "0",
   *   // how many of the asset you want to buy
   *   quantity: 1,
   *   // address of the currency contract that you offer to pay in
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // Total price you offer to pay for the mentioned token(s)
   *   totalPrice: "1.5",
   *   // Offer valid until
   *   endTimestamp: new Date(),
   * }
   *
   * const tx = await contract.offers.makeOffer(offer);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created offer
   *
   * // And on the seller's side:
   * // The ID of the offer you want to accept
   * const offerId = 0;
   * await contract.offers.acceptOffer(offerId);
   * ```
   */
  get offers() {
    return (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b_)(this.detectOffers(), _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dI);
  }
  get chainId() {
    return this._chainId;
  }
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
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
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "_chainId", void 0);
    this._chainId = chainId;
    this.abi = _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.e.parse(abi || []);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ag(this.contractWrapper, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dF, this.storage);
    this.app = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a$(this.contractWrapper, this.metadata, this.storage);
    this.roles = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ah(this.contractWrapper, MarketplaceV3.contractRoles);
    this.encoder = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.af(this.contractWrapper);
    this.estimator = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aP(this.contractWrapper);
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

  /** ********************
   * FEATURE DETECTION
   * ********************/

  detectDirectListings() {
    if ((0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b$)(this.contractWrapper, "DirectListings")) {
      return new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aM(this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectEnglishAuctions() {
    if ((0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b$)(this.contractWrapper, "EnglishAuctions")) {
      return new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aN(this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectOffers() {
    if ((0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b$)(this.contractWrapper, "Offers")) {
      return new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aO(this.contractWrapper, this.storage);
    }
    return undefined;
  }
}
(0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(MarketplaceV3, "contractRoles", ["admin", "lister", "asset"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LW1hcmtldHBsYWNldjMtZGU4M2Y0YzItYnJvd3Nlci1lc20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZFO0FBQ2tmO0FBQ2hqQjtBQUNDO0FBQ0g7QUFDaUI7QUFDb0M7QUFDVDtBQUNRO0FBQ0c7QUFDRztBQUNiO0FBQ007QUFDRTtBQUNKO0FBQ1M7QUFDSjtBQUNDO0FBQ0Y7QUFDQTtBQUNQO0FBQ1U7QUFDSjtBQUNKO0FBQ007QUFDSztBQUNHO0FBQ1A7QUFDQTtBQUNDO0FBQ1I7QUFDTTtBQUNLO0FBQ0c7QUFDZjtBQUNVO0FBQ0Y7QUFDSztBQUNQO0FBQ1A7QUFDVTtBQUNGO0FBQ0M7QUFDVDtBQUNPO0FBQ0Y7QUFDVTtBQUNWO0FBQ0E7QUFDSjtBQUNEO0FBQ1E7QUFDUDtBQUNwQztBQUM2QztBQUM5QztBQUNzQztBQUM5QjtBQUNWO0FBQ2dEO0FBQ3hDO0FBQ3FDO0FBQ3BEO0FBQ1E7QUFDRztBQUNrQztBQUNRO0FBQ0M7QUFDUTtBQUNsRDtBQUNaO0FBQytEO0FBQ0M7QUFDeEM7QUFDdUI7QUFDQzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0MsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4RUFBYSw4QkFBOEIsMEVBQXVCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4RUFBYSwrQkFBK0IsMEVBQXdCO0FBQy9FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4RUFBYSxzQkFBc0IsMEVBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRywwRUFBZTtBQUNqSCxJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQjtBQUNBLGVBQWUseUVBQVM7QUFDeEI7QUFDQTtBQUNBLHdCQUF3QiwwRUFBZ0IsdUJBQXVCLDBFQUF5QjtBQUN4RixtQkFBbUIsMEVBQWM7QUFDakMscUJBQXFCLDBFQUFhO0FBQ2xDLHVCQUF1QiwwRUFBZTtBQUN0Qyx5QkFBeUIsMEVBQWdCO0FBQ3pDLHNCQUFzQiwwRUFBYztBQUNwQyw0QkFBNEIsMEVBQW1CO0FBQy9DLDJCQUEyQiwwRUFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBFQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDhFQUFxQjtBQUM3QixpQkFBaUIsMEVBQTJCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4RUFBcUI7QUFDN0IsaUJBQWlCLDBFQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOEVBQXFCO0FBQzdCLGlCQUFpQiwwRUFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBZTs7QUFFVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvc2RrL2Rpc3QvbWFya2V0cGxhY2V2My1kZTgzZjRjMi5icm93c2VyLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSB9IGZyb20gJy4vUXVlcnlQYXJhbXMtN2Q5NDczYjUuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgYl8gYXMgYXNzZXJ0RW5hYmxlZCwgZEcgYXMgRkVBVFVSRV9ESVJFQ1RfTElTVElOR1MsIGRIIGFzIEZFQVRVUkVfRU5HTElTSF9BVUNUSU9OUywgZEkgYXMgRkVBVFVSRV9PRkZFUlMsIGR6IGFzIENvbnRyYWN0V3JhcHBlciwgZSBhcyBBYmlTY2hlbWEsIGFnIGFzIENvbnRyYWN0TWV0YWRhdGEsIGRGIGFzIE1hcmtldHBsYWNlQ29udHJhY3RTY2hlbWEsIGEkIGFzIENvbnRyYWN0QXBwVVJJLCBhaCBhcyBDb250cmFjdFJvbGVzLCBhZiBhcyBDb250cmFjdEVuY29kZXIsIGFQIGFzIEdhc0Nvc3RFc3RpbWF0b3IsIGFRIGFzIENvbnRyYWN0RXZlbnRzLCBhUyBhcyBDb250cmFjdFBsYXRmb3JtRmVlLCBhUiBhcyBDb250cmFjdEludGVyY2VwdG9yLCBhViBhcyBUcmFuc2FjdGlvbiwgYiQgYXMgZGV0ZWN0Q29udHJhY3RGZWF0dXJlLCBhTSBhcyBNYXJrZXRwbGFjZVYzRGlyZWN0TGlzdGluZ3MsIGFOIGFzIE1hcmtldHBsYWNlVjNFbmdsaXNoQXVjdGlvbnMsIGFPIGFzIE1hcmtldHBsYWNlVjNPZmZlcnMgfSBmcm9tICcuL2NvbnRyYWN0LW1ldGFkYXRhLTg4ZjA2ZWY5LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAnYm4uanMnO1xuaW1wb3J0ICdldGhlcnMnO1xuaW1wb3J0ICd6b2QnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NoYWlucyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMyMF9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwUGVybWl0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTXVsdGljYWxsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDNzIxX1YzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMVN1cHBseS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lMYXp5TWludC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjFfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9MYXp5TWludFdpdGhUaWVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMxMTU1X1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0VSQzI3NzFDb250ZXh0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFwcFVSSS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDb250cmFjdE1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURpcmVjdExpc3RpbmdzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVuZ2xpc2hBdWN0aW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lPZmZlcnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGFja1ZSRkRpcmVjdC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9uc0VudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGxhdGZvcm1GZWUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUHJpbWFyeVNhbGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUm95YWx0eS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL093bmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQWNjb3VudEZhY3RvcnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQWNjb3VudC5qc29uJztcbmltcG9ydCAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvQ29udHJhY3RQdWJsaXNoZXIuanNvbic7XG5pbXBvcnQgJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRm9yd2FyZGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L3N0b3JhZ2UnO1xuaW1wb3J0ICdjcm9zcy1mZXRjaCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JVGhpcmR3ZWJDb250cmFjdC5qc29uJztcbmltcG9ydCAnZXRoZXJzL2xpYi91dGlscy5qcyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjBNZXRhZGF0YS5qc29uJztcbmltcG9ydCAndXVpZCc7XG5pbXBvcnQgJ21lcmtsZXRyZWVqcyc7XG5pbXBvcnQgJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTY1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsRGVwcmVjYXRlZC5qc29uJztcbmltcG9ydCAnZXRoZXJzL2xpYi91dGlscyc7XG5pbXBvcnQgJ2JzNTgnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlMb2dpYy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5Um91dGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2dlbmVyYXRlZC1hYmlzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXRmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXUmVnaXN0cnkuanNvbic7XG5cbi8qKlxuICogQ3JlYXRlIHlvdXIgb3duIHdoaXRlbGFiZWwgbWFya2V0cGxhY2UgdGhhdCBlbmFibGVzIHVzZXJzIHRvIGJ1eSBhbmQgc2VsbCBhbnkgZGlnaXRhbCBhc3NldHMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyBUaGlyZHdlYlNESyB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3Nka1wiO1xuICpcbiAqIGNvbnN0IHNkayA9IG5ldyBUaGlyZHdlYlNESyhcInt7Y2hhaW5OYW1lfX1cIik7XG4gKiBjb25zdCBjb250cmFjdCA9IGF3YWl0IHNkay5nZXRDb250cmFjdChcInt7Y29udHJhY3RfYWRkcmVzc319XCIsIFwibWFya2V0cGxhY2VcIik7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIE1hcmtldHBsYWNlVjMge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIC8qKlxuICAgKiBEaXJlY3QgbGlzdGluZ3NcbiAgICogQHJlbWFya3MgQ3JlYXRlIGFuZCBtYW5hZ2UgZGlyZWN0IGxpc3RpbmdzIGluIHlvdXIgbWFya2V0cGxhY2UuXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gRGF0YSBvZiB0aGUgbGlzdGluZyB5b3Ugd2FudCB0byBjcmVhdGVcbiAgICogY29uc3QgbGlzdGluZyA9IHtcbiAgICogICAvLyBhZGRyZXNzIG9mIHRoZSBjb250cmFjdCB0aGUgYXNzZXQgeW91IHdhbnQgdG8gbGlzdCBpcyBvblxuICAgKiAgIGFzc2V0Q29udHJhY3RBZGRyZXNzOiBcIjB4Li4uXCIsXG4gICAqICAgLy8gdG9rZW4gSUQgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGxpc3RcbiAgICogICB0b2tlbklkOiBcIjBcIixcbiAgICogICAvLyBob3cgbWFueSBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gbGlzdFxuICAgKiAgIHF1YW50aXR5OiAxLFxuICAgKiAgIC8vIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IGNvbnRyYWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIHBheSBmb3IgdGhlIGxpc3RpbmdcbiAgICogICBjdXJyZW5jeUNvbnRyYWN0QWRkcmVzczogTkFUSVZFX1RPS0VOX0FERFJFU1MsXG4gICAqICAgLy8gVGhlIHByaWNlIHRvIHBheSBwZXIgdW5pdCBvZiBORlRzIGxpc3RlZC5cbiAgICogICBwcmljZVBlclRva2VuOiAxLjUsXG4gICAqICAgLy8gd2hlbiBzaG91bGQgdGhlIGxpc3Rpbmcgb3BlbiB1cCBmb3Igb2ZmZXJzXG4gICAqICAgc3RhcnRUaW1lc3RhbXA6IG5ldyBEYXRlKERhdGUubm93KCkpLFxuICAgKiAgIC8vIGhvdyBsb25nIHRoZSBsaXN0aW5nIHdpbGwgYmUgb3BlbiBmb3JcbiAgICogICBlbmRUaW1lc3RhbXA6IG5ldyBEYXRlKERhdGUubm93KCkgKyA1ICogMjQgKiA2MCAqIDYwICogMTAwMCksXG4gICAqICAgLy8gV2hldGhlciB0aGUgbGlzdGluZyBpcyByZXNlcnZlZCBmb3IgYSBzcGVjaWZpYyBzZXQgb2YgYnV5ZXJzLlxuICAgKiAgIGlzUmVzZXJ2ZWRMaXN0aW5nOiBmYWxzZVxuICAgKiB9XG4gICAqXG4gICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QuZGlyZWN0TGlzdGluZ3MuY3JlYXRlTGlzdGluZyhsaXN0aW5nKTtcbiAgICogY29uc3QgcmVjZWlwdCA9IHR4LnJlY2VpcHQ7IC8vIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAqIGNvbnN0IGlkID0gdHguaWQ7IC8vIHRoZSBpZCBvZiB0aGUgbmV3bHkgY3JlYXRlZCBsaXN0aW5nXG4gICAqXG4gICAqIC8vIEFuZCBvbiB0aGUgYnV5ZXJzIHNpZGU6XG4gICAqIC8vIFRoZSBJRCBvZiB0aGUgbGlzdGluZyB5b3Ugd2FudCB0byBidXkgZnJvbVxuICAgKiBjb25zdCBsaXN0aW5nSWQgPSAwO1xuICAgKiAvLyBRdWFudGl0eSBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYnV5XG4gICAqIGNvbnN0IHF1YW50aXR5RGVzaXJlZCA9IDE7XG4gICAqXG4gICAqIGF3YWl0IGNvbnRyYWN0LmRpcmVjdExpc3RpbmdzLmJ1eUZyb21MaXN0aW5nKGxpc3RpbmdJZCwgcXVhbnRpdHlEZXNpcmVkKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQgZGlyZWN0TGlzdGluZ3MoKSB7XG4gICAgcmV0dXJuIGFzc2VydEVuYWJsZWQodGhpcy5kZXRlY3REaXJlY3RMaXN0aW5ncygpLCBGRUFUVVJFX0RJUkVDVF9MSVNUSU5HUyk7XG4gIH1cbiAgLyoqXG4gICAqIEF1Y3Rpb25zXG4gICAqIEByZW1hcmtzIENyZWF0ZSBhbmQgbWFuYWdlIGF1Y3Rpb25zIGluIHlvdXIgbWFya2V0cGxhY2UuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gRGF0YSBvZiB0aGUgYXVjdGlvbiB5b3Ugd2FudCB0byBjcmVhdGVcbiAgICogY29uc3QgYXVjdGlvbiA9IHtcbiAgICogICAvLyBhZGRyZXNzIG9mIHRoZSBjb250cmFjdCBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYXVjdGlvblxuICAgKiAgIGFzc2V0Q29udHJhY3RBZGRyZXNzOiBcIjB4Li4uXCIsXG4gICAqICAgLy8gdG9rZW4gSUQgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGF1Y3Rpb25cbiAgICogICB0b2tlbklkOiBcIjBcIixcbiAgICogICAvLyBob3cgbWFueSBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYXVjdGlvblxuICAgKiAgIHF1YW50aXR5OiAxLFxuICAgKiAgIC8vIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IGNvbnRyYWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIHBheSBmb3IgdGhlIGF1Y3Rpb25lZCB0b2tlbnNcbiAgICogICBjdXJyZW5jeUNvbnRyYWN0QWRkcmVzczogTkFUSVZFX1RPS0VOX0FERFJFU1MsXG4gICAqICAgLy8gdGhlIG1pbmltdW0gYmlkIHRoYXQgd2lsbCBiZSBhY2NlcHRlZCBmb3IgdGhlIHRva2VuXG4gICAqICAgbWluaW11bUJpZEFtb3VudDogXCIxLjVcIixcbiAgICogICAvLyBob3cgbXVjaCBwZW9wbGUgd291bGQgaGF2ZSB0byBiaWQgdG8gaW5zdGFudGx5IGJ1eSB0aGUgYXNzZXRcbiAgICogICBidXlvdXRCaWRBbW91bnQ6IFwiMTBcIixcbiAgICogICAvLyBJZiBhIGJpZCBpcyBtYWRlIGxlc3MgdGhhbiB0aGVzZSBtYW55IHNlY29uZHMgYmVmb3JlIGV4cGlyYXRpb24sIHRoZSBleHBpcmF0aW9uIHRpbWUgaXMgaW5jcmVhc2VkIGJ5IHRoaXMuXG4gICAqICAgdGltZUJ1ZmZlckluU2Vjb25kczogXCIxMDAwXCIsXG4gICAqICAgLy8gQSBiaWQgbXVzdCBiZSBhdCBsZWFzdCB0aGlzIG11Y2ggYnBzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCB3aW5uaW5nIGJpZFxuICAgKiAgIGJpZEJ1ZmZlckJwczogXCIxMDBcIiwgLy8gMTAwIGJwcyBzdGFuZHMgZm9yIDElXG4gICAqICAgLy8gd2hlbiBzaG91bGQgdGhlIGF1Y3Rpb24gb3BlbiB1cCBmb3IgYmlkZGluZ1xuICAgKiAgIHN0YXJ0VGltZXN0YW1wOiBuZXcgRGF0ZShEYXRlLm5vdygpKSxcbiAgICogICAvLyBlbmQgdGltZSBvZiBhdWN0aW9uXG4gICAqICAgZW5kVGltZXN0YW1wOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgNSAqIDI0ICogNjAgKiA2MCAqIDEwMDApLFxuICAgKiB9XG4gICAqXG4gICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QuZW5nbGlzaEF1Y3Rpb25zLmNyZWF0ZUF1Y3Rpb24oYXVjdGlvbik7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgKiBjb25zdCBpZCA9IHR4LmlkOyAvLyB0aGUgaWQgb2YgdGhlIG5ld2x5IGNyZWF0ZWQgYXVjdGlvblxuICAgKlxuICAgKiAvLyBBbmQgb24gdGhlIGJ1eWVycyBzaWRlOlxuICAgKiAvLyBUaGUgYXVjdGlvbiBJRCBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYmlkIG9uXG4gICAqIGNvbnN0IGF1Y3Rpb25JZCA9IDA7XG4gICAqIC8vIFRoZSB0b3RhbCBhbW91bnQgeW91IGFyZSB3aWxsaW5nIHRvIGJpZCBmb3IgYXVjdGlvbmVkIHRva2Vuc1xuICAgKiBjb25zdCBiaWRBbW91bnQgPSAxO1xuICAgKlxuICAgKiBhd2FpdCBjb250cmFjdC5lbmdsaXNoQXVjdGlvbnMubWFrZUJpZChhdWN0aW9uSWQsIGJpZEFtb3VudCk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0IGVuZ2xpc2hBdWN0aW9ucygpIHtcbiAgICByZXR1cm4gYXNzZXJ0RW5hYmxlZCh0aGlzLmRldGVjdEVuZ2xpc2hBdWN0aW9ucygpLCBGRUFUVVJFX0VOR0xJU0hfQVVDVElPTlMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9mZmVyc1xuICAgKiBAcmVtYXJrcyBNYWtlIGFuZCBtYW5hZ2Ugb2ZmZXJzLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIERhdGEgb2YgdGhlIG9mZmVyIHlvdSB3YW50IHRvIG1ha2VcbiAgICogY29uc3Qgb2ZmZXIgPSB7XG4gICAqICAgLy8gYWRkcmVzcyBvZiB0aGUgY29udHJhY3QgdGhlIGFzc2V0IHlvdSB3YW50IHRvIG1ha2UgYW4gb2ZmZXIgZm9yXG4gICAqICAgYXNzZXRDb250cmFjdEFkZHJlc3M6IFwiMHguLi5cIixcbiAgICogICAvLyB0b2tlbiBJRCBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYnV5XG4gICAqICAgdG9rZW5JZDogXCIwXCIsXG4gICAqICAgLy8gaG93IG1hbnkgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGJ1eVxuICAgKiAgIHF1YW50aXR5OiAxLFxuICAgKiAgIC8vIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IGNvbnRyYWN0IHRoYXQgeW91IG9mZmVyIHRvIHBheSBpblxuICAgKiAgIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzOiBOQVRJVkVfVE9LRU5fQUREUkVTUyxcbiAgICogICAvLyBUb3RhbCBwcmljZSB5b3Ugb2ZmZXIgdG8gcGF5IGZvciB0aGUgbWVudGlvbmVkIHRva2VuKHMpXG4gICAqICAgdG90YWxQcmljZTogXCIxLjVcIixcbiAgICogICAvLyBPZmZlciB2YWxpZCB1bnRpbFxuICAgKiAgIGVuZFRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICogfVxuICAgKlxuICAgKiBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0Lm9mZmVycy5tYWtlT2ZmZXIob2ZmZXIpO1xuICAgKiBjb25zdCByZWNlaXB0ID0gdHgucmVjZWlwdDsgLy8gdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICogY29uc3QgaWQgPSB0eC5pZDsgLy8gdGhlIGlkIG9mIHRoZSBuZXdseSBjcmVhdGVkIG9mZmVyXG4gICAqXG4gICAqIC8vIEFuZCBvbiB0aGUgc2VsbGVyJ3Mgc2lkZTpcbiAgICogLy8gVGhlIElEIG9mIHRoZSBvZmZlciB5b3Ugd2FudCB0byBhY2NlcHRcbiAgICogY29uc3Qgb2ZmZXJJZCA9IDA7XG4gICAqIGF3YWl0IGNvbnRyYWN0Lm9mZmVycy5hY2NlcHRPZmZlcihvZmZlcklkKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQgb2ZmZXJzKCkge1xuICAgIHJldHVybiBhc3NlcnRFbmFibGVkKHRoaXMuZGV0ZWN0T2ZmZXJzKCksIEZFQVRVUkVfT0ZGRVJTKTtcbiAgfVxuICBnZXQgY2hhaW5JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhaW5JZDtcbiAgfVxuICBjb25zdHJ1Y3RvcihuZXR3b3JrLCBhZGRyZXNzLCBzdG9yYWdlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGxldCBhYmkgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY2hhaW5JZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ID8gYXJndW1lbnRzWzVdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjb250cmFjdFdyYXBwZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IG5ldyBDb250cmFjdFdyYXBwZXIobmV0d29yaywgYWRkcmVzcywgYWJpLCBvcHRpb25zKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhYmlcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb250cmFjdFdyYXBwZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdG9yYWdlXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW5jb2RlclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImV2ZW50c1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVzdGltYXRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBsYXRmb3JtRmVlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1ldGFkYXRhXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXBwXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm9sZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpbnRlcmNlcHRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9jaGFpbklkXCIsIHZvaWQgMCk7XG4gICAgdGhpcy5fY2hhaW5JZCA9IGNoYWluSWQ7XG4gICAgdGhpcy5hYmkgPSBBYmlTY2hlbWEucGFyc2UoYWJpIHx8IFtdKTtcbiAgICB0aGlzLmNvbnRyYWN0V3JhcHBlciA9IGNvbnRyYWN0V3JhcHBlcjtcbiAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuICAgIHRoaXMubWV0YWRhdGEgPSBuZXcgQ29udHJhY3RNZXRhZGF0YSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgTWFya2V0cGxhY2VDb250cmFjdFNjaGVtYSwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLmFwcCA9IG5ldyBDb250cmFjdEFwcFVSSSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5tZXRhZGF0YSwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLnJvbGVzID0gbmV3IENvbnRyYWN0Um9sZXModGhpcy5jb250cmFjdFdyYXBwZXIsIE1hcmtldHBsYWNlVjMuY29udHJhY3RSb2xlcyk7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lc3RpbWF0b3IgPSBuZXcgR2FzQ29zdEVzdGltYXRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgQ29udHJhY3RFdmVudHModGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMucGxhdGZvcm1GZWVzID0gbmV3IENvbnRyYWN0UGxhdGZvcm1GZWUodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuaW50ZXJjZXB0b3IgPSBuZXcgQ29udHJhY3RJbnRlcmNlcHRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gIH1cbiAgb25OZXR3b3JrVXBkYXRlZChuZXR3b3JrKSB7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIudXBkYXRlU2lnbmVyT3JQcm92aWRlcihuZXR3b3JrKTtcbiAgfVxuICBnZXRBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuYWRkcmVzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIHByZXBhcmUobWV0aG9kLCBhcmdzLCBvdmVycmlkZXMpIHtcbiAgICByZXR1cm4gVHJhbnNhY3Rpb24uZnJvbUNvbnRyYWN0V3JhcHBlcih7XG4gICAgICBjb250cmFjdFdyYXBwZXI6IHRoaXMuY29udHJhY3RXcmFwcGVyLFxuICAgICAgbWV0aG9kLFxuICAgICAgYXJncyxcbiAgICAgIG92ZXJyaWRlc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgY2FsbChmdW5jdGlvbk5hbWUsIGFyZ3MsIG92ZXJyaWRlcykge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5jYWxsKGZ1bmN0aW9uTmFtZSwgYXJncywgb3ZlcnJpZGVzKTtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKlxuICAgKiBGRUFUVVJFIERFVEVDVElPTlxuICAgKiAqKioqKioqKioqKioqKioqKioqKi9cblxuICBkZXRlY3REaXJlY3RMaXN0aW5ncygpIHtcbiAgICBpZiAoZGV0ZWN0Q29udHJhY3RGZWF0dXJlKHRoaXMuY29udHJhY3RXcmFwcGVyLCBcIkRpcmVjdExpc3RpbmdzXCIpKSB7XG4gICAgICByZXR1cm4gbmV3IE1hcmtldHBsYWNlVjNEaXJlY3RMaXN0aW5ncyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5zdG9yYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBkZXRlY3RFbmdsaXNoQXVjdGlvbnMoKSB7XG4gICAgaWYgKGRldGVjdENvbnRyYWN0RmVhdHVyZSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgXCJFbmdsaXNoQXVjdGlvbnNcIikpIHtcbiAgICAgIHJldHVybiBuZXcgTWFya2V0cGxhY2VWM0VuZ2xpc2hBdWN0aW9ucyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5zdG9yYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBkZXRlY3RPZmZlcnMoKSB7XG4gICAgaWYgKGRldGVjdENvbnRyYWN0RmVhdHVyZSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgXCJPZmZlcnNcIikpIHtcbiAgICAgIHJldHVybiBuZXcgTWFya2V0cGxhY2VWM09mZmVycyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5zdG9yYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuX2RlZmluZVByb3BlcnR5KE1hcmtldHBsYWNlVjMsIFwiY29udHJhY3RSb2xlc1wiLCBbXCJhZG1pblwiLCBcImxpc3RlclwiLCBcImFzc2V0XCJdKTtcblxuZXhwb3J0IHsgTWFya2V0cGxhY2VWMyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9