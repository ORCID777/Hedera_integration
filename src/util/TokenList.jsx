export const AddressFromTokenList = (TokenName) => {
  switch (TokenName) {
    case "WBTC":
      return "0x000000000000000000000000000000000068017d";
    case "WETH":
      return "0x00000000000000000000000000000000006801b3";
    case "HBARX":
      return "0x000000000000000000000000000000000000e6a2";
    case "USDC":
      return "0x00000000000000000000000000000000006801ba";
    default:
      return null;
  }
};
