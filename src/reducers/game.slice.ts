/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { reset as resetStatistics, decrementPairs } from './statistics.slice';

import Board from '../models/Board';
import Card from '../models/Card';
import BoardSize from '../models/BoardSize';
import GameState from '../types/GameState';
import { setToStorage, getFromStorage } from '../utils/gameToStorage';
// eslint-disable-next-line import/no-cycle
import { AppThunk } from '../utils/store';
import config from '../config';

const { BOARD_SIZES } = config;

const initialState: GameState = getFromStorage();

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setInitialValues: (
      state,
      action: PayloadAction<{
        boardSize: BoardSize;
        cards: Array<Card>;
        cols: number;
        rows: number;
      }>,
    ) => {
      const { boardSize, cards, cols, rows } = action.payload;

      state.isGameFreezed = false;
      state.uncoveredCard = null;
      state.boardSize = boardSize;
      state.cards = cards;
      state.cols = cols;
      state.rows = rows;

      setToStorage(state);
    },
    setUncoveredCard: (state, action: PayloadAction<number>) => {
      state.cards[action.payload].state = 'uncovered';
      state.uncoveredCard = state.cards[action.payload];
    },
    uncoverSecondCard: (state, action: PayloadAction<number>) => {
      state.isGameFreezed = true;
      state.cards[action.payload].state = 'uncovered';
    },
    onGuess: (state, action: PayloadAction<number>) => {
      state.cards[action.payload].state = 'hidden';

      if (state.uncoveredCard) {
        state.cards[state.uncoveredCard.uniqueId].state = 'hidden';
      }

      state.uncoveredCard = null;
      state.isGameFreezed = false;
    },
    onMistake: (state, action: PayloadAction<number>) => {
      state.cards[action.payload].state = 'covered';

      if (state.uncoveredCard) {
        state.cards[state.uncoveredCard.uniqueId].state = 'covered';
      }

      state.uncoveredCard = null;
      state.isGameFreezed = false;
    },
  },
});

const { setInitialValues, uncoverSecondCard, setUncoveredCard, onGuess, onMistake } = gameSlice.actions;

const start = (boardSize: BoardSize): AppThunk => (dispatch) => {
  const { cols, rows } = BOARD_SIZES[boardSize];
  const { cards } = new Board(rows * cols);

  dispatch(resetStatistics((cols * rows) / 2));
  dispatch(
    setInitialValues({
      boardSize,
      cards,
      cols,
      rows,
    }),
  );
};

const handleCardClick = (id: number): AppThunk => (dispatch, getState) => {
  const { uncoveredCard, cards } = getState().game;
  const card = cards[id];

  if (!uncoveredCard) {
    dispatch(setUncoveredCard(id));
  } else {
    dispatch(uncoverSecondCard(id));

    setTimeout(() => {
      if (uncoveredCard.cardId === card.cardId) {
        dispatch(onGuess(id));
        dispatch(decrementPairs());
      } else {
        dispatch(onMistake(id));
      }
    }, 1000);
  }
};

export default gameSlice.reducer;
export { start, handleCardClick };
