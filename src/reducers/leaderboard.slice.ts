/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import BoardSize from '../models/BoardSize';

import Leaderboard, { Result } from '../types/Leaderboard';
import getLeaderboardData from '../utils/getLeaderboardData';
// eslint-disable-next-line import/no-cycle
import { AppThunk } from '../utils/store';

const KEY = '__leaderboard';

const initialState: Leaderboard = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  results: localStorage.getItem(KEY) ? JSON.parse(localStorage.getItem(KEY)) : getLeaderboardData(),
  currentPlace: null,
};

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<{ result: Result; boardSize: BoardSize }>) => {
      const { result, boardSize } = action.payload;

      state.results[boardSize].push(result);
      state.results[boardSize].sort((a, b) => {
        return b.points - a.points;
      });
      state.results[boardSize].pop();

      state.currentPlace = state.results[boardSize].indexOf(result);

      localStorage.setItem(KEY, JSON.stringify(state));
    },
    deleteCurrentPlace: (state) => {
      state.currentPlace = null;
    },
  },
});

const { addResult, deleteCurrentPlace } = leaderboardSlice.actions;

const saveResult = (): AppThunk => (dispatch, getStore) => {
  const { statistics, time, user, leaderboard, game } = getStore();
  const { points } = statistics;
  const { boardSize } = game;
  const results = leaderboard.results[boardSize];

  if (points > results[results.length - 1].points) {
    const result: Result = {
      points,
      time: time.counter,
      username: user.name,
    };

    dispatch(addResult({ result, boardSize }));
  } else {
    dispatch(deleteCurrentPlace());
  }
};

export default leaderboardSlice.reducer;
export { saveResult };
