import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Form from 'features/ui/form/Form';
import FormInput from 'features/ui/formInput/FormInput';
import InputError from 'features/ui/inputError/InputError';
import SubmitNewsButton from 'features/ui/submitNewsButton/SubmitNewsButton';
import { transformDataForPOST } from 'helpers/dataTransformers';
import { tryToPostNews } from 'redux/slices/postsListSlice';

const CreateNewsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    reValidateMode: 'onChange',
    defaultValues: { body: '' },
  });

  const textareaBody = useWatch({
    control,
    name: 'body',
  });
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(tryToPostNews(transformDataForPOST(data)));
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[1200px] w-full py-10"
    >
      <span>Title</span>
      <FormInput
        register={register}
        errors={errors}
        className="test"
        placeholder="Enter your future post title"
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
      <span>Body</span>
      <textarea
        className="w-3/4 h-[610px] min-h-[610px] max-h-[610px] rounded-3xl"
        placeholder="Write your information here(10 000 symbols available)"
        maxLength={10000}
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
      <span>{textareaBody.length} / 10000</span>
      <SubmitNewsButton />
    </Form>
  );
};

export default CreateNewsForm;
