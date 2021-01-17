import GameState from '../types/GameState';

const KEY = '__game';

export const setToStorage = (values: GameState): void => {
  localStorage.setItem(KEY, JSON.stringify(values));
};

export const getFromStorage = (): GameState => {
  const values = localStorage.getItem(KEY);

  if (!values) {
    return {
      boardSize: 'small',
      cards: [],
      cols: 0,
      rows: 0,
      uncoveredCard: null,
      isGameFreezed: false,
    };
  }

  return JSON.parse(values);
};
