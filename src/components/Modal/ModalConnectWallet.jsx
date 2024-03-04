import React, { useState, useContext } from "react";
import metamaskImg from "../../assets/BrandingAssets-main/Icons/metamask.svg";
import hashpackImg from "../../assets/BrandingAssets-main/Icons/hashpack.png";
import bladeImg from "../../assets/BrandingAssets-main/Icons/blade.png";
import ModalContext from "../../util/modalContext";
import Modal from "./Modal";

import { connectToMetamask } from "../../services/wallets/metamask/metamaskClient";
import { connectToBladeWallet } from "../../services/wallets/blade/bladeClient";
import { hashConnect } from "../../services/wallets/hashconnect/hashconnectClient";

export default function ModalConnectWallet() {
  const modalCtx = useContext(ModalContext);

  const MetaMaskConnectHandler = () => {
    handleCloseWallet();
    connectToMetamask();
  };

  const HashPackConnectHandler = () => {
    handleCloseWallet();
    hashConnect.connectToLocalWallet();
  };

  const BladeConnectHandler = () => {
    handleCloseWallet();
    connectToBladeWallet();
  };

  function handleCloseWallet() {
    modalCtx.hideModal();
  }
  return (
    <Modal
      open={modalCtx.modal === "wallet"}
      onClose={modalCtx.modal === "wallet" ? handleCloseWallet : null}
    >
      <div className="popup-wallet-container">
        <h3>Connect Wallet</h3>
        <div className="wallets-container">
          <button onClick={MetaMaskConnectHandler}>
            <img src={metamaskImg} alt="" />
            <p>Metamask</p>
          </button>
          <button onClick={HashPackConnectHandler}>
            <img src={hashpackImg} alt="" />
            HashPack
          </button>
          <button onClick={BladeConnectHandler}>
            <img src={bladeImg} alt="" />
            Blade
          </button>
        </div>
      </div>
    </Modal>
  );
}
