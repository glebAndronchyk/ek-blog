import PropTypes from 'prop-types';
import { useForm, useWatch } from 'react-hook-form';
import classNames from 'classnames';
import { useState, useRef, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import CommentsController from 'features/news/posts/postComments/commentsControl/commentsController/CommentsController';
import { REJECTED } from 'helpers/loadingStatus';

const CommentContentForm = props => {
  const { body, currentItemUserActionLoading, updateCommentContent, id, creatorID, currentUserID } = props;
  const [isEditable, setIsEditable] = useState(false);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      body,
    },
  });
  const { ref, ...rest } = register('body');
  const currentTextAreaContent = useWatch({
    name: 'body',
    control,
  });
  const textAreaRef = useRef(null);
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

  const onSubmit = data => {
    setIsEditable(false);
    if (currentTextAreaContent === body) {
      return null;
    }
    return updateCommentContent(data);
  };

  return (
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
      <CommentsController
        modalConfiguration={{ entity: 'comments', id }}
        configuration={{ isEditable, setIsEditable, currentTextAreaContent, currentItemUserActionLoading }}
        creatorID={creatorID}
        currentUserID={currentUserID}
      />
    </form>
  );
};

CommentContentForm.propTypes = {
  body: PropTypes.string.isRequired,
  currentItemUserActionLoading: PropTypes.string.isRequired,
  updateCommentContent: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  creatorID: PropTypes.number.isRequired,
  currentUserID: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
};

export default CommentContentForm;
