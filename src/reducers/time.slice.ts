/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { AppThunk } from '../utils/store';

const KEY = '__time';

type Time = {
  counter: number;
};

const initialState: Time = {
  counter: parseInt(localStorage.getItem(KEY) || '0', 10),
};

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    reset: (state) => {
      state.counter = 0;
    },
    increment: (state) => {
      state.counter += 1;
      localStorage.setItem(KEY, state.counter.toString());
    },
  },
});

const { reset, increment } = timeSlice.actions;

let interval: NodeJS.Timeout;

const startTimer = (): AppThunk => (dispatch) => {
  interval = setInterval(() => {
    dispatch(increment());
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  }, 1000);
};

const resetTimer = (): AppThunk => (dispatch) => {
  dispatch(reset());
  dispatch(startTimer());
};

const stopTimer = (): void => {
  if (interval) {
    clearInterval(interval);
  }
};

export default timeSlice.reducer;

export { startTimer, stopTimer, resetTimer };
