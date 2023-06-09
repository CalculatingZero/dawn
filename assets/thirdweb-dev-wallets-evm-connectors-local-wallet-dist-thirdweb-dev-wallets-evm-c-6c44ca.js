"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["node_modules_thirdweb-dev_wallets_evm_connectors_local-wallet_dist_thirdweb-dev-wallets-evm-c-6c44ca"],{

/***/ "./node_modules/@thirdweb-dev/wallets/dist/keys-bd983fca.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/wallets/dist/keys-bd983fca.browser.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ DEFAULT_WALLET_API_KEY)
/* harmony export */ });
const DEFAULT_WALLET_API_KEY = "4f20f63d3ce0ec88eca639a291effef1559289d5614d77040d783048a4b3f316";




/***/ }),

/***/ "./node_modules/@thirdweb-dev/wallets/dist/normalizeChainId-e4cc0175.browser.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/wallets/dist/normalizeChainId-e4cc0175.browser.esm.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ normalizeChainId)
/* harmony export */ });
function normalizeChainId(chainId) {
  if (typeof chainId === "string") {
    return Number.parseInt(chainId, chainId.trim().substring(0, 2) === "0x" ? 16 : 10);
  }
  if (typeof chainId === "bigint") {
    return Number(chainId);
  }
  return chainId;
}




/***/ }),

/***/ "./node_modules/@thirdweb-dev/wallets/evm/connectors/local-wallet/dist/thirdweb-dev-wallets-evm-connectors-local-wallet.browser.esm.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/wallets/evm/connectors/local-wallet/dist/thirdweb-dev-wallets-evm-connectors-local-wallet.browser.esm.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWalletConnector: () => (/* binding */ LocalWalletConnector)
/* harmony export */ });
/* harmony import */ var _dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/classPrivateFieldSet-a5db7c83.browser.esm.js");
/* harmony import */ var _dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../dist/defineProperty-c8ecdc07.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/defineProperty-c8ecdc07.browser.esm.js");
/* harmony import */ var _dist_connector_c1e1817a_browser_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../dist/connector-c1e1817a.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/connector-c1e1817a.browser.esm.js");
/* harmony import */ var _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @thirdweb-dev/sdk */ "./node_modules/@thirdweb-dev/sdk/dist/contract-metadata-88f06ef9.browser.esm.js");
/* harmony import */ var _dist_keys_bd983fca_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../dist/keys-bd983fca.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/keys-bd983fca.browser.esm.js");
/* harmony import */ var _dist_normalizeChainId_e4cc0175_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../dist/normalizeChainId-e4cc0175.browser.esm.js */ "./node_modules/@thirdweb-dev/wallets/dist/normalizeChainId-e4cc0175.browser.esm.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.mjs");








var _provider = /*#__PURE__*/new WeakMap();
var _signer = /*#__PURE__*/new WeakMap();
class LocalWalletConnector extends _dist_connector_c1e1817a_browser_esm_js__WEBPACK_IMPORTED_MODULE_1__.C {
  constructor(options) {
    super();
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, "id", "local_wallet");
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, "name", "Local Wallet");
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, "options", void 0);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, _provider, {
      writable: true,
      value: void 0
    });
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__._)(this, _signer, {
      writable: true,
      value: void 0
    });
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, "shimDisconnectKey", "localWallet.shimDisconnect");
    (0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(this, "onChainChanged", chainId => {
      const id = (0,_dist_normalizeChainId_e4cc0175_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__.n)(chainId);
      const unsupported = !this.options.chains.find(c => c.chainId === id);
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    this.options = options;
  }
  async connect(args) {
    if (args.chainId) {
      this.switchChain(args.chainId);
    }
    const signer = await this.getSigner();
    const address = await signer.getAddress();
    return address;
  }
  async disconnect() {
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.a)(this, _provider, undefined);
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.a)(this, _signer, undefined);
  }
  async getAddress() {
    const signer = await this.getSigner();
    if (!signer) {
      throw new Error("No signer found");
    }
    return await signer.getAddress();
  }
  async isConnected() {
    try {
      const addr = await this.getAddress();
      return !!addr;
    } catch {
      return false;
    }
  }
  async getProvider() {
    if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.b)(this, _provider)) {
      (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.a)(this, _provider, (0,_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_5__.d0)(this.options.chain, {
        thirdwebApiKey: this.options.thirdwebApiKey || _dist_keys_bd983fca_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.D
      }));
    }
    return (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.b)(this, _provider);
  }
  async getSigner() {
    if (!(0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.b)(this, _signer)) {
      const provider = await this.getProvider();
      (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.a)(this, _signer, getSignerFromEthersWallet(this.options.ethersWallet, provider));
    }
    return (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.b)(this, _signer);
  }
  async switchChain(chainId) {
    const chain = this.options.chains.find(c => c.chainId === chainId);
    if (!chain) {
      throw new Error(`Chain not found for chainId ${chainId}, please add it to the chains property when creating this wallet`);
    }
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.a)(this, _provider, (0,_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_5__.d0)(chain, {
      thirdwebApiKey: this.options.thirdwebApiKey || _dist_keys_bd983fca_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.D
    }));
    (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.a)(this, _signer, getSignerFromEthersWallet(this.options.ethersWallet, (0,_dist_classPrivateFieldSet_a5db7c83_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.b)(this, _provider)));
    this.onChainChanged(chainId);
  }
  async setupListeners() {}
  updateChains(chains) {
    this.options.chains = chains;
  }
}
function getSignerFromEthersWallet(ethersWallet, provider) {
  if (provider) {
    return ethersWallet.connect(provider);
  }
  return ethersWallet;
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXdhbGxldHMtZXZtLWNvbm5lY3RvcnMtbG9jYWwtd2FsbGV0LWRpc3QtdGhpcmR3ZWItZGV2LXdhbGxldHMtZXZtLWMtNmM0NGNhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFdUM7Ozs7Ozs7Ozs7Ozs7OztBQ0Z2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnVJO0FBQ3pFO0FBQ1g7QUFDL0I7QUFDdUM7QUFDTTtBQUMzRTs7QUFFdkI7QUFDQTtBQUNBLG1DQUFtQyxzRUFBUztBQUM1QztBQUNBO0FBQ0EsSUFBSSwrRUFBZTtBQUNuQixJQUFJLCtFQUFlO0FBQ25CLElBQUksK0VBQWU7QUFDbkIsSUFBSSxxRkFBMEI7QUFDOUI7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLHFGQUEwQjtBQUM5QjtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksK0VBQWU7QUFDbkIsSUFBSSwrRUFBZTtBQUNuQixpQkFBaUIsaUZBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUZBQXFCO0FBQ3pCLElBQUkscUZBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUZBQXFCO0FBQzlCLE1BQU0scUZBQXFCLGtCQUFrQixxREFBZ0I7QUFDN0QsdURBQXVELGlFQUFzQjtBQUM3RSxPQUFPO0FBQ1A7QUFDQSxXQUFXLHFGQUFxQjtBQUNoQztBQUNBO0FBQ0EsU0FBUyxxRkFBcUI7QUFDOUI7QUFDQSxNQUFNLHFGQUFxQjtBQUMzQjtBQUNBLFdBQVcscUZBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0Q7QUFDQSxJQUFJLHFGQUFxQixrQkFBa0IscURBQWdCO0FBQzNELHFEQUFxRCxpRUFBc0I7QUFDM0UsS0FBSztBQUNMLElBQUkscUZBQXFCLHFFQUFxRSxxRkFBcUI7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhpcmR3ZWItbGVhcm4tdGhlbWUvLi9ub2RlX21vZHVsZXMvQHRoaXJkd2ViLWRldi93YWxsZXRzL2Rpc3Qva2V5cy1iZDk4M2ZjYS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3dhbGxldHMvZGlzdC9ub3JtYWxpemVDaGFpbklkLWU0Y2MwMTc1LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvd2FsbGV0cy9ldm0vY29ubmVjdG9ycy9sb2NhbC13YWxsZXQvZGlzdC90aGlyZHdlYi1kZXYtd2FsbGV0cy1ldm0tY29ubmVjdG9ycy1sb2NhbC13YWxsZXQuYnJvd3Nlci5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgREVGQVVMVF9XQUxMRVRfQVBJX0tFWSA9IFwiNGYyMGY2M2QzY2UwZWM4OGVjYTYzOWEyOTFlZmZlZjE1NTkyODlkNTYxNGQ3NzA0MGQ3ODMwNDhhNGIzZjMxNlwiO1xuXG5leHBvcnQgeyBERUZBVUxUX1dBTExFVF9BUElfS0VZIGFzIEQgfTtcbiIsImZ1bmN0aW9uIG5vcm1hbGl6ZUNoYWluSWQoY2hhaW5JZCkge1xuICBpZiAodHlwZW9mIGNoYWluSWQgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KGNoYWluSWQsIGNoYWluSWQudHJpbSgpLnN1YnN0cmluZygwLCAyKSA9PT0gXCIweFwiID8gMTYgOiAxMCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBjaGFpbklkID09PSBcImJpZ2ludFwiKSB7XG4gICAgcmV0dXJuIE51bWJlcihjaGFpbklkKTtcbiAgfVxuICByZXR1cm4gY2hhaW5JZDtcbn1cblxuZXhwb3J0IHsgbm9ybWFsaXplQ2hhaW5JZCBhcyBuIH07XG4iLCJpbXBvcnQgeyBfIGFzIF9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjLCBhIGFzIF9jbGFzc1ByaXZhdGVGaWVsZFNldCwgYiBhcyBfY2xhc3NQcml2YXRlRmllbGRHZXQgfSBmcm9tICcuLi8uLi8uLi8uLi9kaXN0L2NsYXNzUHJpdmF0ZUZpZWxkU2V0LWE1ZGI3YzgzLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlzdC9kZWZpbmVQcm9wZXJ0eS1jOGVjZGMwNy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBDIGFzIENvbm5lY3RvciB9IGZyb20gJy4uLy4uLy4uLy4uL2Rpc3QvY29ubmVjdG9yLWMxZTE4MTdhLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGdldENoYWluUHJvdmlkZXIgfSBmcm9tICdAdGhpcmR3ZWItZGV2L3Nkayc7XG5pbXBvcnQgeyBEIGFzIERFRkFVTFRfV0FMTEVUX0FQSV9LRVkgfSBmcm9tICcuLi8uLi8uLi8uLi9kaXN0L2tleXMtYmQ5ODNmY2EuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgbiBhcyBub3JtYWxpemVDaGFpbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlzdC9ub3JtYWxpemVDaGFpbklkLWU0Y2MwMTc1LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAnZXZlbnRlbWl0dGVyMyc7XG5cbnZhciBfcHJvdmlkZXIgPSAvKiNfX1BVUkVfXyovbmV3IFdlYWtNYXAoKTtcbnZhciBfc2lnbmVyID0gLyojX19QVVJFX18qL25ldyBXZWFrTWFwKCk7XG5jbGFzcyBMb2NhbFdhbGxldENvbm5lY3RvciBleHRlbmRzIENvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlkXCIsIFwibG9jYWxfd2FsbGV0XCIpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5hbWVcIiwgXCJMb2NhbCBXYWxsZXRcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib3B0aW9uc1wiLCB2b2lkIDApO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjKHRoaXMsIF9wcm92aWRlciwge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogdm9pZCAwXG4gICAgfSk7XG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWModGhpcywgX3NpZ25lciwge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogdm9pZCAwXG4gICAgfSk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2hpbURpc2Nvbm5lY3RLZXlcIiwgXCJsb2NhbFdhbGxldC5zaGltRGlzY29ubmVjdFwiKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbkNoYWluQ2hhbmdlZFwiLCBjaGFpbklkID0+IHtcbiAgICAgIGNvbnN0IGlkID0gbm9ybWFsaXplQ2hhaW5JZChjaGFpbklkKTtcbiAgICAgIGNvbnN0IHVuc3VwcG9ydGVkID0gIXRoaXMub3B0aW9ucy5jaGFpbnMuZmluZChjID0+IGMuY2hhaW5JZCA9PT0gaWQpO1xuICAgICAgdGhpcy5lbWl0KFwiY2hhbmdlXCIsIHtcbiAgICAgICAgY2hhaW46IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB1bnN1cHBvcnRlZFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIGFzeW5jIGNvbm5lY3QoYXJncykge1xuICAgIGlmIChhcmdzLmNoYWluSWQpIHtcbiAgICAgIHRoaXMuc3dpdGNoQ2hhaW4oYXJncy5jaGFpbklkKTtcbiAgICB9XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgdGhpcy5nZXRTaWduZXIoKTtcbiAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKTtcbiAgICByZXR1cm4gYWRkcmVzcztcbiAgfVxuICBhc3luYyBkaXNjb25uZWN0KCkge1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfcHJvdmlkZXIsIHVuZGVmaW5lZCk7XG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9zaWduZXIsIHVuZGVmaW5lZCk7XG4gIH1cbiAgYXN5bmMgZ2V0QWRkcmVzcygpIHtcbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCB0aGlzLmdldFNpZ25lcigpO1xuICAgIGlmICghc2lnbmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzaWduZXIgZm91bmRcIik7XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpO1xuICB9XG4gIGFzeW5jIGlzQ29ubmVjdGVkKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhZGRyID0gYXdhaXQgdGhpcy5nZXRBZGRyZXNzKCk7XG4gICAgICByZXR1cm4gISFhZGRyO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBhc3luYyBnZXRQcm92aWRlcigpIHtcbiAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpKSB7XG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3Byb3ZpZGVyLCBnZXRDaGFpblByb3ZpZGVyKHRoaXMub3B0aW9ucy5jaGFpbiwge1xuICAgICAgICB0aGlyZHdlYkFwaUtleTogdGhpcy5vcHRpb25zLnRoaXJkd2ViQXBpS2V5IHx8IERFRkFVTFRfV0FMTEVUX0FQSV9LRVlcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpO1xuICB9XG4gIGFzeW5jIGdldFNpZ25lcigpIHtcbiAgICBpZiAoIV9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfc2lnbmVyKSkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB0aGlzLmdldFByb3ZpZGVyKCk7XG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3NpZ25lciwgZ2V0U2lnbmVyRnJvbUV0aGVyc1dhbGxldCh0aGlzLm9wdGlvbnMuZXRoZXJzV2FsbGV0LCBwcm92aWRlcikpO1xuICAgIH1cbiAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9zaWduZXIpO1xuICB9XG4gIGFzeW5jIHN3aXRjaENoYWluKGNoYWluSWQpIHtcbiAgICBjb25zdCBjaGFpbiA9IHRoaXMub3B0aW9ucy5jaGFpbnMuZmluZChjID0+IGMuY2hhaW5JZCA9PT0gY2hhaW5JZCk7XG4gICAgaWYgKCFjaGFpbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaGFpbiBub3QgZm91bmQgZm9yIGNoYWluSWQgJHtjaGFpbklkfSwgcGxlYXNlIGFkZCBpdCB0byB0aGUgY2hhaW5zIHByb3BlcnR5IHdoZW4gY3JlYXRpbmcgdGhpcyB3YWxsZXRgKTtcbiAgICB9XG4gICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9wcm92aWRlciwgZ2V0Q2hhaW5Qcm92aWRlcihjaGFpbiwge1xuICAgICAgdGhpcmR3ZWJBcGlLZXk6IHRoaXMub3B0aW9ucy50aGlyZHdlYkFwaUtleSB8fCBERUZBVUxUX1dBTExFVF9BUElfS0VZXG4gICAgfSkpO1xuICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfc2lnbmVyLCBnZXRTaWduZXJGcm9tRXRoZXJzV2FsbGV0KHRoaXMub3B0aW9ucy5ldGhlcnNXYWxsZXQsIF9jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfcHJvdmlkZXIpKSk7XG4gICAgdGhpcy5vbkNoYWluQ2hhbmdlZChjaGFpbklkKTtcbiAgfVxuICBhc3luYyBzZXR1cExpc3RlbmVycygpIHt9XG4gIHVwZGF0ZUNoYWlucyhjaGFpbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMuY2hhaW5zID0gY2hhaW5zO1xuICB9XG59XG5mdW5jdGlvbiBnZXRTaWduZXJGcm9tRXRoZXJzV2FsbGV0KGV0aGVyc1dhbGxldCwgcHJvdmlkZXIpIHtcbiAgaWYgKHByb3ZpZGVyKSB7XG4gICAgcmV0dXJuIGV0aGVyc1dhbGxldC5jb25uZWN0KHByb3ZpZGVyKTtcbiAgfVxuICByZXR1cm4gZXRoZXJzV2FsbGV0O1xufVxuXG5leHBvcnQgeyBMb2NhbFdhbGxldENvbm5lY3RvciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9