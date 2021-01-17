/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { AppThunk } from '../utils/store';

type Time = {
  counter: number;
  isActive: boolean;
};

const initialState: Time = {
  counter: 0,
  isActive: false,
};

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    start: (state) => {
      state.counter = 0;
    },
    increment: (state) => {
      state.counter += 1;
    },
  },
});

const { start, increment } = timeSlice.actions;

let interval: NodeJS.Timeout;

const startTimer = (): AppThunk => (dispatch) => {
  dispatch(start());

  interval = setInterval(() => {
    dispatch(increment());
  }, 1000);
};

const stopTimer = (): void => {
  if (interval) {
    clearInterval(interval);
  }
};

export default timeSlice.reducer;
export { startTimer, stopTimer };
