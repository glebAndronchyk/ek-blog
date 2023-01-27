import PropTypes from 'prop-types';
import classNames from 'classnames';

import InputError from 'features/ui/inputError/InputError';

const FormInput = props => {
  const { className, placeholder, type, register, label, options, errors, watch, value } = props;

  const inputClassName = classNames(className, { 'form-input': type !== 'radio' });
  return (
    <>
      <input
        type={type}
        min={1}
        value={value}
        placeholder={placeholder}
        className={inputClassName}
        {...register(
          label,
          label === 'passConfirm'
            ? {
                ...options,
                validate: valValue => {
                  if (watch('password') !== valValue) {
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
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object.isRequired,
  value: PropTypes.string,
};

export default FormInput;
