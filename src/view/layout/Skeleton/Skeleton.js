import React from "react";

// stylesheet
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./Skeleton.css";
import "./Font.css";
import "./Override.css";

// component
import Navbar from "../Navbar/Navbar";
import Main from "../../content/Main";

function Skeleton() {
	return (
		<div>
			<div className="container">
				<Navbar />
				<Main />
			</div>
		</div>
	);
}

export default Skeleton;
