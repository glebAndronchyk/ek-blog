import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { modalOpened } from 'redux/slices/modalSlice';

const EditItem = props => {
  const dispatch = useDispatch();
  const { configuration } = props;

  const handleClick = () => {
    dispatch(modalOpened({ name: 'CreateNewsForm', configuration }));
  };

  return (
    <button
      type="button"
      className="duration-300 rounded-full w-[30px] h-[30px] bg-app-red bg-emerald-600 hover:bg-emerald-400"
      onClick={handleClick}
    >
      Edit
    </button>
  );
};

EditItem.propTypes = {
  configuration: PropTypes.exact({
    id: PropTypes.number.isRequired,
    entity: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditItem;
