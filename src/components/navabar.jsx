import { Button, Link } from "@nextui-org/react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="py-6">
			<section className="container flex justify-between items-center">
				<section className="flex gap-2 items-center">
					{navLinks.map((each) => (
						<NavLink
							key={each.path}
							className={({ isActive }) =>
								clsx("font-medium", isActive && "text-primary")
							}
							to={each.path}
							end
						>
							{each.label}
						</NavLink>
					))}
				</section>
				<Button color="primary" radius="full" as={Link} href="/basket">
					Create Your Basket
				</Button>
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
