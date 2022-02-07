import faker from 'faker';

import { Result, Results } from '../types/Leaderboard';
import { BOARD_SIZES } from '../config/BoardSizes';

const getResults = (): Array<Result> => {
  const result: Array<Result> = [];

  for (let i = 10; i > 0; i -= 1) {
    result.push({
      username: faker.internet.userName(),
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      score: i * 50,
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      time: i * 11,
    });
  }

  return result;
};

const getLeaderboardData = (): Results => {
  const results = {};

  Object.keys(BOARD_SIZES).forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    results[key] = getResults();
  });

  return results as Results;
};

export default getLeaderboardData;
