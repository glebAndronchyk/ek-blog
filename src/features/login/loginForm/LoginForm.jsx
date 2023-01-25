import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { tryToLogin } from 'redux/slices/userSlice';
import { modalClosed } from 'redux/slices/modalSlice';
import FormInput from 'features/ui/formInput/FormInput';
import InputError from 'features/inputError/InputError';
import ErrorPlug from 'features/ui/errorPlug/ErrorPlug';
import Form from 'features/ui/form/Form';
import AuthButton from 'features/ui/authButton/AuthButton';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: 'onSubmit', defaultValues: { email: '', password: '' } });

  const { isAuth, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(modalClosed());
    }
  }, [isAuth]);

  const onSubmit = data => {
    dispatch(tryToLogin(data));
  };

  if (error && error !== 400) return ErrorPlug;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="w-2/6"
    >
      <h3 className="font-code text-3xl text-black mb-3">Hello World!</h3>
      <span className="font-lato font-[600] text-gray-300 text-base mb-6">Login with your details</span>
      <FormInput
        className="mb-2"
        placeholder="Your email"
        type="email"
        register={register}
        label="email"
        options={{
          pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Invalid email' },
          minLength: { value: 10, message: 'Minimum 10 symbols' },
          maxLength: { value: 32, message: 'Maximum 32 symbols' },
          required: 'This is required input',
        }}
      />
      <InputError
        errors={errors}
        axiosError={error}
        name="email"
      />
      <FormInput
        className="mb-2"
        placeholder="Your password"
        type="password"
        register={register}
        label="password"
        options={{
          minLength: { value: 10, message: 'Minimum 10 symbols' },
          maxLength: { value: 64, message: 'Maximum 64 symbols' },
          required: 'This is required input',
        }}
      />
      <InputError
        axiosError={error}
        errors={errors}
        name="password"
      />
      <AuthButton
        label="Login"
        entity="user"
      />
    </Form>
  );
};
export default LoginForm;
