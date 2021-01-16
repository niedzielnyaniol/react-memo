import React, { ComponentType } from 'react';

import Board from '.';
import BoardProps from './Board.types';

import BoardModel from '../../../models/Board';
import config from '../../../config';

const { BOARD_SIZES } = config;

const getCards = (size: BoardProps['size']) => new BoardModel(BOARD_SIZES[size].rows * BOARD_SIZES[size].cols).cards;

export const Default = (args: BoardProps): JSX.Element => <Board {...args} />;
Default.args = {
  size: 'small',
  cards: getCards('small'),
};

export const MediumBoard = Default.bind({});
MediumBoard.args = {
  size: 'medium',
  cards: getCards('medium'),
};

export const LargeBoard = Default.bind({});
LargeBoard.args = {
  size: 'large',
  cards: getCards('large'),
};

export default {
  title: 'molecules/Board',
  component: Board,
  decorators: [
    (Story: ComponentType): JSX.Element => (
      <div style={{ width: 1000, height: 1000 }}>
        <Story />
      </div>
    ),
  ],
};
