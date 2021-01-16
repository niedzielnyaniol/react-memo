import BoardSize from '../models/BoardSize';
import Origin from '../models/Origin';

type BoardSizesConfig = { [key in BoardSize]: Origin };

const BOARD_SIZES: BoardSizesConfig = {
  small: new Origin(4, 4),
  medium: new Origin(6, 6),
  large: new Origin(10, 10),
};

export { BOARD_SIZES };
