import React from 'react';

import Home from './Home';
import pageWrapper from '../../../utils/pageWrapper';

export const Default = (): JSX.Element => <Home />;

export default {
  title: 'pages/Home',
  container: Home,
  decorators: [pageWrapper],
};
