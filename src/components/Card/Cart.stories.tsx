import React, { ComponentType, useState } from 'react';

import Card from './Card';
import CardProps from './Card.types';

const defaultArgs: CardProps = {
  src: 'src',
  alt: 'blah',
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
  title: 'Card',
  components: Card,
  decorators: [
    (Story: ComponentType): JSX.Element => (
      <div style={{ width: 300, height: 300 }}>
        <Story />
      </div>
    ),
  ],
};
