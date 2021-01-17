import BoardSize from '../models/BoardSize';

type BoardSizesConfig = { [key in BoardSize]: { cols: number; rows: number } };

const BOARD_SIZES: BoardSizesConfig = {
  small: { rows: 3, cols: 4 },
  medium: { rows: 4, cols: 4 },
  large: { rows: 5, cols: 4 },
};

export { BOARD_SIZES };
