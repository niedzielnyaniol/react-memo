import React from 'react';
import { useSelector } from 'react-redux';
import { Statistic } from 'antd';

import { RootState } from '../../../../utils/store';

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

const Time = (): JSX.Element => {
  const { counter } = useSelector((state: RootState) => state.time);

  return <Statistic title="Time" value={formatTime(counter)} />;
};

export default Time;
