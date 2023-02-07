import PropTypes from 'prop-types';

import DeleteItem from 'features/newsControl/deleteItem/DeleteItem';
import EditCommentsItem from 'features/commentsControl/editCommentsItem/EditCommentsItem';

const CommentsController = props => {
  const { modalConfiguration, configuration } = props;

  return (
    <div className="flex justify-evenly absolute z-50 right-0 top-0 max-w-[100px] w-full pt-2">
      <EditCommentsItem configuration={configuration} />
      <DeleteItem modalConfiguration={modalConfiguration} />
    </div>
  );
};

CommentsController.propTypes = {
  modalConfiguration: PropTypes.exact({
    id: PropTypes.number,
    entity: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  configuration: PropTypes.exact({
    isEditable: PropTypes.bool,
    setIsEditable: PropTypes.func,
    currentTextAreaContent: PropTypes.string,
  }),
};

export default CommentsController;
