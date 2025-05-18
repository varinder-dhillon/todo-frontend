import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./slices/board";

const store = configureStore({
    reducer:{
        boardSlice: boardSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;