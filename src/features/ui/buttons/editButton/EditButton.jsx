import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EditButton = props => {
  const { handleClick } = props;

  return (
    <button
      type="button"
      className="duration-300 rounded-full w-[30px] h-[30px] bg-emerald-600 hover:bg-emerald-400"
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon="fa-solid fa-pen"
        className="text-lg text-black"
      />
    </button>
  );
};

export default EditButton;

EditButton.propTypes = {
  handleClick: PropTypes.func,
};
