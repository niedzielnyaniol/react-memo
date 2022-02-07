import Home from './Home';
import pageWrapper from '../../../utils/pageWrapper';

export const Default = (): JSX.Element => <Home />;

export default {
  container: Home,
  decorators: [pageWrapper],
};
