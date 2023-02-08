import PropTypes from 'prop-types';
import { useForm, useWatch } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';

import { tryToCreateComment } from 'redux/slices/commentsSlice';
import { transformDataForComments } from 'helpers/dataTransformers';
import { LOADING } from 'helpers/loadingStatus';
import Spinner from 'features/ui/spinner/Spinner';

const CreateCommentForm = props => {
  const { postId } = props;
  const { register, handleSubmit, control } = useForm({
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

  const onSubmit = data => {
    dispatch(tryToCreateComment(transformDataForComments(data, +postId)));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full border-2 flex items-center rounded-[20px] mb-4 pl-4">
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
          <span>{textArea.length} / 600</span>
        </div>
      </div>
    </form>
  );
};

CreateCommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default CreateCommentForm;
