import BoardSize from '../models/BoardSize';

type BoardSizesConfig = { [key in BoardSize]: { cols: number; rows: number } };

const BOARD_SIZES: BoardSizesConfig = {
  small: { rows: 4, cols: 4 },
  medium: { rows: 5, cols: 5 },
  large: { rows: 5, cols: 6 },
};

export { BOARD_SIZES };
