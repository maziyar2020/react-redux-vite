import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload

            //check item is already exits
            const exitsItem = state.itemsList.find(item => item.id === newItem.id)

            if (exitsItem) {
                exitsItem.quantity++;
                exitsItem.totalPrice += newItem.price
            } else {
                state.itemsList = [
                    ...state.itemsList,
                    {
                        id: newItem.id,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice: newItem.price,
                        name: newItem.name,
                        cover: newItem.cover,
                    }
                ]
                state.totalQuantity++;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload
            const existingItem = state.itemsList.find(item => item.id === id)

            if (existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
                console.log(state.itemsList);
                state.totalQuantity--
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price
            }
        }
    },
})

export const cartActions = cartSlice.actions

export default cartSlice;