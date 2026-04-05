import { solToWSol, TradeType, isWSol, UnifiedCurrencyAmount } from '@pancakeswap/sdk';
import { coerce, instance, string, type, optional, number, array, defaulted, nullable, boolean, create } from 'superstruct';
import Decimal from 'decimal.js';
import { PublicKey } from '@solana/web3.js';

// src/getBestTrade.ts
var PublicKeyFromString = coerce(instance(PublicKey), string(), (value) => new PublicKey(value));
var AmountFromString = string();
var SwapInfo = type({
  ammKey: PublicKeyFromString,
  label: string(),
  inputMint: string(),
  outputMint: string(),
  inAmount: AmountFromString,
  outAmount: AmountFromString,
  feeAmount: optional(AmountFromString),
  feeMint: optional(PublicKeyFromString)
});
var RoutePlanStep = type({
  swapInfo: SwapInfo,
  percent: number(),
  bps: optional(number())
});
var RoutePlanWithMetadata = array(RoutePlanStep);
var FormattedUltraQuoteResponse = type({
  inputMint: PublicKeyFromString,
  inAmount: AmountFromString,
  outputMint: PublicKeyFromString,
  outAmount: AmountFromString,
  otherAmountThreshold: AmountFromString,
  priceImpact: number(),
  routePlan: RoutePlanWithMetadata,
  slippageBps: number(),
  contextSlot: defaulted(number(), 0),
  computedAutoSlippage: optional(number()),
  transaction: nullable(string()),
  swapType: string(),
  gasless: boolean(),
  requestId: string(),
  prioritizationFeeLamports: optional(number()),
  feeBps: number(),
  router: string()
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
  const inputMint = solToWSol(inputCurrency.address);
  const outputMint = solToWSol(outputCurrency.address);
  const swapMode = tradeType === TradeType.EXACT_INPUT ? "ExactIn" : "ExactOut";
  const requestBody = {
    inputMint,
    outputMint,
    amount: amount.quotient.toString(),
    slippageBps,
    swapMode,
    taker: account,
    priorityFeeLamports,
    useWsol: isWSol(inputCurrency.address) || isWSol(outputCurrency.address)
  };
  const response = await ultraSwapService.getQuote(requestBody, signal);
  const quoteResponse = create(response, FormattedUltraQuoteResponse, "conver FormattedUltraQuoteResponse Error");
  return {
    tradeType,
    inputAmount: UnifiedCurrencyAmount.fromRawAmount(inputCurrency, quoteResponse.inAmount),
    outputAmount: UnifiedCurrencyAmount.fromRawAmount(outputCurrency, quoteResponse.outAmount),
    routes: quoteResponse.routePlan,
    requestId: quoteResponse.requestId,
    otherAmountThreshold: quoteResponse.otherAmountThreshold,
    priceImpactPct: new Decimal(quoteResponse.priceImpact).dividedBy(100).toString(),
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

export { Severity, UltraSwapError, UltraSwapErrorType, getBestSolanaTrade, ultraSwapService };
