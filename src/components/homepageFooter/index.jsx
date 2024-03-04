import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Twitter from "../../assets/BrandingAssets-main/Icons/twitter_white.svg";
import Telegram from "../../assets/BrandingAssets-main/Icons/telegram_white.svg";
import Discord from "../../assets/BrandingAssets-main/Icons/discord_white.svg";
import Github from "../../assets/BrandingAssets-main/Icons/github_white.svg";
import LogoWhite from "../../assets/BrandingAssets-main/Brand/LogoWhite.svg";
import LinkedIcon from "../LinkedIcon";

const HomePageFooter = (props) => {
	return (
		<div className="footer-container">
			<div className="footer-content">
				<div className="footer-text">
					<div className="logo-container">
						<img src={LogoWhite} alt="Sirio" />
						<div className="footer-social">
							<LinkedIcon
								img={Twitter}
								link={"https://twitter.com/astrid_net"}
								alt="Twitter"
							/>
							<LinkedIcon img={Telegram} link={"#"} alt="Telegram" />
							<LinkedIcon
								img={Discord}
								link={"https://discord.com/users/809888220182741022"}
								alt="Discord"
							/>
							<LinkedIcon
								img={Github}
								link={"https://github.com/equilibria-finance"}
								alt="Github"
							/>
						</div>
					</div>
					<div className="footer-links">
						<div className="first-column">
							<h4>Useful Links</h4>
							<NavLink to="/app ">App</NavLink>
							<a href="">Documentation</a>
						</div>
						<div className="second-column">
							<h4>Brand Links</h4>
							<a href="">Brand Assets</a>
						</div>
					</div>
				</div>
				<div className="text-container">
					Developed with ❤️ by
					<a href="https://www.astrid.network/" target="_blank">
						Astrid Network
					</a>
				</div>
			</div>
		</div>
	);
};

export default HomePageFooter;
