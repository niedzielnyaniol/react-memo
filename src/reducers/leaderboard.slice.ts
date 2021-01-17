/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import BoardSize from '../models/BoardSize';

import Leaderboard, { Result } from '../types/Leaderboard';
import getLeaderboardData from '../utils/getLeaderboardData';
// eslint-disable-next-line import/no-cycle
import { AppThunk } from '../utils/store';

const KEY = '__leaderboard';

const initialState: Leaderboard = localStorage.getItem(KEY)
  ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    JSON.parse(localStorage.getItem(KEY))
  : { results: getLeaderboardData(), currentPlace: null };

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<{ result: Result; boardSize: BoardSize }>) => {
      const { result, boardSize } = action.payload;

      state.results[boardSize].push(result);
      state.results[boardSize].sort((a, b) => {
        return b.score - a.score;
      });
      state.results[boardSize].pop();

      state.currentPlace = state.results[boardSize].indexOf(result) + 1;

      localStorage.setItem(KEY, JSON.stringify(state));
    },
    deleteCurrentPlace: (state) => {
      state.currentPlace = null;
    },
  },
});

const { addResult, deleteCurrentPlace } = leaderboardSlice.actions;

const saveResult = (): AppThunk => (dispatch, getStore) => {
  const { time, user, leaderboard, game, score } = getStore();
  const { boardSize } = game;
  const results = leaderboard.results[boardSize];

  if (score.value > results[results.length - 1].score) {
    const result: Result = {
      score: score.value,
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
