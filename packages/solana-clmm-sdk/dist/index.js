'use strict';

var web3_js = require('@solana/web3.js');
var createClient = require('openapi-fetch');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var createClient__default = /*#__PURE__*/_interopDefault(createClient);

// src/utils/getCurrentCluster.ts

// src/constants/cluster.ts
var CLUSTER_GENESIS_HASHES = {
  "mainnet-beta": "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d",
  testnet: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3zQawwpjk2NsNY",
  devnet: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG"
};

// src/utils/getCurrentCluster.ts
var getCurrentCluster = async (rpcEndpoint) => {
  try {
    const connection = new web3_js.Connection(rpcEndpoint);
    const genesisHash = await connection.getGenesisHash();
    let cluster;
    for (const key of Object.keys(CLUSTER_GENESIS_HASHES)) {
      if (CLUSTER_GENESIS_HASHES[key] === genesisHash) {
        cluster = key;
        break;
      }
    }
    return cluster;
  } catch (error) {
    console.error("Error getting current cluster:", error);
    return void 0;
  }
};

// src/clmm/ammConfigs.ts
var mainnetAmmConfigs = {
  HZzqEWHEvSiqYt6PxxLs7zXETmqGuryqfmvggjAkqisp: {
    id: "HZzqEWHEvSiqYt6PxxLs7zXETmqGuryqfmvggjAkqisp",
    index: 0,
    protocolFeeRate: 12e4,
    tradeFeeRate: 100,
    tickSpacing: 10,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  He4brjK7TRKiqJ8szpRmhuueDwC4837BFRRBmWfmjo14: {
    id: "He4brjK7TRKiqJ8szpRmhuueDwC4837BFRRBmWfmjo14",
    index: 1,
    protocolFeeRate: 12e4,
    tradeFeeRate: 2500,
    tickSpacing: 60,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  GUNzSDNbhcWpS6Ymj7kgyYmhgHimwfzpRdhJnbKDAi9K: {
    id: "GUNzSDNbhcWpS6Ymj7kgyYmhgHimwfzpRdhJnbKDAi9K",
    index: 2,
    protocolFeeRate: 12e4,
    tradeFeeRate: 500,
    tickSpacing: 10,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  EtgcyD5Yk6Kuqf1fahAjTrsRCDgoUmgeZ7xJDS3giaE: {
    id: "EtgcyD5Yk6Kuqf1fahAjTrsRCDgoUmgeZ7xJDS3giaE",
    index: 3,
    protocolFeeRate: 12e4,
    tradeFeeRate: 1e4,
    tickSpacing: 120,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  EvKEMSRSdxJUcpVTaB2isqMyF5G4yETvMbQxbfwSuwZa: {
    id: "EvKEMSRSdxJUcpVTaB2isqMyF5G4yETvMbQxbfwSuwZa",
    index: 4,
    protocolFeeRate: 12e4,
    tradeFeeRate: 100,
    tickSpacing: 1,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 1e-3,
    defaultRangePoint: [1e-3, 3e-3, 5e-3, 8e-3, 0.01]
  },
  "2cc6jRdZgmN7uG3PxbuVEkYwQNPS7qQinKYYCwG53cpr": {
    id: "2cc6jRdZgmN7uG3PxbuVEkYwQNPS7qQinKYYCwG53cpr",
    index: 5,
    protocolFeeRate: 12e4,
    tradeFeeRate: 500,
    tickSpacing: 1,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  GcJVsj5MxokA4eRMUkB4cJHuZ6o9Y8MooXBViN5F1mYW: {
    id: "GcJVsj5MxokA4eRMUkB4cJHuZ6o9Y8MooXBViN5F1mYW",
    index: 6,
    protocolFeeRate: 12e4,
    tradeFeeRate: 200,
    tickSpacing: 1,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  "2zmg7259ahZkrSn6M3PEM7eFvEfBU8obgfVHT3AL9Qwu": {
    id: "2zmg7259ahZkrSn6M3PEM7eFvEfBU8obgfVHT3AL9Qwu",
    index: 7,
    protocolFeeRate: 12e4,
    tradeFeeRate: 300,
    tickSpacing: 1,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  "5kosJrgZ6rHyqqweWGpp11nNqdwPTHbyXVczvzPM9h7M": {
    id: "5kosJrgZ6rHyqqweWGpp11nNqdwPTHbyXVczvzPM9h7M",
    index: 8,
    protocolFeeRate: 12e4,
    tradeFeeRate: 400,
    tickSpacing: 1,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  "2W1ToXSAUDwRQtZdgCjgXmFfiSvPmGDPx3CijKpVKArw": {
    id: "2W1ToXSAUDwRQtZdgCjgXmFfiSvPmGDPx3CijKpVKArw",
    index: 9,
    protocolFeeRate: 12e4,
    tradeFeeRate: 2e4,
    tickSpacing: 120,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  "5szFcjKA7UU93nhgb3fE1o1cfcurwpFQEzywZyb2qAYF": {
    id: "5szFcjKA7UU93nhgb3fE1o1cfcurwpFQEzywZyb2qAYF",
    index: 10,
    protocolFeeRate: 12e4,
    tradeFeeRate: 1e3,
    tickSpacing: 10,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  J1SzfvdJ3p4ixWdyhoHmVpnixfjUBcEZiJ3M66JHGTKz: {
    id: "J1SzfvdJ3p4ixWdyhoHmVpnixfjUBcEZiJ3M66JHGTKz",
    index: 11,
    protocolFeeRate: 12e4,
    tradeFeeRate: 1500,
    tickSpacing: 10,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  "5B9wMiyqe7maHxAKACrTiGYwTeSX3ZmpmxRgALUMTcdZ": {
    id: "5B9wMiyqe7maHxAKACrTiGYwTeSX3ZmpmxRgALUMTcdZ",
    index: 12,
    protocolFeeRate: 12e4,
    tradeFeeRate: 1600,
    tickSpacing: 10,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  "5tbvQTWV2btAgX5NwzCbd8aFwTfDWeCZANRQUcWuKRan": {
    id: "5tbvQTWV2btAgX5NwzCbd8aFwTfDWeCZANRQUcWuKRan",
    index: 13,
    protocolFeeRate: 12e4,
    tradeFeeRate: 1800,
    tickSpacing: 10,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  G3BrCQzNu93v1acayMA23CmCMH8tf6iAFb3PYUHUHtcg: {
    id: "G3BrCQzNu93v1acayMA23CmCMH8tf6iAFb3PYUHUHtcg",
    index: 14,
    protocolFeeRate: 12e4,
    tradeFeeRate: 2e3,
    tickSpacing: 10,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  "2G7HZiydoxtDqQU5SPsyc66nCGRUaP6H85FRKunKpmPs": {
    id: "2G7HZiydoxtDqQU5SPsyc66nCGRUaP6H85FRKunKpmPs",
    index: 15,
    protocolFeeRate: 12e4,
    tradeFeeRate: 4e3,
    tickSpacing: 60,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  A3qKMAUV2JsBUeRssKeLm2xJr9w9PKFNWGxPfSV6E7vu: {
    id: "A3qKMAUV2JsBUeRssKeLm2xJr9w9PKFNWGxPfSV6E7vu",
    index: 16,
    protocolFeeRate: 12e4,
    tradeFeeRate: 6e3,
    tickSpacing: 60,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  GaWZjVasTQLCNmag5n34eyhhD4T56TN39ckNcuUmu7x4: {
    id: "GaWZjVasTQLCNmag5n34eyhhD4T56TN39ckNcuUmu7x4",
    index: 17,
    protocolFeeRate: 12e4,
    tradeFeeRate: 8e3,
    tickSpacing: 60,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  "3EKNN4mNKSzBnfB5gC9q4eeL7WMWBrnuaoagMQVCL2vq": {
    id: "3EKNN4mNKSzBnfB5gC9q4eeL7WMWBrnuaoagMQVCL2vq",
    index: 18,
    protocolFeeRate: 12e4,
    tradeFeeRate: 3e4,
    tickSpacing: 120,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  GeNe8uDSMpCip17DmToci8XNhTgwJJ4QdXP3HNrZbA21: {
    id: "GeNe8uDSMpCip17DmToci8XNhTgwJJ4QdXP3HNrZbA21",
    index: 19,
    protocolFeeRate: 12e4,
    tradeFeeRate: 4e4,
    tickSpacing: 120,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  "4LTiLQbjodjCy8dFWqgUx6fzQ93Pq37c5jWGX9jRsRtC": {
    id: "4LTiLQbjodjCy8dFWqgUx6fzQ93Pq37c5jWGX9jRsRtC",
    index: 20,
    protocolFeeRate: 16e4,
    tradeFeeRate: 3e3,
    tickSpacing: 60,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  "9rrh2c8w15HExZnLFzcEgkvHg846TBBFEPUuFG7RMGmm": {
    id: "9rrh2c8w15HExZnLFzcEgkvHg846TBBFEPUuFG7RMGmm",
    index: 21,
    protocolFeeRate: 16e4,
    tradeFeeRate: 800,
    tickSpacing: 1,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  }
};
var devnetAmmConfigs = {
  "5898eU3GB7uFn9eaLJNLMkjiUaHUNFcKHksLLUtEXeKV": {
    id: "5898eU3GB7uFn9eaLJNLMkjiUaHUNFcKHksLLUtEXeKV",
    index: 3,
    protocolFeeRate: 12,
    tradeFeeRate: 1e4,
    tickSpacing: 200,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    description: "Best for exotic pairs",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5, 0.6, 0.7, 0.8, 0.9]
  },
  AEWHer5AqGwYMLwNUmVG3jpLK5p7PBLZF7B2EPT4PfYG: {
    id: "AEWHer5AqGwYMLwNUmVG3jpLK5p7PBLZF7B2EPT4PfYG",
    index: 2,
    protocolFeeRate: 12,
    tradeFeeRate: 3e3,
    tickSpacing: 60,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    description: "Best for most pairs",
    defaultRange: 0.1,
    defaultRangePoint: [0.01, 0.05, 0.1, 0.2, 0.5]
  },
  Bu65sZ3Kq7iTFDBTSsptD4LkxWCo1q5BDogZDmC7xoUT: {
    id: "Bu65sZ3Kq7iTFDBTSsptD4LkxWCo1q5BDogZDmC7xoUT",
    index: 1,
    protocolFeeRate: 12,
    tradeFeeRate: 500,
    tickSpacing: 10,
    fundFeeRate: 0,
    fundOwner: "DmwXqqK5Zuj619au6q2Jx3TMr9ZV1837uxJcEwyvXVtV",
    description: "Best for stable pairs",
    defaultRange: 0.1,
    defaultRangePoint: [0.1, 0.2]
  }
};
var ammConfigs = {
  "mainnet-beta": mainnetAmmConfigs,
  devnet: devnetAmmConfigs
};
var PancakeClmmProgramId = {
  "mainnet-beta": new web3_js.PublicKey("HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq"),
  devnet: new web3_js.PublicKey("D9jb8xfFMpd1WYLHzrSXT6ceMEmV8Rfekk1VnFk8yHu9")
};
var endpoints = process.env.NEXT_PUBLIC_EXPLORE_API_ENDPOINT;
var IndexerApiClient = createClient__default.default({
  baseUrl: endpoints
});

// src/client/indexer/apis/getPoolsByMints.ts
var getPoolsByMints = async ({
  mintA,
  mintB,
  poolType,
  pageSize,
  page
}) => {
  const [token0, token1] = mintA && mintB ? mintA < mintB ? [mintA, mintB] : [mintB, mintA] : [mintA, mintB];
  const query = {
    poolType,
    pageSize,
    page
  };
  const resp = await IndexerApiClient.GET("/cached/v1/pools/info/mint", {
    params: {
      query: token0 && token1 ? {
        token0,
        token1,
        ...query
      } : token0 ? {
        token0,
        ...query
      } : {
        token1,
        ...query
      }
    }
  });
  return resp.data?.data;
};

// src/client/indexer/apis/getMintMetaData.ts
var getRPC = () => {
  try {
    const rpcFromEnvVars = JSON.parse(process.env.NEXT_PUBLIC_SOLANA_RPC_ENDPOINT_CONF ?? "[]");
    if (rpcFromEnvVars && rpcFromEnvVars.length) {
      return rpcFromEnvVars[0];
    }
    return void 0;
  } catch (e) {
    return void 0;
  }
};
var rpc = getRPC();
var getMintMetaFromDAS = async (mint) => {
  if (!mint || !rpc) {
    return void 0;
  }
  try {
    const resp = await fetch(rpc, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        method: "getAsset",
        jsonrpc: "2.0",
        id: (/* @__PURE__ */ new Date()).getTime(),
        params: [mint]
      })
    });
    const data = await resp.json();
    const metadata = data?.result?.content.metadata;
    const links = data?.result?.content.links;
    const tokenInfo = data?.result?.token_info;
    if (metadata && tokenInfo) {
      return {
        success: true,
        data: {
          symbol: metadata.symbol,
          name: metadata.name,
          decimals: tokenInfo.decimals,
          address: mint,
          logoURI: links.image,
          programId: tokenInfo.token_program
        }
      };
    }
    return {
      error: {
        message: "Failed to fetch mint metadata from DAS"
      }
    };
  } catch (error) {
    console.error("Error fetching mint metadata from DAS:", error);
    return {
      error: {
        message: "Failed to fetch mint metadata from DAS"
      }
    };
  }
};
var getMintMetaData = async (mint) => {
  if (!mint) {
    return void 0;
  }
  try {
    const resp = await IndexerApiClient.GET("/cached/v1/tokens/metadata/{address}", {
      params: {
        path: {
          address: mint
        }
      }
    });
    if (resp.error || !resp.data?.data) {
      throw new Error(resp.error.message || "Failed to fetch mint metadata");
    }
    return {
      ...resp.data,
      data: {
        ...resp.data.data,
        tags: resp.data.data.tags ?? [],
        extensions: resp.data.data.extensions ?? {}
      }
    };
  } catch (error) {
    console.warn("Error fetching mint metadata:", error);
    try {
      return getMintMetaFromDAS(mint);
    } catch (error2) {
      console.error("Error fetching mint metadata from DAS:", error2);
      return void 0;
    }
  }
};

// src/client/indexer/apis/getPools.ts
var getPools = async () => {
  const resp = await IndexerApiClient.GET("/cached/v1/pools/");
  return resp.data;
};

exports.CLUSTER_GENESIS_HASHES = CLUSTER_GENESIS_HASHES;
exports.IndexerApiClient = IndexerApiClient;
exports.PancakeClmmProgramId = PancakeClmmProgramId;
exports.ammConfigs = ammConfigs;
exports.getCurrentCluster = getCurrentCluster;
exports.getMintMetaData = getMintMetaData;
exports.getMintMetaFromDAS = getMintMetaFromDAS;
exports.getPools = getPools;
exports.getPoolsByMints = getPoolsByMints;
