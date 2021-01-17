/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { reset as resetStatistics, decrementPairs } from './statistics.slice';

import Board from '../models/Board';
import Card from '../models/Card';
import BoardSize from '../models/BoardSize';
import GameState from '../types/GameState';
import { setToStorage, getFromStorage } from '../utils/gameToStorage';
// eslint-disable-next-line import/no-cycle
import { stopTimer, resetTimer } from './time.slice';
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
        cards: Array<Card>;
        cols: number;
        rows: number;
      }>,
    ) => {
      const { cards, cols, rows } = action.payload;

      state.isGameFreezed = false;
      state.uncoveredCard = null;
      state.cards = cards;
      state.cols = cols;
      state.rows = rows;
      state.state = 'started';

      setToStorage({ ...state, pairsLeft: (cols * rows) / 2 });
    },
    setUncoveredCard: (state, action: PayloadAction<number>) => {
      const cards = [...state.cards];

      cards[action.payload] = {
        ...state.cards[action.payload],
        state: 'uncovered',
      };

      return {
        ...state,
        cards,
        uncoveredCard: cards[action.payload],
      };
    },
    uncoverSecondCard: (state, action: PayloadAction<number>) => {
      const cards = [...state.cards];

      cards[action.payload] = {
        ...state.cards[action.payload],
        state: 'uncovered',
      };

      return {
        ...state,
        isGameFreezed: true,
        cards,
      };
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
    saveState: (state, action: PayloadAction<number>) => {
      setToStorage({ ...state, pairsLeft: action.payload });
    },
    setGameAsWon: (state) => {
      state.state = 'won';
    },
    setBoardSize: (state, action: PayloadAction<BoardSize>) => {
      state.boardSize = action.payload;
      state.state = null;
    },
  },
});

const {
  setInitialValues,
  uncoverSecondCard,
  setUncoveredCard,
  onGuess,
  onMistake,
  saveState,
  setGameAsWon,
  setBoardSize,
} = gameSlice.actions;

const start = (): AppThunk => (dispatch, getState) => {
  const { boardSize } = getState().game;
  const { cols, rows } = BOARD_SIZES[boardSize];
  const { cards } = new Board(rows * cols);

  dispatch(resetStatistics((cols * rows) / 2));
  dispatch(
    setInitialValues({
      cards,
      cols,
      rows,
    }),
  );
  dispatch(resetTimer());
};

const handleGameWon = (): AppThunk => (dispatch) => {
  dispatch(setGameAsWon());
  stopTimer();
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

      const { pairsLeft } = getState().statistics;

      if (pairsLeft === 0) {
        dispatch(handleGameWon());
      }

      dispatch(saveState(pairsLeft));
    }, 1000);
  }
};

export default gameSlice.reducer;
export { start, handleCardClick, setBoardSize };
