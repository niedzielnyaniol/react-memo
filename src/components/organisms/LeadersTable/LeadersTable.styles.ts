import styled from 'styled-components';
import { Select } from 'antd';

const { Option } = Select;

const StyledSelectWrapper = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;

const StyledSelect = styled(Select)`
  min-width: 105px;
  margin-left: 8px;
`;

const StyledOption = styled(Option)`
  text-transform: capitalize;
`;

export { StyledSelectWrapper, StyledSelect, StyledOption };
