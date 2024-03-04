import React, { useState } from "react";
import "./style.css";

const FourthContainer = (props) => {
	const popupOpen = () => {
		const fourthContainer = document.getElementById("3-container");
		document.querySelector(".mobile-screen-container").style.display =
			"none";
		fourthContainer.style.height = "100vh";
		fourthContainer.style.paddingBottom = "0px";
		fourthContainer.scrollIntoView(true);
		document.querySelector(".popup-container").style.display =
			"block";
		document.body.style.overflow = "hidden";
		let cards = document.querySelectorAll(".card");
		cards.forEach((el) => {
			el.classList.remove("show");
			el.classList.add("show");
		});
	};
	const popupClose = () => {
		const fourthContainer = document.getElementById("3-container");
		document.querySelector(".mobile-screen-container").style.display =
			"flex";
		fourthContainer.style.height = "100%";
		fourthContainer.style.opacity = 1;
		fourthContainer.style.paddingBottom = "180px";
		document.querySelector(".popup-container").style.display = "none";
		document.body.style.overflow = "scroll";
	};
	return (
		<div
			className="fourth-container inner-container"
			id="3-container"
			ref={props.reference}
		>
			<div className="content-container">
				<div className="main-content">
					<div className="mobile-screen-container">
						<div className="title-container">
							<h1 className="heading">
								Sustainable and effective Roadmap.
							</h1>
						</div>
						<div className="desc-text">
							We have planned the Equilibria roadmap to ensure
							technically and timely sustainable development. By Q1
							2025, we expect to release Equilibria in its final form,
							unlocking its full potential. Please find below the
							roadmap for your reference.
						</div>
						<div className="panel-button">
							<button id="popup-btn" onClick={popupOpen}>
								See full Roadmap
							</button>
						</div>
					</div>
					<div className="popup-container">
						<div className="popup-button-container">
							<button id="popup-close-btn" onClick={popupClose}>
								&larr;
							</button>
						</div>
						<div className="timeline">
							<div className="timeline-title">
								Sustainable and effective Roadmap.
							</div>
							<div className="outer" ref={props.cardRef}>
								<div className="card">
									<div className="info">
										<h3 className="title">dApp Release - Q1 2024.</h3>
										<p>
											Sirio is set to launch in the first quarter of
											2024. Upon its debut, you will instantly have
											the ability to lend and borrow your favorite
											tokens on the Hedera chain. Additionally, the
											platform offers the capability to track
											comprehensive market data as well as detailed
											information on individual user loans. This
											feature enhances your experience on the platform
											by providing greater transparency and a more
											informed user interface.
										</p>
									</div>
								</div>
								<div className="card">
									<div className="info">
										<h3 className="title">
											ML Model Release - Q2 2024.
										</h3>
										<p>
											In the second quarter of 2024, we will release
											the first version of our Machine Learning model
											for Risk Management. This version, trained with
											one-time data, will be available for USDC token
											loans using USDC, WBTC, and WETH as collateral.
											The model's output will be a warning about the
											probability of a user's liquidation, allowing
											them to make an informed, arbitrary, and
											permissionless decision to reduce the amount of
											borrowed tokens.
										</p>
									</div>
								</div>
								<div className="card">
									<div className="info">
										<h3 className="title">
											Token & Governance - Q3 2024.
										</h3>
										<p>
											In the third quarter of 2024, we plan to release
											the platform's Native Token along with a
											Governance system. The token will offer numerous
											benefits on the platform, such as improved
											interest rates for both borrowers and suppliers.
											Additionally, it will represent voting power in
											the governance mechanism, which will involve all
											users in the future development of the platform.
										</p>
									</div>
								</div>
								<div className="card">
									<div className="info">
										<h3 className="title">
											Second Update RM ML Model - Q4 2024.
										</h3>
										<p>
											In the final quarter of 2024, an updated version
											of our Machine Learning Model, enhanced with
											more features and greater performance, will be
											released. This version will include pipelines,
											enabling it to autonomously extract, process,
											and train with data from the protocol. Moreover,
											the model will be available for all tokens on
											the platform, whether used for loans or as
											collateral. Additionally, an optimization
											algorithm will be introduced to suggest the
											optimal amount of tokens to borrow in relation
											to the associated risk.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FourthContainer;
