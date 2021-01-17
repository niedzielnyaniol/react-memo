/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  points: number;
  pairsLeft: number;
};

const initialState: User = {
  points: 0,
  pairsLeft: 0,
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    reset: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.pairsLeft = action.payload;
      state.points = 0;
    },
    addPoints: (state, action: PayloadAction<number>) => {
      state.points += action.payload;
    },
    decrementPairs: (state) => {
      state.pairsLeft -= 1;
    },
  },
});

export const { reset, addPoints, decrementPairs } = statisticsSlice.actions;
export default statisticsSlice.reducer;
