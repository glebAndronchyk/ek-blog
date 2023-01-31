import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { modalOpened } from 'redux/slices/modalSlice';

const DeleteItem = props => {
  const { configuration } = props;
  const dispatch = useDispatch();

  const clickHandler = () => {
    return dispatch(modalOpened({ name: 'Confirmation', configuration }));
  };

  return (
    <button
      type="button"
      className="rounded-full w-[30px] h-[30px] bg-app-red"
      onClick={clickHandler}
    >
      X
    </button>
  );
};

DeleteItem.propTypes = {
  configuration: PropTypes.exact({
    id: PropTypes.number.isRequired,
    entity: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeleteItem;
