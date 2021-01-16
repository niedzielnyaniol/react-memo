import React from 'react';

import NewGameForm from '../../NewGameForm/NewGameForm';

import { StyledFormContainer } from './Home.styles';

const Home = (): JSX.Element => (
  <StyledFormContainer>
    <NewGameForm
      onSubmit={(values) => {
        console.log(values);
      }}
    />
  </StyledFormContainer>
);

export default Home;
