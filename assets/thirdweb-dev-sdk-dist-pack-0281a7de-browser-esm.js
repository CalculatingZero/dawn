"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_pack-0281a7de_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/pack-0281a7de.browser.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/pack-0281a7de.browser.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pack: () => (/* binding */ Pack)
/* harmony export */ });
/* harmony import */ var _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./QueryParams-7d9473b5.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-7d9473b5.browser.esm.js");
/* harmony import */ var _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contract-metadata-88f06ef9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/contract-metadata-88f06ef9.browser.esm.js");
/* harmony import */ var _erc_1155_standard_607e2724_browser_esm_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./erc-1155-standard-607e2724.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/erc-1155-standard-607e2724.browser.esm.js");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ERC20_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ERC20.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IPackVRFDirect_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/units/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/constants/lib.esm/addresses.js");
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! zod */ "./node_modules/zod/lib/index.mjs");
/* harmony import */ var _hasERC20Allowance_59b9da80_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hasERC20Allowance-59b9da80.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/hasERC20Allowance-59b9da80.browser.esm.js");
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
















































































class PackVRF {
  constructor(network, address, storage, options, chainId) {
    var _this = this;
    let contractWrapper = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dz(network, address, _thirdweb_dev_contracts_js_dist_abis_IPackVRFDirect_json__WEBPACK_IMPORTED_MODULE_8__, options);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "featureName", _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dO.name);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "contractWrapper", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "storage", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "chainId", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "events", void 0);
    /**
     * Open pack
     *
     * @example
     * ```javascript
     * const tokenId = 0;
     * const amount = 1;
     * const receipt = await contract.pack.open(tokenId, amount);
     * ```
     *
     * @remarks Open a pack using Chainlink VRFs random number generation
     * @remarks This will return a transaction result with the requestId of the open request, NOT the contents of the pack
     * @remarks To get the contents of the pack, you must call claimRewards once the VRF request has been fulfilled
     * @remarks You can use the canClaimRewards method to check if the VRF request has been fulfilled
     * @param tokenId
     * @param amount
     * @returns
     * @twfeature PackVRF
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "open", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async function (tokenId) {
      let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      let gasLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500000;
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: _this.contractWrapper,
        method: "openPack",
        args: [tokenId, amount],
        overrides: {
          // Higher gas limit for opening packs
          gasLimit
        },
        parse: receipt => {
          let id = ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(0);
          try {
            const event = _this.contractWrapper.parseLogs("PackOpenRequested", receipt?.logs);
            id = event[0].args.requestId;
          } catch (e) {}
          return {
            receipt,
            id
          };
        }
      });
    }));
    /**
     * Claim the rewards from an opened pack
     *
     * @example
     * ```javascript
     * const rewards = await contract.pack.claimRewards();
     * ```
     *
     * @remarks This will return the contents of the pack
     * @remarks Make sure to check if the VRF request has been fulfilled using canClaimRewards() before calling this method
     * @returns the random rewards from opening a pack
     * @twfeature PackVRF
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "claimRewards", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async function () {
      let gasLimit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500000;
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: _this.contractWrapper,
        method: "claimRewards",
        args: [],
        overrides: {
          // Higher gas limit for opening packs
          gasLimit
        },
        parse: async receipt => {
          const event = _this.contractWrapper.parseLogs("PackOpened", receipt?.logs);
          if (event.length === 0) {
            throw new Error("PackOpened event not found");
          }
          const rewards = event[0].args.rewardUnitsDistributed;
          return await _this.parseRewards(rewards);
        }
      });
    }));
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.chainId = chainId;
    this.events = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aQ(this.contractWrapper);
  }
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }
  async parseRewards(rewards) {
    const erc20Rewards = [];
    const erc721Rewards = [];
    const erc1155Rewards = [];
    for (const reward of rewards) {
      switch (reward.tokenType) {
        case 0:
          {
            const tokenMetadata = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b8)(this.contractWrapper.getProvider(), reward.assetContract);
            erc20Rewards.push({
              contractAddress: reward.assetContract,
              quantityPerReward: ethers__WEBPACK_IMPORTED_MODULE_11__.formatUnits(reward.totalAmount, tokenMetadata.decimals).toString()
            });
            break;
          }
        case 1:
          {
            erc721Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString()
            });
            break;
          }
        case 2:
          {
            erc1155Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString(),
              quantityPerReward: reward.totalAmount.toString()
            });
            break;
          }
      }
    }
    return {
      erc20Rewards,
      erc721Rewards,
      erc1155Rewards
    };
  }

  /**
   * Setup a listener for when a pack is opened
   *
   * @example
   * ```javascript
   * const unsubscribe = await contract.pack.addPackOpenEventListener((packId, openerAddress, rewards) => {
   *  console.log(`Pack ${packId} was opened by ${openerAddress} and contained:`, rewards);
   * });
   * @param callback the listener to call when a pack is opened
   * @returns a unsubscribe function to cleanup the listener
   * @twfeature PackVRF
   */
  async addPackOpenEventListener(callback) {
    return this.events.addEventListener("PackOpened", async event => {
      callback(event.data.packId.toString(), event.data.opener, await this.parseRewards(event.data.rewardUnitsDistributed));
    });
  }

  /**
   * Check if a specific wallet can claim rewards after opening a pack
   *
   * @example
   * ```javascript
   * const canClaim = await contract.pack.canClaimRewards("{{wallet_address}}");
   * ```
   * @param claimerAddress Optional: the address to check if they can claim rewards, defaults to the connected address
   * @returns whether the connected address can claim rewards after opening a pack
   * @twfeature PackVRF
   */
  async canClaimRewards(claimerAddress) {
    const address = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(claimerAddress || (await this.contractWrapper.getSignerAddress()));
    return await this.contractWrapper.readContract.canClaimRewards(address);
  }

  /**
   * Open a pack and claim the rewards
   * @remarks This function will only start the flow of opening a pack, the rewards will be granted automatically to the connected address after VRF request is fulfilled
   *
   * @example
   * ```javascript
   * const packId = 0;
   * const amount = 1;
   * const { id } = await contract.pack.openAndClaim(packId, amount);
   * ```
   *
   * @param packId The id of the pack to open
   * @param amount Optional: the amount of packs to open, defaults to 1
   * @param gasLimit Optional: the gas limit to use for the VRF callback transaction, defaults to 500000
   * @returns
   * @twfeature PackVRF
   */
  async openAndClaim(packId) {
    let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    let gasLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500000;
    const receipt = await this.contractWrapper.sendTransaction("openPackAndClaimRewards", [packId, amount, gasLimit], {
      // Higher gas limit for opening packs
      gasLimit: ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(500000)
    });
    let id = ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(0);
    try {
      const event = this.contractWrapper.parseLogs("PackOpenRequested", receipt?.logs);
      id = event[0].args.requestId;
    } catch (e) {}
    return {
      receipt,
      id
    };
  }

  /**
   * Get the LINK balance of the contract
   *
   * @example
   * ```javascript
   * const balance = await contract.pack.getLinkBalance();
   * ```
   *
   * @returns the balance of LINK in the contract
   * @twfeature PackVRF
   */
  async getLinkBalance() {
    return this.getLinkContract().balanceOf(this.contractWrapper.readContract.address);
  }

  /**
   * Transfer LINK to this contract
   *
   * @example
   * ```javascript
   * const amount = 1;
   * await contract.pack.transferLink(amount);
   * ```
   *
   * @param amount the amount of LINK to transfer to the contract
   * @twfeature PackVRF
   */
  async transferLink(amount) {
    await this.getLinkContract().transfer(this.contractWrapper.readContract.address, amount);
  }
  getLinkContract() {
    const linkAddress = _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.c_[this.chainId];
    if (!linkAddress) {
      throw new Error(`No LINK token address found for chainId ${this.chainId}`);
    }
    const contract = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dz(this.contractWrapper.getSignerOrProvider(), linkAddress, _thirdweb_dev_contracts_js_dist_abis_ERC20_json__WEBPACK_IMPORTED_MODULE_12__, this.contractWrapper.options);
    return new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.an(contract, this.storage, this.chainId);
  }
}

/**
 * @internal
 */
const CommonWrappableSchema = zod__WEBPACK_IMPORTED_MODULE_13__.z.object({
  contractAddress: _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aa
});

/**
 * @internal
 */
const ERC20WrappableSchema = CommonWrappableSchema.extend({
  quantity: _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.A
});

/**
 * @internal
 */
const ERC721WrappableSchema = CommonWrappableSchema.extend({
  tokenId: _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a7
});

/**
 * @internal
 */
const ERC1155WrappableSchema = CommonWrappableSchema.extend({
  tokenId: _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a7,
  quantity: _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a7
});

/**
 * @internal
 */
const ERC20RewardSchema = ERC20WrappableSchema.omit({
  quantity: true
}).extend({
  quantityPerReward: _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.A
});

/**
 * @internal
 */
const ERC721RewardSchema = ERC721WrappableSchema;

/**
 * @internal
 */
const ERC1155RewardSchema = ERC1155WrappableSchema.omit({
  quantity: true
}).extend({
  quantityPerReward: _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a7
});

/**
 * @internal
 */
const ERC20RewardContentsSchema = ERC20RewardSchema.extend({
  totalRewards: _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a7.default("1")
});

/**
 * @internal
 */
const ERC721RewardContentsSchema = ERC721RewardSchema;

/**
 * @internal
 */
const ERC1155RewardContentsSchema = ERC1155RewardSchema.extend({
  totalRewards: _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a7.default("1")
});

/**
 * @internal
 */
zod__WEBPACK_IMPORTED_MODULE_13__.z.object({
  erc20Rewards: zod__WEBPACK_IMPORTED_MODULE_13__.z.array(ERC20RewardSchema).default([]),
  erc721Rewards: zod__WEBPACK_IMPORTED_MODULE_13__.z.array(ERC721RewardSchema).default([]),
  erc1155Rewards: zod__WEBPACK_IMPORTED_MODULE_13__.z.array(ERC1155RewardSchema).default([])
});

/**
 * @internal
 */
const PackRewardsOutputSchema = zod__WEBPACK_IMPORTED_MODULE_13__.z.object({
  erc20Rewards: zod__WEBPACK_IMPORTED_MODULE_13__.z.array(ERC20RewardContentsSchema).default([]),
  erc721Rewards: zod__WEBPACK_IMPORTED_MODULE_13__.z.array(ERC721RewardContentsSchema).default([]),
  erc1155Rewards: zod__WEBPACK_IMPORTED_MODULE_13__.z.array(ERC1155RewardContentsSchema).default([])
});

/**
 * @internal
 */
const PackMetadataInputSchema = PackRewardsOutputSchema.extend({
  packMetadata: _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__.N,
  rewardsPerPack: _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a7.default("1"),
  openStartTime: _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ab.default(new Date())
});

/**
 * @public
 */

/**
 * Create lootboxes of NFTs with rarity based open mechanics.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "pack");
 * ```
 *
 * @public
 */
class Pack extends _erc_1155_standard_607e2724_browser_esm_js__WEBPACK_IMPORTED_MODULE_14__.S {
  /**
   * Configure royalties
   * @remarks Set your own royalties for the entire contract or per pack
   * @example
   * ```javascript
   * // royalties on the whole contract
   * contract.royalties.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1%
   *   fee_recipient: "0x..."
   * });
   * // override royalty for a particular pack
   * contract.royalties.setTokenRoyaltyInfo(packId, {
   *   seller_fee_basis_points: 500, // 5%
   *   fee_recipient: "0x..."
   * });
   * ```
   */

  /**
   * @internal
   */

  /**
   * If enabled in the contract, use the Chainlink VRF functionality to open packs
   */
  get vrf() {
    return (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b_)(this._vrf, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dO);
  }
  constructor(network, address, storage) {
    var _this;
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dz(network, address, abi, options.gasless && "openzeppelin" in options.gasless ? {
      ...options,
      gasless: {
        ...options.gasless,
        openzeppelin: {
          ...options.gasless.openzeppelin,
          useEOAForwarder: true
        }
      }
    } : options);
    super(contractWrapper, storage, chainId);
    _this = this;
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "abi", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "metadata", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "app", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "roles", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "encoder", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "events", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "estimator", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "royalties", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "interceptor", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "owner", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "_vrf", void 0);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create Pack
     * @remarks Create a new pack with the given metadata and rewards and mint it to the connected wallet.
     * @remarks See {@link Pack.createTo}
     *
     * @param metadataWithRewards - the metadata and rewards to include in the pack
     * @example
     * ```javascript
     * const pack = {
     *   // The metadata for the pack NFT itself
     *   packMetadata: {
     *     name: "My Pack",
     *     description: "This is a new pack",
     *     image: "ipfs://...",
     *   },
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       assetContract: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     *   openStartTime: new Date(), // the date that packs can start to be opened, defaults to now
     *   rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1
     * }
     *
     * const tx = await contract.create(pack);
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "create", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async metadataWithRewards => {
      const signerAddress = await this.contractWrapper.getSignerAddress();
      return this.createTo.prepare(signerAddress, metadataWithRewards);
    }));
    /**
     * Add Pack Contents
     * @remarks Add contents to an existing pack.
     * @remarks See {@link Pack.addPackContents}
     *
     * @param packId - token Id of the pack to add contents to
     * @param packContents - the rewards to include in the pack
     * @example
     * ```javascript
     * const packContents = {
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       assetContract: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     * }
     *
     * const tx = await contract.addPackContents(packId, packContents);
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "addPackContents", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async (packId, packContents) => {
      const signerAddress = await this.contractWrapper.getSignerAddress();
      const parsedContents = await PackRewardsOutputSchema.parseAsync(packContents);
      const {
        contents,
        numOfRewardUnits
      } = await this.toPackContentArgs(parsedContents);
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "addPackContents",
        args: [packId, contents, numOfRewardUnits, signerAddress],
        parse: receipt => {
          const event = this.contractWrapper.parseLogs("PackUpdated", receipt?.logs);
          if (event.length === 0) {
            throw new Error("PackUpdated event not found");
          }
          const id = event[0].args.packId;
          return {
            id: id,
            receipt,
            data: () => this.erc1155.get(id)
          };
        }
      });
    }));
    /**
     * Create Pack To Wallet
     * @remarks Create a new pack with the given metadata and rewards and mint it to the specified address.
     *
     * @param to - the address to mint the pack to
     * @param metadataWithRewards - the metadata and rewards to include in the pack
     *
     * @example
     * ```javascript
     * const pack = {
     *   // The metadata for the pack NFT itself
     *   packMetadata: {
     *     name: "My Pack",
     *     description: "This is a new pack",
     *     image: "ipfs://...",
     *   },
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       assetContract: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     *   openStartTime: new Date(), // the date that packs can start to be opened, defaults to now
     *   rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1
     * }
     *
     * const tx = await contract.createTo("0x...", pack);
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "createTo", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async (to, metadataWithRewards) => {
      const uri = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dK)(metadataWithRewards.packMetadata, this.storage);
      const parsedMetadata = await PackMetadataInputSchema.parseAsync(metadataWithRewards);
      const {
        erc20Rewards,
        erc721Rewards,
        erc1155Rewards
      } = parsedMetadata;
      const rewardsData = {
        erc20Rewards,
        erc721Rewards,
        erc1155Rewards
      };
      const {
        contents,
        numOfRewardUnits
      } = await this.toPackContentArgs(rewardsData);
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "createPack",
        args: [contents, numOfRewardUnits, uri, parsedMetadata.openStartTime, parsedMetadata.rewardsPerPack, await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(to)],
        parse: receipt => {
          const event = this.contractWrapper.parseLogs("PackCreated", receipt?.logs);
          if (event.length === 0) {
            throw new Error("PackCreated event not found");
          }
          const packId = event[0].args.packId;
          return {
            id: packId,
            receipt,
            data: () => this.erc1155.get(packId)
          };
        }
      });
    }));
    /**
     * Open Pack
     *
     * @remarks - Open a pack to reveal the contained rewards. This will burn the specified pack and
     * the contained assets will be transferred to the opening users wallet.
     *
     * @param tokenId - the token ID of the pack you want to open
     * @param amount - the amount of packs you want to open
     *
     * @example
     * ```javascript
     * const tokenId = 0
     * const amount = 1
     * const tx = await contract.open(tokenId, amount);
     * ```
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(this, "open", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async function (tokenId) {
      let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      let gasLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500000;
      if (_this._vrf) {
        throw new Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");
      }
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: _this.contractWrapper,
        method: "openPack",
        args: [tokenId, amount],
        overrides: {
          // Higher gas limit for opening packs
          gasLimit
        },
        parse: async receipt => {
          const event = _this.contractWrapper.parseLogs("PackOpened", receipt?.logs);
          if (event.length === 0) {
            throw new Error("PackOpened event not found");
          }
          const rewards = event[0].args.rewardUnitsDistributed;
          const erc20Rewards = [];
          const erc721Rewards = [];
          const erc1155Rewards = [];
          for (const reward of rewards) {
            switch (reward.tokenType) {
              case 0:
                {
                  const tokenMetadata = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b8)(_this.contractWrapper.getProvider(), reward.assetContract);
                  erc20Rewards.push({
                    contractAddress: reward.assetContract,
                    quantityPerReward: ethers__WEBPACK_IMPORTED_MODULE_11__.formatUnits(reward.totalAmount, tokenMetadata.decimals).toString()
                  });
                  break;
                }
              case 1:
                {
                  erc721Rewards.push({
                    contractAddress: reward.assetContract,
                    tokenId: reward.tokenId.toString()
                  });
                  break;
                }
              case 2:
                {
                  erc1155Rewards.push({
                    contractAddress: reward.assetContract,
                    tokenId: reward.tokenId.toString(),
                    quantityPerReward: reward.totalAmount.toString()
                  });
                  break;
                }
            }
          }
          return {
            erc20Rewards,
            erc721Rewards,
            erc1155Rewards
          };
        }
      });
    }));
    this.abi = _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.e.parse(abi || []);
    this.metadata = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ag(this.contractWrapper, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dP, this.storage);
    this.app = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a$(this.contractWrapper, this.metadata, this.storage);
    this.roles = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ah(this.contractWrapper, Pack.contractRoles);
    this.royalties = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ai(this.contractWrapper, this.metadata);
    this.encoder = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.af(this.contractWrapper);
    this.estimator = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aP(this.contractWrapper);
    this.events = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aQ(this.contractWrapper);
    this.interceptor = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aR(this.contractWrapper);
    this.owner = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aU(this.contractWrapper);
    this._vrf = this.detectVrf();
  }

  /**
   * @internal
   */
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
    this._vrf?.onNetworkUpdated(network);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get a single Pack
   *
   * @remarks Get all the data associated with every pack in this contract.
   *
   * By default, returns the first 100 packs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const pack = await contract.get(0);
   * console.log(packs;
   * ```
   */
  async get(tokenId) {
    return this.erc1155.get(tokenId);
  }

  /**
   * Get All Packs
   *
   * @remarks Get all the data associated with every pack in this contract.
   *
   * By default, returns the first 100 packs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const packs = await contract.getAll();
   * console.log(packs;
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The pack metadata for all packs queried.
   */
  async getAll(queryParams) {
    return this.erc1155.getAll(queryParams);
  }

  /**
   * Get Owned Packs
   *
   * @remarks Get all the data associated with the packs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the packs of
   * const address = "{{wallet_address}}";
   * const packss = await contract.getOwned(address);
   * ```
   *
   * @returns The pack metadata for all the owned packs in the contract.
   */
  async getOwned(walletAddress) {
    return this.erc1155.getOwned(walletAddress);
  }

  /**
   * Get the number of packs created
   * @returns the total number of packs minted in this contract
   * @public
   */
  async getTotalCount() {
    return this.erc1155.totalCount();
  }

  /**
   * Get whether users can transfer packs from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.readContract.hasRole((0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.bE)("transfer"), ethers__WEBPACK_IMPORTED_MODULE_15__.AddressZero);
    return !anyoneCanTransfer;
  }

  /**
   * Get Pack Contents
   * @remarks Get the rewards contained inside a pack.
   *
   * @param packId - The id of the pack to get the contents of.
   * @returns - The contents of the pack.
   *
   * @example
   * ```javascript
   * const packId = 0;
   * const contents = await contract.getPackContents(packId);
   * console.log(contents.erc20Rewards);
   * console.log(contents.erc721Rewards);
   * console.log(contents.erc1155Rewards);
   * ```
   */
  async getPackContents(packId) {
    const {
      contents,
      perUnitAmounts
    } = await this.contractWrapper.readContract.getPackContents(packId);
    const erc20Rewards = [];
    const erc721Rewards = [];
    const erc1155Rewards = [];
    for (let i = 0; i < contents.length; i++) {
      const reward = contents[i];
      const amount = perUnitAmounts[i];
      switch (reward.tokenType) {
        case 0:
          {
            const tokenMetadata = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b8)(this.contractWrapper.getProvider(), reward.assetContract);
            const quantityPerReward = ethers__WEBPACK_IMPORTED_MODULE_11__.formatUnits(amount, tokenMetadata.decimals);
            const totalRewards = ethers__WEBPACK_IMPORTED_MODULE_11__.formatUnits(ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(reward.totalAmount).div(amount), tokenMetadata.decimals);
            erc20Rewards.push({
              contractAddress: reward.assetContract,
              quantityPerReward,
              totalRewards
            });
            break;
          }
        case 1:
          {
            erc721Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString()
            });
            break;
          }
        case 2:
          {
            erc1155Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString(),
              quantityPerReward: amount.toString(),
              totalRewards: ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(reward.totalAmount).div(amount).toString()
            });
            break;
          }
      }
    }
    return {
      erc20Rewards,
      erc721Rewards,
      erc1155Rewards
    };
  }
  /** *****************************
   * PRIVATE FUNCTIONS
   *******************************/

  async toPackContentArgs(metadataWithRewards) {
    const contents = [];
    const numOfRewardUnits = [];
    const {
      erc20Rewards,
      erc721Rewards,
      erc1155Rewards
    } = metadataWithRewards;
    const provider = this.contractWrapper.getProvider();
    const owner = await this.contractWrapper.getSignerAddress();
    for (const erc20 of erc20Rewards) {
      const normalizedQuantity = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b7)(provider, erc20.quantityPerReward, erc20.contractAddress);
      // Multiply the quantity of one reward by the number of rewards
      const totalQuantity = normalizedQuantity.mul(erc20.totalRewards);
      const hasAllowance = await (0,_hasERC20Allowance_59b9da80_browser_esm_js__WEBPACK_IMPORTED_MODULE_16__.h)(this.contractWrapper, erc20.contractAddress, totalQuantity);
      if (!hasAllowance) {
        throw new Error(`ERC20 token with contract address "${erc20.contractAddress}" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("${erc20.contractAddress}").setAllowance("${this.getAddress()}", ${totalQuantity});\n\n`);
      }
      numOfRewardUnits.push(erc20.totalRewards);
      contents.push({
        assetContract: erc20.contractAddress,
        tokenType: 0,
        totalAmount: totalQuantity,
        tokenId: 0
      });
    }
    for (const erc721 of erc721Rewards) {
      const isApproved = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dv)(this.contractWrapper.getProvider(), this.getAddress(), erc721.contractAddress, erc721.tokenId, owner);
      if (!isApproved) {
        throw new Error(`ERC721 token "${erc721.tokenId}" with contract address "${erc721.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("${erc721.contractAddress}").setApprovalForToken("${this.getAddress()}", ${erc721.tokenId});\n\n`);
      }
      numOfRewardUnits.push("1");
      contents.push({
        assetContract: erc721.contractAddress,
        tokenType: 1,
        totalAmount: 1,
        tokenId: erc721.tokenId
      });
    }
    for (const erc1155 of erc1155Rewards) {
      const isApproved = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dv)(this.contractWrapper.getProvider(), this.getAddress(), erc1155.contractAddress, erc1155.tokenId, owner);
      if (!isApproved) {
        throw new Error(`ERC1155 token "${erc1155.tokenId}" with contract address "${erc1155.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("${erc1155.contractAddress}").setApprovalForAll("${this.getAddress()}", true);\n\n`);
      }
      numOfRewardUnits.push(erc1155.totalRewards);
      contents.push({
        assetContract: erc1155.contractAddress,
        tokenType: 2,
        totalAmount: ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(erc1155.quantityPerReward).mul(ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(erc1155.totalRewards)),
        tokenId: erc1155.tokenId
      });
    }
    return {
      contents,
      numOfRewardUnits
    };
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
  detectVrf() {
    if ((0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b$)(this.contractWrapper, "PackVRF")) {
      return new PackVRF(this.contractWrapper.getSignerOrProvider(), this.contractWrapper.readContract.address, this.storage, this.contractWrapper.options, this.chainId);
    }
    return undefined;
  }
}
(0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_9__._)(Pack, "contractRoles", ["admin", "minter", "asset", "transfer"]);




/***/ }),

/***/ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ERC20.json":
/*!**********************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/contracts-js/dist/abis/ERC20.json ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LXBhY2stMDI4MWE3ZGUtYnJvd3Nlci1lc20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEg7QUFDNmxCO0FBQ3BvQjtBQUNaO0FBQ1k7QUFDeEM7QUFDbkI7QUFDNkQ7QUFDdEU7QUFDZTtBQUNvQztBQUNUO0FBQ1E7QUFDRztBQUNHO0FBQ2I7QUFDTTtBQUNFO0FBQ0o7QUFDUztBQUNKO0FBQ0M7QUFDRjtBQUNBO0FBQ1A7QUFDVTtBQUNKO0FBQ0o7QUFDTTtBQUNLO0FBQ0c7QUFDUDtBQUNBO0FBQ0M7QUFDUjtBQUNNO0FBQ0s7QUFDRztBQUNmO0FBQ1U7QUFDRjtBQUNLO0FBQ1A7QUFDUDtBQUNVO0FBQ0Y7QUFDQztBQUNUO0FBQ0s7QUFDVTtBQUNWO0FBQ0E7QUFDSjtBQUNEO0FBQ1E7QUFDUDtBQUNwQztBQUM2QztBQUM5QztBQUNzQztBQUM5QjtBQUNWO0FBQ2dEO0FBQ3hDO0FBQ3FDO0FBQ3BEO0FBQ1E7QUFDRztBQUNrQztBQUNRO0FBQ0M7QUFDUTtBQUNsRDtBQUNaO0FBQytEO0FBQ0M7QUFDeEM7QUFDdUI7QUFDQzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLDBFQUFlLG1CQUFtQixxRkFBVztBQUMvSSxJQUFJLHVFQUFlLHNCQUFzQiwwRUFBZ0I7QUFDekQsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQWUsZUFBZSw4RUFBd0I7QUFDMUQ7QUFDQTtBQUNBLGFBQWEsMEVBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsbUJBQW1CLDhDQUFT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Ly4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvc2RrL2Rpc3QvcGFjay0wMjgxYTdkZS5icm93c2VyLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSwgQSBhcyBBbW91bnRTY2hlbWEsIE4gYXMgTkZUSW5wdXRPclVyaVNjaGVtYSB9IGZyb20gJy4vUXVlcnlQYXJhbXMtN2Q5NDczYjUuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgZHogYXMgQ29udHJhY3RXcmFwcGVyLCBkTyBhcyBGRUFUVVJFX1BBQ0tfVlJGLCBkcyBhcyBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24sIGFWIGFzIFRyYW5zYWN0aW9uLCBhUSBhcyBDb250cmFjdEV2ZW50cywgYjggYXMgZmV0Y2hDdXJyZW5jeU1ldGFkYXRhLCBjSCBhcyByZXNvbHZlQWRkcmVzcywgY18gYXMgTElOS19UT0tFTl9BRERSRVNTLCBhbiBhcyBFcmMyMCwgYWEgYXMgQWRkcmVzc09yRW5zU2NoZW1hLCBhNyBhcyBCaWdOdW1iZXJpc2hTY2hlbWEsIGFiIGFzIFJhd0RhdGVTY2hlbWEsIGJfIGFzIGFzc2VydEVuYWJsZWQsIGUgYXMgQWJpU2NoZW1hLCBhZyBhcyBDb250cmFjdE1ldGFkYXRhLCBkUCBhcyBQYWNrQ29udHJhY3RTY2hlbWEsIGEkIGFzIENvbnRyYWN0QXBwVVJJLCBhaCBhcyBDb250cmFjdFJvbGVzLCBhaSBhcyBDb250cmFjdFJveWFsdHksIGFmIGFzIENvbnRyYWN0RW5jb2RlciwgYVAgYXMgR2FzQ29zdEVzdGltYXRvciwgYVIgYXMgQ29udHJhY3RJbnRlcmNlcHRvciwgYVUgYXMgQ29udHJhY3RPd25lciwgYkUgYXMgZ2V0Um9sZUhhc2gsIGI3IGFzIG5vcm1hbGl6ZVByaWNlVmFsdWUsIGR2IGFzIGlzVG9rZW5BcHByb3ZlZEZvclRyYW5zZmVyLCBiJCBhcyBkZXRlY3RDb250cmFjdEZlYXR1cmUsIGRLIGFzIHVwbG9hZE9yRXh0cmFjdFVSSSB9IGZyb20gJy4vY29udHJhY3QtbWV0YWRhdGEtODhmMDZlZjkuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgUyBhcyBTdGFuZGFyZEVyYzExNTUgfSBmcm9tICcuL2VyYy0xMTU1LXN0YW5kYXJkLTYwN2UyNzI0LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCBFUkMyMEFiaSBmcm9tICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRVJDMjAuanNvbic7XG5pbXBvcnQgSVBhY2tWUkZBYmkgZnJvbSAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQYWNrVlJGRGlyZWN0Lmpzb24nO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyBoIGFzIGhhc0VSQzIwQWxsb3dhbmNlIH0gZnJvbSAnLi9oYXNFUkMyMEFsbG93YW5jZS01OWI5ZGE4MC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ2JuLmpzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMjBfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyMFBlcm1pdC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU11bHRpY2FsbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzcyMV9WMy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFTdXBwbHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTGF6eU1pbnQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvTGF6eU1pbnRXaXRoVGllci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMTE1NV9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTVfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1RW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9FUkMyNzcxQ29udGV4dC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBcHBVUkkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ29udHJhY3RNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEaXJlY3RMaXN0aW5ncy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFbmdsaXNoQXVjdGlvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JT2ZmZXJzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQbGF0Zm9ybUZlZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQcmltYXJ5U2FsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3lhbHR5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvT3duYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBY2NvdW50RmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBY2NvdW50Lmpzb24nO1xuaW1wb3J0ICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Db250cmFjdFB1Ymxpc2hlci5qc29uJztcbmltcG9ydCAnZXZlbnRlbWl0dGVyMyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Gb3J3YXJkZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvc3RvcmFnZSc7XG5pbXBvcnQgJ2Nyb3NzLWZldGNoJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lUaGlyZHdlYkNvbnRyYWN0Lmpzb24nO1xuaW1wb3J0ICdldGhlcnMvbGliL3V0aWxzLmpzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyME1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICd1dWlkJztcbmltcG9ydCAnbWVya2xldHJlZWpzJztcbmltcG9ydCAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxNjUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWxEZXByZWNhdGVkLmpzb24nO1xuaW1wb3J0ICdldGhlcnMvbGliL3V0aWxzJztcbmltcG9ydCAnYnM1OCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeUxvZ2ljLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvZ2VuZXJhdGVkLWFiaXMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdSZWdpc3RyeS5qc29uJztcblxuY2xhc3MgUGFja1ZSRiB7XG4gIGNvbnN0cnVjdG9yKG5ldHdvcmssIGFkZHJlc3MsIHN0b3JhZ2UsIG9wdGlvbnMsIGNoYWluSWQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBjb250cmFjdFdyYXBwZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IG5ldyBDb250cmFjdFdyYXBwZXIobmV0d29yaywgYWRkcmVzcywgSVBhY2tWUkZBYmksIG9wdGlvbnMpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZlYXR1cmVOYW1lXCIsIEZFQVRVUkVfUEFDS19WUkYubmFtZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29udHJhY3RXcmFwcGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3RvcmFnZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNoYWluSWRcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJldmVudHNcIiwgdm9pZCAwKTtcbiAgICAvKipcbiAgICAgKiBPcGVuIHBhY2tcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIGNvbnN0IHRva2VuSWQgPSAwO1xuICAgICAqIGNvbnN0IGFtb3VudCA9IDE7XG4gICAgICogY29uc3QgcmVjZWlwdCA9IGF3YWl0IGNvbnRyYWN0LnBhY2sub3Blbih0b2tlbklkLCBhbW91bnQpO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHJlbWFya3MgT3BlbiBhIHBhY2sgdXNpbmcgQ2hhaW5saW5rIFZSRnMgcmFuZG9tIG51bWJlciBnZW5lcmF0aW9uXG4gICAgICogQHJlbWFya3MgVGhpcyB3aWxsIHJldHVybiBhIHRyYW5zYWN0aW9uIHJlc3VsdCB3aXRoIHRoZSByZXF1ZXN0SWQgb2YgdGhlIG9wZW4gcmVxdWVzdCwgTk9UIHRoZSBjb250ZW50cyBvZiB0aGUgcGFja1xuICAgICAqIEByZW1hcmtzIFRvIGdldCB0aGUgY29udGVudHMgb2YgdGhlIHBhY2ssIHlvdSBtdXN0IGNhbGwgY2xhaW1SZXdhcmRzIG9uY2UgdGhlIFZSRiByZXF1ZXN0IGhhcyBiZWVuIGZ1bGZpbGxlZFxuICAgICAqIEByZW1hcmtzIFlvdSBjYW4gdXNlIHRoZSBjYW5DbGFpbVJld2FyZHMgbWV0aG9kIHRvIGNoZWNrIGlmIHRoZSBWUkYgcmVxdWVzdCBoYXMgYmVlbiBmdWxmaWxsZWRcbiAgICAgKiBAcGFyYW0gdG9rZW5JZFxuICAgICAqIEBwYXJhbSBhbW91bnRcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEB0d2ZlYXR1cmUgUGFja1ZSRlxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9wZW5cIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIGZ1bmN0aW9uICh0b2tlbklkKSB7XG4gICAgICBsZXQgYW1vdW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuICAgICAgbGV0IGdhc0xpbWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiA1MDAwMDA7XG4gICAgICByZXR1cm4gVHJhbnNhY3Rpb24uZnJvbUNvbnRyYWN0V3JhcHBlcih7XG4gICAgICAgIGNvbnRyYWN0V3JhcHBlcjogX3RoaXMuY29udHJhY3RXcmFwcGVyLFxuICAgICAgICBtZXRob2Q6IFwib3BlblBhY2tcIixcbiAgICAgICAgYXJnczogW3Rva2VuSWQsIGFtb3VudF0sXG4gICAgICAgIG92ZXJyaWRlczoge1xuICAgICAgICAgIC8vIEhpZ2hlciBnYXMgbGltaXQgZm9yIG9wZW5pbmcgcGFja3NcbiAgICAgICAgICBnYXNMaW1pdFxuICAgICAgICB9LFxuICAgICAgICBwYXJzZTogcmVjZWlwdCA9PiB7XG4gICAgICAgICAgbGV0IGlkID0gQmlnTnVtYmVyLmZyb20oMCk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gX3RoaXMuY29udHJhY3RXcmFwcGVyLnBhcnNlTG9ncyhcIlBhY2tPcGVuUmVxdWVzdGVkXCIsIHJlY2VpcHQ/LmxvZ3MpO1xuICAgICAgICAgICAgaWQgPSBldmVudFswXS5hcmdzLnJlcXVlc3RJZDtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWNlaXB0LFxuICAgICAgICAgICAgaWRcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KSk7XG4gICAgLyoqXG4gICAgICogQ2xhaW0gdGhlIHJld2FyZHMgZnJvbSBhbiBvcGVuZWQgcGFja1xuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogY29uc3QgcmV3YXJkcyA9IGF3YWl0IGNvbnRyYWN0LnBhY2suY2xhaW1SZXdhcmRzKCk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcmVtYXJrcyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBjb250ZW50cyBvZiB0aGUgcGFja1xuICAgICAqIEByZW1hcmtzIE1ha2Ugc3VyZSB0byBjaGVjayBpZiB0aGUgVlJGIHJlcXVlc3QgaGFzIGJlZW4gZnVsZmlsbGVkIHVzaW5nIGNhbkNsYWltUmV3YXJkcygpIGJlZm9yZSBjYWxsaW5nIHRoaXMgbWV0aG9kXG4gICAgICogQHJldHVybnMgdGhlIHJhbmRvbSByZXdhcmRzIGZyb20gb3BlbmluZyBhIHBhY2tcbiAgICAgKiBAdHdmZWF0dXJlIFBhY2tWUkZcbiAgICAgKi9cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjbGFpbVJld2FyZHNcIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBnYXNMaW1pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogNTAwMDAwO1xuICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uLmZyb21Db250cmFjdFdyYXBwZXIoe1xuICAgICAgICBjb250cmFjdFdyYXBwZXI6IF90aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgICAgbWV0aG9kOiBcImNsYWltUmV3YXJkc1wiLFxuICAgICAgICBhcmdzOiBbXSxcbiAgICAgICAgb3ZlcnJpZGVzOiB7XG4gICAgICAgICAgLy8gSGlnaGVyIGdhcyBsaW1pdCBmb3Igb3BlbmluZyBwYWNrc1xuICAgICAgICAgIGdhc0xpbWl0XG4gICAgICAgIH0sXG4gICAgICAgIHBhcnNlOiBhc3luYyByZWNlaXB0ID0+IHtcbiAgICAgICAgICBjb25zdCBldmVudCA9IF90aGlzLmNvbnRyYWN0V3JhcHBlci5wYXJzZUxvZ3MoXCJQYWNrT3BlbmVkXCIsIHJlY2VpcHQ/LmxvZ3MpO1xuICAgICAgICAgIGlmIChldmVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhY2tPcGVuZWQgZXZlbnQgbm90IGZvdW5kXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCByZXdhcmRzID0gZXZlbnRbMF0uYXJncy5yZXdhcmRVbml0c0Rpc3RyaWJ1dGVkO1xuICAgICAgICAgIHJldHVybiBhd2FpdCBfdGhpcy5wYXJzZVJld2FyZHMocmV3YXJkcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgICB0aGlzLmNvbnRyYWN0V3JhcHBlciA9IGNvbnRyYWN0V3JhcHBlcjtcbiAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuICAgIHRoaXMuY2hhaW5JZCA9IGNoYWluSWQ7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgQ29udHJhY3RFdmVudHModGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICB9XG4gIG9uTmV0d29ya1VwZGF0ZWQobmV0d29yaykge1xuICAgIHRoaXMuY29udHJhY3RXcmFwcGVyLnVwZGF0ZVNpZ25lck9yUHJvdmlkZXIobmV0d29yayk7XG4gIH1cbiAgZ2V0QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3M7XG4gIH1cbiAgYXN5bmMgcGFyc2VSZXdhcmRzKHJld2FyZHMpIHtcbiAgICBjb25zdCBlcmMyMFJld2FyZHMgPSBbXTtcbiAgICBjb25zdCBlcmM3MjFSZXdhcmRzID0gW107XG4gICAgY29uc3QgZXJjMTE1NVJld2FyZHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHJld2FyZCBvZiByZXdhcmRzKSB7XG4gICAgICBzd2l0Y2ggKHJld2FyZC50b2tlblR5cGUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuTWV0YWRhdGEgPSBhd2FpdCBmZXRjaEN1cnJlbmN5TWV0YWRhdGEodGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKSwgcmV3YXJkLmFzc2V0Q29udHJhY3QpO1xuICAgICAgICAgICAgZXJjMjBSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICBxdWFudGl0eVBlclJld2FyZDogZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKHJld2FyZC50b3RhbEFtb3VudCwgdG9rZW5NZXRhZGF0YS5kZWNpbWFscykudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlcmM3MjFSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICB0b2tlbklkOiByZXdhcmQudG9rZW5JZC50b1N0cmluZygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVyYzExNTVSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICB0b2tlbklkOiByZXdhcmQudG9rZW5JZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICBxdWFudGl0eVBlclJld2FyZDogcmV3YXJkLnRvdGFsQW1vdW50LnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJjMjBSZXdhcmRzLFxuICAgICAgZXJjNzIxUmV3YXJkcyxcbiAgICAgIGVyYzExNTVSZXdhcmRzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBhIGxpc3RlbmVyIGZvciB3aGVuIGEgcGFjayBpcyBvcGVuZWRcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCB1bnN1YnNjcmliZSA9IGF3YWl0IGNvbnRyYWN0LnBhY2suYWRkUGFja09wZW5FdmVudExpc3RlbmVyKChwYWNrSWQsIG9wZW5lckFkZHJlc3MsIHJld2FyZHMpID0+IHtcbiAgICogIGNvbnNvbGUubG9nKGBQYWNrICR7cGFja0lkfSB3YXMgb3BlbmVkIGJ5ICR7b3BlbmVyQWRkcmVzc30gYW5kIGNvbnRhaW5lZDpgLCByZXdhcmRzKTtcbiAgICogfSk7XG4gICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgbGlzdGVuZXIgdG8gY2FsbCB3aGVuIGEgcGFjayBpcyBvcGVuZWRcbiAgICogQHJldHVybnMgYSB1bnN1YnNjcmliZSBmdW5jdGlvbiB0byBjbGVhbnVwIHRoZSBsaXN0ZW5lclxuICAgKiBAdHdmZWF0dXJlIFBhY2tWUkZcbiAgICovXG4gIGFzeW5jIGFkZFBhY2tPcGVuRXZlbnRMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmV2ZW50cy5hZGRFdmVudExpc3RlbmVyKFwiUGFja09wZW5lZFwiLCBhc3luYyBldmVudCA9PiB7XG4gICAgICBjYWxsYmFjayhldmVudC5kYXRhLnBhY2tJZC50b1N0cmluZygpLCBldmVudC5kYXRhLm9wZW5lciwgYXdhaXQgdGhpcy5wYXJzZVJld2FyZHMoZXZlbnQuZGF0YS5yZXdhcmRVbml0c0Rpc3RyaWJ1dGVkKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBzcGVjaWZpYyB3YWxsZXQgY2FuIGNsYWltIHJld2FyZHMgYWZ0ZXIgb3BlbmluZyBhIHBhY2tcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBjYW5DbGFpbSA9IGF3YWl0IGNvbnRyYWN0LnBhY2suY2FuQ2xhaW1SZXdhcmRzKFwie3t3YWxsZXRfYWRkcmVzc319XCIpO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIGNsYWltZXJBZGRyZXNzIE9wdGlvbmFsOiB0aGUgYWRkcmVzcyB0byBjaGVjayBpZiB0aGV5IGNhbiBjbGFpbSByZXdhcmRzLCBkZWZhdWx0cyB0byB0aGUgY29ubmVjdGVkIGFkZHJlc3NcbiAgICogQHJldHVybnMgd2hldGhlciB0aGUgY29ubmVjdGVkIGFkZHJlc3MgY2FuIGNsYWltIHJld2FyZHMgYWZ0ZXIgb3BlbmluZyBhIHBhY2tcbiAgICogQHR3ZmVhdHVyZSBQYWNrVlJGXG4gICAqL1xuICBhc3luYyBjYW5DbGFpbVJld2FyZHMoY2xhaW1lckFkZHJlc3MpIHtcbiAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgcmVzb2x2ZUFkZHJlc3MoY2xhaW1lckFkZHJlc3MgfHwgKGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKSkpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuY2FuQ2xhaW1SZXdhcmRzKGFkZHJlc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gYSBwYWNrIGFuZCBjbGFpbSB0aGUgcmV3YXJkc1xuICAgKiBAcmVtYXJrcyBUaGlzIGZ1bmN0aW9uIHdpbGwgb25seSBzdGFydCB0aGUgZmxvdyBvZiBvcGVuaW5nIGEgcGFjaywgdGhlIHJld2FyZHMgd2lsbCBiZSBncmFudGVkIGF1dG9tYXRpY2FsbHkgdG8gdGhlIGNvbm5lY3RlZCBhZGRyZXNzIGFmdGVyIFZSRiByZXF1ZXN0IGlzIGZ1bGZpbGxlZFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IHBhY2tJZCA9IDA7XG4gICAqIGNvbnN0IGFtb3VudCA9IDE7XG4gICAqIGNvbnN0IHsgaWQgfSA9IGF3YWl0IGNvbnRyYWN0LnBhY2sub3BlbkFuZENsYWltKHBhY2tJZCwgYW1vdW50KTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBwYWNrSWQgVGhlIGlkIG9mIHRoZSBwYWNrIHRvIG9wZW5cbiAgICogQHBhcmFtIGFtb3VudCBPcHRpb25hbDogdGhlIGFtb3VudCBvZiBwYWNrcyB0byBvcGVuLCBkZWZhdWx0cyB0byAxXG4gICAqIEBwYXJhbSBnYXNMaW1pdCBPcHRpb25hbDogdGhlIGdhcyBsaW1pdCB0byB1c2UgZm9yIHRoZSBWUkYgY2FsbGJhY2sgdHJhbnNhY3Rpb24sIGRlZmF1bHRzIHRvIDUwMDAwMFxuICAgKiBAcmV0dXJuc1xuICAgKiBAdHdmZWF0dXJlIFBhY2tWUkZcbiAgICovXG4gIGFzeW5jIG9wZW5BbmRDbGFpbShwYWNrSWQpIHtcbiAgICBsZXQgYW1vdW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuICAgIGxldCBnYXNMaW1pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogNTAwMDAwO1xuICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5zZW5kVHJhbnNhY3Rpb24oXCJvcGVuUGFja0FuZENsYWltUmV3YXJkc1wiLCBbcGFja0lkLCBhbW91bnQsIGdhc0xpbWl0XSwge1xuICAgICAgLy8gSGlnaGVyIGdhcyBsaW1pdCBmb3Igb3BlbmluZyBwYWNrc1xuICAgICAgZ2FzTGltaXQ6IEJpZ051bWJlci5mcm9tKDUwMDAwMClcbiAgICB9KTtcbiAgICBsZXQgaWQgPSBCaWdOdW1iZXIuZnJvbSgwKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmNvbnRyYWN0V3JhcHBlci5wYXJzZUxvZ3MoXCJQYWNrT3BlblJlcXVlc3RlZFwiLCByZWNlaXB0Py5sb2dzKTtcbiAgICAgIGlkID0gZXZlbnRbMF0uYXJncy5yZXF1ZXN0SWQ7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4ge1xuICAgICAgcmVjZWlwdCxcbiAgICAgIGlkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIExJTksgYmFsYW5jZSBvZiB0aGUgY29udHJhY3RcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBiYWxhbmNlID0gYXdhaXQgY29udHJhY3QucGFjay5nZXRMaW5rQmFsYW5jZSgpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHJldHVybnMgdGhlIGJhbGFuY2Ugb2YgTElOSyBpbiB0aGUgY29udHJhY3RcbiAgICogQHR3ZmVhdHVyZSBQYWNrVlJGXG4gICAqL1xuICBhc3luYyBnZXRMaW5rQmFsYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaW5rQ29udHJhY3QoKS5iYWxhbmNlT2YodGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZmVyIExJTksgdG8gdGhpcyBjb250cmFjdFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGFtb3VudCA9IDE7XG4gICAqIGF3YWl0IGNvbnRyYWN0LnBhY2sudHJhbnNmZXJMaW5rKGFtb3VudCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gYW1vdW50IHRoZSBhbW91bnQgb2YgTElOSyB0byB0cmFuc2ZlciB0byB0aGUgY29udHJhY3RcbiAgICogQHR3ZmVhdHVyZSBQYWNrVlJGXG4gICAqL1xuICBhc3luYyB0cmFuc2ZlckxpbmsoYW1vdW50KSB7XG4gICAgYXdhaXQgdGhpcy5nZXRMaW5rQ29udHJhY3QoKS50cmFuc2Zlcih0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuYWRkcmVzcywgYW1vdW50KTtcbiAgfVxuICBnZXRMaW5rQ29udHJhY3QoKSB7XG4gICAgY29uc3QgbGlua0FkZHJlc3MgPSBMSU5LX1RPS0VOX0FERFJFU1NbdGhpcy5jaGFpbklkXTtcbiAgICBpZiAoIWxpbmtBZGRyZXNzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIExJTksgdG9rZW4gYWRkcmVzcyBmb3VuZCBmb3IgY2hhaW5JZCAke3RoaXMuY2hhaW5JZH1gKTtcbiAgICB9XG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgQ29udHJhY3RXcmFwcGVyKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lck9yUHJvdmlkZXIoKSwgbGlua0FkZHJlc3MsIEVSQzIwQWJpLCB0aGlzLmNvbnRyYWN0V3JhcHBlci5vcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IEVyYzIwKGNvbnRyYWN0LCB0aGlzLnN0b3JhZ2UsIHRoaXMuY2hhaW5JZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgQ29tbW9uV3JhcHBhYmxlU2NoZW1hID0gei5vYmplY3Qoe1xuICBjb250cmFjdEFkZHJlc3M6IEFkZHJlc3NPckVuc1NjaGVtYVxufSk7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IEVSQzIwV3JhcHBhYmxlU2NoZW1hID0gQ29tbW9uV3JhcHBhYmxlU2NoZW1hLmV4dGVuZCh7XG4gIHF1YW50aXR5OiBBbW91bnRTY2hlbWFcbn0pO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBFUkM3MjFXcmFwcGFibGVTY2hlbWEgPSBDb21tb25XcmFwcGFibGVTY2hlbWEuZXh0ZW5kKHtcbiAgdG9rZW5JZDogQmlnTnVtYmVyaXNoU2NoZW1hXG59KTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgRVJDMTE1NVdyYXBwYWJsZVNjaGVtYSA9IENvbW1vbldyYXBwYWJsZVNjaGVtYS5leHRlbmQoe1xuICB0b2tlbklkOiBCaWdOdW1iZXJpc2hTY2hlbWEsXG4gIHF1YW50aXR5OiBCaWdOdW1iZXJpc2hTY2hlbWFcbn0pO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBFUkMyMFJld2FyZFNjaGVtYSA9IEVSQzIwV3JhcHBhYmxlU2NoZW1hLm9taXQoe1xuICBxdWFudGl0eTogdHJ1ZVxufSkuZXh0ZW5kKHtcbiAgcXVhbnRpdHlQZXJSZXdhcmQ6IEFtb3VudFNjaGVtYVxufSk7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IEVSQzcyMVJld2FyZFNjaGVtYSA9IEVSQzcyMVdyYXBwYWJsZVNjaGVtYTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgRVJDMTE1NVJld2FyZFNjaGVtYSA9IEVSQzExNTVXcmFwcGFibGVTY2hlbWEub21pdCh7XG4gIHF1YW50aXR5OiB0cnVlXG59KS5leHRlbmQoe1xuICBxdWFudGl0eVBlclJld2FyZDogQmlnTnVtYmVyaXNoU2NoZW1hXG59KTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgRVJDMjBSZXdhcmRDb250ZW50c1NjaGVtYSA9IEVSQzIwUmV3YXJkU2NoZW1hLmV4dGVuZCh7XG4gIHRvdGFsUmV3YXJkczogQmlnTnVtYmVyaXNoU2NoZW1hLmRlZmF1bHQoXCIxXCIpXG59KTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgRVJDNzIxUmV3YXJkQ29udGVudHNTY2hlbWEgPSBFUkM3MjFSZXdhcmRTY2hlbWE7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IEVSQzExNTVSZXdhcmRDb250ZW50c1NjaGVtYSA9IEVSQzExNTVSZXdhcmRTY2hlbWEuZXh0ZW5kKHtcbiAgdG90YWxSZXdhcmRzOiBCaWdOdW1iZXJpc2hTY2hlbWEuZGVmYXVsdChcIjFcIilcbn0pO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG56Lm9iamVjdCh7XG4gIGVyYzIwUmV3YXJkczogei5hcnJheShFUkMyMFJld2FyZFNjaGVtYSkuZGVmYXVsdChbXSksXG4gIGVyYzcyMVJld2FyZHM6IHouYXJyYXkoRVJDNzIxUmV3YXJkU2NoZW1hKS5kZWZhdWx0KFtdKSxcbiAgZXJjMTE1NVJld2FyZHM6IHouYXJyYXkoRVJDMTE1NVJld2FyZFNjaGVtYSkuZGVmYXVsdChbXSlcbn0pO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBQYWNrUmV3YXJkc091dHB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZXJjMjBSZXdhcmRzOiB6LmFycmF5KEVSQzIwUmV3YXJkQ29udGVudHNTY2hlbWEpLmRlZmF1bHQoW10pLFxuICBlcmM3MjFSZXdhcmRzOiB6LmFycmF5KEVSQzcyMVJld2FyZENvbnRlbnRzU2NoZW1hKS5kZWZhdWx0KFtdKSxcbiAgZXJjMTE1NVJld2FyZHM6IHouYXJyYXkoRVJDMTE1NVJld2FyZENvbnRlbnRzU2NoZW1hKS5kZWZhdWx0KFtdKVxufSk7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IFBhY2tNZXRhZGF0YUlucHV0U2NoZW1hID0gUGFja1Jld2FyZHNPdXRwdXRTY2hlbWEuZXh0ZW5kKHtcbiAgcGFja01ldGFkYXRhOiBORlRJbnB1dE9yVXJpU2NoZW1hLFxuICByZXdhcmRzUGVyUGFjazogQmlnTnVtYmVyaXNoU2NoZW1hLmRlZmF1bHQoXCIxXCIpLFxuICBvcGVuU3RhcnRUaW1lOiBSYXdEYXRlU2NoZW1hLmRlZmF1bHQobmV3IERhdGUoKSlcbn0pO1xuXG4vKipcbiAqIEBwdWJsaWNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBsb290Ym94ZXMgb2YgTkZUcyB3aXRoIHJhcml0eSBiYXNlZCBvcGVuIG1lY2hhbmljcy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCI7XG4gKlxuICogY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKFwie3tjaGFpbk5hbWV9fVwiKTtcbiAqIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgc2RrLmdldENvbnRyYWN0KFwie3tjb250cmFjdF9hZGRyZXNzfX1cIiwgXCJwYWNrXCIpO1xuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBQYWNrIGV4dGVuZHMgU3RhbmRhcmRFcmMxMTU1IHtcbiAgLyoqXG4gICAqIENvbmZpZ3VyZSByb3lhbHRpZXNcbiAgICogQHJlbWFya3MgU2V0IHlvdXIgb3duIHJveWFsdGllcyBmb3IgdGhlIGVudGlyZSBjb250cmFjdCBvciBwZXIgcGFja1xuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIHJveWFsdGllcyBvbiB0aGUgd2hvbGUgY29udHJhY3RcbiAgICogY29udHJhY3Qucm95YWx0aWVzLnNldERlZmF1bHRSb3lhbHR5SW5mbyh7XG4gICAqICAgc2VsbGVyX2ZlZV9iYXNpc19wb2ludHM6IDEwMCwgLy8gMSVcbiAgICogICBmZWVfcmVjaXBpZW50OiBcIjB4Li4uXCJcbiAgICogfSk7XG4gICAqIC8vIG92ZXJyaWRlIHJveWFsdHkgZm9yIGEgcGFydGljdWxhciBwYWNrXG4gICAqIGNvbnRyYWN0LnJveWFsdGllcy5zZXRUb2tlblJveWFsdHlJbmZvKHBhY2tJZCwge1xuICAgKiAgIHNlbGxlcl9mZWVfYmFzaXNfcG9pbnRzOiA1MDAsIC8vIDUlXG4gICAqICAgZmVlX3JlY2lwaWVudDogXCIweC4uLlwiXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICAvKipcbiAgICogSWYgZW5hYmxlZCBpbiB0aGUgY29udHJhY3QsIHVzZSB0aGUgQ2hhaW5saW5rIFZSRiBmdW5jdGlvbmFsaXR5IHRvIG9wZW4gcGFja3NcbiAgICovXG4gIGdldCB2cmYoKSB7XG4gICAgcmV0dXJuIGFzc2VydEVuYWJsZWQodGhpcy5fdnJmLCBGRUFUVVJFX1BBQ0tfVlJGKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihuZXR3b3JrLCBhZGRyZXNzLCBzdG9yYWdlKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBsZXQgYWJpID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgPyBhcmd1bWVudHNbNF0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNoYWluSWQgPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY29udHJhY3RXcmFwcGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiBuZXcgQ29udHJhY3RXcmFwcGVyKG5ldHdvcmssIGFkZHJlc3MsIGFiaSwgb3B0aW9ucy5nYXNsZXNzICYmIFwib3BlbnplcHBlbGluXCIgaW4gb3B0aW9ucy5nYXNsZXNzID8ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGdhc2xlc3M6IHtcbiAgICAgICAgLi4ub3B0aW9ucy5nYXNsZXNzLFxuICAgICAgICBvcGVuemVwcGVsaW46IHtcbiAgICAgICAgICAuLi5vcHRpb25zLmdhc2xlc3Mub3BlbnplcHBlbGluLFxuICAgICAgICAgIHVzZUVPQUZvcndhcmRlcjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSA6IG9wdGlvbnMpO1xuICAgIHN1cGVyKGNvbnRyYWN0V3JhcHBlciwgc3RvcmFnZSwgY2hhaW5JZCk7XG4gICAgX3RoaXMgPSB0aGlzO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFiaVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1ldGFkYXRhXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXBwXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm9sZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmNvZGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXN0aW1hdG9yXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm95YWx0aWVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaW50ZXJjZXB0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvd25lclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl92cmZcIiwgdm9pZCAwKTtcbiAgICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogV1JJVEUgRlVOQ1RJT05TXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIFBhY2tcbiAgICAgKiBAcmVtYXJrcyBDcmVhdGUgYSBuZXcgcGFjayB3aXRoIHRoZSBnaXZlbiBtZXRhZGF0YSBhbmQgcmV3YXJkcyBhbmQgbWludCBpdCB0byB0aGUgY29ubmVjdGVkIHdhbGxldC5cbiAgICAgKiBAcmVtYXJrcyBTZWUge0BsaW5rIFBhY2suY3JlYXRlVG99XG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWV0YWRhdGFXaXRoUmV3YXJkcyAtIHRoZSBtZXRhZGF0YSBhbmQgcmV3YXJkcyB0byBpbmNsdWRlIGluIHRoZSBwYWNrXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogY29uc3QgcGFjayA9IHtcbiAgICAgKiAgIC8vIFRoZSBtZXRhZGF0YSBmb3IgdGhlIHBhY2sgTkZUIGl0c2VsZlxuICAgICAqICAgcGFja01ldGFkYXRhOiB7XG4gICAgICogICAgIG5hbWU6IFwiTXkgUGFja1wiLFxuICAgICAqICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgbmV3IHBhY2tcIixcbiAgICAgKiAgICAgaW1hZ2U6IFwiaXBmczovLy4uLlwiLFxuICAgICAqICAgfSxcbiAgICAgKiAgIC8vIEVSQzIwIHJld2FyZHMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIHBhY2tcbiAgICAgKiAgIGVyYzIwUmV3YXJkczogW1xuICAgICAqICAgICB7XG4gICAgICogICAgICAgYXNzZXRDb250cmFjdDogXCIweC4uLlwiLFxuICAgICAqICAgICAgIHF1YW50aXR5UGVyUmV3YXJkOiA1LFxuICAgICAqICAgICAgIHF1YW50aXR5OiAxMDAsXG4gICAgICogICAgICAgdG90YWxSZXdhcmRzOiAyMCxcbiAgICAgKiAgICAgfVxuICAgICAqICAgXSxcbiAgICAgKiAgIC8vIEVSQzcyMSByZXdhcmRzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBwYWNrXG4gICAgICogICBlcmM3MjFSZXdhcmRzOiBbXG4gICAgICogICAgIHtcbiAgICAgKiAgICAgICBhc3NldENvbnRyYWN0OiBcIjB4Li4uXCIsXG4gICAgICogICAgICAgdG9rZW5JZDogMCxcbiAgICAgKiAgICAgfVxuICAgICAqICAgXSxcbiAgICAgKiAgIC8vIEVSQzExNTUgcmV3YXJkcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgcGFja1xuICAgICAqICAgZXJjMTE1NVJld2FyZHM6IFtcbiAgICAgKiAgICAge1xuICAgICAqICAgICAgIGFzc2V0Q29udHJhY3Q6IFwiMHguLi5cIixcbiAgICAgKiAgICAgICB0b2tlbklkOiAwLFxuICAgICAqICAgICAgIHF1YW50aXR5UGVyUmV3YXJkOiAxLFxuICAgICAqICAgICAgIHRvdGFsUmV3YXJkczogMTAwLFxuICAgICAqICAgICB9XG4gICAgICogICBdLFxuICAgICAqICAgb3BlblN0YXJ0VGltZTogbmV3IERhdGUoKSwgLy8gdGhlIGRhdGUgdGhhdCBwYWNrcyBjYW4gc3RhcnQgdG8gYmUgb3BlbmVkLCBkZWZhdWx0cyB0byBub3dcbiAgICAgKiAgIHJld2FyZHNQZXJQYWNrOiAxLCAvLyB0aGUgbnVtYmVyIG9mIHJld2FyZHMgaW4gZWFjaCBwYWNrLCBkZWZhdWx0cyB0byAxXG4gICAgICogfVxuICAgICAqXG4gICAgICogY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5jcmVhdGUocGFjayk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY3JlYXRlXCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyBtZXRhZGF0YVdpdGhSZXdhcmRzID0+IHtcbiAgICAgIGNvbnN0IHNpZ25lckFkZHJlc3MgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRTaWduZXJBZGRyZXNzKCk7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVUby5wcmVwYXJlKHNpZ25lckFkZHJlc3MsIG1ldGFkYXRhV2l0aFJld2FyZHMpO1xuICAgIH0pKTtcbiAgICAvKipcbiAgICAgKiBBZGQgUGFjayBDb250ZW50c1xuICAgICAqIEByZW1hcmtzIEFkZCBjb250ZW50cyB0byBhbiBleGlzdGluZyBwYWNrLlxuICAgICAqIEByZW1hcmtzIFNlZSB7QGxpbmsgUGFjay5hZGRQYWNrQ29udGVudHN9XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja0lkIC0gdG9rZW4gSWQgb2YgdGhlIHBhY2sgdG8gYWRkIGNvbnRlbnRzIHRvXG4gICAgICogQHBhcmFtIHBhY2tDb250ZW50cyAtIHRoZSByZXdhcmRzIHRvIGluY2x1ZGUgaW4gdGhlIHBhY2tcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiBjb25zdCBwYWNrQ29udGVudHMgPSB7XG4gICAgICogICAvLyBFUkMyMCByZXdhcmRzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBwYWNrXG4gICAgICogICBlcmMyMFJld2FyZHM6IFtcbiAgICAgKiAgICAge1xuICAgICAqICAgICAgIGFzc2V0Q29udHJhY3Q6IFwiMHguLi5cIixcbiAgICAgKiAgICAgICBxdWFudGl0eVBlclJld2FyZDogNSxcbiAgICAgKiAgICAgICBxdWFudGl0eTogMTAwLFxuICAgICAqICAgICAgIHRvdGFsUmV3YXJkczogMjAsXG4gICAgICogICAgIH1cbiAgICAgKiAgIF0sXG4gICAgICogICAvLyBFUkM3MjEgcmV3YXJkcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgcGFja1xuICAgICAqICAgZXJjNzIxUmV3YXJkczogW1xuICAgICAqICAgICB7XG4gICAgICogICAgICAgYXNzZXRDb250cmFjdDogXCIweC4uLlwiLFxuICAgICAqICAgICAgIHRva2VuSWQ6IDAsXG4gICAgICogICAgIH1cbiAgICAgKiAgIF0sXG4gICAgICogICAvLyBFUkMxMTU1IHJld2FyZHMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIHBhY2tcbiAgICAgKiAgIGVyYzExNTVSZXdhcmRzOiBbXG4gICAgICogICAgIHtcbiAgICAgKiAgICAgICBhc3NldENvbnRyYWN0OiBcIjB4Li4uXCIsXG4gICAgICogICAgICAgdG9rZW5JZDogMCxcbiAgICAgKiAgICAgICBxdWFudGl0eVBlclJld2FyZDogMSxcbiAgICAgKiAgICAgICB0b3RhbFJld2FyZHM6IDEwMCxcbiAgICAgKiAgICAgfVxuICAgICAqICAgXSxcbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LmFkZFBhY2tDb250ZW50cyhwYWNrSWQsIHBhY2tDb250ZW50cyk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWRkUGFja0NvbnRlbnRzXCIsIGJ1aWxkVHJhbnNhY3Rpb25GdW5jdGlvbihhc3luYyAocGFja0lkLCBwYWNrQ29udGVudHMpID0+IHtcbiAgICAgIGNvbnN0IHNpZ25lckFkZHJlc3MgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRTaWduZXJBZGRyZXNzKCk7XG4gICAgICBjb25zdCBwYXJzZWRDb250ZW50cyA9IGF3YWl0IFBhY2tSZXdhcmRzT3V0cHV0U2NoZW1hLnBhcnNlQXN5bmMocGFja0NvbnRlbnRzKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29udGVudHMsXG4gICAgICAgIG51bU9mUmV3YXJkVW5pdHNcbiAgICAgIH0gPSBhd2FpdCB0aGlzLnRvUGFja0NvbnRlbnRBcmdzKHBhcnNlZENvbnRlbnRzKTtcbiAgICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgICAgbWV0aG9kOiBcImFkZFBhY2tDb250ZW50c1wiLFxuICAgICAgICBhcmdzOiBbcGFja0lkLCBjb250ZW50cywgbnVtT2ZSZXdhcmRVbml0cywgc2lnbmVyQWRkcmVzc10sXG4gICAgICAgIHBhcnNlOiByZWNlaXB0ID0+IHtcbiAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuY29udHJhY3RXcmFwcGVyLnBhcnNlTG9ncyhcIlBhY2tVcGRhdGVkXCIsIHJlY2VpcHQ/LmxvZ3MpO1xuICAgICAgICAgIGlmIChldmVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhY2tVcGRhdGVkIGV2ZW50IG5vdCBmb3VuZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaWQgPSBldmVudFswXS5hcmdzLnBhY2tJZDtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgcmVjZWlwdCxcbiAgICAgICAgICAgIGRhdGE6ICgpID0+IHRoaXMuZXJjMTE1NS5nZXQoaWQpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBQYWNrIFRvIFdhbGxldFxuICAgICAqIEByZW1hcmtzIENyZWF0ZSBhIG5ldyBwYWNrIHdpdGggdGhlIGdpdmVuIG1ldGFkYXRhIGFuZCByZXdhcmRzIGFuZCBtaW50IGl0IHRvIHRoZSBzcGVjaWZpZWQgYWRkcmVzcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0byAtIHRoZSBhZGRyZXNzIHRvIG1pbnQgdGhlIHBhY2sgdG9cbiAgICAgKiBAcGFyYW0gbWV0YWRhdGFXaXRoUmV3YXJkcyAtIHRoZSBtZXRhZGF0YSBhbmQgcmV3YXJkcyB0byBpbmNsdWRlIGluIHRoZSBwYWNrXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiBjb25zdCBwYWNrID0ge1xuICAgICAqICAgLy8gVGhlIG1ldGFkYXRhIGZvciB0aGUgcGFjayBORlQgaXRzZWxmXG4gICAgICogICBwYWNrTWV0YWRhdGE6IHtcbiAgICAgKiAgICAgbmFtZTogXCJNeSBQYWNrXCIsXG4gICAgICogICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBuZXcgcGFja1wiLFxuICAgICAqICAgICBpbWFnZTogXCJpcGZzOi8vLi4uXCIsXG4gICAgICogICB9LFxuICAgICAqICAgLy8gRVJDMjAgcmV3YXJkcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgcGFja1xuICAgICAqICAgZXJjMjBSZXdhcmRzOiBbXG4gICAgICogICAgIHtcbiAgICAgKiAgICAgICBhc3NldENvbnRyYWN0OiBcIjB4Li4uXCIsXG4gICAgICogICAgICAgcXVhbnRpdHlQZXJSZXdhcmQ6IDUsXG4gICAgICogICAgICAgcXVhbnRpdHk6IDEwMCxcbiAgICAgKiAgICAgICB0b3RhbFJld2FyZHM6IDIwLFxuICAgICAqICAgICB9XG4gICAgICogICBdLFxuICAgICAqICAgLy8gRVJDNzIxIHJld2FyZHMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIHBhY2tcbiAgICAgKiAgIGVyYzcyMVJld2FyZHM6IFtcbiAgICAgKiAgICAge1xuICAgICAqICAgICAgIGFzc2V0Q29udHJhY3Q6IFwiMHguLi5cIixcbiAgICAgKiAgICAgICB0b2tlbklkOiAwLFxuICAgICAqICAgICB9XG4gICAgICogICBdLFxuICAgICAqICAgLy8gRVJDMTE1NSByZXdhcmRzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBwYWNrXG4gICAgICogICBlcmMxMTU1UmV3YXJkczogW1xuICAgICAqICAgICB7XG4gICAgICogICAgICAgYXNzZXRDb250cmFjdDogXCIweC4uLlwiLFxuICAgICAqICAgICAgIHRva2VuSWQ6IDAsXG4gICAgICogICAgICAgcXVhbnRpdHlQZXJSZXdhcmQ6IDEsXG4gICAgICogICAgICAgdG90YWxSZXdhcmRzOiAxMDAsXG4gICAgICogICAgIH1cbiAgICAgKiAgIF0sXG4gICAgICogICBvcGVuU3RhcnRUaW1lOiBuZXcgRGF0ZSgpLCAvLyB0aGUgZGF0ZSB0aGF0IHBhY2tzIGNhbiBzdGFydCB0byBiZSBvcGVuZWQsIGRlZmF1bHRzIHRvIG5vd1xuICAgICAqICAgcmV3YXJkc1BlclBhY2s6IDEsIC8vIHRoZSBudW1iZXIgb2YgcmV3YXJkcyBpbiBlYWNoIHBhY2ssIGRlZmF1bHRzIHRvIDFcbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZVRvKFwiMHguLi5cIiwgcGFjayk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY3JlYXRlVG9cIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jICh0bywgbWV0YWRhdGFXaXRoUmV3YXJkcykgPT4ge1xuICAgICAgY29uc3QgdXJpID0gYXdhaXQgdXBsb2FkT3JFeHRyYWN0VVJJKG1ldGFkYXRhV2l0aFJld2FyZHMucGFja01ldGFkYXRhLCB0aGlzLnN0b3JhZ2UpO1xuICAgICAgY29uc3QgcGFyc2VkTWV0YWRhdGEgPSBhd2FpdCBQYWNrTWV0YWRhdGFJbnB1dFNjaGVtYS5wYXJzZUFzeW5jKG1ldGFkYXRhV2l0aFJld2FyZHMpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBlcmMyMFJld2FyZHMsXG4gICAgICAgIGVyYzcyMVJld2FyZHMsXG4gICAgICAgIGVyYzExNTVSZXdhcmRzXG4gICAgICB9ID0gcGFyc2VkTWV0YWRhdGE7XG4gICAgICBjb25zdCByZXdhcmRzRGF0YSA9IHtcbiAgICAgICAgZXJjMjBSZXdhcmRzLFxuICAgICAgICBlcmM3MjFSZXdhcmRzLFxuICAgICAgICBlcmMxMTU1UmV3YXJkc1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29udGVudHMsXG4gICAgICAgIG51bU9mUmV3YXJkVW5pdHNcbiAgICAgIH0gPSBhd2FpdCB0aGlzLnRvUGFja0NvbnRlbnRBcmdzKHJld2FyZHNEYXRhKTtcbiAgICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgICAgbWV0aG9kOiBcImNyZWF0ZVBhY2tcIixcbiAgICAgICAgYXJnczogW2NvbnRlbnRzLCBudW1PZlJld2FyZFVuaXRzLCB1cmksIHBhcnNlZE1ldGFkYXRhLm9wZW5TdGFydFRpbWUsIHBhcnNlZE1ldGFkYXRhLnJld2FyZHNQZXJQYWNrLCBhd2FpdCByZXNvbHZlQWRkcmVzcyh0byldLFxuICAgICAgICBwYXJzZTogcmVjZWlwdCA9PiB7XG4gICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmNvbnRyYWN0V3JhcHBlci5wYXJzZUxvZ3MoXCJQYWNrQ3JlYXRlZFwiLCByZWNlaXB0Py5sb2dzKTtcbiAgICAgICAgICBpZiAoZXZlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYWNrQ3JlYXRlZCBldmVudCBub3QgZm91bmRcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHBhY2tJZCA9IGV2ZW50WzBdLmFyZ3MucGFja0lkO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogcGFja0lkLFxuICAgICAgICAgICAgcmVjZWlwdCxcbiAgICAgICAgICAgIGRhdGE6ICgpID0+IHRoaXMuZXJjMTE1NS5nZXQocGFja0lkKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgICAvKipcbiAgICAgKiBPcGVuIFBhY2tcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIC0gT3BlbiBhIHBhY2sgdG8gcmV2ZWFsIHRoZSBjb250YWluZWQgcmV3YXJkcy4gVGhpcyB3aWxsIGJ1cm4gdGhlIHNwZWNpZmllZCBwYWNrIGFuZFxuICAgICAqIHRoZSBjb250YWluZWQgYXNzZXRzIHdpbGwgYmUgdHJhbnNmZXJyZWQgdG8gdGhlIG9wZW5pbmcgdXNlcnMgd2FsbGV0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VuSWQgLSB0aGUgdG9rZW4gSUQgb2YgdGhlIHBhY2sgeW91IHdhbnQgdG8gb3BlblxuICAgICAqIEBwYXJhbSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIHBhY2tzIHlvdSB3YW50IHRvIG9wZW5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIGNvbnN0IHRva2VuSWQgPSAwXG4gICAgICogY29uc3QgYW1vdW50ID0gMVxuICAgICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3Qub3Blbih0b2tlbklkLCBhbW91bnQpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9wZW5cIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIGZ1bmN0aW9uICh0b2tlbklkKSB7XG4gICAgICBsZXQgYW1vdW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuICAgICAgbGV0IGdhc0xpbWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiA1MDAwMDA7XG4gICAgICBpZiAoX3RoaXMuX3ZyZikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGNvbnRyYWN0IGlzIHVzaW5nIENoYWlubGluayBWUkYsIHVzZSBgY29udHJhY3QudnJmLm9wZW4oKWAgb3IgYGNvbnRyYWN0LnZyZi5vcGVuQW5kQ2xhaW0oKWAgaW5zdGVhZFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgICAgY29udHJhY3RXcmFwcGVyOiBfdGhpcy5jb250cmFjdFdyYXBwZXIsXG4gICAgICAgIG1ldGhvZDogXCJvcGVuUGFja1wiLFxuICAgICAgICBhcmdzOiBbdG9rZW5JZCwgYW1vdW50XSxcbiAgICAgICAgb3ZlcnJpZGVzOiB7XG4gICAgICAgICAgLy8gSGlnaGVyIGdhcyBsaW1pdCBmb3Igb3BlbmluZyBwYWNrc1xuICAgICAgICAgIGdhc0xpbWl0XG4gICAgICAgIH0sXG4gICAgICAgIHBhcnNlOiBhc3luYyByZWNlaXB0ID0+IHtcbiAgICAgICAgICBjb25zdCBldmVudCA9IF90aGlzLmNvbnRyYWN0V3JhcHBlci5wYXJzZUxvZ3MoXCJQYWNrT3BlbmVkXCIsIHJlY2VpcHQ/LmxvZ3MpO1xuICAgICAgICAgIGlmIChldmVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhY2tPcGVuZWQgZXZlbnQgbm90IGZvdW5kXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCByZXdhcmRzID0gZXZlbnRbMF0uYXJncy5yZXdhcmRVbml0c0Rpc3RyaWJ1dGVkO1xuICAgICAgICAgIGNvbnN0IGVyYzIwUmV3YXJkcyA9IFtdO1xuICAgICAgICAgIGNvbnN0IGVyYzcyMVJld2FyZHMgPSBbXTtcbiAgICAgICAgICBjb25zdCBlcmMxMTU1UmV3YXJkcyA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgcmV3YXJkIG9mIHJld2FyZHMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocmV3YXJkLnRva2VuVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdG9rZW5NZXRhZGF0YSA9IGF3YWl0IGZldGNoQ3VycmVuY3lNZXRhZGF0YShfdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKSwgcmV3YXJkLmFzc2V0Q29udHJhY3QpO1xuICAgICAgICAgICAgICAgICAgZXJjMjBSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eVBlclJld2FyZDogZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKHJld2FyZC50b3RhbEFtb3VudCwgdG9rZW5NZXRhZGF0YS5kZWNpbWFscykudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBlcmM3MjFSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICAgICAgICB0b2tlbklkOiByZXdhcmQudG9rZW5JZC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGVyYzExNTVSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICAgICAgICB0b2tlbklkOiByZXdhcmQudG9rZW5JZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eVBlclJld2FyZDogcmV3YXJkLnRvdGFsQW1vdW50LnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXJjMjBSZXdhcmRzLFxuICAgICAgICAgICAgZXJjNzIxUmV3YXJkcyxcbiAgICAgICAgICAgIGVyYzExNTVSZXdhcmRzXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSkpO1xuICAgIHRoaXMuYWJpID0gQWJpU2NoZW1hLnBhcnNlKGFiaSB8fCBbXSk7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG5ldyBDb250cmFjdE1ldGFkYXRhKHRoaXMuY29udHJhY3RXcmFwcGVyLCBQYWNrQ29udHJhY3RTY2hlbWEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5hcHAgPSBuZXcgQ29udHJhY3RBcHBVUkkodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMubWV0YWRhdGEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5yb2xlcyA9IG5ldyBDb250cmFjdFJvbGVzKHRoaXMuY29udHJhY3RXcmFwcGVyLCBQYWNrLmNvbnRyYWN0Um9sZXMpO1xuICAgIHRoaXMucm95YWx0aWVzID0gbmV3IENvbnRyYWN0Um95YWx0eSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5tZXRhZGF0YSk7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lc3RpbWF0b3IgPSBuZXcgR2FzQ29zdEVzdGltYXRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgQ29udHJhY3RFdmVudHModGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuaW50ZXJjZXB0b3IgPSBuZXcgQ29udHJhY3RJbnRlcmNlcHRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5vd25lciA9IG5ldyBDb250cmFjdE93bmVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLl92cmYgPSB0aGlzLmRldGVjdFZyZigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25OZXR3b3JrVXBkYXRlZChuZXR3b3JrKSB7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIudXBkYXRlU2lnbmVyT3JQcm92aWRlcihuZXR3b3JrKTtcbiAgICB0aGlzLl92cmY/Lm9uTmV0d29ya1VwZGF0ZWQobmV0d29yayk7XG4gIH1cbiAgZ2V0QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3M7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFJFQUQgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBHZXQgYSBzaW5nbGUgUGFja1xuICAgKlxuICAgKiBAcmVtYXJrcyBHZXQgYWxsIHRoZSBkYXRhIGFzc29jaWF0ZWQgd2l0aCBldmVyeSBwYWNrIGluIHRoaXMgY29udHJhY3QuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHJldHVybnMgdGhlIGZpcnN0IDEwMCBwYWNrcywgdXNlIHF1ZXJ5UGFyYW1zIHRvIGZldGNoIG1vcmUuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgcGFjayA9IGF3YWl0IGNvbnRyYWN0LmdldCgwKTtcbiAgICogY29uc29sZS5sb2cocGFja3M7XG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgZ2V0KHRva2VuSWQpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMxMTU1LmdldCh0b2tlbklkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQWxsIFBhY2tzXG4gICAqXG4gICAqIEByZW1hcmtzIEdldCBhbGwgdGhlIGRhdGEgYXNzb2NpYXRlZCB3aXRoIGV2ZXJ5IHBhY2sgaW4gdGhpcyBjb250cmFjdC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgcmV0dXJucyB0aGUgZmlyc3QgMTAwIHBhY2tzLCB1c2UgcXVlcnlQYXJhbXMgdG8gZmV0Y2ggbW9yZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBwYWNrcyA9IGF3YWl0IGNvbnRyYWN0LmdldEFsbCgpO1xuICAgKiBjb25zb2xlLmxvZyhwYWNrcztcbiAgICogYGBgXG4gICAqIEBwYXJhbSBxdWVyeVBhcmFtcyAtIG9wdGlvbmFsIGZpbHRlcmluZyB0byBvbmx5IGZldGNoIGEgc3Vic2V0IG9mIHJlc3VsdHMuXG4gICAqIEByZXR1cm5zIFRoZSBwYWNrIG1ldGFkYXRhIGZvciBhbGwgcGFja3MgcXVlcmllZC5cbiAgICovXG4gIGFzeW5jIGdldEFsbChxdWVyeVBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLmVyYzExNTUuZ2V0QWxsKHF1ZXJ5UGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgT3duZWQgUGFja3NcbiAgICpcbiAgICogQHJlbWFya3MgR2V0IGFsbCB0aGUgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIHBhY2tzIG93bmVkIGJ5IGEgc3BlY2lmaWMgd2FsbGV0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIEFkZHJlc3Mgb2YgdGhlIHdhbGxldCB0byBnZXQgdGhlIHBhY2tzIG9mXG4gICAqIGNvbnN0IGFkZHJlc3MgPSBcInt7d2FsbGV0X2FkZHJlc3N9fVwiO1xuICAgKiBjb25zdCBwYWNrc3MgPSBhd2FpdCBjb250cmFjdC5nZXRPd25lZChhZGRyZXNzKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEByZXR1cm5zIFRoZSBwYWNrIG1ldGFkYXRhIGZvciBhbGwgdGhlIG93bmVkIHBhY2tzIGluIHRoZSBjb250cmFjdC5cbiAgICovXG4gIGFzeW5jIGdldE93bmVkKHdhbGxldEFkZHJlc3MpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMxMTU1LmdldE93bmVkKHdhbGxldEFkZHJlc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyIG9mIHBhY2tzIGNyZWF0ZWRcbiAgICogQHJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBwYWNrcyBtaW50ZWQgaW4gdGhpcyBjb250cmFjdFxuICAgKiBAcHVibGljXG4gICAqL1xuICBhc3luYyBnZXRUb3RhbENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmVyYzExNTUudG90YWxDb3VudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHVzZXJzIGNhbiB0cmFuc2ZlciBwYWNrcyBmcm9tIHRoaXMgY29udHJhY3RcbiAgICovXG4gIGFzeW5jIGlzVHJhbnNmZXJSZXN0cmljdGVkKCkge1xuICAgIGNvbnN0IGFueW9uZUNhblRyYW5zZmVyID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0Lmhhc1JvbGUoZ2V0Um9sZUhhc2goXCJ0cmFuc2ZlclwiKSwgZXRoZXJzLmNvbnN0YW50cy5BZGRyZXNzWmVybyk7XG4gICAgcmV0dXJuICFhbnlvbmVDYW5UcmFuc2ZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgUGFjayBDb250ZW50c1xuICAgKiBAcmVtYXJrcyBHZXQgdGhlIHJld2FyZHMgY29udGFpbmVkIGluc2lkZSBhIHBhY2suXG4gICAqXG4gICAqIEBwYXJhbSBwYWNrSWQgLSBUaGUgaWQgb2YgdGhlIHBhY2sgdG8gZ2V0IHRoZSBjb250ZW50cyBvZi5cbiAgICogQHJldHVybnMgLSBUaGUgY29udGVudHMgb2YgdGhlIHBhY2suXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgcGFja0lkID0gMDtcbiAgICogY29uc3QgY29udGVudHMgPSBhd2FpdCBjb250cmFjdC5nZXRQYWNrQ29udGVudHMocGFja0lkKTtcbiAgICogY29uc29sZS5sb2coY29udGVudHMuZXJjMjBSZXdhcmRzKTtcbiAgICogY29uc29sZS5sb2coY29udGVudHMuZXJjNzIxUmV3YXJkcyk7XG4gICAqIGNvbnNvbGUubG9nKGNvbnRlbnRzLmVyYzExNTVSZXdhcmRzKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBnZXRQYWNrQ29udGVudHMocGFja0lkKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29udGVudHMsXG4gICAgICBwZXJVbml0QW1vdW50c1xuICAgIH0gPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuZ2V0UGFja0NvbnRlbnRzKHBhY2tJZCk7XG4gICAgY29uc3QgZXJjMjBSZXdhcmRzID0gW107XG4gICAgY29uc3QgZXJjNzIxUmV3YXJkcyA9IFtdO1xuICAgIGNvbnN0IGVyYzExNTVSZXdhcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcmV3YXJkID0gY29udGVudHNbaV07XG4gICAgICBjb25zdCBhbW91bnQgPSBwZXJVbml0QW1vdW50c1tpXTtcbiAgICAgIHN3aXRjaCAocmV3YXJkLnRva2VuVHlwZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgdG9rZW5NZXRhZGF0YSA9IGF3YWl0IGZldGNoQ3VycmVuY3lNZXRhZGF0YSh0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLCByZXdhcmQuYXNzZXRDb250cmFjdCk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eVBlclJld2FyZCA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhhbW91bnQsIHRva2VuTWV0YWRhdGEuZGVjaW1hbHMpO1xuICAgICAgICAgICAgY29uc3QgdG90YWxSZXdhcmRzID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKEJpZ051bWJlci5mcm9tKHJld2FyZC50b3RhbEFtb3VudCkuZGl2KGFtb3VudCksIHRva2VuTWV0YWRhdGEuZGVjaW1hbHMpO1xuICAgICAgICAgICAgZXJjMjBSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICBxdWFudGl0eVBlclJld2FyZCxcbiAgICAgICAgICAgICAgdG90YWxSZXdhcmRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVyYzcyMVJld2FyZHMucHVzaCh7XG4gICAgICAgICAgICAgIGNvbnRyYWN0QWRkcmVzczogcmV3YXJkLmFzc2V0Q29udHJhY3QsXG4gICAgICAgICAgICAgIHRva2VuSWQ6IHJld2FyZC50b2tlbklkLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXJjMTE1NVJld2FyZHMucHVzaCh7XG4gICAgICAgICAgICAgIGNvbnRyYWN0QWRkcmVzczogcmV3YXJkLmFzc2V0Q29udHJhY3QsXG4gICAgICAgICAgICAgIHRva2VuSWQ6IHJld2FyZC50b2tlbklkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIHF1YW50aXR5UGVyUmV3YXJkOiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgdG90YWxSZXdhcmRzOiBCaWdOdW1iZXIuZnJvbShyZXdhcmQudG90YWxBbW91bnQpLmRpdihhbW91bnQpLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJjMjBSZXdhcmRzLFxuICAgICAgZXJjNzIxUmV3YXJkcyxcbiAgICAgIGVyYzExNTVSZXdhcmRzXG4gICAgfTtcbiAgfVxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUFJJVkFURSBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgYXN5bmMgdG9QYWNrQ29udGVudEFyZ3MobWV0YWRhdGFXaXRoUmV3YXJkcykge1xuICAgIGNvbnN0IGNvbnRlbnRzID0gW107XG4gICAgY29uc3QgbnVtT2ZSZXdhcmRVbml0cyA9IFtdO1xuICAgIGNvbnN0IHtcbiAgICAgIGVyYzIwUmV3YXJkcyxcbiAgICAgIGVyYzcyMVJld2FyZHMsXG4gICAgICBlcmMxMTU1UmV3YXJkc1xuICAgIH0gPSBtZXRhZGF0YVdpdGhSZXdhcmRzO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKTtcbiAgICBjb25zdCBvd25lciA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKTtcbiAgICBmb3IgKGNvbnN0IGVyYzIwIG9mIGVyYzIwUmV3YXJkcykge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZFF1YW50aXR5ID0gYXdhaXQgbm9ybWFsaXplUHJpY2VWYWx1ZShwcm92aWRlciwgZXJjMjAucXVhbnRpdHlQZXJSZXdhcmQsIGVyYzIwLmNvbnRyYWN0QWRkcmVzcyk7XG4gICAgICAvLyBNdWx0aXBseSB0aGUgcXVhbnRpdHkgb2Ygb25lIHJld2FyZCBieSB0aGUgbnVtYmVyIG9mIHJld2FyZHNcbiAgICAgIGNvbnN0IHRvdGFsUXVhbnRpdHkgPSBub3JtYWxpemVkUXVhbnRpdHkubXVsKGVyYzIwLnRvdGFsUmV3YXJkcyk7XG4gICAgICBjb25zdCBoYXNBbGxvd2FuY2UgPSBhd2FpdCBoYXNFUkMyMEFsbG93YW5jZSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgZXJjMjAuY29udHJhY3RBZGRyZXNzLCB0b3RhbFF1YW50aXR5KTtcbiAgICAgIGlmICghaGFzQWxsb3dhbmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJDMjAgdG9rZW4gd2l0aCBjb250cmFjdCBhZGRyZXNzIFwiJHtlcmMyMC5jb250cmFjdEFkZHJlc3N9XCIgZG9lcyBub3QgaGF2ZSBlbm91Z2ggYWxsb3dhbmNlIHRvIHRyYW5zZmVyLlxcblxcbllvdSBjYW4gc2V0IGFsbG93YW5jZSB0byB0aGUgbXVsdGl3cmFwIGNvbnRyYWN0IHRvIHRyYW5zZmVyIHRoZXNlIHRva2VucyBieSBydW5uaW5nOlxcblxcbmF3YWl0IHNkay5nZXRUb2tlbihcIiR7ZXJjMjAuY29udHJhY3RBZGRyZXNzfVwiKS5zZXRBbGxvd2FuY2UoXCIke3RoaXMuZ2V0QWRkcmVzcygpfVwiLCAke3RvdGFsUXVhbnRpdHl9KTtcXG5cXG5gKTtcbiAgICAgIH1cbiAgICAgIG51bU9mUmV3YXJkVW5pdHMucHVzaChlcmMyMC50b3RhbFJld2FyZHMpO1xuICAgICAgY29udGVudHMucHVzaCh7XG4gICAgICAgIGFzc2V0Q29udHJhY3Q6IGVyYzIwLmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgdG9rZW5UeXBlOiAwLFxuICAgICAgICB0b3RhbEFtb3VudDogdG90YWxRdWFudGl0eSxcbiAgICAgICAgdG9rZW5JZDogMFxuICAgICAgfSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZXJjNzIxIG9mIGVyYzcyMVJld2FyZHMpIHtcbiAgICAgIGNvbnN0IGlzQXBwcm92ZWQgPSBhd2FpdCBpc1Rva2VuQXBwcm92ZWRGb3JUcmFuc2Zlcih0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLCB0aGlzLmdldEFkZHJlc3MoKSwgZXJjNzIxLmNvbnRyYWN0QWRkcmVzcywgZXJjNzIxLnRva2VuSWQsIG93bmVyKTtcbiAgICAgIGlmICghaXNBcHByb3ZlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSQzcyMSB0b2tlbiBcIiR7ZXJjNzIxLnRva2VuSWR9XCIgd2l0aCBjb250cmFjdCBhZGRyZXNzIFwiJHtlcmM3MjEuY29udHJhY3RBZGRyZXNzfVwiIGlzIG5vdCBhcHByb3ZlZCBmb3IgdHJhbnNmZXIuXFxuXFxuWW91IGNhbiBnaXZlIGFwcHJvdmFsIHRoZSBtdWx0aXdyYXAgY29udHJhY3QgdG8gdHJhbnNmZXIgdGhpcyB0b2tlbiBieSBydW5uaW5nOlxcblxcbmF3YWl0IHNkay5nZXRORlRDb2xsZWN0aW9uKFwiJHtlcmM3MjEuY29udHJhY3RBZGRyZXNzfVwiKS5zZXRBcHByb3ZhbEZvclRva2VuKFwiJHt0aGlzLmdldEFkZHJlc3MoKX1cIiwgJHtlcmM3MjEudG9rZW5JZH0pO1xcblxcbmApO1xuICAgICAgfVxuICAgICAgbnVtT2ZSZXdhcmRVbml0cy5wdXNoKFwiMVwiKTtcbiAgICAgIGNvbnRlbnRzLnB1c2goe1xuICAgICAgICBhc3NldENvbnRyYWN0OiBlcmM3MjEuY29udHJhY3RBZGRyZXNzLFxuICAgICAgICB0b2tlblR5cGU6IDEsXG4gICAgICAgIHRvdGFsQW1vdW50OiAxLFxuICAgICAgICB0b2tlbklkOiBlcmM3MjEudG9rZW5JZFxuICAgICAgfSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZXJjMTE1NSBvZiBlcmMxMTU1UmV3YXJkcykge1xuICAgICAgY29uc3QgaXNBcHByb3ZlZCA9IGF3YWl0IGlzVG9rZW5BcHByb3ZlZEZvclRyYW5zZmVyKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIHRoaXMuZ2V0QWRkcmVzcygpLCBlcmMxMTU1LmNvbnRyYWN0QWRkcmVzcywgZXJjMTE1NS50b2tlbklkLCBvd25lcik7XG4gICAgICBpZiAoIWlzQXBwcm92ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUkMxMTU1IHRva2VuIFwiJHtlcmMxMTU1LnRva2VuSWR9XCIgd2l0aCBjb250cmFjdCBhZGRyZXNzIFwiJHtlcmMxMTU1LmNvbnRyYWN0QWRkcmVzc31cIiBpcyBub3QgYXBwcm92ZWQgZm9yIHRyYW5zZmVyLlxcblxcbllvdSBjYW4gZ2l2ZSBhcHByb3ZhbCB0aGUgbXVsdGl3cmFwIGNvbnRyYWN0IHRvIHRyYW5zZmVyIHRoaXMgdG9rZW4gYnkgcnVubmluZzpcXG5cXG5hd2FpdCBzZGsuZ2V0RWRpdGlvbihcIiR7ZXJjMTE1NS5jb250cmFjdEFkZHJlc3N9XCIpLnNldEFwcHJvdmFsRm9yQWxsKFwiJHt0aGlzLmdldEFkZHJlc3MoKX1cIiwgdHJ1ZSk7XFxuXFxuYCk7XG4gICAgICB9XG4gICAgICBudW1PZlJld2FyZFVuaXRzLnB1c2goZXJjMTE1NS50b3RhbFJld2FyZHMpO1xuICAgICAgY29udGVudHMucHVzaCh7XG4gICAgICAgIGFzc2V0Q29udHJhY3Q6IGVyYzExNTUuY29udHJhY3RBZGRyZXNzLFxuICAgICAgICB0b2tlblR5cGU6IDIsXG4gICAgICAgIHRvdGFsQW1vdW50OiBCaWdOdW1iZXIuZnJvbShlcmMxMTU1LnF1YW50aXR5UGVyUmV3YXJkKS5tdWwoQmlnTnVtYmVyLmZyb20oZXJjMTE1NS50b3RhbFJld2FyZHMpKSxcbiAgICAgICAgdG9rZW5JZDogZXJjMTE1NS50b2tlbklkXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnRzLFxuICAgICAgbnVtT2ZSZXdhcmRVbml0c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBwcmVwYXJlKG1ldGhvZCwgYXJncywgb3ZlcnJpZGVzKSB7XG4gICAgcmV0dXJuIFRyYW5zYWN0aW9uLmZyb21Db250cmFjdFdyYXBwZXIoe1xuICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgIG1ldGhvZCxcbiAgICAgIGFyZ3MsXG4gICAgICBvdmVycmlkZXNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGNhbGwoZnVuY3Rpb25OYW1lLCBhcmdzLCBvdmVycmlkZXMpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIuY2FsbChmdW5jdGlvbk5hbWUsIGFyZ3MsIG92ZXJyaWRlcyk7XG4gIH1cbiAgZGV0ZWN0VnJmKCkge1xuICAgIGlmIChkZXRlY3RDb250cmFjdEZlYXR1cmUodGhpcy5jb250cmFjdFdyYXBwZXIsIFwiUGFja1ZSRlwiKSkge1xuICAgICAgcmV0dXJuIG5ldyBQYWNrVlJGKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lck9yUHJvdmlkZXIoKSwgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3MsIHRoaXMuc3RvcmFnZSwgdGhpcy5jb250cmFjdFdyYXBwZXIub3B0aW9ucywgdGhpcy5jaGFpbklkKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuX2RlZmluZVByb3BlcnR5KFBhY2ssIFwiY29udHJhY3RSb2xlc1wiLCBbXCJhZG1pblwiLCBcIm1pbnRlclwiLCBcImFzc2V0XCIsIFwidHJhbnNmZXJcIl0pO1xuXG5leHBvcnQgeyBQYWNrIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=