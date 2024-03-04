import React from "react";
import FirstContainer from "../homepageContainers/firstContainer";
import "./style.css";
import SecondContainer from "../homepageContainers/secondContainer";
import ThirdContainer from "../homepageContainers/thirdContainer";
import FourthContainer from "../homepageContainers/fourthContainer";
import FifthContainer from "../homepageContainers/fifthContainer";
import SixthContainer from "../homepageContainers/sixthContainer";

import { useRef, useEffect } from "react";

const HomePageMain = (props) => {
	const firstRef = useRef(null);
	const secondRef = useRef(null);
	const thirdRef = useRef(null);
	const fourthRef = useRef(null);
	const fifthRef = useRef(null);
	const sixthRef = useRef(null);
	const cardState = useRef(null);

	let vh = document.documentElement.clientHeight;
	let vw = document.documentElement.clientWidth;

	var firstHeight,
		secondHeight,
		thirdHeight,
		fourthHeight,
		fifthHeight;
	var secondOpc = 0.1,
		thirdOpc = 0.1,
		fourthOpc = 0.1,
		fifthOpc = 0.1,
		sixthOpc = 0.1;
	var firstOpc = 1;

	const showCards = () => {
		for (const child of cardState.current.children) {
			child.classList.add("show");
		}
	};
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};
	useEffect(() => {
		if (firstRef.current) {
			firstHeight = firstRef.current.clientHeight;
			secondHeight = secondRef.current.clientHeight;
			thirdHeight = thirdRef.current.clientHeight;
			fourthHeight = fourthRef.current.clientHeight;
			fifthHeight = fifthRef.current.clientHeight;
		}
	}, []);
	const scrolling = (position) => {
		firstOpc = (firstHeight - position) / firstHeight;

		if (vw > 730) {
			if (
				position + vh - 300 >
				firstHeight + secondHeight + thirdHeight
			) {
				showCards();
			}
		}

		if (position < firstHeight) {
			secondOpc = position / firstHeight;
		} else {
			secondOpc =
				(secondHeight + firstHeight - position) / secondHeight;
		}

		if (position < firstHeight + secondHeight) {
			thirdOpc = position / (firstHeight + secondHeight);
		} else {
			thirdOpc =
				(thirdHeight + firstHeight + secondHeight - position) /
				thirdHeight;
		}
		if (position < firstHeight + secondHeight + thirdHeight) {
			fourthOpc =
				position / (secondHeight + thirdHeight + firstHeight);
		} else {
			fourthOpc =
				(fourthHeight +
					thirdHeight +
					firstHeight +
					secondHeight -
					position) /
				fourthHeight;
		}
		if (
			position <
			firstHeight + secondHeight + thirdHeight + fourthHeight
		) {
			fifthOpc =
				position /
				(secondHeight + thirdHeight + firstHeight + fourthHeight);
		} else {
			fifthOpc =
				(firstHeight +
					secondHeight +
					thirdHeight +
					fourthHeight +
					fifthHeight -
					position) /
				fifthHeight;
		}

		sixthOpc =
			position /
			(firstHeight +
				secondHeight +
				thirdHeight +
				fourthHeight +
				fifthHeight +
				500);
		sixthOpc = sixthOpc > 0.7 ? sixthOpc + 0.1 : sixthOpc;

		firstRef.current.style.opacity = firstOpc;
		secondRef.current.style.opacity = secondOpc;
		thirdRef.current.style.opacity = thirdOpc;
		fourthRef.current.style.opacity = fourthOpc;
		fifthRef.current.style.opacity = fifthOpc;
		sixthRef.current.style.opacity = sixthOpc;
	};
	window.onscroll = function (e) {
		scrolling(window.scrollY);
	};

	return (
		<div className="whole-container">
			<div className="container">
				<FirstContainer
					sideBarShow={props.sideBarShow}
					reference={firstRef}
				/>
				<SecondContainer reference={secondRef} />
				<ThirdContainer reference={thirdRef} />
				<FourthContainer
					reference={fourthRef}
					cardRef={cardState}
					mblBtn={showCards}
				/>
				<FifthContainer reference={fifthRef} />
			</div>
			<SixthContainer reference={sixthRef} />
		</div>
	);
};

export default HomePageMain;
