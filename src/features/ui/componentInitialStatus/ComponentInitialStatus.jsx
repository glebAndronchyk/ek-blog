import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { LOADING, REJECTED } from 'helpers/loadingStatus';

import Spinner from 'features/ui/spinner/Spinner';
import ErrorPlug from 'features/ui/errorPlug/ErrorPlug';

const ComponentInitialStatus = props => {
  const { children, entity } = props;
  const { initialLoading } = useSelector(state => state[entity]);

  if (initialLoading === LOADING) return <Spinner wrapperClassName="pt-20" />;
  if (initialLoading === REJECTED) return <ErrorPlug />;

  return <div>{children}</div>;
};

ComponentInitialStatus.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  entity: PropTypes.string.isRequired,
};

export default ComponentInitialStatus;
