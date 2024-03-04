import "./style.css";

export default function MinItem({ max, min }) {
	return (
		<div className="markets-small">
			<span className="big-text">{max}</span>
			<span className="small-text">{min}</span>
		</div>
	);
}
