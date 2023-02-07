import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';

import avatars from 'helpers/avatars';
import useNewsItemData from 'hooks/useNewsItemData';
import CommentsController from 'features/ui/commentsController/CommentsController';
import { tryToEditComment } from 'redux/slices/commentsSlice';
import { transformDataForCommentsPATCH } from 'helpers/dataTransformers';

const CommentsItem = props => {
  const { itemData, id, creatorID } = props;
  const { createdAt, isUpdated, body, currentUserID, isAuth, userFullName } = useNewsItemData(itemData);
  const [isEditable, setIsEditable] = useState(false);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      body,
    },
  });
  const dispatch = useDispatch();
  const currentTextAreaContent = useWatch({
    name: 'body',
    control,
  });

  const onSubmit = data => {
    setIsEditable(false);
    if (currentTextAreaContent === body) {
      return null;
    }

    return dispatch(tryToEditComment([transformDataForCommentsPATCH(data), id]));
  };

  return (
    <div className="relative flex justify-between mb-4 items-center">
      <img
        src={avatars[0]}
        alt="profileImage"
        className="w-[50px] h-[50px] mr-4"
      />
      <div className="w-full">
        <span className="block mb-[2px] text-lg">{userFullName}</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextareaAutosize
            {...register('body')}
            className="rounded-[20px] border-2 p-2 text-lg break-all w-full bg-gray-50"
            disabled={!isEditable}
            maxRows={10}
            maxLength={600}
          />
          {isAuth && currentUserID === creatorID && (
            <CommentsController
              modalConfiguration={{ entity: 'comments', id }}
              configuration={{ isEditable, setIsEditable, currentTextAreaContent }}
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
    isUpdated: PropTypes.bool.isRequired,
  }),
  id: PropTypes.number.isRequired,
  creatorID: PropTypes.number.isRequired,
};

export default CommentsItem;
