import PropTypes from 'prop-types';

import DeleteItem from 'features/news/newsControl/deleteItem/DeleteItem';
import EditCommentsItem from 'features/news/posts/postComments/commentsControl/editCommentsItem/EditCommentsItem';
import { useSelector } from 'react-redux';

const CommentsController = props => {
  const { modalConfiguration, configuration, currentUserID, creatorID } = props;
  const { isAuth } = useSelector(state => state.user);
  const shownCondition = isAuth && creatorID === currentUserID;

  return (
    shownCondition && (
      <div className="flex justify-evenly absolute z-50 right-0 top-0 max-w-[100px] w-full pt-2">
        <EditCommentsItem configuration={configuration} />
        <DeleteItem modalConfiguration={modalConfiguration} />
      </div>
    )
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
    currentItemUserActionLoading: PropTypes.string,
  }),
  currentUserID: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  creatorID: PropTypes.number,
};

export default CommentsController;
