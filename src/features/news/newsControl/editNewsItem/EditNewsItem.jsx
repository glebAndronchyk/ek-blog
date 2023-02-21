import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { modalOpened } from 'redux/slices/modalSlice';
import EditButton from 'features/ui/buttons/editButton/EditButton';

const EditNewsItem = props => {
  const { modalConfiguration } = props;
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(modalOpened({ name: 'NewsForm', modalConfiguration }));
  };

  return <EditButton handleClick={openModal} />;
};

EditNewsItem.propTypes = {
  modalConfiguration: PropTypes.exact({
    id: PropTypes.number,
    entity: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    name: PropTypes.string,
    isSinglePost: PropTypes.bool,
  }),
};

export default EditNewsItem;
