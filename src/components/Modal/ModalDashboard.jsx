export default function ModalDashboard({
  onChange,
  coinType,
  max,
  bal,
  tokenPrice,
}) {
  return (
    <div className="info-dashboard-section">
      <h2 className="dashboard-main-balance">
        <input
          pattern="[0-9]+"
          onChange={(e) => onChange(e)}
          value={bal}
          placeholder="0.0"
          className="dashboard-input"
        />
      </h2>
      <div className="dashboard-mini-info">
        <p className="max">{max && <button>Max</button>}</p>
        <p>{coinType}</p>
        <p className="mini-info-balance">~${tokenPrice}</p>
      </div>
    </div>
  );
}
