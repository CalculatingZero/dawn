"use strict";
(self["webpackChunkthirdweb_learn_theme"] = self["webpackChunkthirdweb_learn_theme"] || []).push([["node_modules_thirdweb-dev_contracts-js_factories_TWProxy__factory_dist_thirdweb-dev-contracts-6dbaee"],{

/***/ "./node_modules/@thirdweb-dev/contracts-js/dist/defineProperty-c8ecdc07.browser.esm.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/contracts-js/dist/defineProperty-c8ecdc07.browser.esm.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _defineProperty)
/* harmony export */ });
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}




/***/ }),

/***/ "./node_modules/@thirdweb-dev/contracts-js/factories/TWProxy__factory/dist/thirdweb-dev-contracts-js-factories-TWProxy__factory.browser.esm.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/contracts-js/factories/TWProxy__factory/dist/thirdweb-dev-contracts-js-factories-TWProxy__factory.browser.esm.js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TWProxy__factory: () => (/* binding */ TWProxy__factory)
/* harmony export */ });
/* harmony import */ var _dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dist/defineProperty-c8ecdc07.browser.esm.js */ "./node_modules/@thirdweb-dev/contracts-js/dist/defineProperty-c8ecdc07.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/contracts/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/abi/lib.esm/interface.js");



const _abi = [{
  inputs: [{
    internalType: "address",
    name: "_logic",
    type: "address"
  }, {
    internalType: "bytes",
    name: "_data",
    type: "bytes"
  }],
  stateMutability: "payable",
  type: "constructor"
}, {
  stateMutability: "payable",
  type: "fallback"
}, {
  stateMutability: "payable",
  type: "receive"
}];
const _bytecode = "0x60806040526040516106ab3803806106ab83398101604081905261002291610261565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd61032f565b6000805160206106648339815191521461006957610069610354565b8161008e60008051602061066483398151915260001b6100d060201b6100521760201c565b80546001600160a01b0319166001600160a01b03929092169190911790558051156100c9576100c782826100d360201b6100551760201c565b505b50506103b9565b90565b60606100f88383604051806060016040528060278152602001610684602791396100ff565b9392505050565b60606001600160a01b0384163b61016c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b031685604051610187919061036a565b600060405180830381855af49150503d80600081146101c2576040519150601f19603f3d011682016040523d82523d6000602084013e6101c7565b606091505b5090925090506101d88282866101e2565b9695505050505050565b606083156101f15750816100f8565b8251156102015782518084602001fd5b8160405162461bcd60e51b81526004016101639190610386565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561024c578181015183820152602001610234565b8381111561025b576000848401525b50505050565b6000806040838503121561027457600080fd5b82516001600160a01b038116811461028b57600080fd5b60208401519092506001600160401b03808211156102a857600080fd5b818501915085601f8301126102bc57600080fd5b8151818111156102ce576102ce61021b565b604051601f8201601f19908116603f011681019083821181831017156102f6576102f661021b565b8160405282815288602084870101111561030f57600080fd5b610320836020830160208801610231565b80955050505050509250929050565b60008282101561034f57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825161037c818460208701610231565b9190910192915050565b60208152600082518060208401526103a5816040850160208701610231565b601f01601f19169190910160400192915050565b61029c806103c86000396000f3fe60806040523661001357610011610017565b005b6100115b61005061004b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b610081565b565b90565b606061007a8383604051806060016040528060278152602001610240602791396100a5565b9392505050565b3660008037600080366000845af43d6000803e8080156100a0573d6000f35b3d6000fd5b60606001600160a01b0384163b6101125760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161012d91906101f0565b600060405180830381855af49150503d8060008114610168576040519150601f19603f3d011682016040523d82523d6000602084013e61016d565b606091505b509150915061017d828286610187565b9695505050505050565b6060831561019657508161007a565b8251156101a65782518084602001fd5b8160405162461bcd60e51b8152600401610109919061020c565b60005b838110156101db5781810151838201526020016101c3565b838111156101ea576000848401525b50505050565b600082516102028184602087016101c0565b9190910192915050565b602081526000825180602084015261022b8160408501602087016101c0565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122006108c1246a0a89b20e860cd835de4e438789f40f69cfafd9cd667687d38322564736f6c634300080c0033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
const isSuperArgs = xs => xs.length > 1;
class TWProxy__factory extends ethers__WEBPACK_IMPORTED_MODULE_0__.ContractFactory {
  constructor() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }
  deploy(_logic, _data, overrides) {
    return super.deploy(_logic, _data, overrides || {});
  }
  getDeployTransaction(_logic, _data, overrides) {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  attach(address) {
    return super.attach(address);
  }
  connect(signer) {
    return super.connect(signer);
  }
  static createInterface() {
    return new ethers__WEBPACK_IMPORTED_MODULE_1__.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new ethers__WEBPACK_IMPORTED_MODULE_0__.Contract(address, _abi, signerOrProvider);
  }
}
(0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(TWProxy__factory, "bytecode", _bytecode);
(0,_dist_defineProperty_c8ecdc07_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._)(TWProxy__factory, "abi", _abi);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LWNvbnRyYWN0cy1mYWN0b3JpZXMtVFdQcm94eS1mYWN0b3J5LWRpc3QtdGhpcmR3ZWItZGV2LWNvbnRyYWN0cy02ZGJhZWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0I0RDtBQUNsQzs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLCtCQUErQixtREFBZTtBQUM5QztBQUNBLHdFQUF3RSxhQUFhO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkNBQWU7QUFDOUI7QUFDQTtBQUNBLGVBQWUsNENBQVE7QUFDdkI7QUFDQTtBQUNBLCtFQUFlO0FBQ2YsK0VBQWU7O0FBRWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGlyZHdlYi1sZWFybi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2RlZmluZVByb3BlcnR5LWM4ZWNkYzA3LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3RoaXJkd2ViLWxlYXJuLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2ZhY3Rvcmllcy9UV1Byb3h5X19mYWN0b3J5L2Rpc3QvdGhpcmR3ZWItZGV2LWNvbnRyYWN0cy1qcy1mYWN0b3JpZXMtVFdQcm94eV9fZmFjdG9yeS5icm93c2VyLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuZXhwb3J0IHsgX2RlZmluZVByb3BlcnR5IGFzIF8gfTtcbiIsImltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vLi4vZGlzdC9kZWZpbmVQcm9wZXJ0eS1jOGVjZGMwNy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBDb250cmFjdEZhY3RvcnksIHV0aWxzLCBDb250cmFjdCB9IGZyb20gJ2V0aGVycyc7XG5cbmNvbnN0IF9hYmkgPSBbe1xuICBpbnB1dHM6IFt7XG4gICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICBuYW1lOiBcIl9sb2dpY1wiLFxuICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gIH0sIHtcbiAgICBpbnRlcm5hbFR5cGU6IFwiYnl0ZXNcIixcbiAgICBuYW1lOiBcIl9kYXRhXCIsXG4gICAgdHlwZTogXCJieXRlc1wiXG4gIH1dLFxuICBzdGF0ZU11dGFiaWxpdHk6IFwicGF5YWJsZVwiLFxuICB0eXBlOiBcImNvbnN0cnVjdG9yXCJcbn0sIHtcbiAgc3RhdGVNdXRhYmlsaXR5OiBcInBheWFibGVcIixcbiAgdHlwZTogXCJmYWxsYmFja1wiXG59LCB7XG4gIHN0YXRlTXV0YWJpbGl0eTogXCJwYXlhYmxlXCIsXG4gIHR5cGU6IFwicmVjZWl2ZVwiXG59XTtcbmNvbnN0IF9ieXRlY29kZSA9IFwiMHg2MDgwNjA0MDUyNjA0MDUxNjEwNmFiMzgwMzgwNjEwNmFiODMzOTgxMDE2MDQwODE5MDUyNjEwMDIyOTE2MTAyNjE1NjViNjEwMDRkNjAwMTdmMzYwODk0YTEzYmExYTMyMTA2NjdjODI4NDkyZGI5OGRjYTNlMjA3NmNjMzczNWE5MjBhM2NhNTA1ZDM4MmJiZDYxMDMyZjU2NWI2MDAwODA1MTYwMjA2MTA2NjQ4MzM5ODE1MTkxNTIxNDYxMDA2OTU3NjEwMDY5NjEwMzU0NTY1YjgxNjEwMDhlNjAwMDgwNTE2MDIwNjEwNjY0ODMzOTgxNTE5MTUyNjAwMDFiNjEwMGQwNjAyMDFiNjEwMDUyMTc2MDIwMWM1NjViODA1NDYwMDE2MDAxNjBhMDFiMDMxOTE2NjAwMTYwMDE2MGEwMWIwMzkyOTA5MjE2OTE5MDkxMTc5MDU1ODA1MTE1NjEwMGM5NTc2MTAwYzc4MjgyNjEwMGQzNjAyMDFiNjEwMDU1MTc2MDIwMWM1NjViNTA1YjUwNTA2MTAzYjk1NjViOTA1NjViNjA2MDYxMDBmODgzODM2MDQwNTE4MDYwNjAwMTYwNDA1MjgwNjAyNzgxNTI2MDIwMDE2MTA2ODQ2MDI3OTEzOTYxMDBmZjU2NWI5MzkyNTA1MDUwNTY1YjYwNjA2MDAxNjAwMTYwYTAxYjAzODQxNjNiNjEwMTZjNTc2MDQwNTE2MjQ2MWJjZDYwZTUxYjgxNTI2MDIwNjAwNDgyMDE1MjYwMjY2MDI0ODIwMTUyN2Y0MTY0NjQ3MjY1NzM3MzNhMjA2NDY1NmM2NTY3NjE3NDY1MjA2MzYxNmM2YzIwNzQ2ZjIwNmU2ZjZlMmQ2MzZmNjA0NDgyMDE1MjY1MWI5ZDFjOTg1OGRkNjBkMjFiNjA2NDgyMDE1MjYwODQwMTViNjA0MDUxODA5MTAzOTBmZDViNjAwMDgwODU2MDAxNjAwMTYwYTAxYjAzMTY4NTYwNDA1MTYxMDE4NzkxOTA2MTAzNmE1NjViNjAwMDYwNDA1MTgwODMwMzgxODU1YWY0OTE1MDUwM2Q4MDYwMDA4MTE0NjEwMWMyNTc2MDQwNTE5MTUwNjAxZjE5NjAzZjNkMDExNjgyMDE2MDQwNTIzZDgyNTIzZDYwMDA2MDIwODQwMTNlNjEwMWM3NTY1YjYwNjA5MTUwNWI1MDkwOTI1MDkwNTA2MTAxZDg4MjgyODY2MTAxZTI1NjViOTY5NTUwNTA1MDUwNTA1MDU2NWI2MDYwODMxNTYxMDFmMTU3NTA4MTYxMDBmODU2NWI4MjUxMTU2MTAyMDE1NzgyNTE4MDg0NjAyMDAxZmQ1YjgxNjA0MDUxNjI0NjFiY2Q2MGU1MWI4MTUyNjAwNDAxNjEwMTYzOTE5MDYxMDM4NjU2NWI2MzRlNDg3YjcxNjBlMDFiNjAwMDUyNjA0MTYwMDQ1MjYwMjQ2MDAwZmQ1YjYwMDA1YjgzODExMDE1NjEwMjRjNTc4MTgxMDE1MTgzODIwMTUyNjAyMDAxNjEwMjM0NTY1YjgzODExMTE1NjEwMjViNTc2MDAwODQ4NDAxNTI1YjUwNTA1MDUwNTY1YjYwMDA4MDYwNDA4Mzg1MDMxMjE1NjEwMjc0NTc2MDAwODBmZDViODI1MTYwMDE2MDAxNjBhMDFiMDM4MTE2ODExNDYxMDI4YjU3NjAwMDgwZmQ1YjYwMjA4NDAxNTE5MDkyNTA2MDAxNjAwMTYwNDAxYjAzODA4MjExMTU2MTAyYTg1NzYwMDA4MGZkNWI4MTg1MDE5MTUwODU2MDFmODMwMTEyNjEwMmJjNTc2MDAwODBmZDViODE1MTgxODExMTE1NjEwMmNlNTc2MTAyY2U2MTAyMWI1NjViNjA0MDUxNjAxZjgyMDE2MDFmMTk5MDgxMTY2MDNmMDExNjgxMDE5MDgzODIxMTgxODMxMDE3MTU2MTAyZjY1NzYxMDJmNjYxMDIxYjU2NWI4MTYwNDA1MjgyODE1Mjg4NjAyMDg0ODcwMTAxMTExNTYxMDMwZjU3NjAwMDgwZmQ1YjYxMDMyMDgzNjAyMDgzMDE2MDIwODgwMTYxMDIzMTU2NWI4MDk1NTA1MDUwNTA1MDUwOTI1MDkyOTA1MDU2NWI2MDAwODI4MjEwMTU2MTAzNGY1NzYzNGU0ODdiNzE2MGUwMWI2MDAwNTI2MDExNjAwNDUyNjAyNDYwMDBmZDViNTAwMzkwNTY1YjYzNGU0ODdiNzE2MGUwMWI2MDAwNTI2MDAxNjAwNDUyNjAyNDYwMDBmZDViNjAwMDgyNTE2MTAzN2M4MTg0NjAyMDg3MDE2MTAyMzE1NjViOTE5MDkxMDE5MjkxNTA1MDU2NWI2MDIwODE1MjYwMDA4MjUxODA2MDIwODQwMTUyNjEwM2E1ODE2MDQwODUwMTYwMjA4NzAxNjEwMjMxNTY1YjYwMWYwMTYwMWYxOTE2OTE5MDkxMDE2MDQwMDE5MjkxNTA1MDU2NWI2MTAyOWM4MDYxMDNjODYwMDAzOTYwMDBmM2ZlNjA4MDYwNDA1MjM2NjEwMDEzNTc2MTAwMTE2MTAwMTc1NjViMDA1YjYxMDAxMTViNjEwMDUwNjEwMDRiN2YzNjA4OTRhMTNiYTFhMzIxMDY2N2M4Mjg0OTJkYjk4ZGNhM2UyMDc2Y2MzNzM1YTkyMGEzY2E1MDVkMzgyYmJjNTQ2MDAxNjAwMTYwYTAxYjAzMTY5MDU2NWI2MTAwODE1NjViNTY1YjkwNTY1YjYwNjA2MTAwN2E4MzgzNjA0MDUxODA2MDYwMDE2MDQwNTI4MDYwMjc4MTUyNjAyMDAxNjEwMjQwNjAyNzkxMzk2MTAwYTU1NjViOTM5MjUwNTA1MDU2NWIzNjYwMDA4MDM3NjAwMDgwMzY2MDAwODQ1YWY0M2Q2MDAwODAzZTgwODAxNTYxMDBhMDU3M2Q2MDAwZjM1YjNkNjAwMGZkNWI2MDYwNjAwMTYwMDE2MGEwMWIwMzg0MTYzYjYxMDExMjU3NjA0MDUxNjI0NjFiY2Q2MGU1MWI4MTUyNjAyMDYwMDQ4MjAxNTI2MDI2NjAyNDgyMDE1MjdmNDE2NDY0NzI2NTczNzMzYTIwNjQ2NTZjNjU2NzYxNzQ2NTIwNjM2MTZjNmMyMDc0NmYyMDZlNmY2ZTJkNjM2ZjYwNDQ4MjAxNTI2NTFiOWQxYzk4NThkZDYwZDIxYjYwNjQ4MjAxNTI2MDg0MDE1YjYwNDA1MTgwOTEwMzkwZmQ1YjYwMDA4MDg1NjAwMTYwMDE2MGEwMWIwMzE2ODU2MDQwNTE2MTAxMmQ5MTkwNjEwMWYwNTY1YjYwMDA2MDQwNTE4MDgzMDM4MTg1NWFmNDkxNTA1MDNkODA2MDAwODExNDYxMDE2ODU3NjA0MDUxOTE1MDYwMWYxOTYwM2YzZDAxMTY4MjAxNjA0MDUyM2Q4MjUyM2Q2MDAwNjAyMDg0MDEzZTYxMDE2ZDU2NWI2MDYwOTE1MDViNTA5MTUwOTE1MDYxMDE3ZDgyODI4NjYxMDE4NzU2NWI5Njk1NTA1MDUwNTA1MDUwNTY1YjYwNjA4MzE1NjEwMTk2NTc1MDgxNjEwMDdhNTY1YjgyNTExNTYxMDFhNjU3ODI1MTgwODQ2MDIwMDFmZDViODE2MDQwNTE2MjQ2MWJjZDYwZTUxYjgxNTI2MDA0MDE2MTAxMDk5MTkwNjEwMjBjNTY1YjYwMDA1YjgzODExMDE1NjEwMWRiNTc4MTgxMDE1MTgzODIwMTUyNjAyMDAxNjEwMWMzNTY1YjgzODExMTE1NjEwMWVhNTc2MDAwODQ4NDAxNTI1YjUwNTA1MDUwNTY1YjYwMDA4MjUxNjEwMjAyODE4NDYwMjA4NzAxNjEwMWMwNTY1YjkxOTA5MTAxOTI5MTUwNTA1NjViNjAyMDgxNTI2MDAwODI1MTgwNjAyMDg0MDE1MjYxMDIyYjgxNjA0MDg1MDE2MDIwODcwMTYxMDFjMDU2NWI2MDFmMDE2MDFmMTkxNjkxOTA5MTAxNjA0MDAxOTI5MTUwNTA1NmZlNDE2NDY0NzI2NTczNzMzYTIwNmM2Zjc3MmQ2YzY1NzY2NTZjMjA2NDY1NmM2NTY3NjE3NDY1MjA2MzYxNmM2YzIwNjY2MTY5NmM2NTY0YTI2NDY5NzA2NjczNTgyMjEyMjAwNjEwOGMxMjQ2YTBhODliMjBlODYwY2Q4MzVkZTRlNDM4Nzg5ZjQwZjY5Y2ZhZmQ5Y2Q2Njc2ODdkMzgzMjI1NjQ3MzZmNmM2MzQzMDAwODBjMDAzMzM2MDg5NGExM2JhMWEzMjEwNjY3YzgyODQ5MmRiOThkY2EzZTIwNzZjYzM3MzVhOTIwYTNjYTUwNWQzODJiYmM0MTY0NjQ3MjY1NzM3MzNhMjA2YzZmNzcyZDZjNjU3NjY1NmMyMDY0NjU2YzY1Njc2MTc0NjUyMDYzNjE2YzZjMjA2NjYxNjk2YzY1NjRcIjtcbmNvbnN0IGlzU3VwZXJBcmdzID0geHMgPT4geHMubGVuZ3RoID4gMTtcbmNsYXNzIFRXUHJveHlfX2ZhY3RvcnkgZXh0ZW5kcyBDb250cmFjdEZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIGlmIChpc1N1cGVyQXJncyhhcmdzKSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1cGVyKF9hYmksIF9ieXRlY29kZSwgYXJnc1swXSk7XG4gICAgfVxuICB9XG4gIGRlcGxveShfbG9naWMsIF9kYXRhLCBvdmVycmlkZXMpIHtcbiAgICByZXR1cm4gc3VwZXIuZGVwbG95KF9sb2dpYywgX2RhdGEsIG92ZXJyaWRlcyB8fCB7fSk7XG4gIH1cbiAgZ2V0RGVwbG95VHJhbnNhY3Rpb24oX2xvZ2ljLCBfZGF0YSwgb3ZlcnJpZGVzKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldERlcGxveVRyYW5zYWN0aW9uKF9sb2dpYywgX2RhdGEsIG92ZXJyaWRlcyB8fCB7fSk7XG4gIH1cbiAgYXR0YWNoKGFkZHJlc3MpIHtcbiAgICByZXR1cm4gc3VwZXIuYXR0YWNoKGFkZHJlc3MpO1xuICB9XG4gIGNvbm5lY3Qoc2lnbmVyKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNvbm5lY3Qoc2lnbmVyKTtcbiAgfVxuICBzdGF0aWMgY3JlYXRlSW50ZXJmYWNlKCkge1xuICAgIHJldHVybiBuZXcgdXRpbHMuSW50ZXJmYWNlKF9hYmkpO1xuICB9XG4gIHN0YXRpYyBjb25uZWN0KGFkZHJlc3MsIHNpZ25lck9yUHJvdmlkZXIpIHtcbiAgICByZXR1cm4gbmV3IENvbnRyYWN0KGFkZHJlc3MsIF9hYmksIHNpZ25lck9yUHJvdmlkZXIpO1xuICB9XG59XG5fZGVmaW5lUHJvcGVydHkoVFdQcm94eV9fZmFjdG9yeSwgXCJieXRlY29kZVwiLCBfYnl0ZWNvZGUpO1xuX2RlZmluZVByb3BlcnR5KFRXUHJveHlfX2ZhY3RvcnksIFwiYWJpXCIsIF9hYmkpO1xuXG5leHBvcnQgeyBUV1Byb3h5X19mYWN0b3J5IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=