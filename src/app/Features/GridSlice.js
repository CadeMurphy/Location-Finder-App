import { createSlice } from "@reduxjs/toolkit";


export const GridSlice = createSlice ( {
    name: 'reducer',
    initialState: {
        startState: false,
        startVisibility: '',
        startCement: ''
    },
    reducers: {
        startToggle: (state, action) => {
            if(state.startState === false) {
                state.startState = true;
            } else {
                state.startState = false;
            }
        },
        startVisibilityToggle: (state, action) => {
            if (state.startVisibility === '') {
                state.startVisibility = action.payload
            } else if (state.startVisibility === action.payload) {
                if(state.startCement != action.payload) {
                    state.startVisibility = ''
                } else {
                    
                }
            }
        },
        startCementVisibilityToggle: (state, action) => {
             if (state.startCement === '') {
                state.startCement = action.payload
             } else {
                 state.startCement = ''
             }
        }
    }
})


export const {
    startToggle,
    startVisibilityToggle,
    startCementVisibilityToggle
} = GridSlice.actions;

export default GridSlice.reducer;


export const selectStartState = (state) => state.startState;
export const selectStartVisibilityState = (state) => state.startVisibility;
export const selectStartCementState = (state) => state.startCement;