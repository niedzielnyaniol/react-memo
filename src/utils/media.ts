import { css } from 'styled-components';

import breakpoints from './breakpoints';

type Keys = keyof typeof breakpoints;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Breakpoints = { [key in Keys]: (...cssValue: any) => any };

export const mq: Breakpoints = Object.keys(breakpoints).reduce((acc, label) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  acc[label as Keys] = (first: any, ...interpolations: any[]) => css`
    @media (min-width: ${breakpoints[label as Keys]}) {
      ${css(first, ...interpolations)}
    }
  `;

  return acc;
}, {} as Breakpoints);

export { breakpoints };
