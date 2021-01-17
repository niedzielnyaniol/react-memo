import GameState from '../types/GameState';

interface ExpandedGameState extends GameState {
  pairsLeft: number;
}

const KEY = '__game';

export const setToStorage = (values: ExpandedGameState): void => {
  localStorage.setItem(KEY, JSON.stringify(values));
};

export const getFromStorage = (): ExpandedGameState => {
  const values = localStorage.getItem(KEY);

  if (!values) {
    return {
      boardSize: 'small',
      cards: [],
      cols: 0,
      rows: 0,
      uncoveredCard: null,
      isGameFreezed: false,
      pairsLeft: 0,
      state: null,
    };
  }

  return JSON.parse(values);
};
