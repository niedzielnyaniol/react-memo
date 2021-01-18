import styled from 'styled-components';

const StyledContainer = styled.div<{
  cols: number;
  rows: number;
}>`
  display: grid;
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  gap: 10px;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
`;

export { StyledContainer };
