import { useSelector, useDispatch } from 'react-redux';

import CardComponent, { CardProps } from '../../atoms/Card';

import Card from '../../../models/Card';
import { handleCardClick } from '../../../reducers/game.slice';
import { RootState } from '../../../utils/store';

import { StyledContainer } from './Board.styles';

const getCard = (card: Card, cardClick: (id: number) => void): JSX.Element => {
  let side: CardProps['side'] = 'back';
  const { state, cardId, uniqueId } = card;

  if (state === 'hidden') {
    return <div key={`hidden_${uniqueId}`} />;
  }

  if (state === 'uncovered') {
    side = 'front';
  }

  return <CardComponent onClick={() => cardClick(uniqueId)} key={uniqueId} side={side} cardNumber={cardId} />;
};

const Board = (): JSX.Element => {
  const { cols, rows, cards, isGameFreezed, uncoveredCard } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  const cardClick = (id: number) => {
    const isTheSameCard = uncoveredCard?.uniqueId === id;

    if (!isGameFreezed && !isTheSameCard) {
      dispatch(handleCardClick(id));
    }
  };

  return (
    <StyledContainer rows={rows} cols={cols}>
      {cards.map((card) => getCard(card, cardClick))}
    </StyledContainer>
  );
};

export default Board;
