import PropTypes from 'prop-types';
import { useState } from 'react';

import useNewsItemData from 'hooks/useNewsItemData';
import CommentData from 'features/news/posts/postComments/commentsItem/CommentData';
import AvatarImage from 'features/ui/avatarImage/AvatarImage';
import { getUserDataFromStorage } from 'helpers/localStorage';
import useSingleCommentEditState from 'hooks/useSingleCommentEditState';
import avatarChecker from 'helpers/avatarChecker';
import CommentContentForm from 'features/news/posts/postComments/commentsItem/CommentContentForm';

const CommentsItem = props => {
  const { itemData, id, creatorID } = props;
  const { createdAt, isUpdated, body, currentUserID, userFullName, creatorAvatar } = useNewsItemData(itemData);
  const currentUserAvatar = getUserDataFromStorage()?.avatar;
  const [localFullName] = useState(userFullName);
  const [localCurrentUserAvatar] = useState(currentUserAvatar);
  const itemAvatar = avatarChecker({
    currentUserID,
    creatorID,
    currentUserAvatar,
    creatorAvatar,
    localCurrentUserAvatar,
  });
  const { currentItemUserActionLoading, localIsUpdated, updateCommentContent } = useSingleCommentEditState(id);

  return (
    <li className="relative flex justify-between mb-4 items-center">
      <AvatarImage
        className="w-[50px] h-[50px] mr-4"
        src={itemAvatar}
      />
      <div className="w-full">
        <CommentData
          localFullName={localFullName}
          isUpdated={isUpdated}
          localIsUpdated={localIsUpdated}
          createdAt={createdAt}
        />
        <CommentContentForm
          body={body}
          updateCommentContent={updateCommentContent}
          id={id}
          currentItemUserActionLoading={currentItemUserActionLoading}
          creatorID={creatorID}
          currentUserID={currentUserID}
        />
      </div>
    </li>
  );
};

CommentsItem.propTypes = {
  itemData: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    userFullName: PropTypes.string.isRequired,
    creatorAvatar: PropTypes.string,
    isUpdated: PropTypes.bool.isRequired,
  }),
  id: PropTypes.number.isRequired,
  creatorID: PropTypes.number.isRequired,
};

export default CommentsItem;
