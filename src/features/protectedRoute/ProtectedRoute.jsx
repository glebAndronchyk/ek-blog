import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = props => {
  const { onLoginAccess } = props;

  const { isAuth } = useSelector(state => state.user);

  if (onLoginAccess) {
    return isAuth ? <Outlet /> : <Navigate to="/" />;
  }

  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

ProtectedRoute.propTypes = {
  onLoginAccess: PropTypes.bool,
};

export default ProtectedRoute;
