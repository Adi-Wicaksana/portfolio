import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/swiper/navbarSlice";
import generateReducer from "../features/swiper/familiarSlice";
import projectReducer from "../features/swiper/projectSlice";

export default configureStore({
	reducer: {
		familiar: generateReducer,
		navbar: navbarReducer,
		project: projectReducer
	},
});
