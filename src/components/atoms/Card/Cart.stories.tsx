import React, { ComponentType, useState } from 'react';
import { action } from '@storybook/addon-actions';

import Card from './Card';
import CardProps from './Card.types';

const defaultArgs: CardProps = {
  cardNumber: 1,
  onClick: action('onClick'),
};

export const Default = (args: CardProps): JSX.Element => <Card {...args} />;
Default.args = defaultArgs;

export const FrontSide = Default.bind({});
FrontSide.args = {
  ...defaultArgs,
  side: 'front',
};

export const Interactive = (args: CardProps): JSX.Element => {
  const [side, setSide] = useState<CardProps['side']>('back');
  const changeSide = () => setSide((prevState) => (prevState === 'back' ? 'front' : 'back'));

  return (
    <>
      <Card {...args} side={side} />
      <button type="button" onClick={changeSide}>
        flip
      </button>
    </>
  );
};
Interactive.args = defaultArgs;

export default {
  title: 'atoms/Card',
  components: Card,
};
