import iconImg from "../../assets/BrandingAssets-main/Brand/Icon.png";
import MarketListItem from "./MarketStatusContainerListItem";
import MarketStatusContainer from "../MarketStatusContainer/MarketStatusContainer";
import MarketStatus from "../MarketStatus/MarketStatus";
import { useWalletInterface } from "../../services/wallets/useWalletInterface";
import { ethers } from "ethers";
import { useEffect } from "react";

import MarketPositionABI from "../../abi/MarketPositionManager.json";
import SFProtocolABI from "../../abi/SFProtocolToken.json";

import "./dashboardMarkets.css";

export default function DashBoardMarkets() {
  const { accountId } = useWalletInterface();
  useEffect(() => {
    const func = async () => {
      if (accountId && accountId !== null && accountId.length !== 0) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(accountId);
        const MarketManagerContract = new ethers.Contract(
          "0xe0990E4699C606e79d074A770D4A8a603a4669C2",
          MarketPositionABI,
          signer
        );
        const ProtocolContract = new ethers.Contract(
          "0xC651E1F7D24fB1E1cAe14cb5f9818F1C1dFb9FeD",
          SFProtocolABI,
          signer
        );
        // let borrowAmount = await MarketManagerContract.getBorrowableAmount(
        //   accountId,
        //   "0xC651E1F7D24fB1E1cAe14cb5f9818F1C1dFb9FeD"
        // );
        // console.log("BorrowAmount:", borrowAmount);
        // console.log(
        //   "Marketing:",
        //   await MarketManagerContract.getBorrowableAmount(
        //     accountId,
        //     "0xC651E1F7D24fB1E1cAe14cb5f9818F1C1dFb9FeD"
        //   )
        // );
        // console.log("Market:", MarketManagerContract);
        // console.log(
        //   "==============",
        //   await MarketManagerContract.(
        //     accountId,
        //     "0x000000000000000000000000000000000006f89a"
        //   )
        // );
        // console.log("Protocol:", ProtocolContract.address);
      }
    };
    func();
  }, [accountId]);

  return (
    <MarketStatus>
      <MarketStatusContainer title="Supply Markets">
        <MarketListItem
          title="WBTC"
          img={iconImg}
          apy={2}
          amount={100}
          collateral={true}
        />
        <MarketListItem
          title="WETH"
          img={iconImg}
          apy={1}
          amount={0}
          collateral={true}
        />
        <MarketListItem
          title="HBAR"
          img={iconImg}
          apy={2}
          amount={100}
          collateral={true}
        />
        <MarketListItem
          title="HBARX"
          img={iconImg}
          apy={2}
          amount={100}
          collateral={true}
        />
        <MarketListItem
          title="USDC"
          img={iconImg}
          apy={2}
          amount={100}
          collateral={true}
        />
      </MarketStatusContainer>

      <MarketStatusContainer title="Borrow Markets">
        <MarketListItem
          title="WBTC"
          img={iconImg}
          apy={2}
          amount={100}
          availableBorrow={10}
        />
        <MarketListItem
          title="WETH"
          img={iconImg}
          apy={1}
          amount={0}
          availableBorrow={10}
        />
        <MarketListItem
          title="HBAR"
          img={iconImg}
          apy={2}
          amount={100}
          availableBorrow={10}
        />
        <MarketListItem
          title="HBARX"
          img={iconImg}
          apy={2}
          amount={100}
          availableBorrow={10}
        />
        <MarketListItem
          title="USDC"
          img={iconImg}
          apy={2}
          amount={100}
          availableBorrow={50}
        />
      </MarketStatusContainer>
    </MarketStatus>
  );
}
