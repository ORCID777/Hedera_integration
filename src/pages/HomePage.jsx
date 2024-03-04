import Sidebar from "../components/sidebar";
import { useState } from "react";
import HomePageMain from "../components/homePageMain";

export default function HomePage() {
	const [sidebarStatus, setSidebarStatus] = useState(null);
	const sidebarSwitch = () => {
		if (sidebarStatus === null || sidebarStatus === false) {
			document.body.style.overflow = "hidden";
			setSidebarStatus(true);
		} else {
			document.body.style.overflow = "auto";
			setSidebarStatus(false);
		}
	};

	return (
		<div>
			<Sidebar show={sidebarStatus} hide={sidebarSwitch} />
			<HomePageMain sideBarShow={sidebarSwitch} />
		</div>
	);
}
