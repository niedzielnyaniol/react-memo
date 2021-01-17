const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  // eslint-disable-next-line no-param-reassign
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${hours.toString().padStart(2, '0')}h:${minutes.toString().padStart(2, '0')}m:${seconds
    .toString()
    .padStart(2, '0')}s`;
};

export default formatTime;
