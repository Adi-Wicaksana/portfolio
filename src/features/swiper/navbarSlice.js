import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
	name: "navbar",
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
export const { move } = navbarSlice.actions;

export default navbarSlice.reducer;
