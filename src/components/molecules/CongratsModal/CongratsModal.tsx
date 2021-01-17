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
  const { score, isWon, username, time, place, boardSize, timeBonus } = useSelector((state: RootState) => ({
    score: state.score.value,
    isWon: state.game.state === 'won',
    username: state.user.name,
    time: state.time.counter,
    place: state.leaderboard.currentPlace,
    boardSize: state.game.boardSize,
    timeBonus: state.score.timeBonus,
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
      <p>
        Your score: {score} (+{timeBonus} as time bonus)
      </p>
      <p>Your time: {formatTime(time)}</p>
      {place && (
        <p>
          You took {place} place in the category {boardSize} <Link to={ROUTES.LEADERBOARD.href}>check leaderboard</Link>
        </p>
      )}
    </Modal>
  );
};

export default CongratsModal;
