'use strict';

var chunkY2NTTLTJ_js = require('./chunk-Y2NTTLTJ.js');
var swapSdkCore = require('@pancakeswap/swap-sdk-core');

var WrappedTokenInfo = class extends swapSdkCore.Token {
  constructor(tokenInfo) {
    super(tokenInfo.chainId, tokenInfo.address, tokenInfo.decimals, tokenInfo.symbol, tokenInfo.name);
    this.logoURI = tokenInfo.logoURI;
  }
  get serialize() {
    return {
      address: this.address,
      chainId: this.chainId,
      decimals: this.decimals,
      symbol: this.symbol,
      name: this.name,
      projectLink: this.projectLink,
      logoURI: this.logoURI
    };
  }
};
function deserializeToken(serializedToken) {
  if (serializedToken.logoURI) {
    return new WrappedTokenInfo({
      chainId: serializedToken.chainId,
      address: serializedToken.address,
      decimals: serializedToken.decimals,
      symbol: serializedToken.symbol || "Unknown",
      name: serializedToken.name || "Unknown",
      logoURI: serializedToken.logoURI
    });
  }
  return new swapSdkCore.Token(
    serializedToken.chainId,
    serializedToken.address,
    serializedToken.decimals,
    serializedToken.symbol,
    serializedToken.name,
    serializedToken.projectLink
  );
}

// src/filtering.ts
function createFilterToken(search, isAddress) {
  if (isAddress(search)) {
    const address = search.toLowerCase();
    return (t) => "address" in t && address === t.address.toLowerCase();
  }
  const lowerSearchParts = search.toLowerCase().split(/\s+/).filter((s) => s.length > 0);
  if (lowerSearchParts.length === 0) {
    return () => true;
  }
  const matchesSearch = (s) => {
    const sParts = s.toLowerCase().split(/\s+/).filter((s_) => s_.length > 0);
    return lowerSearchParts.every((p) => p.length === 0 || sParts.some((sp) => sp.startsWith(p) || sp.endsWith(p)));
  };
  return (token) => {
    const { symbol, name } = token;
    return Boolean(symbol && matchesSearch(symbol) || name && matchesSearch(name));
  };
}

Object.defineProperty(exports, 'VersionUpgrade', {
  enumerable: true,
  get: function () { return chunkY2NTTLTJ_js.VersionUpgrade; }
});
Object.defineProperty(exports, 'getVersionUpgrade', {
  enumerable: true,
  get: function () { return chunkY2NTTLTJ_js.getVersionUpgrade; }
});
exports.WrappedTokenInfo = WrappedTokenInfo;
exports.createFilterToken = createFilterToken;
exports.deserializeToken = deserializeToken;
