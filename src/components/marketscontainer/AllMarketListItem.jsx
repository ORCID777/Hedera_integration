import MinItem from "./ListItemWithMin";

export default function MarketListItem({
	title,
	img,
	supply,
	supplyApy,
	totalBorrow,
	supplyMin,
	supplyApyMIn,
	totalBorrowMin,
	borrowApy,
}) {
	return (
		<>
			<div
				className="row table-data-row supply-market-row"
				style={{
					padding: "20px 10px",
					borderTop: "1px solid black",
					marginBottom: 0,
				}}
			>
				<span className="asset-cell">
					<img src={img} alt="" />
					{title}
				</span>
				<MinItem max={supply} min={supplyMin} />
				<MinItem max={supplyApy} min={supplyApyMIn} />
				<MinItem max={totalBorrow} min={totalBorrowMin} />
				<span>{borrowApy}</span>
			</div>
		</>
	);
}
