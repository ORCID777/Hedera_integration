export const NetworkName = "testnet";
export const ChainId = "0x128";
export const NetworkConfig = {
  network: NetworkName,
  jsonRpcUrl: "",
  mirrorNodeUrl: "",
  chainId: ChainId,
};

// purpose of this file is to define the type of the config object
export const NetworkConfigs = {
  [NetworkName]: {
    network: NetworkName,
    jsonRpcUrl: "",
    mirrorNodeUrl: "",
    chainId: ChainId,
  },
};

export const AppConfig = {
  networks: NetworkConfigs,
};
