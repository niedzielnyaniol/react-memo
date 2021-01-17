import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'antd';

import { start as startGame } from '../../../reducers/game.slice';
import { RootState } from '../../../utils/store';
import formatTime from '../../../utils/formatTime';
import config from '../../../config';

const { ROUTES } = config;

const CongratsModal = (): JSX.Element => {
  const dispatch = useDispatch();
  const { points, isWon, username, time } = useSelector((state: RootState) => ({
    points: state.statistics.points,
    isWon: state.game.state === 'won',
    username: state.user.name,
    time: state.time.counter,
  }));

  const handleClick = () => {
    dispatch(startGame());
  };

  return (
    <Modal
      title={`You won ${username}! 🎉`}
      visible={isWon}
      closable={false}
      footer={[
        <Button type="primary" onClick={handleClick}>
          Play again
        </Button>,
      ]}
    >
      <p>Your points: {points}</p>
      <p>Your time: {formatTime(time)}</p>
      <p>
        Check your result on <Link to={ROUTES.LEADERBOARD.href}>leaderboard</Link>
      </p>
    </Modal>
  );
};

export default CongratsModal;
