import React from 'react';

import CardProps from './Card.types';
import { StyledCard, StyledContent, StyledFront, StyledBack, StyledLine } from './Card.styles';

const Card = ({ cardNumber, side = 'back', onClick }: CardProps): JSX.Element => (
  <StyledCard onClick={onClick}>
    <StyledContent side={side}>
      <StyledFront>
        <StyledLine>{cardNumber}</StyledLine>
      </StyledFront>
      <StyledBack />
    </StyledContent>
  </StyledCard>
);

export default Card;
