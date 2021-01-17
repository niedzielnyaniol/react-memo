import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Board from '../../molecules/Board';

import { startTimer } from '../../../reducers/time.slice';

import { StyledContainer } from './Game.styles';

const Game = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(startTimer());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer>
      <Board />
    </StyledContainer>
  );
};

export default Game;
