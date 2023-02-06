import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import InputError from 'features/ui/inputs/inputError/InputError';
import { LOADING } from 'helpers/loadingStatus';

const TextArea = props => {
  const { entity, register, errors, maxLength, options, placeholder } = props;
  const { userActionLoading } = useSelector(state => state[entity]);

  return (
    <>
      <textarea
        className="text-area"
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={userActionLoading === LOADING}
        {...register('body', options)}
      />
      <InputError
        errors={errors}
        name="body"
      />
    </>
  );
};

TextArea.propTypes = {
  entity: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
  errors: PropTypes.shape({
    body: PropTypes.shape({
      message: PropTypes.string.isRequired,
      ref: PropTypes.instanceOf(Element).isRequired,
      type: PropTypes.string.isRequired,
    }),
    title: PropTypes.shape({
      message: PropTypes.string.isRequired,
      ref: PropTypes.instanceOf(Element).isRequired,
      type: PropTypes.string.isRequired,
    }),
  }),
  options: PropTypes.shape({
    minLength: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
    required: PropTypes.string.isRequired,
  }),
};

export default TextArea;
