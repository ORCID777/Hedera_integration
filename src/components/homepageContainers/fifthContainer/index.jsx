import React from "react";
import "./style.css";
import Hedera from "../../../assets/BrandingAssets-main/Partners/hedera.png";
import Headstarter from "../../../assets/BrandingAssets-main/Partners/headstarter.png";
import Flux from "../../../assets/BrandingAssets-main/Partners/flux.png";
import Ocean from "../../../assets/BrandingAssets-main/Partners/ocean.png";

const FifthContainer = (props) => {
	return (
		<div
			className="fifth-container inner-container"
			id="4-container"
			ref={props.reference}
			style={{ opacity: props.opc }}
		>
			<div className="fifth-content">
				<div className="text-container">
					<div className="heading-container">
						<h1 className="heading">Partners With The Best.</h1>
					</div>
				</div>
				<div className="image-container">
					<div>
						<img src={Hedera} alt="Hedera" />
						<img src={Flux} alt="Zel Flux" />
					</div>
					<div>
						<img src={Ocean} alt="Ocean" />
						<img src={Headstarter} alt="Head Starter" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FifthContainer;
