import { configureStore } from "@reduxjs/toolkit";
import moveReducer from "../features/swiper/moveSlice";
import generateReducer from "../features/swiper/generateSlice";

export default configureStore({
	reducer: {
		swiper_slide: moveReducer,
		swiper_generate: generateReducer,
	},
});
