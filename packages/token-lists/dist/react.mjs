import { __async, __spreadProps, __spreadValues, getVersionUpgrade } from './chunk-UUVLERWJ.mjs';
import { createAction, nanoid, createReducer } from '@reduxjs/toolkit';
import { atom, useAtom, useAtomValue } from 'jotai';
import { atomWithStorage, loadable, atomFamily } from 'jotai/utils';
import localForage from 'localforage';
import debounce from 'lodash/debounce';
import { useCallback } from 'react';

var fetchTokenList = {
  pending: createAction("lists/fetchTokenList/pending"),
  fulfilled: createAction("lists/fetchTokenList/fulfilled"),
  rejected: createAction("lists/fetchTokenList/rejected")
};
var addList = createAction("lists/addList");
var removeList = createAction("lists/removeList");
var enableList = createAction("lists/enableList");
var disableList = createAction("lists/disableList");
var acceptListUpdate = createAction("lists/acceptListUpdate");
var rejectVersionUpdate = createAction("lists/rejectVersionUpdate");
var updateListVersion = createAction("lists/updateListVersion");
var batchFetchTokenListPending = createAction(
  "lists/batchFetchTokenList/pending"
);
var batchFetchTokenListFulfilled = createAction("lists/batchFetchTokenList/fulfilled");
var batchFetchTokenListRejected = createAction("lists/batchFetchTokenList/rejected");

// ../utils/uriToHttp.ts
function uriToHttp(uri) {
  var _a, _b;
  const protocol = uri.split(":")[0].toLowerCase();
  switch (protocol) {
    case "https":
      return [uri];
    case "http":
      return [`https${uri.substring(4)}`, uri];
    case "ipfs":
      const hash = (_a = uri.match(/^ipfs:(\/\/)?(.*)$/i)) == null ? void 0 : _a[2];
      return [`https://cloudflare-ipfs.com/ipfs/${hash}/`, `https://ipfs.io/ipfs/${hash}/`];
    case "ipns":
      const name = (_b = uri.match(/^ipns:(\/\/)?(.*)$/i)) == null ? void 0 : _b[2];
      return [`https://cloudflare-ipfs.com/ipns/${name}/`, `https://ipfs.io/ipns/${name}/`];
    default:
      return [];
  }
}

// schema/pancakeswap.json
var pancakeswap_default = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "pancakeswap",
  title: "PancakeSwap Token List",
  description: "Schema for lists of tokens compatible with the PancakeSwap Interface, including Uniswap standard and PancakeSwap Aptos",
  definitions: {
    Version: {
      type: "object",
      description: "The version of the list, used in change detection",
      examples: [
        {
          major: 1,
          minor: 0,
          patch: 1
        }
      ],
      additionalProperties: false,
      properties: {
        major: {
          type: "integer",
          description: "The major version of the list. Must be incremented when tokens are removed from the list or token addresses are changed.",
          minimum: 0,
          examples: [1, 2]
        },
        minor: {
          type: "integer",
          description: "The minor version of the list. Must be incremented when tokens are added to the list.",
          minimum: 0,
          examples: [0, 1]
        },
        patch: {
          type: "integer",
          description: "The patch version of the list. Must be incremented for any changes to the list.",
          minimum: 0,
          examples: [0, 1]
        }
      },
      required: ["major", "minor", "patch"]
    },
    TagIdentifier: {
      type: "string",
      description: "The unique identifier of a tag",
      minLength: 1,
      maxLength: 10,
      pattern: "^[\\w]+$",
      examples: ["compound", "stablecoin"]
    },
    ExtensionIdentifier: {
      type: "string",
      description: "The name of a token extension property",
      minLength: 1,
      maxLength: 40,
      pattern: "^[\\w]+$",
      examples: ["color", "is_fee_on_transfer", "aliases"]
    },
    ExtensionMap: {
      type: "object",
      description: "An object containing any arbitrary or vendor-specific token metadata",
      maxProperties: 10,
      propertyNames: {
        $ref: "#/definitions/ExtensionIdentifier"
      },
      additionalProperties: {
        $ref: "#/definitions/ExtensionValue"
      },
      examples: [
        {
          color: "#000000",
          is_verified_by_me: true
        },
        {
          "x-bridged-addresses-by-chain": {
            "1": {
              bridgeAddress: "0x4200000000000000000000000000000000000010",
              tokenAddress: "0x4200000000000000000000000000000000000010"
            }
          }
        }
      ]
    },
    ExtensionPrimitiveValue: {
      anyOf: [
        {
          type: "string",
          minLength: 1,
          maxLength: 42,
          examples: ["#00000"]
        },
        {
          type: "boolean",
          examples: [true]
        },
        {
          type: "number",
          examples: [15]
        },
        {
          type: "null"
        }
      ]
    },
    ExtensionValue: {
      anyOf: [
        {
          $ref: "#/definitions/ExtensionPrimitiveValue"
        },
        {
          type: "object",
          maxProperties: 10,
          propertyNames: {
            $ref: "#/definitions/ExtensionIdentifier"
          },
          additionalProperties: {
            $ref: "#/definitions/ExtensionValueInner0"
          }
        }
      ]
    },
    ExtensionValueInner0: {
      anyOf: [
        {
          $ref: "#/definitions/ExtensionPrimitiveValue"
        },
        {
          type: "object",
          maxProperties: 10,
          propertyNames: {
            $ref: "#/definitions/ExtensionIdentifier"
          },
          additionalProperties: {
            $ref: "#/definitions/ExtensionValueInner1"
          }
        }
      ]
    },
    ExtensionValueInner1: {
      anyOf: [
        {
          $ref: "#/definitions/ExtensionPrimitiveValue"
        }
      ]
    },
    TagDefinition: {
      type: "object",
      description: "Definition of a tag that can be associated with a token via its identifier",
      additionalProperties: false,
      properties: {
        name: {
          type: "string",
          description: "The name of the tag",
          pattern: "^[ \\w]+$",
          minLength: 1,
          maxLength: 20
        },
        description: {
          type: "string",
          description: "A user-friendly description of the tag",
          pattern: "^[ \\w\\.,:]+$",
          minLength: 1,
          maxLength: 200
        }
      },
      required: ["name", "description"],
      examples: [
        {
          name: "Stablecoin",
          description: "A token with value pegged to another asset"
        }
      ]
    },
    TokenInfo: {
      type: "object",
      description: "Metadata for a single token in a token list",
      additionalProperties: false,
      properties: {
        chainId: {
          type: "integer",
          description: "The chain ID of the Ethereum network where this token is deployed",
          minimum: 1,
          examples: [1, 42]
        },
        address: {
          type: "string",
          description: "The checksummed address of the token on the specified chain ID",
          pattern: "^0x[a-fA-F0-9]{40}$",
          examples: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
        },
        decimals: {
          type: "integer",
          description: "The number of decimals for the token balance",
          minimum: 0,
          maximum: 255,
          examples: [18]
        },
        name: {
          type: "string",
          description: "The name of the token",
          minLength: 1,
          maxLength: 60,
          pattern: "^[ \\w.'+\\-%/,\\$\xC0-\xD6\xD8-\xF6\xF8-\xFF:&\\[\\]\\(\\)\\u4e00-\\u9fa5]+$",
          examples: ["USD Coin", "\u5E01\u5B89\u5E01"]
        },
        symbol: {
          type: "string",
          description: "The symbol for the token; must be alphanumeric",
          pattern: "^[a-zA-Z0-9+\\-%/$.\\s_\\u4e00-\\u9fa5]+$",
          minLength: 1,
          maxLength: 20,
          examples: ["USDC", "\u5E01\u5B89"]
        },
        logoURI: {
          type: "string",
          description: "A URI to the token logo asset; if not set, interface will attempt to find a logo based on the token address; suggest SVG or PNG of size 64x64",
          format: "uri",
          examples: ["ipfs://QmXfzKRvjZz3u5JRgC4v5mGVbm9ahrUiB4DgzHBsnWbTMM"]
        },
        tags: {
          type: "array",
          description: "An array of tag identifiers associated with the token; tags are defined at the list level",
          items: {
            $ref: "#/definitions/TagIdentifier"
          },
          maxItems: 10,
          examples: ["stablecoin", "compound"]
        },
        extensions: {
          $ref: "#/definitions/ExtensionMap"
        }
      },
      required: ["chainId", "address", "decimals", "name", "symbol"]
    },
    AptosTokenInfo: {
      type: "object",
      description: "Metadata for a single token in a token list",
      additionalProperties: false,
      properties: {
        chainId: {
          type: "integer",
          description: "The chain ID of the Aptos network where this token is deployed, 0 is devent",
          minimum: 0,
          examples: [1, 42]
        },
        address: {
          type: "string",
          description: "The address of the coin on the specified chain ID",
          examples: ["0x1::aptos_coin::AptosCoin"]
        },
        decimals: {
          type: "integer",
          description: "The number of decimals for the token balance",
          minimum: 0,
          maximum: 255,
          examples: [18]
        },
        name: {
          type: "string",
          description: "The name of the token",
          minLength: 1,
          maxLength: 60,
          pattern: "^[ \\w.'+\\-%/,\\$\xC0-\xD6\xD8-\xF6\xF8-\xFF:&\\[\\]\\(\\)]+$",
          examples: ["USD Coin"]
        },
        symbol: {
          type: "string",
          description: "The symbol for the token; must be alphanumeric",
          pattern: "^[a-zA-Z0-9+\\-%/$._]+$",
          minLength: 1,
          maxLength: 20,
          examples: ["USDC"]
        },
        logoURI: {
          type: "string",
          description: "A URI to the token logo asset; if not set, interface will attempt to find a logo based on the token address; suggest SVG or PNG of size 64x64",
          format: "uri",
          examples: ["ipfs://QmXfzKRvjZz3u5JRgC4v5mGVbm9ahrUiB4DgzHBsnWbTMM"]
        },
        tags: {
          type: "array",
          description: "An array of tag identifiers associated with the token; tags are defined at the list level",
          items: {
            $ref: "#/definitions/TagIdentifier"
          },
          maxItems: 10,
          examples: ["stablecoin", "compound"]
        },
        extensions: {
          $ref: "#/definitions/ExtensionMap"
        }
      },
      required: ["chainId", "address", "decimals", "name", "symbol"]
    }
  },
  type: "object",
  additionalProperties: false,
  properties: {
    name: {
      type: "string",
      description: "The name of the token list",
      minLength: 1,
      maxLength: 30,
      pattern: "^[\\w ]+$",
      examples: ["My Token List"]
    },
    timestamp: {
      type: "string",
      format: "date-time",
      description: "The timestamp of this list version; i.e. when this immutable version of the list was created"
    },
    schema: {
      type: "string"
    },
    version: {
      $ref: "#/definitions/Version"
    },
    tokens: {
      type: "array",
      description: "The list of tokens included in the list",
      minItems: 1,
      maxItems: 1e4
    },
    keywords: {
      type: "array",
      description: "Keywords associated with the contents of the list; may be used in list discoverability",
      items: {
        type: "string",
        description: "A keyword to describe the contents of the list",
        minLength: 1,
        maxLength: 20,
        pattern: "^[\\w ]+$",
        examples: ["compound", "lending", "personal tokens"]
      },
      maxItems: 20,
      uniqueItems: true
    },
    tags: {
      type: "object",
      description: "A mapping of tag identifiers to their name and description",
      propertyNames: {
        $ref: "#/definitions/TagIdentifier"
      },
      additionalProperties: {
        $ref: "#/definitions/TagDefinition"
      },
      maxProperties: 20,
      examples: [
        {
          stablecoin: {
            name: "Stablecoin",
            description: "A token with value pegged to another asset"
          }
        }
      ]
    },
    logoURI: {
      type: "string",
      description: "A URI for the logo of the token list; prefer SVG or PNG of size 256x256",
      format: "uri",
      examples: ["ipfs://QmXfzKRvjZz3u5JRgC4v5mGVbm9ahrUiB4DgzHBsnWbTMM"]
    }
  },
  if: {
    properties: { schema: { const: "aptos" } },
    required: ["name", "timestamp", "version", "tokens", "schema"]
  },
  then: {
    properties: {
      tokens: {
        items: {
          $ref: "#/definitions/AptosTokenInfo"
        },
        type: "array",
        description: "The list of tokens included in the list",
        minItems: 1,
        maxItems: 1e4
      }
    }
  },
  else: {
    properties: {
      tokens: {
        items: {
          $ref: "#/definitions/TokenInfo"
        },
        type: "array",
        description: "The list of tokens included in the list",
        minItems: 1,
        maxItems: 1e4
      }
    }
  },
  required: ["name", "timestamp", "version", "tokens"]
};

// react/getTokenList.ts
function getTokenList(listUrl) {
  return __async(this, null, function* () {
    const urls = uriToHttp(listUrl);
    const { default: Ajv } = yield import('ajv');
    const validator = new Ajv({ allErrors: true }).compile(pancakeswap_default);
    for (const [i, url] of urls.entries()) {
      try {
        const json = yield fetchJson(url);
        if (!validator(json)) {
          const preFilterErrors = validator.errors;
          json.tokens = json.tokens.filter((token) => validator(__spreadProps(__spreadValues({}, json), { tokens: [token] })));
          if (!validator(json)) {
            const { errors } = validator;
            throw new Error(`Validation failed after filtering: ${JSON.stringify(errors)}`);
          }
          console.warn(`Pre-filter validation errors: ${JSON.stringify(preFilterErrors)}`);
        }
        return json;
      } catch (error) {
        console.error(`Failed to download or validate list from ${url}:`, error);
        return void 0;
      }
    }
    throw new Error("Unrecognized list URL protocol.");
  });
}
function fetchJson(url) {
  return __async(this, null, function* () {
    const res = yield fetch(url);
    if (!res.ok)
      throw new Error(`Failed to fetch: ${url}`);
    return res.json();
  });
}
function noop() {
}
var noopStorage = {
  getItem: () => Promise.resolve(noop()),
  setItem: () => Promise.resolve(noop()),
  removeItem: () => Promise.resolve(noop())
};
var EMPTY = Symbol();
function findTokenByAddress(state, chainId, address) {
  var _a, _b;
  const urls = (_a = state.activeListUrls) != null ? _a : Object.keys(state.byUrl);
  for (const url of urls) {
    const list = (_b = state.byUrl[url]) == null ? void 0 : _b.current;
    const token = list == null ? void 0 : list.tokens.find((t) => t.chainId === chainId && t.address.toLowerCase() === address.toLowerCase());
    if (token)
      return token;
  }
  return void 0;
}
function findTokenBySymbol(state, chainId, symbol) {
  var _a, _b;
  const urls = (_a = state.activeListUrls) != null ? _a : Object.keys(state.byUrl);
  for (const url of urls) {
    const list = (_b = state.byUrl[url]) == null ? void 0 : _b.current;
    const token = list == null ? void 0 : list.tokens.find((t) => t.chainId === chainId && t.symbol.toLowerCase() === symbol.toLowerCase());
    if (token)
      return token;
  }
  return void 0;
}
var createListsAtom = (storeName, reducer, initialState) => {
  function IndexedDBStorage(dbName) {
    if (typeof window !== "undefined") {
      const db = localForage.createInstance({
        name: dbName,
        storeName
      });
      const mem = /* @__PURE__ */ new Map();
      const debouncedSetItem = debounce((k, v) => __async(this, null, function* () {
        db.setItem(k, v);
      }), 300);
      return {
        getItem: (key) => __async(this, null, function* () {
          if (mem.has(key)) {
            return mem.get(key);
          }
          const value = yield db.getItem(key);
          if (value) {
            return value;
          }
          return void 0;
        }),
        setItem: (k, v) => __async(this, null, function* () {
          if (v === EMPTY)
            return;
          mem.set(k, v);
          debouncedSetItem(k, v);
        }),
        removeItem: db.removeItem
      };
    }
    return noopStorage;
  }
  const tokenListsStorageAtom = atomWithStorage(
    "tokenLists",
    EMPTY,
    IndexedDBStorage("tokenLists")
  );
  const memoryStateAtom = atom(initialState);
  const listStateAtom = atom((get) => {
    const memoryState = get(memoryStateAtom);
    const value = get(loadable(tokenListsStorageAtom));
    if (value.state === "hasData" && value.data && value.data !== EMPTY) {
      const storedTokenLists = value.data;
      const reconstructedState = __spreadValues({}, memoryState);
      const updatedByUrl = __spreadValues({}, reconstructedState.byUrl);
      Object.keys(storedTokenLists).forEach((url) => {
        if (storedTokenLists[url]) {
          updatedByUrl[url] = __spreadProps(__spreadValues({}, updatedByUrl[url]), {
            current: storedTokenLists[url]
            // Keep existing memory state for loading, error, pendingUpdate
          });
        }
      });
      reconstructedState.byUrl = updatedByUrl;
      return reconstructedState;
    }
    return memoryState;
  });
  const updateListStateAtom = atom(null, (get, set, action) => __async(void 0, null, function* () {
    const currentMemoryState = get(memoryStateAtom);
    const newState = reducer(currentMemoryState, action);
    set(memoryStateAtom, __spreadValues({}, newState));
    const tokenListsToStore = {};
    Object.keys(newState.byUrl).forEach((url) => {
      var _a;
      if ((_a = newState.byUrl[url]) == null ? void 0 : _a.current) {
        tokenListsToStore[url] = newState.byUrl[url].current;
      }
    });
    set(tokenListsStorageAtom, tokenListsToStore);
  }));
  const isReadyAtom = loadable(tokenListsStorageAtom);
  const tokenAtom = atomFamily(
    (key) => atom((get) => findTokenByAddress(get(listStateAtom), key.chainId, key.address))
  );
  const tokenBySymbolAtom = atomFamily(
    (key) => atom((get) => findTokenBySymbol(get(listStateAtom), key.chainId, key.symbol))
  );
  const fetchListAtom = atom(null, (get, set, url) => __async(void 0, null, function* () {
    const state = get(listStateAtom);
    const listState = state.byUrl[url];
    if ((listState == null ? void 0 : listState.current) || (listState == null ? void 0 : listState.loadingRequestId)) {
      return;
    }
    const requestId = nanoid();
    set(updateListStateAtom, fetchTokenList.pending({ url, requestId }));
    try {
      const tokenList = yield getTokenList(url);
      set(updateListStateAtom, fetchTokenList.fulfilled({ url, tokenList, requestId }));
    } catch (error) {
      set(updateListStateAtom, fetchTokenList.rejected({ url, requestId, errorMessage: error.message }));
    }
  }));
  const fetchListBatchAtom = atom(null, (get, set, urls) => __async(void 0, null, function* () {
    const state = get(listStateAtom);
    const urlsToFetch = urls.filter((url) => {
      const listState = state.byUrl[url];
      return !(listState == null ? void 0 : listState.current) && !(listState == null ? void 0 : listState.loadingRequestId);
    });
    if (urlsToFetch.length === 0) {
      return;
    }
    const requestId = nanoid();
    set(updateListStateAtom, batchFetchTokenListPending({ urls: urlsToFetch, requestId }));
    try {
      const results = yield Promise.allSettled(
        urlsToFetch.map((url) => __async(void 0, null, function* () {
          const tokenList = yield getTokenList(url);
          return { url, tokenList, requestId };
        }))
      );
      const fulfilled = [];
      const rejected = [];
      results.forEach((result, index) => {
        var _a;
        const url = urlsToFetch[index];
        if (result.status === "fulfilled") {
          fulfilled.push(result.value);
        } else {
          rejected.push({
            url,
            errorMessage: ((_a = result.reason) == null ? void 0 : _a.message) || "Unknown error",
            requestId
          });
        }
      });
      if (fulfilled.length > 0) {
        set(updateListStateAtom, batchFetchTokenListFulfilled({ results: fulfilled }));
      }
      if (rejected.length > 0) {
        set(updateListStateAtom, batchFetchTokenListRejected({ errors: rejected }));
      }
    } catch (error) {
      const errors = urlsToFetch.map((url) => ({
        url,
        errorMessage: error.message,
        requestId
      }));
      set(updateListStateAtom, batchFetchTokenListRejected({ errors }));
    }
  }));
  function useListState() {
    return useAtom(listStateAtom);
  }
  function useListStateReady() {
    const value = useAtomValue(isReadyAtom);
    return value.state === "hasData";
  }
  return {
    listsAtom: listStateAtom,
    updateListStateAtom,
    tokenAtom,
    tokenBySymbolAtom,
    fetchListAtom,
    fetchListBatchAtom,
    useListStateReady,
    useListState
  };
};

// react/reducerHelpers.ts
var setPendingTokenList = (state, url, requestId) => {
  var _a, _b, _c, _d;
  const current = (_b = (_a = state.byUrl[url]) == null ? void 0 : _a.current) != null ? _b : null;
  const pendingUpdate = (_d = (_c = state.byUrl[url]) == null ? void 0 : _c.pendingUpdate) != null ? _d : null;
  state.byUrl[url] = {
    current,
    pendingUpdate,
    loadingRequestId: requestId,
    error: null
  };
};
var setFulfilledTokenList = (state, url, tokenList, requestId, DEFAULT_ACTIVE_LIST_URLS) => {
  var _a, _b;
  const current = (_a = state.byUrl[url]) == null ? void 0 : _a.current;
  const loadingRequestId = (_b = state.byUrl[url]) == null ? void 0 : _b.loadingRequestId;
  if (current) {
    const upgradeType = getVersionUpgrade(current.version, tokenList.version);
    if (upgradeType === 0 /* NONE */)
      return false;
    if (loadingRequestId === null || loadingRequestId === requestId) {
      state.byUrl[url] = __spreadProps(__spreadValues({}, state.byUrl[url]), {
        loadingRequestId: null,
        error: null,
        current,
        pendingUpdate: tokenList
      });
    }
    return false;
  }
  if (DEFAULT_ACTIVE_LIST_URLS.includes(url) && state.activeListUrls && !state.activeListUrls.includes(url)) {
    state.activeListUrls.push(url);
  }
  state.byUrl[url] = __spreadProps(__spreadValues({}, state.byUrl[url]), {
    loadingRequestId: null,
    error: null,
    current: tokenList,
    pendingUpdate: null
  });
  return true;
};
var setRejectedTokenList = (state, url, requestId, errorMessage) => {
  var _a;
  if (((_a = state.byUrl[url]) == null ? void 0 : _a.loadingRequestId) !== requestId) {
    return;
  }
  state.byUrl[url] = __spreadProps(__spreadValues({}, state.byUrl[url]), {
    loadingRequestId: null,
    error: errorMessage,
    current: null,
    pendingUpdate: null
  });
};
var batchActivateUrls = (state, urls) => {
  if (urls.length > 0 && state.activeListUrls) {
    urls.forEach((url) => {
      if (!state.activeListUrls.includes(url)) {
        state.activeListUrls.push(url);
      }
    });
  }
};

// react/reducer.ts
var NEW_LIST_STATE = {
  error: null,
  current: null,
  loadingRequestId: null,
  pendingUpdate: null
};
var createTokenListReducer = (initialState, DEFAULT_LIST_OF_LISTS, DEFAULT_ACTIVE_LIST_URLS) => createReducer(
  initialState,
  (builder) => builder.addCase(fetchTokenList.pending, (state, { payload: { requestId, url } }) => {
    setPendingTokenList(state, url, requestId);
  }).addCase(fetchTokenList.fulfilled, (state, { payload: { requestId, tokenList, url } }) => {
    setFulfilledTokenList(state, url, tokenList, requestId, DEFAULT_ACTIVE_LIST_URLS);
  }).addCase(fetchTokenList.rejected, (state, { payload: { url, requestId, errorMessage } }) => {
    setRejectedTokenList(state, url, requestId, errorMessage);
  }).addCase(addList, (state, { payload: url }) => {
    if (!state.byUrl[url]) {
      state.byUrl[url] = NEW_LIST_STATE;
    }
  }).addCase(removeList, (state, { payload: url }) => {
    if (state.byUrl[url]) {
      delete state.byUrl[url];
    }
    if (state.activeListUrls && state.activeListUrls.includes(url)) {
      state.activeListUrls = state.activeListUrls.filter((u) => u !== url);
    }
  }).addCase(enableList, (state, { payload: url }) => {
    if (!state.byUrl[url]) {
      state.byUrl[url] = NEW_LIST_STATE;
    }
    if (state.activeListUrls && !state.activeListUrls.includes(url)) {
      state.activeListUrls.push(url);
    }
    if (!state.activeListUrls) {
      state.activeListUrls = [url];
    }
  }).addCase(disableList, (state, { payload: url }) => {
    if (state.activeListUrls && state.activeListUrls.includes(url)) {
      state.activeListUrls = state.activeListUrls.filter((u) => u !== url);
    }
  }).addCase(acceptListUpdate, (state, { payload: url }) => {
    var _a;
    if (!((_a = state.byUrl[url]) == null ? void 0 : _a.pendingUpdate)) {
      throw new Error("accept list update called without pending update");
    }
    state.byUrl[url] = __spreadProps(__spreadValues({}, state.byUrl[url]), {
      pendingUpdate: null,
      current: state.byUrl[url].pendingUpdate
    });
  }).addCase(updateListVersion, (state) => {
    if (!state.lastInitializedDefaultListOfLists) {
      state.byUrl = initialState.byUrl;
      state.activeListUrls = initialState.activeListUrls;
    } else if (state.lastInitializedDefaultListOfLists) {
      const lastInitializedSet = state.lastInitializedDefaultListOfLists.reduce(
        (s, l) => s.add(l),
        /* @__PURE__ */ new Set()
      );
      const newListOfListsSet = DEFAULT_LIST_OF_LISTS.reduce((s, l) => s.add(l), /* @__PURE__ */ new Set());
      DEFAULT_LIST_OF_LISTS.forEach((listUrl) => {
        if (!lastInitializedSet.has(listUrl)) {
          state.byUrl[listUrl] = NEW_LIST_STATE;
        }
      });
      state.lastInitializedDefaultListOfLists.forEach((listUrl) => {
        if (!newListOfListsSet.has(listUrl)) {
          delete state.byUrl[listUrl];
        }
      });
    }
    state.lastInitializedDefaultListOfLists = DEFAULT_LIST_OF_LISTS;
    if (!state.activeListUrls) {
      state.activeListUrls = DEFAULT_ACTIVE_LIST_URLS;
      DEFAULT_ACTIVE_LIST_URLS.forEach((listUrl) => {
        if (!state.byUrl[listUrl]) {
          state.byUrl[listUrl] = NEW_LIST_STATE;
        }
        return true;
      });
    }
  }).addCase(batchFetchTokenListPending, (state, { payload: { urls, requestId } }) => {
    urls.forEach((url) => {
      setPendingTokenList(state, url, requestId);
    });
  }).addCase(batchFetchTokenListFulfilled, (state, { payload: { results } }) => {
    const urlsToActivate = [];
    results.forEach(({ url, tokenList, requestId }) => {
      const isNewList = setFulfilledTokenList(state, url, tokenList, requestId, DEFAULT_ACTIVE_LIST_URLS);
      if (isNewList && DEFAULT_ACTIVE_LIST_URLS.includes(url)) {
        urlsToActivate.push(url);
      }
    });
    batchActivateUrls(state, urlsToActivate);
  }).addCase(batchFetchTokenListRejected, (state, { payload: { errors } }) => {
    errors.forEach(({ url, requestId, errorMessage }) => {
      setRejectedTokenList(state, url, requestId, errorMessage);
    });
  })
);
function useFetchListCallback(dispatch) {
  return useCallback(
    (listUrl, sendDispatch = true) => __async(this, null, function* () {
      const requestId = nanoid();
      if (sendDispatch) {
        dispatch(fetchTokenList.pending({ requestId, url: listUrl }));
      }
      return getTokenList(listUrl).then((tokenList) => {
        if (!tokenList) {
          throw new Error("Token list not found");
        }
        if (sendDispatch) {
          dispatch(fetchTokenList.fulfilled({ url: listUrl, tokenList, requestId }));
        }
        return tokenList;
      }).catch((error) => {
        console.error(`Failed to get list at url ${listUrl}`, error);
        if (sendDispatch) {
          dispatch(fetchTokenList.rejected({ url: listUrl, requestId, errorMessage: error.message }));
        }
        throw error;
      });
    }),
    [dispatch]
  );
}
var useFetchListCallback_default = useFetchListCallback;

export { NEW_LIST_STATE, acceptListUpdate, addList, batchFetchTokenListFulfilled, batchFetchTokenListPending, batchFetchTokenListRejected, createListsAtom, createTokenListReducer, disableList, enableList, fetchTokenList, findTokenByAddress, findTokenBySymbol, getTokenList, rejectVersionUpdate, removeList, updateListVersion, useFetchListCallback_default as useFetchListCallback };
