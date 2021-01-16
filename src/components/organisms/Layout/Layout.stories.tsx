import React from 'react';

import Layout from '.';
import LayoutProps from './Layout.types';

const Box = (): JSX.Element => <div style={{ width: '100%', height: 400, background: 'green' }}>children</div>;

export const Default = (args: LayoutProps): JSX.Element => (
  <Layout {...args}>
    <Box />
  </Layout>
);

export default {
  title: 'organisms/Layout',
  component: Layout,
};
