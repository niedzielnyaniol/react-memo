import BoardSize from '../models/BoardSize';

type BoardSizesConfig = { [key in BoardSize]: { cols: number; rows: number } };

const BOARD_SIZES: BoardSizesConfig = {
  small: { rows: 4, cols: 2 },
  medium: { rows: 4, cols: 3 },
  large: { rows: 4, cols: 4 },
};

export { BOARD_SIZES };
