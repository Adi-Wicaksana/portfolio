import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

// stylesheet
import "./Navbar.css";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm navbar-expand-md navbar-custom navbar-light">
			<div className="container-fluid">
				<Link className="navbar-brand ps-3 font-portfolio" to="/">
					Portfolio<font className="font-portfolio-dot">.</font>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#nav-menu"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="nav-menu">
					<ul className="navbar-nav m-auto mb-2 mb-sm-0 mb-md-0 mb-lg-0">
						<CustomLink to="/">Home</CustomLink>
						<CustomLink to="/works">Works</CustomLink>
						<CustomLink to="/projects">Projects</CustomLink>
					</ul>
					<form className="d-flex pe-3 mb-3 mb-sm-0 ps-4 ps-md-2">
						<a
							href="https://api.whatsapp.com/send/?phone=6285186110496&text&type=phone_number&app_absent=0"
							rel={"noopener noreferrer"}
							target={"_blank"}
							className="btn btn-lets-talk px-3"
							type="submit"
						>
							LET'S TALK
						</a>
					</form>
				</div>
			</div>
		</nav>
	);
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

	return (
		<li className="nav-item ps-4 ps-md-2">
			<Link
				to={to}
				{...props}
				className={
					isActive
						? "btn btn-link nav-link font-nav-link active"
						: "btn btn-link nav-link font-nav-link"
				}
			>
				{children}
			</Link>
		</li>
	);
}

export default Navbar;
