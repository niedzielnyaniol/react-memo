import React from 'react';
import { useSelector } from 'react-redux';
import { Statistic } from 'antd';

import { RootState } from '../../../../utils/store';
import formatTime from '../../../../utils/formatTime';

const Time = (): JSX.Element => {
  const { counter } = useSelector((state: RootState) => state.time);

  return <Statistic title="Time" value={formatTime(counter)} />;
};

export default Time;
