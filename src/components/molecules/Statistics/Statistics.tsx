import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme, DefaultTheme } from 'styled-components';
import { Statistic, Row, Col, Card } from 'antd';

import Time from './Time';

import { RootState } from '../../../utils/store';

const formatScore = (score: number, increase: number): string => {
  if (increase && increase !== score) {
    return `${score} (${increase > 0 ? '+' : ''}${increase})`;
  }

  return score.toString();
};

type ValueStyle = { color: string } | undefined;

const getValueStyle = (increase: number, theme: DefaultTheme): ValueStyle => {
  let style;

  if (increase > 0) {
    style = { color: theme.colors.success };
  } else if (increase < 0) {
    style = { color: theme.colors.error };
  }

  return style;
};

const Statistics = (): JSX.Element => {
  const theme = useTheme();
  const { pairsLeft, score, increase } = useSelector((state: RootState) => ({
    pairsLeft: state.game.pairsLeft,
    score: state.score.value,
    increase: state.score.increase,
  }));

  return (
    <Card>
      <Row gutter={16}>
        <Col span={6}>
          <Statistic title="Score" valueStyle={getValueStyle(increase, theme)} value={formatScore(score, increase)} />
        </Col>
        <Col span={6}>
          <Time />
        </Col>
        <Col span={6}>
          <Statistic title="Pairs left" value={pairsLeft} />
        </Col>
      </Row>
    </Card>
  );
};

export default Statistics;
