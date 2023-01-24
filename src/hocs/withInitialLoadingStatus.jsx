import { LOADING, REJECTED } from '../helpers/loadingStatus';

import Spinner from '../components/spinner/Spinner';
import ErrorPlug from '../components/errorPlug/ErrorPlug';

// eslint-disable-next-line react/display-name
const withInitialLoadingStatus = Component => props => {
  // eslint-disable-next-line react/prop-types
  const { initialLoading } = props;

  if (initialLoading === LOADING) return <Spinner />;
  if (initialLoading === REJECTED) return <ErrorPlug />;

  return <Component {...props} />;
};

export default withInitialLoadingStatus;
