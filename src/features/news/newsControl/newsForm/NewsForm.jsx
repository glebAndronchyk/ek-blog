import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Form from 'features/ui/form/Form';
import InputError from 'features/ui/inputs/inputError/InputError';
import FormSubmitButton from 'features/ui/buttons/formSubmitButton/FormSubmitButton';
import TextArea from 'features/ui/textArea/TextArea';
import OnErrorMessage from 'features/news/newsControl/newsForm/onErrorMessgae/OnErrorMessage';
import TextLength from 'features/ui/textLength/TextLength';
import { tryToEditPost, tryToCreatePost, userActionLoadingReseted } from 'redux/slices/postsListSlice';
import { tryToEditAnnouncement, tryToCreateAnnouncement } from 'redux/slices/announcementsListSlice';
import { transformDataForPOST, transformDataForPATCH } from 'helpers/dataTransformers';
import { modalClosed } from 'redux/slices/modalSlice';
import { LOADING } from 'helpers/loadingStatus';

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

const NewsForm = () => {
  const { configuration } = useSelector(state => state.modal);
  const { entity, name, id, title, body, createdAt } = configuration;
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

  const onCreate = data => {
    dispatch(userActions[entity].createItem(transformDataForPOST(data))).then(resp => {
      return !resp.error ? dispatch(modalClosed()) : null;
    });
  };

  const onEdit = data => {
    dispatch(userActions[entity].editItem([transformDataForPATCH(data, createdAt, 'posts'), id])).then(resp => {
      return !resp.error ? dispatch(modalClosed()) : null;
    });
  };

  const onSubmit = data => {
    if (title || body) {
      return onEdit(data);
    }
    return onCreate(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full py-6 h-full rounded-none
                  md:max-w-[800px] md:w-full md:py-20 md:h-[80%] md:rounded-[20px]
                  2xl:h-[60%]"
      type="modal"
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
      <TextArea
        entity={entity}
        register={register}
        errors={errors}
        options={{
          minLength: {
            value: minTextAreaLength,
            message: `${name} must be at least ${minTextAreaLength} symbols`,
          },
          required: 'Body is required',
        }}
        placeholder="Write your information here(10 000 symbols available)"
        maxLength={maxTextAreaLength}
      />
      <TextLength
        currentLength={textareaBody.length}
        maxLength={maxTextAreaLength}
      />
      <FormSubmitButton
        disabled={disabledCondition}
        label={label}
        loadingStatus={userActionLoading}
      />
      <OnErrorMessage loading={userActionLoading} />
    </Form>
  );
};

export default NewsForm;
