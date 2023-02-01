import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'features/ui/button/Button';
import { LOADING } from 'helpers/loadingStatus';
import ButtonSpinner from 'features/ui/buttonSpinner/ButtonSpinner';
import classNames from 'classnames';

const AuthButton = props => {
  const { label, className } = props;
  const { loading } = useSelector(state => state.user);

  const authButtonClassName = classNames('auth-btn', className);

  const loadingCondition = loading === LOADING;
  const insideContent = loadingCondition ? <ButtonSpinner /> : <span>{label}</span>;

  return (
    <Button
      type="submit"
      className={authButtonClassName}
      disabled={loadingCondition}
    >
      {insideContent}
    </Button>
  );
};

AuthButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default AuthButton;
