import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
    name: "project",
    initialState: {
        index: 0
    },
    reducers: {
        move: (state, action) => {
            state.index = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { move } = projectSlice.actions;

export default projectSlice.reducer;