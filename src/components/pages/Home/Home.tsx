import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import NewGameForm from '../../molecules/NewGameForm';

import BoardSize from '../../../models/BoardSize';
import { setName } from '../../../reducers/user.slice';
import { start as startGame } from '../../../reducers/game.slice';
import { RootState } from '../../../utils/store';
import config from '../../../config';

import { StyledFormContainer } from './Home.styles';

const { ROUTES } = config;

type HandleSubmitArgs = {
  username: string;
  boardSize: BoardSize;
};

const Home = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { name, size } = useSelector((state: RootState) => ({
    name: state.user.name,
    size: state.game.boardSize,
  }));
  const handleSubmit = ({ username, boardSize }: HandleSubmitArgs) => {
    dispatch(setName(username));
    dispatch(startGame(boardSize));

    history.push(ROUTES.GAME.href);
  };

  return (
    <StyledFormContainer>
      <NewGameForm username={name} boardSize={size} onSubmit={handleSubmit} />
    </StyledFormContainer>
  );
};

export default Home;
