import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorage";
import {reducer as cartReducer} from './cart/slice';
import {throttle} from "lodash";

const loadedStateFromLocalStorage = loadState();

export const store = configureStore({
    reducer: cartReducer,
    preloadedState: loadedStateFromLocalStorage,
})

store.subscribe(
    throttle(
        () => {
            saveState(store.getState())
        }, 1000
    )
)


