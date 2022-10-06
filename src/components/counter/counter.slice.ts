import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface CounterState {
  count: number
}

var initailState: CounterState = {
  count: 0,
}

export const counterSlice = createSlice({
  initailState,
  name: 'counter',
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrementByAmount(state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
})


// After action creators are generated for each reducer methods/functions
export const { increment, decrement, incrementByAmount, decrementByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;