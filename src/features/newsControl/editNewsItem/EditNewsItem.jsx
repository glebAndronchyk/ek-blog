import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { modalOpened } from 'redux/slices/modalSlice';
import EditButton from 'features/ui/buttons/editButton/EditButton';
import SubmitCommentsChangesButton from 'features/ui/buttons/submitCommentsChangesButton/SubmitCommentsChangesButton';

const EditItem = props => {
  const { modalConfiguration, configuration } = props;
  const { isEditable, setIsEditable } = configuration;
  const dispatch = useDispatch();

  const handleClickOnNewsItem = () => {
    dispatch(modalOpened({ name: 'CreateNewsForm', modalConfiguration }));
  };

  const handleClickOnCommentsItem = () => {
    setIsEditable(true);
  };

  return (
    <span>
      {isEditable ? (
        <SubmitCommentsChangesButton />
      ) : (
        <EditButton
          handleClickOnCommentsItem={handleClickOnCommentsItem}
          handleClickOnNewsItem={handleClickOnNewsItem}
          configuration={configuration}
        />
      )}
    </span>
  );
};

EditItem.propTypes = {
  modalConfiguration: PropTypes.exact({
    id: PropTypes.number,
    entity: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    name: PropTypes.string,
  }),
  configuration: PropTypes.exact({
    isEditable: PropTypes.bool,
    setIsEditable: PropTypes.func,
  }),
};

export default EditItem;
