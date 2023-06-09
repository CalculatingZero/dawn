"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_vote-eabc46cc_browser_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/vote-eabc46cc.browser.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/vote-eabc46cc.browser.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vote: () => (/* binding */ Vote)
/* harmony export */ });
/* harmony import */ var _QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./QueryParams-7d9473b5.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-7d9473b5.browser.esm.js");
/* harmony import */ var _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contract-metadata-88f06ef9.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/contract-metadata-88f06ef9.browser.esm.js");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC20_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC20.json");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/hash/lib.esm/id.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/units/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/contracts/lib.esm/index.js");
/* harmony import */ var _Vote_3b66775c_browser_esm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Vote-3b66775c.browser.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/Vote-3b66775c.browser.esm.js");
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
 * Create a decentralized organization for token holders to vote on proposals.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "vote");
 * ```
 *
 * @public
 */
class Vote {
  /**
   * @internal
   */

  get chainId() {
    return this._chainId;
  }
  constructor(network, address, storage) {
    var _this = this;
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dz(network, address, abi, options);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "contractWrapper", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "storage", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "abi", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "metadata", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "app", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "encoder", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "estimator", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "events", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "interceptor", void 0);
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "_chainId", void 0);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create Proposal
     *
     * @remarks Create a new proposal for token holders to vote on.
     *
     * @example
     * ```javascript
     * // The description of the proposal you want to pass
     * const description = "This is a great proposal - vote for it!"
     * // You can (optionally) pass in contract calls that will get executed when the proposal is executed.
     * const executions = [
     *   {
     *     // The contract you want to make a call to
     *     toAddress: "0x...",
     *     // The amount of the native currency to send in this transaction
     *     nativeTokenValue: 0,
     *     // Transaction data that will be executed when the proposal is executed
     *     // This is an example transfer transaction with a token contract (which you would need to set up in code)
     *     transactionData: tokenContract.encoder.encode(
     *       "transfer", [
     *         fromAddress,
     *         amount,
     *       ]
     *     ),
     *   }
     * ]
     *
     * const proposal = await contract.propose(description, executions);
     * ```
     *
     * @param description - The description of the proposal.
     * @param executions - A set of executable transactions that will be run if the proposal is passed and executed.
     * @returns - The id of the created proposal and the transaction receipt.
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "propose", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async (description, executions) => {
      if (!executions) {
        executions = [{
          toAddress: this.contractWrapper.readContract.address,
          nativeTokenValue: 0,
          transactionData: "0x"
        }];
      }
      const tos = executions.map(p => p.toAddress);
      const values = executions.map(p => p.nativeTokenValue);
      const datas = executions.map(p => p.transactionData);
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "propose",
        args: [tos, values, datas, description],
        parse: receipt => {
          const event = this.contractWrapper.parseLogs("ProposalCreated", receipt?.logs);
          return {
            id: event[0].args.proposalId,
            receipt
          };
        }
      });
    }));
    /**
     * Vote
     *
     * @remarks Vote on an active proposal
     *
     * @example
     * ```javascript
     * // The proposal ID of the proposal you want to vote on
     * const proposalId = "0";
     * // The vote type you want to cast, can be VoteType.Against, VoteType.For, or VoteType.Abstain
     * const voteType = VoteType.For;
     * // The (optional) reason for the vote
     * const reason = "I like this proposal!";
     *
     * await contract.vote(proposalId, voteType, reason);
     * ```
     * @param proposalId - The proposal to cast a vote on.
     * @param voteType - The position the voter is taking on their vote.
     * @param reason - (optional) The reason for the vote.
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "vote", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async function (proposalId, voteType) {
      let reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      await _this.ensureExists(proposalId);
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: _this.contractWrapper,
        method: "castVoteWithReason",
        args: [proposalId, voteType, reason]
      });
    }));
    /**
     * Execute Proposal
     *
     * @remarks Execute the related transactions for a proposal if the proposal succeeded.
     *
     * @example
     * ```javascript
     * // The proposal ID of the proposal you want to execute
     * const proposalId = "0"
     * await contract.execute(proposalId);
     * ```
     *
     * @param proposalId - The proposal id to execute.
     */
    (0,_QueryParams_7d9473b5_browser_esm_js__WEBPACK_IMPORTED_MODULE_8__._)(this, "execute", (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ds)(async proposalId => {
      await this.ensureExists(proposalId);
      const proposal = await this.get(proposalId);
      const tos = proposal.executions.map(p => p.toAddress);
      const values = proposal.executions.map(p => p.nativeTokenValue);
      const datas = proposal.executions.map(p => p.transactionData);
      const descriptionHash = ethers__WEBPACK_IMPORTED_MODULE_9__.id(proposal.description);
      return _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aV.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "execute",
        args: [tos, values, datas, descriptionHash]
      });
    }));
    this._chainId = chainId;
    this.abi = _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.e.parse(abi || []);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.ag(this.contractWrapper, _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.dT, this.storage);
    this.app = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.a$(this.contractWrapper, this.metadata, this.storage);
    this.encoder = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.af(this.contractWrapper);
    this.estimator = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aP(this.contractWrapper);
    this.events = new _contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.aQ(this.contractWrapper);
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
   * Get a proposal by id.
   *
   * @param proposalId - The proposal id to get.
   * @returns - The proposal.
   */
  async get(proposalId) {
    const all = await this.getAll();
    const proposals = all.filter(p => p.proposalId.eq(ethers__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(proposalId)));
    if (proposals.length === 0) {
      throw new Error("proposal not found");
    }
    return proposals[0];
  }

  /**
   * Get All Proposals
   *
   * @remarks Get all the proposals in this contract.
   *
   * @example
   * ```javascript
   * const proposals = await contract.getAll();
   * console.log(proposals);
   * ```
   *
   * @returns - All the proposals in the contract.
   */
  async getAll() {
    return Promise.all((await this.contractWrapper.readContract.getAllProposals()).map(async data => ({
      proposalId: data.proposalId,
      proposer: data.proposer,
      description: data.description,
      startBlock: data.startBlock,
      endBlock: data.endBlock,
      state: await this.contractWrapper.readContract.state(data.proposalId),
      votes: await this.getProposalVotes(data.proposalId),
      executions: data[3].map((c, i) => ({
        toAddress: data.targets[i],
        nativeTokenValue: c,
        transactionData: data.calldatas[i]
      }))
    })));
  }

  /**
   * Get the votes for a specific proposal
   * @param proposalId - the proposalId
   */
  async getProposalVotes(proposalId) {
    const votes = await this.contractWrapper.readContract.proposalVotes(proposalId);
    return [{
      type: _Vote_3b66775c_browser_esm_js__WEBPACK_IMPORTED_MODULE_11__.V.Against,
      label: "Against",
      count: votes.againstVotes
    }, {
      type: _Vote_3b66775c_browser_esm_js__WEBPACK_IMPORTED_MODULE_11__.V.For,
      label: "For",
      count: votes.forVotes
    }, {
      type: _Vote_3b66775c_browser_esm_js__WEBPACK_IMPORTED_MODULE_11__.V.Abstain,
      label: "Abstain",
      count: votes.abstainVotes
    }];
  }

  /**
   * Check If Wallet Voted
   *
   * @remarks Check if a specified wallet has voted a specific proposal
   *
   * @example
   * ```javascript
   * // The proposal ID of the proposal you want to check
   * const proposalId = "0";
   * // The address of the wallet you want to check to see if they voted
   * const address = "{{wallet_address}}";
   *
   * await contract.hasVoted(proposalId, address);
   * ```
   *
   * @param proposalId - The unique identifier of a proposal .
   * @param account - (optional) wallet account address. Defaults to connected signer.
   * @returns - True if the account has already voted on the proposal.
   */
  async hasVoted(proposalId, account) {
    if (!account) {
      account = await this.contractWrapper.getSignerAddress();
    }
    return this.contractWrapper.readContract.hasVoted(proposalId, await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(account));
  }

  /**
   * Can Execute
   *
   * @remarks Check if a proposal can be executed (if the proposal has succeeded).
   *
   * @example
   * ```javascript
   * // The proposal ID of the proposal you want to check
   * const proposalId = "0";
   * const canExecute = await contract.canExecute(proposalId);
   * console.log(canExecute);
   * ```
   *
   * @param proposalId - The proposal ID to check.
   * @returns - True if the proposal can be executed, false otherwise.
   */
  async canExecute(proposalId) {
    await this.ensureExists(proposalId);
    const proposal = await this.get(proposalId);
    const tos = proposal.executions.map(p => p.toAddress);
    const values = proposal.executions.map(p => p.nativeTokenValue);
    const datas = proposal.executions.map(p => p.transactionData);
    const descriptionHash = ethers__WEBPACK_IMPORTED_MODULE_9__.id(proposal.description);
    try {
      await this.contractWrapper.callStatic().execute(tos, values, datas, descriptionHash);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Check the balance of the project wallet in the native token of the chain
   *
   * @returns - The balance of the project in the native token of the chain
   */
  async balance() {
    const balance = await this.contractWrapper.readContract.provider.getBalance(this.contractWrapper.readContract.address);
    return {
      name: "",
      symbol: "",
      decimals: 18,
      value: balance,
      displayValue: ethers__WEBPACK_IMPORTED_MODULE_12__.formatUnits(balance, 18)
    };
  }

  /**
   * Check the balance of the project wallet in a particular
   * ERC20 token contract
   *
   * @returns - The balance of the project in the native token of the chain
   */
  async balanceOfToken(tokenAddress) {
    const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_13__.Contract(await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.cH)(tokenAddress), _thirdweb_dev_contracts_js_dist_abis_IERC20_json__WEBPACK_IMPORTED_MODULE_14__, this.contractWrapper.getProvider());
    return await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b9)(this.contractWrapper.getProvider(), tokenAddress, await erc20.balanceOf(this.contractWrapper.readContract.address));
  }

  /**
   * Find a proposal by its id.
   *
   * @internal
   * @param proposalId - Proposal to check for
   */
  async ensureExists(proposalId) {
    try {
      await this.contractWrapper.readContract.state(proposalId);
    } catch (e) {
      throw Error(`Proposal ${proposalId} not found`);
    }
  }

  /**
   * Get the Vote contract configuration
   */
  async settings() {
    const [votingDelay, votingPeriod, votingTokenAddress, votingQuorumFraction, proposalTokenThreshold] = await Promise.all([this.contractWrapper.readContract.votingDelay(), this.contractWrapper.readContract.votingPeriod(), this.contractWrapper.readContract.token(), this.contractWrapper.readContract["quorumNumerator()"](), this.contractWrapper.readContract.proposalThreshold()]);
    const votingTokenMetadata = await (0,_contract_metadata_88f06ef9_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__.b8)(this.contractWrapper.getProvider(), votingTokenAddress);
    return {
      votingDelay: votingDelay.toString(),
      votingPeriod: votingPeriod.toString(),
      votingTokenAddress,
      votingTokenMetadata,
      votingQuorumFraction: votingQuorumFraction.toString(),
      proposalTokenThreshold: proposalTokenThreshold.toString()
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
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LXZvdGUtZWFiYzQ2Y2MtYnJvd3Nlci1lc20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZFO0FBQytUO0FBQ3BVO0FBQ25CO0FBQ1U7QUFDaEQ7QUFDRjtBQUNpQjtBQUNvQztBQUNUO0FBQ1E7QUFDRztBQUNHO0FBQ1A7QUFDRTtBQUNKO0FBQ1M7QUFDSjtBQUNDO0FBQ0Y7QUFDQTtBQUNQO0FBQ1U7QUFDSjtBQUNKO0FBQ007QUFDSztBQUNHO0FBQ1A7QUFDQTtBQUNDO0FBQ1I7QUFDTTtBQUNLO0FBQ0c7QUFDZjtBQUNVO0FBQ0Y7QUFDSztBQUNQO0FBQ1A7QUFDVTtBQUNGO0FBQ0M7QUFDVDtBQUNPO0FBQ0Y7QUFDVTtBQUNWO0FBQ0E7QUFDSjtBQUNEO0FBQ1E7QUFDUDtBQUNwQztBQUM2QztBQUM5QztBQUNzQztBQUM5QjtBQUNWO0FBQ2dEO0FBQ3hDO0FBQ3FDO0FBQ3BEO0FBQ1E7QUFDRztBQUNrQztBQUNRO0FBQ0M7QUFDUTtBQUNsRDtBQUNaO0FBQytEO0FBQ0M7QUFDeEM7QUFDdUI7QUFDQzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0MsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csMEVBQWU7QUFDakgsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHVFQUFlO0FBQ25CLElBQUksdUVBQWU7QUFDbkIsSUFBSSx1RUFBZTtBQUNuQjtBQUNBO0FBQ0E7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Qiw2Q0FBUSxPQUFPLDhFQUFjLGdCQUFnQiw4RUFBUTtBQUMzRSxpQkFBaUIsOEVBQWtCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiw4QkFBOEIsWUFBWTtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsOEVBQXFCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywwRUFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3Nkay9kaXN0L3ZvdGUtZWFiYzQ2Y2MuYnJvd3Nlci5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXyBhcyBfZGVmaW5lUHJvcGVydHkgfSBmcm9tICcuL1F1ZXJ5UGFyYW1zLTdkOTQ3M2I1LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGR6IGFzIENvbnRyYWN0V3JhcHBlciwgZHMgYXMgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uLCBlIGFzIEFiaVNjaGVtYSwgYWcgYXMgQ29udHJhY3RNZXRhZGF0YSwgZFQgYXMgVm90ZUNvbnRyYWN0U2NoZW1hLCBhJCBhcyBDb250cmFjdEFwcFVSSSwgYWYgYXMgQ29udHJhY3RFbmNvZGVyLCBhUCBhcyBHYXNDb3N0RXN0aW1hdG9yLCBhUSBhcyBDb250cmFjdEV2ZW50cywgYVIgYXMgQ29udHJhY3RJbnRlcmNlcHRvciwgY0ggYXMgcmVzb2x2ZUFkZHJlc3MsIGI5IGFzIGZldGNoQ3VycmVuY3lWYWx1ZSwgYjggYXMgZmV0Y2hDdXJyZW5jeU1ldGFkYXRhLCBhViBhcyBUcmFuc2FjdGlvbiB9IGZyb20gJy4vY29udHJhY3QtbWV0YWRhdGEtODhmMDZlZjkuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IEVSQzIwQWJpIGZyb20gJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjAuanNvbic7XG5pbXBvcnQgeyBCaWdOdW1iZXIsIGV0aGVycywgQ29udHJhY3QgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgViBhcyBWb3RlVHlwZSB9IGZyb20gJy4vVm90ZS0zYjY2Nzc1Yy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ2JuLmpzJztcbmltcG9ydCAnem9kJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMjBfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyMFBlcm1pdC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU11bHRpY2FsbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzcyMV9WMy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFTdXBwbHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTGF6eU1pbnQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvTGF6eU1pbnRXaXRoVGllci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMTE1NV9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTVfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1RW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9FUkMyNzcxQ29udGV4dC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBcHBVUkkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ29udHJhY3RNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEaXJlY3RMaXN0aW5ncy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFbmdsaXNoQXVjdGlvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JT2ZmZXJzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBhY2tWUkZEaXJlY3QuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnNFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBsYXRmb3JtRmVlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVByaW1hcnlTYWxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVJveWFsdHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Pd25hYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFjY291bnRGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFjY291bnQuanNvbic7XG5pbXBvcnQgJ3RpbnktaW52YXJpYW50JztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0NvbnRyYWN0UHVibGlzaGVyLmpzb24nO1xuaW1wb3J0ICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0ZvcndhcmRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9zdG9yYWdlJztcbmltcG9ydCAnY3Jvc3MtZmV0Y2gnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVRoaXJkd2ViQ29udHJhY3QuanNvbic7XG5pbXBvcnQgJ2V0aGVycy9saWIvdXRpbHMuanMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ3V1aWQnO1xuaW1wb3J0ICdtZXJrbGV0cmVlanMnO1xuaW1wb3J0ICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzE2NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1TWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbERlcHJlY2F0ZWQuanNvbic7XG5pbXBvcnQgJ2V0aGVycy9saWIvdXRpbHMnO1xuaW1wb3J0ICdiczU4JztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5TG9naWMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeVJvdXRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9nZW5lcmF0ZWQtYWJpcyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV0ZhY3RvcnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV1JlZ2lzdHJ5Lmpzb24nO1xuXG4vKipcbiAqIENyZWF0ZSBhIGRlY2VudHJhbGl6ZWQgb3JnYW5pemF0aW9uIGZvciB0b2tlbiBob2xkZXJzIHRvIHZvdGUgb24gcHJvcG9zYWxzLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgVGhpcmR3ZWJTREsgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9zZGtcIjtcbiAqXG4gKiBjb25zdCBzZGsgPSBuZXcgVGhpcmR3ZWJTREsoXCJ7e2NoYWluTmFtZX19XCIpO1xuICogY29uc3QgY29udHJhY3QgPSBhd2FpdCBzZGsuZ2V0Q29udHJhY3QoXCJ7e2NvbnRyYWN0X2FkZHJlc3N9fVwiLCBcInZvdGVcIik7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIFZvdGUge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIGdldCBjaGFpbklkKCkge1xuICAgIHJldHVybiB0aGlzLl9jaGFpbklkO1xuICB9XG4gIGNvbnN0cnVjdG9yKG5ldHdvcmssIGFkZHJlc3MsIHN0b3JhZ2UpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBsZXQgYWJpID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgPyBhcmd1bWVudHNbNF0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNoYWluSWQgPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY29udHJhY3RXcmFwcGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiBuZXcgQ29udHJhY3RXcmFwcGVyKG5ldHdvcmssIGFkZHJlc3MsIGFiaSwgb3B0aW9ucyk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29udHJhY3RXcmFwcGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3RvcmFnZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFiaVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1ldGFkYXRhXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXBwXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW5jb2RlclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVzdGltYXRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImV2ZW50c1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImludGVyY2VwdG9yXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2NoYWluSWRcIiwgdm9pZCAwKTtcbiAgICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogV1JJVEUgRlVOQ1RJT05TXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIFByb3Bvc2FsXG4gICAgICpcbiAgICAgKiBAcmVtYXJrcyBDcmVhdGUgYSBuZXcgcHJvcG9zYWwgZm9yIHRva2VuIGhvbGRlcnMgdG8gdm90ZSBvbi5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIC8vIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvcG9zYWwgeW91IHdhbnQgdG8gcGFzc1xuICAgICAqIGNvbnN0IGRlc2NyaXB0aW9uID0gXCJUaGlzIGlzIGEgZ3JlYXQgcHJvcG9zYWwgLSB2b3RlIGZvciBpdCFcIlxuICAgICAqIC8vIFlvdSBjYW4gKG9wdGlvbmFsbHkpIHBhc3MgaW4gY29udHJhY3QgY2FsbHMgdGhhdCB3aWxsIGdldCBleGVjdXRlZCB3aGVuIHRoZSBwcm9wb3NhbCBpcyBleGVjdXRlZC5cbiAgICAgKiBjb25zdCBleGVjdXRpb25zID0gW1xuICAgICAqICAge1xuICAgICAqICAgICAvLyBUaGUgY29udHJhY3QgeW91IHdhbnQgdG8gbWFrZSBhIGNhbGwgdG9cbiAgICAgKiAgICAgdG9BZGRyZXNzOiBcIjB4Li4uXCIsXG4gICAgICogICAgIC8vIFRoZSBhbW91bnQgb2YgdGhlIG5hdGl2ZSBjdXJyZW5jeSB0byBzZW5kIGluIHRoaXMgdHJhbnNhY3Rpb25cbiAgICAgKiAgICAgbmF0aXZlVG9rZW5WYWx1ZTogMCxcbiAgICAgKiAgICAgLy8gVHJhbnNhY3Rpb24gZGF0YSB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgcHJvcG9zYWwgaXMgZXhlY3V0ZWRcbiAgICAgKiAgICAgLy8gVGhpcyBpcyBhbiBleGFtcGxlIHRyYW5zZmVyIHRyYW5zYWN0aW9uIHdpdGggYSB0b2tlbiBjb250cmFjdCAod2hpY2ggeW91IHdvdWxkIG5lZWQgdG8gc2V0IHVwIGluIGNvZGUpXG4gICAgICogICAgIHRyYW5zYWN0aW9uRGF0YTogdG9rZW5Db250cmFjdC5lbmNvZGVyLmVuY29kZShcbiAgICAgKiAgICAgICBcInRyYW5zZmVyXCIsIFtcbiAgICAgKiAgICAgICAgIGZyb21BZGRyZXNzLFxuICAgICAqICAgICAgICAgYW1vdW50LFxuICAgICAqICAgICAgIF1cbiAgICAgKiAgICAgKSxcbiAgICAgKiAgIH1cbiAgICAgKiBdXG4gICAgICpcbiAgICAgKiBjb25zdCBwcm9wb3NhbCA9IGF3YWl0IGNvbnRyYWN0LnByb3Bvc2UoZGVzY3JpcHRpb24sIGV4ZWN1dGlvbnMpO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIGRlc2NyaXB0aW9uIC0gVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9wb3NhbC5cbiAgICAgKiBAcGFyYW0gZXhlY3V0aW9ucyAtIEEgc2V0IG9mIGV4ZWN1dGFibGUgdHJhbnNhY3Rpb25zIHRoYXQgd2lsbCBiZSBydW4gaWYgdGhlIHByb3Bvc2FsIGlzIHBhc3NlZCBhbmQgZXhlY3V0ZWQuXG4gICAgICogQHJldHVybnMgLSBUaGUgaWQgb2YgdGhlIGNyZWF0ZWQgcHJvcG9zYWwgYW5kIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0LlxuICAgICAqL1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByb3Bvc2VcIiwgYnVpbGRUcmFuc2FjdGlvbkZ1bmN0aW9uKGFzeW5jIChkZXNjcmlwdGlvbiwgZXhlY3V0aW9ucykgPT4ge1xuICAgICAgaWYgKCFleGVjdXRpb25zKSB7XG4gICAgICAgIGV4ZWN1dGlvbnMgPSBbe1xuICAgICAgICAgIHRvQWRkcmVzczogdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3MsXG4gICAgICAgICAgbmF0aXZlVG9rZW5WYWx1ZTogMCxcbiAgICAgICAgICB0cmFuc2FjdGlvbkRhdGE6IFwiMHhcIlxuICAgICAgICB9XTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRvcyA9IGV4ZWN1dGlvbnMubWFwKHAgPT4gcC50b0FkZHJlc3MpO1xuICAgICAgY29uc3QgdmFsdWVzID0gZXhlY3V0aW9ucy5tYXAocCA9PiBwLm5hdGl2ZVRva2VuVmFsdWUpO1xuICAgICAgY29uc3QgZGF0YXMgPSBleGVjdXRpb25zLm1hcChwID0+IHAudHJhbnNhY3Rpb25EYXRhKTtcbiAgICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgICAgY29udHJhY3RXcmFwcGVyOiB0aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgICAgbWV0aG9kOiBcInByb3Bvc2VcIixcbiAgICAgICAgYXJnczogW3RvcywgdmFsdWVzLCBkYXRhcywgZGVzY3JpcHRpb25dLFxuICAgICAgICBwYXJzZTogcmVjZWlwdCA9PiB7XG4gICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmNvbnRyYWN0V3JhcHBlci5wYXJzZUxvZ3MoXCJQcm9wb3NhbENyZWF0ZWRcIiwgcmVjZWlwdD8ubG9ncyk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBldmVudFswXS5hcmdzLnByb3Bvc2FsSWQsXG4gICAgICAgICAgICByZWNlaXB0XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSkpO1xuICAgIC8qKlxuICAgICAqIFZvdGVcbiAgICAgKlxuICAgICAqIEByZW1hcmtzIFZvdGUgb24gYW4gYWN0aXZlIHByb3Bvc2FsXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgKiAvLyBUaGUgcHJvcG9zYWwgSUQgb2YgdGhlIHByb3Bvc2FsIHlvdSB3YW50IHRvIHZvdGUgb25cbiAgICAgKiBjb25zdCBwcm9wb3NhbElkID0gXCIwXCI7XG4gICAgICogLy8gVGhlIHZvdGUgdHlwZSB5b3Ugd2FudCB0byBjYXN0LCBjYW4gYmUgVm90ZVR5cGUuQWdhaW5zdCwgVm90ZVR5cGUuRm9yLCBvciBWb3RlVHlwZS5BYnN0YWluXG4gICAgICogY29uc3Qgdm90ZVR5cGUgPSBWb3RlVHlwZS5Gb3I7XG4gICAgICogLy8gVGhlIChvcHRpb25hbCkgcmVhc29uIGZvciB0aGUgdm90ZVxuICAgICAqIGNvbnN0IHJlYXNvbiA9IFwiSSBsaWtlIHRoaXMgcHJvcG9zYWwhXCI7XG4gICAgICpcbiAgICAgKiBhd2FpdCBjb250cmFjdC52b3RlKHByb3Bvc2FsSWQsIHZvdGVUeXBlLCByZWFzb24pO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSBwcm9wb3NhbElkIC0gVGhlIHByb3Bvc2FsIHRvIGNhc3QgYSB2b3RlIG9uLlxuICAgICAqIEBwYXJhbSB2b3RlVHlwZSAtIFRoZSBwb3NpdGlvbiB0aGUgdm90ZXIgaXMgdGFraW5nIG9uIHRoZWlyIHZvdGUuXG4gICAgICogQHBhcmFtIHJlYXNvbiAtIChvcHRpb25hbCkgVGhlIHJlYXNvbiBmb3IgdGhlIHZvdGUuXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidm90ZVwiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgZnVuY3Rpb24gKHByb3Bvc2FsSWQsIHZvdGVUeXBlKSB7XG4gICAgICBsZXQgcmVhc29uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBcIlwiO1xuICAgICAgYXdhaXQgX3RoaXMuZW5zdXJlRXhpc3RzKHByb3Bvc2FsSWQpO1xuICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uLmZyb21Db250cmFjdFdyYXBwZXIoe1xuICAgICAgICBjb250cmFjdFdyYXBwZXI6IF90aGlzLmNvbnRyYWN0V3JhcHBlcixcbiAgICAgICAgbWV0aG9kOiBcImNhc3RWb3RlV2l0aFJlYXNvblwiLFxuICAgICAgICBhcmdzOiBbcHJvcG9zYWxJZCwgdm90ZVR5cGUsIHJlYXNvbl1cbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlIFByb3Bvc2FsXG4gICAgICpcbiAgICAgKiBAcmVtYXJrcyBFeGVjdXRlIHRoZSByZWxhdGVkIHRyYW5zYWN0aW9ucyBmb3IgYSBwcm9wb3NhbCBpZiB0aGUgcHJvcG9zYWwgc3VjY2VlZGVkLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICogLy8gVGhlIHByb3Bvc2FsIElEIG9mIHRoZSBwcm9wb3NhbCB5b3Ugd2FudCB0byBleGVjdXRlXG4gICAgICogY29uc3QgcHJvcG9zYWxJZCA9IFwiMFwiXG4gICAgICogYXdhaXQgY29udHJhY3QuZXhlY3V0ZShwcm9wb3NhbElkKTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9wb3NhbElkIC0gVGhlIHByb3Bvc2FsIGlkIHRvIGV4ZWN1dGUuXG4gICAgICovXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXhlY3V0ZVwiLCBidWlsZFRyYW5zYWN0aW9uRnVuY3Rpb24oYXN5bmMgcHJvcG9zYWxJZCA9PiB7XG4gICAgICBhd2FpdCB0aGlzLmVuc3VyZUV4aXN0cyhwcm9wb3NhbElkKTtcbiAgICAgIGNvbnN0IHByb3Bvc2FsID0gYXdhaXQgdGhpcy5nZXQocHJvcG9zYWxJZCk7XG4gICAgICBjb25zdCB0b3MgPSBwcm9wb3NhbC5leGVjdXRpb25zLm1hcChwID0+IHAudG9BZGRyZXNzKTtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHByb3Bvc2FsLmV4ZWN1dGlvbnMubWFwKHAgPT4gcC5uYXRpdmVUb2tlblZhbHVlKTtcbiAgICAgIGNvbnN0IGRhdGFzID0gcHJvcG9zYWwuZXhlY3V0aW9ucy5tYXAocCA9PiBwLnRyYW5zYWN0aW9uRGF0YSk7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbkhhc2ggPSBldGhlcnMudXRpbHMuaWQocHJvcG9zYWwuZGVzY3JpcHRpb24pO1xuICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uLmZyb21Db250cmFjdFdyYXBwZXIoe1xuICAgICAgICBjb250cmFjdFdyYXBwZXI6IHRoaXMuY29udHJhY3RXcmFwcGVyLFxuICAgICAgICBtZXRob2Q6IFwiZXhlY3V0ZVwiLFxuICAgICAgICBhcmdzOiBbdG9zLCB2YWx1ZXMsIGRhdGFzLCBkZXNjcmlwdGlvbkhhc2hdXG4gICAgICB9KTtcbiAgICB9KSk7XG4gICAgdGhpcy5fY2hhaW5JZCA9IGNoYWluSWQ7XG4gICAgdGhpcy5hYmkgPSBBYmlTY2hlbWEucGFyc2UoYWJpIHx8IFtdKTtcbiAgICB0aGlzLmNvbnRyYWN0V3JhcHBlciA9IGNvbnRyYWN0V3JhcHBlcjtcbiAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuICAgIHRoaXMubWV0YWRhdGEgPSBuZXcgQ29udHJhY3RNZXRhZGF0YSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgVm90ZUNvbnRyYWN0U2NoZW1hLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMuYXBwID0gbmV3IENvbnRyYWN0QXBwVVJJKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLm1ldGFkYXRhLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMuZW5jb2RlciA9IG5ldyBDb250cmFjdEVuY29kZXIodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZXN0aW1hdG9yID0gbmV3IEdhc0Nvc3RFc3RpbWF0b3IodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IENvbnRyYWN0RXZlbnRzKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmludGVyY2VwdG9yID0gbmV3IENvbnRyYWN0SW50ZXJjZXB0b3IodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICB9XG4gIG9uTmV0d29ya1VwZGF0ZWQobmV0d29yaykge1xuICAgIHRoaXMuY29udHJhY3RXcmFwcGVyLnVwZGF0ZVNpZ25lck9yUHJvdmlkZXIobmV0d29yayk7XG4gIH1cbiAgZ2V0QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3M7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFJFQUQgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBHZXQgYSBwcm9wb3NhbCBieSBpZC5cbiAgICpcbiAgICogQHBhcmFtIHByb3Bvc2FsSWQgLSBUaGUgcHJvcG9zYWwgaWQgdG8gZ2V0LlxuICAgKiBAcmV0dXJucyAtIFRoZSBwcm9wb3NhbC5cbiAgICovXG4gIGFzeW5jIGdldChwcm9wb3NhbElkKSB7XG4gICAgY29uc3QgYWxsID0gYXdhaXQgdGhpcy5nZXRBbGwoKTtcbiAgICBjb25zdCBwcm9wb3NhbHMgPSBhbGwuZmlsdGVyKHAgPT4gcC5wcm9wb3NhbElkLmVxKEJpZ051bWJlci5mcm9tKHByb3Bvc2FsSWQpKSk7XG4gICAgaWYgKHByb3Bvc2Fscy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInByb3Bvc2FsIG5vdCBmb3VuZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3Bvc2Fsc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQWxsIFByb3Bvc2Fsc1xuICAgKlxuICAgKiBAcmVtYXJrcyBHZXQgYWxsIHRoZSBwcm9wb3NhbHMgaW4gdGhpcyBjb250cmFjdC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBwcm9wb3NhbHMgPSBhd2FpdCBjb250cmFjdC5nZXRBbGwoKTtcbiAgICogY29uc29sZS5sb2cocHJvcG9zYWxzKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEByZXR1cm5zIC0gQWxsIHRoZSBwcm9wb3NhbHMgaW4gdGhlIGNvbnRyYWN0LlxuICAgKi9cbiAgYXN5bmMgZ2V0QWxsKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbCgoYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmdldEFsbFByb3Bvc2FscygpKS5tYXAoYXN5bmMgZGF0YSA9PiAoe1xuICAgICAgcHJvcG9zYWxJZDogZGF0YS5wcm9wb3NhbElkLFxuICAgICAgcHJvcG9zZXI6IGRhdGEucHJvcG9zZXIsXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgIHN0YXJ0QmxvY2s6IGRhdGEuc3RhcnRCbG9jayxcbiAgICAgIGVuZEJsb2NrOiBkYXRhLmVuZEJsb2NrLFxuICAgICAgc3RhdGU6IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5zdGF0ZShkYXRhLnByb3Bvc2FsSWQpLFxuICAgICAgdm90ZXM6IGF3YWl0IHRoaXMuZ2V0UHJvcG9zYWxWb3RlcyhkYXRhLnByb3Bvc2FsSWQpLFxuICAgICAgZXhlY3V0aW9uczogZGF0YVszXS5tYXAoKGMsIGkpID0+ICh7XG4gICAgICAgIHRvQWRkcmVzczogZGF0YS50YXJnZXRzW2ldLFxuICAgICAgICBuYXRpdmVUb2tlblZhbHVlOiBjLFxuICAgICAgICB0cmFuc2FjdGlvbkRhdGE6IGRhdGEuY2FsbGRhdGFzW2ldXG4gICAgICB9KSlcbiAgICB9KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdm90ZXMgZm9yIGEgc3BlY2lmaWMgcHJvcG9zYWxcbiAgICogQHBhcmFtIHByb3Bvc2FsSWQgLSB0aGUgcHJvcG9zYWxJZFxuICAgKi9cbiAgYXN5bmMgZ2V0UHJvcG9zYWxWb3Rlcyhwcm9wb3NhbElkKSB7XG4gICAgY29uc3Qgdm90ZXMgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QucHJvcG9zYWxWb3Rlcyhwcm9wb3NhbElkKTtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IFZvdGVUeXBlLkFnYWluc3QsXG4gICAgICBsYWJlbDogXCJBZ2FpbnN0XCIsXG4gICAgICBjb3VudDogdm90ZXMuYWdhaW5zdFZvdGVzXG4gICAgfSwge1xuICAgICAgdHlwZTogVm90ZVR5cGUuRm9yLFxuICAgICAgbGFiZWw6IFwiRm9yXCIsXG4gICAgICBjb3VudDogdm90ZXMuZm9yVm90ZXNcbiAgICB9LCB7XG4gICAgICB0eXBlOiBWb3RlVHlwZS5BYnN0YWluLFxuICAgICAgbGFiZWw6IFwiQWJzdGFpblwiLFxuICAgICAgY291bnQ6IHZvdGVzLmFic3RhaW5Wb3Rlc1xuICAgIH1dO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIElmIFdhbGxldCBWb3RlZFxuICAgKlxuICAgKiBAcmVtYXJrcyBDaGVjayBpZiBhIHNwZWNpZmllZCB3YWxsZXQgaGFzIHZvdGVkIGEgc3BlY2lmaWMgcHJvcG9zYWxcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgcHJvcG9zYWwgSUQgb2YgdGhlIHByb3Bvc2FsIHlvdSB3YW50IHRvIGNoZWNrXG4gICAqIGNvbnN0IHByb3Bvc2FsSWQgPSBcIjBcIjtcbiAgICogLy8gVGhlIGFkZHJlc3Mgb2YgdGhlIHdhbGxldCB5b3Ugd2FudCB0byBjaGVjayB0byBzZWUgaWYgdGhleSB2b3RlZFxuICAgKiBjb25zdCBhZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjtcbiAgICpcbiAgICogYXdhaXQgY29udHJhY3QuaGFzVm90ZWQocHJvcG9zYWxJZCwgYWRkcmVzcyk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gcHJvcG9zYWxJZCAtIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiBhIHByb3Bvc2FsIC5cbiAgICogQHBhcmFtIGFjY291bnQgLSAob3B0aW9uYWwpIHdhbGxldCBhY2NvdW50IGFkZHJlc3MuIERlZmF1bHRzIHRvIGNvbm5lY3RlZCBzaWduZXIuXG4gICAqIEByZXR1cm5zIC0gVHJ1ZSBpZiB0aGUgYWNjb3VudCBoYXMgYWxyZWFkeSB2b3RlZCBvbiB0aGUgcHJvcG9zYWwuXG4gICAqL1xuICBhc3luYyBoYXNWb3RlZChwcm9wb3NhbElkLCBhY2NvdW50KSB7XG4gICAgaWYgKCFhY2NvdW50KSB7XG4gICAgICBhY2NvdW50ID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0U2lnbmVyQWRkcmVzcygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0Lmhhc1ZvdGVkKHByb3Bvc2FsSWQsIGF3YWl0IHJlc29sdmVBZGRyZXNzKGFjY291bnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW4gRXhlY3V0ZVxuICAgKlxuICAgKiBAcmVtYXJrcyBDaGVjayBpZiBhIHByb3Bvc2FsIGNhbiBiZSBleGVjdXRlZCAoaWYgdGhlIHByb3Bvc2FsIGhhcyBzdWNjZWVkZWQpLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIFRoZSBwcm9wb3NhbCBJRCBvZiB0aGUgcHJvcG9zYWwgeW91IHdhbnQgdG8gY2hlY2tcbiAgICogY29uc3QgcHJvcG9zYWxJZCA9IFwiMFwiO1xuICAgKiBjb25zdCBjYW5FeGVjdXRlID0gYXdhaXQgY29udHJhY3QuY2FuRXhlY3V0ZShwcm9wb3NhbElkKTtcbiAgICogY29uc29sZS5sb2coY2FuRXhlY3V0ZSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gcHJvcG9zYWxJZCAtIFRoZSBwcm9wb3NhbCBJRCB0byBjaGVjay5cbiAgICogQHJldHVybnMgLSBUcnVlIGlmIHRoZSBwcm9wb3NhbCBjYW4gYmUgZXhlY3V0ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGFzeW5jIGNhbkV4ZWN1dGUocHJvcG9zYWxJZCkge1xuICAgIGF3YWl0IHRoaXMuZW5zdXJlRXhpc3RzKHByb3Bvc2FsSWQpO1xuICAgIGNvbnN0IHByb3Bvc2FsID0gYXdhaXQgdGhpcy5nZXQocHJvcG9zYWxJZCk7XG4gICAgY29uc3QgdG9zID0gcHJvcG9zYWwuZXhlY3V0aW9ucy5tYXAocCA9PiBwLnRvQWRkcmVzcyk7XG4gICAgY29uc3QgdmFsdWVzID0gcHJvcG9zYWwuZXhlY3V0aW9ucy5tYXAocCA9PiBwLm5hdGl2ZVRva2VuVmFsdWUpO1xuICAgIGNvbnN0IGRhdGFzID0gcHJvcG9zYWwuZXhlY3V0aW9ucy5tYXAocCA9PiBwLnRyYW5zYWN0aW9uRGF0YSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25IYXNoID0gZXRoZXJzLnV0aWxzLmlkKHByb3Bvc2FsLmRlc2NyaXB0aW9uKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuY2FsbFN0YXRpYygpLmV4ZWN1dGUodG9zLCB2YWx1ZXMsIGRhdGFzLCBkZXNjcmlwdGlvbkhhc2gpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgYmFsYW5jZSBvZiB0aGUgcHJvamVjdCB3YWxsZXQgaW4gdGhlIG5hdGl2ZSB0b2tlbiBvZiB0aGUgY2hhaW5cbiAgICpcbiAgICogQHJldHVybnMgLSBUaGUgYmFsYW5jZSBvZiB0aGUgcHJvamVjdCBpbiB0aGUgbmF0aXZlIHRva2VuIG9mIHRoZSBjaGFpblxuICAgKi9cbiAgYXN5bmMgYmFsYW5jZSgpIHtcbiAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnByb3ZpZGVyLmdldEJhbGFuY2UodGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3MpO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgc3ltYm9sOiBcIlwiLFxuICAgICAgZGVjaW1hbHM6IDE4LFxuICAgICAgdmFsdWU6IGJhbGFuY2UsXG4gICAgICBkaXNwbGF5VmFsdWU6IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhiYWxhbmNlLCAxOClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBiYWxhbmNlIG9mIHRoZSBwcm9qZWN0IHdhbGxldCBpbiBhIHBhcnRpY3VsYXJcbiAgICogRVJDMjAgdG9rZW4gY29udHJhY3RcbiAgICpcbiAgICogQHJldHVybnMgLSBUaGUgYmFsYW5jZSBvZiB0aGUgcHJvamVjdCBpbiB0aGUgbmF0aXZlIHRva2VuIG9mIHRoZSBjaGFpblxuICAgKi9cbiAgYXN5bmMgYmFsYW5jZU9mVG9rZW4odG9rZW5BZGRyZXNzKSB7XG4gICAgY29uc3QgZXJjMjAgPSBuZXcgQ29udHJhY3QoYXdhaXQgcmVzb2x2ZUFkZHJlc3ModG9rZW5BZGRyZXNzKSwgRVJDMjBBYmksIHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCkpO1xuICAgIHJldHVybiBhd2FpdCBmZXRjaEN1cnJlbmN5VmFsdWUodGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKSwgdG9rZW5BZGRyZXNzLCBhd2FpdCBlcmMyMC5iYWxhbmNlT2YodGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3MpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGEgcHJvcG9zYWwgYnkgaXRzIGlkLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHBhcmFtIHByb3Bvc2FsSWQgLSBQcm9wb3NhbCB0byBjaGVjayBmb3JcbiAgICovXG4gIGFzeW5jIGVuc3VyZUV4aXN0cyhwcm9wb3NhbElkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5zdGF0ZShwcm9wb3NhbElkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBFcnJvcihgUHJvcG9zYWwgJHtwcm9wb3NhbElkfSBub3QgZm91bmRgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBWb3RlIGNvbnRyYWN0IGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIGFzeW5jIHNldHRpbmdzKCkge1xuICAgIGNvbnN0IFt2b3RpbmdEZWxheSwgdm90aW5nUGVyaW9kLCB2b3RpbmdUb2tlbkFkZHJlc3MsIHZvdGluZ1F1b3J1bUZyYWN0aW9uLCBwcm9wb3NhbFRva2VuVGhyZXNob2xkXSA9IGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3Qudm90aW5nRGVsYXkoKSwgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnZvdGluZ1BlcmlvZCgpLCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QudG9rZW4oKSwgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0W1wicXVvcnVtTnVtZXJhdG9yKClcIl0oKSwgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnByb3Bvc2FsVGhyZXNob2xkKCldKTtcbiAgICBjb25zdCB2b3RpbmdUb2tlbk1ldGFkYXRhID0gYXdhaXQgZmV0Y2hDdXJyZW5jeU1ldGFkYXRhKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIHZvdGluZ1Rva2VuQWRkcmVzcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZvdGluZ0RlbGF5OiB2b3RpbmdEZWxheS50b1N0cmluZygpLFxuICAgICAgdm90aW5nUGVyaW9kOiB2b3RpbmdQZXJpb2QudG9TdHJpbmcoKSxcbiAgICAgIHZvdGluZ1Rva2VuQWRkcmVzcyxcbiAgICAgIHZvdGluZ1Rva2VuTWV0YWRhdGEsXG4gICAgICB2b3RpbmdRdW9ydW1GcmFjdGlvbjogdm90aW5nUXVvcnVtRnJhY3Rpb24udG9TdHJpbmcoKSxcbiAgICAgIHByb3Bvc2FsVG9rZW5UaHJlc2hvbGQ6IHByb3Bvc2FsVG9rZW5UaHJlc2hvbGQudG9TdHJpbmcoKVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgcHJlcGFyZShtZXRob2QsIGFyZ3MsIG92ZXJyaWRlcykge1xuICAgIHJldHVybiBUcmFuc2FjdGlvbi5mcm9tQ29udHJhY3RXcmFwcGVyKHtcbiAgICAgIGNvbnRyYWN0V3JhcHBlcjogdGhpcy5jb250cmFjdFdyYXBwZXIsXG4gICAgICBtZXRob2QsXG4gICAgICBhcmdzLFxuICAgICAgb3ZlcnJpZGVzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBjYWxsKGZ1bmN0aW9uTmFtZSwgYXJncywgb3ZlcnJpZGVzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLmNhbGwoZnVuY3Rpb25OYW1lLCBhcmdzLCBvdmVycmlkZXMpO1xuICB9XG59XG5cbmV4cG9ydCB7IFZvdGUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==