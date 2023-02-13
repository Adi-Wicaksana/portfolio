import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/swiper/navbarSlice";
import familiarReducer from "../features/swiper/familiarSlice";
import projectReducer from "../features/swiper/projectSlice";
import personalReducer from "../features/about/personalSlice";

export default configureStore({
	reducer: {
		familiar: familiarReducer,
		navbar: navbarReducer,
		project: projectReducer,
		personal: personalReducer
	},
});
