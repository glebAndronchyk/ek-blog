import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Form from 'features/ui/form/Form';
import InputError from 'features/ui/inputError/InputError';
import { transformDataForPATCH } from 'helpers/dataTransformers';
import InputErrorMessage from 'features/ui/inputError/inputErrorMessage/InputErrorMessage';
import FormSubmitButton from 'features/ui/formSubmitButton/FormSubmitButton';
import { tryToEditNews } from 'redux/slices/postsListSlice';
import { modalClosed } from 'redux/slices/modalSlice';
import { LOADING, REJECTED } from 'helpers/loadingStatus';

const EditNewsForm = () => {
  const { modalConfiguration } = useSelector(state => state.modal);
  const { entity, id, title, body, createdAt } = modalConfiguration;
  const { userActionLoading } = useSelector(state => state[entity]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      editTitle: title,
      editBody: body,
    },
  });
  const editBody = useWatch({
    control,
    name: 'editBody',
  });
  const editTitle = useWatch({
    control,
    name: 'editTitle',
  });
  const dispatch = useDispatch();
  const disabledCondition = editTitle === title && editBody === body;

  const onSubmit = data => {
    return dispatch(tryToEditNews([transformDataForPATCH(data, createdAt), id])).then(resp => {
      return !resp.error ? dispatch(modalClosed()) : null;
    });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[800px] w-full py-2"
    >
      <h3 className="text-2xl font-code text-black mb-2">Edit Post</h3>
      <span className="text-black font-inter font-[600] underline text-lg mb-2">Title</span>
      <input
        type="text"
        className="form-input"
        placeholder="Enter your future post title"
        disabled={userActionLoading === LOADING}
        {...register('editTitle', {
          maxLength: {
            value: 30,
            message: 'Max title length is 30',
          },
          required: 'Title is required',
        })}
      />
      <InputError
        errors={errors}
        name="editTitle"
      />
      <span className="text-black font-inter font-[600] underline text-lg my-2">Body</span>
      <textarea
        className="text-area"
        placeholder="Write your information here(10 000 symbols available)"
        maxLength={10000}
        disabled={userActionLoading === LOADING}
        {...register('editBody', {
          minLength: {
            value: 100,
            message: 'Post must be at least 100 symbols',
          },
          required: 'Body is required',
        })}
      />
      <InputError
        errors={errors}
        name="editBody"
      />
      <span className="my-2">{editBody.length} / 10000</span>
      <FormSubmitButton
        disabled={disabledCondition}
        label="Edit Post"
        loadingStatus={userActionLoading}
      />
      {userActionLoading === REJECTED && <InputErrorMessage>Something went wrong try again later</InputErrorMessage>}
    </Form>
  );
};

export default EditNewsForm;
