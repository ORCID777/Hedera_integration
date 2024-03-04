import { useContext, useState } from "react";
import ModalContext from "../../util/modalContext";

export default function MarketListItem({
  title,
  img,
  apy,
  amount,
  collateral,
  availableBorrow,
}) {
  const [collateralState, setCollateralState] = useState("");

  const modalCtx = useContext(ModalContext);

  function handleSupplyOpen() {
    modalCtx.giveTitle(title);
    modalCtx.showSupply();
  }
  function handleBorrowOpen() {
    modalCtx.giveTitle(title);
    modalCtx.showBorrow();
  }

  function handleCollateralClick() {
    setCollateralState((state) => (state === "" ? "on" : ""));
  }

  let collateralClass = "button";
  if (collateralState === "on") {
    collateralClass = "button on";
  } else if (collateralState === "") {
    collateralClass = "button";
  }

  const claimHandler = (e) => {
    e.stopPropagation();
    console.log("Claim Button Clicked");
  };

  return (
    <>
      <div
        className="row table-data-row supply-market-row"
        onClick={collateral ? handleSupplyOpen : handleBorrowOpen}
      >
        <span className="asset-cell">
          <img src={img} alt="" />
          {title}
        </span>
        <span>{apy}%</span>
        <span>{amount}</span>
        {collateral ? (
          <div className="cell">
            <button
              className="primary-btn lower-padding z-10"
              onClick={claimHandler}
            >
              Claim
            </button>
          </div>
        ) : null}
        {availableBorrow ? (
          <span className="available">{availableBorrow}</span>
        ) : null}
      </div>
    </>
  );
}
