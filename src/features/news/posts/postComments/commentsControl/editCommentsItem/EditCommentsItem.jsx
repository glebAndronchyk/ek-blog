import PropTypes from 'prop-types';

import SubmitCommentsChangesButton from 'features/news/posts/postComments/createCommentForm/submitCommentsChangesButton/SubmitCommentsChangesButton';
import EditButton from 'features/ui/buttons/editButton/EditButton';

const EditCommentsItem = props => {
  const { configuration } = props;
  const { isEditable, setIsEditable, currentTextAreaContent, currentItemUserActionLoading } = configuration;

  const handleClick = () => {
    setIsEditable(true);
  };

  return (
    <span>
      {isEditable ? (
        <SubmitCommentsChangesButton currentTextAreaContent={currentTextAreaContent} />
      ) : (
        <EditButton
          handleClick={handleClick}
          currentItemUserActionLoading={currentItemUserActionLoading}
        />
      )}
    </span>
  );
};

EditCommentsItem.propTypes = {
  configuration: PropTypes.exact({
    isEditable: PropTypes.bool,
    setIsEditable: PropTypes.func,
    currentTextAreaContent: PropTypes.string,
    currentItemUserActionLoading: PropTypes.string,
  }),
};

export default EditCommentsItem;
