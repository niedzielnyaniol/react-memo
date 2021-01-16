import React, { ComponentType } from 'react';
import { Provider } from 'react-redux';

import Layout from '../components/organisms/Layout/Layout';

import { store } from './store';

const pageWrapper = (Story: ComponentType): JSX.Element => (
  <Provider store={store}>
    <Layout>
      <Story />
    </Layout>
  </Provider>
);

export default pageWrapper;
