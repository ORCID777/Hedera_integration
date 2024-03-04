import { useState } from "react";
import MarketIndividualStats from "../marketIndividualStats";
import "./style.css";

const MarketStats = () => {
  const [supplyAmt, setSupplyAmt] = useState("$4.97M");
  const [borrowAmt, setBorrowAmt] = useState("$1.81M");
  const [borrowMarkets, setBorrowMarkets] = useState([
    { name: "GLP", per: 40.63 },
    { name: "WBTC", per: 17.87 },
    { name: "USDC.E", per: 13.71 },
  ]);
  const [supplyMarkets, setSupplyMarkets] = useState([
    { name: "USDC.E", per: 35.58 },
    { name: "WBTC", per: 90.87 },
    { name: "WETH", per: 31.71 },
  ]);
  return (
    <>
      <div className='global-stats-container'>
        <MarketIndividualStats
          header='Total Supply'
          amount={supplyAmt}
          markets={supplyMarkets}
        />
        <MarketIndividualStats
          header='Total Borrow'
          amount={borrowAmt}
          markets={borrowMarkets}
        />
      </div>
    </>
  );
};

export default MarketStats;
