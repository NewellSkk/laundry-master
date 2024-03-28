import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="py-4">
			<section className="container">
				<section className="flex gap-2">
					{navLinks.map((each) => (
						<NavLink
							key={each.path}
							className={({ isActive }) =>
								clsx("font-medium", isActive && "!underline")
							}
							to={each.path}
							end
						>
							{each.label}
						</NavLink>
					))}
				</section>
			</section>
		</nav>
	);
};

export default Navbar;

const navLinks = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "About",
		path: "/about",
	},
	{
		label: "Services",
		path: "/services",
	},
	{
		label: "Contact",
		path: "/contact",
	},
];
