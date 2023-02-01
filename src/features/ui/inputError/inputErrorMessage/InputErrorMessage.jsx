import PropTypes from 'prop-types';

const InputErrorMessage = props => {
  const { children } = props;
  return <span className="text-app-red mb-2">{children}</span>;
};

InputErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
};

export default InputErrorMessage;
