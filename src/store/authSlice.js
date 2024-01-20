import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'Auth',
    initialState: { loggedIn: false },
    reducers: {
        login(state) {
            state.loggedIn = true
        },
        logOut(state) {
            state.loggedIn = false
        }
    }
})


export const authActions = authSlice.actions
export default authSlice