import React from "react";

// stylesheet
import "./style.css";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm navbar-expand-md navbar-custom navbar-light">
			<div className="container-fluid">
				<a className="navbar-brand ps-3 font-portfolio" href="/">
					Portfolio<font className="font-portfolio-dot">.</font>{" "}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#nav-menu"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="nav-menu">
					<ul className="navbar-nav m-auto mb-2 mb-sm-0 mb-md-0 mb-lg-0">
						<li className="nav-item ps-4 ps-md-2">
							<button
								className="btn btn-link nav-link active font-nav-link"
								data-slide="0"
								onClick={(e) =>
									console.log(e.target.getAttribute("data-slide"))
								}
							>
								Home
							</button>
						</li>
						<li className="nav-item ps-4 ps-md-2">
							<button
								className="btn btn-link nav-link font-nav-link"
								data-slide="1"
								onClick={(e) =>
									console.log(e.target.getAttribute("data-slide"))
								}
							>
								Works
							</button>
						</li>
						<li className="nav-item ps-4 ps-md-2">
							<button
								className="btn btn-link nav-link font-nav-link"
								data-slide="2"
								onClick={(e) =>
									console.log(e.target.getAttribute("data-slide"))
								}
							>
								Projects
							</button>
						</li>
						<li className="nav-item ps-4 ps-md-2">
							<button
								className="btn btn-link nav-link font-nav-link"
								data-slide="3"
								onClick={(e) =>
									console.log(e.target.getAttribute("data-slide"))
								}
							>
								About me
							</button>
						</li>
					</ul>
					<form className="d-flex pe-3 mb-3 mb-sm-0 mb-md-0 mb-lg-0 ps-4 ps-md-2">
						<button className="btn btn-lets-talk px-3" type="submit">
							LET'S TALK
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
