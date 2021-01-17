import React from 'react';
import { useSelector } from 'react-redux';
import { Statistic, Row, Col, Card } from 'antd';

import Time from './Time';

import { RootState } from '../../../utils/store';

const Statistics = (): JSX.Element => {
  const { pairsLeft, points } = useSelector((state: RootState) => state.statistics);

  return (
    <Card>
      <Row gutter={16}>
        <Col span={8}>
          <Statistic title="Points" value={points} />
        </Col>
        <Col span={8}>
          <Time />
        </Col>
        <Col span={8}>
          <Statistic title="Pairs left" value={pairsLeft} />
        </Col>
      </Row>
    </Card>
  );
};

export default Statistics;
