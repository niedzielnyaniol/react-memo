import React from 'react';

import CardComponent, { CardProps } from '../../atoms/Card';

import Card from '../../../models/Card';
import BoardProps from './Board.types';
import config from '../../../config';

import { StyledContainer } from './Board.styles';

const getCard = (card: Card): JSX.Element => {
  let side: CardProps['side'] = 'back';
  const { state, cardId, uniqueId } = card;

  if (state === 'hidden') {
    return <div key={`hidden_${uniqueId}`} />;
  }

  if (state === 'uncovered') {
    side = 'front';
  }

  return <CardComponent key={uniqueId} side={side} src={cardId.toString()} alt={cardId.toString()} />;
};

const { BOARD_SIZES } = config;

const Board = ({ size, cards }: BoardProps): JSX.Element => {
  const { cols, rows } = BOARD_SIZES[size];

  return (
    <StyledContainer rows={rows} cols={cols}>
      {cards.map((card) => getCard(card))}
    </StyledContainer>
  );
};

export default Board;
