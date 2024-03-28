import Navbar from "../components/navabar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<main className="flex min-h-screen flex-col">
			<Navbar />
			<section className="flex-1">
				<Outlet />
			</section>
			<Footer />
		</main>
	);
};

export default Layout;
