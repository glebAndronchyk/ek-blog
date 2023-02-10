import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const View = props => {
  const { label } = props;

  return (
    <>
      <FontAwesomeIcon icon="fa-solid fa-lock" /> Login or register in order to create new {label}
    </>
  );
};

View.propTypes = {
  label: PropTypes.string.isRequired,
};

export default View;
