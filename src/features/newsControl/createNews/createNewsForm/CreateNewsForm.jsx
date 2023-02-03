import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Form from 'features/ui/form/Form';
import InputError from 'features/ui/inputs/inputError/InputError';
import { transformDataForPOST, transformDataForPATCH } from 'helpers/dataTransformers';
import InputErrorMessage from 'features/ui/inputs/inputError/inputErrorMessage/InputErrorMessage';
import FormSubmitButton from 'features/ui/buttons/formSubmitButton/FormSubmitButton';
import { tryToEditPost, tryToCreatePost, userActionLoadingReseted } from 'redux/slices/postsListSlice';
import { tryToEditAnnouncement, tryToCreateAnnouncement } from 'redux/slices/announcementsListSlice';
import { modalClosed } from 'redux/slices/modalSlice';
import { LOADING, REJECTED } from 'helpers/loadingStatus';

const userActions = {
  posts: {
    editItem: tryToEditPost,
    createItem: tryToCreatePost,
  },
  announcements: {
    editItem: tryToEditAnnouncement,
    createItem: tryToCreateAnnouncement,
  },
};

const CreateNewsForm = () => {
  const { modalConfiguration } = useSelector(state => state.modal);
  const { entity, name, id, title, body, createdAt } = modalConfiguration;
  const { userActionLoading } = useSelector(state => state[entity]);
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
  const inputTitle = useWatch({
    control,
    name: 'title',
  });
  const dispatch = useDispatch();
  const disabledCondition = inputTitle === title && textareaBody === body;
  const announcementsCondition = entity === 'announcements';
  const minTextAreaLength = announcementsCondition ? 30 : 100;
  const maxTextAreaLength = announcementsCondition ? 400 : 10_000;
  const label = `${title || body ? 'Edit' : 'Create'} ${name}`;

  useEffect(() => {
    dispatch(userActionLoadingReseted());
  }, []);

  const onSubmit = data => {
    if (title || body) {
      return dispatch(userActions[entity].editItem([transformDataForPATCH(data, createdAt, 'posts'), id])).then(
        resp => {
          return !resp.error ? dispatch(modalClosed()) : null;
        },
      );
    }

    return dispatch(userActions[entity].createItem(transformDataForPOST(data))).then(resp => {
      return !resp.error ? dispatch(modalClosed()) : null;
    });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[800px] w-full py-2"
    >
      <h3 className="text-2xl font-code text-black mb-2">{label}</h3>
      <span className="text-black font-inter font-[600] underline text-lg mb-2">Title</span>
      <input
        type="text"
        className="form-input"
        placeholder={`Enter your future ${name} title`}
        disabled={userActionLoading === LOADING}
        {...register('title', {
          maxLength: {
            value: 30,
            message: `Max title length is 30`,
          },
          required: 'Title is required',
        })}
      />
      <InputError
        errors={errors}
        name="title"
      />
      <span className="text-black font-inter font-[600] underline text-lg my-2">Body</span>
      <textarea
        className="text-area"
        placeholder="Write your information here(10 000 symbols available)"
        maxLength={maxTextAreaLength}
        disabled={userActionLoading === LOADING}
        {...register('body', {
          minLength: {
            value: minTextAreaLength,
            message: `${name} must be at least ${minTextAreaLength} symbols`,
          },
          required: 'Body is required',
        })}
      />
      <InputError
        errors={errors}
        name="body"
      />
      <span className="my-2">{`${textareaBody.length} / ${maxTextAreaLength}`}</span>
      <FormSubmitButton
        disabled={disabledCondition}
        label={label}
        loadingStatus={userActionLoading}
      />
      {userActionLoading === REJECTED && <InputErrorMessage>Something went wrong try again later</InputErrorMessage>}
    </Form>
  );
};

export default CreateNewsForm;
