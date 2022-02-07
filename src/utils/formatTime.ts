const PAD_START = 2;
const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = 3600;

const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / HOUR_IN_SECONDS);
  // eslint-disable-next-line no-param-reassign
  totalSeconds %= HOUR_IN_SECONDS;
  const minutes = Math.floor(totalSeconds / MINUTE_IN_SECONDS);
  const seconds = totalSeconds % MINUTE_IN_SECONDS;

  return `${hours.toString().padStart(PAD_START, '0')}h:${minutes.toString().padStart(PAD_START, '0')}m:${seconds
    .toString()
    .padStart(PAD_START, '0')}s`;
};

export default formatTime;
