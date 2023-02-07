import PropTypes from 'prop-types';
import { useForm, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import { maxlengthContentEditable } from 'maxlength-contenteditable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import { tryToCreateComment } from 'redux/slices/commentsSlice';
import { transformDataForComments } from 'helpers/dataTransformers';

const CreateCommentForm = props => {
  const { postId } = props;
  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues: {
      body: '',
    },
  });
  const textArea = useWatch({
    name: 'body',
    control,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    maxlengthContentEditable();
  }, []);

  const onSubmit = data => {
    dispatch(tryToCreateComment(transformDataForComments(data, +postId)));
  };

  const inputHandler = event => {
    setValue('body', event.currentTarget.textContent, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full border-2 flex rounded-[20px] py-2 mb-4">
        <div
          className="max-h-[200px] max-w-[90%] w-full p-2 text-justify overflow-x-hidden overflow-y-auto focus-visible:outline-0"
          {...register('body')}
          contentEditable
          data-max-length={600}
          onInput={inputHandler}
        />
        <div className="flex justify-center items-center max-w-[10%] w-full flex-col border-l-2">
          <button
            type="submit"
            className="bg-white text-blue-100 text-xl hover:text-app-red"
            disabled={textArea.length === 0}
          >
            <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
          </button>
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
