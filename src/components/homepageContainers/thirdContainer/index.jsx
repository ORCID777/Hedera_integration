import React from "react";
import ThirdImage from "../../../assets/BrandingAssets-main/Graphics/Third.png";
const ThirdContainer = (props) => {
	return (
		<div
			className="third-container inner-container"
			id="2-container"
			ref={props.reference}
			style={{ opacity: props.opc }}
		>
			<div className="content-container">
				<div className="main-content">
					<div className="image-container">
						<img src={ThirdImage} alt="Image" />
					</div>
					<div className="text-container">
						<div className="heading-container">
							<h1 className="heading" style={{ textAlign: "right" }}>
								Minimize liquidations <br />
								with usage of AI.
							</h1>
						</div>
						<div className="info-container">
							<p className="info">
								The Sirio team has worked on developing a
								permissionless and arbitrary Machine Learning
								algorithm. We have gathered data on millions of loans
								and considered over 20 features related to market
								conditions, liquidity, volatility, and much more,
								training the model with any crucial condition. Its
								output is the probability that a given loan will be
								liquidated, warning the user and making them aware of
								the risk associated with their loan before it is made.
							</p>
							<a href="https://equilibria-finances-organization.gitbook.io/equilibria-documentation/">
								<button>Whitepaper</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThirdContainer;
