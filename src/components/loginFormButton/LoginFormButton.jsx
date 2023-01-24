import { useSelector } from 'react-redux';

import Button from '../button/Button';
import { LOADING } from '../../helpers/loadingStatus';
import ButtonSpinner from '../buttonSpinner/ButtonSpinner';

const LoginFormButton = () => {
  const { loading } = useSelector(state => state.user);

  const loadingCondition = loading === LOADING;
  const insideContent = loadingCondition ? <ButtonSpinner /> : <span>Login</span>;

  return (
    <Button
      type="submit"
      className="auth-btn"
      disabled={loadingCondition}
    >
      {insideContent}
    </Button>
  );
};
export default LoginFormButton;
