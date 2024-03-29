import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { IDLE, LOADING, REJECTED } from 'helpers/loadingStatus';
import { transformDataForCommentsPATCH } from 'helpers/dataTransformers';
import { commentContentEdited } from 'redux/slices/commentsSlice';
import { editComment } from 'services/commentsService';

const useSingleCommentEditState = id => {
  const [currentItemUserActionLoading, setCurrentItemUserActionLoading] = useState(IDLE);
  const [localIsUpdated, setLocalIsUpdated] = useState(false);
  const dispatch = useDispatch();

  const updateCommentContent = async editedData => {
    try {
      setCurrentItemUserActionLoading(LOADING);
      const response = await editComment(transformDataForCommentsPATCH(editedData), id);
      dispatch(commentContentEdited(response));
      setCurrentItemUserActionLoading(IDLE);
      setLocalIsUpdated(true);
    } catch {
      setCurrentItemUserActionLoading(REJECTED);
      setLocalIsUpdated(false);
    }
  };

  return {
    currentItemUserActionLoading,
    updateCommentContent,
    localIsUpdated,
  };
};

export default useSingleCommentEditState;
