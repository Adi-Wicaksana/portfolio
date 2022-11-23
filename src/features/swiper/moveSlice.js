import { createSlice } from "@reduxjs/toolkit";

export const moveSlice = createSlice({
	name: "swiper_slide",
	initialState: {
		index: '0',
	},
	reducers: {
		move: (state, action) => {
			state.index = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { move } = moveSlice.actions;

export default moveSlice.reducer;
