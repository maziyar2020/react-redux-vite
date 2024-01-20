import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cardSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cardSlice.reducer,
        auth: authSlice.reducer
    }
})

export default store;