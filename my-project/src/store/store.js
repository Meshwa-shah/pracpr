import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "../slice/slice";

export const store = configureStore({
reducer: {
    items: itemsSlice.reducer
}, 
});