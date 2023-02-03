import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const ProtectedRoute = props => {
  const { children } = props;
  const { isAuth } = useSelector(state => state.user);

  return isAuth ? (
    <Navigate
      to="/"
      replace
    />
  ) : (
    children
  );
};

ProtectedRoute.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object,
};

export default ProtectedRoute;
