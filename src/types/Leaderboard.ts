import BoardSize from '../models/BoardSize';

type Result = {
  username: string;
  score: number;
  time: number;
};

type Results = {
  [key in BoardSize]: Array<Result>;
};

type Leaderboard = {
  results: Results;
  currentPlace: number | null;
};

export default Leaderboard;
export type { Result, Results };
