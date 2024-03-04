import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import LinkedIcon from "../../LinkedIcon";
import Logo from "../../../assets/BrandingAssets-main/Brand/Logo.svg";
import Docs from "../../../assets/BrandingAssets-main/Icons/docs_black.svg";
import Twitter from "../../../assets/BrandingAssets-main/Icons/twitter_black.svg";
import Github from "../../../assets/BrandingAssets-main/Icons/github_black.svg";
import Discord from "../../../assets/BrandingAssets-main/Icons/discord_black.svg";
import Telegram from "../../../assets/BrandingAssets-main/Icons/telegram_black.svg";
import MainImage from "../../../assets/BrandingAssets-main/Graphics/MainImg.png";

const FirstContainer = (props) => {
	const showMore = () => {
		const scrollAmount = document.documentElement.clientHeight;
		window.scroll({
			top: scrollAmount,
			behavior: "smooth",
		});
	};
	return (
		<div
			className="first-container inner-container"
			id="0-container"
			ref={props.reference}
			style={{ opacity: props.opc }}
		>
			<div className="navbar">
				<div className="logo">
					<img src={Logo} alt="SIRIO" />
				</div>
				<div className="links">
					<div className="social-links">
						<LinkedIcon
							img={Docs}
							alt="Docs"
							link="https://equilibria-finances-organization.gitbook.io/equilibria-documentation/"
						/>
						<LinkedIcon
							img={Twitter}
							alt="Twitter"
							link="https://twitter.com/astrid_net"
						/>
						<LinkedIcon
							img={Github}
							alt="Github"
							link="https://github.com/equilibria-finance"
						/>
						<LinkedIcon
							img={Discord}
							alt="Discord"
							link="https://discord.com/users/809888220182741022"
						/>
						<LinkedIcon img={Telegram} alt="Telegram" link="#" />
					</div>
				</div>
				<div
					className="hamburger"
					id="hamburger"
					onClick={props.sideBarShow}
				>
					<i className="fa-solid fa-bars"></i>
				</div>
			</div>
			<div className="content-container">
				<div className="main-content">
					<div className="text-container">
						<div className="heading-container">
							<h1 className="heading">
								Effortless&nbsp;
								<span className="primary-col-text">
									loans.
									<br />{" "}
								</span>
								Superior&nbsp;
								<span className="primary-col-text">UX. </span>
								<br />
								AI Driven&nbsp;
								<span className="primary-col-text">safety.</span>
							</h1>
						</div>
						<div className="info-container">
							<p className="info">
								Sirio represents the first lending protocol built on
								Hedera. It is designed to ensure an unparalleled user
								experience by leveraging Hedera’s speed and
								scalability. Additionally, it incorporates a machine
								learning algorithm as a mechanism to decrease
								liquidation events.
							</p>
							<button>
								<NavLink to="/app">Launch dApp</NavLink>
							</button>
						</div>
					</div>
					<div className="image-container">
						<img src={MainImage} alt="Main Image" />
					</div>
				</div>
			</div>
			<div className="show-more">
				<p id="show-more-btn" onClick={showMore}>
					Show More &nbsp; &darr;
				</p>
			</div>
		</div>
	);
};

export default FirstContainer;
