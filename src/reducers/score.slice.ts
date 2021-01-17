/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import config from '../config';

const {
  RULES: { POINTS },
} = config;

type Score = {
  value: number;
  increase: number;
  guessInRow: number;
};

const KEY = '__score';

const { value, guessInRow, increase } = localStorage.getItem(KEY)
  ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    JSON.parse(localStorage.getItem(KEY))
  : { value: 0, guessInRow: 0, increase: 0 };

const initialState: Score = {
  value,
  guessInRow,
  increase,
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addPointsForQuess: (state) => {
      const bonus = state.guessInRow * POINTS.GUESS_IN_ROW_MULTIPLIER;

      state.guessInRow += 1;
      state.increase = POINTS.GUESS + bonus;
      state.value += state.increase;
      localStorage.setItem(KEY, JSON.stringify(state));
    },
    deductPointsForMistake: (state) => {
      state.increase = POINTS.MISTAKE;
      state.value += state.increase;
      state.guessInRow = 0;
      localStorage.setItem(KEY, JSON.stringify(state));
    },
    resetScore: (state) => {
      state.value = 0;
      state.guessInRow = 0;
      state.increase = 0;
    },
  },
});

export const { addPointsForQuess, resetScore, deductPointsForMistake } = scoreSlice.actions;
export default scoreSlice.reducer;
