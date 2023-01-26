import PropTypes from 'prop-types';
import InputError from "features/inputError/InputError";

const FormInput = props => {
  const { className, placeholder, type, register, label, options, errors, axiosError } = props;
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`form-input ${className}`}
        {...register(label, options)}
      />
      <InputError
        errors={errors}
        axiosError={axiosError}
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
  label: PropTypes.string.isRequired,
  axiosError: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object.isRequired,
};

export default FormInput;
