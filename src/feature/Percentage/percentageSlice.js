import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}

export const percentageSlice = createSlice({
    name: "percentage",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        }
    }
})
export const { actions } = percentageSlice;

export const { increment, decrement, reset } = percentageSlice.actions

export default percentageSlice.reducer;