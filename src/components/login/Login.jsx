import { useSelector } from 'react-redux';
import classNames from 'classnames';

import LoginForm from '../loginForm/LoginForm';

const Login = () => {
  const { isShown } = useSelector(state => state.login);
  const className = classNames({ hidden: !isShown });

  return (
    <div className={className}>
      <LoginForm />
    </div>
  );
};

export default Login;
