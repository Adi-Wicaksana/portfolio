import { createSlice } from "@reduxjs/toolkit";

export const personalSlice = createSlice({
    name: "personal",
    initialState: {
        age: '0',
        experience: '0'
    },
    reducers: {
        myAge: (state, action) => {
            var today = new Date();
            var birthDate = new Date('1996-04-11');
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            state.age = age;
        },
        myExperience: (state, action) => {
            var today = new Date();
            var start = new Date('2018-10-18');
            var experience = today.getFullYear() - start.getFullYear();
            var m = today.getMonth() - start.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < start.getDate())) {
                experience--;
            }
            state.experience = experience;
        },
    },
});

// Action creators are generated for each case reducer function
export const { myAge, myExperience } = personalSlice.actions;

export default personalSlice.reducer;
