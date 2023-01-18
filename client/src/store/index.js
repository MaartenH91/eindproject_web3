import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorage";
import cartSlice from './cart/slice';
import {throttle} from "lodash";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    }
})

export default store;