import PropTypes from 'prop-types';
import { useForm, useWatch } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';

import Spinner from 'features/ui/spinner/Spinner';
import TextLength from 'features/ui/textLength/TextLength';
import { tryToCreateComment } from 'redux/slices/commentsSlice';
import { transformDataForComments } from 'helpers/dataTransformers';
import { IDLE, LOADING, REJECTED } from 'helpers/loadingStatus';
import { useEffect } from 'react';

const CreateCommentForm = props => {
  const { postId } = props;
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      body: '',
    },
  });
  const textArea = useWatch({
    name: 'body',
    control,
  });
  const dispatch = useDispatch();
  const { userActionLoading } = useSelector(state => state.comments);
  const formWrapperClassName = classNames('w-full border-2 flex items-center rounded-[20px] mb-4 pl-4 box-border', {
    'border-app-red': userActionLoading === REJECTED,
  });

  useEffect(() => {
    if (isSubmitSuccessful && userActionLoading === IDLE) {
      reset({ body: '' });
    }
  }, [isSubmitSuccessful, userActionLoading]);

  const onSubmit = data => {
    dispatch(tryToCreateComment(transformDataForComments(data, +postId)));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={formWrapperClassName}>
        <TextareaAutosize
          className="h-full max-h-[200px] max-w-[90%] w-full py-2 text-justify
           overflow-x-hidden overflow-y-auto focus-visible:outline-0
            resize-none border-0 focus:ring-0"
          {...register('body')}
          disabled={userActionLoading === LOADING}
          maxRows={10}
          maxLength={600}
        />
        <div className="flex justify-center items-center max-w-[10%] w-full flex-col border-l-2">
          {userActionLoading === LOADING ? (
            <Spinner
              wrapperClassName="pt-2"
              size={15.5}
            />
          ) : (
            <button
              type="submit"
              className="bg-white text-blue-100 text-xl hover:text-app-red"
              disabled={textArea.length === 0}
            >
              <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
            </button>
          )}
          <TextLength
            currentLength={textArea.length}
            maxLength={600}
          />
        </div>
      </div>
    </form>
  );
};

CreateCommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default CreateCommentForm;
