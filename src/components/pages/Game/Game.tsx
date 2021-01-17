import React from 'react';

import Board from '../../molecules/Board';

import { StyledContainer } from './Game.styles';

const Game = (): JSX.Element => (
  <StyledContainer>
    <Board />
  </StyledContainer>
);

export default Game;
