import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Form from 'features/ui/form/Form';
import FormInput from 'features/ui/formInput/FormInput';
import InputError from 'features/ui/inputError/InputError';
import { transformDataForPOST } from 'helpers/dataTransformers';
import InputErrorMessage from 'features/ui/inputError/inputErrorMessage/InputErrorMessage';
import FormSubmitButton from 'features/ui/formSubmitButton/FormSubmitButton';
import { tryToEditNews, tryToPostNews } from 'redux/slices/postsListSlice';
import { modalClosed } from 'redux/slices/modalSlice';
import { LOADING, REJECTED } from 'helpers/loadingStatus';

const CreateNewsForm = () => {
  const { modalConfiguration } = useSelector(state => state.modal);
  const { entity, id, title, body } = modalConfiguration;
  const { postingLoading } = useSelector(state => state[entity]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      title: title || '',
      body: body || '',
    },
  });
  const textareaBody = useWatch({
    control,
    name: 'body',
  });
  const dispatch = useDispatch();
  const onEditChecking = title || body;

  const onSubmit = data => {
    if (onEditChecking) {
      return dispatch(tryToEditNews([transformDataForPOST(data), id])).then(resp => {
        return !resp.error ? dispatch(modalClosed()) : null;
      });
    }

    return dispatch(tryToPostNews(transformDataForPOST(data))).then(resp => {
      return !resp.error ? dispatch(modalClosed()) : null;
    });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[800px] w-full py-2"
    >
      <h3 className="text-2xl font-code text-black mb-2">Create Post</h3>
      <span className="text-black font-inter font-[600] underline text-lg mb-2">Title</span>
      <FormInput
        register={register}
        errors={errors}
        className="test"
        placeholder="Enter your future post title"
        disabled={postingLoading === LOADING}
        type="text"
        label="title"
        options={{
          maxLength: {
            value: 30,
            message: 'Max title length is 30',
          },
          required: 'Title is required',
        }}
      />
      <span className="text-black font-inter font-[600] underline text-lg my-2">Body</span>
      <textarea
        className="text-area"
        placeholder="Write your information here(10 000 symbols available)"
        maxLength={10000}
        disabled={postingLoading === LOADING}
        {...register('body', {
          minLength: {
            value: 100,
            message: 'Post must be at least 100 symbols',
          },
          required: 'Body is required',
        })}
      />
      <InputError
        errors={errors}
        name="body"
      />
      <span className="my-2">{textareaBody.length} / 10000</span>
      <FormSubmitButton
        label={`${onEditChecking ? 'Edit' : 'Create'} Post`}
        loadingStatus={postingLoading}
      />
      {postingLoading === REJECTED && <InputErrorMessage>Something went wrong try again later</InputErrorMessage>}
    </Form>
  );
};

export default CreateNewsForm;
