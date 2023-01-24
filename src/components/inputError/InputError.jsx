import PropTypes, { bool, number } from 'prop-types';
import { ErrorMessage } from '@hookform/error-message';

const InputError = props => {
  const { errors, name, axiosError } = props;
  const errorCondition = axiosError && axiosError === 400 && Object.keys(errors).length === 0;

  return errorCondition ? (
    <span>reject</span>
  ) : (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <span>{message}</span>}
    />
  );
};

InputError.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  axiosError: PropTypes.oneOfType([bool, number]),
  name: PropTypes.string.isRequired,
};

export default InputError;
