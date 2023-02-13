import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { modalOpened } from 'redux/slices/modalSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DeleteItem = props => {
  const { modalConfiguration } = props;
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(modalOpened({ name: 'Confirmation', modalConfiguration }));
  };

  return (
    <button
      type="button"
      className="duration-300 rounded-full w-[30px] h-[30px] bg-app-red hover:bg-[#DE8193]"
      onClick={openModal}
    >
      <FontAwesomeIcon
        icon="fa-solid fa-trash-can"
        className="text-lg text-black"
      />
    </button>
  );
};

DeleteItem.propTypes = {
  modalConfiguration: PropTypes.exact({
    id: PropTypes.number,
    entity: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default DeleteItem;
