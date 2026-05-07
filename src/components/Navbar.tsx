import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="brand">
				<div className="mark">
					<div className="glyph" />
				</div>
				<Link to="/">
					<span>Skild</span>
				</Link>
			</div>
			<Link to="/sign-in/$" className="btn-primary">
				<LogIn size="16" />
				Sign In
			</Link>
		</nav>
	);
};

export default Navbar;
