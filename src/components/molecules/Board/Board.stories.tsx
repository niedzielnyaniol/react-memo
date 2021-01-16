import React from 'react';

import Board from '.';
import BoardProps from './Board.types';

const defaultArgs: BoardProps = {
  size: 'small',
};

export const Default = (args: BoardProps): JSX.Element => <Board {...args} />;
Default.args = defaultArgs;

export default {
  title: 'molecules/Board',
  component: Board,
};
