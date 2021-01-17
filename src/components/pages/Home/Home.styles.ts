import styled from 'styled-components';

import { mq } from '../../../utils/media';

const StyledFormContainer = styled.div`
  ${mq.lg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
  `}
`;

export { StyledFormContainer };
