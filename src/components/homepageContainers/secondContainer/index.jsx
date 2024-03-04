import React from "react";
import SecondImage from "../../../assets/BrandingAssets-main/Graphics/Second.png";

const SecondContainer = (props) => {
	return (
		<div
			className="second-container inner-container"
			id="1-container"
			style={{ paddingTop: "50px", opacity: props.opc }}
			ref={props.reference}
		>
			<div className="content-container">
				<div className="main-content">
					<div className="text-container">
						<div className="heading-container">
							<h1 className="heading">
								Lend your assets <br />
								on fastest chain.
							</h1>
						</div>
						<div className="info-container">
							<p className="info">
								The Hedera blockchain offers a seamless and secure
								experience, due to its innovative Hashgraph Consensus
								Algorithm. This system employs a method that
								significantly boosts transaction efficiency and
								security. Key features such as Asynchronous Byzantine
								Fault Tolerance, Gossip about Gossip, and Virtual
								Voting facilitate rapid consensus, creating a platform
								that is fast, scalable, and secure. These elements
								work together to ensure an optimal environment for
								users to engage in lending or borrowing assets on
								Sirio.
							</p>
						</div>
					</div>
					<div className="image-container">
						<img src={SecondImage} alt="Image" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecondContainer;
