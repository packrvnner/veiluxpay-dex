import { NonEVMChainId, isTestnetChainId } from '@pancakeswap/chains';
import { ExclusiveDutchOrder, createExclusiveDutchOrderTrade } from '@pancakeswap/pcsx-sdk';
import { PoolType, InfinityRouter } from '@pancakeswap/smart-router';
import { TradeType } from '@pancakeswap/swap-sdk-core';

// src/getCurrencyPrice.ts

// ../utils/cache/Cache.ts
var Cache = class {
  constructor(options) {
    this.store = /* @__PURE__ */ new Map();
    if (options.ttl <= 0) {
      throw new Error("Cache ttl must be greater than 0");
    }
    this.ttl = options.ttl;
    if (options.cleanupInterval && options.cleanupInterval > 0) {
      this.cleanupTimer = setInterval(() => this.cleanupExpired(), options.cleanupInterval);
      if (typeof this.cleanupTimer.unref === "function") {
        this.cleanupTimer.unref();
      }
    }
  }
  set(key, value, ttl) {
    const expiresAt = Date.now() + (ttl ?? this.ttl);
    this.store.set(key, { value, expiresAt });
  }
  get(key) {
    const entry = this.store.get(key);
    if (!entry) {
      return void 0;
    }
    if (entry.expiresAt <= Date.now()) {
      this.store.delete(key);
      return void 0;
    }
    return entry.value;
  }
  delete(key) {
    return this.store.delete(key);
  }
  clear() {
    this.store.clear();
  }
  dispose() {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = void 0;
    }
    this.clear();
  }
  cleanupExpired() {
    const now = Date.now();
    this.store.forEach((entry, key) => {
      if (entry.expiresAt <= now) {
        this.store.delete(key);
      }
    });
  }
};

// ../utils/cache/batchResolve.ts
function lruBatch(resolver, options) {
  const cache = new Cache({
    ttl: options.ttl
  });
  return async (inputs) => {
    if (!Array.isArray(inputs)) {
      throw new Error("lruBatch expects array inputs");
    }
    if (inputs.length === 0) {
      return [];
    }
    const outputs = new Array(inputs.length);
    const pendingByKey = /* @__PURE__ */ new Map();
    const pendingOrder = [];
    inputs.forEach((input, index) => {
      const key = options.key(input);
      const cached = cache.get(key);
      if (cached) {
        outputs[index] = cached.value;
        return;
      }
      const existing = pendingByKey.get(key);
      if (existing) {
        existing.positions.push(index);
        return;
      }
      const entry = { input, key, positions: [index] };
      pendingByKey.set(key, entry);
      pendingOrder.push(entry);
    });
    if (pendingOrder.length) {
      const pendingInputs = pendingOrder.map((entry) => entry.input);
      const resolved = await resolver(pendingInputs);
      if (resolved.length !== pendingInputs.length) {
        throw new Error("lruBatch resolver must return matching output length");
      }
      pendingOrder.forEach((entry, idx) => {
        const value = resolved[idx];
        cache.set(entry.key, { value });
        entry.positions.forEach((position) => {
          outputs[position] = value;
        });
      });
    }
    const normalizedOutputs = [];
    outputs.forEach((value, index) => {
      if (value === void 0) {
        throw new Error(`lruBatch missing output for index ${index}`);
      }
      normalizedOutputs[index] = value;
    });
    return normalizedOutputs;
  };
}

// ../utils/cache/queueWithWindow.ts
var queueWithWindow = (fn, options) => {
  let queue = [];
  let timer = null;
  const flush = async () => {
    const currentBatch = queue;
    queue = [];
    timer = null;
    if (!currentBatch.length) {
      return;
    }
    const combinedInputs = currentBatch.flatMap((item) => item.inputs);
    try {
      const combinedOutputs = await fn(combinedInputs);
      if (combinedOutputs.length !== combinedInputs.length) {
        throw new Error("queueWithWindow: output length mismatch");
      }
      let offset = 0;
      currentBatch.forEach((item) => {
        const slice = combinedOutputs.slice(offset, offset + item.inputs.length);
        offset += item.inputs.length;
        item.resolve(slice);
      });
    } catch (error) {
      currentBatch.forEach((item) => item.reject(error));
    }
  };
  return (inputs) => {
    if (!Array.isArray(inputs)) {
      return Promise.reject(new Error("queueWithWindow expects array inputs"));
    }
    if (inputs.length === 0) {
      return Promise.resolve([]);
    }
    return new Promise((resolve, reject) => {
      queue.push({ inputs, resolve, reject });
      if (!timer) {
        timer = setTimeout(flush, options.timeWindow);
      }
    });
  };
};

// ../utils/cache/lruBatchWindow.ts
var lruBatchWindow = (resolver, options) => {
  const { timeWindow, ...lruOptions } = options;
  const cachedResolver = lruBatch(resolver, lruOptions);
  return queueWithWindow(cachedResolver, { timeWindow });
};

// src/getCurrencyPrice.ts
var API_ENDPOINT = process.env.NEXT_PUBLIC_WALLET_API || "https://wallet-api.pancakeswap.com";
var WALLET_API = `${API_ENDPOINT}/v1/prices/list/`;
var getWalletPriceUrl = (chainName) => `${API_ENDPOINT}/${chainName}/v1/prices/list/`;
var isNonProduction = process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";
var zeroAddress = "0x0000000000000000000000000000000000000000";
var CHAINS_FOR_NEW_WALLET_API = [NonEVMChainId.SOLANA];
var NATIVE_ADDRESSES = {
  [NonEVMChainId.SOLANA]: "So11111111111111111111111111111111111111112"
};
var PRICE_CACHE_TTL_MS = 1e4;
var PRICE_FETCH_WINDOW_MS = 300;
function getCurrencyKey(currencyParams) {
  if (!currencyParams) {
    return void 0;
  }
  if (CHAINS_FOR_NEW_WALLET_API.includes(currencyParams.chainId)) {
    if ("isNative" in currencyParams && currencyParams.isNative === true) {
      return NATIVE_ADDRESSES[currencyParams.chainId];
    }
    return currencyParams.address;
  }
  if ("isNative" in currencyParams && currencyParams.isNative === true) {
    return `${currencyParams.chainId}:${zeroAddress}`;
  }
  const { chainId, address } = currencyParams;
  return `${chainId}:${address.toLowerCase()}`;
}
function getCurrencyListKey(currencyListParams) {
  if (!currencyListParams) {
    return void 0;
  }
  const currencyKeys = currencyListParams.map(getCurrencyKey).filter((key) => !!key);
  const uniqueKeys = [...new Set(currencyKeys)];
  return uniqueKeys.join(",");
}
function getRequestUrl(params) {
  if (!params) {
    return void 0;
  }
  const infoList = Array.isArray(params) ? params : [params];
  const key = getCurrencyListKey(infoList.filter((c) => !isTestnetChainId(c.chainId)));
  if (!key) {
    return void 0;
  }
  const encodedKey = encodeURIComponent(key);
  const baseUrl = CHAINS_FOR_NEW_WALLET_API.includes(infoList[0].chainId) && infoList[0].chainName ? `${getWalletPriceUrl(infoList[0].chainName)}${encodedKey}` : `${WALLET_API}${encodedKey}`;
  if (!isNonProduction) {
    return baseUrl;
  }
  const url = new URL(baseUrl);
  url.searchParams.set("preview", "1");
  return url.toString();
}
async function fetchCurrencyListUsdPrice(currencyListParams, options) {
  const requestUrl = getRequestUrl(currencyListParams);
  if (!requestUrl || !currencyListParams) {
    throw new Error(`Invalid request for currency prices, request url: ${requestUrl}`);
  }
  try {
    const res = await fetch(requestUrl, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to get currency list usd price:", error);
    return {};
  }
}
var resolveCurrencyPrices = async (params) => {
  if (!params.length) {
    return [];
  }
  const prices = await fetchCurrencyListUsdPrice(params);
  return params.map((param) => {
    const key = getCurrencyKey(param);
    if (!key) {
      return 0;
    }
    return prices[key] ?? 0;
  });
};
var queuedFetchPrices = lruBatchWindow(resolveCurrencyPrices, {
  key: (input) => {
    const key = getCurrencyKey(input);
    if (!key) {
      throw new Error("Missing currency key for price cache");
    }
    return key;
  },
  ttl: PRICE_CACHE_TTL_MS,
  timeWindow: PRICE_FETCH_WINDOW_MS
});
async function getCurrencyUsdPrice(currencyParams, options) {
  if (!currencyParams || isTestnetChainId(currencyParams.chainId)) {
    return 0;
  }
  if (options) {
    const prices = await fetchCurrencyListUsdPrice([currencyParams], options);
    const key = getCurrencyKey(currencyParams);
    return (key && prices[key]) ?? 0;
  }
  const [price] = await queuedFetchPrices([currencyParams]);
  return price ?? 0;
}
async function getCurrencyListUsdPrice(currencyListParams, options) {
  if (options) {
    return fetchCurrencyListUsdPrice(currencyListParams, options);
  }
  const requestUrl = getRequestUrl(currencyListParams);
  if (!requestUrl || !currencyListParams) {
    throw new Error(`Invalid request for currency prices, request url: ${requestUrl}`);
  }
  const prices = await queuedFetchPrices(currencyListParams);
  const result = {};
  currencyListParams.forEach((param, index) => {
    const key = getCurrencyKey(param);
    if (key) {
      result[key] = prices[index] ?? 0;
    }
  });
  return result;
}
async function getTokenPrices(chainId, addresses, options) {
  const requestParams = addresses.map((address) => ({
    address,
    chainId
  }));
  const prices = await getCurrencyListUsdPrice(requestParams, options);
  return addresses.map((address) => {
    const key = getCurrencyKey({
      address,
      chainId
    });
    const priceUSD = (key && prices[key]) ?? 0;
    return { address, priceUSD };
  });
}
async function getNativeTokenPrices(chainIds, options) {
  const requestParams = chainIds.map((chainId) => ({
    isNative: true,
    chainId
  }));
  const prices = await getCurrencyListUsdPrice(requestParams, options);
  return chainIds.reduce((acc, chainId) => {
    const key = getCurrencyKey({
      chainId,
      isNative: true
    });
    acc.set(chainId, (key && prices[key]) ?? 0);
    return acc;
  }, /* @__PURE__ */ new Map());
}

// src/types/api.ts
var ResponseType = /* @__PURE__ */ ((ResponseType2) => {
  ResponseType2["PRICE_RESPONSE"] = "PRICE_RESPONSE";
  ResponseType2["MM_PRICE_RESPONSE"] = "MM_PRICE_RESPONSE";
  ResponseType2["DUTCH_LIMIT_RESPONSE"] = "DUTCH_LIMIT_RESPONSE";
  ResponseType2["AMM_PRICE_RESPONSE"] = "AMM_PRICE_RESPONSE";
  ResponseType2["ERROR"] = "ERROR";
  return ResponseType2;
})(ResponseType || {});

// src/types/orderType.ts
var OrderType = /* @__PURE__ */ ((OrderType2) => {
  OrderType2["DUTCH_LIMIT"] = "DUTCH_LIMIT";
  OrderType2["PCS_CLASSIC"] = "PCS_CLASSIC";
  OrderType2["PCS_BRIDGE"] = "PCS_BRIDGE";
  OrderType2["PCS_SVM"] = "PCS_SVM";
  return OrderType2;
})(OrderType || {});
function getPoolType(type) {
  return PoolType[type];
}
function getPoolTypeKey(poolType) {
  for (const [key, value] of Object.entries(PoolType)) {
    if (value === poolType) {
      return key;
    }
  }
  throw new Error(`Invalid pool type: ${poolType}`);
}
function getTradeTypeKey(tradeType) {
  for (const [key, value] of Object.entries(TradeType)) {
    if (value === tradeType) {
      return key;
    }
  }
  throw new Error(`Invalid trade type: ${tradeType}`);
}

// src/orderPriceApiParsers.ts
var getCurrencyIdentifier = (currency) => currency.isNative ? zeroAddress : currency.wrapped.address;
function getRequestBody({ amount, quoteCurrency, tradeType, amm, x, slippage }) {
  const [currencyIn, currencyOut] = tradeType === TradeType.EXACT_INPUT ? [amount.currency, quoteCurrency] : [quoteCurrency, amount.currency];
  const configs = [];
  if (amm) {
    configs.push({
      protocols: amm.poolTypes?.map(getPoolTypeKey) || ["V2", "V3", "STABLE"],
      routingType: "PCS_CLASSIC" /* PCS_CLASSIC */,
      gasPriceWei: amm.gasPriceWei?.toString(),
      maxHops: amm.maxHops,
      maxSplits: amm.maxSplits
    });
  }
  if (x) {
    configs.push({
      routingType: "DUTCH_LIMIT" /* DUTCH_LIMIT */,
      ...x
    });
  }
  return {
    amount: amount.quotient.toString(),
    type: getTradeTypeKey(tradeType),
    tokenInChainId: currencyIn.chainId,
    tokenOutChainId: currencyOut.chainId,
    slippageTolerance: slippage?.toFixed(2),
    tokenIn: getCurrencyIdentifier(currencyIn),
    tokenOut: getCurrencyIdentifier(currencyOut),
    configs
  };
}
function parseQuoteResponse(res, {
  chainId,
  currencyOut,
  currencyIn,
  tradeType
}) {
  if (res.messageType === "ERROR" /* ERROR */) {
    throw new Error(res.message.error);
  }
  const { bestOrder, allPossibleOrders } = res.message;
  if (bestOrder.type === "PCS_CLASSIC" /* PCS_CLASSIC */) {
    return {
      type: "PCS_CLASSIC" /* PCS_CLASSIC */,
      trade: InfinityRouter.Transformer.parseTrade(chainId, bestOrder.order)
    };
  }
  if (bestOrder.type === "DUTCH_LIMIT" /* DUTCH_LIMIT */) {
    const order = ExclusiveDutchOrder.fromJSON(bestOrder.order.orderInfo, chainId);
    const otherAmmTrade = allPossibleOrders.find((o) => o.type === "PCS_CLASSIC" /* PCS_CLASSIC */);
    return {
      type: "DUTCH_LIMIT" /* DUTCH_LIMIT */,
      ammTrade: otherAmmTrade ? InfinityRouter.Transformer.parseTrade(chainId, otherAmmTrade.order) : void 0,
      trade: createExclusiveDutchOrderTrade({
        currencyIn,
        currenciesOut: [currencyOut],
        orderInfo: order.info,
        tradeType
      })
    };
  }
  throw new Error(`Unknown order type`);
}
function parseAMMPriceResponse(chainId, res) {
  const {
    message: { gasUseEstimateUSD, ...rest }
  } = res;
  const trade = InfinityRouter.Transformer.parseTrade(chainId, rest);
  return {
    ...trade,
    gasUseEstimateUSD: Number(gasUseEstimateUSD)
  };
}

export { OrderType, ResponseType, getCurrencyKey, getCurrencyListKey, getCurrencyListUsdPrice, getCurrencyUsdPrice, getNativeTokenPrices, getPoolType, getPoolTypeKey, getRequestBody, getTokenPrices, parseAMMPriceResponse, parseQuoteResponse, zeroAddress };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map