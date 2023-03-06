import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

// stylesheet
import "swiper/css";

// component
import Home from "./Home/Home";
import Work from "./Work/Work";
import Project from "./Project/Project";

function Main() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/works" element={<Work />}></Route>
				<Route path="/projects" element={<Project />}></Route>
			</Routes>
		</AnimatePresence>
	);
}

export default Main;
