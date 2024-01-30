import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null
}


const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.state = action.payload
        },
        clearUser: (state) => {
            state.user = null; // Clear the user object
        },
    }
})

export const { setUsers, clearUser } = userSlice.actions
export default userSlice.actions