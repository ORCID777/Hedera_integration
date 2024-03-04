import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import LinkedIcon from "../../LinkedIcon";
import Rocket from "../../../assets/BrandingAssets-main/Icons/icons8-rocket.gif";
import Twitter from "../../../assets/BrandingAssets-main/Icons/twitter_black.svg";
import Github from "../../../assets/BrandingAssets-main/Icons/github_black.svg";
import Discord from "../../../assets/BrandingAssets-main/Icons/discord_black.svg";
import Telegram from "../../../assets/BrandingAssets-main/Icons/telegram_black.svg";
import HomePageFooter from "../../homepageFooter";

const SixthContainer = (props) => {
	return (
		<div
			className="sixth-container inner-container"
			id="5-container"
			ref={props.reference}
			style={{ opacity: props.opc }}
		>
			<div className="content-container">
				<div className="main-content">
					<div className="text-container">
						<div className="heading-container">
							<h1 className="heading">See you on the other side.</h1>
						</div>
						<div className="whole-links-container">
							<div className="links-container">
								<NavLink to="/app">
									<img src={Rocket} alt="App" />
									<p style={{ color: "black" }}>Launch App</p>
								</NavLink>
							</div>
							<div className="links-container">
								<div className="last-social-links">
									<LinkedIcon
										img={Twitter}
										link={"https://twitter.com/astrid_net"}
										alt="Twitter"
									/>
									<LinkedIcon
										img={Telegram}
										link={"#"}
										alt="Telegram"
									/>
									<LinkedIcon
										img={Discord}
										link={
											"https://discord.com/users/809888220182741022"
										}
										alt="Discord"
									/>
									<LinkedIcon
										img={Github}
										link={"https://github.com/equilibria-finance"}
										alt="Github"
									/>
								</div>
								<p>Join our Community</p>
							</div>
						</div>
					</div>
				</div>
				<HomePageFooter />
			</div>
		</div>
	);
};

export default SixthContainer;
