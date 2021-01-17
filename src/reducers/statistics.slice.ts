/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFromStorage } from '../utils/gameToStorage';

type Statistics = {
  points: number;
  pairsLeft: number;
};

const { pairsLeft } = getFromStorage();

const initialState: Statistics = {
  points: 0,
  pairsLeft,
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    reset: (state, action: PayloadAction<number>) => {
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
