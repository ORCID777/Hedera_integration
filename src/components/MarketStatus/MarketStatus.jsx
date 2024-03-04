import "./marketStatus.css";

export default function MarketStatus(props) {
	return (
		<div className="markets-status">
			<div className="markets-container">{props.children}</div>
		</div>
	);
}
