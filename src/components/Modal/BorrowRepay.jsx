export default function RepayBox({ approveHanlder, repayHanlder }) {
  return (
    <>
      <div className="buttons-container">
        <div className="borrow-buttons">
          <button className="primary-btn" onClick={approveHanlder}>
            1. Approve
          </button>
          <button className="primary-btn" onClick={repayHanlder}>
            2. Repay
          </button>
        </div>
      </div>
    </>
  );
}
