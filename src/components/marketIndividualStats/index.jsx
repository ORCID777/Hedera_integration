import React from "react";
import "./style.css";

const MarketIndividualStats = (props) => {
	return (
		<div className="market-stats">
			<h1>{props.header}</h1>
			<div className="markets-info-container">
				<h3>{props.amount}</h3>
				<p className="light">Top 3 Markets</p>
				{props.markets.map((el) => {
					return (
						<div key={Math.random()}>
							<div className="topMarketsInfo">
								<p>{el.name}</p>
								<p>{el.per}%</p>
							</div>
							<div
								className="marketsLine"
								style={{
									background: `linear-gradient(90deg,#3251bf ${el.per}%,rgba(131, 139, 197, 0.5) 9%)`,
								}}
							></div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MarketIndividualStats;
