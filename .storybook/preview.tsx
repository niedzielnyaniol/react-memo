import React, { ComponentType } from 'react';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.min.css';

import theme from '../src/utils/theme';
import GlobalStyle from '../src/utils/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story: ComponentType) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];
