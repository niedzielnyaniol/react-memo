import { Typography } from 'antd';

import LeadersTable from '../../organisms/LeadersTable';

const { Title } = Typography;

const Leaderboard = (): JSX.Element => (
  <>
    <Title>Leaderboard</Title>
    <LeadersTable />
  </>
);

export default Leaderboard;
