import React from "react";
import { Routes, Route } from "react-router-dom";

// stylesheet
import "swiper/css";

// component
import Home from "./Home/Home";
import Work from "./Work/Work";
import Project from "./Project/Project";

function Main() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/works" element={<Work />}></Route>
			<Route path="/projects" element={<Project />}></Route>
		</Routes>
	);
}

export default Main;
