import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Board from '../../molecules/Board';
import CongratsModal from '../../molecules/CongratsModal';

import { start as startGame } from '../../../reducers/game.slice';
import { startTimer } from '../../../reducers/time.slice';

import { StyledContainer } from './Game.styles';
import { RootState } from '../../../utils/store';

const Game = (): JSX.Element => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game.state);

  useEffect(() => {
    if (gameState === null) {
      dispatch(startGame());
    } else if (gameState === 'started') {
      dispatch(startTimer());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer>
      <CongratsModal />
      <Board />
    </StyledContainer>
  );
};

export default Game;
