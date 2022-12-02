import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { move } from "../../../features/swiper/moveSlice";

// stylesheet
import "./style.css";

function Navbar() {
	const activeIndex = useSelector((state) => state.swiper_slide.index);
	const dispatch = useDispatch();

	const moveSlide = (e) => {
		dispatch(move(e.target.getAttribute("data-slide")))
	}

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
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="nav-menu">
					<ul className="navbar-nav m-auto mb-2 mb-sm-0 mb-md-0 mb-lg-0">
						<li className="nav-item ps-4 ps-md-2">
							<button
								className={activeIndex === '0' ? "btn btn-link nav-link font-nav-link active" : "btn btn-link nav-link font-nav-link"}
								data-slide="0"
								onClick={(e) => moveSlide(e)}
							>
								Home
							</button>
						</li>
						<li className="nav-item ps-4 ps-md-2">
							<button
								className={activeIndex === '1' ? "btn btn-link nav-link font-nav-link active" : "btn btn-link nav-link font-nav-link"}
								data-slide="1"
								onClick={(e) => moveSlide(e)}
							>
								Works
							</button>
						</li>
						<li className="nav-item ps-4 ps-md-2">
							<button
								className={activeIndex === '2' ? "btn btn-link nav-link font-nav-link active" : "btn btn-link nav-link font-nav-link"}
								data-slide="2"
								onClick={(e) => moveSlide(e)}
							>
								Projects
							</button>
						</li>
						<li className="nav-item ps-4 ps-md-2">
							<button
								className={activeIndex === '3' ? "btn btn-link nav-link font-nav-link active" : "btn btn-link nav-link font-nav-link"}
								data-slide="3"
								onClick={(e) => moveSlide(e)}
							>
								About me
							</button>
						</li>
					</ul>
					<form className="d-flex pe-3 mb-3 mb-sm-0 ps-4 ps-md-2">
						<a href="https://api.whatsapp.com/send/?phone=6285186110496&text&type=phone_number&app_absent=0" rel={"noopener noreferrer"} target={"_blank"} className="btn btn-lets-talk px-3" type="submit">
							LET'S TALK
						</a>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
