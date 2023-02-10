import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import classNames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';

import useNewsItemData from 'hooks/useNewsItemData';
import CommentsController from 'features/news/posts/postComments/commentsControl/commentsController/CommentsController';
import getDateInCorrectFormat from 'helpers/getDateInCorrectFormat';
import { getUserDataFromStorage } from 'helpers/localStorage';
import { REJECTED } from 'helpers/loadingStatus';
import avatars from 'helpers/avatars';
import useSingleCommentEditState from 'hooks/useSingleCommentEditState';

const CommentsItem = props => {
  const { itemData, id, creatorID } = props;
  const {
    createdAt, //
    isUpdated,
    body,
    currentUserID,
    isAuth,
    userFullName,
    creatorAvatar,
  } = useNewsItemData(itemData);
  const currentUserAvatar = getUserDataFromStorage()?.avatar;
  const [isEditable, setIsEditable] = useState(false);
  const [localFullName] = useState(userFullName);
  const [localCurrentUserAvatar] = useState(currentUserAvatar);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      body,
    },
  });
  const { ref, ...rest } = register('body');
  const textAreaRef = useRef(null);
  const currentTextAreaContent = useWatch({
    name: 'body',
    control,
  });
  const { currentItemUserActionLoading, localIsUpdated, updateCommentContent } = useSingleCommentEditState(id);
  const textAreaClassName = classNames(
    'rounded-[20px] border-2 border-gray-100 p-2 text-lg break-all w-full bg-gray-50 resize-none',
    {
      'border-app-red': currentItemUserActionLoading === REJECTED,
    },
  );

  useEffect(() => {
    if (isEditable) {
      textAreaRef.current.focus();
    }
  }, [isEditable]);

  const onEditChecker = () => {
    if (isUpdated || localIsUpdated) return 'Edited';
    return null;
  };

  const avatarChecker = () => {
    if (currentUserID === creatorID) {
      return currentUserAvatar;
    }
    if (!creatorAvatar && !localCurrentUserAvatar) return avatars[0];
    return creatorAvatar || localCurrentUserAvatar;
  };

  const onSubmit = data => {
    setIsEditable(false);
    if (currentTextAreaContent === body) {
      return null;
    }
    return updateCommentContent(data);
  };

  return (
    <div className="relative flex justify-between mb-4 items-center">
      <img
        src={avatarChecker()}
        alt="profileImage"
        className="w-[50px] h-[50px] mr-4"
      />
      <div className="w-full">
        <div className="flex items-center mb-[2px]">
          <span className="block text-lg mr-4">{localFullName}</span>
          <span className="mr-4 text-sm text-gray-100">{getDateInCorrectFormat(createdAt)}</span>
          <span className="mr-4 text-sm text-gray-100">{onEditChecker()}</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextareaAutosize
            {...rest}
            ref={e => {
              ref(e);
              textAreaRef.current = e;
            }}
            name="body"
            className={textAreaClassName}
            disabled={!isEditable}
            maxRows={40}
            maxLength={600}
          />
          {isAuth && currentUserID === creatorID && (
            <CommentsController
              modalConfiguration={{ entity: 'comments', id }}
              configuration={{ isEditable, setIsEditable, currentTextAreaContent, currentItemUserActionLoading }}
            />
          )}
        </form>
      </div>
    </div>
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
