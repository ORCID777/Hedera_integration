import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function AppRootLayout() {
	window.onscroll = null;

	return (
		<>
			<div className="app-page">
				<Header />
				<Outlet />
			</div>
			<Footer />
		</>
	);
}
