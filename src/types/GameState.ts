import Card from '../models/Card';
import BoardSize from '../models/BoardSize';

type GameStates = {
  boardSize: BoardSize;
  cards: Array<Card>;
  cols: number;
  rows: number;
  uncoveredCard: Card | null;
  isGameFreezed: boolean;
};

export default GameStates;
