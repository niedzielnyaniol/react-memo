import React from 'react';

import NewGameForm from '.';
import NewGameFormProps from './NewGameForm.types';

export const Default = (args: NewGameFormProps): JSX.Element => <NewGameForm {...args} />;

export const Filled = (args: NewGameFormProps): JSX.Element => <NewGameForm {...args} />;
Filled.args = {
  username: 'John',
  boardSize: 'medium',
};

export default {
  title: 'NewGameForm',
  component: NewGameForm,
};
