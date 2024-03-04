export default function MarketStatusContainer({ title, children }) {
  return (
    <div className="markets">
      <h3 className="table-title">{title}</h3>
      <div className="market-table">
        <div className="table-header">
          <div className="row header">
            {title === "Supply Markets" && (
              <>
                <span className="asset-cell">Asset</span>
                <span>Supply APY</span>
                <span>Wallet</span>
                <span>Claim Earnings</span>
              </>
            )}
            {title === "Borrow Markets" && (
              <>
                <span className="asset-cell">Asset</span>
                <span>Borrow APY</span>
                <span>Total Borrow</span>
                <span className="available">Available Borrow</span>
              </>
            )}
            {title === "All Markets" && (
              <>
                <span className="asset-cell">Market</span>
                <span>Total Supply</span>
                <span>Supply Apy</span>
                <span>Total Borrow</span>
                <span>Borrow Apy</span>
              </>
            )}
          </div>
        </div>
        <div className="table-data">{children}</div>
      </div>
    </div>
  );
}
