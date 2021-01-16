import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import BoardSize from '../models/BoardSize';

type Game = {
  boardSize: BoardSize;
};

const initialState: Game = {
  boardSize: 'small',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setBoardSize: (state, action: PayloadAction<BoardSize>) => {
      return {
        ...state,
        boardSize: action.payload,
      };
    },
  },
});

export const { setBoardSize } = gameSlice.actions;
export default gameSlice.reducer;
