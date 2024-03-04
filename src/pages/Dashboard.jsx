import BalanceStatus from "../components/BalanceStatus/BalanceStatus";
import CenterNetStatus from "../components/CenterNetStatus/CenterNetStatus";
import ModalBorrow from "../components/Modal/ModalBorrow";
import ModalConnectWallet from "../components/Modal/ModalConnectWallet";
import ModalRisk from "../components/Modal/ModalRisk";
import ModalSupply from "../components/Modal/ModalSupply";
import DashboardMarkets from "../components/DashBoardMarkets/DashboardMarkets";

function Dashboard() {
	return (
		<div
			className="content-container dashboard-container"
			style={{
				width: "100%",
				maxWidth: "1400px",
				margin: "auto",
				padding: "20px",
			}}
		>
			<ModalSupply />
			<ModalBorrow />
			<ModalRisk />
			<ModalConnectWallet />
			<CenterNetStatus />
			<BalanceStatus />
			<DashboardMarkets />
		</div>
	);
}

export default Dashboard;
