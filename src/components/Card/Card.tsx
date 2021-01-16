import React from 'react';

import CardProps from './Card.types';
import { StyledCard, StyledContent, StyledFront, StyledBack } from './Card.styles';

const Card = ({ src, alt, side = 'back' }: CardProps): JSX.Element => (
  <StyledCard>
    <StyledContent side={side}>
      <StyledFront>{src}</StyledFront>
      <StyledBack>Back!</StyledBack>
    </StyledContent>
  </StyledCard>
);

export default Card;
