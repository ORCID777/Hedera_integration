import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import ModalDashboard from "./ModalDashboard";
import SupplyBox from "./SupplySupply";
import WithdrawBox from "./SupplyWithdraw";
import ModalContext from "../../util/modalContext";
import Modal from "./Modal";
import logoImg from "../../assets/BrandingAssets-main/Brand/Icon.png";
import { AddressFromTokenList } from "../../util/TokenList";

import SFProtocolABI from "../../abi/SFProtocolToken.json";
import MarketABI from "../../abi/MarketPositionManager.json";
import PriceOracleABI from "../../abi/PriceOracle.json";

export default function ModalSupply() {
  const [displayState, setDisplayState] = useState("supply");
  const [bal, setBal] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const modalCtx = useContext(ModalContext);
  const accountId = modalCtx.accountId;

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const setTokenPriceHanlder = async () => {
    if (
      accountId &&
      accountId !== null &&
      accountId.length !== 0 &&
      modalCtx.title !== "" &&
      modalCtx.title !== undefined
    ) {
      const signer = provider.getSigner(accountId);
      const MarketContract = new ethers.Contract(
        "0xe0990E4699C606e79d074A770D4A8a603a4669C2",
        MarketABI,
        signer
      );

      const PriceABI = new ethers.Contract(
        "0x410b0621e9d4fb84f7414e9Da53afae2CBC47fbD",
        PriceOracleABI,
        signer
      );

      const ProtocolContract = new ethers.Contract(
        "0x0800E04533Afc1279c55c85734d49a2f61785539",
        SFProtocolABI,
        signer
      );

      //console.log("**************", ProtocolContract);
      await ProtocolContract.approve(accountId, 10);
      // let value = await ProtocolContract.getSuppliedAmount(accountId);
      // await setSupplyAmount(parseInt(value._hex, 16));

      console.log("************", await ProtocolContract.supplyUnderlying(10));
      const tokenAddress = AddressFromTokenList(modalCtx.title);
      // const price = await PriceABI.getTokenPrice(
      //   AddressFromTokenList(modalCtx.title)
      // );

      // console.log("Token Address:", tokan)

      const price = await PriceABI.getTokenPrice(
        "0x0000000000000000000000000000000000022ed0"
      );

      console.log("Price:", parseInt(price));
    }
  };

  const func = async () => {
    if (accountId && accountId !== null && accountId.length !== 0) {
      console.log("AccountId:", accountId);
      const signer = provider.getSigner(accountId);
      const ProtocolContract = new ethers.Contract(
        "0x0800E04533Afc1279c55c85734d49a2f61785539",
        SFProtocolABI,
        signer
      );

      const PriceABI = new ethers.Contract(
        "0x410b0621e9d4fb84f7414e9Da53afae2CBC47fbD",
        PriceOracleABI,
        signer
      );

      console.log(
        "MarketContract",
        await PriceABI.getTokenPrice(
          "0x000000000000000000000000000000000006d594"
        )
      );

      // console.log("")
      //   await ProtocolContract.approve(accountId, 1);
      //   let value = await ProtocolContract.getSuppliedAmount(accountId);
      //   await setSupplyAmount(parseInt(value._hex, 16));

      //test
      // console.log(
      //   "Underlying Balance,",
      //   await ProtocolContract.totalBorrows(),
      //   await ProtocolContract.totalReserves(),
      //   await ProtocolContract.totalClaimed(),
      //   await ProtocolContract.totalSupply()
      // );
    }
  };
  useEffect(() => {
    // func();

    setTokenPriceHanlder();
  }, [modalCtx, accountId]);

  function handleInputChange(e) {
    let val = e.target.value;
    if (val >= 0) {
      setBal(val);
    }
  }

  function handleSupplyDisplay() {
    setDisplayState("supply");
  }

  function handleWithdrawDisplay() {
    setDisplayState("withdraw");
  }

  function handleHideSupply() {
    modalCtx.hideModal();
  }

  const approveHandler = async () => {
    console.log("Supply Approve Button Clicked", modalCtx.accountId, bal);
    // func();
    console.log("Output Title:", modalCtx.title);
  };

  const supplyHandler = () => {
    console.log("Supply Button Clicked");
  };

  return (
    <Modal
      open={modalCtx.modal === "supply"}
      onClose={modalCtx.modal === "supply" ? handleHideSupply : null}
    >
      <div className="popup-markets-container show">
        <div className="asset-info">
          <img src={logoImg} alt="" />
          <h4>{modalCtx.title}</h4>
        </div>
        <div className="popup-options supply-popup supply-active active">
          <div className="options-buttons supply-options">
            <button onClick={handleSupplyDisplay}>Supply</button>
            <button onClick={handleWithdrawDisplay}>Withdraw</button>
          </div>
          <div className="popup-info-container">
            <div className="main-info-container">
              <ModalDashboard
                bal={bal}
                coinType="USDC"
                max={true}
                tokenPrice={tokenPrice * bal}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {displayState === "supply" && (
            <SupplyBox
              approveHandler={approveHandler}
              supplyHandler={supplyHandler}
            />
          )}
          {displayState === "withdraw" && <WithdrawBox />}
        </div>
      </div>
    </Modal>
  );
}
