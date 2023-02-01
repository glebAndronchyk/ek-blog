import PropTypes from 'prop-types';

import Button from 'features/ui/button/Button';
import { LOADING } from 'helpers/loadingStatus';
import ButtonSpinner from 'features/ui/buttonSpinner/ButtonSpinner';
import classNames from 'classnames';

const FormSubmitButton = props => {
  const { label, className, loadingStatus, disabled } = props;

  const formSubmitButtonClassName = classNames('submit-btn', className);

  const loadingCondition = loadingStatus === LOADING;
  const insideContent = loadingCondition ? <ButtonSpinner /> : <span>{label}</span>;

  return (
    <Button
      type="submit"
      className={formSubmitButtonClassName}
      disabled={loadingCondition || disabled}
    >
      {insideContent}
    </Button>
  );
};

FormSubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  loadingStatus: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default FormSubmitButton;
