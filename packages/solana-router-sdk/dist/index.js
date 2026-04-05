'use strict';

var sdk = require('@pancakeswap/sdk');
var superstruct = require('superstruct');
var Decimal = require('decimal.js');
var web3_js = require('@solana/web3.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Decimal__default = /*#__PURE__*/_interopDefault(Decimal);

// src/getBestTrade.ts
var PublicKeyFromString = superstruct.coerce(superstruct.instance(web3_js.PublicKey), superstruct.string(), (value) => new web3_js.PublicKey(value));
var AmountFromString = superstruct.string();
var SwapInfo = superstruct.type({
  ammKey: PublicKeyFromString,
  label: superstruct.string(),
  inputMint: superstruct.string(),
  outputMint: superstruct.string(),
  inAmount: AmountFromString,
  outAmount: AmountFromString,
  feeAmount: superstruct.optional(AmountFromString),
  feeMint: superstruct.optional(PublicKeyFromString)
});
var RoutePlanStep = superstruct.type({
  swapInfo: SwapInfo,
  percent: superstruct.number(),
  bps: superstruct.optional(superstruct.number())
});
var RoutePlanWithMetadata = superstruct.array(RoutePlanStep);
var FormattedUltraQuoteResponse = superstruct.type({
  inputMint: PublicKeyFromString,
  inAmount: AmountFromString,
  outputMint: PublicKeyFromString,
  outAmount: AmountFromString,
  otherAmountThreshold: AmountFromString,
  priceImpact: superstruct.number(),
  routePlan: RoutePlanWithMetadata,
  slippageBps: superstruct.number(),
  contextSlot: superstruct.defaulted(superstruct.number(), 0),
  computedAutoSlippage: superstruct.optional(superstruct.number()),
  transaction: superstruct.nullable(superstruct.string()),
  swapType: superstruct.string(),
  gasless: superstruct.boolean(),
  requestId: superstruct.string(),
  prioritizationFeeLamports: superstruct.optional(superstruct.number()),
  feeBps: superstruct.number(),
  router: superstruct.string()
});

// src/UltraSwapService.ts
var Severity = /* @__PURE__ */ ((Severity2) => {
  Severity2["INFO"] = "info";
  Severity2["WARNING"] = "warning";
  Severity2["CRITICAL"] = "critical";
  return Severity2;
})(Severity || {});
var UltraSwapService = class {
  constructor() {
    this.BASE_URL = "https://lite-api.jup.ag/ultra/v1";
    this.ROUTE = {
      SWAP: `${this.BASE_URL}/execute`,
      ORDER: `${this.BASE_URL}/order`,
      ROUTERS: `${this.BASE_URL}/order/routers`,
      BALANCES: `${this.BASE_URL}/balances`,
      SHIELD: `${this.BASE_URL}/shield`
    };
  }
  async getQuote(params, signal) {
    const queryParams = new URLSearchParams(
      Object.entries(params).filter(([_, value]) => value !== void 0 && value !== null).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value.toString()
        }),
        {}
      )
    );
    const response = await fetch(`${this.ROUTE.ORDER}?${queryParams.toString()}`, { signal });
    if (!response.ok) {
      throw response;
    }
    const result = await response.json();
    return result;
  }
  async submitSwap(signedTransaction, requestId) {
    const response = await fetch(this.ROUTE.SWAP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ signedTransaction, requestId })
    });
    if (!response.ok) {
      throw response;
    }
    const result = await response.json();
    return result;
  }
  async getRouters() {
    const response = await fetch(this.ROUTE.ROUTERS);
    if (!response.ok) {
      throw response;
    }
    const result = await response.json();
    return result;
  }
  async getBalance(address, signal) {
    const response = await fetch(`${this.ROUTE.BALANCES}/${address}`, { signal });
    if (!response.ok) {
      throw response;
    }
    const result = await response.json();
    return result;
  }
  async getShield(mintAddress) {
    const response = await fetch(`${this.ROUTE.SHIELD}?mints=${mintAddress.join(",")}`);
    if (!response.ok) {
      throw response;
    }
    const result = await response.json();
    return result;
  }
};
var ultraSwapService = new UltraSwapService();

// src/getBestTrade.ts
var getBestSolanaTrade = async ({
  inputCurrency,
  outputCurrency,
  tradeType,
  amount,
  account,
  slippageBps = 50,
  priorityFeeLamports,
  signal
}) => {
  const inputMint = sdk.solToWSol(inputCurrency.address);
  const outputMint = sdk.solToWSol(outputCurrency.address);
  const swapMode = tradeType === sdk.TradeType.EXACT_INPUT ? "ExactIn" : "ExactOut";
  const requestBody = {
    inputMint,
    outputMint,
    amount: amount.quotient.toString(),
    slippageBps,
    swapMode,
    taker: account,
    priorityFeeLamports,
    useWsol: sdk.isWSol(inputCurrency.address) || sdk.isWSol(outputCurrency.address)
  };
  const response = await ultraSwapService.getQuote(requestBody, signal);
  const quoteResponse = superstruct.create(response, FormattedUltraQuoteResponse, "conver FormattedUltraQuoteResponse Error");
  return {
    tradeType,
    inputAmount: sdk.UnifiedCurrencyAmount.fromRawAmount(inputCurrency, quoteResponse.inAmount),
    outputAmount: sdk.UnifiedCurrencyAmount.fromRawAmount(outputCurrency, quoteResponse.outAmount),
    routes: quoteResponse.routePlan,
    requestId: quoteResponse.requestId,
    otherAmountThreshold: quoteResponse.otherAmountThreshold,
    priceImpactPct: new Decimal__default.default(quoteResponse.priceImpact).dividedBy(100).toString(),
    slippageBps: quoteResponse.slippageBps,
    transaction: quoteResponse.transaction
  };
};

// src/UltraSwapError.ts
var UltraSwapErrorType = /* @__PURE__ */ ((UltraSwapErrorType2) => {
  UltraSwapErrorType2["REJECTED"] = "REJECTED";
  UltraSwapErrorType2["FAILED"] = "FAILED";
  UltraSwapErrorType2["WALLET_SIGNING_FAILED"] = "WALLET_SIGNING_FAILED";
  return UltraSwapErrorType2;
})(UltraSwapErrorType || {});
var UltraSwapError = class extends Error {
  constructor(message, type2, txid) {
    super(message);
    this.type = type2;
    this.txid = txid;
  }
};

exports.Severity = Severity;
exports.UltraSwapError = UltraSwapError;
exports.UltraSwapErrorType = UltraSwapErrorType;
exports.getBestSolanaTrade = getBestSolanaTrade;
exports.ultraSwapService = ultraSwapService;
