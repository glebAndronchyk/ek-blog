import PropTypes from 'prop-types';

const TextLength = props => {
  const { currentLength, maxLength } = props;

  return <span className="my-2">{`${currentLength} / ${maxLength}`}</span>;
};

TextLength.propTypes = {
  currentLength: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default TextLength;
