import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import counterSlice from "./components/counter/counter.slice";

export const store = configureStore({
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
  reducer: {
    counter: counterSlice,
  },
})


//
export type RootState = ReturnType<typeof store.getState>
//
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch) // rtk-query listen