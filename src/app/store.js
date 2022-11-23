import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import moveReducer from "../features/swiper/moveSlice";
import generateReducer from "../features/swiper/generateSlice";

export default configureStore({
	reducer: {
		counter: counterReducer,
		swiper_slide: moveReducer,
		swiper_generate: generateReducer
	},
});
