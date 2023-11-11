import { configureStore } from "@reduxjs/toolkit";
import  currentTempSlice from "./currentTempSlice";

const store = configureStore({
    reducer:  currentTempSlice.reducer
});

export default store;
