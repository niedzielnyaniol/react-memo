import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NewGameForm from '../../NewGameForm/NewGameForm';

import { setName } from '../../../reducers/user.slice';
import { setBoardSize } from '../../../reducers/game.slice';
import { RootState } from '../../../utils/store';

import { StyledFormContainer } from './Home.styles';

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const { name, size } = useSelector((state: RootState) => ({
    name: state.user.name,
    size: state.game.boardSize,
  }));

  return (
    <StyledFormContainer>
      <NewGameForm
        username={name}
        boardSize={size}
        onSubmit={({ username, boardSize }) => {
          dispatch(setName(username));
          dispatch(setBoardSize(boardSize));
        }}
      />
    </StyledFormContainer>
  );
};

export default Home;
