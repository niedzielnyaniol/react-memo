import React, { ComponentType } from 'react';

import Home from './Home';
import Layout from '../../Layout/Layout';

export const Default = (): JSX.Element => <Home />;

export default {
  title: 'pages/Home',
  container: Home,
  decorators: [
    (Story: ComponentType): JSX.Element => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
};
