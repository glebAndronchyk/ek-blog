import PropTypes from 'prop-types';
import InputError from 'features/ui/inputError/InputError';

const FormInput = props => {
  const { className, placeholder, type, register, label, options, errors, watch } = props;
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`form-input ${className}`}
        {...register(
          label,
          label === 'passConfirm'
            ? {
                ...options,
                validate: value => {
                  if (watch('password') !== value) {
                    return 'Passwords do not match';
                  }
                  return null;
                },
              }
            : options,
        )}
      />
      <InputError
        errors={errors}
        name={label}
      />
    </>
  );
};

FormInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object.isRequired,
};

export default FormInput;
