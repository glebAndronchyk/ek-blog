import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Form from 'features/ui/form/Form';
import SuccessWindow from 'features/ui/successWindow/SuccessWindow';
import View from 'features/registration/registrationForm/View';
import ErrorPlug from 'features/ui/errorPlug/ErrorPlug';
import { transformRegistrationFormData } from 'helpers/dataTransformers';
import { tryToRegister } from 'redux/slices/userSlice';
import { modalClosed } from 'redux/slices/modalSlice';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      passConfirm: '',
      fullName: '',
      age: '',
    },
  });
  const { isAuth, error, loading } = useSelector(state => state.user);
  const { status } = error;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(modalClosed());
      reset();
    };
  }, []);

  const onSubmit = data => {
    dispatch(tryToRegister(transformRegistrationFormData(data)));
  };

  if (error && status !== 400) return <ErrorPlug />;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-h-screen relative rounded-none
                 lg:max-w-[1024px] lg:h-auto lg:rounded-[20px] lg:py-20 lg:min-h-[70%]"
    >
      {isAuth ? (
        <SuccessWindow />
      ) : (
        <View
          register={register}
          watch={watch}
          errors={errors}
          axiosError={error}
          loading={loading}
        />
      )}
    </Form>
  );
};

export default RegistrationForm;
