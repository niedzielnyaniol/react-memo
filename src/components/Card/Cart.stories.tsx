import React, { ComponentType } from 'react';

import Card, { CardProps } from './Card';

const defaultProps: CardProps = {
  src: 'src',
  alt: 'blah',
};

export const Default = (args: CardProps): JSX.Element => <Card {...args} />;
Default.args = defaultProps;

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
