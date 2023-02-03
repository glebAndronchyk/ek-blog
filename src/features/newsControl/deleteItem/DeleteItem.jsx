import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { modalOpened } from 'redux/slices/modalSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DeleteItem = props => {
  const { configuration } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalOpened({ name: 'Confirmation', configuration }));
  };

  return (
    <button
      type="button"
      className="duration-300 rounded-full w-[30px] h-[30px] bg-app-red hover:bg-[#DE8193]"
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon="fa-solid fa-trash-can"
        className="text-lg text-black"
      />
    </button>
  );
};

DeleteItem.propTypes = {
  configuration: PropTypes.exact({
    id: PropTypes.number.isRequired,
    entity: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeleteItem;
