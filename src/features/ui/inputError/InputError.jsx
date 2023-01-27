import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { ErrorMessage } from '@hookform/error-message';
import InputErrorMessage from 'features/ui/inputError/inputErrorMessage/InputErrorMessage';

const InputError = props => {
  const { errors, name } = props;
  const { error } = useSelector(state => state.user);
  const errorCondition = error && error === 400 && (errors === undefined || Object.keys(errors).length === 0);

  if (!errors) return null;

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
  errors: PropTypes.object,
  name: PropTypes.string.isRequired,
};

export default InputError;
