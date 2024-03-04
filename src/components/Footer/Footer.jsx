import Logo from "../../assets/BrandingAssets-main/Brand/LogoWhite.svg";
import WebsiteWhite from "../../assets/BrandingAssets-main/Icons/website_white.svg";
import DocsWhite from "../../assets/BrandingAssets-main/Icons/docs_white.svg";
import TwitterWhite from "../../assets/BrandingAssets-main/Icons/twitter_white.svg";
import TelegramWhite from "../../assets/BrandingAssets-main/Icons/telegram_white.svg";
import DiscordWhite from "../../assets/BrandingAssets-main/Icons/discord_white.svg";
import GithubWhite from "../../assets/BrandingAssets-main/Icons/github_white.svg";

import Icon from "../LinkedIcon";
import "./footer.css";

export default function Footer() {
	return (
		<footer>
			<div className="footer-content">
				<div className="logo-container">
					<img className="logo" src={Logo} alt="sirio" />
				</div>
				<div className="text-container">
					Developed with ❤️ by
					<a href="https://www.astrid.network/" target="_blank">
						Astrid Network
					</a>
				</div>
				<div className="footer-social">
					<Icon link=" " img={WebsiteWhite} text="Website" />
					<Icon link=" " img={DocsWhite} text="Docs" />
					<Icon link=" " img={TwitterWhite} text="Twitter" />
					<Icon link=" " img={TelegramWhite} text="Telegram" />
					<Icon link=" " img={DiscordWhite} text="Discord" />
					<Icon link=" " img={GithubWhite} text="Github" />
				</div>
			</div>
		</footer>
	);
}
