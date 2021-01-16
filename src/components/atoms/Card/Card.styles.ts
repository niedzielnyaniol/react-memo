import styled, { css } from 'styled-components';

import CardProps from './Card.types';

const StyledCard = styled.div`
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
  perspective: 500px;
  cursor: pointer;
`;

const StyledContent = styled.div<{ side: CardProps['side'] }>`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  transition: transform ${({ theme }) => theme.animation.duration.normal};

  ${({ side }) =>
    side === 'back' &&
    css`
      transform: rotateY(180deg);
      transition: transform ${({ theme }) => theme.animation.duration.normal};
    `}
`;

const StyledFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #03446a;
  font-size: 60px;
  line-height: 300px;
  text-align: center;
  background: white;
  border-radius: 5px;
  backface-visibility: hidden;
`;

const StyledBack = styled(StyledFront)`
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  transform: rotateY(180deg);
`;

export { StyledCard, StyledContent, StyledFront, StyledBack };
