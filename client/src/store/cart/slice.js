import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {init} from "express/lib/middleware/init";

const initialState = {
    cartItems: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action){
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.productId === newItem.productId);
            if (!existingItem){
                state.cartItems.push({
                    title: newItem.title,
                    productId: newItem.productId,
                    qty:1,
                    totalProductPrice: newItem.price
                })
                state.totalPrice += newItem.price
            }
            else {
                existingItem.qty++;
                existingItem.totalProductPrice += existingItem.price
                state.totalPrice += existingItem.price
            }
        },
        removeItem(state, action){
            const productId = action.payload
            const existingItem = state.cartItems.find(item=>item.productId === productId)

            if (existingItem){
                state.cartItems = state.cartItems.filter(item=>item.productId !== productId)
            }

        }
    }

})

export const cartActions = cartSlice.actions
export default cartSlice