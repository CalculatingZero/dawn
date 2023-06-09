"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_multiwrap-cd0c9c88_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/multiwrap-cd0c9c88.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/multiwrap-cd0c9c88.browser.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Multiwrap: () => (/* binding */ Multiwrap)
/* harmony export */ });
/* harmony import */ var _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./QueryParams-7d9473b5.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-7d9473b5.browser.esm.js");
/* harmony import */ var _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contract-metadata-88f06ef9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/contract-metadata-88f06ef9.browser.esm.js");
/* harmony import */ var _erc_721_standard_b90faf4d_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./erc-721-standard-b90faf4d.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/erc-721-standard-b90faf4d.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/units/lib.esm/index.js");
/* harmony import */ var _hasERC20Allowance_59b9da80_browser_esm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hasERC20Allowance-59b9da80.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/hasERC20Allowance-59b9da80.browser.esm.js");
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
 * Multiwrap lets you wrap any number of ERC20, ERC721 and ERC1155 tokens you own into a single wrapped token bundle.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "multiwrap");
 * ```
 *
 * @beta
 */
class Multiwrap extends _erc_721_standard_b90faf4d_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.S {
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

  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dz(network, address, abi, options);
    super(contractWrapper, storage, chainId);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "abi", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "encoder", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "estimator", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "metadata", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "app", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "events", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "roles", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "royalties", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "owner", void 0);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Wrap any number of ERC20/ERC721/ERC1155 tokens into a single wrapped token
     * @example
     * ```javascript
     * const tx = await contract.wrap({
     *   erc20Tokens: [{
     *     contractAddress: "0x...",
     *     quantity: "0.8"
     *   }],
     *   erc721Tokens: [{
     *     contractAddress: "0x...",
     *     tokenId: "0"
     *   }],
     *   erc1155Tokens: [{
     *     contractAddress: "0x...",
     *     tokenId: "1",
     *     quantity: "2"
     *   }]
     * }, {
     *     name: "Wrapped bundle",
     *     description: "This is a wrapped bundle of tokens and NFTs",
     *     image: "ipfs://...",
     * });
     * const receipt = tx.receipt(); // the transaction receipt
     * const wrappedTokenId = tx.id; // the id of the wrapped token bundle
     * ```
     * @param contents - the contents to wrap
     * @param wrappedTokenMetadata - metadata to represent the wrapped token bundle
     * @param recipientAddress - Optional. The address to send the wrapped token bundle to
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "wrap", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (contents, wrappedTokenMetadata, recipientAddress) => {
      const uri = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dK)(wrappedTokenMetadata, this.storage);
      const recipient = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.cH)(recipientAddress ? recipientAddress : await this.contractWrapper.getSignerAddress());
      const tokens = await this.toTokenStructList(contents);
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "wrap",
        args: [tokens, uri, recipient],
        parse: receipt => {
          const event = this.contractWrapper.parseLogs("TokensWrapped", receipt?.logs);
          if (event.length === 0) {
            throw new Error("TokensWrapped event not found");
          }
          const tokenId = event[0].args.tokenIdOfWrappedToken;
          return {
            id: tokenId,
            receipt,
            data: () => this.get(tokenId)
          };
        }
      });
    }));
    /**
     * Unwrap a wrapped token bundle, and retrieve its contents
     * @example
     * ```javascript
     * await contract.unwrap(wrappedTokenId);
     * ```
     * @param wrappedTokenId - the id of the wrapped token bundle
     * @param recipientAddress - Optional. The address to send the unwrapped tokens to
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "unwrap", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ds)(async (wrappedTokenId, recipientAddress) => {
      const recipient = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.cH)(recipientAddress ? recipientAddress : await this.contractWrapper.getSignerAddress());
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "unwrap",
        args: [wrappedTokenId, recipient]
      });
    }));
    this.abi = _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.e.parse(abi || []);
    this.metadata = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ag(this.contractWrapper, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dJ, this.storage);
    this.app = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.a$(this.contractWrapper, this.metadata, this.storage);
    this.roles = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ah(this.contractWrapper, Multiwrap.contractRoles);
    this.encoder = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.af(this.contractWrapper);
    this.estimator = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aP(this.contractWrapper);
    this.events = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aQ(this.contractWrapper);
    this.royalties = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.ai(this.contractWrapper, this.metadata);
    this.owner = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.aU(this.contractWrapper);
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the contents of a wrapped token bundle
   * @example
   * ```javascript
   * const contents = await contract.getWrappedContents(wrappedTokenId);
   * console.log(contents.erc20Tokens);
   * console.log(contents.erc721Tokens);
   * console.log(contents.erc1155Tokens);
   * ```
   * @param wrappedTokenId - the id of the wrapped token bundle
   */
  async getWrappedContents(wrappedTokenId) {
    const wrappedTokens = await this.contractWrapper.readContract.getWrappedContents(wrappedTokenId);
    const erc20Tokens = [];
    const erc721Tokens = [];
    const erc1155Tokens = [];
    for (const token of wrappedTokens) {
      switch (token.tokenType) {
        case 0:
          {
            const tokenMetadata = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.b8)(this.contractWrapper.getProvider(), token.assetContract);
            erc20Tokens.push({
              contractAddress: token.assetContract,
              quantity: ethers__WEBPACK_IMPORTED_MODULE_10__.formatUnits(token.totalAmount, tokenMetadata.decimals)
            });
            break;
          }
        case 1:
          {
            erc721Tokens.push({
              contractAddress: token.assetContract,
              tokenId: token.tokenId
            });
            break;
          }
        case 2:
          {
            erc1155Tokens.push({
              contractAddress: token.assetContract,
              tokenId: token.tokenId,
              quantity: token.totalAmount.toString()
            });
            break;
          }
      }
    }
    return {
      erc20Tokens,
      erc721Tokens,
      erc1155Tokens
    };
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  async toTokenStructList(contents) {
    const tokens = [];
    const provider = this.contractWrapper.getProvider();
    const owner = await this.contractWrapper.getSignerAddress();
    if (contents.erc20Tokens) {
      for (const erc20 of contents.erc20Tokens) {
        const normalizedQuantity = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.b7)(provider, erc20.quantity, erc20.contractAddress);
        const hasAllowance = await (0,_hasERC20Allowance_59b9da80_browser_esm_js__WEBPACK_IMPORTED_MODULE_11__.h)(this.contractWrapper, erc20.contractAddress, normalizedQuantity);
        if (!hasAllowance) {
          throw new Error(`ERC20 token with contract address "${erc20.contractAddress}" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("${erc20.contractAddress}").setAllowance("${this.getAddress()}", ${erc20.quantity});\n\n`);
        }
        tokens.push({
          assetContract: erc20.contractAddress,
          totalAmount: normalizedQuantity,
          tokenId: 0,
          tokenType: 0
        });
      }
    }
    if (contents.erc721Tokens) {
      for (const erc721 of contents.erc721Tokens) {
        const isApproved = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dv)(this.contractWrapper.getProvider(), this.getAddress(), erc721.contractAddress, erc721.tokenId, owner);
        if (!isApproved) {
          throw new Error(`ERC721 token "${erc721.tokenId}" with contract address "${erc721.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("${erc721.contractAddress}").setApprovalForToken("${this.getAddress()}", ${erc721.tokenId});\n\n`);
        }
        tokens.push({
          assetContract: erc721.contractAddress,
          totalAmount: 0,
          tokenId: erc721.tokenId,
          tokenType: 1
        });
      }
    }
    if (contents.erc1155Tokens) {
      for (const erc1155 of contents.erc1155Tokens) {
        const isApproved = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__.dv)(this.contractWrapper.getProvider(), this.getAddress(), erc1155.contractAddress, erc1155.tokenId, owner);
        if (!isApproved) {
          throw new Error(`ERC1155 token "${erc1155.tokenId}" with contract address "${erc1155.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("${erc1155.contractAddress}").setApprovalForAll("${this.getAddress()}", true);\n\n`);
        }
        tokens.push({
          assetContract: erc1155.contractAddress,
          totalAmount: erc1155.quantity,
          tokenId: erc1155.tokenId,
          tokenType: 2
        });
      }
    }
    return tokens;
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
(0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(Multiwrap, "contractRoles", ["admin", "transfer", "minter", "unwrap", "asset"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LW11bHRpd3JhcC1jZDBjOWM4OC1icm93c2VyLWVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDdWE7QUFDbmE7QUFDakQ7QUFDcUQ7QUFDdEU7QUFDRjtBQUNpQjtBQUNvQztBQUNUO0FBQ1E7QUFDRztBQUNHO0FBQ2I7QUFDTTtBQUNFO0FBQ0o7QUFDUztBQUNKO0FBQ0M7QUFDRjtBQUNBO0FBQ1A7QUFDVTtBQUNKO0FBQ0o7QUFDTTtBQUNLO0FBQ0c7QUFDUDtBQUNBO0FBQ0M7QUFDUjtBQUNNO0FBQ0s7QUFDRztBQUNmO0FBQ1U7QUFDRjtBQUNLO0FBQ1A7QUFDUDtBQUNVO0FBQ0Y7QUFDQztBQUNUO0FBQ087QUFDRjtBQUNVO0FBQ1Y7QUFDQTtBQUNKO0FBQ0Q7QUFDUTtBQUNQO0FBQ3BDO0FBQzZDO0FBQzlDO0FBQ3NDO0FBQzlCO0FBQ1Y7QUFDZ0Q7QUFDeEM7QUFDcUM7QUFDcEQ7QUFDUTtBQUNHO0FBQ2tDO0FBQ1E7QUFDQztBQUNRO0FBQ2xEO0FBQ1o7QUFDK0Q7QUFDQztBQUN4QztBQUN1QjtBQUNDOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQSxrQ0FBa0MsV0FBVztBQUM3Qyw2Q0FBNkMsa0JBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdFQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLDBFQUFlO0FBQ2pIO0FBQ0EsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVB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Ly4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvc2RrL2Rpc3QvbXVsdGl3cmFwLWNkMGM5Yzg4LmJyb3dzZXIuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi9RdWVyeVBhcmFtcy03ZDk0NzNiNS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBkeiBhcyBDb250cmFjdFdyYXBwZXIsIGRzIGFzIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbiwgZSBhcyBBYmlTY2hlbWEsIGFnIGFzIENvbnRyYWN0TWV0YWRhdGEsIGRKIGFzIE11bHRpd3JhcENvbnRyYWN0U2NoZW1hLCBhJCBhcyBDb250cmFjdEFwcFVSSSwgYWggYXMgQ29udHJhY3RSb2xlcywgYWYgYXMgQ29udHJhY3RFbmNvZGVyLCBhUCBhcyBHYXNDb3N0RXN0aW1hdG9yLCBhUSBhcyBDb250cmFjdEV2ZW50cywgYWkgYXMgQ29udHJhY3RSb3lhbHR5LCBhVSBhcyBDb250cmFjdE93bmVyLCBiOCBhcyBmZXRjaEN1cnJlbmN5TWV0YWRhdGEsIGI3IGFzIG5vcm1hbGl6ZVByaWNlVmFsdWUsIGR2IGFzIGlzVG9rZW5BcHByb3ZlZEZvclRyYW5zZmVyLCBhViBhcyBUcmFuc2FjdGlvbiwgZEsgYXMgdXBsb2FkT3JFeHRyYWN0VVJJLCBjSCBhcyByZXNvbHZlQWRkcmVzcyB9IGZyb20gJy4vY29udHJhY3QtbWV0YWRhdGEtODhmMDZlZjkuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgUyBhcyBTdGFuZGFyZEVyYzcyMSB9IGZyb20gJy4vZXJjLTcyMS1zdGFuZGFyZC1iOTBmYWY0ZC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgaCBhcyBoYXNFUkMyMEFsbG93YW5jZSB9IGZyb20gJy4vaGFzRVJDMjBBbGxvd2FuY2UtNTliOWRhODAuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0ICdibi5qcyc7XG5pbXBvcnQgJ3pvZCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY2hhaW5zJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzIwX1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2VfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjBQZXJtaXQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNdWx0aWNhbGwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkM3MjFfVjMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxU3VwcGx5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUxhenlNaW50Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0xhenlNaW50V2l0aFRpZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcDExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzExNTVfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1X1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRVJDMjc3MUNvbnRleHQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQXBwVVJJLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNvbnRyYWN0TWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGlyZWN0TGlzdGluZ3MuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRW5nbGlzaEF1Y3Rpb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU9mZmVycy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQYWNrVlJGRGlyZWN0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQbGF0Zm9ybUZlZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQcmltYXJ5U2FsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3lhbHR5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvT3duYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBY2NvdW50RmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBY2NvdW50Lmpzb24nO1xuaW1wb3J0ICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Db250cmFjdFB1Ymxpc2hlci5qc29uJztcbmltcG9ydCAnZXZlbnRlbWl0dGVyMyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Gb3J3YXJkZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvc3RvcmFnZSc7XG5pbXBvcnQgJ2Nyb3NzLWZldGNoJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lUaGlyZHdlYkNvbnRyYWN0Lmpzb24nO1xuaW1wb3J0ICdldGhlcnMvbGliL3V0aWxzLmpzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyME1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICd1dWlkJztcbmltcG9ydCAnbWVya2xldHJlZWpzJztcbmltcG9ydCAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxNjUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWxEZXByZWNhdGVkLmpzb24nO1xuaW1wb3J0ICdldGhlcnMvbGliL3V0aWxzJztcbmltcG9ydCAnYnM1OCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeUxvZ2ljLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvZ2VuZXJhdGVkLWFiaXMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdSZWdpc3RyeS5qc29uJztcblxuLyoqXG4gKiBNdWx0aXdyYXAgbGV0cyB5b3Ugd3JhcCBhbnkgbnVtYmVyIG9mIEVSQzIwLCBFUkM3MjEgYW5kIEVSQzExNTUgdG9rZW5zIHlvdSBvd24gaW50byBhIHNpbmdsZSB3cmFwcGVkIHRva2VuIGJ1bmRsZS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCI7XG4gKlxuICogY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKFwie3tjaGFpbk5hbWV9fVwiKTtcbiAqIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgc2RrLmdldENvbnRyYWN0KFwie3tjb250cmFjdF9hZGRyZXNzfX1cIiwgXCJtdWx0aXdyYXBcIik7XG4gKiBgYGBcbiAqXG4gKiBAYmV0YVxuICovXG5jbGFzcyBNdWx0aXdyYXAgZXh0ZW5kcyBTdGFuZGFyZEVyYzcyMSB7XG4gIC8qKlxuICAgKiBDb25maWd1cmUgcm95YWx0aWVzXG4gICAqIEByZW1hcmtzIFNldCB5b3VyIG93biByb3lhbHRpZXMgZm9yIHRoZSBlbnRpcmUgY29udHJhY3Qgb3IgcGVyIHRva2VuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gcm95YWx0aWVzIG9uIHRoZSB3aG9sZSBjb250cmFjdFxuICAgKiBjb250cmFjdC5yb3lhbHRpZXMuc2V0RGVmYXVsdFJveWFsdHlJbmZvKHtcbiAgICogICBzZWxsZXJfZmVlX2Jhc2lzX3BvaW50czogMTAwLCAvLyAxJVxuICAgKiAgIGZlZV9yZWNpcGllbnQ6IFwiMHguLi5cIlxuICAgKiB9KTtcbiAgICogLy8gb3ZlcnJpZGUgcm95YWx0eSBmb3IgYSBwYXJ0aWN1bGFyIHRva2VuXG4gICAqIGNvbnRyYWN0LnJveWFsdGllcy5zZXRUb2tlblJveWFsdHlJbmZvKHRva2VuSWQsIHtcbiAgICogICBzZWxsZXJfZmVlX2Jhc2lzX3BvaW50czogNTAwLCAvLyA1JVxuICAgKiAgIGZlZV9yZWNpcGllbnQ6IFwiMHguLi5cIlxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKG5ldHdvcmssIGFkZHJlc3MsIHN0b3JhZ2UpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgbGV0IGFiaSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ID8gYXJndW1lbnRzWzRdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjaGFpbklkID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNvbnRyYWN0V3JhcHBlciA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogbmV3IENvbnRyYWN0V3JhcHBlcihuZXR3b3JrLCBhZGRyZXNzLCBhYmksIG9wdGlvbnMpO1xuICAgIHN1cGVyKGNvbnRyYWN0V3JhcHBlciwgc3RvcmFnZSwgY2hhaW5JZCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWJpXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW5jb2RlclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVzdGltYXRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1ldGFkYXRhXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXBwXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm9sZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb3lhbHRpZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvd25lclwiLCB2b2lkIDApO1xuICAgIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBXUklURSBGVU5DVElPTlNcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKipcbiAgICAgKiBXcmFwIGFueSBudW1iZXIgb2YgRVJDMjAvRVJDNzIxL0VSQzExNTUgdG9rZW5zIGludG8gYSBzaW5nbGUgd3JhcHBlZCB0b2tlblxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3Qud3JhcCh7XG4gICAgICogICBlcmMyMFRva2VuczogW3tcbiAgICAgKiAgICAgY29udHJhY3RBZGRyZXNzOiBcIjB4Li4uXCIsXG4gICAgICogICAgIHF1YW50aXR5OiBcIjAuOFwiXG4gICAgICogICB9XSxcbiAgICAgKiAgIGVyYzcyMVRva2VuczogW3tcbiAgICAgKiAgICAgY29udHJhY3RBZGRyZXNzOiBcIjB4Li4uXCIsXG4gICAgICogICAgIHRva2VuSWQ6IFwiMFwiXG4gICAgICogICB9XSxcbiAgICAgKiAgIGVyYzExNTVUb2tlbnM6IFt7XG4gICAgICogICAgIGNvbnRyYWN0QWRkcmVzczogXCIweC4uLlwiLFxuICAgICAqICAgICB0b2tlbklkOiBcIjFcIixcbiAgICAgKiAgICAgcXVhbnRpdHk6IFwiMlwiXG4gICAgICogICB9XVxuICAgICAqIH0sIHtcbiAgICAgKiAgICAgbmFtZTogXCJXcmFwcGVkIGJ1bmRsZVwiLFxuICAgICAqICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgd3JhcHBlZCBidW5kbGUgb2YgdG9rZW5zIGFuZCBORlRzXCIsXG4gICAgICogICAgIGltYWdlOiBcImlwZnM6Ly8uLi5cIixcbiAgICAgKiB9KTtcbiAgICAgKiBjb25zdCByZWNlaXB0ID0gdHgucmVjZWlwdCgpOyAvLyB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgICAqIGNvbnN0IHdyYXBwZWRUb2tlbklkID0gdHguaWQ7IC8vIHRoZSBpZCBvZiB0aGUgd3JhcHBlZCB0b2tlbiBidW5kbGVcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gY29udGVudHMgLSB0aGUgY29udGVudHMgdG8gd3JhcFxuICAgICAqIEBwYXJhbSB3cmFwcGVkVG9rZW5NZXRhZGF0YSAtIG1ldGFkYXRhIHRvIHJlcHJlc2VudCB0aGUgd3JhcHBlZCB0b2tlbiBidW5kbGVcbiAgICAgKiBAcGFyYW0gcmVjaXBpZW50QWRkcmVzcyAtIE9wdGlvbmFsLiBUaGUgYWRkcmVzcyB0byBzZW5kIHRoZSB3cmFwcGVkIHRva2VuIGJ1bmRsZSB0b1xuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndyYXBcIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIChjb250ZW50cywgd3JhcHBlZFRva2VuTWV0YWRhdGEsIHJlY2lwaWVudEFkZHJlc3MpID0+IHtcbiAgICAgIGNvbnN0IHVyaSA9IGF3YWl0IHVwbG9hZE9yRXh0cmFjdFVSSSh3cmFwcGVkVG9rZW5NZXRhZGF0YSwgdGhpcy5zdG9yYWdlKTtcbiAgICAgIGNvbnN0IHJlY2lwaWVudCA9IGF3YWl0IHJlc29sdmVBZGRyZXNzKHJlY2lwaWVudEFkZHJlc3MgPyByZWNpcGllbnRBZGRyZXNzIDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0U2lnbmVyQWRkcmVzcygpKTtcbiAgICAgIGNvbnN0IHRva2VucyA9IGF3YWl0IHRoaXMudG9Ub2tlblN0cnVjdExpc3QoY29udGVudHMpO1xuICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uLmZyb21Db250cmFjdFdyYXBwZXIoe1xuICAgICAgICBjb250cmFjdFdyYXBwZXI6IHRoaXMuY29udHJhY3RXcmFwcGVyLFxuICAgICAgICBtZXRob2Q6IFwid3JhcFwiLFxuICAgICAgICBhcmdzOiBbdG9rZW5zLCB1cmksIHJlY2lwaWVudF0sXG4gICAgICAgIHBhcnNlOiByZWNlaXB0ID0+IHtcbiAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuY29udHJhY3RXcmFwcGVyLnBhcnNlTG9ncyhcIlRva2Vuc1dyYXBwZWRcIiwgcmVjZWlwdD8ubG9ncyk7XG4gICAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW5zV3JhcHBlZCBldmVudCBub3QgZm91bmRcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRva2VuSWQgPSBldmVudFswXS5hcmdzLnRva2VuSWRPZldyYXBwZWRUb2tlbjtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRva2VuSWQsXG4gICAgICAgICAgICByZWNlaXB0LFxuICAgICAgICAgICAgZGF0YTogKCkgPT4gdGhpcy5nZXQodG9rZW5JZClcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogVW53cmFwIGEgd3JhcHBlZCB0b2tlbiBidW5kbGUsIGFuZCByZXRyaWV2ZSBpdHMgY29udGVudHNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiBhd2FpdCBjb250cmFjdC51bndyYXAod3JhcHBlZFRva2VuSWQpO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSB3cmFwcGVkVG9rZW5JZCAtIHRoZSBpZCBvZiB0aGUgd3JhcHBlZCB0b2tlbiBidW5kbGVcbiAgICAgKiBAcGFyYW0gcmVjaXBpZW50QWRkcmVzcyAtIE9wdGlvbmFsLiBUaGUgYWRkcmVzcyB0byBzZW5kIHRoZSB1bndyYXBwZWQgdG9rZW5zIHRvXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidW53cmFwXCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyAod3JhcHBlZFRva2VuSWQsIHJlY2lwaWVudEFkZHJlc3MpID0+IHtcbiAgICAgIGNvbnN0IHJlY2lwaWVudCA9IGF3YWl0IHJlc29sdmVBZGRyZXNzKHJlY2lwaWVudEFkZHJlc3MgPyByZWNpcGllbnRBZGRyZXNzIDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0U2lnbmVyQWRkcmVzcygpKTtcbiAgICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgICAgbWV0aG9kOiBcInVud3JhcFwiLFxuICAgICAgICBhcmdzOiBbd3JhcHBlZFRva2VuSWQsIHJlY2lwaWVudF1cbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgICB0aGlzLmFiaSA9IEFiaVNjaGVtYS5wYXJzZShhYmkgfHwgW10pO1xuICAgIHRoaXMubWV0YWRhdGEgPSBuZXcgQ29udHJhY3RNZXRhZGF0YSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgTXVsdGl3cmFwQ29udHJhY3RTY2hlbWEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5hcHAgPSBuZXcgQ29udHJhY3RBcHBVUkkodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMubWV0YWRhdGEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5yb2xlcyA9IG5ldyBDb250cmFjdFJvbGVzKHRoaXMuY29udHJhY3RXcmFwcGVyLCBNdWx0aXdyYXAuY29udHJhY3RSb2xlcyk7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lc3RpbWF0b3IgPSBuZXcgR2FzQ29zdEVzdGltYXRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgQ29udHJhY3RFdmVudHModGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMucm95YWx0aWVzID0gbmV3IENvbnRyYWN0Um95YWx0eSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5tZXRhZGF0YSk7XG4gICAgdGhpcy5vd25lciA9IG5ldyBDb250cmFjdE93bmVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUkVBRCBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY29udGVudHMgb2YgYSB3cmFwcGVkIHRva2VuIGJ1bmRsZVxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGNvbnRlbnRzID0gYXdhaXQgY29udHJhY3QuZ2V0V3JhcHBlZENvbnRlbnRzKHdyYXBwZWRUb2tlbklkKTtcbiAgICogY29uc29sZS5sb2coY29udGVudHMuZXJjMjBUb2tlbnMpO1xuICAgKiBjb25zb2xlLmxvZyhjb250ZW50cy5lcmM3MjFUb2tlbnMpO1xuICAgKiBjb25zb2xlLmxvZyhjb250ZW50cy5lcmMxMTU1VG9rZW5zKTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB3cmFwcGVkVG9rZW5JZCAtIHRoZSBpZCBvZiB0aGUgd3JhcHBlZCB0b2tlbiBidW5kbGVcbiAgICovXG4gIGFzeW5jIGdldFdyYXBwZWRDb250ZW50cyh3cmFwcGVkVG9rZW5JZCkge1xuICAgIGNvbnN0IHdyYXBwZWRUb2tlbnMgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuZ2V0V3JhcHBlZENvbnRlbnRzKHdyYXBwZWRUb2tlbklkKTtcbiAgICBjb25zdCBlcmMyMFRva2VucyA9IFtdO1xuICAgIGNvbnN0IGVyYzcyMVRva2VucyA9IFtdO1xuICAgIGNvbnN0IGVyYzExNTVUb2tlbnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHdyYXBwZWRUb2tlbnMpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4udG9rZW5UeXBlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbk1ldGFkYXRhID0gYXdhaXQgZmV0Y2hDdXJyZW5jeU1ldGFkYXRhKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIHRva2VuLmFzc2V0Q29udHJhY3QpO1xuICAgICAgICAgICAgZXJjMjBUb2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgIGNvbnRyYWN0QWRkcmVzczogdG9rZW4uYXNzZXRDb250cmFjdCxcbiAgICAgICAgICAgICAgcXVhbnRpdHk6IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyh0b2tlbi50b3RhbEFtb3VudCwgdG9rZW5NZXRhZGF0YS5kZWNpbWFscylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXJjNzIxVG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHRva2VuLmFzc2V0Q29udHJhY3QsXG4gICAgICAgICAgICAgIHRva2VuSWQ6IHRva2VuLnRva2VuSWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXJjMTE1NVRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgY29udHJhY3RBZGRyZXNzOiB0b2tlbi5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICB0b2tlbklkOiB0b2tlbi50b2tlbklkLFxuICAgICAgICAgICAgICBxdWFudGl0eTogdG9rZW4udG90YWxBbW91bnQudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBlcmMyMFRva2VucyxcbiAgICAgIGVyYzcyMVRva2VucyxcbiAgICAgIGVyYzExNTVUb2tlbnNcbiAgICB9O1xuICB9XG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUFJJVkFURSBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgYXN5bmMgdG9Ub2tlblN0cnVjdExpc3QoY29udGVudHMpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBbXTtcbiAgICBjb25zdCBwcm92aWRlciA9IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCk7XG4gICAgY29uc3Qgb3duZXIgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRTaWduZXJBZGRyZXNzKCk7XG4gICAgaWYgKGNvbnRlbnRzLmVyYzIwVG9rZW5zKSB7XG4gICAgICBmb3IgKGNvbnN0IGVyYzIwIG9mIGNvbnRlbnRzLmVyYzIwVG9rZW5zKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWFudGl0eSA9IGF3YWl0IG5vcm1hbGl6ZVByaWNlVmFsdWUocHJvdmlkZXIsIGVyYzIwLnF1YW50aXR5LCBlcmMyMC5jb250cmFjdEFkZHJlc3MpO1xuICAgICAgICBjb25zdCBoYXNBbGxvd2FuY2UgPSBhd2FpdCBoYXNFUkMyMEFsbG93YW5jZSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgZXJjMjAuY29udHJhY3RBZGRyZXNzLCBub3JtYWxpemVkUXVhbnRpdHkpO1xuICAgICAgICBpZiAoIWhhc0FsbG93YW5jZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJDMjAgdG9rZW4gd2l0aCBjb250cmFjdCBhZGRyZXNzIFwiJHtlcmMyMC5jb250cmFjdEFkZHJlc3N9XCIgZG9lcyBub3QgaGF2ZSBlbm91Z2ggYWxsb3dhbmNlIHRvIHRyYW5zZmVyLlxcblxcbllvdSBjYW4gc2V0IGFsbG93YW5jZSB0byB0aGUgbXVsdGl3cmFwIGNvbnRyYWN0IHRvIHRyYW5zZmVyIHRoZXNlIHRva2VucyBieSBydW5uaW5nOlxcblxcbmF3YWl0IHNkay5nZXRUb2tlbihcIiR7ZXJjMjAuY29udHJhY3RBZGRyZXNzfVwiKS5zZXRBbGxvd2FuY2UoXCIke3RoaXMuZ2V0QWRkcmVzcygpfVwiLCAke2VyYzIwLnF1YW50aXR5fSk7XFxuXFxuYCk7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICAgIGFzc2V0Q29udHJhY3Q6IGVyYzIwLmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgICB0b3RhbEFtb3VudDogbm9ybWFsaXplZFF1YW50aXR5LFxuICAgICAgICAgIHRva2VuSWQ6IDAsXG4gICAgICAgICAgdG9rZW5UeXBlOiAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGVudHMuZXJjNzIxVG9rZW5zKSB7XG4gICAgICBmb3IgKGNvbnN0IGVyYzcyMSBvZiBjb250ZW50cy5lcmM3MjFUb2tlbnMpIHtcbiAgICAgICAgY29uc3QgaXNBcHByb3ZlZCA9IGF3YWl0IGlzVG9rZW5BcHByb3ZlZEZvclRyYW5zZmVyKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIHRoaXMuZ2V0QWRkcmVzcygpLCBlcmM3MjEuY29udHJhY3RBZGRyZXNzLCBlcmM3MjEudG9rZW5JZCwgb3duZXIpO1xuICAgICAgICBpZiAoIWlzQXBwcm92ZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSQzcyMSB0b2tlbiBcIiR7ZXJjNzIxLnRva2VuSWR9XCIgd2l0aCBjb250cmFjdCBhZGRyZXNzIFwiJHtlcmM3MjEuY29udHJhY3RBZGRyZXNzfVwiIGlzIG5vdCBhcHByb3ZlZCBmb3IgdHJhbnNmZXIuXFxuXFxuWW91IGNhbiBnaXZlIGFwcHJvdmFsIHRoZSBtdWx0aXdyYXAgY29udHJhY3QgdG8gdHJhbnNmZXIgdGhpcyB0b2tlbiBieSBydW5uaW5nOlxcblxcbmF3YWl0IHNkay5nZXRORlRDb2xsZWN0aW9uKFwiJHtlcmM3MjEuY29udHJhY3RBZGRyZXNzfVwiKS5zZXRBcHByb3ZhbEZvclRva2VuKFwiJHt0aGlzLmdldEFkZHJlc3MoKX1cIiwgJHtlcmM3MjEudG9rZW5JZH0pO1xcblxcbmApO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICBhc3NldENvbnRyYWN0OiBlcmM3MjEuY29udHJhY3RBZGRyZXNzLFxuICAgICAgICAgIHRvdGFsQW1vdW50OiAwLFxuICAgICAgICAgIHRva2VuSWQ6IGVyYzcyMS50b2tlbklkLFxuICAgICAgICAgIHRva2VuVHlwZTogMVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbnRlbnRzLmVyYzExNTVUb2tlbnMpIHtcbiAgICAgIGZvciAoY29uc3QgZXJjMTE1NSBvZiBjb250ZW50cy5lcmMxMTU1VG9rZW5zKSB7XG4gICAgICAgIGNvbnN0IGlzQXBwcm92ZWQgPSBhd2FpdCBpc1Rva2VuQXBwcm92ZWRGb3JUcmFuc2Zlcih0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLCB0aGlzLmdldEFkZHJlc3MoKSwgZXJjMTE1NS5jb250cmFjdEFkZHJlc3MsIGVyYzExNTUudG9rZW5JZCwgb3duZXIpO1xuICAgICAgICBpZiAoIWlzQXBwcm92ZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSQzExNTUgdG9rZW4gXCIke2VyYzExNTUudG9rZW5JZH1cIiB3aXRoIGNvbnRyYWN0IGFkZHJlc3MgXCIke2VyYzExNTUuY29udHJhY3RBZGRyZXNzfVwiIGlzIG5vdCBhcHByb3ZlZCBmb3IgdHJhbnNmZXIuXFxuXFxuWW91IGNhbiBnaXZlIGFwcHJvdmFsIHRoZSBtdWx0aXdyYXAgY29udHJhY3QgdG8gdHJhbnNmZXIgdGhpcyB0b2tlbiBieSBydW5uaW5nOlxcblxcbmF3YWl0IHNkay5nZXRFZGl0aW9uKFwiJHtlcmMxMTU1LmNvbnRyYWN0QWRkcmVzc31cIikuc2V0QXBwcm92YWxGb3JBbGwoXCIke3RoaXMuZ2V0QWRkcmVzcygpfVwiLCB0cnVlKTtcXG5cXG5gKTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgICAgYXNzZXRDb250cmFjdDogZXJjMTE1NS5jb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgdG90YWxBbW91bnQ6IGVyYzExNTUucXVhbnRpdHksXG4gICAgICAgICAgdG9rZW5JZDogZXJjMTE1NS50b2tlbklkLFxuICAgICAgICAgIHRva2VuVHlwZTogMlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIHByZXBhcmUobWV0aG9kLCBhcmdzLCBvdmVycmlkZXMpIHtcbiAgICByZXR1cm4gVHJhbnNhY3Rpb24uZnJvbUNvbnRyYWN0V3JhcHBlcih7XG4gICAgICBjb250cmFjdFdyYXBwZXI6IHRoaXMuY29udHJhY3RXcmFwcGVyLFxuICAgICAgbWV0aG9kLFxuICAgICAgYXJncyxcbiAgICAgIG92ZXJyaWRlc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgY2FsbChmdW5jdGlvbk5hbWUsIGFyZ3MsIG92ZXJyaWRlcykge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5jYWxsKGZ1bmN0aW9uTmFtZSwgYXJncywgb3ZlcnJpZGVzKTtcbiAgfVxufVxuX2RlZmluZVByb3BlcnR5KE11bHRpd3JhcCwgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCIsIFwidHJhbnNmZXJcIiwgXCJtaW50ZXJcIiwgXCJ1bndyYXBcIiwgXCJhc3NldFwiXSk7XG5cbmV4cG9ydCB7IE11bHRpd3JhcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9