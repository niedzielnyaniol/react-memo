import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import { mq } from '../../../utils/media';

import CardProps from './Card.types';

const StyledCard = styled.div`
  position: relative;
  float: left;
  width: 60px;
  height: 85px;
  perspective: 500px;
  cursor: pointer;

  ${mq.sm`
    width: 92px;
    height: 130px;
  `}
`;

const StyledContent = styled.div<{ side: CardProps['side'] }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: 0 0 15px ${({ theme }) => lighten(0.9, theme.colors.black)};
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
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #03446a;
  font-size: 60px;
  backface-visibility: hidden;
`;

const StyledBack = styled(StyledFront)`
  background: url('/card_back_bg.png');
  background-size: contain;
  transform: rotateY(180deg);
`;

const StyledLine = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 80%;
  font-size: 42px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};

  ${mq.sm`
    font-size: 72px;
  `}
`;

export { StyledCard, StyledContent, StyledFront, StyledBack, StyledLine };
