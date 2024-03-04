import MarketStatusContainer from "../MarketStatusContainer/MarketStatusContainer";
import MarketStats from "../marketStats";
import AllMarketListItem from "./AllMarketListItem";
import SirioImage from "../../assets/BrandingAssets-main/Brand/Icon.png";

const MarketsContainer = () => {
	return (
		<div className="content-container markets-container">
			<div className="markets-inner-container">
				<MarketStats />
				<div className="markets-status">
					<div className="markets-container">
						<MarketStatusContainer title={"All Markets"}>
							<AllMarketListItem
								title="WBTC"
								img={SirioImage}
								supply="20.9645 WBTC"
								supplyApy="6.16%"
								totalBorrow="11.9634 WBTC"
								supplyMin="$888.81K USD"
								supplyApyMIn="1.76%"
								totalBorrowMin="$507.6K USD"
								borrowApy="-14.00%"
							/>
							<AllMarketListItem
								title="WETH"
								img={SirioImage}
								supply="20.9645 WETH"
								supplyApy="6.16%"
								totalBorrow="1.9634 WETH"
								supplyMin="$8.81K USD"
								supplyApyMIn="1.76%"
								totalBorrowMin="$50.6K USD"
								borrowApy="-4.00%"
							/>
						</MarketStatusContainer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MarketsContainer;
