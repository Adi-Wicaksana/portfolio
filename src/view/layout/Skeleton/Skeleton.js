import React from "react";

// stylesheet
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./font.css";

// component
import Navbar from "../Navbar/Navbar";
import Main from "../../content/Main";

function Skeleton() {
	return (
		<div className="mt-2 body-wrap">
			<div className="container">
				<Navbar />
				<Main />
			</div>
		</div>
	);
}

export default Skeleton;
