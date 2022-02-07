/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import { AppThunk } from '../utils/store';

import config from '../config';

const {
  RULES: { POINTS },
} = config;

type Score = {
  value: number;
  increase: number;
  guessInRow: number;
  timeBonus: number;
};

const KEY = '__score';

const { value, guessInRow, increase, timeBonus } = localStorage.getItem(KEY)
  ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    JSON.parse(localStorage.getItem(KEY))
  : { value: 0, guessInRow: 0, increase: 0, timeBonus: 0 };

const initialState: Score = {
  value,
  guessInRow,
  increase,
  timeBonus,
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
    countTimeBonus: (state, action: PayloadAction<number>) => {
      state.timeBonus = Math.round(POINTS.TIME_NUMERATOR / action.payload);
      state.value += state.timeBonus;
    },
    resetScore: (state) => {
      state.value = 0;
      state.guessInRow = 0;
      state.increase = 0;
    },
  },
});

const { addPointsForQuess, resetScore, deductPointsForMistake, countTimeBonus } = scoreSlice.actions;

const addTimeBonus = (): AppThunk => (dispatch, getStore) => {
  const { counter } = getStore().time;

  dispatch(countTimeBonus(counter));
};

export default scoreSlice.reducer;

export { addPointsForQuess, resetScore, deductPointsForMistake, addTimeBonus };
