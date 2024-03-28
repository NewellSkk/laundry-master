import Navbar from "../components/navabar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<main>
			<Navbar />
			<Outlet />
			<Footer />
		</main>
	);
};

export default Layout;
