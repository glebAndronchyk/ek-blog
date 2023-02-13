import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Locked = props => {
  const { label } = props;

  return (
    <>
      <FontAwesomeIcon icon="fa-solid fa-lock" /> Login or register in order to create new {label}
    </>
  );
};

Locked.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Locked;
