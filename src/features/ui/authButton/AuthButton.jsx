import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'features/ui/button/Button';
import { LOADING } from 'helpers/loadingStatus';
import ButtonSpinner from 'features/ui/buttonSpinner/ButtonSpinner';

const AuthButton = props => {
  const { entity, label } = props;
  const { loading } = useSelector(state => state[entity]);

  const loadingCondition = loading === LOADING;
  const insideContent = loadingCondition ? <ButtonSpinner /> : <span>{label}</span>;

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

AuthButton.propTypes = {
  entity: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default AuthButton;
