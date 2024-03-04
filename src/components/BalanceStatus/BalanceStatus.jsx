import { useWalletInterface } from "../../services/wallets/useWalletInterface";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

import SFProtocolABI from "../../abi/SFProtocolToken.json";

import "./balanceStatus.css";

export default function BalanceStatus() {
  const { accountId } = useWalletInterface();
  const [supplyAmount, setSupplyAmount] = useState(0);
  const [collateralAmount, setCollateralAmount] = useState(0);
  const [borrowAmount, setBorrowAmount] = useState(0);
  const [borrowLimit, setBorrowLimit] = useState(0);

  useEffect(() => {
    const func = async () => {
      if (accountId && accountId !== null && accountId.length !== 0) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(accountId);
        const ProtocolContract = new ethers.Contract(
          "0x0800E04533Afc1279c55c85734d49a2f61785539",
          SFProtocolABI,
          signer
        );
        // console.log("ProtocolContract", ProtocolContract);
        let value = await ProtocolContract.getSuppliedAmount(accountId);
        await setSupplyAmount(parseInt(value._hex, 16));
      }
    };
    func();
  }, [accountId]);
  return (
    <div className="balance-status">
      <div className="balance-container">
        <div className="supply-blc-container">
          <p>Supply Balance</p>
          <p className="balance">${supplyAmount}</p>
        </div>
        <div className="collateral-blc-container">
          <p>Collateral Balance</p>
          <p className="balance">$0</p>
        </div>
        <div className="borrow-blc-container">
          <p>Borrow Balance</p>
          <p className="balance">$0</p>
        </div>
      </div>
      <div className="balance-line">
        <p>Borrow Limit : 20%</p>
        <div className="line"></div>
      </div>
    </div>
  );
}
