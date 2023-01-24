import PropTypes from 'prop-types';

import { ErrorMessage } from '@hookform/error-message';
import InputErrorMessage from '../inputErrorMessage/InputErrorMessage';

const InputError = props => {
  const { errors, name, axiosError } = props;
  const errorCondition = axiosError && axiosError === 400 && Object.keys(errors).length === 0;

  const renderErrorWithMessage = info => {
    const { message } = info;
    return <InputErrorMessage>{message}</InputErrorMessage>;
  };

  return errorCondition ? (
    <InputErrorMessage>This can be incorrect</InputErrorMessage>
  ) : (
    <ErrorMessage
      errors={errors}
      name={name}
      render={renderErrorWithMessage}
    />
  );
};

InputError.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  axiosError: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  name: PropTypes.string.isRequired,
};

export default InputError;
