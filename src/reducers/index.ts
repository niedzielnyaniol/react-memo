import user from './user.slice';
// eslint-disable-next-line import/no-cycle
import game from './game.slice';
// eslint-disable-next-line import/no-cycle
import time from './time.slice';
// eslint-disable-next-line import/no-cycle
import leaderboard from './leaderboard.slice';
import statistics from './statistics.slice';

export { user, game, time, statistics, leaderboard };
