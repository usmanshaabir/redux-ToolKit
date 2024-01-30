import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: ["dsds"]
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.items.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => { item.id !== action.payload.id })
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const { addCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;