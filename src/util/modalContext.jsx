import { createContext, useEffect, useState } from "react";
import { useWalletInterface } from "../services/wallets/useWalletInterface";

const ModalContext = createContext({
  modal: "",
  title: "",
  accountId: "",
  showSupply: () => {},
  showBorrow: () => {},
  showRisk: () => {},
  showConnectWallet: () => {},
  hideModal: () => {},
  giveTitle: () => {},
});

export function ModalContextProvider({ children }) {
  const { accountId } = useWalletInterface();

  const [modal, setModal] = useState("");
  const [title, setTitle] = useState("");

  function giveTitle(title) {
    setTitle(title);
  }

  function showSupply() {
    setModal("supply");
  }
  function showBorrow() {
    setModal("borrow");
  }
  function showRisk() {
    setModal("risk");
  }
  function showConnectWallet() {
    setModal("wallet");
  }
  function hideModal() {
    setModal("");
  }

  const modalContext = {
    modal,
    title,
    accountId,
    giveTitle,
    showSupply,
    showBorrow,
    showRisk,
    showConnectWallet,
    hideModal,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
